import { ua, eng } from "./dictionary"

const translateCheckboxRef = document.querySelector(".translate");
const searchFormInputRef = document.querySelector(".search-form__input");

let parseLanguage

function setLagnuage() {
  if (localStorage.getItem('siteOptions') === null) {
    localStorage.setItem("siteOptions", "eng");
  }
 
  const language = localStorage.getItem("siteOptions");

    if (language === "eng") {
      parseLanguage = eng;
      if (searchFormInputRef !== null) { translateCheckboxRef.value = "eng"; }
    }
    if (language === "ua") {
      if (searchFormInputRef !== null) {
        translateCheckboxRef.checked = true;
        translateCheckboxRef.value = "ua";
      }
      parseLanguage = ua;
    }

  document.querySelectorAll('[data-text]').forEach(el => { el.innerHTML = parseLanguage[el.dataset.text]; })

  if (searchFormInputRef !==null){
   searchFormInputRef.placeholder = parseLanguage["searchInput"];}
};

function changeLagnuage() {
  
  if (translateCheckboxRef.checked) {
    translateCheckboxRef.value = "ua";
    localStorage.setItem("siteOptions", "ua");
  } else {
    translateCheckboxRef.value = "eng";
    localStorage.setItem("siteOptions", "eng");
  }

 setLagnuage()
};

export { setLagnuage, changeLagnuage };
