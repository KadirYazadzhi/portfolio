class AchievementsManager {
    constructor() {
        this.container = document.querySelector(".achievements-modal");
        this.cards = this.container ? this.container.querySelectorAll(".institution.card") : [];
        this.visibleCardsCount = 4;
        this.expanded = false;
        this.toggleLink = null;
        this.toggleText = null;

        if (this.container && this.cards.length > 0) {
            this.init();
        }
    }

    init() {
        this.createToggleControl();
        this.updateVisibility();
        this.setupEventListeners();
    }

    // Create the "View more/less" link and append it
    createToggleControl() {
        this.toggleLink = document.createElement("a");
        this.toggleLink.href = "javascript:void(0)";
        this.toggleLink.style.display = "block";
        this.toggleLink.style.textAlign = "center";
        this.toggleLink.style.marginTop = "30px";

        this.toggleText = document.createElement("p");
        this.toggleText.className = "small-paragraph half-opacity";
        this.toggleText.innerHTML = 'View more <i class="fa-solid fa-arrow-right"></i>';

        this.toggleLink.appendChild(this.toggleText);
        this.container.after(this.toggleLink);
    }

    // Update visibility of cards based on expanded state
    updateVisibility() {
        this.cards.forEach((card, index) => {
            if (!this.expanded && index >= this.visibleCardsCount) {
                card.style.display = "none";
            } else {
                card.style.display = "block";
            }
        });

        this.toggleText.innerHTML = this.expanded
            ? 'View less <i class="fa-solid fa-arrow-up"></i>'
            : 'View more <i class="fa-solid fa-arrow-down"></i>';
    }

    setupEventListeners() {
        this.toggleLink.addEventListener("click", () => {
            this.expanded = !this.expanded;
            this.updateVisibility();

            if (!this.expanded) {
                this.container.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new AchievementsManager();
});
