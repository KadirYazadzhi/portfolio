document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById('certificatesModal');
    const modalTitle = document.getElementById('modalTitle');
    const certificatesGrid = document.getElementById('certificatesGrid');
    const closeBtn = document.querySelector('.close-modal');

    // Зареждане на JSON данните
    fetch('Json/Certificates/certificates.json')
        .then(response => response.json())
        .then(data => {
            const cardsData = data.cards;
            const cardsContainer = document.querySelector('.certificates-cards-modal');

            // Добавяме click event listener към контейнера
            cardsContainer.addEventListener('click', function(e) {
                const cardElement = e.target.closest('.certificates-card');
                if (!cardElement) return;

                const cardTitle = cardElement.querySelector('.paragraph').textContent.trim();
                const cardData = cardsData.find(card => card.title === cardTitle);
                if (!cardData || cardData.certificates.length === 0) return;

                // Показване на модала
                showCertificatesModal(cardData);
            });

            // Функция за показване на модала със сертификати
            function showCertificatesModal(cardData) {
                // Изчистване на предишните сертификати
                certificatesGrid.innerHTML = '';

                // Задаване на заглавие
                modalTitle.textContent = `${cardData.title} Certificates`;

                // Добавяне на сертификатите
                cardData.certificates.forEach(cert => {
                    if (cert.image && cert.title) {
                        const certCard = document.createElement('div');
                        certCard.classList.add('certificate-card', 'card');

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
                        certificatesGrid.appendChild(certCard);
                    }
                });

                // Показване на модала
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }

            // Затваряне на модала при клик на X
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });

            // Затваряне на модала при клик извън съдържанието
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });

            // Затваряне с ESC ключ
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && modal.style.display === 'block') {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        })
        .catch(error => console.error('Error loading certificates:', error));
});