document.addEventListener("DOMContentLoaded", function () {
  const spans = document.querySelectorAll(".progress-bar span");
  const carouselSection = document.querySelector("#carouselExampleIndicators");

  // Fonction pour remplir les barres de progression
  function fillProgressBars() {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
      span.innerHTML = span.dataset.width;
    });
  }

  // IntersectionObserver pour observer quand le carousel entre dans le viewport
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fillProgressBars(); // Remplit les barres quand la section est visible
          observer.unobserve(carouselSection); // Arrête l'observation après l'animation
        }
      });
    },
    { threshold: 0.5 }
  ); // Commence l'animation lorsque 50% de la section est visible

  // Observer la section du carousel
  observer.observe(carouselSection);
});
