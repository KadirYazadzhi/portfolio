class LightboxManager {
    constructor() {
        this.lightbox = this.createLightbox();
        document.body.appendChild(this.lightbox);
        this.addEventListeners();
    }

    createLightbox() {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.style.cssText = 'display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0, 0, 0, 0.9);';

        const content = document.createElement('img');
        content.id = 'lightbox-img';
        content.style.cssText = 'margin: auto; display: block; max-width: 90%; max-height: 90%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);';

        const closeBtn = document.createElement('span');
        closeBtn.id = 'close-lightbox';
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cssText = 'position: absolute; top: 15px; right: 35px; color: #f1f1f1; font-size: 40px; font-weight: bold; transition: 0.3s; cursor: pointer;';

        lightbox.appendChild(closeBtn);
        lightbox.appendChild(content);
        return lightbox;
    }

    addEventListeners() {
        this.lightbox.querySelector('#close-lightbox').addEventListener('click', () => this.close());
        this.lightbox.addEventListener('click', (e) => {
            if (e.target.id === 'lightbox' || e.target.id === 'close-lightbox') {
                this.close();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.lightbox.style.display === 'block') {
                this.close();
            }
        });
    }

    open(imageSrc, altText) {
        const img = this.lightbox.querySelector('#lightbox-img');
        img.src = imageSrc;
        img.alt = altText;
        this.lightbox.style.display = 'block';
    }

    close() {
        this.lightbox.style.display = 'none';
        this.lightbox.querySelector('#lightbox-img').src = '';
    }
}

class CertificatesManager {
    constructor(lightboxManager) {
        this.modal = document.getElementById('certificatesModal');
        this.modalTitle = document.getElementById('modalTitle');
        this.certificatesGrid = document.getElementById('certificatesGrid');
        this.closeBtn = document.querySelector('.close-modal');
        this.cardsContainer = document.querySelector('.certificates-cards-modal');
        this.lightboxManager = lightboxManager;
        this.certificatesData = null;
        this.init();
    }

    init() {
        this.loadCertificatesData();
        this.addModalEventListeners();
    }

    loadCertificatesData() {
        fetch('Json/Certificates/certificates.json')
            .then(response => response.json())
            .then(data => {
                this.certificatesData = data.cards;
                this.addCardClickListeners();
            })
            .catch(error => console.error('Error loading certificates:', error));
    }

    addCardClickListeners() {
        this.cardsContainer.addEventListener('click', (e) => {
            const cardElement = e.target.closest('.certificates-card');
            if (!cardElement) return;

            const cardTitle = cardElement.querySelector('.paragraph').textContent.trim();
            const cardData = this.certificatesData.find(card => card.title === cardTitle);
            if (!cardData || cardData.certificates.length === 0) return;

            this.showCertificatesModal(cardData);
        });
    }

    createCertificateCard(cert) {
        const certCard = document.createElement('div');
        certCard.classList.add('certificate-card', 'card');
        certCard.tabIndex = 0;

        const img = document.createElement('img');
        img.src = cert.image;
        img.alt = cert.title;
        img.className = 'certificate-img';
        img.loading = 'lazy';

        const name = document.createElement('p');
        name.classList.add('certificate-name', 'paragraph');
        name.textContent = cert.title;

        certCard.appendChild(img);
        certCard.appendChild(name);

        certCard.addEventListener('click', () => {
            this.lightboxManager.open(cert.image, cert.title);
        });

        return certCard;
    }

    showCertificatesModal(cardData) {
        this.certificatesGrid.innerHTML = '';
        this.modalTitle.textContent = `${cardData.title} Certificates`;

        cardData.certificates.forEach(cert => {
            if (cert.image && cert.title) {
                const certCard = this.createCertificateCard(cert);
                this.certificatesGrid.appendChild(certCard);
            }
        });

        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    addModalEventListeners() {
        this.closeBtn.addEventListener('click', () => this.closeModal());

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'block') {
                this.closeModal();
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const lightboxManager = new LightboxManager();
    const certificatesManager = new CertificatesManager(lightboxManager);
});