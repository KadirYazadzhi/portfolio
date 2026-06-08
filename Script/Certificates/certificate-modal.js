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

const ICON_MAPPING = {
    'HTML': '<i class="devicon-html5-plain colored"></i>',
    'CSS': '<i class="devicon-css3-plain colored"></i>',
    'Bootstrap': '<i class="devicon-bootstrap-plain colored"></i>',
    'Javascript': '<i class="devicon-javascript-plain colored"></i>',
    'Typescript': '<i class="devicon-typescript-plain colored"></i>',
    'C++': '<i class="devicon-cplusplus-plain colored"></i>',
    'C#': '<i class="devicon-csharp-plain colored"></i>',
    'Python': '<i class="devicon-python-plain colored"></i>',
    'SQL': '<i class="devicon-azuresqldatabase-plain colored"></i>',
    'MySQL': '<i class="devicon-mysql-original"></i>',
    'MSSQL': '<i class="devicon-microsoftsqlserver-plain colored"></i>',
    'Database': '<i class="fa-solid fa-database"></i>',
    'DataBase': '<i class="fa-solid fa-database"></i>',
    'Google': '<i class="devicon-google-plain colored"></i>',
    'Microsoft': `<div class="microsoft-logo">
                        <div class="square red"></div>
                        <div class="square green"></div>
                        <div class="square blue"></div>
                        <div class="square yellow"></div>
                    </div>`,
    'Other': '<i class="fa-solid fa-ellipsis"></i>',
    'React': '<i class="devicon-react-original colored"></i>',
    'Cybersecurity': '<i class="fa-solid fa-shield-halved"></i>',
    'Web Development and Design': '<i class="fa-solid fa-globe"></i>',
    'Crypto': '<i class="fa-solid fa-bitcoin-sign"></i>',
    // Institutions
    'SoftUni': '<i class="fa-solid fa-graduation-cap"></i>',
    'HackerRank': '<i class="fa-brands fa-hackerrank"></i>',
    'SoloLearn': '<i class="fa-solid fa-code"></i>',
    'FreeCodeCamp': '<i class="fa-brands fa-free-code-camp"></i>',
    'Great Learning': '<i class="fa-solid fa-book-open"></i>',
    'Simplilearn': '<i class="fa-solid fa-book"></i>',
    'Udemy': '<i class="fa-solid fa-chalkboard-user"></i>',
    'Cisco': '<i class="fa-solid fa-network-wired"></i>',
    'SWU': '<i class="fa-solid fa-building-columns"></i>',
    'UniBIT': '<i class="fa-solid fa-university"></i>',
    'Code@Burgas': '<i class="fa-solid fa-laptop-code"></i>'
};

class CertificatesManager {
    constructor(lightboxManager) {
        this.modal = document.getElementById('certificatesModal');
        this.modalTitle = document.getElementById('modalTitle');
        this.certificatesGrid = document.getElementById('certificatesGrid');
        this.closeBtn = document.querySelector('.close-modal');
        this.cardsContainer = document.querySelector('.certificates-cards-modal');
        this.listViewContainer = document.getElementById('certificates-list-view');
        this.lightboxManager = lightboxManager;
        
        // Filter Elements
        this.filterRadios = document.querySelectorAll('input[name="cert-filter"]');
        this.searchInput = document.getElementById('cert-search');
        this.viewToggleBtn = document.getElementById('view-toggle-btn');
        
        this.certificatesData = null;
        this.allCertificates = [];
        this.currentFilter = 'type'; // 'type' or 'institution'
        this.viewMode = 'categories'; // 'categories' or 'list'
        this.searchQuery = '';
        
        this.init();
    }

    init() {
        this.loadCertificatesData();
        this.addModalEventListeners();
        this.addFilterEventListeners();
    }

    loadCertificatesData() {
        fetch('Json/Certificates/certificates.json')
            .then(response => response.json())
            .then(data => {
                this.certificatesData = data.cards;
                this.processCertificates();
                this.render();
            })
            .catch(error => console.error('Error loading certificates:', error));
    }

    processCertificates() {
        this.allCertificates = [];
        this.certificatesData.forEach(card => {
            card.certificates.forEach(cert => {
                this.allCertificates.push({
                    ...cert,
                    type: card.title
                });
            });
        });
    }

    addFilterEventListeners() {
        this.filterRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.currentFilter = e.target.value;
                this.render();
            });
        });

        this.searchInput.addEventListener('input', (e) => {
            this.searchQuery = e.target.value.toLowerCase();
            this.render();
        });

        this.viewToggleBtn.addEventListener('click', () => {
            this.viewMode = this.viewMode === 'categories' ? 'list' : 'categories';
            this.viewToggleBtn.classList.toggle('active', this.viewMode === 'list');
            this.viewToggleBtn.querySelector('i').className = this.viewMode === 'list' ? 'bx bx-grid-alt' : 'bx bx-list-ul';
            this.render();
        });
    }

    render() {
        const filteredCerts = this.allCertificates.filter(cert => 
            cert.title.toLowerCase().includes(this.searchQuery) || 
            cert.institution.toLowerCase().includes(this.searchQuery) ||
            cert.type.toLowerCase().includes(this.searchQuery)
        );

        if (this.viewMode === 'categories') {
            this.cardsContainer.style.display = 'grid';
            this.listViewContainer.style.display = 'none';
            this.renderCategoryView(filteredCerts);
        } else {
            this.cardsContainer.style.display = 'none';
            this.listViewContainer.style.display = 'grid';
            this.renderListView(filteredCerts);
        }
    }

    renderCategoryView(filteredCerts) {
        this.cardsContainer.innerHTML = '';
        
        // Group certificates
        const grouped = {};
        filteredCerts.forEach(cert => {
            const key = cert[this.currentFilter];
            if (!grouped[key]) grouped[key] = [];
            grouped[key].push(cert);
        });

        // Sort keys: "Other" should be last
        const keys = Object.keys(grouped).sort((a, b) => {
            if (a === 'Other') return 1;
            if (b === 'Other') return -1;
            return a.localeCompare(b);
        });

        keys.forEach(key => {
            const card = document.createElement('div');
            card.classList.add('certificates-card', 'card');
            
            const iconHtml = ICON_MAPPING[key] || '<i class="fa-solid fa-certificate"></i>';
            
            card.innerHTML = `
                ${iconHtml}
                <p class="paragraph">${key}</p>
            `;

            card.addEventListener('click', () => {
                this.showCertificatesModal(key, grouped[key]);
            });

            this.cardsContainer.appendChild(card);
        });
    }

    renderListView(filteredCerts) {
        this.listViewContainer.innerHTML = '';
        
        if (filteredCerts.length === 0) {
            this.listViewContainer.innerHTML = '<p class="paragraph">No certificates found.</p>';
            return;
        }

        filteredCerts.forEach(cert => {
            const certCard = this.createCertificateCard(cert);
            this.listViewContainer.appendChild(certCard);
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

        const inst = document.createElement('span');
        inst.classList.add('certificate-institution');
        inst.style.fontSize = '0.8rem';
        inst.style.opacity = '0.7';
        inst.textContent = cert.institution;

        certCard.appendChild(img);
        certCard.appendChild(name);
        certCard.appendChild(inst);

        certCard.addEventListener('click', () => {
            this.lightboxManager.open(cert.image, cert.title);
        });

        return certCard;
    }

    showCertificatesModal(title, certificates) {
        this.certificatesGrid.innerHTML = '';
        this.modalTitle.textContent = `${title} Certificates`;

        certificates.forEach(cert => {
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