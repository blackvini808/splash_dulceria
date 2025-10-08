let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {
  // Ajustes de tiempo más rápidos y fluidos
  const delayBetweenLetters = 200; // antes: 400 → más ágil
  const holdTime = 600;           // antes: 1000 → menos pausa
  const fadeDuration = 500;       // duración del fade
  const startDelay = 800;         // antes: 2000 → arranca casi de inmediato

  // Inicia animación tras pequeña pausa inicial
  setTimeout(() => {
    // Letras aparecen una a una
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, idx * delayBetweenLetters);
    });

    // Letras desaparecen una vez todas están visibles
    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, idx * 50);
      });
    }, logoSpan.length * delayBetweenLetters + holdTime);

    // Quita la pantalla de intro cuando acaba todo
    const totalTime =
      startDelay +
      logoSpan.length * delayBetweenLetters +
      holdTime +
      fadeDuration;

    setTimeout(() => {
      intro.style.top = '-100vh';
    }, totalTime);
  }, startDelay);
});
