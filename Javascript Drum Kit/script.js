// Drum düğmelerini seçelim
const drumButtons = document.querySelectorAll('.drum');

// Düğmelere tıklama olayını ekleyelim
drumButtons.forEach(button => {
  button.addEventListener('click', () => playSound(button));
});

// Klavye olaylarını dinleyelim
document.addEventListener('keydown', event => {
  const key = event.key.toLowerCase();
  const button = document.querySelector(`.drum[data-key="${key}"]`);
  if (button) playSound(button);
});

function playSound(button) {
  const sound = new Audio(button.dataset.sound);
  sound.play();
  
  button.classList.add('pressed');
  setTimeout(() => {
    button.classList.remove('pressed');
  }, 100);
}
