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

    // 4. Fetch JSON Meta Data
    fetch('Json/Blog/blogs.json')
        .then(response => response.json())
        .then(blogs => {
            const post = blogs.find(p => p.id === blogId);

            if (!post) {
                // Post ID not found
                window.location.href = 'index.html#blogs';
                return;
            }

            // 5. Render Meta Data
            document.title = `${post.title} - Kadir Yazadzhi`; 
            titleEl.textContent = post.title;
            dateEl.textContent = formatDate(post.date);
            readTimeEl.textContent = post.readTime;
            imageEl.src = post.image;
            imageEl.alt = post.title;

            // Render Tags
            tagsContainer.innerHTML = ''; 
            post.tags.forEach(tag => {
                const tagSpan = document.createElement('span');
                tagSpan.classList.add('blog-tag');
                tagSpan.textContent = tag;
                tagsContainer.appendChild(tagSpan);
            });

            // 6. Fetch and Render Markdown Content
            // We assume the markdown file is named matching the ID in Json/Blog/Content/
            return fetch(`Json/Blog/Content/${post.id}.md`);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Markdown file not found');
            }
            return response.text();
        })
        .then(markdownText => {
            // 7. Parse Markdown to HTML using marked.js
            // Ensure marked is loaded (handled in HTML)
            if (typeof marked !== 'undefined') {
                contentEl.innerHTML = marked.parse(markdownText);
            } else {
                contentEl.textContent = markdownText; // Fallback
                console.error('Marked.js library not found.');
            }
        })
        .catch(error => {
            console.error('Error loading blog post:', error);
            contentEl.innerHTML = '<p class="paragraph">Error loading content. Please try again later.</p>';
        });
});

// Helper to format date nicely (e.g., "Jan 20, 2025")
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}