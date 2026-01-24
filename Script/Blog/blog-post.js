document.addEventListener('DOMContentLoaded', () => {
    // 1. Parse URL Parameters
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');

    // 2. Redirect Logic: If no ID, go back to home
    if (!blogId) {
        window.location.href = 'index.html#blogs';
        return;
    }

    // 3. Elements to Populate
    const titleEl = document.getElementById('blog-title');
    const dateEl = document.getElementById('blog-date');
    const readTimeEl = document.getElementById('blog-read-time');
    const tagsContainer = document.getElementById('blog-tags');
    const imageEl = document.getElementById('blog-image');
    const contentEl = document.getElementById('blog-content-body');

    // 4. Fetch Data
    fetch('Json/Blog/blogs.json')
        .then(response => response.json())
        .then(blogs => {
            const post = blogs.find(p => p.id === blogId);

            if (!post) {
                // Post ID provided but doesn't exist in JSON -> Redirect
                window.location.href = 'index.html#blogs';
                return;
            }

            // 5. Render Data
            document.title = `${post.title} - Kadir Yazadzhi`; // Update Page Title
            titleEl.textContent = post.title;
            dateEl.textContent = formatDate(post.date);
            readTimeEl.textContent = post.readTime;
            imageEl.src = post.image;
            imageEl.alt = post.title;
            
            // Render HTML content safely
            contentEl.innerHTML = post.content;

            // Render Tags
            tagsContainer.innerHTML = ''; // Clear placeholders
            post.tags.forEach(tag => {
                const tagSpan = document.createElement('span');
                tagSpan.classList.add('blog-tag');
                tagSpan.textContent = tag;
                tagsContainer.appendChild(tagSpan);
            });

        })
        .catch(error => {
            console.error('Error loading blog post:', error);
            // Optional: Show error message on page
            contentEl.innerHTML = '<p class="paragraph">Error loading content. Please try again later.</p>';
        });
});

// Helper to format date nicely (e.g., "Jan 20, 2025")
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}
