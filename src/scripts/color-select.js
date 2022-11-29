import {refs} from './refs'
// const colorSelectorRef = document.querySelector(".color--input");
// console.log(colorSelectorRef);

function changeColor() {
  
  if (refs.colorSelector.checked) {
      refs.colorSelector.value = "dark";
      document.body.style.background = "grey";
    //   initialTheme(".dark-color");
  } else {
      refs.colorSelector.value = "light";
      document.body.style.background = "white";
    //   initialTheme(".light-color");
  }

};

function initialTheme(themeName) {
    // localStorage.setItem('theme', themeName)
    document.documentElement.classList = themeName
}

export { changeColor };