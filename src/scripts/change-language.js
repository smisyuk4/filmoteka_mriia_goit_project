import { ua, eng } from "./dictionary"
import { refs } from "./refs"

function setLanguage() {
  if (localStorage.getItem('siteOptions') === null) {
    localStorage.setItem("siteOptions", "ua");
  }
  const language = localStorage.getItem("siteOptions");

  let parseLanguage

    if (language === "eng") {
      parseLanguage = eng;
      if (refs.searchFormInputRef !== null) { refs.translateCheckboxRef.value = "eng"; }
    }
    if (language == "ua") {
      if (refs.searchFormInputRef !== null) {
        refs.translateCheckboxRef.checked = true;
        refs.translateCheckboxRef.value = "ua";
      }
      
      parseLanguage = ua;
    }    

  refs.elementForTranslate.forEach(el => { el.innerHTML = parseLanguage[el.dataset.text]; })

  if (refs.searchFormInputRef !==null){
    refs.searchFormInputRef.placeholder = parseLanguage["searchInput"];}
};

function changeLanguage() {  
  if (refs.translateCheckboxRef.checked) {
    refs.translateCheckboxRef.value = "ua";
    localStorage.setItem("siteOptions", "ua");
  } else {
    refs.translateCheckboxRef.value = "eng";
    localStorage.setItem("siteOptions", "eng");
  }

  setLanguage()
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

export { setLanguage, changeLanguage, makeLangParam };
