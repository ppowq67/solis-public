// Advanced Profile & Notifications System
// Integrates with existing menu.js for security and profile management
// SECURITY: XSS prevention, URL validation, input sanitization

console.log('profile-notifications.js loaded');

// ===== SECURITY UTILITIES =====
// HTML entity escaping for XSS prevention
function escapeHtml(text) {
    if (typeof text !== 'string') return '';
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', '/': '&#x2F;' };
    return text.replace(/[&<>"'\/]/g, char => map[char] || char);
}

// Validate URL is safe (only http/https, no javascript:, data:, etc.)
function isValidImageUrl(url) {
    if (typeof url !== 'string' || url.length === 0) return false;
    if (url.length > 2048) return false;
    try {
        const parsed = new URL(url);
        // Only allow http and https protocols
        if (!/^https?:$/.test(parsed.protocol)) return false;
        // Prevent known malicious patterns
        if (url.toLowerCase().includes('javascript:')) return false;
        if (url.toLowerCase().includes('data:')) return false;
        if (url.toLowerCase().includes('vbscript:')) return false;
        return true;
    } catch {
        return false;
    }
}

// Safe DOM text manipulation
function safeSetText(element, text) {
    if (element && typeof text === 'string') {
        element.textContent = text;
    }
}

// Safe DOM image manipulation
function safeSetImage(element, srcUrl, altText = '') {
    if (!element) return;
    if (!isValidImageUrl(srcUrl)) {
        console.warn('Invalid image URL');
        return;
    }
    
    // Create img tag safely
    const img = document.createElement('img');
    img.setAttribute('src', srcUrl);
    img.setAttribute('alt', escapeHtml(altText));
    img.style.cssText = 'width: 100%; height: 100%; object-fit: cover; border-radius: 50%;';
    
    // Clear old content
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    
    element.appendChild(img);
}

// Validate user object structure
function validateUserObject(userObj) {
    if (!userObj || typeof userObj !== 'object') return { valid: false };
    
    // User object is valid if it has at least an ID or email (minimum identifying info)
    // This is more lenient to handle various user object formats from different auth providers
    const hasId = userObj.id || userObj.user_id || userObj.sub;
    const hasIdentifier = userObj.email || userObj.name || userObj.displayName;
    
    // If has either ID or identifying info, it's a valid user object
    if (hasId || hasIdentifier) {
        return { valid: true, user: userObj };
    }
    
    return { valid: false };
}

// Notification system state
let notificationSystem = {
    unreadCount: 0,
    notifications: [],
    bellElement: null,
    profileElement: null,
    notificationsDropdown: null,
    profileDropdown: null,
    initialized: false
};

// Initialize the notification system
function initializeNotificationSystem() {
    if (notificationSystem.initialized) return;

    console.log('Initializing notification system...');

    // Get all required elements
    notificationSystem.bellElement = document.getElementById('bellBtn');
    notificationSystem.profileElement = document.getElementById('profileAvatarBtn');
    notificationSystem.notificationsDropdown = document.getElementById('notificationsDropdown');

    if (!notificationSystem.bellElement || !notificationSystem.profileElement) {
        console.warn('Required notification elements not found');
        return;
    }

    console.log('✅ Notification elements found');

    // Attach event listeners
    attachNotificationEventListeners();
    loadNotificationsFromStorage();
    syncProfileButton();
    notificationSystem.initialized = true;

    // Sync profile info once on initialization, DON'T poll continually
    syncProfileButton();
}

// Sync profile button to show Gmail icon for Google users
function syncProfileButton() {
    const profileAvatarBtn = document.getElementById('profileAvatarBtn');
    if (!profileAvatarBtn) return;

    let userObj = null;
    try {
        if (typeof window !== 'undefined' && window.currentUser) {
            userObj = window.currentUser;
        } else {
            const saved = localStorage.getItem('currentUser');
            if (saved) {
                // Validate JSON before parsing
                const trimmed = saved.trim();
                if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
                    userObj = JSON.parse(saved);
                }
            }
        }
    } catch (err) {
        console.error('Error syncing profile:', err);
        userObj = null;
    }

    // Validate user object - handle both local function and potential global override
    const validation = validateUserObject(userObj);
    if (!validation || !validation.valid) {
        console.warn('Invalid user object');
        return;
    }

    const user = validation.user;
    const authProvider = (user.auth_provider || '').toString().toLowerCase();
    const userAvatar = user.picture || user.avatar || null;

    // Gmail icon for Google OAuth users
    const gmailIcon = '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;"><rect width="24" height="24" fill="none"/><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#EA4335"/></svg>';

    // Clear old content
    while (profileAvatarBtn.firstChild) {
        profileAvatarBtn.removeChild(profileAvatarBtn.firstChild);
    }

    // Show Gmail icon for Google OAuth users
    if (authProvider.includes('google')) {
        console.log('Displaying Gmail icon for Google OAuth user');
        profileAvatarBtn.innerHTML = gmailIcon;
    } else if (userAvatar && typeof userAvatar === 'string') {
        // Validate avatar URL before using it
        if (isValidImageUrl(userAvatar)) {
            safeSetImage(profileAvatarBtn, userAvatar, 'User Avatar');
        } else {
            console.warn('Invalid avatar URL');
        }
    }
}

// Attach event listeners to notification UI
function attachNotificationEventListeners() {
    const bellBtn = notificationSystem.bellElement;
    const notifDropdown = notificationSystem.notificationsDropdown;

    // Bell button click
    bellBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = notifDropdown.classList.contains('open');
        closeAllDropdowns();
        if (!isOpen) {
            notifDropdown.classList.add('open');
            clearUnreadStatus();
        }
    });

    // Close on outside click
    document.addEventListener('click', closeAllDropdowns);

    // Mark as read link
    const markAsReadLink = document.getElementById('markAsRead');
    if (markAsReadLink) {
        markAsReadLink.addEventListener('click', (e) => {
            e.preventDefault();
            clearUnreadStatus();
        });
    }
}

