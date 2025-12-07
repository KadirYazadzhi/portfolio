import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

class HeroAnimationManager {
    constructor(canvasId, animationSrc) {
        this.canvasId = canvasId;
        this.animationSrc = animationSrc;
        this.canvas = document.getElementById(this.canvasId);

        if (this.canvas) {
            this.init();
        }
    }

    init() {
        new DotLottie({
            autoplay: true,
            loop: true,
            canvas: this.canvas,
            src: this.animationSrc,
        });

        this.canvas.classList.add("banner-image");
    }
}

new HeroAnimationManager("hero-section-animation", "Animation/hero-section.lottie");
