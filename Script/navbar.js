class NavbarManager {
    constructor() {
        this.body = document.querySelector("body");
        this.nav = document.querySelector("nav");
        this.modeToggle = document.querySelector(".dark-light");
        this.searchToggle = document.querySelector(".searchToggle");
        this.sidebarOpen = document.querySelector(".sidebarOpen");
        this.sidebarClose = document.querySelector(".siderbarClose");

        this.init();
    }

    init() {
        this.applySavedMode();
        this.setupEventListeners();
    }

    // Apply the saved theme mode from local storage
    applySavedMode() {
        const getMode = localStorage.getItem("mode");
        if (getMode && getMode === "dark-mode") {
            this.body.classList.add("dark");
            this.modeToggle.classList.toggle("active");
        }
    }

    setupEventListeners() {
        // Toggle dark and light mode
        this.modeToggle.addEventListener("click", () => {
            this.modeToggle.classList.toggle("active");
            this.body.classList.toggle("dark");

            // Save user selected mode to local storage
            if (!this.body.classList.contains("dark")) {
                localStorage.setItem("mode", "light-mode");
            } else {
                localStorage.setItem("mode", "dark-mode");
            }
        });

        // Toggle search box visibility
        this.searchToggle.addEventListener("click", () => {
            this.searchToggle.classList.toggle("active");
        });

        // Open sidebar
        this.sidebarOpen.addEventListener("click", () => {
            this.nav.classList.add("active");
        });

        // Close sidebar when clicking outside
        this.body.addEventListener("click", (e) => {
            const clickedElm = e.target;

            if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
                this.nav.classList.remove("active");
            }
        });
    }
}

// Initialize the NavbarManager when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    new NavbarManager();
});