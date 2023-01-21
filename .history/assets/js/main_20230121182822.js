//main

function fixedChangeColor() {
  const fixed = document.querySelector(".fixed");
  scollY = window.pageYOffset;
  console.log(scollY);
}

(() => {
  fixedChangeColor();
})();
