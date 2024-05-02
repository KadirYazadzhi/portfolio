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