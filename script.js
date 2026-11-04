const filters = [...document.querySelectorAll(".filter")];
const cards = [...document.querySelectorAll(".card")];
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");
let activeFilter = "all";
let language = "en";

function updateCards() {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const categoryMatch = activeFilter === "all" || card.dataset.category === activeFilter;
    const searchMatch = (card.dataset.search + " " + card.innerText).toLowerCase().includes(query);
    const show = categoryMatch && searchMatch;
    card.hidden = !show;
    if (show) visible++;
  });
  emptyState.hidden = visible !== 0;
  resultCount.textContent = `${String(visible).padStart(2, "0")} ${language === "en" ? "TITLES" : "عنوانونه"}`;
}
filters.forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filters.forEach(item => item.classList.toggle("active", item === button));
  updateCards();
}));
searchInput.addEventListener("input", updateCards);

document.getElementById("langToggle").addEventListener("click", () => {
  language = language === "en" ? "ps" : "en";
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ps" ? "rtl" : "ltr";
  document.body.dir = language === "ps" ? "rtl" : "ltr";
  document.querySelectorAll("[data-en][data-ps]").forEach(element => {
    element.innerHTML = element.dataset[language];
  });
  searchInput.placeholder = searchInput.dataset[`${language}Placeholder`];
  document.getElementById("langToggle").textContent = language === "en" ? "پښتو" : "English";
  updateCards();
});
updateCards();