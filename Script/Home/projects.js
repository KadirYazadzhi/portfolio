document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projects-cards');

    // The titles of the projects we want to display on the home page
    const featuredTitles = ["JudgeX", "P2PShare", "UniversitySystem", "puppeteer"];

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

    // Links Container (Placed as direct child for absolute positioning)
    const linksContainer = document.createElement('div');
    linksContainer.classList.add('project-links');

    // GitHub Icon (Always present if repo exists)
    if (project.repo_url || project.repo) {
        const repoUrl = project.repo_url || `https://github.com/KadirYazadzhi/${project.repo}`;
        const githubLink = document.createElement('a');
        githubLink.href = repoUrl;
        githubLink.target = '_blank';
        githubLink.innerHTML = '<i class="fa-brands fa-github"></i>';
        githubLink.title = 'View Source Code';
        githubLink.addEventListener('click', (e) => e.stopPropagation());
        linksContainer.appendChild(githubLink);
    }

    // Website Icon (Only if website_url exists)
    if (project.website_url) {
        const websiteLink = document.createElement('a');
        websiteLink.href = project.website_url;
        websiteLink.target = '_blank';
        websiteLink.innerHTML = '<i class="fa-solid fa-earth-americas"></i>';
        websiteLink.title = 'View Live Project';
        websiteLink.addEventListener('click', (e) => e.stopPropagation());
        linksContainer.appendChild(websiteLink);
    }

    rightSection.appendChild(title);
    rightSection.appendChild(description);
    rightSection.appendChild(bottomSection);

    card.appendChild(leftSection);
    card.appendChild(rightSection);
    card.appendChild(linksContainer); // Directly to card

    // Make card clickable
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        const repoUrl = project.repo_url || `https://github.com/KadirYazadzhi/${project.repo}`;
        if (repoUrl) {
             window.open(repoUrl, '_blank');
        }
    });

    return card;
}