// Close all open dropdowns
function closeAllDropdowns() {
    const notifDropdown = notificationSystem.notificationsDropdown;
    if (notifDropdown) notifDropdown.classList.remove('open');
}

// Load notifications from localStorage
function loadNotificationsFromStorage() {
    try {
        const stored = localStorage.getItem('notificationSystem');
        if (stored) {
            const data = JSON.parse(stored);
            notificationSystem.notifications = data.notifications || [];
            notificationSystem.unreadCount = data.unreadCount || 0;
            updateNotificationDisplay();
        }
    } catch (error) {
        console.error('Error loading notifications:', error);
    }
}

// Save notifications to localStorage
function saveNotificationsToStorage() {
    try {
        localStorage.setItem('notificationSystem', JSON.stringify({
            notifications: notificationSystem.notifications,
            unreadCount: notificationSystem.unreadCount
        }));
    } catch (error) {
        console.error('Error saving notifications:', error);
    }
}

// Add a new notification with input validation
function addNotification(notification) {
    // Validate input
    if (!notification || typeof notification !== 'object') {
        console.error('Invalid notification object');
        return null;
    }

    // Sanitize input strings
    const sanitizeString = (str, maxLen = 500) => {
        if (typeof str !== 'string') return '';
        return escapeHtml(str.substring(0, maxLen));
    };

    const defaultNotification = {
        id: Date.now(),
        title: sanitizeString(notification.title || 'Notification', 100),
        message: sanitizeString(notification.message || 'New notification', 500),
        icon: notification.icon || 'info',
        timestamp: notification.timestamp || new Date(),
        read: notification.read === true,
        ...notification
    };

    // Validate icon type is safe
    const validIcons = ['check', 'info', 'warning', 'error', 'default'];
    if (!validIcons.includes(defaultNotification.icon)) {
        defaultNotification.icon = 'default';
    }

    notificationSystem.notifications.unshift(defaultNotification);
    notificationSystem.unreadCount++;

    // Limit to 50 notifications
    if (notificationSystem.notifications.length > 50) {
        notificationSystem.notifications = notificationSystem.notifications.slice(0, 50);
    }

    saveNotificationsToStorage();
    updateNotificationDisplay();

    return defaultNotification;
}

// Show video generated notification
function showVideoGeneratedNotification(videoData = {}) {
    console.log('🎬 Showing video generated notification', videoData);

    const {
        videoTitle = 'Video Generated',
        videoUrl = '#',
        thumbnailUrl = null,
        duration = 0
    } = videoData;

    // Show overlay notification
    showVideoGeneratedOverlay(videoTitle, videoUrl);

    // Also add to notification list
    addNotification({
        title: 'Video Generated',
        message: `Your video "${videoTitle}" has been successfully created and is ready to download.`,
        icon: 'check',
        action: {
            label: 'View Video',
            url: videoUrl
        }
    });
}

// Show video generated overlay
function showVideoGeneratedOverlay(title = 'Video Ready!', actionUrl = '#') {
    const backdrop = document.getElementById('videoGeneratedBackdrop');
    const overlay = document.getElementById('videoGeneratedOverlay');

    if (!backdrop || !overlay) {
        console.warn('Video generated overlay elements not found');
        return;
    }

    // Update content
    const titleEl = overlay.querySelector('.video-generated-title');
    const messageEl = overlay.querySelector('.video-generated-message');
    const viewBtn = overlay.querySelector('[data-action="view"]');

    if (titleEl) titleEl.textContent = title;
    if (messageEl) messageEl.textContent = 'Your video has been successfully generated and is ready to download or share.';
    if (viewBtn) {
        viewBtn.onclick = () => {
            if (actionUrl !== '#') {
                window.open(actionUrl, '_blank');
            }
            hideVideoGeneratedOverlay();
        };
    }

    // Show overlay
    backdrop.classList.add('show');
    overlay.classList.add('show');

    // Auto-hide after 8 seconds
    setTimeout(hideVideoGeneratedOverlay, 8000);
}

// Hide video generated overlay
function hideVideoGeneratedOverlay() {
    const backdrop = document.getElementById('videoGeneratedBackdrop');
    const overlay = document.getElementById('videoGeneratedOverlay');

    if (backdrop) backdrop.classList.remove('show');
    if (overlay) overlay.classList.remove('show');
}

