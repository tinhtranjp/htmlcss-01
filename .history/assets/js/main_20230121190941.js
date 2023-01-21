//main

function fixedChangeColor() {
  const fixed = document.querySelector(".fixed");
  if (!fixed) return;

  window.addEventListener("scroll", function () {
    const scrollY = window.pageYOffset;
    if (scrollY >= 837) {
    }
  });
}

(() => {
  fixedChangeColor();
})();
