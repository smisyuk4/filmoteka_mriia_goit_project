import { ua, eng } from "./dictionary"

const translateCheckboxRef = document.querySelector(".translate");
const searchFormInputRef = document.querySelector(".search-form__input");

function setLagnuage() {
  if (localStorage.getItem('siteOptions') === null) {
    localStorage.setItem("siteOptions", "ua");
  }
  const language = localStorage.getItem("siteOptions");

  let parseLanguage

    if (language === "eng") {
      parseLanguage = eng;
      if (searchFormInputRef !== null) { translateCheckboxRef.value = "eng"; }
    }
    if (language == "ua") {
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

function makeLangParam(valueObj) {
    try {
        let langStorage = localStorage.getItem("siteOptions")

        if (langStorage === "ua") {
            valueObj.lang = '&language=uk'
            valueObj.imageLang = '&include_image_language=uk'
            valueObj.region = '&region=uk-UA'
        }

        if (langStorage === "en") {
            valueObj.lang = '&language=en'
            valueObj.imageLang = '&include_image_language=en'
            valueObj.region = '&region=en-US'
        }
    } catch (error) {
        console.log(error)
    }      

    return valueObj
}

export { setLagnuage, changeLagnuage, makeLangParam };
