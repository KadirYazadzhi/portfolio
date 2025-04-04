class CertificateSlider {
    constructor(containerSelector = '.certificates-container') {
        this.container = document.querySelector(containerSelector);
        this.boxes = document.querySelectorAll('.certificate-box');
        this.animationId = null;
        this.isHovered = false;
        this.position = 0;
        this.speed = 1;

        if (!this.container || this.boxes.length === 0) {
            console.warn('Slider container or boxes not found');
            return;
        }

        this.init();
    }

    init() {
        this.createClones();
        this.calculateDimensions();
        this.setupEventListeners();
        this.startAnimation();
    }

    createClones() {
        const clones = Array.from(this.boxes).map(box => box.cloneNode(true));
        clones.forEach(clone => {
            clone.classList.add('clone');
            this.container.appendChild(clone);
        });
    }

    calculateDimensions() {
        const firstBox = this.boxes[0];
        if (!firstBox) return;

        const containerStyle = getComputedStyle(this.container);
        this.boxWidth = firstBox.offsetWidth + parseFloat(containerStyle.gap);
        this.originalWidth = this.boxWidth * this.boxes.length;
    }

    setupEventListeners() {
        this.container.addEventListener('mouseenter', () => this.isHovered = true);
        this.container.addEventListener('mouseleave', () => this.isHovered = false);
        this.container.addEventListener('touchstart', () => this.isHovered = true);
        this.container.addEventListener('touchend', () => this.isHovered = false);
    }

    startAnimation() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        this.animate();
    }

    animate() {
        if (!this.isHovered) {
            this.position -= this.speed;

            if (-this.position >= this.originalWidth) {
                this.position += this.originalWidth;
            }

            this.container.style.transform = `translateX(${this.position}px)`;
        }

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    refresh() {
        this.boxes = document.querySelectorAll('.certificate-box');
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        this.init();
    }
}