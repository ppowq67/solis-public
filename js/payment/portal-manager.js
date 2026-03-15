// Portal Manager - Handles Portal Statistics and UI

class PortalManager {
    constructor() {
        this.initialized = false;
        this.memberCount = 0;
        this.partnerCount = 0;
        this.scheduledCount = 0;
        this.initElements();
    }

    initElements() {
        this.membersValue = document.querySelector('[data-stat="members"] .portal-stat-value');
        this.partnersValue = document.querySelector('[data-stat="partners"] .portal-stat-value');
        this.scheduledValue = document.querySelector('[data-stat="scheduled"] .portal-stat-value');
        this.timeSavedValue = document.getElementById('timeSavedValue');
        this.viralScoreValue = document.getElementById('viralScoreValue');
    }

    async loadPortalStats() {
        try {
            // Try to load from the new portal stats endpoint with secure auth
            const response = await fetch(`${API_BASE_URL}/portal/stats`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.success && data.stats) {
                this.memberCount = data.stats.members || 0;
                this.partnerCount = data.stats.partners || 0;
                this.scheduledCount = data.stats.scheduled || 0;
                
                this.updateUI();
            }
        } catch (error) {
            console.error('Error loading portal stats:', error);
            // Fallback to loading just member count
            await this.loadMembersOnly();
        }
    }

    async loadMembersOnly() {
        try {
            const response = await fetch(`${API_BASE_URL}/portal/members`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.success && data.members) {
                this.memberCount = data.members.total || 0;
                this.updateUI();
            }
        } catch (error) {
            console.error('Error loading members count:', error);
        }
    }

    updateUI() {
        // Update member count
        if (this.membersValue) {
            this.membersValue.textContent = this.memberCount;
        }

        // Update partners count
        if (this.partnersValue) {
            this.partnersValue.textContent = this.partnerCount;
        }

        // Update scheduled count
        if (this.scheduledValue) {
            this.scheduledValue.textContent = this.scheduledCount;
        }

        // Update time saved (based on clips created)
        if (this.timeSavedValue) {
            const clipsCount = window.clipsStudio?.libraryItems?.length || 0;
            const timePerClip = 0.5; // 30 minutes per clip
            const totalHours = Math.round(clipsCount * timePerClip);
            this.timeSavedValue.textContent = totalHours + 'h';
        }

        // Update viral score (based on analytics data)
        if (this.viralScoreValue) {
            const analyticsData = window.analyticsManager?.analyticsData;
            const viralScore = analyticsData?.views > 0 ? Math.round((analyticsData.views / 1000) * 10) : 0;
            this.viralScoreValue.textContent = viralScore;
        }
    }

    async init() {
        if (this.initialized) return;
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.loadPortalStats());
        } else {
            await this.loadPortalStats();
        }
        
        this.initialized = true;
    }

    async refresh() {
        await this.loadPortalStats();
    }
}

// Initialize Portal Manager when page loads
window.addEventListener('DOMContentLoaded', () => {
    window.portalManager = new PortalManager();
    window.portalManager.init();
});

// Also initialize immediately if DOM is already loaded
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    window.portalManager = new PortalManager();
    window.portalManager.init();
}
