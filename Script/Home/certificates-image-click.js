class CertificateModal {
    constructor() {
        this.certificateImages = document.querySelectorAll('.certificate-box img');
        if (this.certificateImages.length === 0) {
            console.warn('No certificate images found for modal');
            return;
        }
        this.init();
    }

    init() {
        this.setupCertificateClicks();
    }

    setupCertificateClicks() {
        this.certificateImages.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => this.handleImageClick(img));
        });
    }

    handleImageClick(img) {
        const modal = this.createModal(img);
        document.body.appendChild(modal);

        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
    }

    createModal(img) {
        const modal = document.createElement('div');
        modal.className = 'certificate-modal';

        const imgClone = img.cloneNode();
        imgClone.style.display = 'block';

        const closeBtn = this.createCloseButton(modal);

        modal.appendChild(closeBtn);
        modal.appendChild(imgClone);

        this.setupModalCloseEvents(modal);

        return modal;
    }

    createCloseButton(modal) {
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close-modal';
        closeBtn.innerHTML = '&times;';

        closeBtn.addEventListener('click', () => {
            this.closeModal(modal);
        });

        return closeBtn;
    }

    setupModalCloseEvents(modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal(modal);
            }
        });
    }

    closeModal(modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}