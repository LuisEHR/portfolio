const btn_language = document.querySelector("#btn-language");
const language_dropdown = document.querySelector("#language-dropdown-menu");

btn_language.addEventListener("click", () => {
  // Toggle dropdown
  language_dropdown.classList.toggle("hidden");

  // Change style btn_language
  if (language_dropdown.classList.contains("hidden")) {
    btn_language.classList.remove("bg-gray-800", "border-gray-700");
  } else {
    btn_language.classList.add("bg-gray-800", "border-gray-700");
  }
});
