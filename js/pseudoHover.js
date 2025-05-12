const option = document.querySelectorAll(".header__option_item");

option.forEach((elem) => {
  elem.addEventListener("mouseout", () => {
    elem.style.color = "rgba(52, 52, 52, 0.7)";
  });

  elem.addEventListener("mouseover", () => {
    elem.style.color = "#ff9619";
    elem.style.cursor = "pointer";
  });
})