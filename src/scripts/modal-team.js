import { refs } from "./refs";

// Когда пользователь нажимает на кнопку, откройте модальное окно
refs.modalTeamBtnOpen.onclick = function (event) {
  event.preventDefault();
  // refs.body.classList.toggle("no-scroll");
  refs.modalTeam.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
refs.modalTEamBtnClose.onclick = function () {
  // document.body.classList.remove('no-scroll');
  refs.modalTeam.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {
  // document.body.classList.remove('no-scroll');
  
  if (event.target === refs.modalTeam) {
    refs.modalTeam.style.display = "none";
  }
} 