document.addEventListener("DOMContentLoaded", function () {
    var sidenav = document.getElementById("navbar");
    var menuicon = document.getElementById("menuicon");
    var closenav = document.getElementById("closenav");

    // Show menu
    menuicon.addEventListener("click", function () {
        sidenav.classList.remove("hidden");
    });

    // Hide menu
    closenav.addEventListener("click", function () {
        sidenav.classList.add("hidden");
    });
});