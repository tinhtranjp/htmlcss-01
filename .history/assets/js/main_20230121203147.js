//main

function fixedChangeColor() {
  const fixed = document.querySelector(".fixed");
  if (!fixed) return;

  window.addEventListener("scroll", function () {
    const listNav = this.document.querySelectorAll(".nav-item");
    if (!listNav) return;
    const scrollY = window.pageYOffset;
    for (let i = 0; i < listNav.length; i++) {
      if (scrollY < 837) {
        [...listNav][i].classList.remove("active");
        [...listNav][0].classList.add("active");
      }

      if (scrollY >= 837 && scrollY < 1683) {
        [...listNav][i].classList.remove("active");
        [...listNav][1].classList.add("active");
      }

      if (scrollY >= 1683 && scrollY < 2266) {
        [...listNav][i].classList.remove("active");
        [...listNav][2].classList.add("active");
      }

      if (scrollY >= 2266 && scrollY < 3749) {
        [...listNav][i].classList.remove("active");
        [...listNav][3].classList.add("active");
      }
    }
  });
}

(() => {
  fixedChangeColor();
})();
