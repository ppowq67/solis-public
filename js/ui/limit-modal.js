/**
 * Secure Limit Modal System
 * Shows upgrade modal when user hits generation limits
 * All limit checks are server-side - never trust client
 * Server enforces cooldown, this only displays remaining time
 */

const API_BASE = window.API_BASE_URL || 'https://api.solisai.video/api';

// Scoped state to prevent global pollution
const LimitModalState = {
    selectedPlanType: 'prime'
};

// Whitelist valid plans
const VALID_PLANS = ['basic', 'prime', 'elite'];

// Validate and sanitize numeric input
function validateSeconds(value) {
    const num = Number(value);
    if (!Number.isInteger(num) || num < 0) {
        return 30; // Safe default
    }
    return num;
}

async function checkGenerationLimit() {
    try {
        const response = await fetch(`${API_BASE}/user/check-limit`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to check limit');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}

function showLimitModal(limitData) {
    try {
        // Validate input structure
        if (!limitData || typeof limitData !== 'object') {
            console.error('[LimitModal] Invalid data structure');
            return;
        }
        
        const { used, limit, plan_type, last_video_date, cooldown_seconds, remaining_seconds } = limitData;
        
        // Validate and sanitize numeric inputs
        const safeUsed = Number.isInteger(used) ? Math.max(0, used) : 0;
        const safeLimit = Number.isInteger(limit) ? Math.max(1, limit) : 1;
        
        // Validate plan type against whitelist
        const safePlanType = VALID_PLANS.includes(plan_type) ? plan_type : 'free';
        
        // Validate seconds - must be positive integer
        const displaySeconds = validateSeconds(remaining_seconds) || validateSeconds(cooldown_seconds);
        let secondsRemaining = Math.max(0, displaySeconds); // Ensure non-negative
    
    // Format time display from seconds
    let resetTimeDisplay = 'now';
    if (secondsRemaining > 0) {
        const minutes = Math.floor(secondsRemaining / 60);
        const seconds = secondsRemaining % 60;
        
        if (minutes > 0) {
            resetTimeDisplay = `${minutes}m ${seconds}s`;
        } else {
            resetTimeDisplay = `${seconds}s`;
        }
    }
    
    // Format last_video_date for display (show date and time)
    let lastGeneratedDisplay = 'Never';
    if (last_video_date && last_video_date !== '1970-01-01') {
        const parts = String(last_video_date).split(' ');
        const date = parts[0];
        const time = parts[1] || '00:00';
        // Validate date format (YYYY-MM-DD)
        if (/^\d{4}-\d{2}-\d{2}$/.test(date) && /^\d{2}:\d{2}/.test(time)) {
            lastGeneratedDisplay = `${date} at ${time}`;
        }
    }
    
    const overlay = document.createElement('div');
    overlay.className = 'limit-overlay';
    overlay.id = 'limitModal';

    // Build modal structure safely using DOM methods
    const modal = document.createElement('div');
    modal.className = 'limit-modal';
    
    // Panel Left
    const panelLeft = document.createElement('div');
    panelLeft.className = 'panel-left';
    
    const leftTop = document.createElement('div');
    leftTop.className = 'left-top';
    
    const limitWrap = document.createElement('div');
    limitWrap.className = 'limit-wrap';
    limitWrap.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6A3D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
    leftTop.appendChild(limitWrap);
    
    const title = document.createElement('h1');
    title.textContent = "You've hit your\ndaily limit";
    leftTop.appendChild(title);
    
    const subtitle = document.createElement('p');
    subtitle.className = 'subtitle';
    subtitle.textContent = `You've used all ${safeLimit} of your daily generations. Upgrade to keep creating without interruption.`;
    leftTop.appendChild(subtitle);
    
    panelLeft.appendChild(leftTop);
    
    // Usage box
    const usageBox = document.createElement('div');
    usageBox.className = 'usage-box';
    
    const usageHeader = document.createElement('div');
    usageHeader.className = 'usage-header';
    
    const usageLabel = document.createElement('div');
    usageLabel.className = 'usage-label';
    usageLabel.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>';
    usageLabel.appendChild(document.createTextNode('Daily generations'));
    usageHeader.appendChild(usageLabel);
    
    const usageCount = document.createElement('div');
    usageCount.className = 'usage-count';
    usageCount.textContent = `${safeUsed} / ${safeLimit} used`;
    usageHeader.appendChild(usageCount);
    
    usageBox.appendChild(usageHeader);
    
    const usageBarTrack = document.createElement('div');
    usageBarTrack.className = 'usage-bar-track';
    const usageBarFill = document.createElement('div');
    usageBarFill.className = 'usage-bar-fill';
    usageBarFill.style.width = '100%';
    usageBarTrack.appendChild(usageBarFill);
    usageBox.appendChild(usageBarTrack);
    
    const lastGenNote = document.createElement('div');
    lastGenNote.className = 'usage-note';
    lastGenNote.textContent = 'Last generated: ';
    const lastGenSpan = document.createElement('span');
    lastGenSpan.textContent = lastGeneratedDisplay;
    lastGenNote.appendChild(lastGenSpan);
    usageBox.appendChild(lastGenNote);
    
    const resetNote = document.createElement('div');
    resetNote.className = 'usage-note';
    resetNote.textContent = 'Resets in ';
    const resetSpan = document.createElement('span');
    resetSpan.textContent = resetTimeDisplay;
    resetNote.appendChild(resetSpan);
    resetNote.appendChild(document.createTextNode(' · or upgrade for more'));
    usageBox.appendChild(resetNote);
    
    panelLeft.appendChild(usageBox);
    modal.appendChild(panelLeft);
    
    // Panel Right
    const panelRight = document.createElement('div');
    panelRight.className = 'panel-right';
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.addEventListener('click', closeLimitModal);
    closeBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    panelRight.appendChild(closeBtn);
    
    const plansDiv = document.createElement('div');
    
    const plansLabel = document.createElement('div');
    plansLabel.className = 'plans-label';
    plansLabel.textContent = 'Choose a plan';
    plansDiv.appendChild(plansLabel);
    
    const planOptions = document.createElement('div');
    planOptions.className = 'plan-options';
    
    // Basic Plan Card
    const basicCard = document.createElement('div');
    basicCard.className = 'plan-card' + (safePlanType === 'free' ? ' current-plan' : '');
    basicCard.setAttribute('data-plan', 'basic');
    basicCard.addEventListener('click', function(e) { selectPlan(e.currentTarget, 'basic'); });
    basicCard.innerHTML = '<div class="plan-card-icon"><svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="basicGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#f1f5f9;stop-opacity:1" /><stop offset="50%" style="stop-color:#cbd5e1;stop-opacity:1" /><stop offset="100%" style="stop-color:#94a3b8;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="16" fill="url(#basicGrad)"></circle><ellipse rx="42" ry="18" cx="50" cy="50" stroke="url(#basicGrad)" stroke-width="10" fill="none" transform="rotate(45 50 50)" stroke-linecap="round"></ellipse><ellipse rx="42" ry="18" cx="50" cy="50" stroke="url(#basicGrad)" stroke-width="10" fill="none" transform="rotate(-45 50 50)" stroke-linecap="round"></ellipse></svg></div><div class="plan-card-body"><strong>Basic</strong><span>5 generations/day</span></div><div class="plan-card-price">$18.99/mo</div>';
    planOptions.appendChild(basicCard);
    
    // Prime Plan Card
    const primeCard = document.createElement('div');
    primeCard.className = 'plan-card highlighted';
    primeCard.setAttribute('data-plan', 'prime');
    primeCard.addEventListener('click', function(e) { selectPlan(e.currentTarget, 'prime'); });
    primeCard.innerHTML = '<div class="popular-tag">Popular</div><div class="plan-card-icon"><svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="primeGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#fff176;stop-opacity:1" /><stop offset="50%" style="stop-color:#ffd600;stop-opacity:1" /><stop offset="100%" style="stop-color:#ff9100;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="16" fill="url(#primeGrad)"></circle><ellipse rx="42" ry="18" cx="50" cy="50" stroke="url(#primeGrad)" stroke-width="12" fill="none" transform="rotate(45 50 50)" stroke-linecap="round"></ellipse><ellipse rx="42" ry="18" cx="50" cy="50" stroke="url(#primeGrad)" stroke-width="12" fill="none" transform="rotate(-45 50 50)" stroke-linecap="round"></ellipse></svg></div><div class="plan-card-body"><strong>Prime</strong><span>12 generations/day</span></div><div class="plan-card-price">$29.99/mo</div>';
    planOptions.appendChild(primeCard);
    const eliteCard = document.createElement('div');
    eliteCard.className = 'plan-card';
    eliteCard.setAttribute('data-plan', 'elite');
    eliteCard.addEventListener('click', function(e) { selectPlan(e.currentTarget, 'elite'); });
    eliteCard.innerHTML = '<div class="plan-card-icon"><svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="eliteGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#ff6b3d;stop-opacity:1" /><stop offset="50%" style="stop-color:#ff3d00;stop-opacity:1" /><stop offset="100%" style="stop-color:#c70000;stop-opacity:1" /></linearGradient></defs><circle cx="50" cy="50" r="16" fill="url(#eliteGrad)"></circle><ellipse rx="42" ry="18" cx="50" cy="50" stroke="url(#eliteGrad)" stroke-width="12" fill="none" transform="rotate(45 50 50)" stroke-linecap="round"></ellipse><ellipse rx="42" ry="18" cx="50" cy="50" stroke="url(#eliteGrad)" stroke-width="12" fill="none" transform="rotate(-45 50 50)" stroke-linecap="round"></ellipse></svg></div><div class="plan-card-body"><strong>Elite</strong><span>40 generations/day · Priority queue</span></div><div class="plan-card-price">$49.99/mo</div>';
    planOptions.appendChild(eliteCard);
    
    plansDiv.appendChild(planOptions);
    panelRight.appendChild(plansDiv);
    
    const rightFooter = document.createElement('div');
    rightFooter.className = 'right-footer';
    const upgradeBtn = document.createElement('button');
    upgradeBtn.className = 'cta-btn';
    upgradeBtn.addEventListener('click', upgradeToPlan);
    upgradeBtn.innerHTML = 'Upgrade now<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
    rightFooter.appendChild(upgradeBtn);
    panelRight.appendChild(rightFooter);
    
    modal.appendChild(panelRight);
    overlay.appendChild(modal);
    
    document.body.appendChild(overlay);
    
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 10);
    } catch (error) {
        console.error('[LimitModal] Error rendering modal:', error);
        // Fail gracefully - don't break the page
    }
}

function selectPlan(card, planType) {
    // Validate plan type against whitelist before storing
    if (!VALID_PLANS.includes(planType)) {
        console.warn('[LimitModal] Invalid plan type:', planType);
        return;
    }
    
    LimitModalState.selectedPlanType = planType;
    const allCards = card.closest('.plan-options').querySelectorAll('.plan-card');
    allCards.forEach(c => c.classList.remove('highlighted'));
    card.classList.add('highlighted');
}

function upgradeToPlan() {
    // Validate plan before redirect
    const plan = LimitModalState.selectedPlanType;
    if (!VALID_PLANS.includes(plan)) {
        console.error('[LimitModal] Invalid plan:', plan);
        return;
    }
    
    // Use safe redirect with validated parameter
    const url = new URL('/premium.html', window.location.origin);
    url.searchParams.set('plan', plan);
    window.location.href = url.toString();
}

function closeLimitModal() {
    const overlay = document.getElementById('limitModal');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 250);
    }
}

async function attemptGeneration() {
    const limitCheck = await checkGenerationLimit();
    
    if (!limitCheck) {
        return false;
    }
    
    if (!limitCheck.allowed) {
        showLimitModal({
            used: limitCheck.used,
            limit: limitCheck.limit,
            plan_type: limitCheck.plan_type,
            last_video_date: limitCheck.last_video_date
        });
        return false;
    }
    
    return true;
}

window.checkGenerationLimit = checkGenerationLimit;
window.showLimitModal = showLimitModal;
window.closeLimitModal = closeLimitModal;
window.selectPlan = selectPlan;
window.upgradeToPlan = upgradeToPlan;
window.attemptGeneration = attemptGeneration;
