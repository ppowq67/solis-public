

class FloatingCustomizeBar {
    constructor() {
        console.log('[Customizer] Init');
        this.currentElement = null;
        this.selectedElements = [];
        this.panel = null;
        this.undoStack = [];
        this.redoStack = [];
        this.changeTracker = new Map();
        this.init();
    }

    init() {
        this.createPanel();
        this.attachClickListeners();
        this.isClosing = false;
        
        // Watch for template changes
        const preview = document.getElementById('templateVideoPreview');
        if (preview) {
            const observer = new MutationObserver(() => {
                console.log('[Customizer] Template changed, reattaching listeners');
                this.attachClickListeners();
            });
            
            observer.observe(preview, {
                childList: true,
                subtree: true
            });
        }
        document.addEventListener('click', (e) => {
            if (this.isClosing) return; // Prevent re-closing
            
            const pill = document.getElementById('pill');
            if (!pill) return;
            
            // Check if click is inside pill or on a trigger button
            const isClickInsidePill = pill.contains(e.target);
            const triggers = [
                'textTrigger', 'fontTrigger', 'colorTrigger', 
                'undoTrigger', 'redoTrigger'
            ];
            const isClickOnTrigger = triggers.some(id => {
                const el = document.getElementById(id);
                return el && el.contains(e.target);
            });
            
            // Only close if clicking truly outside
            if (!isClickInsidePill && !isClickOnTrigger) {
                this.isClosing = true;
                this.hidePanel();
                if (window.closePill) {
                    window.closePill();
                }
                // Reset flag after animation completes
                setTimeout(() => { this.isClosing = false; }, 300);
            }
        }, true); // Use capture phase for better control
    }

