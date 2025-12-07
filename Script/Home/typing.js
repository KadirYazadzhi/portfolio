class TypingEffectManager {
    constructor(selector, options) {
        this.selector = selector;
        this.options = options;
        this.init();
    }

    init() {
        const element = document.querySelector(this.selector);
        if (element) {
            new Typed(this.selector, this.options);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    new TypingEffectManager(".typing", {
        strings: ["Front end developer", "Programmer", "Technician", "Back end Developer", "Designer", "Freelancer"],
        typeSpeed: 140,
        backSpeed: 60,
        loop: true
    });
});