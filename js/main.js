document.addEventListener("DOMContentLoaded", function(){
    var header = document.querySelector(".header");
    var burger = document.getElementById("burger");

    burger.addEventListener("click", function(event){
        event.stopPropagation(); // Prevent event propagation
        header.classList.toggle("open");
    });

    // Close menu when clicking outside menu or burger button
    document.addEventListener("click", function(event){
        var target = event.target;
        var isMenuOpen = header.classList.contains("open");
        var isBurgerClicked = target === burger;

        if (isMenuOpen && !isBurgerClicked && !header.contains(target)) {
            header.classList.remove("open");
        }
    });

    // Adjustments for screen widths between 1000px and 480px
    if (window.innerWidth <= 1000 && window.innerWidth >= 480) {
        // Show burger menu
        burger.style.display = "block";

        // Adjust burger menu position
        burger.style.position = "absolute";
        burger.style.top = "20px";
        burger.style.right = "20px";
    }
});