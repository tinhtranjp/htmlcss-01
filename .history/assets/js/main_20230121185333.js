//main

function fixedChangeColor() {
    const fixed = document.querySelector(".fixed");
    scrollY = window.pageYOffset;
    if (scrollY >= 837) {
        fixed && fixed.style.backgroundColor : "#fff";
    }
}

(() => {
  fixedChangeColor();
})();
