document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projects-cards');

    // The titles of the projects we want to display on the home page
    const featuredTitles = ["JudgeX", "WebIDE", "Document Converter", "ArtSync"];

    fetch('Json/Projects/projects.json')
        .then(response => response.json())
        .then(projects => {
            // Filter projects based on the title
            const featuredProjects = projects.filter(p => featuredTitles.includes(p.title));
            
            // Sort them to match the order in featuredTitles
            featuredProjects.sort((a, b) => {
                return featuredTitles.indexOf(a.title) - featuredTitles.indexOf(b.title);
            });

            // Clear existing static content if any (though we will remove it from HTML)
            projectsContainer.innerHTML = '';

            // Render
            featuredProjects.forEach(project => {
                const card = createProjectCard(project);
                projectsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading projects:', error));
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
            // Mimic the class structure from index.html: <span class="language html"></span>
            iconSpan.classList.add('language', lang); 

            const nameP = document.createElement('p');
            nameP.classList.add('paragraph');

            let displayName = lang.toUpperCase();
            if (lang === 'csharp') displayName = 'C#';
            if (lang === 'cplus') displayName = 'C++';
            if (lang === 'javascript' || lang === 'js') displayName = 'JavaScript';
            if (lang === 'ts') displayName = 'TypeScript';

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

    // Make card clickable
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        if (project.repo) {
             window.open(`https://github.com/KadirYazadzhi/${project.repo}`, '_blank');
        }
    });

    return card;
}
