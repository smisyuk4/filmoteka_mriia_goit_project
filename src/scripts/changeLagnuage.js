import { ua, eng } from "./dictionary"

const translateCheckboxRef = document.querySelector(".translate");

function setLagnuage() {

  if (!localStorage.getItem("Language").length) {
    localStorage.setItem("Language", JSON.stringify(eng));
  }
 
  const language = localStorage.getItem("Language");
  const parseLanguage = JSON.parse(language);

  document.querySelectorAll('[data-text]').forEach(el => {el.innerHTML = parseLanguage[el.dataset.text];})
};

function changeLagnuage() {
  
  if (translateCheckboxRef.checked) {
    translateCheckboxRef.value = "ua";
    localStorage.setItem("Language", JSON.stringify(ua));
  } else {
    translateCheckboxRef.value = "eng";
    localStorage.setItem("Language", JSON.stringify(eng));
  }

 setLagnuage()
};

export { setLagnuage, changeLagnuage };
