$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Front end developer","Fresher","Technician", "Blogger", "Designer", "Freelancer","Manager"],
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

    var typed = new Typed(".typing-2", {
        strings: ["Front end developer","Fresher" ,"Technician", "Blogger", "Designer", "Freelancer","Manager"],
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





document.addEventListener('DOMContentLoaded', function () {
    const cardOne = document.getElementById('card1');
    const cardTwo = document.getElementById('card2');
    const cardThree = document.getElementById('card3');
    const cardFour = document.getElementById('card4');

    const dotOne = document.getElementById('dot1');
    const dotTwo = document.getElementById('dot2');
    const dotThree = document.getElementById('dot3');
    const dotFour = document.getElementById('dot4');



    var mobileScreenWidth = 768;

    if (window.innerWidth <= mobileScreenWidth) {
        cardOne.style.display = 'block';
        dotOne.classList.add("active");

        cardTwo.style.display = 'none';
        cardThree.style.display = 'none';
        cardFour.style.display = 'none';

        dotOne.addEventListener('click', function() {
            cardOne.style.display = 'block';
            cardTwo.style.display = 'none';
            cardThree.style.display = 'none';
            cardFour.style.display = 'none';

            dotOne.classList.add("active");
            dotTwo.classList.remove("active");
            dotThree.classList.remove("active");
            dotFour.classList.remove("active");
        });

        dotTwo.addEventListener('click', function() {
            cardOne.style.display = 'none';
            cardTwo.style.display = 'block';
            cardThree.style.display = 'none';
            cardFour.style.display = 'none';

            dotOne.classList.remove("active");
            dotTwo.classList.add("active");
            dotThree.classList.remove("active");
            dotFour.classList.remove("active");
        });

        dotThree.addEventListener('click', function() {
            cardOne.style.display = 'none';
            cardTwo.style.display = 'none';
            cardThree.style.display = 'block';
            cardFour.style.display = 'none';

            dotOne.classList.remove("active");
            dotTwo.classList.remove("active");
            dotThree.classList.add("active");
            dotFour.classList.remove("active");
        });

        dotFour.addEventListener('click', function() {
            cardOne.style.display = 'none';
            cardTwo.style.display = 'none';
            cardThree.style.display = 'none';
            cardFour.style.display = 'block';

            dotOne.classList.remove("active");
            dotTwo.classList.remove("active");
            dotThree.classList.remove("active");
            dotFour.classList.add("active");
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const miniText = document.getElementById('specialBarMiniText');
    const title = document.getElementById('specialBarTitle');
    const image = document.getElementById('specialBarImage');
    const text = document.getElementById('specialBarText');

    const barOne = document.getElementById('bar1');
    const barTwo = document.getElementById('bar2');
    const barThree = document.getElementById('bar3');
    const barFour = document.getElementById('bar4');
    const barFive = document.getElementById('bar5');

    const splink = document.getElementById('splink');
    const specialBar = document.querySelector(".specialBar");
    barOne.addEventListener('mouseover', function() {
        miniText.innerHTML = 'Energy';
        title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #0CADBAFF; font-weight: 650 ">85%</span> Introverted</p>';
        image.src = 'Image/personality-1.svg';
        text.innerHTML = 'I prefer fewer, yet deep and meaningful, social interactions and feel drawn to calmer environments.'
        splink.href = 'https://www.16personalities.com/articles/energy-introverted-vs-extraverted';
        specialBar.style.borderTopLeftRadius = '0px';
    });
    barOne.addEventListener('mouseout', function() {
        specialBar.style.borderTopLeftRadius = '12px';
    });

    barTwo.addEventListener('mouseover', function() {
        miniText.innerHTML = 'Mind';
        title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #E4AE3AFF; font-weight: 650 ">79%</span> Intuitive</p>';
        image.src = 'Image/personality-2.svg';
        text.innerHTML = 'I am very imaginative and open-minded, focusing on hidden meanings and distant possibilities.'
        splink.href = 'https://www.16personalities.com/articles/mind-intuitive-vs-observant';
    });

    barThree.addEventListener('mouseover', function() {
        miniText.innerHTML = 'Nature';
        title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #33a474; font-weight: 650 ">71%</span> Thinking</p>';
        image.src = 'Image/personality-3.svg';
        text.innerHTML = 'I like focus on objectivity and rationality, putting effectiveness above social harmony.<br><br>'
        splink.href = 'https://www.16personalities.com/articles/nature-thinking-vs-feeling';
    });

    barFour.addEventListener('mouseover', function() {
        miniText.innerHTML = 'Tactics';
        title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #88619a; font-weight: 650 ">78%</span> Judging</p>';
        image.src = 'Image/personality-4.svg';
        text.innerHTML = 'I like highly organized, decisive, and thorough. You value clarity and prefer planning to spontaneity.'
        splink.href = 'https://www.16personalities.com/articles/tactics-judging-vs-prospecting';
    });

    barFive.addEventListener('mouseover', function() {
        miniText.innerHTML = 'Identity';
        title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #88619a; font-weight: 650 ">53%</span> Assertive</p>';
        image.src = 'Image/personality-5.svg';
        text.innerHTML = 'I am self-assured, even-tempered, and resistant to stress, refusing to worry too much.<br><br>'
        splink.href = 'https://www.16personalities.com/articles/identity-assertive-vs-turbulent';
        specialBar.style.borderBottomLeftRadius = '0px';
    });
    barFive.addEventListener('mouseout', function() {
        specialBar.style.borderBottomLeftRadius = '12px';
    });
});









document.addEventListener('DOMContentLoaded', function() {
    const personalityText = document.getElementById('personalityText');
    const type = document.getElementById('type');
    const imageIntj = document.getElementById('imageIntj');
    const textINTJ = document.getElementById('textINTJ')

    const dotType1 = document.getElementById('dotType1');
    const dotType2 = document.getElementById('dotType2');
    const dotType3 = document.getElementById('dotType3');

    dotType1.style.backgroundColor = '#4298b4';

    dotType1.addEventListener('click', function() {
        personalityText.innerHTML = 'My Personality';
        type.innerHTML = 'Architect (INTJ-A)';
        imageIntj.src = '';
        imageIntj.src = 'Image/intj.png';
        textINTJ.innerHTML = 'Architects are imaginative and strategic thinkers, with a plan for everything. These thoughtful tacticians love perfecting the details of life, applying creativity and rationality.'
        dotType1.style.backgroundColor = '#4298b4';
        dotType2.style.backgroundColor = '';
        dotType3.style.backgroundColor = '';
    });

    dotType2.addEventListener('click', function() {
        personalityText.innerHTML = 'My Role';
        type.innerHTML = 'Analysts';
        imageIntj.src = '';
        imageIntj.src = 'Image/intj-2.png';
        textINTJ.innerHTML = 'Analysts embrace rationality and impartiality, excelling in intellectual debates and scientific or technological fields. They are fiercely independent, open-minded, and strong-willed.'
        dotType1.style.backgroundColor = '';
        dotType2.style.backgroundColor = '#4298b4';
        dotType3.style.backgroundColor = '';
    });

    dotType3.addEventListener('click', function() {
        personalityText.innerHTML = 'My Strategy';
        type.innerHTML = 'Confident Individualism';
        imageIntj.src = '';
        imageIntj.src = 'Image/intj-3.png';
        textINTJ.innerHTML = 'Those who prefer the Confident Individualism Strategy like doing things alone, choosing to rely on their own skills and instincts instead of seeking contact with other people.'
        dotType1.style.backgroundColor = '';
        dotType2.style.backgroundColor = '';
        dotType3.style.backgroundColor = '#4298b4';
    });


});







const OtherElementOne = document.getElementById('other-one');
const OtherElementTwo = document.getElementById('other-two');
const OtherElementThree = document.getElementById('other-three');
const ElementOne = document.getElementById('elementOne');
const ElementTwo = document.getElementById('elementTwo');
const ElementThree = document.getElementById('elementThree');
const dotOne = document.getElementById('dotOne');
const dotTwo = document.getElementById('dotTwo');

OtherElementOne.style.display = 'none';
OtherElementTwo.style.display = 'none';
OtherElementThree.style.display = 'none';
dotOne.style.backgroundColor = '#4298b4';
dotOne.addEventListener('click', function() {
    OtherElementOne.style.display = 'none';
    OtherElementTwo.style.display = 'none';
    OtherElementThree.style.display = 'none';
    ElementOne.style.display = 'flex';
    ElementTwo.style.display = 'flex';
    ElementThree.style.display = 'flex';
    dotOne.style.backgroundColor = '#4298b4';
    dotTwo.style.backgroundColor = '';
});
dotTwo.addEventListener('click', function() {
    OtherElementOne.style.display = 'flex';
    OtherElementTwo.style.display = 'flex';
    OtherElementThree.style.display = 'flex';
    ElementOne.style.display = 'none';
    ElementTwo.style.display = 'none';
    ElementThree.style.display = 'none';
    dotOne.style.backgroundColor = '';
    dotTwo.style.backgroundColor = '#4298b4';
});

