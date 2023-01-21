//main

function fixedChangeColor() {
  const fixed = document.querySelector(".fixed");
  if (!fixed) return;

  if (scrollY >= 837) {
    fixed.style.backgroundColor = "#fff";
  }

  window.addEventListener("scroll", {
  scrollY = window.pageYOffset;


  });
}

(() => {
  fixedChangeColor();
})();
