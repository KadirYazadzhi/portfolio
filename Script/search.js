function initSearch() {
    const searchInput = document.getElementById('sectionSearch');
    if (!searchInput) {
        setTimeout(initSearch, 100);
        return;
    }

    const dropdown = document.querySelector('.autocomplete-dropdown');

    // Събираме всички видими заглавия на секции
    const sectionTitles = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
        .filter(heading => {
            // Намираме най-близката секция родител
            const section = heading.closest('section');
            return section && section.id;
        })
        .map(heading => {
            const section = heading.closest('section');
            return {
                id: section.id,
                text: heading.textContent.trim(),
                element: section
            };
        })
        .filter(item => item.text.length > 0);

    // Функция за търсене
    function searchSections(query) {
        if (query.length < 3) return []; // Минимум 3 символа

        const lowerQuery = query.toLowerCase();
        return sectionTitles.filter(section =>
            section.text.toLowerCase().includes(lowerQuery))
            .sort((a, b) => {
                // Първо секции, чиито заглавия започват с търсения текст
                const aStartsWith = a.text.toLowerCase().startsWith(lowerQuery);
                const bStartsWith = b.text.toLowerCase().startsWith(lowerQuery);
                if (aStartsWith && !bStartsWith) return -1;
                if (!aStartsWith && bStartsWith) return 1;
                // След това по дължина на заглавието
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

        element.classList.add('highlight');
        setTimeout(() => {
            element.classList.remove('highlight');
        }, 2000);
    }

    // Event listeners
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (query.length >= 3) {
            const results = searchSections(query);
            showResults(results);
        } else {
            dropdown.style.display = 'none';
        }
    });

    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });

    // Затваряне при натискане на Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            dropdown.style.display = 'none';
        }
    });
}

// Стартиране
document.addEventListener('DOMContentLoaded', initSearch);

// Проверка за динамично зареждане
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