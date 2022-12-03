import { refs } from "./refs";

// Когда пользователь нажимает на кнопку, откройте модальное окно
refs.modalTeamBtnOpen.onclick = function() {
  refs.modalTeam.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
refs.modalTEamBtnClose.onclick = function() {
  refs.modalTeam.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target === refs.modalTeam) {
    refs.modalTeam.style.display = "none";
  }
} 