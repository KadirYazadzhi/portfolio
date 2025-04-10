class KeyboardNavigator {
    constructor() {
        this.config = {
            activeClass: 'active-element',
            focusableElements: 'h1, h2, h3, h4, h5, h6, .paragraph, a, button, .card, .bx',
            scrollBehavior: 'smooth',
            scrollOffset: 100, // Увеличаваме отстъпа
            scrollBlock: 'center' // Променяме на 'center' за по-добра видимост
        };

        this.allFocusableElements = [];
        this.currentActiveIndex = -1;
        this.isUserScrolling = false;
        this.scrollTimeout = null;

        this.init();
        this.setupScrollListener();
    }

    init() {
        this.cacheElements();
        this.setupEventListeners();
        this.addCustomStyles();
        if (this.allFocusableElements.length > 0) {
            this.activateElement(0);
        }
    }

    setupScrollListener() {
        let lastScrollPosition = window.scrollY;

        window.addEventListener('scroll', () => {
            // Маркираме, че потребителят скролва
            this.isUserScrolling = true;
            clearTimeout(this.scrollTimeout);

            this.scrollTimeout = setTimeout(() => {
                this.isUserScrolling = false;
            }, 100);

            lastScrollPosition = window.scrollY;
        });
    }

    cacheElements() {
        this.allFocusableElements = Array.from(
            document.querySelectorAll(this.config.focusableElements)
        ).filter(el => {
            return !el.hasAttribute('disabled') && this.isElementVisible(el);
        });
    }

    isElementVisible(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.width > 0 &&
            rect.height > 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    setupEventListeners() {
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    handleKeyDown(event) {
        if (['ArrowRight', 'ArrowLeft'].includes(event.key)) {
            event.preventDefault();

            if (this.isUserScrolling) return;

            const direction = event.key === 'ArrowRight' ? 1 : -1;
            this.navigate(direction);
        }
    }

    navigate(direction) {
        let nextIndex = this.currentActiveIndex + direction;

        // Ако сме извън границите, не правим нищо
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
        this.allFocusableElements.forEach(el =>
            el.classList.remove(this.config.activeClass)
        );
    }

    isValidIndex(index) {
        return index >= 0 && index < this.allFocusableElements.length;
    }

    applyActiveState(element) {
        element.classList.add(this.config.activeClass);
        element.focus({ preventScroll: true });

        // Добавяме ARIA атрибути за достъпност
        element.setAttribute('aria-current', 'true');
    }

    scrollToElement(element) {
        // Проверка дали елемента е изцяло видим
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

            // Допълнителен отстъп за по-добра видимост
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

            /* Анимация за внимание */
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
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    const navigator = new KeyboardNavigator();

    // Опционално: логване за дебъг
    window.debugNavigator = navigator;
});