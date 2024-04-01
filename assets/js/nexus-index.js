function resizeApp() {
    const app = document.getElementById("application");
    if(app) {
        if(window.innerWidth>768) {
            app.style.left = "15%";
            app.style.right = "15%";
            app.style.width = "70%";
        } else {
            app.style.left = "5%";
            app.style.right = "5%";
            app.style.width = "90%";
        }
    }
}
window.onresize = resizeApp;

function closeApp() {
    const app = document.getElementById("application");
    if(app) {
        app.style.display = "none";
    }
}

function maximizeApp() {
    window.location.href = "../app";
}

function minimizeApp() {
    window.location.href = "application.html";
}

function resolveParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.get("closeApp")!=null) {
        if(urlParams.get("closeApp")==="true") {
            closeApp();
            removeURLParameter("closeApp");
        }
    }
}

function removeURLParameter(paramKey) {
    const url = window.location.href;
    const regex = new RegExp('([&\\?])' + paramKey + '=[^&]*&?', 'g');
    const newURL = url.replace(regex, '$1').replace(/&$/, '');
    history.replaceState(null, null, newURL);
}