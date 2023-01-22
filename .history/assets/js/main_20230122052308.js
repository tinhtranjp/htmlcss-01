function debounce(callback, wait) {
  let timeoutId;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(callback, wait);
  };
}

function navLinkactive() {
  const fixed = document.querySelector(".fixed");
  if (!fixed) return;

  function scrollActive() {
    const listNav = this.document.querySelectorAll(".nav-item");
    if (!listNav) return;
    const scrollY = window.pageYOffset;

    const heightHero = document.querySelector(".hero").offsetHeight + 28;
    const heightCourses =
      document.querySelector(".courses").offsetHeight + heightHero;

    const heighFeedback =
      document.querySelector(".feedback").offsetHeight + heightCourses;

    const heightFeatures1 = document.querySelector(".features").offsetHeight;
    const heightFeatures2 = document.querySelector(".features2").offsetHeight;
    const heightReviews = heightFeatures1 + heightFeatures2 + heighFeedback;

    const heightBlog =
      document.querySelector(".blog").offsetHeight + heighFeedback;
    // calc active nav-link boder bottom
    for (let i = 0; i < listNav.length; i++) {
      if (scrollY < heightHero) {
        [...listNav][i].classList.remove("active");
        [...listNav][0].classList.add("active");
      }

      if (scrollY >= heightHero && scrollY < heightCourses) {
        [...listNav][i].classList.remove("active");
        [...listNav][1].classList.add("active");
      }

      if (scrollY >= heightCourses && scrollY < heighFeedback) {
        [...listNav][i].classList.remove("active");
        [...listNav][2].classList.add("active");
      }

      if (scrollY >= heighFeedback && scrollY < heightReviews) {
        [...listNav][i].classList.remove("active");
        [...listNav][3].classList.add("active");
      }

      if (scrollY >= heightReviews) {
        [...listNav][i].classList.remove("active");
        [...listNav][4].classList.add("active");
      }
    }
  }
  window.addEventListener("scroll", debounce(scrollActive, 200));
}

function activeFace() {
  const listNav = document.querySelectorAll(".nav-link");

  [...listNav].forEach((item, index) => {
    item.addEventListener("click", () => {
      const title = document.getElementById(`nav-${index}`).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    });
  });
}

function showModal() {
  const modalBtn = document.querySelectorAll(".showmodal");
}

(() => {
  navLinkactive();
  activeFace();
  showModal();
})();
