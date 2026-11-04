const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const searchInput = document.getElementById("searchInput");
const filters = [...document.querySelectorAll(".filter")];
const cards = [...document.querySelectorAll(".card")];
const emptyState = document.getElementById("emptyState");
let language = "en";
let activeFilter = "all";

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.body.dir = language === "ps" ? "rtl" : "ltr";
  document.querySelectorAll("[data-en][data-ps]").forEach((element) => {
    element.innerHTML = element.dataset[language];
  });
  if (searchInput) {
    searchInput.placeholder = searchInput.dataset[`${language}Placeholder`];
  }
  languageToggle.textContent = language === "en" ? "پښتو" : "English";
  languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Pashto" : "Switch to English");
}

function updateCards() {
  const term = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;
  cards.forEach((card) => {
    const matchesCategory = activeFilter === "all" || card.dataset.category === activeFilter;
    const matchesSearch = card.dataset.search.toLowerCase().includes(term) ||
      card.querySelector("h3").textContent.toLowerCase().includes(term);
    const visible = matchesCategory && matchesSearch;
    card.hidden = !visible;
    if (visible) visibleCount++;
  });
  emptyState.hidden = visibleCount !== 0;
}

languageToggle.addEventListener("click", () => setLanguage(language === "en" ? "ps" : "en"));
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => nav.classList.remove("open")));
searchInput.addEventListener("input", updateCards);
filters.forEach((button) => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filters.forEach((item) => item.classList.toggle("active", item === button));
  updateCards();
}));
setLanguage("en");
