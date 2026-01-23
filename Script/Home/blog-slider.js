document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('blog-track');
    const btnPrev = document.getElementById('blog-prev');
    const btnNext = document.getElementById('blog-next');
    
    if (!track || !btnPrev || !btnNext) return;

    let currentIndex = 0;

    function getItemsPerSlide() {
        if (window.innerWidth <= 600) return 1;
        if (window.innerWidth <= 900) return 2;
        return 3;
    }

    function updateSlider() {
        const items = track.querySelectorAll('.blog');
        const itemsPerSlide = getItemsPerSlide();
        const totalItems = items.length;
        
        // Calculate max index
        // If we have 6 items and show 3, we can go to index 0, 1, 2, 3.
        // at index 3: showing 3, 4, 5. (Wait, 0-based: items[3], items[4], items[5])
        // Max index = totalItems - itemsPerSlide
        const maxIndex = Math.max(0, totalItems - itemsPerSlide);

        // Clamp index
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;

        // Calculate move percentage
        // Each item width is roughly 100% / itemsPerSlide (ignoring gap logic for simple transform)
        // Actually, since we used gap in CSS, it's better to calculate the width of the first item
        
        const itemWidth = items[0].offsetWidth;
        const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
        const moveAmount = (itemWidth + gap) * currentIndex;

        track.style.transform = `translateX(-${moveAmount}px)`;
        
        // Update button states opacity
        btnPrev.style.opacity = currentIndex === 0 ? '0.3' : '1';
        btnPrev.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
        
        btnNext.style.opacity = currentIndex === maxIndex ? '0.3' : '1';
        btnNext.style.pointerEvents = currentIndex === maxIndex ? 'none' : 'auto';
    }

    btnPrev.addEventListener('click', () => {
        currentIndex--;
        updateSlider();
    });

    btnNext.addEventListener('click', () => {
        currentIndex++;
        updateSlider();
    });

    // Handle resize
    window.addEventListener('resize', () => {
        // Reset or adjust index on resize to prevent empty space
        updateSlider();
    });

    // Initial call
    // Wait slightly for layout to settle (e.g., images loading) or just call it
    // A small timeout helps with getting correct offsetWidth if not fully rendered
    setTimeout(updateSlider, 100);
});
