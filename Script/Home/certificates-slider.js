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

        // Bind methods
        this.animate = this.animate.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);

        if (!this.container) {
            console.warn('Slider container not found');
            return;
        }

        this.init();
        window.addEventListener('resize', this.handleResize);
    }

    init() {
        // Get fresh reference to original boxes only (exclude clones if any exist)
        this.boxes = Array.from(this.container.querySelectorAll('.certificate-box')).filter(box => !box.classList.contains('clone'));
        
        if (this.boxes.length === 0) return;

        this.isMobile = window.innerWidth <= 768;

        if (this.isMobile) {
            this.setupMobile();
        } else {
            this.setupDesktop();
        }
    }

    handleResize() {
        const newIsMobile = window.innerWidth <= 768;
        // Re-init if switching modes or if we are in mobile (to recalculate widths)
        if (this.isMobile !== newIsMobile || this.isMobile) {
            this.cleanup();
            this.init();
        }
    }

    cleanup() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }

        // Remove clones
        const clones = this.container.querySelectorAll('.clone');
        clones.forEach(clone => clone.remove());

        // Reset style
        this.container.style.transform = 'translateX(0)';
        this.position = 0;

        // Remove button listeners (cloning node is a dirty trick to wipe listeners, 
        // but simple reassignment or just ignoring listeners in desktop mode is easier. 
        // We'll manage listeners by checking isMobile inside them or re-adding them.)
        
        // Actually, easiest way to clear listeners is to clone the button nodes? 
        // Or just let them be active but do nothing if !isMobile.
        if (this.prevBtn) {
            const newPrev = this.prevBtn.cloneNode(true);
            this.prevBtn.parentNode.replaceChild(newPrev, this.prevBtn);
            this.prevBtn = newPrev;
        }
        if (this.nextBtn) {
            const newNext = this.nextBtn.cloneNode(true);
            this.nextBtn.parentNode.replaceChild(newNext, this.nextBtn);
            this.nextBtn = newNext;
        }
    }

    /* ================= DESKTOP LOGIC ================= */

    setupDesktop() {
        this.createClones();
        this.calculateDimensions();
        this.setupDesktopEvents();
        this.startAnimation();
    }

    createClones() {
        // Double the content for smooth infinite scroll
        this.boxes.forEach(box => {
            const clone = box.cloneNode(true);
            clone.classList.add('clone');
            this.container.appendChild(clone);
        });
    }

    calculateDimensions() {
        if (!this.boxes[0]) return;
        const containerStyle = getComputedStyle(this.container);
        this.boxWidth = this.boxes[0].offsetWidth + parseFloat(containerStyle.gap || 0);
        this.originalWidth = this.boxWidth * this.boxes.length;
    }

    setupDesktopEvents() {
        this.container.onmouseenter = () => this.isHovered = true;
        this.container.onmouseleave = () => this.isHovered = false;
        // Clear touch events for desktop mode to avoid conflict if hybrid device
        this.container.ontouchstart = null;
        this.container.ontouchend = null;
    }

    startAnimation() {
        this.animate();
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
        if (window.innerWidth <= 576) return 1;
        return 2; // Matches CSS media query for tablet/mobile
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
        const gap = parseFloat(containerStyle.gap || 0);
        const itemWidth = this.boxes[0].offsetWidth;
        
        const moveAmount = (itemWidth + gap) * this.currentIndex;
        this.container.style.transform = `translateX(-${moveAmount}px)`;

        // Update Button States
        if (this.prevBtn) {
            this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.3' : '1';
            this.prevBtn.style.pointerEvents = this.currentIndex === 0 ? 'none' : 'auto';
        }
        if (this.nextBtn) {
            this.nextBtn.style.opacity = this.currentIndex === maxIndex ? '0.3' : '1';
            this.nextBtn.style.pointerEvents = this.currentIndex === maxIndex ? 'none' : 'auto';
        }
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
