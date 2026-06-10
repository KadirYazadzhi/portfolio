class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
           <footer class="section">
                <section class="container center footer">
                    <div class="bottom-section">
                        <div class="left-bottom-part">
                            <div class="contact-part">
                                <a href="https://garden.kadiryazadzhi.tech" target="_blank" class="footer-name-link">
                                    <h3>KadirYazadzhi</h3>
                                </a>
            
                                <div class="icons-box">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <p class="paragraph">Bulgaria</p>
                                </div>
            
                                <div class="icons-box">
                                    <i class="fa-solid fa-envelope"></i>
                                    <p class="paragraph">kadiryazadzhi@gmail.com</p>
                                </div>
                            </div>
            
                            <div class="social-part">
                                <h3>Social Media</h3>
            
                                <div class="social-icons">
                                    <a aria-label="facebook" href="https://www.instagram.com/_qzadji_/?igsh=bGx3djFjeHhheTFm#" target="_blank" class="social-icon">
                                        <i class="fa-brands fa-facebook"></i>
                                    </a>
            
                                    <a aria-label="github" href="https://github.com/KadirYazadzhi" target="_blank" class="social-icon">
                                        <i class="fa-brands fa-github"></i>
                                    </a>
            
                                    <a aria-label="website" href="https://garden.kadiryazadzhi.tech" target="_blank" class="social-icon">
                                        <i class="fa-solid fa-globe"></i>
                                    </a>
            
                                    <a aria-label="insgram" href="https://www.instagram.com/_qzadji_/?igsh=bGx3djFjeHhheTFm#" target="_blank" class="social-icon">
                                        <i class="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                         <div class="footer-items">
                            <h3>Learning Resources</h3>
                        
                            <div class="items">
                                <a href="https://softuni.bg" target="_blank" class="paragraph">SoftUni</a>
                                <a href="https://www.hackthebox.eu" target="_blank" class="paragraph">Hack The Box</a>
                                <a href="https://leetcode.com" target="_blank" class="paragraph">LeetCode</a>
                                <a href="https://www.codewars.com" target="_blank" class="paragraph">CodeWars</a>
                                <a href="https://www.hackerrank.com" target="_blank" class="paragraph">HackerRank</a>
                            </div>
                        </div>
            
                        <div class="footer-items">
                            <h3>Blog Articles</h3>
                        
                            <div class="items" id="footer-blog-links">
                                <!-- Blogs will be dynamically loaded here -->
                            </div>
                        </div>
                        </div>
                </section>
            
                <div class="plus-part">
                    <p class="paragraph copyright-text"></p>
                </div>
            </footer>
        `;

        this.querySelector(".copyright-text").innerHTML = `Copyright © ${new Date().getFullYear()} - All rights reserved || Designed By: <a href="https://garden.kadiryazadzhi.tech" target="_blank" class="footer-name-link">Kadir Yazadzhi</a>`;
        
        this.loadFooterBlogs();
    }

    loadFooterBlogs() {
        const blogContainer = this.querySelector("#footer-blog-links");
        fetch('Json/Blog/blogs.json')
            .then(response => response.json())
            .then(blogs => {
                // Show up to 5 latest blogs
                const latestBlogs = blogs.slice(0, 5);
                blogContainer.innerHTML = latestBlogs.map(blog => `
                    <a href="blog.html?id=${blog.id}" class="paragraph">${blog.title}</a>
                `).join('');
            })
            .catch(error => {
                console.error('Error loading footer blogs:', error);
                blogContainer.innerHTML = '<p class="paragraph">Unable to load blogs.</p>';
            });
    }
}
customElements.define('my-footer', Footer);
