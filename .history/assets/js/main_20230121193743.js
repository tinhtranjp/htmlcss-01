//main

function fixedChangeColor() {
  const fixed = document.querySelector(".fixed");
  if (!fixed) return;

  window.addEventListener("scroll", function () {
    const listNav = this.document.querySelectorAll(".nav-item");
    if (!listNav) return;
    let scrollY = window.pageYOffset;
    for (let i = 0; i < listNav.length; i++) {
      [...listNav][i].classList.remove("active");
      [...listNav][0].classList.add("active");
    }
  });
}

(() => {
  fixedChangeColor();
})();
