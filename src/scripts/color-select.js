import {refs} from './refs'

function changeColor() {
  if (refs.colorSelector.checked) {
    refs.colorSelector.value = "dark";
    localStorage.setItem("theme", "dark-color");
  } else {
    refs.colorSelector.value = "light";
    localStorage.setItem("theme", "light-color");
  }

  setColor()  
};

function setColor() {
  const color = localStorage.getItem('theme');

  if (color === "dark-color") {
    if (refs.colorSelector !== null) {
      refs.colorSelector.checked = true;
      refs.colorSelector.value = "dark";
    }
    document.documentElement.classList ="dark-color";
    return
  }
  document.documentElement.classList = "light-color";
  if (refs.colorSelector !== null) {
    refs.colorSelector.value = "light";
  }
}

export { changeColor, setColor };

