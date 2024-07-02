document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        titleHeader: document.getElementById('title-header'),
        textHeaderOne: document.getElementById('text-header-one'),
        smallTextHeader: document.getElementById('small-text-header'),
        blogTextOne: document.getElementById('blog-text-one'),
        blogTextSecond: document.getElementById('blog-text-second'),
        blogTitleOne: document.getElementById('blog-title-one'),
        blogTitleSecond: document.getElementById('blog-title-second'),
        blogTitleThird: document.getElementById('blog-title-third'),
        blogTitleFour: document.getElementById('blog-title-four'),
        blogTitleFive: document.getElementById('blog-title-five'),
        blogTitleSix: document.getElementById('blog-title-six'),
        blogTextThird: document.getElementById('blog-text-third'),
        blogTextFour: document.getElementById('blog-text-four'),
        blogTextFive: document.getElementById('blog-text-five'),
        blogTextSix: document.getElementById('blog-text-six'),
        blogTextSeven: document.getElementById('blog-text-seven'),
        blogImages: Array.from({ length: 12 }, (_, i) => document.getElementById(`blog-image-${i + 1}`))
    };

    function findClickedCard() {
        document.querySelectorAll('.blog-card').forEach(card => {
            card.addEventListener('click', () => {
                const blogId = card.getAttribute('data-blog-id');
                localStorage.setItem('lastClickedBlogId', blogId);
                window.location.href = "Blogs.html";
            });
        });
    }

    function updateContentForBlogId(blogId) {
        const content = {
            1: {
                title: "Why Javascript is so popular?",
                textHeader: "JavaScript is popular because it is versatile, ubiquitous in web development, supported by a vast ecosystem and community, and backed by major tech companies.",
                smallText: "Learn more &rarr;",
                texts: [
                    "JavaScript is one of the most popular programming languages in the world, and its popularity can be attributed to several key factors:",
                    "JavaScript is the only programming language that can run natively in web browsers, making it indispensable for front-end development. Every major web browser supports JavaScript, which allows developers to create dynamic, interactive user experiences. This widespread support has cemented JavaScript as a fundamental technology of the web.",
                    "JavaScript is not limited to front-end development; it can also be used on the server side with environments like Node.js. This versatility allows developers to use a single language for both client-side and server-side development, streamlining the development process and making it easier to manage codebases.",
                    "JavaScript has a vast ecosystem of libraries and frameworks such as React, Angular, and Vue.js, which significantly simplify and accelerate the development of complex applications. Additionally, the large and active community continuously contributes to the language's growth, providing support, tools, and resources for developers of all skill levels.",
                    "JavaScript has evolved significantly since its inception. The introduction of ECMAScript standards has brought modern features and improvements to the language, making it more powerful and easier to use. Regular updates ensure that JavaScript remains relevant and continues to meet the demands of modern web development.",
                    "With tools like Electron, JavaScript can be used to build cross-platform desktop applications. This means developers can use their JavaScript skills to create applications that run on Windows, macOS, and Linux, further broadening the language's applicability.",
                    "The demand for JavaScript developers is consistently high. As businesses seek to create engaging and responsive web applications, the need for skilled JavaScript developers continues to grow. This demand translates into numerous job opportunities and attractive salaries for those proficient in the language."
                ],
                titles: [
                    "1. Ubiquity in Web Development",
                    "2. Versatility",
                    "3. Large Ecosystem and Community",
                    "4. Continuous Evolution",
                    "5. Cross-Platform Development",
                    "6. Job Market Demand"
                ],
                images: [
                    "Image/Javascript-blogs-one.webp",
                    "Image/Javascript-blogs-two.webp",
                    "Image/javascript-blogs-three.jpg",
                    "Image/javascript-blogs-five.jpeg",
                    "Image/javascript-blogs-six.webp",
                    "Image/Nodejs-Architecture.png",
                    "Image/javascript-blogs-eight.jpg",
                    "https://www.devprojournal.com/wp-content/uploads/2024/01/enterprise-software-e1704812530184.jpg",
                    "https://strandmanagement.com/assets/images/professional-web-app-development-nj.jpg",
                    "Image/javascript-blogs-ten.png",
                    "https://i0.wp.com/juniorhabla.com/wp-content/uploads/2018/05/Responsive-Websites-on-Devices.jpg?fit=3508%2C2480",
                    "https://quickonline.ma/wp-content/uploads/2023/11/Design-sans-titre-5.jpg"
                ]
            },
            2: {
                title: "JavaScript Vs TypeScript",
                textHeader: "JavaScript is a dynamic scripting language, while TypeScript is a superset of JavaScript with optional static typing, providing enhanced code maintainability and scalability.",
                smallText: "Learn more &rarr;",
                texts: [
                    "JavaScript and TypeScript are two closely related languages used in web development, each with its own strengths and use cases:",
                    "JavaScript is a dynamically typed scripting language that executes directly in web browsers. Its dynamic nature allows for rapid prototyping and flexibility in coding. TypeScript, on the other hand, is a statically typed superset of JavaScript. It includes all JavaScript features but adds optional static typing, which can catch errors at compile time and improve code quality.",
                    "JavaScript does not require explicit type declarations, leading to more flexible but potentially error-prone code. TypeScript introduces optional static typing, enabling developers to define variable types, catch type-related errors early, and enhance the robustness of the code. This static typing is particularly beneficial in large codebases.",
                    "JavaScript offers a straightforward, flexible approach to coding, which can be both a strength and a weakness. TypeScript provides a more structured development experience with features like type inference, interfaces, and advanced tooling support. These features can lead to better code organization and easier maintenance, especially in large projects.",
                    "JavaScript has a vast ecosystem with numerous libraries and frameworks such as React, Angular, and Vue.js, facilitating rapid development. TypeScript integrates well with these libraries and frameworks, providing additional benefits like enhanced IDE support, better autocompletion, and refactoring tools, which can improve developer productivity.",
                    "JavaScript's simplicity and flexibility make it easy to learn and use, especially for beginners. TypeScript has a steeper learning curve due to its static typing and additional features. However, developers with a background in strongly typed languages like Java or C# may find TypeScript more familiar and easier to adopt.",
                    "JavaScript has a massive community and is supported by all major browsers, making it an essential technology for web development. TypeScript, backed by Microsoft, has seen growing adoption due to its advantages in large-scale applications. Many popular frameworks like Angular are built with TypeScript, and its community continues to expand."
                ],
                titles: [
                    "1. Nature of the Language",
                    "2. Type Safety",
                    "3. Development Experience",
                    "4. Tooling and Ecosystem",
                    "5. Learning Curve",
                    "6. Community and Adoption"
                ],
                images: [
                    "https://cyberhoot.com/wp-content/uploads/2020/07/Free-Courses-to-learn-JavaScript.jpg",
                    "https://community-cdn-digitalocean-com.global.ssl.fastly.net/CvetkR1AVTA4LvzC5cjPnm4J",
                    "https://ithelp.ithome.com.tw/upload/images/20220930/20148825QXeOJjMEHU.png",
                    "https://tsh.io/wp-content/uploads/2022/07/typescript-new-features-lead.png",
                    "https://media.geeksforgeeks.org/wp-content/uploads/20220831220305/kneklfn-660x270.PNG",
                    "https://cdn-media-1.freecodecamp.org/images/1*0o35DC9HRHPhjwYMHwbz_g.jpeg",
                    "https://media.licdn.com/dms/image/D5612AQFtUtgVbfeUQA/article-cover_image-shrink_600_2000/0/1698676067516?e=2147483647&v=beta&t=d1rzPkK3KMFdB-Oo27i-PIm8XUhcV-3l0sNZQfF-QfE",
                    "https://miro.medium.com/v2/resize:fit:1400/1*3vOvKvhf_YC5XzU6oFWRhw.png",
                    "https://miro.medium.com/v2/resize:fit:1400/1*4cFhtuq6zRDqJ6p4s2pQ6g.jpeg",
                    "https://blog.shiftasia.com/content/images/2023/05/MicrosoftTeams-image--49-.png",
                    "https://wpengine.com/wp-content/uploads/2021/07/jsheader.png",
                    "https://cursin.net/wp-content/uploads/2023/10/curso-gratis-microsoft-typescript.jpg.webp"
                ]
            },
            3: {
                title: "Most commonly asked interview questions for C#",
                textHeader: "Common C# interview questions cover topics like abstract classes vs. interfaces, memory management, string manipulation, and more.",
                smallText: "Learn more &rarr;",
                texts: [
                    "C# is a versatile and powerful language, often used in enterprise environments. When preparing for a C# interview, it's crucial to understand various key concepts and be ready to discuss them in detail:",
                    "Understanding the differences between abstract classes and interfaces is fundamental. Abstract classes can provide default behavior (methods with implementation), while interfaces can only declare methods without implementation. Abstract classes are used when classes share a common base and interfaces are used to define a contract that multiple classes can implement.",
                    "Memory management in C# involves understanding garbage collection and how memory is allocated and deallocated. Interviewees should be able to explain the basics of garbage collection, managed and unmanaged resources, and the use of IDisposable interface to manage resource cleanup.",
                    "String manipulation questions often involve tasks like reversing a string, checking for palindromes, or comparing strings. Knowing the performance implications of using StringBuilder vs. string for concatenation and the immutability of strings in C# is also important.",
                    "LINQ is a powerful feature in C#. Questions may involve writing queries to filter, project, and aggregate data. Understanding the differences between LINQ to Objects, LINQ to SQL, and LINQ to XML, and being able to write complex queries is essential.",
                    "Exception handling is a crucial part of robust application development. Be prepared to discuss try-catch blocks, custom exceptions, and the best practices for handling exceptions. Understanding how to use finally and using statements to manage resources is also important.",
                    "With the rise of multi-core processors, understanding threading and asynchronous programming is vital. Expect questions on Task Parallel Library (TPL), async-await pattern, thread synchronization, and common concurrency issues like deadlock and race conditions.",
                ],
                titles: [
                    "1. Abstract Classes vs. Interfaces",
                    "2. Memory Management",
                    "3. String Manipulation",
                    "4. LINQ (Language Integrated Query)",
                    "5. Exception Handling",
                    "6. Threading and Asynchronous Programming"
                ],
                images: [
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--2XdEnCAM--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://raw.githubusercontent.com/sandeepkumar17/td-dev.to/di-collection-posts/assets/blog-cover/c-sharp.png",
                    "https://code.visualstudio.com/assets/docs/languages/csharp/editingevolved.png",
                    "https://qph.cf2.quoracdn.net/main-qimg-0b74b9ee3d4afcb8e77acd0d5acc3e40-lq",
                    "https://media.licdn.com/dms/image/C4E12AQFmaz7Uzy5P0g/article-cover_image-shrink_720_1280/0/1630821952261?e=2147483647&v=beta&t=2gZSuoU9xotgWWpaUz-I1wM57GulRs68uWTF9PWP-T8",

                    "https://miro.medium.com/v2/resize:fit:1400/1*sMgShS-u_Udtx_1-6Up6Gw.jpeg",
                    "https://miro.medium.com/v2/resize:fit:1400/1*0-oYZDVMwwlBSTlkbB0pXA.png",
                    "https://global.discourse-cdn.com/uipath/original/3X/5/a/5a667eb62c575ef918966a4214c05afba9a9c6b9.png",
                    "https://miro.medium.com/v2/resize:fit:1400/1*PXI-ZqiCWv1-USovYM5lFw.png",
                    "https://www.tutlane.com/images/linq/linq-architecture-diagram.png",
                    "https://www.programiz.com/sites/tutorial2program/files/csharp-finally-block.png",
                    "https://www.c-sharpcorner.com/article/thread-behaviour-in-synchronous-and-asynchronous-method/Images/image-20211224112443-6.png",
                    "https://miro.medium.com/v2/resize:fit:1080/1*EEaxmVKhFJabxN2bC1h75Q.jpeg"
                ]
            },
            4: {
                title: "Fundamentals of Object-Oriented Programming",
                textHeader: "Understanding the fundamentals of Object-Oriented Programming is crucial for building scalable and maintainable software systems.",
                smallText: "Learn more &rarr;",
                texts: [
                    "Object-Oriented Programming (OOP) is a paradigm based on the concept of \"objects,\" which can contain data and code. Here are the core principles and concepts of OOP:",
                    "A class is a blueprint for creating objects (instances). It defines a type by bundling data and methods that work on the data. Objects are instances of classes; they are created based on the class definition. Understanding the difference between a class and an object is fundamental in OOP.",
                    "Inheritance is a mechanism by which one class (child/subclass) inherits the properties and behavior (methods) of another class (parent/superclass). It promotes code reuse and establishes a natural hierarchy. Inheritance allows for the creation of a new class based on an existing class.",
                    "Polymorphism allows methods to do different things based on the object it is acting upon. It enables one interface to be used for a general class of actions. The two main types of polymorphism are compile-time (method overloading) and runtime (method overriding).",
                    "Encapsulation involves bundling the data (variables) and methods (functions) that operate on the data into a single unit, known as a class, and restricting access to some of the object's components. This helps in protecting the internal state of the object and only exposing a controlled interface.",
                    "Abstraction is the concept of hiding the complex implementation details and showing only the essential features of the object. It helps in reducing programming complexity and effort by providing a clear separation between an object's interface and implementation.",
                    "Methods are functions defined inside a class that describe the behaviors of the objects. Properties, also known as attributes or fields, define the characteristics of the object. Understanding how to define and use methods and properties is key to working with objects."
                ],
                titles: [
                    "1. Classes and Objects",
                    "2. Inheritance",
                    "3. Polymorphism",
                    "4. Encapsulation",
                    "5. Abstraction",
                    "6. Methods and Properties"
                ],
                images: [
                    "https://files.realpython.com/media/Class-Concepts-Object-Oriented-Programming-in-Python_Watermarked.6cf327c51434.jpg",
                    "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7c56f17b-aaa7-4472-a65f-c7767ec5f243_1412x1062.png",
                    "https://cdn.statically.io/img/cloud-prism.com/wp-content/uploads/2022/12/basics-of-apex-merged-6-1-1024x576.png?quality=100&f=auto",
                    "https://media.geeksforgeeks.org/wp-content/uploads/Screenshot-from-2018-08-27-10-39-14-1.png",
                    "https://miro.medium.com/v2/resize:fit:1400/1*CSOvBS1KNEenRWLa4YNDnQ.png",
                    "https://cdn-images-1.medium.com/max/1080/1*gRily1Y6mlrOETJeKRgvgw.png",
                    "https://cdn-images-1.medium.com/max/600/1*n7cPyk1A_Z3l80oQzpw9ww.png",
                    "https://media.geeksforgeeks.org/wp-content/uploads/20221207132325/ecapsulation_in_cpp.png",
                    "https://cdn-images-1.medium.com/max/600/1*4jAZwc37Oi5m-9k1F5cNwg.jpeg",
                    "https://architectelevator.com/assets/img/stacktrace_abstraction_compiler.png",
                    "https://miro.medium.com/v2/resize:fit:960/1*WsgqKRktqOYvAJvFuXwT_g.jpeg",
                    "https://i0.wp.com/blogs.embarcadero.com/wp-content/uploads/2022/06/OOP-1511511.jpg?resize=512%2C393&ssl=1"
                ]
            },
        };

        const selectedContent = content[blogId];
        if (selectedContent) {
            elements.titleHeader.innerHTML = selectedContent.title;
            elements.textHeaderOne.innerHTML = selectedContent.textHeader;
            elements.smallTextHeader.innerHTML = selectedContent.smallText;
            elements.blogTextOne.innerHTML = selectedContent.texts[0];
            elements.blogTextSecond.innerHTML = selectedContent.texts[1];
            elements.blogTextThird.innerHTML = selectedContent.texts[2];
            elements.blogTextFour.innerHTML = selectedContent.texts[3];
            elements.blogTextFive.innerHTML = selectedContent.texts[4];
            elements.blogTextSix.innerHTML = selectedContent.texts[5];
            elements.blogTextSeven.innerHTML = selectedContent.texts[6];
            elements.blogTitleOne.innerHTML = selectedContent.titles[0];
            elements.blogTitleSecond.innerHTML = selectedContent.titles[1];
            elements.blogTitleThird.innerHTML = selectedContent.titles[2];
            elements.blogTitleFour.innerHTML = selectedContent.titles[3];
            elements.blogTitleFive.innerHTML = selectedContent.titles[4];
            elements.blogTitleSix.innerHTML = selectedContent.titles[5];

            selectedContent.images.forEach((src, index) => {
                elements.blogImages[index].src = src;
            });
        }
    }

    findClickedCard();
    updateContentForBlogId(localStorage.getItem('lastClickedBlogId'));
});

