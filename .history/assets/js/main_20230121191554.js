//main

function fixedChangeColor() {
  const fixed = document.querySelector(".fixed");
  if (!fixed) return;

  window.addEventListener("scroll", function () {
    const navItem = this.document.querySelectorAll(".nav-item");
    if (!navItem) return;
    console.log("Abc");
    console.log(navItem.length);
    const scrollY = window.pageYOffset;
    if (scrollY >= 837) {
    }
  });
}

(() => {
  fixedChangeColor();
})();
