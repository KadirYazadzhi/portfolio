function initSearch() {
    // Проверяваме дали търсачката съществува
    const searchInput = document.getElementById('sectionSearch');
    if (!searchInput) {
        // Ако не съществува, опитваме отново след кратък таймаут
        setTimeout(initSearch, 100);
        return;
    }

    const dropdown = document.querySelector('.autocomplete-dropdown');

    // Събираме всички секции за търсене
    const sections = Array.from(document.querySelectorAll('section[id], h2[id], h3[id], .searchable-section'))
        .map(el => ({
            id: el.id,
            text: el.textContent.trim() || el.getAttribute('data-search-text') || el.id,
            element: el
        }))
        .filter(item => item.text.length > 0);

    // Функция за търсене
    function searchSections(query) {
        if (query.length < 1) return [];

        const lowerQuery = query.toLowerCase();
        return sections.filter(section =>
            section.text.toLowerCase().includes(lowerQuery))
            .sort((a, b) => {
                const aStartsWith = a.text.toLowerCase().startsWith(lowerQuery);
                const bStartsWith = b.text.toLowerCase().startsWith(lowerQuery);

                if (aStartsWith && !bStartsWith) return -1;
                if (!aStartsWith && bStartsWith) return 1;
                return a.text.length - b.text.length;
            });
    }

    // Показване на резултатите
    function showResults(results) {
        dropdown.innerHTML = '';

        if (results.length === 0) {
            dropdown.style.display = 'none';
            return;
        }

        results.forEach(result => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.textContent = result.text;
            item.tabIndex = 0;
            item.addEventListener('click', () => {
                scrollToSection(result.element);
                searchInput.value = result.text;
                dropdown.style.display = 'none';
            });
            dropdown.appendChild(item);
        });

        dropdown.style.display = 'block';
    }

    // Скрол до секция
    function scrollToSection(element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        const originalBg = element.style.backgroundColor;
        element.style.backgroundColor = 'rgba(255, 255, 0, 0.3)';
        setTimeout(() => {
            element.style.backgroundColor = originalBg;
        }, 2000);
    }

    // Event listeners
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (query.length >= 1) {
            const results = searchSections(query);
            showResults(results);
        } else {
            dropdown.style.display = 'none';
        }
    });

    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });

    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown') {
            const firstItem = dropdown.querySelector('.autocomplete-item');
            if (firstItem) firstItem.focus();
        }

        if (e.key === 'Enter') {
            const firstResult = dropdown.querySelector('.autocomplete-item');
            if (firstResult) {
                firstResult.click();
            }
        }
    });

    dropdown.addEventListener('keydown', function(e) {
        const items = Array.from(dropdown.querySelectorAll('.autocomplete-item'));
        const currentIndex = items.indexOf(document.activeElement);

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
            items[nextIndex].focus();
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
            items[prevIndex].focus();
        }
        else if (e.key === 'Enter') {
            if (document.activeElement.classList.contains('autocomplete-item')) {
                document.activeElement.click();
            }
        }
        else if (e.key === 'Escape') {
            dropdown.style.display = 'none';
            searchInput.focus();
        }
    });
}

// Стартираме функцията при зареждане и след това периодично проверяваме
document.addEventListener('DOMContentLoaded', initSearch);

// Ако страницата използва динамично зареждане
let checkCount = 0;
const maxChecks = 10;
const checkInterval = setInterval(() => {
    const searchInput = document.getElementById('sectionSearch');
    if (searchInput || checkCount >= maxChecks) {
        clearInterval(checkInterval);
        if (searchInput) initSearch();
    }
    checkCount++;
}, 200);