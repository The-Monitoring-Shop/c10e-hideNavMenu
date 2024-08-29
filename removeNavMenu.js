
function hideNav() {
    var navigationBar = document.querySelector("nav");
    // var navigationBar = document.querySelector(".css-1821gv5");

    if (!navigationBar) {
        console.info('...waiting for navigationBar')
        window.setTimeout(hideNav, 200);
        return;
    } else {
        console.info('...hiding navigationBar')
        // navigationBar.style.display = 'none';
        navigationBar.remove()
    }
}

document.addEventListener("DOMContentLoaded", hideNav);
