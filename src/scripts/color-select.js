import {refs} from './refs'
const colorSelectorRef = document.querySelector(".color--input");

function changeColor() {

  if (refs.colorSelector.checked) {
    colorSelectorRef.value = "dark";
    localStorage.setItem("theme", "dark-color");
  } else {
    colorSelectorRef.value = "light";
    localStorage.setItem("theme", "light-color");
  }

    setColor()
  
};

function setColor() {
  const color = localStorage.getItem('theme');

  if (color === "dark-color") {
    colorSelectorRef.checked = true;
    colorSelectorRef.value = "dark";
    document.documentElement.classList ="dark-color";
    return
  }
  document.documentElement.classList = "light-color";
  colorSelectorRef.value = "light";
}

export { changeColor, setColor };

