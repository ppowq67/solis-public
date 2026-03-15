        function analyzeVideoForCreate() {
            const urlInput = document.getElementById('youtubeUrlInput');
            if (urlInput && window.clipStudio && typeof window.clipStudio.processYouTubeUrl === 'function') {
                window.clipStudio.processYouTubeUrl();
            }
        }