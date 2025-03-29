class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
           <footer class="section">
                <section class="container center footer">
                    <div class="bottom-section">
                        <div class="left-bottom-part">
                            <div class="contact-part">
                                <h3>KadirYazadzhi</h3>
            
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
                                    <a href="https://www.instagram.com/_qzadji_/?igsh=bGx3djFjeHhheTFm#" target="_blank" class="social-icon">
                                        <i class="fa-brands fa-facebook"></i>
                                    </a>
            
                                    <a href="https://github.com/KadirYazadzhi" target="_blank" class="social-icon">
                                        <i class="fa-brands fa-github"></i>
                                    </a>
            
                                    <a href="https://www.instagram.com/_qzadji_/?igsh=bGx3djFjeHhheTFm#" target="_blank" class="social-icon">
                                        <i class="fa-solid fa-globe"></i>
                                    </a>
            
                                    <a href="#" target="_blank" class="social-icon">
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
                                <a href="https://www.hackerank.com" target="_blank" class="paragraph">HackerRank</a>
                            </div>
                        </div>
            
                        <div class="footer-items">
                            <h3>Blog Articles</h3>
                        
                            <div class="items">
                                <a href="#" target="_blank" class="paragraph">Understanding Ethical Hacking</a>
                                <a href="#" target="_blank" class="paragraph">How to Prepare for Penetration Testing</a>
                                <a href="#" target="_blank" class="paragraph">Clean Code Principles</a>
                                <a href="#" target="_blank" class="paragraph">Best Practices for Web Security</a>
                                <a href="#" target="_blank" class="paragraph">The Importance of Cryptography in Modern Security</a>
                            </div>
                        </div>
                </section>
            
                <div class="plus-part">
                    <p class="paragraph copyright-text"></p>
                </div>
            </footer>
        `;

        this.querySelector(".copyright-text").innerHTML = `Copyright © ${new Date().getFullYear()} - All rights reserved || Designed By: Kadir Yazadzhi`;
    }
}
customElements.define('my-footer', Footer);
