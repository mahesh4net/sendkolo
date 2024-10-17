function showanswer(element) {
  let answer = document.querySelectorAll(".faq-answer");
  answer.forEach((item) => {
    if (item !== element.nextElementSibling) {
      item.classList.remove("faq-answer2");
      item.classList.remove("active-answer");
      console.log(item);
      console.log(element);
    }
  });

  element.nextElementSibling.classList.add("faq-answer2");
  element.nextElementSibling.classList.toggle("active-answer");
}

let containers = document.querySelectorAll(".feedback-container");
let image1 = document.querySelectorAll(".outer-img-container .feedback-img-1");
let image2 = document.querySelectorAll(".outer-img-container .feedback-img-2");
let count = 0;

function toggleReview() {
  containers.forEach((item) => {
    item.classList.remove("active-review-container");
  });

  image1.forEach((item) => {
    item.classList.remove("active-image");
  });
  image2.forEach((item) => {
    item.classList.remove("active-image");
  });

  image1[count].classList.add("active-image");
  image2[count].classList.add("active-image");
  containers[count].classList.add("active-review-container");
}

toggleReview();

function nextReview() {
  if (count == 3) {
    count = 0;
  } else {
    count++;
  }

  toggleReview();
}

function prevReview() {
  if (count == 0) {
    count = 3;
  } else {
    count--;
  }

  toggleReview();
}

let feedback = document.querySelector(".feedback");
let feedbackcontainer = document.querySelector(".feedback-container");

feedback.style.height = `${window.getComputedStyle(feedbackcontainer).height}`;



const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

