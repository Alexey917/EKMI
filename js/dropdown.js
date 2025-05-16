const dropdown = document.getElementById("dropdown-list");
const language = document.getElementById("header__language");

selectLanguage = ['RU', 'EN', 'UA'];
catalog = ['Диваны', 'Кресла', 'Стулья', 'Кровати', 'Матрацы', 'Пуфы', 'Эксклюзивная мебель', '2D-3D модели'];

selectLanguage.forEach((elem) => {
  const listItem = document.createElement("li");
  listItem.classList.add("choice-language")
  listItem.textContent = elem;
  dropdown.appendChild(listItem);
})

document.addEventListener('click', (e) => {
  if(e.target.classList.contains("choice-language")) {
    language.textContent = e.target.textContent;
  }
})