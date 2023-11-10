const btn_language = document.querySelector("#btn-language");
const es_language = document.querySelector("#es-btn");
const en_language = document.querySelector("#en-btn");
const language_dropdown = document.querySelector("#language-dropdown-menu");

btn_language.addEventListener("click", () => {
  // Toggle dropdown
  language_dropdown.classList.toggle("hidden");

  // Change style btn_language
  if (language_dropdown.classList.contains("hidden")) {
    btn_language.classList.remove("bg-teal-500/20");
  } else {
    btn_language.classList.add("bg-teal-500/20");
  }
});

es_language.addEventListener("click", () => {
  // Add hidden class
  language_dropdown.classList.add("hidden");
});

en_language.addEventListener("click", () => {
  // Add hidden class
  language_dropdown.classList.add("hidden");
});
