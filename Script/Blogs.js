document.addEventListener('DOMContentLoaded', () => {
    let titleHeader = document.getElementById('title-header');
    let textHeaderOne = document.getElementById('text-header-one');
    let smallTextHeader = document.getElementById('small-text-header');
    let blogTextSecond = document.getElementById('blog-text-second');
    let blogTitleOne = document.getElementById('blog-title-one');
    let blogTitleSecond = document.getElementById('blog-title-second');
    let blogTitleThird = document.getElementById('blog-title-third');
    let blogTitleFour = document.getElementById('blog-title-four');
    let blogTitleFive = document.getElementById('blog-title-five');
    let blogTitleSix = document.getElementById('blog-title-six');
    let blogTextThird = document.getElementById('blog-text-third');
    let blogTextFour = document.getElementById('blog-text-four');
    let blogTextFive = document.getElementById('blog-text-five');
    let blogTextSix = document.getElementById('blog-text-six');
    let blogTextSeven = document.getElementById('blog-text-seven');
    let blogImageOne = document.getElementById('blog-image-1');
    let blogImageTwo = document.getElementById('blog-image-2');
    let blogImageThree = document.getElementById('blog-image-3');
    let blogImageFour = document.getElementById('blog-image-4');
    let blogImageFive = document.getElementById('blog-image-5');
    let blogImageSix = document.getElementById('blog-image-6');
    let blogImageSeven = document.getElementById('blog-image-7');
    let blogImageEight = document.getElementById('blog-image-8');
    let blogImageNine = document.getElementById('blog-image-9');
    let blogImageTen = document.getElementById('blog-image-10');
    let blogImageEleven = document.getElementById('blog-image-11');

    function findClickedCard() {
        const blogCards = document.querySelectorAll('.blog-card');

        blogCards.forEach(card => {
            card.addEventListener('click', function() {
                const blogId = this.getAttribute('data-blog-id');

                localStorage.setItem('lastClickedBlogId', blogId);

            });
        });
    }

    findClickedCard();



    if (localStorage.getItem('lastClickedBlogId') === "1") {

    }
    else if (localStorage.getItem('lastClickedBlogId') === "2") {

    }
    else if (localStorage.getItem('lastClickedBlogId') === "3") {

    }
    else if (localStorage.getItem('lastClickedBlogId') === "4") {

    }
    else if (localStorage.getItem('lastClickedBlogId') === "5") {

    }
    else if (localStorage.getItem('lastClickedBlogId') === "6") {

    }
    else if (localStorage.getItem('lastClickedBlogId') === "7") {

    }
    else if (localStorage.getItem('lastClickedBlogId') === "8") {

    }
    else if (localStorage.getItem('lastClickedBlogId') === "9") {

    }



    const elementsToSave = [
        titleHeader,
        textHeaderOne,
        smallTextHeader,
        blogTextSecond,
        blogTitleOne,
        blogTitleSecond,
        blogTitleThird,
        blogTitleFour,
        blogTitleFive,
        blogTitleSix,
        blogTextThird,
        blogTextFour,
        blogTextFive,
        blogTextSix,
        blogTextSeven,
        blogImageOne,
        blogImageTwo,
        blogImageThree,
        blogImageFour,
        blogImageFive,
        blogImageSix,
        blogImageSeven,
        blogImageEight,
        blogImageNine,
        blogImageTen,
        blogImageEleven
    ];

    function saveToLocalStorage() {
        elementsToSave.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                localStorage.setItem(id, element.innerHTML);
            }
        });
    }

    function loadFromLocalStorage() {
        elementsToSave.forEach(id => {
            const savedValue = localStorage.getItem(id);
            const element = document.getElementById(id);
            if (savedValue && element) {
                element.innerHTML = savedValue;
            }
        });
    }

    loadFromLocalStorage();

    document.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', saveToLocalStorage);
    });
});


