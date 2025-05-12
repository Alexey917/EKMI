const slider = document.querySelector(".header__slider");
const firstBtn = document.getElementById("btn-1");
const secondBtn = document.getElementById("btn-2");
const thirdBtn = document.getElementById("btn-3");
const pagination = document.querySelector(".pagination")

let currentSlide = 2;

const btns = [firstBtn, secondBtn, thirdBtn] 

function choiceSlide(btn) {
  btns.forEach(item => item.classList.remove("header__pagination-btn_active"))
  btn.classList.add("header__pagination-btn_active");
  currentSlide = btns.indexOf(btn) + 1;
}

function AutoPlay() {
  slider.innerHTML = `
    <source srcset="../assets/img/h_slider${currentSlide}.webp" type="image/webp" class="header__slider_animation">
    <source srcset="../assets/img/h_slider${currentSlide}.png" type="image/png">
    <img src="../assets/img/h_slider${currentSlide}.png" alt="h_slider${currentSlide}" class="header__slider_animation">
  `

  choiceSlide(btns[currentSlide - 1]);

  currentSlide === 3 ? currentSlide = 1 : currentSlide++;
}

document.addEventListener("click", (event) => {
    btns.forEach((item) => {
      if(event.target === item) {
        currentSlide = btns.indexOf(event.target) + 1;
        AutoPlay();
      } 
    })
  })

setInterval(AutoPlay, 4000)