//Responsive menu
var menuIcon = document.getElementById("menuicon");
var navbar = document.getElementById("navbar");
var closeNav = document.getElementById("closenav");

menuIcon.addEventListener("click", function () {
    navbar.classList.remove("hidden");
});

closeNav.addEventListener("click", function () {
    navbar.classList.add("hidden");
});

// Searching for products
var productContainer = document.getElementById("product-container");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productList.length; count++) {
        var productName =
            productList[count].querySelector("h3").textContent;

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
});