    createPanel() {
        // Check if panel already exists
        if (document.getElementById('pill')) {
            return;
        }

        // Capture context early for use in all listeners
        const customizer = this;

        const pill = document.createElement('div');
        pill.id = 'pill';
        pill.className = 'pill-container';
        pill.innerHTML = `
            <div class="pill-actions">
                <div class="menu-item" id="textTrigger">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg>
                    <span>Text</span>
                </div>

                <div class="divider"></div>

                <div class="menu-item" id="fontTrigger">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg>
                    <span id="labelFont">Jakarta</span>
                </div>

                <div class="divider"></div>

                <div class="menu-item" id="colorTrigger">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"/><path d="m5 2 5 5"/><path d="M2 13h15"/><path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"/></svg>
                    <span>Color</span>
                    <div class="status-dot" id="colorIndicator"></div>
                </div>

                <div class="divider"></div>

                <div class="menu-item" id="undoTrigger" title="Undo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="transform: scaleX(-1)"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                </div>


                <div class="menu-item" id="redoTrigger" title="Redo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                </div>

                <div class="divider"></div>

                <div class="menu-item" id="saveCustomizationsTrigger" title="Save Customizations">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                    <span>Save</span>
                </div>
            </div>

            <div class="pill-content">
                <div class="content-inner">
                    
                    <div id="textView" class="view">
                        <!-- TEXT EDITING -->
                        <div class="section-label">Edit Text</div>
                        <input type="text" id="textInput" placeholder="Edit text..." style="width: 100%; padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 12px; font-size: 0.95rem; margin-bottom: 18px; background: white; color: #0f172a; font-family: 'Plus Jakarta Sans', sans-serif;">

                        <!-- TYPOGRAPHY -->
                        <div class="section-label">Typography</div>
                        <div id="fontPreviewContainer" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
                            <div class="option-item selected" data-val="Plus Jakarta Sans">
                                <span>Jakarta Sans</span>
                                <span id="preview-jakarta" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.2rem; line-height: 1.3;">Sample Text</span>
                            </div>
                            <div class="option-item" data-val="Playfair Display">
                                <span>Playfair Display</span>
                                <span id="preview-playfair" style="font-family: 'Playfair Display', serif; font-size: 1.2rem; line-height: 1.3;">Sample Text</span>
                            </div>
                            <div class="option-item" data-val="JetBrains Mono">
                                <span>JetBrains Mono</span>
                                <span id="preview-jetbrains" style="font-family: 'JetBrains Mono', monospace; font-size: 1.2rem; line-height: 1.3;">Sample Text</span>
                            </div>
                            <div class="option-item" data-val="Luckiest Guy">
                                <span>Luckiest Guy</span>
                                <span id="preview-lucky" style="font-family: 'Luckiest Guy', cursive; font-size: 1.2rem; line-height: 1.3;">Sample Text</span>
                            </div>
                        </div>

                        <!-- COLOR -->
                        <div class="section-label">Accent Color</div>
                        <div class="color-grid" id="colorGrid" style="margin-bottom: 12px;"></div>
                        <div class="custom-row">
                            <div class="color-preview">
                                <input type="color" id="hexPicker" value="#0f172a">
                            </div>
                            <div class="hex-info">
                                <span class="hex-label">Custom HEX</span>
                                <span class="hex-value" id="hexVal">#0F172A</span>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>



                </div>
            </div>
        `;

        pill.style.cssText = `
            position: fixed;
            display: none;
            z-index: 10000;
        `;

        document.body.appendChild(pill);
        this.panel = pill;

        const triggers = {
            text: document.getElementById('textTrigger'),
            font: document.getElementById('fontTrigger'),
            color: document.getElementById('colorTrigger'),
            undo: document.getElementById('undoTrigger'),
            redo: document.getElementById('redoTrigger')
        };
        const views = {
            text: document.getElementById('textView')
        };
        
        const colorIndicator = document.getElementById('colorIndicator');
        const labelFont = document.getElementById('labelFont');
        const hexVal = document.getElementById('hexVal');
        const hexPicker = document.getElementById('hexPicker');

        const COLORS = ['#0f172a', '#ff6b00', '#3b82f6', '#10b981', '#ef4444', '#8b5cf6', '#f59e0b', '#6366f1'];
        let activeTab = null;

        const grid = document.getElementById('colorGrid');
        COLORS.forEach(c => {
            const s = document.createElement('div');
            s.className = 'swatch';
            s.style.background = c;
            s.addEventListener('click', (e) => {
                e.stopPropagation();
                console.log('[ColorSwatch] Clicked color:', c);
                // Apply to all selected elements
                customizer.selectedElements.forEach(el => {
                    el.style.setProperty('color', c, 'important');
                    customizer.trackChange('color', { value: c });
                });
                hexVal.textContent = c.toUpperCase();
                colorIndicator.style.background = c;
                hexPicker.value = c;
                console.log('[ColorSwatch] Applied color to', customizer.selectedElements.length, 'elements');
            });
            grid.appendChild(s);
        });

        const switchTab = (tab) => {
            // If clicking same tab, close it
            if (activeTab === tab) {
                closePill();
                return;
            }
            
            // Clear ALL previous states
            Object.keys(triggers).forEach(key => {
                triggers[key].classList.remove('active');
            });
            Object.keys(views).forEach(key => {
                views[key].classList.remove('visible');
                views[key].style.display = 'none';  // Force hide
            });
            
            // Set active tab
            activeTab = tab;
            triggers[tab].classList.add('active');
            views[tab].classList.add('visible');
            views[tab].style.display = 'flex';  // Force show
            pill.style.display = 'flex';  // Make sure pill is visible
            pill.classList.add('is-expanded');
            pill.classList.remove('slide-in');  // Remove slide animation for text view
            pill.classList.remove('gameplay-mode');  // Remove gameplay positioning when switching back to text
            
            // If switching to text tab (unified editor), update all previews
            if (tab === 'text' && this.currentElement) {
                const currentFont = window.getComputedStyle(this.currentElement).fontFamily;
                
                // Get computed styles from the element
                const computedStyle = window.getComputedStyle(this.currentElement);
                const fontWeight = computedStyle.fontWeight;
                const fontSize = computedStyle.fontSize;
                const textShadow = computedStyle.textShadow;
                const letterSpacing = computedStyle.letterSpacing;
                const lineHeight = computedStyle.lineHeight;
                const textTransform = computedStyle.textTransform;
                const color = computedStyle.color;
                
                // Update preview text with actual selected text and styles
                const previewText = this.currentElement.textContent || 'Sample Text';
                const styles = {
                    fontWeight,
                    fontSize,
                    textShadow,
                    letterSpacing,
                    lineHeight,
                    textTransform,
                    color
                };
                
                // Force update all previews with new text and styles
                const previewMap = [
                    { id: 'preview-jakarta', dataVal: "'Plus Jakarta Sans'" },
                    { id: 'preview-playfair', dataVal: "'Playfair Display'" },
                    { id: 'preview-jetbrains', dataVal: "'JetBrains Mono'" },
                    { id: 'preview-lucky', dataVal: "'Luckiest Guy'" }
                ];
                
                previewMap.forEach(item => {
                    const preview = document.getElementById(item.id);
                    if (preview) {
                        preview.textContent = previewText;
                        // Apply matching styles but keep font-family
                        Object.keys(styles).forEach(key => {
                            preview.style[key] = styles[key];
                        });
                    }
                });
                
                // Mark the currently used font as selected
                document.querySelectorAll('#fontPreviewContainer .option-item').forEach(item => {
                    const fontVal = item.dataset.val.replace(/['"]/g, '');
                    const currentFontClean = currentFont.replace(/['"]/g, '').split(',')[0].trim();
                    if (currentFontClean.includes(fontVal) || currentFont.includes(fontVal)) {
                        item.classList.add('selected');
                    } else {
                        item.classList.remove('selected');
                    }
                });
            }
            
            // The pill-content animation is now handled entirely by CSS via the is-expanded class
            // No need to set inline styles here - they were causing the janky animations
        };

        const closePill = () => {
            activeTab = null;
            pill.classList.remove('is-expanded');
            pill.classList.remove('slide-in');
            pill.classList.remove('gameplay-mode');
            
            // Reset positioning to default
            pill.style.position = '';
            pill.style.bottom = '';
            pill.style.right = '';
            pill.style.top = '';
            pill.style.left = '';
            pill.style.transform = '';
            pill.style.display = 'none';
            
            // Clear ALL states
            Object.keys(triggers).forEach(key => {
                triggers[key].classList.remove('active');
            });
            Object.keys(views).forEach(key => {
                views[key].classList.remove('visible');
                views[key].style.display = 'none';
            });
        };
        
        // Make closePill globally accessible
        window.closePill = closePill;

        triggers.text.onclick = (e) => { e.stopPropagation(); switchTab('text'); };
        triggers.font.onclick = (e) => { 
            e.stopPropagation(); 
            switchTab('text');
            // Auto-scroll to font section
            setTimeout(() => {
                const fontSection = document.getElementById('fontPreviewContainer');
                if (fontSection) {
                    fontSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }, 150);
        };
        triggers.color.onclick = (e) => { 
            e.stopPropagation(); 
            switchTab('text');
            // Auto-scroll to color section
            setTimeout(() => {
                const colorSection = document.getElementById('colorGrid');
                if (colorSection) {
                    colorSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }, 150);
        };
        triggers.undo.onclick = (e) => { e.stopPropagation(); this.undo(); };
        triggers.redo.onclick = (e) => { e.stopPropagation(); this.redo(); };

        // Handle save customizations button
        const saveTrigger = document.getElementById('saveCustomizationsTrigger');
        if (saveTrigger) {
            saveTrigger.onclick = async (e) => {
                e.stopPropagation();
                const btnText = saveTrigger.querySelector('span');
                const originalText = btnText.textContent;
                
                try {
                    btnText.textContent = 'Saving...';
                    saveTrigger.disabled = true;
                    
                    await customizer.saveCustomizations('ranking_moments');
                    
                    btnText.textContent = 'âœ“ Saved';
                    setTimeout(() => {
                        btnText.textContent = originalText;
                        saveTrigger.disabled = false;
                    }, 2000);
                } catch (error) {
                    btnText.textContent = 'âœ— Failed';
                    console.error('[Customizer] Save failed:', error);
                    setTimeout(() => {
                        btnText.textContent = originalText;
                        saveTrigger.disabled = false;
                    }, 2000);
                }
            };
        }

        // Handle font option clicks with event delegation on container
        const fontPreviewContainer = document.getElementById('fontPreviewContainer');
        const FONT_STACKS = {
            'Plus Jakarta Sans': "'Plus Jakarta Sans', sans-serif",
            'Playfair Display': "'Playfair Display', serif",
            'JetBrains Mono': "'JetBrains Mono', monospace",
            'Luckiest Guy': "'Luckiest Guy', cursive"
        };
        
        if (fontPreviewContainer) {
            fontPreviewContainer.addEventListener('click', (e) => {
                const optionItem = e.target.closest('.option-item');
                if (!optionItem) return;
                
                e.stopPropagation();
                e.preventDefault();
                
                const font = optionItem.dataset.val;
                console.log('[Font] Clicked font:', font, 'Selected elements:', customizer.selectedElements?.length || 0);
                
                if (!customizer.selectedElements || customizer.selectedElements.length === 0) {
                    console.warn('[Font] No selected elements!');
                    return;
                }
                
                const fontStack = FONT_STACKS[font] || `'${font}', sans-serif`;
                console.log('[Font] Applying font:', fontStack);
                
                // Apply font to all selected elements
                customizer.selectedElements.forEach(el => {
                    customizer.trackChange('font', { oldValue: el.style.fontFamily });
                    el.style.setProperty('font-family', fontStack, 'important');
                    console.log('[Font] Applied to element:', el.textContent?.substring(0, 20));
                });
                
                // Update label
                document.getElementById('labelFont').textContent = font;
                console.log('[Font] Updated label to:', font);
                
                // Update live preview
                customizer.updateLivePreview();
                
                // Update selection state
                fontPreviewContainer.querySelectorAll('.option-item').forEach(i => i.classList.remove('selected'));
                optionItem.classList.add('selected');
                console.log('[Font] Updated selection state');
            }, false);
        }


        const textInput = document.getElementById('textInput');
        if (textInput) {
            textInput.addEventListener('input', (e) => {
                console.log('[TextInput] Input event, updating elements');
                // Apply text to all selected elements
                customizer.selectedElements.forEach(el => {
                    el.textContent = e.target.value;
                });
                // Update live preview
                customizer.updateLivePreview();
            });
            textInput.addEventListener('change', (e) => {
                console.log('[TextInput] Change event, tracking change');
                // Track change for all selected elements
                customizer.selectedElements.forEach(el => {
                    customizer.trackChange('text');
                });
            });
        }

        hexPicker.addEventListener('input', (e) => {
            e.stopPropagation();
            const color = e.target.value;
            console.log('[Color] Input event, applying color:', color);
            // Apply color to all selected elements
            customizer.selectedElements.forEach(el => {
                el.style.setProperty('color', color, 'important');
            });
            colorIndicator.style.background = color;
            hexVal.textContent = color.toUpperCase();
        });

        hexPicker.addEventListener('change', (e) => {
            e.stopPropagation();
            console.log('[Color] Change event, tracking color change');
            // Track color change for all selected elements
            customizer.selectedElements.forEach(el => {
                el.style.setProperty('color', e.target.value, 'important');
                customizer.trackChange('color', { value: e.target.value });
            });
        });

        // Also handle color swatches
        const colorGrid = document.getElementById('colorGrid');
        if (colorGrid) {
            // Re-attach color swatch listeners with proper context
            colorGrid.addEventListener('click', (e) => {
                if (e.target.classList.contains('swatch')) {
                    e.stopPropagation();
                    e.preventDefault();
                    const color = window.getComputedStyle(e.target).backgroundColor;
                    console.log('[ColorSwatch] Clicked color swatch:', color);
                    customizer.selectedElements.forEach(el => {
                        customizer.trackChange('color', { value: color });
                        el.style.setProperty('color', color, 'important');
                    });
                    hexVal.textContent = color.toUpperCase();
                    colorIndicator.style.background = color;
                    hexPicker.value = color;
                }
            });
        }
    }



    showPanel(element, x, y) {
        // Clear previous multi-select when opening new element
        this.clearSelection();
        
        // Clear previous selection styling if exists
        if (this.currentElement && this.currentElement !== element) {
            this.currentElement.style.boxShadow = '';
            this.currentElement.style.borderRadius = '';
            this.currentElement.style.zIndex = '';
            this.currentElement.style.position = '';
        }

        this.currentElement = element;
        this.selectedElements = [element]; // Start with current element in selection

        // Populate text input with current element's text
        const textInput = document.getElementById('textInput');
        const textView = document.getElementById('textView');
        
        // Show text editing for all items including numbered ones
        if (textView) {
            textView.style.display = 'flex';
        }
        
        if (textInput) {
            textInput.value = element.textContent || '';
            // Apply element's styles to input so you see what you're editing
            const computedStyle = window.getComputedStyle(element);
            textInput.style.fontFamily = computedStyle.fontFamily;
            textInput.style.fontWeight = computedStyle.fontWeight;
            textInput.style.fontSize = computedStyle.fontSize;
            textInput.style.textShadow = computedStyle.textShadow;
            textInput.style.letterSpacing = computedStyle.letterSpacing;
            textInput.style.lineHeight = computedStyle.lineHeight;
            textInput.style.textTransform = computedStyle.textTransform;
            textInput.style.color = computedStyle.color;
        }

        let left = x + 15;
        let top = y + 15;
        
        const panelWidth = 360;
        const panelHeight = 380; // Account for expanded content
        
        if (left + panelWidth > window.innerWidth) {
            left = Math.max(10, window.innerWidth - panelWidth - 10);
        }
        
        // Check if panel would go off bottom - if so, position above cursor
        if (top + panelHeight > window.innerHeight) {
            top = Math.max(10, y - panelHeight - 15);
        }

        this.panel.style.left = left + 'px';
        this.panel.style.top = top + 'px';
        this.panel.style.display = 'flex';
        this.panel.classList.add('is-expanded'); // Make content visible and interactive

        // Update typography preview text with actual text being edited
        this.updateLivePreview();

        // Highlight the selected element with rounded corners
        element.style.borderRadius = '12px';
        element.style.boxShadow = '0 0 0 2px #ff6b3d';
        element.style.position = 'relative';
        element.style.zIndex = '9999';
    }

    hidePanel() {
        if (this.panel) {
            this.panel.style.display = 'none';
            this.panel.classList.remove('is-expanded');
        }
        
        if (this.currentElement) {
            this.currentElement.style.boxShadow = '';
            this.currentElement.style.borderRadius = '';
            this.currentElement.style.zIndex = '';
            this.currentElement.style.position = '';
        }
        
        this.clearSelection();
        this.currentElement = null;
    }

    updateLivePreview() {
        if (!this.currentElement) return;
        
        const computedStyle = window.getComputedStyle(this.currentElement);
        const currentFont = computedStyle.fontFamily;
        const previewText = this.currentElement.textContent || 'Sample Text';
        const fontWeight = computedStyle.fontWeight;
        const fontSize = computedStyle.fontSize;
        const textShadow = computedStyle.textShadow;
        const letterSpacing = computedStyle.letterSpacing;
        const lineHeight = computedStyle.lineHeight;
        const textTransform = computedStyle.textTransform;
        const color = computedStyle.color;
        
        // Update typography previews with exact current styles
        // BUT keep each preview's own font-family
        const previewIds = [
            { id: 'preview-jakarta', font: "'Plus Jakarta Sans', sans-serif" },
            { id: 'preview-playfair', font: "'Playfair Display', serif" },
            { id: 'preview-jetbrains', font: "'JetBrains Mono', monospace" },
            { id: 'preview-lucky', font: "'Luckiest Guy', cursive" }
        ];
        
        previewIds.forEach(item => {
            const preview = document.getElementById(item.id);
            if (preview) {
                preview.textContent = previewText;
                // FORCE keep each preview's own font-family
                preview.style.fontFamily = item.font;
                preview.style.fontWeight = fontWeight;
                preview.style.fontSize = fontSize;
                preview.style.textShadow = textShadow;
                preview.style.letterSpacing = letterSpacing;
                preview.style.lineHeight = lineHeight;
                preview.style.textTransform = textTransform;
                preview.style.color = color;
            }
        });

        // Update font label and selected state based on current element's font
        const fontPreviewContainer = document.getElementById('fontPreviewContainer');
        if (fontPreviewContainer) {
            const fontOptions = {
                'Plus Jakarta Sans': 'Plus Jakarta Sans',
                'Playfair Display': 'Playfair Display',
                'JetBrains Mono': 'JetBrains Mono',
                'Luckiest Guy': 'Luckiest Guy'
            };

            // Find matching font and update label + selection
            let foundFont = false;
            fontPreviewContainer.querySelectorAll('.option-item').forEach(item => {
                const itemFont = item.dataset.val;
                const currentFontClean = currentFont.replace(/['"]/g, '').split(',')[0].trim();
                
                // Check if fonts match
                if (itemFont === currentFontClean || currentFont.includes(itemFont)) {
                    item.classList.add('selected');
                    // Update label to show actual font name
                    const fontName = fontOptions[itemFont] || itemFont;
                    document.getElementById('labelFont').textContent = fontName;
                    foundFont = true;
                } else {
                    item.classList.remove('selected');
                }
            });

            // If no exact match found, show "Custom"
            if (!foundFont) {
                document.getElementById('labelFont').textContent = 'Custom';
                fontPreviewContainer.querySelectorAll('.option-item').forEach(i => i.classList.remove('selected'));
            }
        }

        // Also apply styles to the text input so you see what you're typing
        const textInput = document.getElementById('textInput');
        if (textInput) {
            textInput.style.fontFamily = computedStyle.fontFamily;
            textInput.style.fontWeight = fontWeight;
            textInput.style.fontSize = fontSize;
            textInput.style.textShadow = textShadow;
            textInput.style.letterSpacing = letterSpacing;
            textInput.style.lineHeight = lineHeight;
            textInput.style.textTransform = textTransform;
            textInput.style.color = color;
        }
    }

    isNumberedItem(element) {
        if (!element || !element.textContent) return false;
        const text = element.textContent.trim();
        // Match patterns like "1.", "2.", "3.", etc.
        return /^\d+\./.test(text);
    }

    addToSelection(element) {
        // Add element to multi-select list when Shift+clicking
        if (!this.selectedElements.includes(element)) {
            this.selectedElements.push(element);
            element.style.outline = '2px dashed #ff6b3d';
            element.style.outlineOffset = '2px';
            console.log('[Customizer] Multi-select: Added element. Total selected:', this.selectedElements.length);
        }
        // Update panel to show it can apply to multiple elements
        this.updateMultiSelectUI();
    }

    clearSelection() {
        // Clear all selection outlines
        this.selectedElements.forEach(el => {
            el.style.outline = '';
            el.style.outlineOffset = '';
        });
        this.selectedElements = [];
    }

    updateMultiSelectUI() {
        // Show visual indicator for multi-select mode
        const pill = document.getElementById('pill');
        if (pill && this.selectedElements.length > 1) {
            pill.classList.add('multi-select-mode');
        } else if (pill) {
            pill.classList.remove('multi-select-mode');
        }
    }

    trackChange(type, data = {}) {
        if (!this.currentElement) return;
        
        // Save current state to undo stack
        const changeState = {
            type,
            element: this.currentElement,
            elementId: this.currentElement.id || this.currentElement.className,
            timestamp: Date.now()
        };

        // Store element state based on change type
        if (type === 'text') {
            changeState.oldText = this.currentElement.textContent;
        } else if (type === 'font') {
            changeState.oldFont = data.oldValue || this.currentElement.style.fontFamily;
            changeState.newFont = this.currentElement.style.fontFamily;
        } else if (type === 'color') {
            changeState.oldColor = this.getElementColor();
            changeState.newColor = data.value || this.currentElement.style.color;
        } else if (type === 'delete') {
            changeState.deletedHTML = this.currentElement.outerHTML;
            changeState.deletedParent = this.currentElement.parentElement;
        }

        this.undoStack.push(changeState);
        this.redoStack = []; // Clear redo stack on new change
        
        console.log('[Customizer] Change tracked:', type, this.undoStack.length, 'items');
    }

    getElementColor() {
        if (!this.currentElement) return '#0f172a';
        return window.getComputedStyle(this.currentElement).color || this.currentElement.style.color || '#0f172a';
    }

    undo() {
        if (this.undoStack.length === 0) {
            console.log('[Customizer] Nothing to undo');
            return;
        }

        const lastChange = this.undoStack.pop();
        console.log('[Customizer] Undoing:', lastChange.type);

        // Save current state to redo stack
        const redoState = { ...lastChange };
        if (lastChange.type === 'text') {
            redoState.newText = lastChange.element.textContent;
        } else if (lastChange.type === 'font') {
            redoState.currentFont = lastChange.element.style.fontFamily;
        } else if (lastChange.type === 'color') {
            redoState.currentColor = lastChange.element.style.color;
        } else if (lastChange.type === 'delete') {
            redoState.deletionTime = Date.now();
        }
        this.redoStack.push(redoState);

        // Apply undo
        switch (lastChange.type) {
            case 'text':
                lastChange.element.textContent = lastChange.oldText;
                break;
            case 'font':
                lastChange.element.style.setProperty('font-family', lastChange.oldFont, 'important');
                break;
            case 'color':
                lastChange.element.style.setProperty('color', lastChange.oldColor, 'important');
                break;
            case 'delete':
                if (lastChange.deletedParent) {
                    lastChange.deletedParent.innerHTML += lastChange.deletedHTML;
                }
                break;
        }

        this.updatePanel();
    }

    redo() {
        if (this.redoStack.length === 0) {
            console.log('[Customizer] Nothing to redo');
            return;
        }

        const lastUndo = this.redoStack.pop();
        console.log('[Customizer] Redoing:', lastUndo.type);

        // Save current state back to undo stack
        const undoState = { ...lastUndo };
        this.undoStack.push(undoState);

        // Apply redo
        switch (lastUndo.type) {
            case 'text':
                lastUndo.element.textContent = lastUndo.newText;
                break;
            case 'font':
                lastUndo.element.style.setProperty('font-family', lastUndo.newFont, 'important');
                break;
            case 'color':
                lastUndo.element.style.setProperty('color', lastUndo.newColor, 'important');
                break;
            case 'delete':
                if (lastUndo.deletedParent) {
                    lastUndo.deletedParent.innerHTML += lastUndo.deletedHTML;
                }
                break;
        }

        this.updatePanel();
    }

    updatePanel() {
        // Refresh the panel if an element is currently selected
        if (this.currentElement && this.panel && this.panel.style.display !== 'none') {
            const textInput = document.getElementById('textInput');
            if (textInput) {
                textInput.value = this.currentElement.textContent || '';
            }
            const colorIndicator = document.getElementById('colorIndicator');
            const hexVal = document.getElementById('hexVal');
            const color = window.getComputedStyle(this.currentElement).color || '#0f172a';
            if (colorIndicator) colorIndicator.style.background = color;
            if (hexVal) hexVal.textContent = this.rgbToHex(color).toUpperCase();
        }
    }

    rgbToHex(rgb) {
        // Handle hex input
        if (rgb.startsWith('#')) return rgb;
        
        const matches = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        if (!matches) return '#0f172a';
        
        const r = parseInt(matches[1]).toString(16).padStart(2, '0');
        const g = parseInt(matches[2]).toString(16).padStart(2, '0');
        const b = parseInt(matches[3]).toString(16).padStart(2, '0');
        return `#${r}${g}${b}`;
    }

    attachClickListeners() {
        console.log('[Customizer] Attaching text selection system');
        
        const preview = document.getElementById('templateVideoPreview');
        if (!preview) {
            console.log('[Customizer] Preview not found, retrying...');
            setTimeout(() => this.attachClickListeners(), 1000);
            return;
        }

        // Allow text selection
        preview.style.userSelect = 'text';
        preview.style.WebkitUserSelect = 'text';

        // Wrap individual text nodes in spans for precise selection
        // BUT only for custom/user-editable text, not for pre-styled template elements
        const wrapTextNodes = (element) => {
            // Skip wrapping for template elements that have complex styling
            const skipSelectors = ['.title', '.ranking-list', '.ranked-item', '.funniest', '.text-stroke', '[class*="rank-"]'];
            const hasTemplateStructure = skipSelectors.some(sel => element.querySelector(sel));
            
            if (hasTemplateStructure) {
                console.log('[Customizer] Skipping text wrapping for styled template');
                return;
            }
            
            const walker = document.createTreeWalker(
                element,
                NodeFilter.SHOW_TEXT,
                null,
                false
            );
            
            const nodesToWrap = [];
            let node;
            while (node = walker.nextNode()) {
                // Only wrap meaningful text (not whitespace/newlines between elements)
                if (node.textContent.trim().length > 0 && node.parentElement !== element) {
                    // Skip if already in a styled element (has class other than text-node-wrapper)
                    if (node.parentElement.className && 
                        (node.parentElement.className.includes('funniest') || 
                         node.parentElement.className.includes('text-stroke') ||
                         (node.parentElement.className && !node.parentElement.className.includes('text-node-wrapper')))) {
                        continue;
                    }
                    nodesToWrap.push(node);
                }
            }
            
            // Wrap nodes in reverse to maintain DOM order
            nodesToWrap.reverse().forEach(textNode => {
                // Final check: Skip if in styled span
                if (textNode.parentElement.tagName === 'SPAN' && textNode.parentElement.className) return;
                
                const span = document.createElement('span');
                span.className = 'text-node-wrapper';
                textNode.parentElement.insertBefore(span, textNode);
                span.appendChild(textNode);
            });
        };
        
        wrapTextNodes(preview);

        // Detect text selection within preview
        preview.addEventListener('mouseup', (e) => {
            // Skip if clicking on watermark
            if (e.target.closest('.solis-watermark')) return;
            
            // Skip gameplay selector
            if (e.target.closest('[data-no-text-select="true"]')) {
                console.log('[Customizer] Skipped gameplay selector area');
                return;
            }

            const isShiftHeld = e.shiftKey;
            
            // Prioritize the actual clicked element (e.target) for precise selection
            let target = e.target;
            
            // If clicking on text node wrapper, use it directly
            if (target.classList?.contains('text-node-wrapper')) {
                target = target;
            } else if (target && target !== preview && !target.closest('.solis-watermark')) {
                // Allow selecting all items including numbered ones
            }
            
            if (target && target !== preview && !target.closest('.solis-watermark')) {
                // Check if target has text content
                if (target.textContent?.trim() && target.textContent.trim().length < 200) {
                    e.stopPropagation();
                    console.log('[Customizer] Selected element:', target.textContent.trim().substring(0, 50));
                    
                    // Handle multi-select with Shift
                    if (isShiftHeld && this.currentElement) {
                        this.addToSelection(target);
                    } else {
                        this.showPanel(target, e.clientX, e.clientY);
                    }
                    return;
                }
            }
            
            // Fallback: If target didn't work, check text selection (for drag selection)
            const selection = window.getSelection();
            const selectedText = selection.toString().trim();
            
            if (selectedText && selectedText.length > 0) {
                let range = selection.getRangeAt(0);
                let container = range.commonAncestorContainer;
                
                if (container.nodeType === Node.TEXT_NODE) {
                    container = container.parentElement;
                }
                
                while (container && !container.textContent?.trim() && container !== preview) {
                    container = container.parentElement;
                }
                
                if (container && container !== preview && !container.closest('.solis-watermark')) {
                    e.stopPropagation();
                    console.log('[Customizer] Selected text from drag:', selectedText);
                    
                    if (isShiftHeld && this.currentElement) {
                        this.addToSelection(container);
                    } else {
                        this.showPanel(container, e.clientX, e.clientY);
                    }
                }
            }
        }, true);

        // Add visual feedback on text hover
        preview.addEventListener('mouseover', (e) => {
            const target = e.target;
            if (target && target !== preview && !target.closest('.solis-watermark')) {
                if (target.textContent?.trim() && target.textContent.trim().length < 200) {
                    target.style.cursor = 'pointer';
                    if (!target.style.background || target.style.background === '') {
                        target.style.transition = 'background 0.15s ease';
                    }
                }
            }
        });

        preview.addEventListener('mouseout', (e) => {
            const target = e.target;
            if (target && target._originalBg === undefined && target.style.background === 'rgba(255, 107, 0, 0.08)') {
                target.style.background = '';
            }
        });
    }

    /**
     * Collect all customizations from the preview HTML
     * Maps visual changes back to element IDs and properties
     */
    collectCustomizations() {
        const customizations = {};
        const preview = document.getElementById('templateVideoPreview');
        
        if (!preview) {
            console.log('[Customizer] Preview not found, cannot collect customizations');
            return customizations;
        }

        // Get all text elements in preview
        preview.querySelectorAll('[data-template-element-id]').forEach(element => {
            const elementId = element.getAttribute('data-template-element-id');
            if (!elementId) return;

            const computedStyle = window.getComputedStyle(element);
            const updates = {};

            // Collect text changes
            const elementText = element.textContent?.trim();
            if (elementText && elementText.length > 0 && elementText.length < 500) {
                updates.content = elementText;
            }

            // Collect color changes
            const color = computedStyle.color;
            if (color && color !== 'rgb(255, 255, 255)') { // Not default white
                const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
                if (rgbMatch) {
                    updates.color = [
                        parseInt(rgbMatch[1]),
                        parseInt(rgbMatch[2]),
                        parseInt(rgbMatch[3]),
                        255
                    ];
                }
            }

            // Collect font changes
            const fontFamily = computedStyle.fontFamily;
            if (fontFamily && fontFamily.length > 0) {
                updates.font = fontFamily.replace(/['"]/g, '').split(',')[0].trim();
            }

            // Only add if there are actual changes
            if (Object.keys(updates).length > 0) {
                customizations[elementId] = updates;
            }
        });

        console.log('[Customizer] Collected customizations:', customizations);
        return customizations;
    }

    /**
     * Save customizations to backend via API
     * Returns promise that resolves with customized config
     */
    async saveCustomizations(templateId = 'ranking_moments') {
        try {
            const customizations = this.collectCustomizations();
            
            if (Object.keys(customizations).length === 0) {
                console.log('[Customizer] No customizations to save');
                return null;
            }

            const apiBase = window.API_BASE_URL || 'https://api.solisai.video/api';
            const headers = getAuthHeaders();

            console.log('[Customizer] Sending customizations to backend...', {
                template_id: templateId,
                customizations: customizations
            });

            const response = await fetch(`${apiBase}/clips/apply-customizations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                },
                credentials: 'include',
                body: JSON.stringify({
                    template_id: templateId,
                    customizations: customizations
                })
            });

            if (!response.ok) {
                const error = await response.json();
                console.error('[Customizer] Failed to save customizations:', error);
                throw new Error(error.error || 'Failed to save customizations');
            }

            const result = await response.json();
            console.log('[Customizer] âœ… Customizations saved:', result.summary);
            
            // Store customizations for later use in video generation
            window.currentCustomizations = {
                template_id: templateId,
                customizations: customizations,
                timestamp: Date.now()
            };

            return result;
        } catch (error) {
            console.error('[Customizer] Error saving customizations:', error);
            throw error;
        }
    }

    /**
     * Get current customizations to include in video generation
     */
    getCustomizationsForGeneration() {
        if (!window.currentCustomizations) {
            return null;
        }
        
        // Only return if recent (within 5 minutes)
        const ageMs = Date.now() - window.currentCustomizations.timestamp;
        if (ageMs > 5 * 60 * 1000) {
            window.currentCustomizations = null;
            return null;
        }

        return window.currentCustomizations.customizations;
    }
}

const customizer = (() => {
    let instance = null;
    
    const createCustomizer = () => {
        if (instance) return instance;
        instance = new FloatingCustomizeBar();
        // ðŸŒ Export globally
        window.customizer = instance;
        return instance;
    };
    
    // Show gameplay panel - gets called after customizer is initialized
    window.showGameplayPanel = (clickX, clickY) => {
        console.log('[Gameplay Panel] Function called with coords:', clickX, clickY);
        const pill = document.getElementById('pill');
        console.log('[Gameplay Panel] Pill found?', !!pill);
        
        // PREVENT gameplay panel from showing if text customizer is active
        if (pill && pill.classList.contains('is-expanded')) {
            console.log('[Gameplay Panel] âš ï¸ Text customizer is active, blocking gameplay panel');
            return;
        }
        
        console.log('[Gameplay Panel] Pill element:', pill);
        
        if (!pill) {
            console.error('[Gameplay Panel] Pill container not found');
            return;
        }
        
        // Calculate positioning - show to the right of click, with margin
        const margin = 20;
        const panelWidth = 380;
        const panelHeight = 150;
        
        let x = clickX + margin;
        let y = clickY - panelHeight / 2;
        
        // Check if panel would go off right edge
        if (x + panelWidth > window.innerWidth) {
            x = clickX - panelWidth - margin;
        }
        
        // Keep within vertical bounds
        y = Math.max(20, Math.min(y, window.innerHeight - panelHeight - 20));
        
        // Remove previous gameplay-mode styles and apply custom positioning
        pill.classList.remove('gameplay-mode');
        pill.style.position = 'fixed';
        pill.style.bottom = 'auto';
        pill.style.right = 'auto';
        pill.style.top = y + 'px';
        pill.style.left = x + 'px';
        pill.style.transform = 'none';
        // Hide the menu items and show only the gameplay cards
        const pillActions = pill.querySelector('.pill-actions');
        if (pillActions) {
            pillActions.style.display = 'none';
        }
        
        // Make sure pill is visible
        pill.style.display = 'flex';
        console.log('[Gameplay Panel] Set pill display to flex');
        
        // Check computed styles
        const computed = window.getComputedStyle(pill);
        console.log('[Gameplay Panel] Pill styles - display:', computed.display, 'position:', computed.position, 'visibility:', computed.visibility);
        
        console.log('[Gameplay Panel] Creating/updating gameplay view');
        
        // Check if gameplayView already exists and is still properly attached
        let gameplayView = document.getElementById('gameplayView');
        let needsRecreate = !gameplayView || !gameplayView.parentElement;
        
        if (gameplayView && !needsRecreate) {
            // Reuse existing view - just update visibility
            console.log('[Gameplay Panel] Reusing existing gameplay view');
            gameplayView.style.display = 'flex';
            gameplayView.classList.add('visible');
        } else {
            // Create new view only if needed
            if (gameplayView) {
                gameplayView.remove();
            }
            
            gameplayView = document.createElement('div');
            gameplayView.id = 'gameplayView';
            gameplayView.className = 'view';
            gameplayView.style.cssText = 'display: flex; flex-direction: column; width: 100%; gap: 0;';
            
            const contentInner = pill.querySelector('.content-inner');
            console.log('[Gameplay Panel] Content inner found?', !!contentInner);
            if (contentInner) {
                contentInner.appendChild(gameplayView);
            }
            
            console.log('[Gameplay Panel] Rendering cards. Clips available:', availableGameplayClips.length);
            
            // Render gameplay cards - show all 4
            gameplayView.innerHTML = `
                <style>
                    @keyframes loadingSpinner {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    .gameplay-loading {
                        position: absolute;
                        inset: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: rgba(0, 0, 0, 0.5);
                        border-radius: 8px;
                        opacity: 0;
                        pointer-events: none;
                        transition: opacity 0.2s;
                    }
                    .gameplay-loading.active {
                        opacity: 1;
                    }
                    .gameplay-spinner {
                        width: 20px;
                        height: 20px;
                        border: 2px solid rgba(255, 107, 0, 0.3);
                        border-top-color: #ff6b00;
                        border-radius: 50%;
                        animation: loadingSpinner 0.6s linear infinite;
                    }
                </style>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; width: 100%;">
                    ${availableGameplayClips.slice(0, 4).map(clip => `
                        <div data-clip-id="${clip.id}" class="gameplay-card-option" 
                             style="position: relative; width: 100%; aspect-ratio: 1; border-radius: 8px; overflow: hidden; cursor: pointer; border: 2px solid #e2e8f0; transition: all 0.3s; ${selectedGameplayClip === clip.id ? 'border-color: #ff6b00; box-shadow: 0 4px 12px rgba(255, 107, 0, 0.2);' : ''}">
                            <video style="width: 100%; height: 100%; object-fit: cover; display: block;" muted loop playsinline autoplay>
                                <source src="/assets/${clip.filename}" type="video/mp4">
                            </video>
                            <div class="gameplay-loading">
                                <div class="gameplay-spinner"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            
            console.log('[Gameplay Panel] Cards rendered');
            
            // Add click handlers - only add once
            gameplayView.querySelectorAll('.gameplay-card-option').forEach(card => {
                card.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent bubbling to document click handler
                    const clipId = card.dataset.clipId;
                    const clip = availableGameplayClips.find(c => c.id === clipId);
                    console.log('[Gameplay Panel] Card clicked:', clipId, clip);
                    
                    // Update selected clip variable
                    selectGameplayClip(clipId);
                    
                    // Update visual selection - remove from all cards
                    gameplayView.querySelectorAll('.gameplay-card-option').forEach(c => {
                        c.style.borderColor = '#e2e8f0';
                        c.style.boxShadow = 'none';
                    });
                    
                    // Add selection style to clicked card
                    card.style.borderColor = '#ff6b00';
                    card.style.boxShadow = '0 4px 12px rgba(255, 107, 0, 0.2)';
                    
                    // Show loading on this card
                    const loadingEl = card.querySelector('.gameplay-loading');
                    if (loadingEl) loadingEl.classList.add('active');
                    
                    // Update the main splitscreen video
                    setTimeout(() => {
                        const mainVideo = document.getElementById('splitscreenGameplayVideo');
                        if (mainVideo && clip) {
                            // Update the source element if it exists
                            const sourceEl = mainVideo.querySelector('source');
                            if (sourceEl) {
                                sourceEl.src = `/assets/${clip.filename}`;
                            } else {
                                // Fallback: set src directly on video element
                                mainVideo.src = `/assets/${clip.filename}`;
                            }
                            
                            mainVideo.load();
                            mainVideo.play().catch(err => {
                                console.log('[Gameplay Panel] Autoplay failed (expected in some browsers):', err);
                            });
                        }
                        
                        // Hide loading after 300ms
                        if (loadingEl) loadingEl.classList.remove('active');
                    }, 300);
                });
            });
        }
        
        console.log('[Gameplay Panel] Hiding other views and showing gameplay');
        
        // Hide other views and show gameplayView
        const allViews = pill.querySelectorAll('.view');
        console.log('[Gameplay Panel] Found', allViews.length, 'views total');
        allViews.forEach(v => {
            v.classList.remove('visible');
            v.style.display = 'none';
        });
        
        gameplayView.classList.add('visible');
        gameplayView.style.display = 'flex';
        pill.classList.add('is-expanded');
        pill.classList.add('slide-in');
        pill.classList.add('gameplay-mode');
        
        // Improved click-outside handler - use the global one from init() instead of adding another
        // Remove any OLD gameplay-specific handler first
        if (window.gameplayClickOutsideHandler) {
            document.removeEventListener('click', window.gameplayClickOutsideHandler);
            window.gameplayClickOutsideHandler = null;
        }
        
        console.log('[Gameplay Panel] Classes added to pill:', pill.className);
        console.log('[Gameplay Panel] âœ… Panel expanded and displayed');
    };
    
    // Wait for DOM to be interactive
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            console.log('[Customizer] DOM ready, initializing in 500ms');
            setTimeout(() => {
                createCustomizer();
                window.customizer = instance;
            }, 500);
        });
    } else {
        console.log('[Customizer] DOM already loaded, initializing in 500ms');
        setTimeout(() => {
            createCustomizer();
            window.customizer = instance;
        }, 500);
    }
})();