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

const ORIGINAL_ORDER = [
    'HTML', 'CSS', 'Bootstrap', 'Javascript', 'Typescript', 'C++', 'C#', 'Python', 'SQL', 'MySQL', 'MSSQL', 'Database', 'Google', 'Microsoft', 'Other'
];

const INSTITUTION_ORDER = [
    'SoftUni', 'SWU', 'TU VARNA', 'UniBIT', 'HackerRank', 'Great Learning', 'FreeCodeCamp', 'SoloLearn', 'Simplilearn', 'Udemy', 'Cisco', 'Code@Burgas', 'Google', 'Microsoft', 'Other'
];

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
    'Google': '<i class="devicon-google-plain colored"></i>',
    'Microsoft': `<div class="microsoft-logo">
                        <div class="square red"></div>
                        <div class="square green"></div>
                        <div class="square blue"></div>
                        <div class="square yellow"></div>
                    </div>`,
    'Other': '<i class="fa-solid fa-ellipsis"></i>',
    // Institutions
    'SoftUni': '<i class="fa-solid fa-graduation-cap" style="color: #ed1c24;"></i>',
    'SWU': '<i class="fa-solid fa-building-columns" style="color: #2c3e50;"></i>',
    'TU VARNA': '<i class="fa-solid fa-university" style="color: #2980b9;"></i>',
    'UniBIT': '<i class="fa-solid fa-school" style="color: #16a085;"></i>',
    'HackerRank': '<i class="devicon-hackerrank-plain colored"></i>',
    'Great Learning': '<i class="fa-solid fa-book-open" style="color: #3498db;"></i>',
    'FreeCodeCamp': '<i class="devicon-freecodecamp-plain"></i>',
    'SoloLearn': '<i class="fa-solid fa-code" style="color: #e67e22;"></i>',
    'Simplilearn': '<i class="fa-solid fa-certificate" style="color: #f1c40f;"></i>',
    'Udemy': '<i class="fa-solid fa-chalkboard-user" style="color: #a435f0;"></i>',
    'Cisco': '<i class="fa-solid fa-network-wired" style="color: #049fd9;"></i>',
    'Code@Burgas': '<i class="fa-solid fa-laptop-code" style="color: #27ae60;"></i>'
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

        let keys;
        if (this.currentFilter === 'type') {
            // Use original order for Type, excluding 'Other' for now to ensure it goes last
            const orderWithoutOther = ORIGINAL_ORDER.filter(k => k !== 'Other');
            keys = orderWithoutOther.filter(orderKey => grouped[orderKey]);
            
            // Add any missing types that might be in the JSON but not in ORIGINAL_ORDER (except 'Other')
            Object.keys(grouped).forEach(key => {
                if (!keys.includes(key) && key !== 'Other') keys.push(key);
            });
            
            // ALWAYS put Other at the end if it exists
            if (grouped['Other']) keys.push('Other');
        } else {
            // Use specific institution order
            const orderWithoutOther = INSTITUTION_ORDER.filter(k => k !== 'Other');
            keys = orderWithoutOther.filter(orderKey => grouped[orderKey]);
            
            // Add any missing institutions that might be in the JSON (alphabetical)
            Object.keys(grouped).sort().forEach(key => {
                if (!keys.includes(key) && key !== 'Other') keys.push(key);
            });
            
            if (grouped['Other']) keys.push('Other');
        }

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