document.addEventListener('DOMContentLoaded', () => {
    let titleHeader = document.getElementById('title-header');
    let textHeaderOne = document.getElementById('text-header-one');
    let smallTextHeader = document.getElementById('small-text-header');
    let blogTextOne = document.getElementById('blog-text-one');
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
    let blogImageTwelve = document.getElementById('blog-image-12');

    function findClickedCard() {
        const blogCards = document.querySelectorAll('.blog-card');

        blogCards.forEach(card => {
            card.addEventListener('click', function() {
                const blogId = this.getAttribute('data-blog-id');

                localStorage.setItem('lastClickedBlogId', blogId);
                console.log(localStorage.getItem('lastClickedBlogId'));
            });
        });
    }

    findClickedCard();



    if (localStorage.getItem('lastClickedBlogId') === "1") {
        titleHeader.innerHTML = "Why Javascript is so popular?";
        textHeaderOne.innerHTML = "JavaScript is popular because it is versatile, ubiquitous in web development, supported by a vast ecosystem and community, and backed by major tech companies.";
        smallTextHeader.innerHTML = "Learn more &rarr;";
        blogTextOne.innerHTML = "JavaScript is one of the most popular programming languages in the world, and its popularity can be attributed to several key factors:";
        blogTitleOne.innerHTML = "1. Ubiquity in Web Development";
        blogTextSecond.innerHTML = "JavaScript is the only programming language that can run natively in web browsers, making it indispensable for front-end development. Every major web browser supports JavaScript, which allows developers to create dynamic, interactive user experiences. This widespread support has cemented JavaScript as a fundamental technology of the web.";
        blogTitleSecond.innerHTML = "2. Versatility";
        blogTextThird.innerHTML = "JavaScript is not limited to front-end development; it can also be used on the server side with environments like Node.js. This versatility allows developers to use a single language for both client-side and server-side development, streamlining the development process and making it easier to manage codebases.";
        blogTitleThird.innerHTML = "3. Large Ecosystem and Community";
        blogTextFour.innerHTML = "JavaScript has a vast ecosystem of libraries and frameworks such as React, Angular, and Vue.js, which significantly simplify and accelerate the development of complex applications. Additionally, the large and active community continuously contributes to the language's growth, providing support, tools, and resources for developers of all skill levels.";
        blogTitleFour.innerHTML = "4. Continuous Evolution";
        blogTextFive.innerHTML = "JavaScript has evolved significantly since its inception. The introduction of ECMAScript standards has brought modern features and improvements to the language, making it more powerful and easier to use. Regular updates ensure that JavaScript remains relevant and continues to meet the demands of modern web development.";
        blogTitleFive.innerHTML = "5. Cross-Platform Development";
        blogTextSix.innerHTML = "With tools like Electron, JavaScript can be used to build cross-platform desktop applications. This means developers can use their JavaScript skills to create applications that run on Windows, macOS, and Linux, further broadening the language's applicability.";
        blogTitleSix.innerHTML = "6. Job Market Demand";
        blogTextSeven.innerHTML = "The demand for JavaScript developers is consistently high. As businesses seek to create engaging and responsive web applications, the need for skilled JavaScript developers continues to grow. This demand translates into numerous job opportunities and attractive salaries for those proficient in the language.";

        blogImageOne.src = "Image/Javascript-blogs-one.webp";
        blogImageTwo.src = "Image/Javascript-blogs-two.webp";
        blogImageThree.src = "Image/javascript-blogs-three.jpg";
        blogImageFour.src = "Image/javascript-blogs-five.jpeg";
        blogImageFive.src = "Image/javascript-blogs-six.webp";
        blogImageSix.src = "Image/Nodejs-Architecture.png";
        blogImageSeven.src = "Image/javascript-blogs-eight.jpg";
        blogImageEight.src = "https://www.devprojournal.com/wp-content/uploads/2024/01/enterprise-software-e1704812530184.jpg";
        blogImageNine.src = "https://strandmanagement.com/assets/images/professional-web-app-development-nj.jpg";
        blogImageTen.src = "Image/javascript-blogs-ten.png";
        blogImageEleven.src = "https://i0.wp.com/juniorhabla.com/wp-content/uploads/2018/05/Responsive-Websites-on-Devices.jpg?fit=3508%2C2480";
        blogImageTwelve.src = "https://quickonline.ma/wp-content/uploads/2023/11/Design-sans-titre-5.jpg";
    }
    else if (localStorage.getItem('lastClickedBlogId') === "2") {
        titleHeader.innerHTML = "JavaScript Vs TypeScript";
        textHeaderOne.innerHTML = "JavaScript is a dynamic scripting language, while TypeScript is a superset of JavaScript with optional static typing, providing enhanced code maintainability and scalability.";
        blogTextOne.innerHTML = "JavaScript and TypeScript are two closely related languages used in web development, each with its own strengths and use cases:";
        smallTextHeader.innerHTML = "Learn more &rarr;";
        blogTitleOne.innerHTML = "1. Nature of the Language";
        blogTextSecond.innerHTML = "JavaScript is a dynamically typed scripting language that executes directly in web browsers. Its dynamic nature allows for rapid prototyping and flexibility in coding. TypeScript, on the other hand, is a statically typed superset of JavaScript. It includes all JavaScript features but adds optional static typing, which can catch errors at compile time and improve code quality.";
        blogTitleSecond.innerHTML = "2. Type Safety";
        blogTextThird.innerHTML = "JavaScript does not require explicit type declarations, leading to more flexible but potentially error-prone code. TypeScript introduces optional static typing, enabling developers to define variable types, catch type-related errors early, and enhance the robustness of the code. This static typing is particularly beneficial in large codebases.";
        blogTitleThird.innerHTML = "3. Development Experience";
        blogTextFour.innerHTML = "JavaScript offers a straightforward, flexible approach to coding, which can be both a strength and a weakness. TypeScript provides a more structured development experience with features like type inference, interfaces, and advanced tooling support. These features can lead to better code organization and easier maintenance, especially in large projects.";
        blogTitleFour.innerHTML = "4. Tooling and Ecosystem";
        blogTextFive.innerHTML = "JavaScript has a vast ecosystem with numerous libraries and frameworks such as React, Angular, and Vue.js, facilitating rapid development. TypeScript integrates well with these libraries and frameworks, providing additional benefits like enhanced IDE support, better autocompletion, and refactoring tools, which can improve developer productivity.";
        blogTitleFive.innerHTML = "5. Learning Curve";
        blogTextSix.innerHTML = "JavaScript's simplicity and flexibility make it easy to learn and use, especially for beginners. TypeScript has a steeper learning curve due to its static typing and additional features. However, developers with a background in strongly typed languages like Java or C# may find TypeScript more familiar and easier to adopt.";
        blogTitleSix.innerHTML = "6. Community and Adoption";
        blogTextSeven.innerHTML = "JavaScript has a massive community and is supported by all major browsers, making it an essential technology for web development. TypeScript, backed by Microsoft, has seen growing adoption due to its advantages in large-scale applications. Many popular frameworks like Angular are built with TypeScript, and its community continues to expand.";

        blogImageOne.src = "Image/Javascript-blogs-one.webp";
        blogImageTwo.src = "Image/Javascript-blogs-two.webp";
        blogImageThree.src = "Image/javascript-blogs-three.jpg";
        blogImageFour.src = "Image/javascript-blogs-five.jpeg";
        blogImageFive.src = "Image/javascript-blogs-six.webp";
        blogImageSix.src = "Image/Nodejs-Architecture.png";
        blogImageSeven.src = "Image/javascript-blogs-eight.jpg";
        blogImageEight.src = "https://www.devprojournal.com/wp-content/uploads/2024/01/enterprise-software-e1704812530184.jpg";
        blogImageNine.src = "https://strandmanagement.com/assets/images/professional-web-app-development-nj.jpg";
        blogImageTen.src = "Image/javascript-blogs-ten.png";
        blogImageEleven.src = "https://i0.wp.com/juniorhabla.com/wp-content/uploads/2018/05/Responsive-Websites-on-Devices.jpg?fit=3508%2C2480";
        blogImageTwelve.src = "https://quickonline.ma/wp-content/uploads/2023/11/Design-sans-titre-5.jpg";
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


