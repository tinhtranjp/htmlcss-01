//main

function fixedChangeColor() {
    const fixed = document.querySelector(".fixed");
    if (!fixed) return;
        
    }
    scrollY = window.pageYOffset;
    if (scrollY >= 837) {
        fixed.style.backgroundColor = "#fff"
    }
}

(() => {
  fixedChangeColor();
})();
