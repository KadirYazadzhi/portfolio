document.addEventListener("DOMContentLoaded", function() {
var typed = new Typed(".typing", {
    strings: ["Front end developer","Fresher","Technician", "Blogger", "Designer", "Freelancer","Manager"],
    typeSpeed: 140,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["Front end developer","Fresher" ,"Technician", "Blogger", "Designer", "Freelancer","Manager"],
    typeSpeed: 140,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-3", {
    strings: ["Connect with me on :)"],
    typeSpeed: 140,
    backSpeed: 60,
    loop: true
});

// owl carousel script
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});
});