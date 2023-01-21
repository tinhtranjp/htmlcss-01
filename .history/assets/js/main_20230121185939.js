//main

function fixedChangeColor() {
  const fixed = document.querySelector(".fixed");
  if (!fixed) return;

  

  window.addEventListener("scroll", {
  const scrollY = window.pageYOffset;
  if (scrollY >= 837) {
    fixed.style.backgroundColor = "#fff";
  }

  });
}

(() => {
  fixedChangeColor();
})();
