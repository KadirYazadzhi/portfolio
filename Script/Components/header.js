class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <div class="nav-bar">
                    <i class='bx bx-menu sidebarOpen' ></i>
                    <span class="logo navLogo"><a href="#">KadirYazadzhi</a></span>
                    <div class="menu">
                        <div class="logo-toggle">
                            <span class="logo"><a href="#">KadirYazadzhi</a></span>
                            <i class="fa-solid fa-xmark siderbarClose"></i>
                        </div>
                        <ul class="nav-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#aboutme">About me</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#certificates">Certificates</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="darkLight-searchBox">
                        <div class="dark-light">
                            <i class='bx bx-sun sun'></i>
                            <i class='bx bx-moon moon'></i>
                        </div>
                        <div class="searchBox">
                            <div class="searchToggle">
                                <i class='bx bx-x cancel'></i>
                                <i class='bx bx-search search'></i>
                            </div>
                            <div class="search-field">
                                <input type="text" id="sectionSearch" placeholder="Search...">
                                <i class='bx bx-search'></i>
                                <div class="autocomplete-dropdown"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
}
customElements.define('my-header', Header);
