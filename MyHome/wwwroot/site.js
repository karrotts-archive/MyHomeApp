function initializeContent() {
    var refreshRate = 1000;
    var date = new Date();

    document.getElementById('main-time').innerHTML = date.getHours() + ":" + date.getMinutes();
    setInterval(updateTime, refreshRate);
}

function updateTime() {
    var date = new Date();
    document.getElementById('main-time').innerHTML = date.getHours() + ":" + date.getMinutes();
}