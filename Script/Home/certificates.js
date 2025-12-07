class CertificateManager {
    constructor(containerSelector, jsonUrl) {
        this.container = document.querySelector(containerSelector);
        this.jsonUrl = jsonUrl;
    }

    async init() {
        try {
            await this.loadCertificates();
            return true; // Return success upon completion
        } catch (error) {
            console.error("Error initializing CertificateManager:", error);
            return false;
        }
    }

    async loadCertificates() {
        const response = await fetch(this.jsonUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        this.container.innerHTML = ''; // Clear container before adding

        Object.values(data).forEach(certData => {
            const certBox = this.createCertificateBox(certData);
            this.container.appendChild(certBox);
        });
    }

    createCertificateBox(certData) {
        const certBox = document.createElement("div");
        certBox.classList.add("certificate-box");

        const img = document.createElement("img");
        img.src = certData.image;
        img.alt = "Certificate";

        const paragraph = document.createElement("p");
        paragraph.classList.add("paragraph");
        paragraph.textContent = certData.name;

        certBox.appendChild(img);
        certBox.appendChild(paragraph);

        return certBox;
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const certManager = new CertificateManager(".certificates-container", "Json/Home/certificates.json");
    await certManager.init(); // Wait for loading to complete

    // Initialize slider after certificates are loaded
    const slider = new CertificateSlider();

    // Initialize modal
    const certificateModal = new CertificateModal();
});