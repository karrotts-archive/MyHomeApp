var nextImage;
var lockTransition;

function initializeContent() {
    var refreshRate = 1000;

    nextImage = preloadImage("https://source.unsplash.com/random?sig=" + Math.random());
    lockTransition = false;

    updateTime();
    setInterval(updateTime, refreshRate);
    setInterval(transitionBackground, refreshRate * 5);
}

function updateTime() {
    var date = new Date();
    document.getElementById('main-time').innerHTML = date.getHours() + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
}

var mainImageBlock = document.querySelector('.main-image-block');
mainImageBlock.addEventListener('transitionend', function () {
    if (!lockTransition) {
        lockTransition = !lockTransition;
        updateBackground();
    } else {
        lockTransition = !lockTransition;
    }
});

function transitionBackground() {
    document.getElementById('main-image-block').classList.add("main-image-transition");
}

function preloadImage(url) {
    var img = new Image();
    img.src = url;
    return img;
}

function updateBackground() {
    document.getElementById('main-image').style.backgroundImage = "url("+ nextImage.src +")";
    document.getElementById('main-image-block').classList.remove("main-image-transition");
    nextImage = preloadImage("https://source.unsplash.com/random?sig=" + Math.random());
}
