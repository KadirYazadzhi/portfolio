class KeyboardNavigator {
    constructor() {
        this.config = {
            activeClass: 'active-element',
            focusableElements: 'h1, h2, h3, h4, h5, h6, .paragraph, a, button, .card, .bx, input:not([disabled]), textarea:not([disabled]), select:not([disabled])',
            scrollBehavior: 'smooth',
            scrollOffset: 100,
            scrollBlock: 'center'
        };

        this.allFocusableElements = [];
        this.currentActiveIndex = -1;
        this.isUserScrolling = false;
        this.scrollTimeout = null;
        this.isActive = false; // Flag to track if keyboard navigation is active

        this.setupInitialEventListeners(); // Listeners for the first arrow key press or Esc
    }

    init() {
        this.cacheElements();
        this.addCustomStyles();
        if (this.allFocusableElements.length > 0 && this.isActive) { // Activate only if active
            this.activateElement(0);
        }
    }

    setupInitialEventListeners() {
        document.addEventListener('keydown', this.handleInitialKeyDown.bind(this), { once: true }); // Listen only once
    }

    setupEventListeners() {
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    removeEventListeners() {
        document.removeEventListener('keydown', this.handleKeyDown.bind(this));
    }

    handleInitialKeyDown(event) {
        if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
            this.isActive = true;
            this.setupEventListeners(); // Add main listeners after first arrow key press
            this.init(); // Initialize navigation
        } else if (event.key === 'Escape') {
            this.deactivate(); // Deactivate immediately if Esc is pressed
        }
    }

    setupScrollListener() {
        let lastScrollPosition = window.scrollY;

        window.addEventListener('scroll', () => {
            this.isUserScrolling = true;
            clearTimeout(this.scrollTimeout);

            this.scrollTimeout = setTimeout(() => {
                this.isUserScrolling = false;
            }, 150);
        });
    }

    cacheElements() {
        this.allFocusableElements = Array.from(
            document.querySelectorAll(this.config.focusableElements)
        ).filter(el => {
            return this.isElementReallyVisible(el);
        });
    }

    isElementReallyVisible(el) {
        const rect = el.getBoundingClientRect();
        const style = getComputedStyle(el);
        return (
            rect.width > 0 &&
            rect.height > 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0 &&
            style.opacity !== '0' &&
            style.visibility !== 'hidden' &&
            style.display !== 'none'
        );
    }

    handleKeyDown(event) {
        if (event.key === 'Escape') {
            this.deactivate();
            return;
        }

        if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
            event.preventDefault();

            if (this.isUserScrolling || !this.isActive) return; // Check if active

            const direction = event.key === 'ArrowRight' ? 1 : -1;
            this.navigate(direction);
        }
    }

    navigate(direction) {
        let nextIndex = this.currentActiveIndex + direction;

        if (nextIndex < 0 || nextIndex >= this.allFocusableElements.length) {
            return;
        }

        this.activateElement(nextIndex);
    }

    activateElement(index) {
        this.removeActiveStateFromAll();

        if (this.isValidIndex(index)) {
            this.currentActiveIndex = index;
            const element = this.allFocusableElements[this.currentActiveIndex];

            this.applyActiveState(element);
            this.scrollToElement(element);
        }
    }

    removeActiveStateFromAll() {
        this.allFocusableElements.forEach(el => {
            el.classList.remove(this.config.activeClass);
            el.removeAttribute('aria-current');
        });
    }

    isValidIndex(index) {
        return index >= 0 && index < this.allFocusableElements.length;
    }

    applyActiveState(element) {
        element.classList.add(this.config.activeClass);
        element.focus({ preventScroll: true });
        element.setAttribute('aria-current', 'true');
    }

    scrollToElement(element) {
        const elementRect = element.getBoundingClientRect();
        const isFullyVisible = (
            elementRect.top >= 0 &&
            elementRect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );

        if (!isFullyVisible) {
            element.scrollIntoView({
                behavior: this.config.scrollBehavior,
                block: this.config.scrollBlock,
                inline: 'nearest'
            });

            window.scrollBy({
                top: -this.config.scrollOffset,
                behavior: this.config.scrollBehavior
            });
        }
    }

    addCustomStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .${this.config.activeClass} {
                position: relative;
                outline: 3px solid #3a86ff !important;
                outline-offset: 5px;
                box-shadow: 0 0 0 5px rgba(58, 134, 255, 0.3) !important;
                transition: all 0.3s ease;
                border-radius: 6px;
                z-index: 1000;
            }

            .${this.config.activeClass}::after {
                content: '←→';
                position: absolute;
                top: -30px;
                left: 50%;
                transform: translateX(-50%);
                background: #3a86ff;
                color: white;
                padding: 3px 10px;
                border-radius: 5px;
                font-size: 14px;
                font-weight: bold;
                z-index: 1001;
            }

            @keyframes pulse {
                0% { box-shadow: 0 0 0 0 rgba(58, 134, 255, 0.7); }
                70% { box-shadow: 0 0 0 10px rgba(58, 134, 255, 0); }
                100% { box-shadow: 0 0 0 0 rgba(58, 134, 255, 0); }
            }

            .${this.config.activeClass} {
                animation: pulse 1.5s ease-out;
            }
        `;
        document.head.appendChild(style);
    }

    deactivate() {
        this.isActive = false;
        this.removeEventListeners();
        this.removeActiveStateFromAll();
        this.currentActiveIndex = -1;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navigator = new KeyboardNavigator();
    window.debugNavigator = navigator;
});