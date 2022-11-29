import {refs} from './refs'
// const colorSelectorRef = document.querySelector(".color--input");
// console.log(colorSelectorRef);

function changeColor() {

    const color = localStorage.getItem('theme');

//   console.log(color);

  if (color === "dark") {
      initialTheme("dark-color");
      refs.colorSelector.value = "dark";
  }
  if (color === "light") {
      initialTheme("light-color");
      refs.colorSelector.value = "light";
  }
  
  if (refs.colorSelector.checked) {
    //   document.body.style.background = "grey";
      initialTheme("dark-color");
  } else {
    //   document.body.style.background = "white";
      initialTheme("light-color");
  }

};

function initialTheme(themeName) {
    localStorage.setItem('theme', themeName)
    document.documentElement.classList = themeName
}

export { changeColor, initialTheme };