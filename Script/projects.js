document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('projects-container');
    // Clear initial content (only structural container remains)
    // We will append category sections to the mainContainer's parent or restructure how we use it.
    // Actually, 'projects-container' was the flex grid. We need to clear it and potentially remove its class 
    // to act as a wrapper for multiple sections, OR we create sections outside/inside it.

    // Better approach: mainContainer will be the wrapper for EVERYTHING.
    // We will remove the specific grid classes from the main container in JS 
    // and apply them to the per-category grids.
    mainContainer.className = 'projects-wrapper'; // Reset classes
    mainContainer.style.display = 'flex';
    mainContainer.style.flexDirection = 'column';
    mainContainer.style.gap = '3rem';

    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            // Group projects by category
            const categories = {};
            projects.forEach(project => {
                const cat = project.category || 'Uncategorized';
                if (!categories[cat]) {
                    categories[cat] = [];
                }
                categories[cat].push(project);
            });

            // Iterate over categories and render
            for (const [categoryName, categoryProjects] of Object.entries(categories)) {

                // 1. Create Category Section Wrapper
                const section = document.createElement('div');
                section.classList.add('category-section');

                // 2. Create Header
                const header = document.createElement('h3');
                header.textContent = categoryName;
                header.style.marginBottom = '1rem';
                header.style.borderBottom = '1px solid var(--text-color-second)';
                header.style.paddingBottom = '0.5rem';
                header.style.color = 'var(--text-color)';
                header.style.fontSize = '1.5rem';

                section.appendChild(header);

                // 3. Create Grid for this category
                const grid = document.createElement('div');
                grid.classList.add('cards', 'projects-cards');
                grid.style.marginTop = '1rem'; // Ensure spacing from title

                categoryProjects.forEach(project => {
                    const card = createProjectCard(project);
                    grid.appendChild(card);
                });

                section.appendChild(grid);
                mainContainer.appendChild(section);
            }
        })
        .catch(error => console.error('Error loading projects:', error));
});

function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('card', 'project-card');
    card.style.cursor = 'pointer';

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
            iconSpan.classList.add('language', lang);

            const nameP = document.createElement('p');
            nameP.classList.add('paragraph');

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
        window.open(`project-details.html?repo=${project.repo}`, '_blank');
    });

    return card;
}
