// Получить модальное окно
const modal = document.getElementById("modal-team");

// Получить кнопку, которая открывает модальное окно
const btn = document.getElementById("modal-team-Btn");

// Получить элемент <span>, который закрывает модальное окно
const span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальное окно
btn.onclick = function() {
  modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 