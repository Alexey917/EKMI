const dropdown = document.querySelector(".dropdown-list");
const hoverList = document.querySelector(".hover-list");
const language = document.getElementById("header__language");
const langSelectBtn = document.querySelector(".header__select-btn");
const langText = document.querySelector(".header__option_text");
const headerLink = document.querySelectorAll(".header__link");

selectLanguage = ["RU", "EN", "UA"];
catalog = [
  "Диваны",
  "Кресла",
  "Стулья",
  "Кровати",
  "Матрацы",
  "Пуфы",
  "Эксклюзивная мебель",
  "2D-3D модели",
];

langSelectBtn.addEventListener("click", () => {
  dropdown.style.display = "flex";
});

function useDropdownList(list, action, data, size) {
  list.innerHTML = "";
  list.classList.add(size);

  data.forEach((elem) => {
    const listItem = document.createElement("li");
    const listLink = document.createElement("a");
    listItem.classList.add(
      action === "hover" ? "choice-catalog-item" : "choice-language-item"
    );
    listLink.classList.add(
      action === "click" ? "choice-language" : "choice-catalog"
    );
    listLink.textContent = elem;
    listLink.setAttribute(
      "href",
      `${window.location.pathname}/${listLink.textContent}`
    );
    list.appendChild(listItem);
    listItem.appendChild(listLink);
  });

  behavior(action);
}

function behavior(action) {
  if (action === "click") {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("choice-language")) {
        langText.textContent = e.target.textContent;
        dropdown.style.display = "none";
      }
    });
  } else {
    headerLink[0].addEventListener("mouseenter", () => {
      hoverList.style.display = "flex";
    });

    hoverList.addEventListener("mouseleave", () => {
      hoverList.style.display = "none";
    });

    document.addEventListener("click", (e) => {
      if (!e.target.classList.contains("hover-list")) {
        hoverList.style.display = "none";
      }
    });
  }
}

useDropdownList(dropdown, "click", selectLanguage, "header__size-lang");
useDropdownList(hoverList, "hover", catalog, "header__size-catalog");
