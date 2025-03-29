document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const cards = document.querySelectorAll(".slider .card");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  let currentIndex = 0;
  const visibleCards = 3;
  const cardWidth = cards[0].offsetWidth + 16;

  const updateSlider = () => { slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`; };

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < cards.length - visibleCards) {
      currentIndex++;
      updateSlider();
    }
  });

  updateSlider();
});
