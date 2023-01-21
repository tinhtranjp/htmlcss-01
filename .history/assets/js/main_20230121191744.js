//main

function fixedChangeColor() {
  const fixed = document.querySelector(".fixed");
  if (!fixed) return;

  window.addEventListener("scroll", function () {
    const listNav = this.document.querySelectorAll(".nav-item");
ist    console.log("Abc");
    console.log(navItem.length);
    const scrollY = window.pageYOffset;
    if (scrollY >= 837) {
      navItem.classList.remove("active");
    }
  });
}

(() => {
  fixedChangeColor();
})();
