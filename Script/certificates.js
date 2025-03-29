document.addEventListener("DOMContentLoaded", async function () {
    const container = document.querySelector(".certificates-container");

    try {
        const response = await fetch("Json/certificates.json"); // Зарежда JSON файла
        const data = await response.json();

        Object.values(data).forEach(cert => {
            const certBox = document.createElement("div");
            certBox.classList.add("certificate-box");

            const img = document.createElement("img");
            img.src = cert.image;
            img.alt = "Certificate";

            const paragraph = document.createElement("p");
            paragraph.classList.add("paragraph");
            paragraph.textContent = cert.name;

            certBox.appendChild(img);
            certBox.appendChild(paragraph);
            container.appendChild(certBox);
        });
    } catch (error) {
        console.error("Error loading certificates:", error);
    }

    slider();
});
