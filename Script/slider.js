document.addEventListener("DOMContentLoaded", () => {
  class CardSlider {
    constructor() {
      this.slider = document.querySelector(".slider");
      this.cards = document.querySelectorAll(".slider .card");
      this.prevButton = document.getElementById("prev");
      this.nextButton = document.getElementById("next");
      this.currentIndex = 0;
      this.cardWidth = 0;
      this.visibleCards = this.calculateVisibleCards();

      this.init();
      this.setupEventListeners();
      window.addEventListener("resize", this.handleResize.bind(this));
    }

    init() {
      if (this.cards.length > 0) {
        this.cardWidth = this.cards[0].offsetWidth + 16;
        this.updateSlider();
      }
    }

    calculateVisibleCards() {
      const containerWidth = this.slider.parentElement.offsetWidth;
      const cardComputedStyle = window.getComputedStyle(this.cards[0]);
      const cardMargin = parseFloat(cardComputedStyle.marginRight) + parseFloat(cardComputedStyle.marginLeft);
      const cardWidth = this.cards[0].offsetWidth + cardMargin;
      return Math.max(1, Math.floor(containerWidth / cardWidth));
    }

    updateSlider() {
      this.slider.style.transform = `translateX(-${this.currentIndex * this.cardWidth}px)`;
    }

    handlePrevClick() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.updateSlider();
      }
    }

    handleNextClick() {
      const maxIndex = Math.max(this.cards.length - this.visibleCards, 0);
      if (this.currentIndex < maxIndex) {
        this.currentIndex++;
        this.updateSlider();
      }
    }

    handleResize() {
      const newVisibleCards = this.calculateVisibleCards();
      if (newVisibleCards !== this.visibleCards) {
        this.visibleCards = newVisibleCards;
        this.cardWidth = this.cards[0].offsetWidth + 16;
        const maxIndex = Math.max(this.cards.length - this.visibleCards, 0);
        if (this.currentIndex > maxIndex) {
          this.currentIndex = maxIndex;
        }
        this.updateSlider();
      }
    }

    setupEventListeners() {
      this.prevButton.addEventListener("click", this.handlePrevClick.bind(this));
      this.nextButton.addEventListener("click", this.handleNextClick.bind(this));
    }
  }

  new CardSlider();
});