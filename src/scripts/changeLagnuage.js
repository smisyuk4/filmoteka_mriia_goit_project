import { ua, eng } from "./dictionary"

const translateCheckboxRef = document.querySelector(".translate");
console.log(translateCheckboxRef);

function setLagnuage() {
  if (localStorage.getItem('siteOptions') === null) {
    localStorage.setItem("siteOptions", "eng");
  }
 
  const language = localStorage.getItem("siteOptions");

  // console.log(translateCheckboxRef.checked);

  let parseLanguage

  if (language === "eng") {
    parseLanguage = eng;
  }
  if (language === "ua") {
    translateCheckboxRef.checked = true;
    parseLanguage = ua;
  }

  document.querySelectorAll('[data-text]')
    .forEach(el => { el.innerHTML = parseLanguage[el.dataset.text]; })
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
