import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

const canvas = document.getElementById("hero-section-animation");

new DotLottie({
    autoplay: true,
    loop: true,
    canvas: canvas,
    src: "Animation/hero-section.lottie",
});

canvas.classList.add("banner-image");
