class SearchManager {
    constructor() {
        this.checkCount = 0;
        this.maxChecks = 10;
        this.checkInterval = null;
        this.searchInput = null;
        this.dropdown = null;
        this.sectionTitles = [];
        
        this.waitForInput();
    }

    // Wait for the search input to be present in the DOM
    waitForInput() {
        this.checkInterval = setInterval(() => {
            this.searchInput = document.getElementById('sectionSearch');
            if (this.searchInput || this.checkCount >= this.maxChecks) {
                clearInterval(this.checkInterval);
                if (this.searchInput) {
                    this.init();
                }
            }
            this.checkCount++;
        }, 200);
    }

    init() {
        this.dropdown = document.querySelector('.autocomplete-dropdown');
        if (!this.dropdown) return;

        this.indexSections();
        this.setupEventListeners();
    }

    // Index all headings within sections for search
    indexSections() {
        this.sectionTitles = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
            .filter(heading => {
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
    }

    // Filter sections based on query
    searchSections(query) {
        if (query.length < 3) return [];

        const lowerQuery = query.toLowerCase();
        return this.sectionTitles.filter(section =>
            section.text.toLowerCase().includes(lowerQuery))
            .sort((a, b) => {
                const aStartsWith = a.text.toLowerCase().startsWith(lowerQuery);
                const bStartsWith = b.text.toLowerCase().startsWith(lowerQuery);

                if (aStartsWith && !bStartsWith) return -1;
                if (!aStartsWith && bStartsWith) return 1;

                return a.text.length - b.text.length;
            });
    }

    // Display search results in the dropdown
    showResults(results) {
        this.dropdown.innerHTML = '';

        if (results.length === 0) {
            this.dropdown.style.display = 'none';
            return;
        }

        results.forEach(result => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.textContent = result.text;
            item.addEventListener('click', () => {
                this.scrollToSection(result.element);
                this.searchInput.value = result.text;
                this.dropdown.style.display = 'none';
            });
            this.dropdown.appendChild(item);
        });

        this.dropdown.style.display = 'block';
    }

    // Scroll to the selected section and highlight it
    scrollToSection(element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        element.classList.add('highlight');
        setTimeout(() => {
            element.classList.remove('highlight');
        }, 2000);
    }

    setupEventListeners() {
        this.searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (query.length >= 3) {
                const results = this.searchSections(query);
                this.showResults(results);
            } else {
                this.dropdown.style.display = 'none';
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.searchInput.contains(e.target) && !this.dropdown.contains(e.target)) {
                this.dropdown.style.display = 'none';
            }
        });

        // Close dropdown on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.dropdown.style.display = 'none';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SearchManager();
});