document.addEventListener("DOMContentLoaded", () => {
  class CardSlider {
    constructor() {
      this.slider = document.querySelector(".slider");
      this.container = document.querySelector(".cards-container");
      this.cards = document.querySelectorAll(".slider .card");
      this.prevButton = document.getElementById("prev");
      this.nextButton = document.getElementById("next");
      
      this.currentIndex = 0;
      
      // Bind context
      this.updateSlider = this.updateSlider.bind(this);
      this.handleResize = this.handleResize.bind(this);
      
      this.init();
      this.setupEventListeners();
      window.addEventListener("resize", this.handleResize);
    }

    init() {
      if (!this.slider || this.cards.length === 0) return;
      this.calculateMetrics();
      this.updateButtons();
    }

    calculateMetrics() {
        if (this.cards.length === 0) return;

        // Get actual gap from CSS
        const style = window.getComputedStyle(this.slider);
        const gap = parseFloat(style.gap) || 0;
        
        // Get card width
        const cardWidth = this.cards[0].offsetWidth;
        
        // Total width of one "step"
        this.stepWidth = cardWidth + gap;
        
        // Calculate how many cards fit in the visible container
        const containerWidth = this.container.offsetWidth;
        this.visibleCards = Math.floor(containerWidth / this.stepWidth);
        
        // Ensure at least one card is considered visible
        if (this.visibleCards < 1) this.visibleCards = 1;

        // Max index we can scroll to
        // If we have 10 cards and can see 3, max index is 7 (so 7,8,9 are shown)
        this.maxIndex = Math.max(0, this.cards.length - this.visibleCards);
    }

    updateSlider() {
      // Clamp index
      if (this.currentIndex < 0) this.currentIndex = 0;
      if (this.currentIndex > this.maxIndex) this.currentIndex = this.maxIndex;

      const translateX = -(this.currentIndex * this.stepWidth);
      this.slider.style.transform = `translateX(${translateX}px)`;
      
      this.updateButtons();
    }

    updateButtons() {
        if (!this.prevButton || !this.nextButton) return;

        // Dim buttons if at start or end
        this.prevButton.style.opacity = this.currentIndex === 0 ? "0.5" : "1";
        this.prevButton.style.pointerEvents = this.currentIndex === 0 ? "none" : "auto";

        this.nextButton.style.opacity = this.currentIndex >= this.maxIndex ? "0.5" : "1";
        this.nextButton.style.pointerEvents = this.currentIndex >= this.maxIndex ? "none" : "auto";
    }

    handleResize() {
      // Recalculate dimensions on resize
      this.calculateMetrics();
      this.updateSlider(); // Adjust position if bounds changed
    }

    setupEventListeners() {
      if (this.prevButton) {
          this.prevButton.addEventListener("click", () => {
            if (this.currentIndex > 0) {
              this.currentIndex--;
              this.updateSlider();
            }
          });
      }

      if (this.nextButton) {
          this.nextButton.addEventListener("click", () => {
            if (this.currentIndex < this.maxIndex) {
              this.currentIndex++;
              this.updateSlider();
            }
          });
      }
    }
  }

  new CardSlider();
});
