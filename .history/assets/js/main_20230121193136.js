//main

function fixedChangeColor() {
  const fixed = document.querySelector(".fixed");
  if (!fixed) return;

  window.addEventListener("scroll", function () {
    const listNav = this.document.querySelectorAll(".nav-item");
    if (!listNav) return;
    const scrollY = window.pageYOffset;
    for (const i = 0; i < listNav.length; i++) {
      if (scrollY < 837) {
        [...listNav][i].classList.remove("active");
        [...listNav][0].classList.add("active");
      } else {
        [...listNav][i].classList.remove("active");
        [...listNav][1].classList.add("active");
      }
    }
  });
}

(() => {
  fixedChangeColor();
})();