// Update notification display
function updateNotificationDisplay() {
    const bellBtn = notificationSystem.bellElement;
    if (!bellBtn) return;

    const hasUnread = notificationSystem.unreadCount > 0;

    if (hasUnread) {
        bellBtn.classList.add('has-unread');
    } else {
        bellBtn.classList.remove('has-unread');
    }

    // Update notifications list
    renderNotificationsList();
}

// Render notifications in dropdown with XSS prevention
function renderNotificationsList() {
    const container = document.getElementById('notificationsList');
    if (!container) return;

    // Clear entire container completely (removes hardcoded placeholder and all items)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Add notifications
    if (notificationSystem.notifications.length === 0) {
        const emptyDiv = document.createElement('div');
        emptyDiv.style.cssText = 'padding: 20px; text-align: center; color: #718096;';
        safeSetText(emptyDiv, 'No notifications');
        container.appendChild(emptyDiv);
        return;
    }

    notificationSystem.notifications.forEach(notif => {
        // Validate notification object
        if (!notif || typeof notif !== 'object') return;

        const item = document.createElement('div');
        item.className = 'notif-item';

        // Create icon safely
        const iconDiv = document.createElement('div');
        iconDiv.className = 'notif-icon';
        const svg = document.createElement('svg');
        svg.setAttribute('width', '18');
        svg.setAttribute('height', '18');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        svg.innerHTML = getNotificationIcon(notif.icon);
        iconDiv.appendChild(svg);

        // Create content safely
        const contentDiv = document.createElement('div');
        contentDiv.className = 'notif-content';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'notif-sender';
        safeSetText(titleDiv, notif.title);

        const messageDiv = document.createElement('div');
        messageDiv.className = 'notif-message';
        safeSetText(messageDiv, notif.message);

        const timeDiv = document.createElement('div');
        timeDiv.className = 'notif-time';
        safeSetText(timeDiv, formatTime(notif.timestamp));

        contentDiv.appendChild(titleDiv);
        contentDiv.appendChild(messageDiv);
        contentDiv.appendChild(timeDiv);

        item.appendChild(iconDiv);
        item.appendChild(contentDiv);
        container.appendChild(item);
    });
}

// Get notification icon SVG
function getNotificationIcon(iconType) {
    const icons = {
        'check': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
        'info': '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
        'warning': '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3.05h16.94a2 2 0 0 0 1.71-3.05L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
        'error': '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
        'default': '<circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path>'
    };
    return icons[iconType] || icons['default'];
}

// Clear unread status
function clearUnreadStatus() {
    notificationSystem.unreadCount = 0;
    notificationSystem.notifications.forEach(notif => notif.read = true);
    saveNotificationsToStorage();
    updateNotificationDisplay();
}

// Format timestamp
function formatTime(timestamp) {
    if (typeof timestamp === 'string') {
        timestamp = new Date(timestamp);
    }

    const now = new Date();
    const diff = now - timestamp;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;

    return timestamp.toLocaleDateString();
}

// Update profile information in dropdown with input validation
function updateProfileInfo() {
    const profileNameEl = document.getElementById('profileNameDisplay');
    const profilePlanEl = document.getElementById('profilePlanDisplay');
    const profileAvatarEl = document.getElementById('profileAvatarDisplay');

    let userObj = null;
    try {
        if (typeof window !== 'undefined' && window.currentUser) {
            userObj = window.currentUser;
        } else {
            const saved = localStorage.getItem('currentUser');
            if (saved) {
                const trimmed = saved.trim();
                if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
                    userObj = JSON.parse(saved);
                }
            }
        }
    } catch (err) {
        console.error('Error reading user data:', err);
        userObj = null;
    }

    // Validate user object - handle both local function and potential global override
    const validation = validateUserObject(userObj);
    if (!validation || !validation.valid) {
        console.warn('Invalid user object');
        return;
    }

    const user = validation.user;

    // Sanitize user data
    const userName = escapeHtml((user.name || user.displayName || user.email || 'User').toString().substring(0, 100));
    const userPlan = escapeHtml((user.tier || user.plan || 'Free Plan').toString().toUpperCase().substring(0, 50));
    const userAvatar = user.picture || user.avatar || null;

    // Update name
    if (profileNameEl) {
        safeSetText(profileNameEl, userName);
    }

    // Update plan
    if (profilePlanEl) {
        safeSetText(profilePlanEl, userPlan);
    }

    // Update avatar safely
    if (profileAvatarEl && userAvatar && typeof userAvatar === 'string') {
        if (isValidImageUrl(userAvatar)) {
            safeSetImage(profileAvatarEl, userAvatar, userName);
        }
    }
}

// Wait for DOM to be ready
function initWhenReady() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeNotificationSystem);
    } else {
        initializeNotificationSystem();
    }
}

// Start initialization
initWhenReady();

// Export for use in other scripts
window.notificationSystem = {
    add: addNotification,
    showVideoGenerated: showVideoGeneratedNotification,
    clearUnread: clearUnreadStatus,
    closeDropdowns: closeAllDropdowns
};
