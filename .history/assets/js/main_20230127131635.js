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

function valid(element, mess) {
  element.classList.add("valid");
  mess.classList.add("valid");
  element.classList.remove("invalid");
  mess.classList.remove("invalid");
}

function invalid(element, mess) {
  element.classList.remove("valid");
  element.classList.add("invalid");
  mess.classList.add("invalid");
  mess.classList.remove("valid");
}

function initForm() {
  let formValues = {};
  const form = document.getElementById("form");
  if (!form) return;
  const inputs = document.querySelectorAll("input");

  const email = document.querySelector("[name = email]");
  const password = document.querySelector("[name = password]");
  const checkpass = document.querySelector("[name = checkpass]");

  email.addEventListener("blur", () => {
    const mess = email.parentElement.querySelector(".messageError");
    const regexEmail =
      /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;

    if (!email.value) {
      invalid(email, mess);
      mess.textContent = "vui long nhap vao day";
      return;
    }

    if (!regexEmail.test(email.value)) {
      mess.textContent = "email khong hop le";
      invalid(email, mess);
    } else {
      valid(email, mess);
      mess.textContent = "email ngon r do anh zai oi";
    }
  });

  password.addEventListener("blur", () => {
    const mess = password.parentElement.querySelector(".messageError");
    if (!password.value) {
      invalid(password, mess);
      mess.textContent = "vui long nhap vao day";
      return;
    }
    if (password.value.length < 8) {
      mess.textContent = "vui long nhap toi thieu 8 ki tu";
      invalid(password, mess);
      return;
    }

    if (!/[A-Z]/.test(password.value)) {
      mess.textContent = "vui long nhap it nhat 1 chu in hoa";
      invalid(password, mess);
    } else {
      mess.textContent = "password valid";
      valid(password, mess);
    }
  });

  checkpass.addEventListener("blur", () => {
    const passwordValue = password.value;
    const mess = checkpass.parentElement.querySelector(".messageError");
    if (!checkpass.value) {
      invalid(checkpass, mess);
      mess.textContent = "vui long nhap vao day";
      return;
    }
    if (checkpass.value !== passwordValue) {
      invalid(checkpass, mess);
      mess.textContent = "sai roi ban oi";
    } else {
      mess.textContent = "PASS";
      valid(checkpass, mess);
    }
  });

  Array.from(inputs).forEach((input) => {
    const massage = input.parentElement.querySelector(".messageError");
    input.addEventListener("input", (e) => {
      input.classList.remove("valid");
      input.classList.remove("invalid");
      massage.classList.remove("invalid");
      massage.classList.remove("valid");
      massage.textContent = "";
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    Array.from(inputs).forEach((input) => {
      const message = input.parentElement.querySelector(".messageError");
      if (input.value.length === 0) {
        message.textContent = "vui long khong bo trong";
        invalid(input, message);
      } else {
        let keyValues = input.getAttribute("name");
        formValues[keyValues] = input.value;
      }
    });
    console.log(formValues);
  });
}

function showModal() {
  const close = document.querySelector(".close");
  const modalBody = document.querySelector(".modal-body");
  const modalBtn = document.querySelectorAll(".showmodal");
  const modal = document.querySelector(".modal");
  Array.from(modalBtn).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      modal.classList.add("active");
    });
  });

  close.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (modalBody && modalBody.contains(e.target)) return;
    modal.classList.remove("active");
  });
}

function feedbackSlider() {
  const feedbackItem = document.querySelectorAll(".feedback .body");
  const itemWidth = feedbackItem[0].offsetWidth;
  const sliderAcition = document.querySelector(".feedback-body");
  const tick = document.querySelectorAll(".tick-group .tick");

  [...tick].forEach((item, index) => {
    item.addEventListener("click", (e) => {
      console.log(e.target.dataset.index);
      const slideIndex = parseInt(e.target.dataset.index);
      const postionX = slideIndex * itemWidth;
      sliderAcition.style = `transform: translateX(${postionX}px)`;
    });
  });
}

(() => {
  feedbackSlider();
  showModal();
  navLinkactive();
  activeFace();
  initForm();
})();
