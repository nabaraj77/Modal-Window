'use strict';
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const pra = document.querySelector('.pra');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModal);
}
let closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Woeking when pressing Esc key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
pra.addEventListener('click', openModal);
