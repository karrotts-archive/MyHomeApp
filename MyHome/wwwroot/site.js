function initializeContent() {
    var refreshRate = 1000;

    updateTime();
    setInterval(updateTime, refreshRate);
    setInterval(updateBackground, refreshRate * 300);
}

function updateTime() {
    var date = new Date();
    document.getElementById('main-time').innerHTML = date.getHours() + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
}

function updateBackground() {
    document.getElementById('main-image').style.backgroundImage = "url('https://source.unsplash.com/random?sig="+  Math.random() +"')";
}