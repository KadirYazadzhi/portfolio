function certificateClick() {
    // Добавяме click event listener за всички certificate снимки
    const certificateImages = document.querySelectorAll('.certificate-box img');

    certificateImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            // Създаваме модалния елемент
            const modal = document.createElement('div');
            modal.className = 'certificate-modal';

            // Създаваме копие на снимката
            const imgClone = this.cloneNode();
            imgClone.style.display = 'block';

            // Създаваме бутон за затваряне
            const closeBtn = document.createElement('span');
            closeBtn.className = 'close-modal';
            closeBtn.innerHTML = '&times;';
            closeBtn.addEventListener('click', function() {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.remove();
                }, 300);
            });

            // Добавяме елементите в модала
            modal.appendChild(closeBtn);
            modal.appendChild(imgClone);

            // Добавяме модала в body
            document.body.appendChild(modal);

            // Активираме анимацията след малко забавяне
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);

            // Затваряне при клик извън снимката
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                    setTimeout(() => {
                        this.remove();
                    }, 300);
                }
            });
        });
    });
}