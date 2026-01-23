document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const repo = params.get('repo');
    const container = document.getElementById('readme-content');
    const titleHeader = document.getElementById('project-title');

    if (!repo) {
        container.innerHTML = '<p>No project specified.</p>';
        return;
    }

    // Update title
    titleHeader.textContent = repo.replace(/-/g, ' ');

    const username = 'KadirYazadzhi';
    const branches = ['main', 'master'];

    const fetchReadme = async (branchIndex) => {
        if (branchIndex >= branches.length) {
            container.innerHTML = '<p>Failed to load README.md. Please check if the repository exists and is public.</p>';
            return;
        }

        const branch = branches[branchIndex];
        const baseUrl = `https://raw.githubusercontent.com/${username}/${repo}/${branch}/`;
        const url = `${baseUrl}README.md`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                fetchReadme(branchIndex + 1);
                return;
            }
            const markdown = await response.text();

            // Parse Markdown
            container.innerHTML = marked.parse(markdown);

            // POST-PROCESSING: Fix relative image paths
            const images = container.querySelectorAll('img');
            images.forEach(img => {
                const src = img.getAttribute('src');
                if (src && !src.startsWith('http') && !src.startsWith('//') && !src.startsWith('data:')) {
                    // Check if it starts with ./ or / and clean it
                    let cleanSrc = src;
                    if (cleanSrc.startsWith('./')) cleanSrc = cleanSrc.substring(2);
                    if (cleanSrc.startsWith('/')) cleanSrc = cleanSrc.substring(1);

                    img.src = `${baseUrl}${cleanSrc}`;
                }
            });

            // Fix relative links (e.g., [Docs](docs/index.md))
            const links = container.querySelectorAll('a');
            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
                    // Link to file blob viewer on GitHub, not raw
                    const blobBaseUrl = `https://github.com/${username}/${repo}/blob/${branch}/`;

                    let cleanHref = href;
                    if (cleanHref.startsWith('./')) cleanHref = cleanHref.substring(2);
                    if (cleanHref.startsWith('/')) cleanHref = cleanHref.substring(1);

                    link.href = `${blobBaseUrl}${cleanHref}`;
                    link.target = "_blank";
                }
            });

        } catch (error) {
            console.error(error);
            container.innerHTML = '<p>Error loading content.</p>';
        }
    };

    fetchReadme(0);
});
