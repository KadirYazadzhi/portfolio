function slider() {
    const container = document.querySelector('.certificates-container');
    const boxes = document.querySelectorAll('.certificate-box');

    if (!container || boxes.length === 0) return;

    // Клонираме елементите за безкрайно движение
    const clones = Array.from(boxes).map(box => box.cloneNode(true));
    clones.forEach(clone => container.appendChild(clone));

    // Изчисляваме точната ширина
    const boxWidth = boxes[0].getBoundingClientRect().width +
        parseFloat(getComputedStyle(container).gap);
    const originalWidth = boxWidth * boxes.length;

    let position = 0;
    let animationId;
    let isHovered = false;
    const speed = 1;

    function animate() {
        if (!isHovered) {
            position -= speed;

            // Рестартираме позицията плавно
            if (-position >= originalWidth) {
                position += originalWidth;
            }

            container.style.transform = `translateX(${position}px)`;
        }
        animationId = requestAnimationFrame(animate);
    }

    // Стартираме анимацията
    animate();

    // Управление при hover
    container.addEventListener('mouseenter', () => isHovered = true);
    container.addEventListener('mouseleave', () => isHovered = false);

    // Оптимизации
    container.addEventListener('touchstart', () => isHovered = true);
    container.addEventListener('touchend', () => isHovered = false);
}