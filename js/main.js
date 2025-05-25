const phone = document.querySelector(".header__link_phone");
const container = document.querySelector(".container");

const headerTitleWrapper = document.querySelector(".header__title-wrapper");
const header = document.querySelector("header");

const headerNav = document.querySelector(".header__nav");

function AdaptiveHeaderPhone() {
  if (container.offsetWidth < 1024) {
    phone.textContent = '';
    phone.innerHTML = `
      <svg class="header__phone-icon">
        <use href="../assets/img/sprite.svg#phone"></use>
      </svg>  `
  } else {
    phone.textContent = '+38 (099)-638-45-37';
  }
}

function AdaptiveHeaderTitle() {
  if (container.offsetWidth < 1024) {
    headerTitleWrapper.innerHTML = `
      <h1 class="header__title"><span class="header__title_red-line">Л</span>УЧШАЯ ЖИЗНЬ,<br>
          СОЗДАННАЯ ДЛЯ ВАС!</h1>
    `;

  } else {
    headerTitleWrapper.innerHTML = `
      <h1 class="header__title">
        <span class="header__title_red-line">Л</span>УЧШАЯ<br>ЖИЗНЬ,<br>
          СОЗДАННАЯ<br>ДЛЯ ВАС!
      </h1>
      <a href="" class="header__title-link">перейти в каталог</a>
    `;
  }
}

function HeaderBurger() {
  if (container.offsetWidth < 768) {
    headerNav.innerHTML = `
      <ul class="header__list">
        <li><img src="../assets/img/logo.png" alt="Logo" class="logo"></li>

        <li id="header__language" class="header__option">
          <span class="header__option_text">RU</span>
          <button class="header__select-btn">
            <svg class="header__select-icon">
              <use href="../assets/img/sprite.svg#select"></use>
            </svg>
          </button>
          <ul class="dropdown-list">

          </ul>
        </li>

        <li>
          <a href="" class="header__link header__link_phone"></a>
        </li>

        <li>
          <svg class="header__burger-icon">
            <use href="../assets/img/sprite.svg#burger"></use>
          </svg>
        </li>
        
      </ul>
    `;

  } else {
    
  }
}


window.addEventListener('load', AdaptiveHeaderPhone);
window.addEventListener('resize', AdaptiveHeaderPhone);

window.addEventListener('load', AdaptiveHeaderTitle);
window.addEventListener('resize', AdaptiveHeaderTitle);

