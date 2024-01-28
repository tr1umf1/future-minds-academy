const defaultTitle = document.title;
const defaultFavicon = 'images/bag.png';

function updateFavicon(path) {
    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.type = 'image/png';
    favicon.rel = 'icon';
    favicon.href = path;
    const existingFavicon = document.querySelector("link[rel*='icon']");
    if (existingFavicon) {
        document.head.removeChild(existingFavicon);
    }
    document.head.appendChild(favicon);
}

function startFunction(newTitle) {
    document.title = newTitle;
    updateFavicon('images/bell.png'); 
    console.log('Function started with title:', newTitle);
}

function endFunction() {
    document.title = defaultTitle;
    updateFavicon(defaultFavicon);

    console.log('Function ended');
}