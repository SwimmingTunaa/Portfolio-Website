
let navState = false;

function showNav()
{
    let navBar = document.getElementById("main-nav");
    navBar.classList.toggle("visible");
    navState = !navState;
}
