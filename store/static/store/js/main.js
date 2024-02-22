var sidePanelOpen = false;

function toggleNav() {
    if (!sidePanelOpen) {
        openNav();
        sidePanelOpen = true;
    } else {
        closeNav();
        sidePanelOpen = false;
    }
}

function openNav() {
    document.getElementById("mySidepanel").style.width = "220px";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}