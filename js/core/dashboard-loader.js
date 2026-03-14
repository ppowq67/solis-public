// 🎬 Loader Animation Handler
(function() {
    const LOADER = 'solisLoaderShown';
    const loaderContainer = document.getElementById('loader-container');
    
    const hasShownLoader = sessionStorage.getItem(LOADER);
    
    if (hasShownLoader) {
        loaderContainer.classList.add('loader-hidden');
    } else {
        loaderContainer.classList.remove('loader-hidden');
        
        setTimeout(() => {
            loaderContainer.classList.add('loader-hidden');
            sessionStorage.setItem(LOADER, 'true');
        }, 3500);
    }
})();
