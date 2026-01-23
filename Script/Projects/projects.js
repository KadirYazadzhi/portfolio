document.addEventListener('DOMContentLoaded', () => {
    const categoriesContainer = document.getElementById('categories-container');
    const projectsDisplayArea = document.getElementById('projects-display-area');

    // Icon mapping for categories
    const categoryIcons = {
        'Cybersecurity': 'fa-solid fa-user-secret',
        'DevOps & Self-hosting': 'fa-solid fa-server',
        'Education': 'fa-solid fa-graduation-cap',
        'Programming': 'fa-solid fa-code'
    };

    let allProjects = [];

    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            allProjects = projects;
            const uniqueCategories = [...new Set(projects.map(p => p.category))].sort();

            // Render Category Cards
            uniqueCategories.forEach(category => {
                const catCard = document.createElement('div');
                catCard.classList.add('card', 'category-card');

                const iconClass = categoryIcons[category] || 'fa-solid fa-folder';
                catCard.innerHTML = `
                    <i class="${iconClass}"></i>
                    <h3>${category}</h3>
                `;

                catCard.addEventListener('click', () => {
                    // Remove active class from all
                    document.querySelectorAll('.category-card').forEach(c => {
                        c.classList.remove('active');
                    });

                    // Add active class to current
                    catCard.classList.add('active');

                    renderProjects(category);
                });

                categoriesContainer.appendChild(catCard);

                // Set 'Programming' as default active category
                if (category === 'Programming') {
                    catCard.classList.add('active');
                    renderProjects(category);
                }
            });
        })
        .catch(error => console.error('Error loading projects:', error));

    function renderProjects(category) {
        projectsDisplayArea.innerHTML = ''; // Clear current

        // Filter projects
        const filteredProjects = allProjects.filter(p => p.category === category);

        // Create Grid Container
        const grid = document.createElement('div');
        grid.classList.add('cards', 'projects-cards');

        filteredProjects.forEach(project => {
            const card = createProjectCard(project);
            grid.appendChild(card);
        });

        projectsDisplayArea.appendChild(grid);
    }
});

function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('card', 'project-card');

    // Left Section
    const leftSection = document.createElement('div');
    leftSection.classList.add('project-card-left-section');
    leftSection.innerHTML = '<i class="fa-solid fa-book-bookmark"></i>';

    // Right Section
    const rightSection = document.createElement('div');
    rightSection.classList.add('project-card-right-section');

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.classList.add('paragraph');
    description.textContent = project.description;

    const bottomSection = document.createElement('span');
    bottomSection.classList.add('project-card-right-section-bottom');

    if (project.languages) {
        project.languages.forEach(lang => {
            const langSpan = document.createElement('span');
            langSpan.classList.add('project-language');

            const iconSpan = document.createElement('span');
            iconSpan.classList.add('language', lang, 'language-icon');

            const nameP = document.createElement('p');
            nameP.classList.add('paragraph', 'language-name');

            let displayName = lang.toUpperCase();
            if (lang === 'csharp') displayName = 'C#';
            if (lang === 'cplus') displayName = 'C++';
            if (lang === 'javascript' || lang === 'js') displayName = 'JavaScript';

            nameP.textContent = displayName;

            langSpan.appendChild(iconSpan);
            langSpan.appendChild(nameP);
            bottomSection.appendChild(langSpan);
        });
    }

    rightSection.appendChild(title);
    rightSection.appendChild(description);
    rightSection.appendChild(bottomSection);

    card.appendChild(leftSection);
    card.appendChild(rightSection);

    card.addEventListener('click', () => {
        window.open(`https://github.com/KadirYazadzhi/${project.repo}`, '_blank');
    });

    return card;
}