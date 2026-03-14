/**
 * Paddle Configuration - Secure Token Management
 * Token is fetched from backend, NOT hardcoded in frontend
 * This prevents users from changing sandbox/production tokens
 */

class PaddleManager {
    constructor() {
        this.initialized = false;
        this.paddle = null;
        this.environment = null;
        this.clientToken = null;
    }

    /**
     * Fetch Paddle token from backend (server-side source of truth)
     * Backend determines if sandbox or production based on deployment
     */
    async fetchPaddleConfig() {
        try {
            const response = await fetch(`${window.API_BASE_URL}/payment/paddle-config`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                console.error('❌ Failed to fetch Paddle configuration');
                return false;
            }

            const config = await response.json();
            
            // Validate token format and environment (basic sanity check)
            if (!config.environment || !config.clientToken) {
                console.error('❌ Invalid Paddle config from server');
                return false;
            }

            this.environment = config.environment;
            this.clientToken = config.clientToken;

            // Prevent modification in production
            if (this.environment === 'production') {
                Object.freeze(this);
            }

            console.log('✅ Paddle environment:', this.environment);
            return true;
        } catch (error) {
            console.error('❌ Error fetching Paddle config:', error);
            return false;
        }
    }

    /**
     * Initialize Paddle SDK with server-provided token
     */
    async init() {
        if (this.initialized) return true;

        // Fetch config from backend
        const configFetched = await this.fetchPaddleConfig();
        if (!configFetched) {
            console.error('❌ Cannot initialize Paddle - no valid config');
            return false;
        }

        // Wait for Paddle SDK to load
        let retries = 0;
        while (typeof Paddle === 'undefined' && retries < 10) {
            await new Promise(resolve => setTimeout(resolve, 100));
            retries++;
        }

        if (typeof Paddle === 'undefined') {
            console.error('❌ Paddle SDK failed to load');
            return false;
        }

        try {
            // Set environment from server config (not from client)
            Paddle.Environment.set(this.environment);
            
            // Initialize with server-provided token
            Paddle.Initialize({
                token: this.clientToken,
                eventCallback: (data) => this._handlePaddleEvent(data)
            });

            this.paddle = Paddle;
            this.initialized = true;
            console.log('✅ Paddle initialized successfully');
            return true;
        } catch (error) {
            console.error('❌ Error initializing Paddle:', error);
            return false;
        }
    }

    /**
     * Handle Paddle events
     */
    _handlePaddleEvent(data) {
        if (data.name === 'checkout.completed') {
            window.dispatchEvent(new CustomEvent('paddle:checkoutComplete', { detail: data.data }));
        } else if (data.name === 'checkout.closed') {
            window.dispatchEvent(new CustomEvent('paddle:checkoutClosed', { detail: data.data }));
        }
    }

    /**
     * Open checkout with server-verified price ID
     */
    async openCheckout(priceId, planName) {
        if (!this.initialized) {
            console.error('❌ Paddle not initialized');
            return false;
        }

        try {
            // Verify price ID with backend before opening checkout
            const verified = await this._verifyPriceId(priceId, planName);
            if (!verified) {
                console.error('❌ Invalid price ID');
                return false;
            }

            Paddle.Checkout.open({
                items: [{ priceId: priceId, quantity: 1 }],
                customer: { email: window.currentAuthenticatedUser?.email || '' }
            });

            window.pendingPlanUpgrade = planName;
            return true;
        } catch (error) {
            console.error('❌ Error opening checkout:', error);
            return false;
        }
    }

    /**
     * Verify price ID with backend to prevent tampering
     */
    async _verifyPriceId(priceId, planName) {
        try {
            const response = await fetch(`${window.API_BASE_URL}/payment/verify-price`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': this._getCsrfToken()
                },
                body: JSON.stringify({ priceId, planName })
            });

            return response.ok;
        } catch (error) {
            console.error('❌ Price verification failed:', error);
            return false;
        }
    }

    /**
     * Get CSRF token from meta tag
     */
    _getCsrfToken() {
        const meta = document.querySelector('meta[name="csrf-token"]');
        return meta ? meta.getAttribute('content') : '';
    }
}

// Global instance
window.paddleManager = new PaddleManager();
