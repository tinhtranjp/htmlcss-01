//main

function fixedChangeColor() {
  const fixed = document.querySelector(".fixed");
  if (!fixed) return;

  window.addEventListener("scroll", function () {
    const listNav = this.document.querySelectorAll(".nav-item");
    if (!listNav) return;
    const scrollY = window.pageYOffset;
    if (scrollY >= 837) {
      listNav.classList.remove("active");
      listNav[0].classList.add("active");
    }
  });
}

(() => {
  fixedChangeColor();
})();
