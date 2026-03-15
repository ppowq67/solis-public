/**
 * 🎯 Generation Progress Spinner - Moment-Based Tracking
 * Securely tracks video generation by monitoring moments detected in real-time
 * Updates UI with smooth progress transitions
 */

class GenerationProgressSpinner {
    constructor() {
        this.wrapper = document.getElementById('generationProgressWrapper');
        this.progressCircle = document.getElementById('progressCircle');
        this.progressText = document.getElementById('generationProgressText');
        
        // Track active generations
        this.activeGenerations = new Map();
        
        // Configuration
        this.CIRCLE_CIRCUMFERENCE = 75.36; // 2π * 12 (SVG circle radius = 12)
        this.STORAGE_KEY = 'solisAI_activeGenerations';
        
        // Restore state from localStorage (survive page refresh)
        this.restoreFromLocalStorage();
        
        // Bind to WebSocket if available
        if (typeof solisWSClient !== 'undefined') {
            this.setupWebSocketHandlers();
        }
    }
    
    /**
     * Restore active generations from localStorage after page refresh
     * Verifies each project is still processing via API
     */
    restoreFromLocalStorage() {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            if (!stored) return;
            
            const activeProjects = JSON.parse(stored);
            console.log(`🔄 Restoring ${activeProjects.length} active generation(s)...`);
            
            // Verify each project is still processing
            activeProjects.forEach(projectId => {
                this.verifyProjectStatus(projectId);
            });
        } catch (error) {
            console.warn('⚠️ Failed to restore from localStorage:', error);
            localStorage.removeItem(this.STORAGE_KEY);
        }
    }
    
    /**
     * Check if project is still processing and restore UI if so
     * @param {string} projectId - The project/task ID
     */
    verifyProjectStatus(projectId) {
        fetch(`/api/clips/status/${projectId}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'processing' || data.status === 'queued') {
                // Project still processing - restore tracking UI
                console.log(`✅ Project ${projectId} still processing (${data.progress}%)`);
                this.activeGenerations.set(projectId, {
                    startTime: Date.now(),
                    progress: data.progress || 0,
                    message: data.message || 'Resuming...'
                });
                
                // Show wrapper and restore progress
                if (this.wrapper) {
                    this.wrapper.style.display = 'flex';
                }
                this.updateProgress(projectId, data.progress || 0, '🔄 Resuming generation...');
            } else if (data.status === 'completed') {
                // Already done - clean up
                this.removeFromLocalStorage(projectId);
            } else if (data.status === 'error') {
                // Error occurred - show failure and clean up
                console.error(`❌ Project error: ${data.message}`);
                this.removeFromLocalStorage(projectId);
            }
        })
        .catch(error => {
            console.warn(`⚠️ Failed to verify project status for ${projectId}:`, error);
            // Keep it in activeGenerations for now, will retry via WebSocket
        });
    }
    
    /**
     * Save active project to localStorage (survive page refresh)
     * @param {string} projectId - The project/task ID
     */
    saveToLocalStorage(projectId) {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY) || '[]';
            const activeProjects = JSON.parse(stored);
            
            if (!activeProjects.includes(projectId)) {
                activeProjects.push(projectId);
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(activeProjects));
                console.log(`💾 Saved to localStorage: ${projectId}`);
            }
        } catch (error) {
            console.warn('⚠️ Failed to save to localStorage:', error);
        }
    }
    
    /**
     * Remove project from localStorage when complete/failed
     * @param {string} projectId - The project/task ID
     */
    removeFromLocalStorage(projectId) {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY) || '[]';
            let activeProjects = JSON.parse(stored);
            
            activeProjects = activeProjects.filter(id => id !== projectId);
            
            if (activeProjects.length > 0) {
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(activeProjects));
            } else {
                localStorage.removeItem(this.STORAGE_KEY);
            }
            console.log(`🗑️ Removed from localStorage: ${projectId}`);
        } catch (error) {
            console.warn('⚠️ Failed to remove from localStorage:', error);
        }
    }
    
    /**
     * Setup secure WebSocket handlers for moment detection progress
     * Only updates progress based on moments actually detected (from project.json)
     */
    setupWebSocketHandlers() {
        console.log('🎯 Setting up moment progress handlers');
        
        // Listen for moment detection events
        solisWSClient.on('moment_detected', (data) => {
            const { project_id, moment_count, progress, moment } = data;
            console.log(`📊 Moment ${moment_count} detected:`, moment?.title, `(${progress}%)`);
            
            // Update progress based on actual moments detected
            this.updateProgress(project_id, progress, `Moment ${moment_count} detected`);
        });
        
        // Listen for compilation progress events for later stages
        solisWSClient.on('compilation_progress', (data) => {
            const { project_id, progress, step } = data;
            
            // Only update if progress is higher than moment-based progress
            // This ensures we don't go backward
            if (this.activeGenerations.has(project_id)) {
                const current = this.activeGenerations.get(project_id).progress;
                if (progress > current) {
                    console.log(`📊 Generation progress: ${progress}% - ${step}`);
                    this.updateProgress(project_id, progress, step || 'Processing...');
                }
            }
        });
        
        // Handle generation completion
        solisWSClient.on('video_ready', (data) => {
            const { project_id } = data;
            console.log(`✅ Video ready for project: ${project_id}`);
            this.completeGeneration(project_id);
        });
        
        // Handle errors
        solisWSClient.on('error', (data) => {
            const { taskId, error } = data;
            console.error(`❌ Generation error for ${taskId}: ${error}`);
            this.failGeneration(taskId);
        });
    }
    
    /**
     * Start progress tracking for a generation task
     * 🔐 FIX #7: Verify access permission before starting to track
     * @param {string} projectId - The project/task ID
     * @param {string} message - Initial message
     */
    startGeneration(projectId, message = '🎬 Starting generation...') {
        // 🔐 First verify user has access to this project via WebSocket room
        this.verifyWebSocketAccess(projectId, (allowed) => {
            if (!allowed) {
                console.error(`❌ Access denied to project ${projectId}`);
                this.failGeneration(projectId);
                return;
            }
            
            console.log(`✅ Access verified for project ${projectId}`);
            
            // Show wrapper
            if (this.wrapper) {
                this.wrapper.style.display = 'flex';
            }
            
            // Initialize generation tracking
            this.activeGenerations.set(projectId, {
                startTime: Date.now(),
                progress: 0,
                message: message
            });
            
            // 💾 Save to localStorage so it survives page refresh
            this.saveToLocalStorage(projectId);
            
            this.updateProgress(projectId, 0, message);
            console.log(`🎯 Started progress tracking for ${projectId}`);
        });
    }
    
    /**
     * 🔐 FIX #7: Verify user has permission to access WebSocket room for this project
     * Calls backend endpoint to verify ownership before subscribing
     * @param {string} projectId - The project/task ID
     * @param {function} callback - Called with (allowed: boolean)
     */
    verifyWebSocketAccess(projectId, callback) {
        fetch(`/api/clips/verify-access/${projectId}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.allowed) {
                console.log(`✅ WebSocket access verified for project ${projectId}`);
                callback(true);
            } else {
                console.error(`❌ WebSocket access denied: ${data.error}`);
                callback(false);
            }
        })
        .catch(error => {
            console.error('❌ Error verifying WebSocket access:', error);
            callback(false);
        });
    }
    
    /**
     * Update progress with secure animation
     * @param {string} projectId - The project/task ID
     * @param {number} progress - Progress percentage (0-100)
     * @param {string} message - Status message
     */
    updateProgress(projectId, progress, message = '') {
        // Validate progress
        progress = Math.max(0, Math.min(100, Math.floor(progress)));
        
        // Update active generation
        if (this.activeGenerations.has(projectId)) {
            const gen = this.activeGenerations.get(projectId);
            
            // Only update if progress increased (no going backward)
            if (progress <= gen.progress) {
                return;
            }
            
            gen.progress = progress;
            gen.message = message;
        }
        
        // Update the primary display (for first/main generation)
        // In a multi-tasking scenario, you'd update per-task, but for now show the highest
        const maxProgress = Math.max(...[...this.activeGenerations.values()].map(g => g.progress) || [0]);
        const maxGen = [...this.activeGenerations.entries()]
            .sort((a, b) => b[1].progress - a[1].progress)[0];
        
        if (maxGen) {
            this.displayProgress(maxGen[1].progress, maxGen[1].message);
        }
    }
    
    /**
     * Display progress in UI with smooth animation
     * @param {number} progress - Progress percentage (0-100)
     * @param {string} message - Status message
     */
    displayProgress(progress, message = '') {
        if (!this.wrapper || !this.progressCircle || !this.progressText) {
            return;
        }
        
        // Ensure wrapper is visible
        this.wrapper.style.display = 'flex';
        
        // Update circle stroke-dasharray for progress ring
        const dashValue = (progress / 100) * this.CIRCLE_CIRCUMFERENCE;
        this.progressCircle.style.strokeDasharray = `${dashValue} ${this.CIRCLE_CIRCUMFERENCE}`;
        
        // Update text
        this.progressText.textContent = `${progress}%`;
        
        // Smooth color transition
        if (progress < 25) {
            // Red zone (0-24%)
            this.progressCircle.style.stroke = '#ff6b6b';
        } else if (progress < 50) {
            // Orange zone (25-49%)
            this.progressCircle.style.stroke = '#ffa500';
        } else if (progress < 75) {
            // Yellow zone (50-74%)
            this.progressCircle.style.stroke = '#ffd700';
        } else if (progress < 100) {
            // Green zone (75-99%)
            this.progressCircle.style.stroke = '#4ade80';
        } else {
            // Completed (100%)
            this.progressCircle.style.stroke = '#22c55e';
        }
        
        // Console log for debugging
        safeLog(`📊 Progress: ${progress}% ${message ? '- ' + message : ''}`);
    }
    
    /**
     * Complete a generation successfully
     * @param {string} projectId - The project/task ID
     */
    completeGeneration(projectId) {
        if (this.activeGenerations.has(projectId)) {
            this.activeGenerations.delete(projectId);
        }
        
        // 💾 Remove from localStorage since generation is done
        this.removeFromLocalStorage(projectId);
        
        // If no more active generations, hide after delay
        if (this.activeGenerations.size === 0) {
            setTimeout(() => {
                this.hide();
            }, 1500);
        }
        
        console.log(`✅ Generation complete for ${projectId}`);
    }
    
    /**
     * Mark generation as failed
     * @param {string} projectId - The project/task ID
     */
    failGeneration(projectId) {
        if (this.activeGenerations.has(projectId)) {
            this.activeGenerations.delete(projectId);
        }
        
        // 💾 Remove from localStorage since generation failed
        this.removeFromLocalStorage(projectId);
        
        // Update UI to show failure
        if (this.progressCircle) {
            this.progressCircle.style.stroke = '#ef4444';
        }
        if (this.progressText) {
            this.progressText.textContent = '❌';
        }
        
        // Hide after delay
        setTimeout(() => {
            this.hide();
        }, 2000);
        
        console.error(`❌ Generation failed for ${projectId}`);
    }
    
    /**
     * Hide the progress spinner
     */
    hide() {
        if (this.wrapper) {
            this.wrapper.style.display = 'none';
        }
        
        // Reset circle
        if (this.progressCircle) {
            this.progressCircle.style.strokeDasharray = '0 ' + this.CIRCLE_CIRCUMFERENCE;
            this.progressCircle.style.stroke = '#ff7a50'; // Reset to default color
        }
        
        // Reset text
        if (this.progressText) {
            this.progressText.textContent = '0%';
        }
    }
    
    /**
     * Get status of active generations
     * @returns {Object} Status object with all active generations
     */
    getStatus() {
        return {
            isActive: this.activeGenerations.size > 0,
            activeCount: this.activeGenerations.size,
            generations: Object.fromEntries(this.activeGenerations)
        };
    }
}

// 🎯 Initialize the progress spinner when DOM is ready
let generationProgressSpinner = null;

/**
 * Initialize generation progress spinner on document ready
 */
function initGenerationProgressSpinner() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            generationProgressSpinner = new GenerationProgressSpinner();
            console.log('✅ Generation Progress Spinner initialized');
        });
    } else {
        generationProgressSpinner = new GenerationProgressSpinner();
        console.log('✅ Generation Progress Spinner initialized');
    }
}

// Auto-initialize on script load
if (document.currentScript && document.currentScript.src) {
    // Script is loading normally
    initGenerationProgressSpinner();
} else if (typeof module !== 'undefined' && module.hot) {
    // HMR context
    initGenerationProgressSpinner();
} else {
    // Fallback: wait for DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGenerationProgressSpinner);
    } else {
        initGenerationProgressSpinner();
    }
}

/**
 * Export for use in other modules if needed
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GenerationProgressSpinner, generationProgressSpinner };
}
