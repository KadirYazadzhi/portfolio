class CertificateSlider {
    constructor(containerSelector = '.certificates-container') {
        this.container = document.querySelector(containerSelector);
        this.prevBtn = document.getElementById('cert-prev');
        this.nextBtn = document.getElementById('cert-next');

        this.animationId = null;
        this.isHovered = false;
        this.position = 0;
        this.speed = 1;
        this.currentIndex = 0;
        this.isMobile = false;
        this.resizeTimeout = null;

        // Bind methods
        this.animate = this.animate.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.onMouseEnter = () => this.isHovered = true;
        this.onMouseLeave = () => this.isHovered = false;

        if (!this.container) {
            console.warn('Slider container not found');
            return;
        }

        this.init();
        window.addEventListener('resize', this.handleResize);
    }

    init() {
        // Get fresh reference to original boxes only (exclude clones if any exist)
        this.boxes = Array.from(this.container.querySelectorAll('.certificate-box'))
            .filter(box => !box.classList.contains('clone'));

        if (this.boxes.length === 0) return;

        this.isMobile = window.innerWidth <= 768;

        if (this.isMobile) {
            this.setupMobile();
        } else {
            this.setupDesktop();
        }
    }

    handleResize() {
        // Debounce resize events to prevent performance lag during active scaling
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            const newIsMobile = window.innerWidth <= 768;
            // Re-init if switching modes or if we are in mobile (to recalculate widths)
            if (this.isMobile !== newIsMobile || this.isMobile) {
                this.cleanup();
                this.init();
            }
        }, 150);
    }

    cleanup() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }

        // Remove clones
        this.container.querySelectorAll('.clone').forEach(clone => clone.remove());

        // Reset style
        this.container.style.transform = 'translateX(0)';
        this.position = 0;

        // Clean up desktop event listeners properly using method references
        this.container.removeEventListener('mouseenter', this.onMouseEnter);
        this.container.removeEventListener('mouseleave', this.onMouseLeave);

        // Remove button listeners cleanly without dirty node-cloning tricks
        if (this.prevBtn) this.prevBtn.removeEventListener('click', this.prevSlide);
        if (this.nextBtn) this.nextBtn.removeEventListener('click', this.nextSlide);
    }

    /* ================= DESKTOP LOGIC ================= */

    setupDesktop() {
        this.createClones();
        this.calculateDimensions();

        this.container.addEventListener('mouseenter', this.onMouseEnter);
        this.container.addEventListener('mouseleave', this.onMouseLeave);

        this.startAnimation();
    }

    createClones() {
        // Double the content for smooth infinite scroll using a DocumentFragment for better performance
        const fragment = document.createDocumentFragment();
        this.boxes.forEach(box => {
            const clone = box.cloneNode(true);
            clone.classList.add('clone');
            fragment.appendChild(clone);
        });
        this.container.appendChild(fragment);
    }

    calculateDimensions() {
        if (!this.boxes[0]) return;
        const containerStyle = getComputedStyle(this.container);
        const gap = parseFloat(containerStyle.gap) || 0;

        // Use getBoundingClientRect to calculate layout precise fraction pixels regardless of CSS unit scales
        this.boxWidth = this.boxes[0].getBoundingClientRect().width + gap;
        this.originalWidth = this.boxWidth * this.boxes.length;
    }

    startAnimation() {
        if (this.animationId) cancelAnimationFrame(this.animationId);
        this.animationId = requestAnimationFrame(this.animate);
    }

    animate() {
        if (!this.isMobile) {
            if (!this.isHovered) {
                this.position -= this.speed;
                if (-this.position >= this.originalWidth) {
                    this.position += this.originalWidth;
                }
                this.container.style.transform = `translateX(${this.position}px)`;
            }
            this.animationId = requestAnimationFrame(this.animate);
        }
    }

    /* ================= MOBILE LOGIC ================= */

    setupMobile() {
        this.currentIndex = 0;
        this.updateMobileSlider();

        if (this.prevBtn) this.prevBtn.addEventListener('click', this.prevSlide);
        if (this.nextBtn) this.nextBtn.addEventListener('click', this.nextSlide);
    }

    getItemsPerSlide() {
        // Matches CSS media query for tablet/mobile
        return window.innerWidth <= 576 ? 1 : 2;
    }

    updateMobileSlider() {
        const itemsPerSlide = this.getItemsPerSlide();
        const totalItems = this.boxes.length;
        const maxIndex = Math.max(0, totalItems - itemsPerSlide);

        // Clamp index
        if (this.currentIndex < 0) this.currentIndex = 0;
        if (this.currentIndex > maxIndex) this.currentIndex = maxIndex;

        // Calculate dimensions
        if (!this.boxes[0]) return;
        const containerStyle = getComputedStyle(this.container);
        const gap = parseFloat(containerStyle.gap) || 0;
        const itemWidth = this.boxes[0].getBoundingClientRect().width;

        const moveAmount = (itemWidth + gap) * this.currentIndex;
        this.container.style.transform = `translateX(-${moveAmount}px)`;

        // Update Button States
        this.toggleButtonState(this.prevBtn, this.currentIndex === 0);
        this.toggleButtonState(this.nextBtn, this.currentIndex === maxIndex);
    }

    toggleButtonState(btn, isDisabled) {
        if (!btn) return;
        btn.style.opacity = isDisabled ? '0.3' : '1';
        btn.style.pointerEvents = isDisabled ? 'none' : 'auto';
        btn.setAttribute('aria-disabled', isDisabled); // Accessibility support bonus
    }

    prevSlide() {
        this.currentIndex--;
        this.updateMobileSlider();
    }

    nextSlide() {
        this.currentIndex++;
        this.updateMobileSlider();
    }
}