document.addEventListener('DOMContentLoaded', function () {
    const locales = ["en-GB","de-DE","bg-BG","ru-RU", ];
    console.log(123);

    function getFlagSrc(countryCode) {
        return /^[A-Z]{2}$/.test(countryCode)
            ? `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png` : "";
    }

    const dropdownBtn = document.getElementById("dropdown-btn");
    const dropdownContent = document.getElementById("dropdown-content");

    function setSelectedLocale(locale) {
        document.documentElement.lang = locale.split('-')[0];
        const intlLocale = new Intl.Locale(locale);
        const langName = new Intl.DisplayNames([locale], {
            type: "language",
        }).of(intlLocale.language);

        dropdownContent.innerHTML = "";

        const otherLocales = locales.filter((loc) => loc !== locale);
        otherLocales.forEach((otherLocale) => {
            const otherIntlLocale = new Intl.Locale(otherLocale);
            const otherLangName = new Intl.DisplayNames([otherLocale], {
                type: "language",
            }).of(otherIntlLocale.language);

            const listEl = document.createElement("li");
            listEl.innerHTML = `${otherLangName}<img alt="img" src="${getFlagSrc(
                otherIntlLocale.region
            )}" />`;
            listEl.value = otherLocale;
            listEl.addEventListener("mousedown", function () {
                setSelectedLocale(otherLocale);
            });
            dropdownContent.appendChild(listEl);

        });


        const path = window.location.pathname;

        if (path === "/portfolio/Certificate.html") {
            let navbarHome = document.getElementById('navbar-home');
            let navbarAbout = document.getElementById('navbar-about');
            let navbarServices = document.getElementById('navbar-services');
            let navbarSkills = document.getElementById('navbar-skills');
            let navbarCertificate = document.getElementById('navbar-certificate');
            let navbarProjects = document.getElementById('navbar-projects');
            let navbarContact = document.getElementById('navbar-contact');

            let homeTextOne = document.getElementById('homeTextOne');
            let homeTextTwo = document.getElementById('homeTextTwo');
            let homeButtonText = document.getElementById('homeButtonText');

            let cards = document.querySelectorAll(".card-excerpt");

            let copyright = document.getElementById('copyright');

            function translateToBulgarianForCertificatesPage() {
                navbarHome.innerHTML = "Начало";
                navbarAbout.innerHTML = "За мен";
                navbarServices.innerHTML = "Услуги";
                navbarSkills.innerHTML = "Умения";
                navbarCertificate.innerHTML = "Сертификати";
                navbarProjects.innerHTML = "Проекти";
                navbarContact.innerHTML = "Контакти";

                homeTextOne.innerHTML = "Здравейте, това са моите";
                homeTextTwo.innerHTML = "Умения и <br> Сертификати";
                homeButtonText.innerHTML = "Наемете ме";

                cards.forEach(card => {
                    card.textContent = "Кликнете тук, за да видите моите сертификати";
                })

                copyright.innerHTML = "Авторско право © 2024 - Всички права запазени || Дизайн от: Кадир Язаджи";
            }

            function translateToEnglishForCertificatesPage() {
                navbarHome.innerHTML = "Home";
                navbarAbout.innerHTML = "About me";
                navbarServices.innerHTML = "Services";
                navbarSkills.innerHTML = "Skills";
                navbarCertificate.innerHTML = "Certificates";
                navbarProjects.innerHTML = "Projects";
                navbarContact.innerHTML = "Contact";

                homeTextOne.innerHTML = "Hello, this is my";
                homeTextTwo.innerHTML = "Skills and <br>Certification";
                homeButtonText.innerHTML = "Hire me";

                cards.forEach(card => {
                    card.textContent = "Click here to view my certificate";
                })
                copyright.innerHTML = "Copyright &copy; 2024 - All Rights Reserved || Designed By: Kadir Yazadzhi";
            }

            function translateToGermanForCertificatesPage() {
                navbarHome.innerHTML = "Startseite";
                navbarAbout.innerHTML = "Über mich";
                navbarServices.innerHTML = "Dienstleistungen";
                navbarSkills.innerHTML = "Fähigkeiten";
                navbarCertificate.innerHTML = "Zertifikate";
                navbarProjects.innerHTML = "Projekte";
                navbarContact.innerHTML = "Kontakt";

                homeTextOne.innerHTML = "Hello, this is my";
                homeTextTwo.innerHTML = "Fähigkeiten und <br>Zertifizierung";
                homeButtonText.innerHTML = "Mieten Sie mich";

                cards.forEach(card => {
                    card.textContent = "Hier klicken, um meine Zertifikate anzuzeigen";
                })
                copyright.innerHTML = "Urheberrecht © 2024 - Alle Rechte vorbehalten || Gestaltet von: Kadir Yazadzhi";
            }

            function translateToRussianForCertificatesPage() {
                navbarHome.innerHTML = "Домашняя";
                navbarAbout.innerHTML = "Обо мне";
                navbarServices.innerHTML = "Услуги";
                navbarSkills.innerHTML = "Навыки";
                navbarCertificate.innerHTML = "Сертификаты";
                navbarProjects.innerHTML = "Проекты";
                navbarContact.innerHTML = "Контакт";

                homeTextOne.innerHTML = "Привет, это мои";
                homeTextTwo.innerHTML = "Навыки и <br>Сертификация";
                homeButtonText.innerHTML = "Нанимайте меня";

                cards.forEach(card => {
                    card.textContent = "Нажмите здесь, чтобы просмотреть мои сертификаты";
                })
                copyright.innerHTML = "Авторские права © 2024 - Все права защищены || Дизайн: Кадир Язаджи";
            }


            if (locale === "bg-BG") {
                translateToBulgarianForCertificatesPage();
            }
            else if (locale === "en-GB") {
                translateToEnglishForCertificatesPage();
            }
            else if (locale === "de-DE") {
                translateToGermanForCertificatesPage();
            }
            else if (locale === "ru-RU") {
                translateToRussianForCertificatesPage();
            }

        }
        else if (path === "/portfolio/Blog.html") {
            let navbarHome = document.getElementById('navbar-home');
            let navbarAbout = document.getElementById('navbar-about');
            let navbarServices = document.getElementById('navbar-services');
            let navbarSkills = document.getElementById('navbar-skills');
            let navbarCertificate = document.getElementById('navbar-certificate');
            let navbarProjects = document.getElementById('navbar-projects');
            let navbarContact = document.getElementById('navbar-contact');

            let titleHeader = document.getElementById('blog-page-title-header');
            let textHeader = document.getElementById('blog-page-text-header');
            let smallText = document.getElementById('blog-page-small-text');

            let hiddenButtonText = document.getElementById('hidden-button');

            let hideSection = document.getElementById('hide-section');
            let recentPostTitle = document.getElementById('recent-post-title');
            let machineLearningTitle = document.getElementById('machine-learning-title');
            let machineLearningLink = document.getElementById('machine-learning-link');
            let gitTitle = document.getElementById('git-title');
            let gitLink = document.getElementById('git-link');
            let interviewTitle = document.getElementById('interview-title');
            let interviewLink = document.getElementById('interview-link');
            let oopTitle = document.getElementById('oop-title');
            let oopLink = document.getElementById('oop-link');
            let newsTitle = document.getElementById('news-title');
            let javascriptTitle = document.getElementById('javascript-title');
            let javascriptLink = document.getElementById('javascript-link');
            let javascriptTypescriptTitle = document.getElementById('javascript-typescript-title');
            let javascriptTypescriptLink = document.getElementById('javascript-typescript-link');
            let pythonRubyTitle = document.getElementById('python-ruby-title');
            let pythonRubyLink = document.getElementById('python-ruby-link');
            let csharpFeaturesTitle = document.getElementById('csharp-features-title');
            let csharpFeaturesLink = document.getElementById('csharp-features-link');

            let blogCardOneTopic = document.getElementById('blog-card-one-topic');
            let blogOneTitle = document.getElementById('blog-one-title');
            let blogOneText = document.getElementById('blog-one-text');
            let blogCardTwoTopic = document.getElementById('blog-card-two-topic');
            let blogTwoTitle = document.getElementById('blog-two-title');
            let blogTwoText = document.getElementById('blog-two-text');
            let blogCardThreeTopic = document.getElementById('blog-card-three-topic');
            let blogThreeTitle = document.getElementById('blog-three-title');
            let blogThreeText = document.getElementById('blog-three-text');
            let blogCardFourTopic = document.getElementById('blog-card-four-topic');
            let blogFourTitle = document.getElementById('blog-four-title');
            let blogFourText = document.getElementById('blog-four-text');
            let blogCardFiveTopic = document.getElementById('blog-card-five-topic');
            let blogFiveTitle = document.getElementById('blog-five-title');
            let blogFiveText = document.getElementById('blog-five-text');
            let blogCardSixTopic = document.getElementById('blog-card-six-topic');
            let blogSixTitle = document.getElementById('blog-six-title');
            let blogSixText = document.getElementById('blog-six-text');
            let blogCardSevenTopic = document.getElementById('blog-card-seven-topic');
            let blogSevenTitle = document.getElementById('blog-seven-title');
            let blogSevenText = document.getElementById('blog-seven-text');
            let blogCardEightTopic = document.getElementById('blog-card-eight-topic');
            let blogEightTitle = document.getElementById('blog-eight-title');
            let blogEightText = document.getElementById('blog-eight-text');
            let blogCardNineTopic = document.getElementById('blog-card-nine-topic');
            let blogNineTitle = document.getElementById('blog-nine-title');
            let blogNineText = document.getElementById('blog-nine-text');

            let copyright = document.getElementById('copyright');

            if (locale === "bg-BG") {
                translateToBulgarianForBlogPage();
            }
            else if (locale === "en-GB") {
                translateToEnglishForBlogPage();
            }
            else if (locale === "de-DE") {
                translateToGermanForBlogPage();
            }
            else if (locale === "ru-RU") {
                translateToRussianForBlogPage();
            }


            function translateToBulgarianForBlogPage() {
                navbarHome.innerHTML = "Начало";
                navbarAbout.innerHTML = "За мен";
                navbarServices.innerHTML = "Услуги";
                navbarSkills.innerHTML = "Умения";
                navbarCertificate.innerHTML = "Сертификати";
                navbarProjects.innerHTML = "Проекти";
                navbarContact.innerHTML = "Контакти";

                titleHeader.innerHTML = 'Добре дошли в моя блог';
                textHeader.innerHTML = 'Това е мястото, където можете да подобрите уменията си по програмиране и да научите неща, за които дори не сте си представяли.';
                smallText.innerHTML = 'Научете повече &rarr;';

                hiddenButtonText.innerHTML = 'Отвори меню &rarr;';

                hideSection.innerHTML = '&larr;';
                recentPostTitle.innerHTML = 'Последни публикации';
                machineLearningTitle.innerHTML = 'Въведение в машинното обучение с Python';
                machineLearningLink.innerHTML = 'Научете повече &rarr;';
                gitTitle.innerHTML = '10 основни Git команди за всеки разработчик';
                gitLink.innerHTML = 'Научете повече &rarr;';
                interviewTitle.innerHTML = 'Най-често задаваните въпроси за интервю за C#';
                interviewLink.innerHTML = 'Научете повече &rarr;';
                oopTitle.innerHTML = 'Основи на обектно-ориентираното програмиране';
                oopLink.innerHTML = 'Научете повече &rarr;';
                newsTitle.innerHTML = 'Новини';
                javascriptTitle.innerHTML = 'Защо JavaScript е толкова популярен?';
                javascriptLink.innerHTML = 'Научете повече &rarr;';
                javascriptTypescriptTitle.innerHTML = 'JavaScript срещу TypeScript';
                javascriptTypescriptLink.innerHTML = 'Научете повече &rarr;';
                pythonRubyTitle.innerHTML = 'Python срещу Ruby: Кой език да научите?';
                pythonRubyLink.innerHTML = 'Научете повече &rarr;';
                csharpFeaturesTitle.innerHTML = 'Разглеждане на нови функции в последната версия на C#';
                csharpFeaturesLink.innerHTML = 'Научете повече &rarr;';

                blogCardOneTopic.innerHTML = 'Кодиране';
                blogOneTitle.innerHTML = 'Защо JavaScript е толкова популярен?';
                blogOneText.innerHTML = 'Популярността на JavaScript произтича от неговата гъвкавост както в клиентското, така и в сървърното разработване, подкрепена от огромна екосистема от библиотеки и рамки.';
                blogCardTwoTopic.innerHTML = 'Кодиране';
                blogTwoTitle.innerHTML = 'JavaScript срещу TypeScript';
                blogTwoText.innerHTML = 'JavaScript е динамичен скриптов език, докато TypeScript е надмножество на JavaScript с опционално статично типизиране, осигуряващо по-добра поддръжка и мащабируемост на кода.';
                blogCardThreeTopic.innerHTML = 'Кодиране';
                blogThreeTitle.innerHTML = 'Най-често задаваните въпроси за интервю за C#';
                blogThreeText.innerHTML = 'Често срещаните въпроси за интервю за C# обхващат теми като абстрактни класове срещу интерфейси, управление на паметта, манипулация на низове и други.';
                blogCardFourTopic.innerHTML = 'Кодиране';
                blogFourTitle.innerHTML = 'Основи на обектно-ориентираното програмиране';
                blogFourText.innerHTML = 'Разбирането на основите на обектно-ориентираното програмиране е от съществено значение за създаването на мащабируеми и поддържани софтуерни системи.';
                blogCardFiveTopic.innerHTML = 'Кодиране';
                blogFiveTitle.innerHTML = 'Разбиране на асинхронното програмиране в JavaScript';
                blogFiveText.innerHTML = 'Асинхронното програмиране в JavaScript позволява неблокиращи операции, осигурявайки по-ефективно изпълнение на кода.';
                blogCardSixTopic.innerHTML = 'Кодиране';
                blogSixTitle.innerHTML = 'Python срещу Ruby: Кой език да научите?';
                blogSixText.innerHTML = 'Python и Ruby са мощни, високо ниво програмни езици. Тази статия сравнява техните характеристики, силни страни и други.';
                blogCardSevenTopic.innerHTML = 'Кодиране';
                blogSevenTitle.innerHTML = '10 основни Git команди за всеки разработчик';
                blogSevenText.innerHTML = 'Овладяването на Git е от съществено значение за съвременната разработка. Тази статия обхваща десетте най-важни Git команди, предоставяйки обяснения и примери за подобряване на вашите умения за контрол на версиите.';
                blogCardEightTopic.innerHTML = 'Кодиране';
                blogEightTitle.innerHTML = 'Разглеждане на нови функции в последната версия на C#';
                blogEightText.innerHTML = 'Тази статия преглежда тези актуализации и демонстрира как да ги използвате във вашите проекти за подобряване на ефективността на кодирането.';
                blogCardNineTopic.innerHTML = 'Кодиране';
                blogNineTitle.innerHTML = 'Въведение в машинното обучение с Python';
                blogNineText.innerHTML = 'Машинното обучение е бързо развиваща се област с разнообразни приложения. Тази статия представя основите на машинното обучение с помощта на Python.';

                copyright.innerHTML = "Авторско право © 2024 - Всички права запазени || Дизайн от: Кадир Язаджи";
            }

            function translateToGermanForBlogPage() {
                navbarHome.innerHTML = "Startseite";
                navbarAbout.innerHTML = "Über mich";
                navbarServices.innerHTML = "Dienstleistungen";
                navbarSkills.innerHTML = "Fähigkeiten";
                navbarCertificate.innerHTML = "Zertifikate";
                navbarProjects.innerHTML = "Projekte";
                navbarContact.innerHTML = "Kontakt";

                titleHeader.innerHTML = 'Willkommen in meinem Blog';
                textHeader.innerHTML = 'Dies ist der Ort, an dem Sie Ihre Programmierkenntnisse verbessern und Dinge lernen können, die Sie sich nie vorgestellt haben.';
                smallText.innerHTML = 'Erfahren Sie mehr &rarr;';

                hiddenButtonText.innerHTML = 'Menü öffnen &rarr;';

                hideSection.innerHTML = '&larr;';
                recentPostTitle.innerHTML = 'Neueste Beiträge';
                machineLearningTitle.innerHTML = 'Einführung in Machine Learning mit Python';
                machineLearningLink.innerHTML = 'Erfahren Sie mehr &rarr;';
                gitTitle.innerHTML = '10 wesentliche Git-Befehle für jeden Entwickler';
                gitLink.innerHTML = 'Erfahren Sie mehr &rarr;';
                interviewTitle.innerHTML = 'Die häufigsten Interviewfragen für C#';
                interviewLink.innerHTML = 'Erfahren Sie mehr &rarr;';
                oopTitle.innerHTML = 'Grundlagen der objektorientierten Programmierung';
                oopLink.innerHTML = 'Erfahren Sie mehr &rarr;';
                newsTitle.innerHTML = 'Nachrichten';
                javascriptTitle.innerHTML = 'Warum ist JavaScript so beliebt?';
                javascriptLink.innerHTML = 'Erfahren Sie mehr &rarr;';
                javascriptTypescriptTitle.innerHTML = 'JavaScript vs. TypeScript';
                javascriptTypescriptLink.innerHTML = 'Erfahren Sie mehr &rarr;';
                pythonRubyTitle.innerHTML = 'Python vs. Ruby: Welche Sprache sollten Sie lernen?';
                pythonRubyLink.innerHTML = 'Erfahren Sie mehr &rarr;';
                csharpFeaturesTitle.innerHTML = 'Erkunden der neuen Funktionen in der neuesten Version von C#';
                csharpFeaturesLink.innerHTML = 'Erfahren Sie mehr &rarr;';

                blogCardOneTopic.innerHTML = 'Codierung';
                blogOneTitle.innerHTML = 'Warum ist JavaScript so beliebt?';
                blogOneText.innerHTML = 'Die Beliebtheit von JavaScript ergibt sich aus seiner Vielseitigkeit in der Client- und Serverentwicklung, unterstützt durch ein riesiges Ökosystem von Bibliotheken und Frameworks.';
                blogCardTwoTopic.innerHTML = 'Codierung';
                blogTwoTitle.innerHTML = 'JavaScript vs. TypeScript';
                blogTwoText.innerHTML = 'JavaScript ist eine dynamische Skriptsprache, während TypeScript eine Obermenge von JavaScript mit optionaler statischer Typisierung ist, die eine verbesserte Wartbarkeit und Skalierbarkeit des Codes bietet.';
                blogCardThreeTopic.innerHTML = 'Codierung';
                blogThreeTitle.innerHTML = 'Die häufigsten Interviewfragen für C#';
                blogThreeText.innerHTML = 'Häufig gestellte Interviewfragen zu C# decken Themen wie abstrakte Klassen vs. Schnittstellen, Speicherverwaltung, Zeichenfolgenmanipulation und mehr ab.';
                blogCardFourTopic.innerHTML = 'Codierung';
                blogFourTitle.innerHTML = 'Grundlagen der objektorientierten Programmierung';
                blogFourText.innerHTML = 'Das Verständnis der Grundlagen der objektorientierten Programmierung ist entscheidend für den Aufbau skalierbarer und wartbarer Softwaresysteme.';
                blogCardFiveTopic.innerHTML = 'Codierung';
                blogFiveTitle.innerHTML = 'Verständnis der asynchronen Programmierung in JavaScript';
                blogFiveText.innerHTML = 'Asynchrone Programmierung in JavaScript ermöglicht nicht blockierende Operationen und sorgt so für eine effizientere Codeausführung.';
                blogCardSixTopic.innerHTML = 'Codierung';
                blogSixTitle.innerHTML = 'Python vs. Ruby: Welche Sprache sollten Sie lernen?';
                blogSixText.innerHTML = 'Python und Ruby sind beide leistungsstarke Programmiersprachen auf hohem Niveau. Dieser Artikel vergleicht ihre Merkmale, Stärken und mehr.';
                blogCardSevenTopic.innerHTML = 'Codierung';
                blogSevenTitle.innerHTML = '10 wesentliche Git-Befehle für jeden Entwickler';
                blogSevenText.innerHTML = 'Das Beherrschen von Git ist für die moderne Entwicklung unerlässlich. Dieser Artikel behandelt die zehn wichtigsten Git-Befehle und bietet Erklärungen und Beispiele zur Verbesserung Ihrer Versionskontrollfähigkeiten.';
                blogCardEightTopic.innerHTML = 'Codierung';
                blogEightTitle.innerHTML = 'Erkunden der neuen Funktionen in der neuesten Version von C#';
                blogEightText.innerHTML = 'Dieser Artikel überprüft diese Updates und zeigt, wie man sie in Ihren Projekten nutzt, um die Effizienz des Codierens zu verbessern.';
                blogCardNineTopic.innerHTML = 'Codierung';
                blogNineTitle.innerHTML = 'Einführung in Machine Learning mit Python';
                blogNineText.innerHTML = 'Machine Learning ist ein schnell wachsendes Gebiet mit vielfältigen Anwendungen. Dieser Artikel führt in die Grundlagen des Machine Learning mit Python ein.';

                copyright.innerHTML = "Urheberrecht © 2024 - Alle Rechte vorbehalten || Gestaltet von: Kadir Yazadzhi";
            }

            function translateToRussianForBlogPage() {
                navbarHome.innerHTML = "Домашняя";
                navbarAbout.innerHTML = "Обо мне";
                navbarServices.innerHTML = "Услуги";
                navbarSkills.innerHTML = "Навыки";
                navbarCertificate.innerHTML = "Сертификаты";
                navbarProjects.innerHTML = "Проекты";
                navbarContact.innerHTML = "Контакт";

                titleHeader.innerHTML = 'Добро пожаловать в мой блог';
                textHeader.innerHTML = 'Это место, где вы можете улучшить свои навыки программирования и узнать о вещах, о которых вы даже не могли себе представить.';
                smallText.innerHTML = 'Узнать больше &rarr;';

                hiddenButtonText.innerHTML = 'Открыть меню &rarr;';

                hideSection.innerHTML = '&larr;';
                recentPostTitle.innerHTML = 'Последние публикации';
                machineLearningTitle.innerHTML = 'Введение в машинное обучение с Python';
                machineLearningLink.innerHTML = 'Узнать больше &rarr;';
                gitTitle.innerHTML = '10 основных команд Git для каждого разработчика';
                gitLink.innerHTML = 'Узнать больше &rarr;';
                interviewTitle.innerHTML = 'Самые распространенные вопросы на собеседовании по C#';
                interviewLink.innerHTML = 'Узнать больше &rarr;';
                oopTitle.innerHTML = 'Основы объектно-ориентированного программирования';
                oopLink.innerHTML = 'Узнать больше &rarr;';
                newsTitle.innerHTML = 'Новости';
                javascriptTitle.innerHTML = 'Почему JavaScript так популярен?';
                javascriptLink.innerHTML = 'Узнать больше &rarr;';
                javascriptTypescriptTitle.innerHTML = 'JavaScript против TypeScript';
                javascriptTypescriptLink.innerHTML = 'Узнать больше &rarr;';
                pythonRubyTitle.innerHTML = 'Python против Ruby: Какой язык вам стоит изучить?';
                pythonRubyLink.innerHTML = 'Узнать больше &rarr;';
                csharpFeaturesTitle.innerHTML = 'Изучение новых возможностей последней версии C#';
                csharpFeaturesLink.innerHTML = 'Узнать больше &rarr;';

                blogCardOneTopic.innerHTML = 'Кодирование';
                blogOneTitle.innerHTML = 'Почему JavaScript так популярен?';
                blogOneText.innerHTML = 'Популярность JavaScript объясняется его универсальностью как в клиентской, так и в серверной разработке, поддерживаемой огромной экосистемой библиотек и фреймворков.';
                blogCardTwoTopic.innerHTML = 'Кодирование';
                blogTwoTitle.innerHTML = 'JavaScript против TypeScript';
                blogTwoText.innerHTML = 'JavaScript - это динамический скриптовый язык, а TypeScript - надмножество JavaScript с опциональной статической типизацией, обеспечивающее улучшенное обслуживание и масштабируемость кода.';
                blogCardThreeTopic.innerHTML = 'Кодирование';
                blogThreeTitle.innerHTML = 'Самые распространенные вопросы на собеседовании по C#';
                blogThreeText.innerHTML = 'Типичные вопросы на собеседовании по C# включают темы, такие как абстрактные классы против интерфейсов, управление памятью, манипуляция строками и многое другое.';
                blogCardFourTopic.innerHTML = 'Кодирование';
                blogFourTitle.innerHTML = 'Основы объектно-ориентированного программирования';
                blogFourText.innerHTML = 'Понимание основ объектно-ориентированного программирования имеет важное значение для создания масштабируемых и поддерживаемых программных систем.';
                blogCardFiveTopic.innerHTML = 'Кодирование';
                blogFiveTitle.innerHTML = 'Понимание асинхронного программирования в JavaScript';
                blogFiveText.innerHTML = 'Асинхронное программирование в JavaScript позволяет выполнять неблокирующие операции, обеспечивая более эффективное выполнение кода.';
                blogCardSixTopic.innerHTML = 'Кодирование';
                blogSixTitle.innerHTML = 'Python против Ruby: Какой язык вам стоит изучить?';
                blogSixText.innerHTML = 'Python и Ruby - оба мощные, высокоуровневые языки программирования. В этой статье сравниваются их особенности, сильные стороны и многое другое.';
                blogCardSevenTopic.innerHTML = 'Кодирование';
                blogSevenTitle.innerHTML = '10 основных команд Git для каждого разработчика';
                blogSevenText.innerHTML = 'Овладение Git имеет важное значение для современной разработки. В этой статье рассматриваются десять самых важных команд Git, предоставляются объяснения и примеры для улучшения ваших навыков управления версиями.';
                blogCardEightTopic.innerHTML = 'Кодирование';
                blogEightTitle.innerHTML = 'Изучение новых возможностей последней версии C#';
                blogEightText.innerHTML = 'В этой статье рассматриваются обновления и показывается, как использовать их в ваших проектах для повышения эффективности кодирования.';
                blogCardNineTopic.innerHTML = 'Кодирование';
                blogNineTitle.innerHTML = 'Введение в машинное обучение с Python';
                blogNineText.innerHTML = 'Машинное обучение - это быстро развивающаяся область с разнообразными приложениями. В этой статье представлены основы машинного обучения с использованием Python.';

                copyright.innerHTML = "Авторские права © 2024 - Все права защищены || Дизайн: Кадир Язаджи";
            }

            function translateToEnglishForBlogPage() {
                navbarHome.innerHTML = "Home";
                navbarAbout.innerHTML = "About me";
                navbarServices.innerHTML = "Services";
                navbarSkills.innerHTML = "Skills";
                navbarCertificate.innerHTML = "Certificates";
                navbarProjects.innerHTML = "Projects";
                navbarContact.innerHTML = "Contact";

                titleHeader.innerHTML = 'Welcome to My Blog';
                textHeader.innerHTML = 'This is the place where you can enhance your programming skills and learn about things you never even imagined.';
                smallText.innerHTML = 'Learn more &rarr;';

                hiddenButtonText.innerHTML = 'Open menu &rarr;';

                hideSection.innerHTML = '&larr;';
                recentPostTitle.innerHTML = 'Recent Posts';
                machineLearningTitle.innerHTML = 'Introduction to Machine Learning with Python';
                machineLearningLink.innerHTML = 'Learn more &rarr;';
                gitTitle.innerHTML = '10 Essential Git Commands for Every Developer';
                gitLink.innerHTML = 'Learn more &rarr;';
                interviewTitle.innerHTML = 'Most Commonly Asked Interview Questions for C#';
                interviewLink.innerHTML = 'Learn more &rarr;';
                oopTitle.innerHTML = 'Fundamentals of Object-Oriented Programming';
                oopLink.innerHTML = 'Learn more &rarr;';
                newsTitle.innerHTML = 'News';
                javascriptTitle.innerHTML = 'Why JavaScript is So Popular?';
                javascriptLink.innerHTML = 'Learn more &rarr;';
                javascriptTypescriptTitle.innerHTML = 'JavaScript vs TypeScript';
                javascriptTypescriptLink.innerHTML = 'Learn more &rarr;';
                pythonRubyTitle.innerHTML = 'Python vs Ruby: Which Language Should You Learn?';
                pythonRubyLink.innerHTML = 'Learn more &rarr;';
                csharpFeaturesTitle.innerHTML = 'Exploring New Features in the Latest Version of C#';
                csharpFeaturesLink.innerHTML = 'Learn more &rarr;';

                blogCardOneTopic.innerHTML = 'Coding';
                blogOneTitle.innerHTML = 'Why JavaScript is So Popular?';
                blogOneText.innerHTML = 'JavaScript\'s popularity stems from its versatility in both client and server-side development, supported by a vast ecosystem of libraries and frameworks.';
                blogCardTwoTopic.innerHTML = 'Coding';
                blogTwoTitle.innerHTML = 'JavaScript vs TypeScript';
                blogTwoText.innerHTML = 'JavaScript is a dynamic scripting language, while TypeScript is a superset of JavaScript with optional static typing, providing enhanced code maintainability and scalability.';
                blogCardThreeTopic.innerHTML = 'Coding';
                blogThreeTitle.innerHTML = 'Most Commonly Asked Interview Questions for C#';
                blogThreeText.innerHTML = 'Common C# interview questions cover topics like abstract classes vs. interfaces, memory management, string manipulation and more.';
                blogCardFourTopic.innerHTML = 'Coding';
                blogFourTitle.innerHTML = 'Fundamentals of Object-Oriented Programming';
                blogFourText.innerHTML = 'Understanding the fundamentals of Object-Oriented Programming is crucial for building scalable and maintainable software systems.';
                blogCardFiveTopic.innerHTML = 'Coding';
                blogFiveTitle.innerHTML = 'Understanding Asynchronous Programming in JavaScript';
                blogFiveText.innerHTML = 'Asynchronous programming in JavaScript enables non-blocking operations, allowing for more efficient code execution.';
                blogCardSixTopic.innerHTML = 'Coding';
                blogSixTitle.innerHTML = 'Python vs Ruby: Which Language Should You Learn?';
                blogSixText.innerHTML = 'Python and Ruby are both powerful, high-level programming languages. This article compares their features, strengths, and more.';
                blogCardSevenTopic.innerHTML = 'Coding';
                blogSevenTitle.innerHTML = '10 Essential Git Commands for Every Developer';
                blogSevenText.innerHTML = 'Mastering Git is crucial for modern development. This article covers the ten most essential Git commands, providing explanations and examples to enhance your version control skills.';
                blogCardEightTopic.innerHTML = 'Coding';
                blogEightTitle.innerHTML = 'Exploring New Features in the Latest Version of C#';
                blogEightText.innerHTML = 'This article reviews these updates and demonstrates how to leverage them in your projects to improve your coding efficiency.';
                blogCardNineTopic.innerHTML = 'Coding';
                blogNineTitle.innerHTML = 'Introduction to Machine Learning with Python';
                blogNineText.innerHTML = 'Machine learning is a rapidly growing field with diverse applications. This article introduces the basics of machine learning using Python.';

                copyright.innerHTML = "Copyright &copy; 2024 - All Rights Reserved || Designed By: Kadir Yazadzhi";
            }
        }
        else if (path === "/portfolio/Shop.html") {
            let navbarHome = document.getElementById('navbar-home');
            let navbarAbout = document.getElementById('navbar-about');
            let navbarServices = document.getElementById('navbar-services');
            let navbarSkills = document.getElementById('navbar-skills');
            let navbarCertificate = document.getElementById('navbar-certificate');
            let navbarProjects = document.getElementById('navbar-projects');
            let navbarContact = document.getElementById('navbar-contact');

            let shopTitle = document.getElementById('shopTitle');
            let shopText = document.getElementById('shopText');
            let shopSmallText = document.getElementById('shopSmallText');

            let priceCardOneTitle = document.getElementById('price-card-one-title');
            let priceCardOneText = document.getElementById('price-card-one-text');

            let priceCardTwoTitle = document.getElementById('price-card-two-title');
            let priceCardTwoText = document.getElementById('price-card-two-text');

            let priceCardThreeTitle = document.getElementById('price-card-three-title');
            let priceCardThreeText = document.getElementById('price-card-three-text');

            let priceCardFourTitle = document.getElementById('price-card-four-title');
            let priceCardFourText = document.getElementById('price-card-four-text');

            let priceCardFiveTitle = document.getElementById('price-card-five-title');
            let priceCardFiveText = document.getElementById('price-card-five-text');

            let copyright = document.getElementById('copyright');

            if (locale === "bg-BG") {
                translateToBulgarianForShopPage();
            }
            else if (locale === "en-GB") {
                translateToEnglishForShopPage();
            }
            else if (locale === "de-DE") {
                translateToGermanForShopPage();
            }
            else if (locale === "ru-RU") {
                translateToRussianForShopPage();
            }

            function translateToBulgarianForShopPage() {
                navbarHome.innerHTML = "Начало";
                navbarAbout.innerHTML = "За мен";
                navbarServices.innerHTML = "Услуги";
                navbarSkills.innerHTML = "Умения";
                navbarCertificate.innerHTML = "Сертификати";
                navbarProjects.innerHTML = "Проекти";
                navbarContact.innerHTML = "Контакти";

                shopTitle.innerHTML = 'Добре дошли в моя магазин';
                shopText.innerHTML = 'Разгледайте моите услуги, където предлагам професионални решения за уеб разработка и софтуерно инженерство, съобразени с вашите нужди.';
                shopSmallText.innerHTML = 'Научете повече &rarr;';

                priceCardOneTitle.innerHTML = 'Уебсайт с една страница';
                priceCardOneText.innerHTML = 'С HTML, CSS и JavaScript';

                priceCardTwoTitle.innerHTML = 'Уебсайт с една страница';
                priceCardTwoText.innerHTML = 'С React или Angular';

                priceCardThreeTitle.innerHTML = 'Персонализиран уебсайт с няколко страници';
                priceCardThreeText.innerHTML = 'С всички езици и рамки';

                priceCardFourTitle.innerHTML = 'Уебсайт с няколко страници';
                priceCardFourText.innerHTML = 'С WordPress или Weebly';

                priceCardFiveTitle.innerHTML = 'Да работя за вас';
                priceCardFiveText.innerHTML = 'На проекти ориентирани към уеб или конзолна разработка';

                copyright.innerHTML = "Авторско право © 2024 - Всички права запазени || Дизайн от: Кадир Язаджи";
            }

            function translateToGermanForShopPage() {
                navbarHome.innerHTML = "Startseite";
                navbarAbout.innerHTML = "Über mich";
                navbarServices.innerHTML = "Dienstleistungen";
                navbarSkills.innerHTML = "Fähigkeiten";
                navbarCertificate.innerHTML = "Zertifikate";
                navbarProjects.innerHTML = "Projekte";
                navbarContact.innerHTML = "Kontakt";

                shopTitle.innerHTML = 'Willkommen in meinem Shop';
                shopText.innerHTML = 'Entdecken Sie meine Dienstleistungen, bei denen ich professionelle Lösungen für Webentwicklung und Software-Engineering anbiete, die auf Ihre Bedürfnisse zugeschnitten sind.';
                shopSmallText.innerHTML = 'Erfahren Sie mehr &rarr;';

                priceCardOneTitle.innerHTML = 'Einseitige Website';
                priceCardOneText.innerHTML = 'Mit HTML, CSS und JavaScript';

                priceCardTwoTitle.innerHTML = 'Einseitige Website';
                priceCardTwoText.innerHTML = 'Mit React oder Angular';

                priceCardThreeTitle.innerHTML = 'Angepasste mehrseitige Website';
                priceCardThreeText.innerHTML = 'Mit allen Sprachen und Frameworks';

                priceCardFourTitle.innerHTML = 'Mehrseitige Website';
                priceCardFourText.innerHTML = 'Mit WordPress oder Weebly';

                priceCardFiveTitle.innerHTML = 'Für Sie arbeiten';
                priceCardFiveText.innerHTML = 'An web- oder konsolenorientierten Projekten';

                copyright.innerHTML = "Urheberrecht © 2024 - Alle Rechte vorbehalten || Gestaltet von: Kadir Yazadzhi";
            }

            function translateToEnglishForShopPage() {
                navbarHome.innerHTML = "Home";
                navbarAbout.innerHTML = "About me";
                navbarServices.innerHTML = "Services";
                navbarSkills.innerHTML = "Skills";
                navbarCertificate.innerHTML = "Certificates";
                navbarProjects.innerHTML = "Projects";
                navbarContact.innerHTML = "Contact";

                shopTitle.innerHTML = 'Welcome to my Shop';
                shopText.innerHTML = 'Explore my services, where I offer professional web development and software engineering solutions tailored to your needs.';
                shopSmallText.innerHTML = 'Learn more &rarr;';

                priceCardOneTitle.innerHTML = 'One Page Website';
                priceCardOneText.innerHTML = 'With HTML, CSS, and JavaScript';

                priceCardTwoTitle.innerHTML = 'One Page Website';
                priceCardTwoText.innerHTML = 'With React or Angular';

                priceCardThreeTitle.innerHTML = 'Custom Multi-Page Website';
                priceCardThreeText.innerHTML = 'With all languages and frameworks';

                priceCardFourTitle.innerHTML = 'Multi-Page Website';
                priceCardFourText.innerHTML = 'With WordPress or Weebly';

                priceCardFiveTitle.innerHTML = 'Working for You';
                priceCardFiveText.innerHTML = 'On web or console-oriented projects';

                copyright.innerHTML = "Copyright &copy; 2024 - All Rights Reserved || Designed By: Kadir Yazadzhi";
            }

            function translateToRussianForShopPage() {
                navbarHome.innerHTML = "Домашняя";
                navbarAbout.innerHTML = "Обо мне";
                navbarServices.innerHTML = "Услуги";
                navbarSkills.innerHTML = "Навыки";
                navbarCertificate.innerHTML = "Сертификаты";
                navbarProjects.innerHTML = "Проекты";
                navbarContact.innerHTML = "Контакт";

                shopTitle.innerHTML = 'Добро пожаловать в мой магазин';
                shopText.innerHTML = 'Изучите мои услуги, где я предлагаю профессиональные решения для веб-разработки и программной инженерии, адаптированные под ваши нужды.';
                shopSmallText.innerHTML = 'Узнать больше &rarr;';

                priceCardOneTitle.innerHTML = 'Одностраничный сайт';
                priceCardOneText.innerHTML = 'С HTML, CSS и JavaScript';

                priceCardTwoTitle.innerHTML = 'Одностраничный сайт';
                priceCardTwoText.innerHTML = 'С React или Angular';

                priceCardThreeTitle.innerHTML = 'Кастомный многостраничный сайт';
                priceCardThreeText.innerHTML = 'С использованием всех языков и фреймворков';

                priceCardFourTitle.innerHTML = 'Многостраничный сайт';
                priceCardFourText.innerHTML = 'С WordPress или Weebly';

                priceCardFiveTitle.innerHTML = 'Работать для вас';
                priceCardFiveText.innerHTML = 'На проектах, ориентированных на веб или консоль';

                copyright.innerHTML = "Авторские права © 2024 - Все права защищены || Дизайн: Кадир Язаджи";
            }
        }
        else if (path === "/portfolio/Blogs.html") {
            let navbarHome = document.getElementById('navbar-home');
            let navbarAbout = document.getElementById('navbar-about');
            let navbarServices = document.getElementById('navbar-services');
            let navbarSkills = document.getElementById('navbar-skills');
            let navbarCertificate = document.getElementById('navbar-certificate');
            let navbarProjects = document.getElementById('navbar-projects');
            let navbarContact = document.getElementById('navbar-contact');

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
            let PlusCardTitleOne = document.getElementById('blog-title-plus-card-one');
            let PlusCardTitleTwo = document.getElementById('blog-title-plus-card-two');
            let PlusCardTitleThree = document.getElementById('blog-title-plus-card-three');
            let PlusCardTitleFour = document.getElementById('blog-title-plus-card-four');
            let PlusCardTextOne = document.getElementById('blog-text-plus-card-one');
            let PlusCardTextTwo = document.getElementById('blog-text-plus-card-two');
            let PlusCardTextThree = document.getElementById('blog-text-plus-card-three');
            let PlusCardTextFour = document.getElementById('blog-text-plus-card-four');
            let PlusCardButtonOne = document.getElementById('blog-button-plus-card-one');
            let PlusCardButtonTwo = document.getElementById('blog-button-plus-card-two');
            let PlusCardButtonThree = document.getElementById('blog-button-plus-card-three');
            let PlusCardButtonFour = document.getElementById('blog-button-plus-card-four');

            let copyright = document.getElementById('copyright');

            if (locale === "bg-BG") {
                translateBlogsToBulgarian();
            }
            else if (locale === "en-GB") {
                translateBlogsToEnglish();
            }
            else if (locale === "de-DE") {
                translateBlogsToGerman();
            }
            else if (locale === "ru-RU") {
                translateBlogsToRussian();
            }

            function translateBlogsToBulgarian() {
                navbarHome.innerHTML = "Начало";
                navbarAbout.innerHTML = "За мен";
                navbarServices.innerHTML = "Услуги";
                navbarSkills.innerHTML = "Умения";
                navbarCertificate.innerHTML = "Сертификати";
                navbarProjects.innerHTML = "Проекти";
                navbarContact.innerHTML = "Контакти";

                copyright.innerHTML = "Авторско право © 2024 - Всички права запазени || Дизайн от: Кадир Язаджи";
            }
            function translateBlogsToEnglish() {
                navbarHome.innerHTML = "Home";
                navbarAbout.innerHTML = "About me";
                navbarServices.innerHTML = "Services";
                navbarSkills.innerHTML = "Skills";
                navbarCertificate.innerHTML = "Certificates";
                navbarProjects.innerHTML = "Projects";
                navbarContact.innerHTML = "Contact";

                copyright.innerHTML = "Copyright &copy; 2024 - All Rights Reserved || Designed By: Kadir Yazadzhi";
            }
            function translateBlogsToGerman() {
                navbarHome.innerHTML = "Startseite";
                navbarAbout.innerHTML = "Über mich";
                navbarServices.innerHTML = "Dienstleistungen";
                navbarSkills.innerHTML = "Fähigkeiten";
                navbarCertificate.innerHTML = "Zertifikate";
                navbarProjects.innerHTML = "Projekte";
                navbarContact.innerHTML = "Kontakt";

                copyright.innerHTML = "Urheberrecht © 2024 - Alle Rechte vorbehalten || Gestaltet von: Kadir Yazadzhi";
            }
            function translateBlogsToRussian() {
                navbarHome.innerHTML = "Домашняя";
                navbarAbout.innerHTML = "Обо мне";
                navbarServices.innerHTML = "Услуги";
                navbarSkills.innerHTML = "Навыки";
                navbarCertificate.innerHTML = "Сертификаты";
                navbarProjects.innerHTML = "Проекты";
                navbarContact.innerHTML = "Контакт";

                copyright.innerHTML = "Авторские права © 2024 - Все права защищены || Дизайн: Кадир Язаджи";
            }

            function elements(data) {
                titleHeader.innerHTML = data.titleHeader;
                textHeaderOne.innerHTML = data.textHeaderOne;
                smallTextHeader.innerHTML = data.smallTextHeader;
                blogTextOne.innerHTML = data.blogTextOne;
                blogTextSecond.innerHTML = data.blogTextSecond;
                blogTitleOne.innerHTML = data.blogTitleOne;
                blogTitleSecond.innerHTML = data.blogTitleSecond;
                blogTitleThird.innerHTML = data.blogTitleThird;
                blogTitleFour.innerHTML = data.blogTitleFour;
                blogTitleFive.innerHTML = data.blogTitleFive;
                blogTitleSix.innerHTML = data.blogTitleSix;
                blogTextThird.innerHTML = data.blogTextThird;
                blogTextFour.innerHTML = data.blogTextFour;
                blogTextFive.innerHTML = data.blogTextFive;
                blogTextSix.innerHTML = data.blogTextSix;
                blogTextSeven.innerHTML = data.blogTextSeven;
                PlusCardTitleOne.innerHTML = data.PlusCardTitleOne;
                PlusCardTitleTwo.innerHTML = data.PlusCardTitleTwo;
                PlusCardTitleThree.innerHTML = data.PlusCardTitleThree;
                PlusCardTitleFour.innerHTML = data.PlusCardTitleFour;
                PlusCardTextOne.innerHTML = data.PlusCardTextOne;
                PlusCardTextTwo.innerHTML = data.PlusCardTextTwo;
                PlusCardTextThree.innerHTML = data.PlusCardTextThree;
                PlusCardTextFour.innerHTML = data.PlusCardTextFour;
                PlusCardButtonOne.innerHTML = data.PlusCardButtonOne;
                PlusCardButtonTwo.innerHTML = data.PlusCardButtonTwo;
                PlusCardButtonThree.innerHTML = data.PlusCardButtonThree;
                PlusCardButtonFour.innerHTML = data.PlusCardButtonFour;
            }

            if (checkLocalStorage("1")) {
                if (locale === "bg-BG") {
                    tranlateBlogsOneToBulgarian();
                }
                else if (locale === "en-GB") {
                    tranlateBlogsOneToEnglish();
                }
                else if (locale === "de-DE") {
                    tranlateBlogsOneToGerman();
                }
                else if (locale === "ru-RU") {
                    tranlateBlogsOneToRussian();
                }

                function tranlateBlogsOneToBulgarian() {
                    const data = {
                        titleHeader: "Защо JavaScript е толкова популярен?",
                        textHeaderOne: "JavaScript е популярен, защото е универсален, присъстващ навсякъде в уеб разработката, поддържан от обширна екосистема и общност и подкрепен от водещи технологични компании.",
                        smallTextHeader: "Научи повече &rarr;",
                        blogTextOne: "JavaScript е един от най-популярните програмни езици в света, и неговата популярност може да се обясни с няколко ключови фактора:",
                        blogTextSecond: "JavaScript е единственият програмен език, който може да се изпълнява нативно в уеб браузърите, което го прави незаменим за разработка на фронтенд. Всеки голям уеб браузър поддържа JavaScript, което позволява на разработчиците да създават динамични и интерактивни потребителски изживявания. Тази широко разпространена поддръжка укрепва JavaScript като основна технология на уеба.",
                        blogTitleOne: "1. Всеобхватност в уеб разработката",
                        blogTitleSecond: "2. Универсалност",
                        blogTitleThird: "3. Голям екосистем и общност",
                        blogTitleFour: "4. Постоянно развитие",
                        blogTitleFive: "5. Крос-платформено разработване",
                        blogTitleSix: "6. Нужда от специалисти на пазара на труда",
                        blogTextThird: "JavaScript не е ограничен само до разработка на фронтенд; той може да се използва и на страната на сървъра с такива среди като Node.js. Тази универсалност позволява на разработчиците да използват един език за разработка както на клиентската, така и на сървърната страна, което оптимизира процеса на разработка и управлението на кодовите бази.",
                        blogTextFour: "JavaScript разполага с обширен екосистем от библиотеки и рамки като React, Angular и Vue.js, които значително улесняват и ускоряват разработката на сложни приложения. Освен това голямата и активна общност продължава да допринася за растежа на езика, предоставяйки поддръжка, инструменти и ресурси за разработчици на всички нива на умения.",
                        blogTextFive: "JavaScript е значително еволюирал от своето възникване. Въвеждането на стандартите на ECMAScript доведе до модерни функции и подобрения в езика, което го направи по-мощен и по-лесен за употреба. Редовните актуализации гарантират, че JavaScript остава актуален и отговаря на изискванията на съвременната уеб разработка.",
                        blogTextSix: "С инструменти като Electron JavaScript може да се използва за създаване на крос-платформени настолни приложения. Това позволява на разработчиците да използват своите умения по JavaScript за създаване на приложения, които работят на Windows, macOS и Linux, допълнително разширявайки приложимостта на езика.",
                        blogTextSeven: "Търсенето на JavaScript разработчици е постоянно високо. Поради нуждата на бизнесите от създаване на ангажиращи и отзивчиви уеб приложения, търсенето на квалифицирани JavaScript разработчици продължава да нараства. Това се превръща в множество възможности за работа и привлекателни заплати за тези, които владеят езика.",
                        PlusCardTitleOne: "Въведение в машинното обучение с Python",
                        PlusCardTitleTwo: "10 основни Git команди за всеки разработчик",
                        PlusCardTitleThree: "Основи на обектно-ориентираното програмиране",
                        PlusCardTitleFour: "Най-често задавани въпроси при интервюта за C#",
                        PlusCardTextOne: "Машинното обучение е бързо развиваща се област с разнообразни приложения. Този материал въвежда основите на машинното обучение с използване на Python.",
                        PlusCardTextTwo: "Овладяването на Git е от съществено значение за съвременната разработка. Тази статия разглежда десетте най-важни команди в Git, предоставяйки обяснения и примери за подобряване на уменията за управление на версиите.",
                        PlusCardTextThree: "Разбирането на основите на обектно-ориентираното програмиране е от ключово значение за изграждането на мащабируеми и лесно поддържаеми софтуерни системи.",
                        PlusCardTextFour: "Често задаваните въпроси на интервюта за C# обхващат теми като абстрактни класове срещу интерфейси, управление на паметта, обработка на низове и други.",
                        PlusCardButtonOne: "Повече информация",
                        PlusCardButtonTwo: "Повече информация",
                        PlusCardButtonThree: "Повече информация",
                        PlusCardButtonFour: "Повече информация"
                    };
                    elements(data);
                }

                function tranlateBlogsOneToGerman () {
                    const data = {
                        titleHeader: "Warum JavaScript so beliebt ist?",
                        textHeaderOne: "JavaScript ist beliebt, weil es vielseitig einsetzbar ist, in der Webentwicklung allgegenwärtig ist, von einem umfangreichen Ökosystem und einer Gemeinschaft unterstützt wird und von führenden Technologieunternehmen unterstützt wird.",
                        smallTextHeader: "Erfahren Sie mehr &rarr;",
                        blogTextOne: "JavaScript ist eine der beliebtesten Programmiersprachen der Welt, und seine Popularität lässt sich auf mehrere Schlüsselfaktoren zurückführen:",
                        blogTextSecond: "JavaScript ist die einzige Programmiersprache, die nativ in Webbrowsern ausgeführt werden kann, was es für die Front-End-Entwicklung unverzichtbar macht. Jeder große Webbrowser unterstützt JavaScript, was Entwicklern ermöglicht, dynamische und interaktive Benutzererlebnisse zu schaffen. Diese weit verbreitete Unterstützung hat JavaScript als eine grundlegende Technologie des Webs etabliert.",
                        blogTitleOne: "1. Allgegenwärtigkeit in der Webentwicklung",
                        blogTitleSecond: "2. Vielseitigkeit",
                        blogTitleThird: "3. Großes Ökosystem und Gemeinschaft",
                        blogTitleFour: "4. Kontinuierliche Weiterentwicklung",
                        blogTitleFive: "5. Cross-Platform-Entwicklung",
                        blogTitleSix: "6. Nachfrage auf dem Arbeitsmarkt",
                        blogTextThird: "JavaScript ist nicht nur auf die Front-End-Entwicklung beschränkt; es kann auch auf der Serverseite mit Umgebungen wie Node.js verwendet werden. Diese Vielseitigkeit ermöglicht es Entwicklern, eine einzige Sprache für die Entwicklung sowohl auf der Client- als auch auf der Serverseite zu verwenden, was den Entwicklungsprozess optimiert und das Management von Codebasen erleichtert.",
                        blogTextFour: "JavaScript verfügt über ein umfangreiches Ökosystem von Bibliotheken und Frameworks wie React, Angular und Vue.js, die die Entwicklung komplexer Anwendungen erheblich vereinfachen und beschleunigen. Darüber hinaus trägt die große und aktive Gemeinschaft kontinuierlich zum Wachstum der Sprache bei, indem sie Unterstützung, Tools und Ressourcen für Entwickler aller Skill-Level bereitstellt.",
                        blogTextFive: "JavaScript hat sich seit seiner Einführung erheblich weiterentwickelt. Die Einführung der ECMAScript-Standards hat moderne Funktionen und Verbesserungen in die Sprache gebracht, wodurch sie leistungsfähiger und einfacher zu verwenden ist. Regelmäßige Updates stellen sicher, dass JavaScript relevant bleibt und den Anforderungen der modernen Webentwicklung gerecht wird.",
                        blogTextSix: "Mit Tools wie Electron kann JavaScript verwendet werden, um plattformübergreifende Desktop-Anwendungen zu erstellen. Entwickler können ihre JavaScript-Kenntnisse nutzen, um Anwendungen zu erstellen, die auf Windows, macOS und Linux laufen, was die Anwendbarkeit der Sprache weiter erhöht.",
                        blogTextSeven: "Die Nachfrage nach JavaScript-Entwicklern ist kontinuierlich hoch. Da Unternehmen bemüht sind, ansprechende und reaktionsfähige Webanwendungen zu erstellen, wächst der Bedarf an qualifizierten JavaScript-Entwicklern weiter. Diese Nachfrage führt zu zahlreichen Arbeitsmöglichkeiten und attraktiven Gehältern für diejenigen, die die Sprache beherrschen.",
                        PlusCardTitleOne: "Einführung in maschinelles Lernen mit Python",
                        PlusCardTitleTwo: "10 wesentliche Git-Befehle für jeden Entwickler",
                        PlusCardTitleThree: "Grundlagen der objektorientierten Programmierung",
                        PlusCardTitleFour: "Am häufigsten gestellte Fragen bei C#-Interviews",
                        PlusCardTextOne: "Maschinelles Lernen ist ein schnell wachsendes Feld mit vielfältigen Anwendungen. Dieser Artikel führt in die Grundlagen des maschinellen Lernens mit Python ein.",
                        PlusCardTextTwo: "Die Beherrschung von Git ist für die moderne Entwicklung von entscheidender Bedeutung. Dieser Artikel behandelt die zehn wichtigsten Git-Befehle, bietet Erklärungen und Beispiele zur Verbesserung der Versionskontrollfähigkeiten.",
                        PlusCardTextThree: "Das Verständnis der Grundlagen der objektorientierten Programmierung ist entscheidend für den Aufbau skalierbarer und wartbarer Softwaresysteme.",
                        PlusCardTextFour: "Häufig gestellte Fragen zu C#-Interviews behandeln Themen wie abstrakte Klassen gegenüber Schnittstellen, Speicherverwaltung, Zeichenkettenbearbeitung und mehr.",
                        PlusCardButtonOne: "Weitere Informationen",
                        PlusCardButtonTwo: "Weitere Informationen",
                        PlusCardButtonThree: "Weitere Informationen",
                        PlusCardButtonFour: "Weitere Informationen"
                    };
                    elements(data);
                }

                function tranlateBlogsOneToRussian() {
                    const data = {
                        titleHeader: "Почему JavaScript так популярен?",
                        textHeaderOne: "JavaScript популярен благодаря своей универсальности, широкому распространению в веб-разработке, поддержке обширной экосистемы и сообщества, а также поддержке крупными технологическими компаниями.",
                        smallTextHeader: "Узнать больше &rarr;",
                        blogTextOne: "JavaScript является одним из самых популярных языков программирования в мире, и его популярность можно объяснить несколькими ключевыми факторами:",
                        blogTextSecond: "JavaScript - единственный язык программирования, который может выполняться нативно в веб-браузерах, что делает его неотъемлемым элементом разработки фронтенда. Все основные веб-браузеры поддерживают JavaScript, что позволяет разработчикам создавать динамичные и интерактивные пользовательские интерфейсы. Это широкое распространение закрепило JavaScript как основную технологию веба.",
                        blogTitleOne: "1. Широкое распространение в веб-разработке",
                        blogTitleSecond: "2. Универсальность",
                        blogTitleThird: "3. Большая экосистема и сообщество",
                        blogTitleFour: "4. Постоянное развитие",
                        blogTitleFive: "5. Кросс-платформенная разработка",
                        blogTitleSix: "6. Востребованность на рынке труда",
                        blogTextThird: "JavaScript не ограничивается только разработкой фронтенда; его можно использовать и на серверной стороне с такими средами, как Node.js. Эта универсальность позволяет разработчикам использовать один язык как для клиентской, так и для серверной разработки, что оптимизирует процесс разработки и управления кодовыми базами.",
                        blogTextFour: "JavaScript имеет обширную экосистему библиотек и фреймворков, таких как React, Angular и Vue.js, которые значительно упрощают и ускоряют разработку сложных приложений. Кроме того, большое и активное сообщество продолжает способствовать росту языка, предоставляя поддержку, инструменты и ресурсы для разработчиков всех уровней.",
                        blogTextFive: "JavaScript значительно эволюционировал с момента своего появления. Введение стандартов ECMAScript принесло в язык современные функции и улучшения, делая его более мощным и удобным в использовании. Регулярные обновления гарантируют, что JavaScript остается актуальным и отвечает требованиям современной веб-разработки.",
                        blogTextSix: "С помощью инструментов, таких как Electron, JavaScript можно использовать для создания кросс-платформенных настольных приложений. Это позволяет разработчикам использовать свои навыки JavaScript для создания приложений, работающих на Windows, macOS и Linux, расширяя применение языка.",
                        blogTextSeven: "Спрос на разработчиков JavaScript постоянно высок. Поскольку компании стремятся создавать привлекательные и отзывчивые веб-приложения, растет потребность в квалифицированных разработчиках JavaScript. Этот спрос переводится в множество рабочих возможностей и привлекательные зарплаты для тех, кто владеет этим языком.",
                        PlusCardTitleOne: "Введение в машинное обучение с использованием Python",
                        PlusCardTitleTwo: "10 важных команд Git для каждого разработчика",
                        PlusCardTitleThree: "Основы объектно-ориентированного программирования",
                        PlusCardTitleFour: "Часто задаваемые вопросы на собеседованиях по C#",
                        PlusCardTextOne: "Машинное обучение - быстроразвивающаяся область с разнообразными применениями. Эта статья знакомит с основами машинного обучения с использованием Python.",
                        PlusCardTextTwo: "Владение Git критично для современной разработки. Эта статья рассматривает десять наиболее важных команд Git, предоставляя объяснения и примеры для улучшения навыков управления версиями.",
                        PlusCardTextThree: "Понимание основ объектно-ориентированного программирования крайне важно для создания масштабируемых и поддерживаемых программных систем.",
                        PlusCardTextFour: "Часто задаваемые вопросы на собеседованиях по C# охватывают темы, такие как абстрактные классы против интерфейсов, управление памятью, обработка строк и другие.",
                        PlusCardButtonOne: "Узнать больше",
                        PlusCardButtonTwo: "Узнать больше",
                        PlusCardButtonThree: "Узнать больше",
                        PlusCardButtonFour: "Узнать больше"
                    };
                    elements(data);
                }

                function tranlateBlogsOneToEnglish() {
                    const data = {
                        titleHeader: "Why JavaScript is so popular?",
                        textHeaderOne: "JavaScript is popular because it is versatile, ubiquitous in web development, supported by a vast ecosystem and community, and backed by major tech companies.",
                        smallTextHeader: "Learn more &rarr;",
                        blogTextOne: "JavaScript is one of the most popular programming languages in the world, and its popularity can be attributed to several key factors:",
                        blogTextSecond: "JavaScript is the only programming language that can run natively in web browsers, making it indispensable for front-end development. Every major web browser supports JavaScript, which allows developers to create dynamic, interactive user experiences. This widespread support has cemented JavaScript as a fundamental technology of the web.",
                        blogTitleOne: "1. Ubiquity in Web Development",
                        blogTitleSecond: "2. Versatility",
                        blogTitleThird: "3. Large Ecosystem and Community",
                        blogTitleFour: "4. Continuous Evolution",
                        blogTitleFive: "5. Cross-Platform Development",
                        blogTitleSix: "6. Job Market Demand",
                        blogTextThird: "JavaScript is not limited to front-end development; it can also be used on the server side with environments like Node.js. This versatility allows developers to use a single language for both client-side and server-side development, streamlining the development process and making it easier to manage codebases.",
                        blogTextFour: "JavaScript has a vast ecosystem of libraries and frameworks such as React, Angular, and Vue.js, which significantly simplify and accelerate the development of complex applications. Additionally, the large and active community continuously contributes to the language's growth, providing support, tools, and resources for developers of all skill levels.",
                        blogTextFive: "JavaScript has evolved significantly since its inception. The introduction of ECMAScript standards has brought modern features and improvements to the language, making it more powerful and easier to use. Regular updates ensure that JavaScript remains relevant and continues to meet the demands of modern web development.",
                        blogTextSix: "With tools like Electron, JavaScript can be used to build cross-platform desktop applications. This means developers can use their JavaScript skills to create applications that run on Windows, macOS, and Linux, further broadening the language's applicability.",
                        blogTextSeven: "The demand for JavaScript developers is consistently high. As businesses seek to create engaging and responsive web applications, the need for skilled JavaScript developers continues to grow. This demand translates into numerous job opportunities and attractive salaries for those proficient in the language.",
                        PlusCardTitleOne: "Introduction to Machine Learning with Python",
                        PlusCardTitleTwo: "10 Essential Git Commands for Every Developer",
                        PlusCardTitleThree: "Fundamentals of Object-Oriented Programming",
                        PlusCardTitleFour: "Most commonly asked interview questions for C#",
                        PlusCardTextOne: "Machine learning is a rapidly growing field with diverse applications. This article introduces the basics of machine learning using Python.",
                        PlusCardTextTwo: "Mastering Git is crucial for modern development. This article covers the ten most essential Git commands, providing explanations and examples to enhance your version control skills.",
                        PlusCardTextThree: "Understanding the fundamentals of Object-Oriented Programming is crucial for building scalable and maintainable software systems.",
                        PlusCardTextFour: "Common C# interview questions cover topics like abstract classes vs. interfaces, memory management, string manipulation, and more."
                    };
                    elements(data);
                }
            }
            else if (checkLocalStorage("2")) {
                if (locale === "bg-BG") {
                    tranlateBlogsTwoToBulgarian();
                }
                else if (locale === "en-GB") {
                    tranlateBlogsTwoToEnglish();
                }
                else if (locale === "de-DE") {
                    tranlateBlogsTwoToGerman();
                }
                else if (locale === "ru-RU") {
                    tranlateBlogsTwoToRussian();
                }

                function tranlateBlogsTwoToEnglish() {
                    const data = {
                        titleHeader: "JavaScript Vs TypeScript",
                        textHeaderOne: "JavaScript is a dynamic scripting language, while TypeScript is a superset of JavaScript with optional static typing, providing enhanced code maintainability and scalability.",
                        smallTextHeader: "Learn more &rarr;",
                        blogTextOne: "JavaScript and TypeScript are two closely related languages used in web development, each with its own strengths and use cases:",
                        blogTextSecond: "JavaScript is a dynamically typed scripting language that executes directly in web browsers. Its dynamic nature allows for rapid prototyping and flexibility in coding. TypeScript, on the other hand, is a statically typed superset of JavaScript. It includes all JavaScript features but adds optional static typing, which can catch errors at compile time and improve code quality.",
                        blogTitleOne: "1. Nature of the Language",
                        blogTitleSecond: "2. Type Safety",
                        blogTitleThird: "3. Development Experience",
                        blogTitleFour: "4. Tooling and Ecosystem",
                        blogTitleFive: "5. Learning Curve",
                        blogTitleSix: "6. Community and Adoption",
                        blogTextThird: "JavaScript does not require explicit type declarations, leading to more flexible but potentially error-prone code. TypeScript introduces optional static typing, enabling developers to define variable types, catch type-related errors early, and enhance the robustness of the code. This static typing is particularly beneficial in large codebases.",
                        blogTextFour: "JavaScript offers a straightforward, flexible approach to coding, which can be both a strength and a weakness. TypeScript provides a more structured development experience with features like type inference, interfaces, and advanced tooling support. These features can lead to better code organization and easier maintenance, especially in large projects.",
                        blogTextFive: "JavaScript has a vast ecosystem with numerous libraries and frameworks such as React, Angular, and Vue.js, facilitating rapid development. TypeScript integrates well with these libraries and frameworks, providing additional benefits like enhanced IDE support, better autocompletion, and refactoring tools, which can improve developer productivity.",
                        blogTextSix: "JavaScript's simplicity and flexibility make it easy to learn and use, especially for beginners. TypeScript has a steeper learning curve due to its static typing and additional features. However, developers with a background in strongly typed languages like Java or C# may find TypeScript more familiar and easier to adopt.",
                        blogTextSeven: "JavaScript has a massive community and is supported by all major browsers, making it an essential technology for web development. TypeScript, backed by Microsoft, has seen growing adoption due to its advantages in large-scale applications. Many popular frameworks like Angular are built with TypeScript, and its community continues to expand.",
                        PlusCardTitleOne: "Exploring New Features in the Latest Version of C#",
                        PlusCardTitleTwo: "10 Essential Git Commands for Every Developer",
                        PlusCardTitleThree: "Python vs. Ruby: Which Language Should You Learn?",
                        PlusCardTitleFour: "Understanding Asynchronous Programming in JavaScript",
                        PlusCardTextOne: "This article reviews these updates and demonstrates how to leverage them in your projects to improve your coding efficiency.",
                        PlusCardTextTwo: "Mastering Git is crucial for modern development. This article covers the ten most essential Git commands, providing explanations and examples to enhance your version control skills.",
                        PlusCardTextThree: "Python and Ruby are both powerful, high-level programming languages. This article compares their features, strengths and more.",
                        PlusCardTextFour: "Asynchronous programming in JavaScript enables non-blocking operations, allowing for more efficient code execution.",
                        PlusCardButtonOne: "More information",
                        PlusCardButtonTwo: "More information",
                        PlusCardButtonThree: "More information",
                        PlusCardButtonFour: "More information"
                    };
                    elements(data);
                }

                function tranlateBlogsTwoToGerman() {
                    const data = {
                        titleHeader: "JavaScript vs TypeScript",
                        textHeaderOne: "JavaScript ist eine dynamische Skriptsprache, während TypeScript ein Superset von JavaScript mit optionalem statischen Typing ist, was die Wartbarkeit und Skalierbarkeit des Codes verbessert.",
                        smallTextHeader: "Erfahren Sie mehr &rarr;",
                        blogTextOne: "JavaScript und TypeScript sind zwei eng verwandte Sprachen, die in der Webentwicklung verwendet werden, jede mit ihren eigenen Stärken und Anwendungsfällen:",
                        blogTextSecond: "JavaScript ist eine dynamisch typisierte Skriptsprache, die direkt in Webbrowsern ausgeführt wird. Seine dynamische Natur ermöglicht schnelles Prototyping und Flexibilität im Code. TypeScript hingegen ist ein statisch typisiertes Superset von JavaScript. Es enthält alle JavaScript-Funktionen, fügt jedoch optionales statisches Typing hinzu, das Fehler zur Kompilierzeit erkennen und die Codequalität verbessern kann.",
                        blogTitleOne: "1. Natur der Sprache",
                        blogTitleSecond: "2. Typsicherheit",
                        blogTitleThird: "3. Entwicklungserfahrung",
                        blogTitleFour: "4. Werkzeuge und Ökosystem",
                        blogTitleFive: "5. Lernkurve",
                        blogTitleSix: "6. Gemeinschaft und Akzeptanz",
                        blogTextThird: "JavaScript erfordert keine expliziten Typdeklarationen, was zu flexiblerem, aber potenziell fehleranfälligem Code führt. TypeScript führt optionales statisches Typing ein, wodurch Entwickler Variablentypen definieren, typbezogene Fehler frühzeitig erkennen und die Robustheit des Codes verbessern können. Dieses statische Typing ist besonders in großen Codebasen von Vorteil.",
                        blogTextFour: "JavaScript bietet einen einfachen, flexiblen Ansatz zum Codieren, was sowohl eine Stärke als auch eine Schwäche sein kann. TypeScript bietet eine strukturiertere Entwicklungserfahrung mit Funktionen wie Typinferenz, Schnittstellen und erweiterter Tool-Unterstützung. Diese Funktionen können zu einer besseren Codeorganisation und einfacherem Wartung, insbesondere in großen Projekten, führen.",
                        blogTextFive: "JavaScript verfügt über ein riesiges Ökosystem mit zahlreichen Bibliotheken und Frameworks wie React, Angular und Vue.js, was die schnelle Entwicklung erleichtert. TypeScript integriert sich gut in diese Bibliotheken und Frameworks und bietet zusätzliche Vorteile wie verbesserte IDE-Unterstützung, bessere Autovervollständigung und Refactoring-Tools, die die Produktivität der Entwickler verbessern können.",
                        blogTextSix: "Die Einfachheit und Flexibilität von JavaScript machen es besonders für Anfänger leicht zu erlernen und zu verwenden. TypeScript hat aufgrund seines statischen Typings und seiner zusätzlichen Funktionen eine steilere Lernkurve. Entwickler mit einem Hintergrund in stark typisierten Sprachen wie Java oder C# finden TypeScript jedoch möglicherweise vertrauter und einfacher zu übernehmen.",
                        blogTextSeven: "JavaScript hat eine riesige Gemeinschaft und wird von allen großen Browsern unterstützt, was es zu einer wesentlichen Technologie für die Webentwicklung macht. TypeScript, unterstützt von Microsoft, hat aufgrund seiner Vorteile in groß angelegten Anwendungen zunehmende Akzeptanz gefunden. Viele beliebte Frameworks wie Angular sind mit TypeScript erstellt und seine Gemeinschaft wächst weiterhin.",
                        PlusCardTitleOne: "Erkundung neuer Funktionen in der neuesten Version von C#",
                        PlusCardTitleTwo: "10 wesentliche Git-Befehle für jeden Entwickler",
                        PlusCardTitleThree: "Python vs. Ruby: Welche Sprache sollten Sie lernen?",
                        PlusCardTitleFour: "Verständnis der asynchronen Programmierung in JavaScript",
                        PlusCardTextOne: "Dieser Artikel überprüft diese Updates und zeigt, wie Sie sie in Ihren Projekten nutzen können, um Ihre Codierungseffizienz zu verbessern.",
                        PlusCardTextTwo: "Das Beherrschen von Git ist entscheidend für die moderne Entwicklung. Dieser Artikel behandelt die zehn wichtigsten Git-Befehle, bietet Erklärungen und Beispiele, um Ihre Versionskontrollfähigkeiten zu verbessern.",
                        PlusCardTextThree: "Python und Ruby sind beide leistungsstarke, hochrangige Programmiersprachen. Dieser Artikel vergleicht ihre Funktionen, Stärken und mehr.",
                        PlusCardTextFour: "Asynchrone Programmierung in JavaScript ermöglicht nicht blockierende Operationen und führt zu einer effizienteren Codeausführung.",
                        PlusCardButtonOne: "Mehr Informationen",
                        PlusCardButtonTwo: "Mehr Informationen",
                        PlusCardButtonThree: "Mehr Informationen",
                        PlusCardButtonFour: "Mehr Informationen"
                    };
                    elements(data);
                }

                function tranlateBlogsTwoToRussian() {
                    const data = {
                        titleHeader: "JavaScript против TypeScript",
                        textHeaderOne: "JavaScript - это динамический скриптовый язык, тогда как TypeScript - это надмножество JavaScript с опциональной статической типизацией, обеспечивающей улучшенную поддерживаемость и масштабируемость кода.",
                        smallTextHeader: "Узнать больше &rarr;",
                        blogTextOne: "JavaScript и TypeScript - два тесно связанных языка, используемых в веб-разработке, каждый из которых имеет свои сильные стороны и области применения:",
                        blogTextSecond: "JavaScript - это динамически типизированный скриптовый язык, который выполняется непосредственно в веб-браузерах. Его динамическая природа позволяет быстро создавать прототипы и обеспечивает гибкость кода. TypeScript, с другой стороны, - это статически типизированное надмножество JavaScript. Он включает все функции JavaScript, но добавляет опциональную статическую типизацию, которая может обнаруживать ошибки во время компиляции и улучшать качество кода.",
                        blogTitleOne: "1. Природа языка",
                        blogTitleSecond: "2. Безопасность типов",
                        blogTitleThird: "3. Опыт разработки",
                        blogTitleFour: "4. Инструменты и экосистема",
                        blogTitleFive: "5. Кривая обучения",
                        blogTitleSix: "6. Сообщество и принятие",
                        blogTextThird: "JavaScript не требует явных объявлений типов, что приводит к более гибкому, но потенциально подверженному ошибкам коду. TypeScript вводит опциональную статическую типизацию, позволяя разработчикам определять типы переменных, обнаруживать ошибки, связанные с типами, на ранней стадии и улучшать надежность кода. Эта статическая типизация особенно полезна в крупных кодовых базах.",
                        blogTextFour: "JavaScript предлагает простой и гибкий подход к написанию кода, что может быть как сильной стороной, так и слабостью. TypeScript обеспечивает более структурированный опыт разработки с такими функциями, как вывод типов, интерфейсы и поддержка расширенных инструментов. Эти функции могут привести к лучшей организации кода и облегчить его обслуживание, особенно в крупных проектах.",
                        blogTextFive: "JavaScript имеет обширную экосистему с многочисленными библиотеками и фреймворками, такими как React, Angular и Vue.js, что облегчает быструю разработку. TypeScript хорошо интегрируется с этими библиотеками и фреймворками, предоставляя дополнительные преимущества, такие как улучшенная поддержка IDE, лучшая автозаполняемость и инструменты рефакторинга, которые могут повысить производительность разработчиков.",
                        blogTextSix: "Простота и гибкость JavaScript делают его легким для изучения и использования, особенно для начинающих. У TypeScript более крутая кривая обучения из-за его статической типизации и дополнительных функций. Однако разработчики с опытом работы с сильно типизированными языками, такими как Java или C#, могут найти TypeScript более знакомым и легче освоить.",
                        blogTextSeven: "JavaScript имеет огромное сообщество и поддерживается всеми основными браузерами, что делает его важной технологией для веб-разработки. TypeScript, поддерживаемый Microsoft, находит все большее применение благодаря своим преимуществам в крупных приложениях. Многие популярные фреймворки, такие как Angular, созданы с использованием TypeScript, и его сообщество продолжает расти.",
                        PlusCardTitleOne: "Изучение новых функций в последней версии C#",
                        PlusCardTitleTwo: "10 основных команд Git для каждого разработчика",
                        PlusCardTitleThree: "Python против Ruby: Какой язык вам следует изучить?",
                        PlusCardTitleFour: "Понимание асинхронного программирования в JavaScript",
                        PlusCardTextOne: "В этой статье рассматриваются эти обновления и демонстрируется, как использовать их в ваших проектах для повышения эффективности кодирования.",
                        PlusCardTextTwo: "Освоение Git имеет решающее значение для современной разработки. В этой статье рассматриваются десять наиболее важных команд Git, предоставляются объяснения и примеры для улучшения ваших навыков управления версиями.",
                        PlusCardTextThree: "Python и Ruby - оба мощные, высокоуровневые языки программирования. В этой статье сравниваются их особенности, сильные стороны и многое другое.",
                        PlusCardTextFour: "Асинхронное программирование в JavaScript позволяет выполнять неблокирующие операции, что обеспечивает более эффективное выполнение кода.",
                        PlusCardButtonOne: "Больше информации",
                        PlusCardButtonTwo: "Больше информации",
                        PlusCardButtonThree: "Больше информации",
                        PlusCardButtonFour: "Больше информации"
                    };
                    elements(data);
                }

                function tranlateBlogsTwoToBulgarian() {
                    const data = {
                        titleHeader: "JavaScript срещу TypeScript",
                        textHeaderOne: "JavaScript е динамичен скриптов език, докато TypeScript е надмножество на JavaScript с опционална статична типизация, предоставяща подобрена поддръжка и мащабируемост на кода.",
                        smallTextHeader: "Научете повече &rarr;",
                        blogTextOne: "JavaScript и TypeScript са два тясно свързани езика, използвани в уеб разработката, всеки със своите силни страни и случаи на употреба:",
                        blogTextSecond: "JavaScript е динамично типизиран скриптов език, който се изпълнява директно в уеб браузърите. Неговата динамична природа позволява бързо прототипиране и гъвкавост при писане на код. От друга страна, TypeScript е статично типизирано надмножество на JavaScript. Той включва всички функции на JavaScript, но добавя опционална статична типизация, която може да улови грешки по време на компилация и да подобри качеството на кода.",
                        blogTitleOne: "1. Природа на езика",
                        blogTitleSecond: "2. Безопасност на типовете",
                        blogTitleThird: "3. Опит при разработка",
                        blogTitleFour: "4. Инструменти и екосистема",
                        blogTitleFive: "5. Крива на обучение",
                        blogTitleSix: "6. Общество и приемане",
                        blogTextThird: "JavaScript не изисква явни декларации на типове, което води до по-гъвкав, но потенциално податлив на грешки код. TypeScript въвежда опционална статична типизация, позволяваща на разработчиците да определят типове променливи, да улавят грешки, свързани с типовете, на ранен етап и да подобрят надеждността на кода. Тази статична типизация е особено полезна при големи кодови бази.",
                        blogTextFour: "JavaScript предлага прост и гъвкав подход към писането на код, което може да бъде както предимство, така и недостатък. TypeScript предоставя по-структуриран опит при разработка с функции като извеждане на типове, интерфейси и поддръжка на разширени инструменти. Тези функции могат да доведат до по-добра организация на кода и по-лесна поддръжка, особено при големи проекти.",
                        blogTextFive: "JavaScript има огромна екосистема с множество библиотеки и рамки като React, Angular и Vue.js, които улесняват бързата разработка. TypeScript се интегрира добре с тези библиотеки и рамки, предоставяйки допълнителни предимства като подобрена поддръжка на IDE, по-добро автодовършване и инструменти за рефакториране, които могат да подобрят продуктивността на разработчиците.",
                        blogTextSix: "Простотата и гъвкавостта на JavaScript го правят лесен за научаване и използване, особено за начинаещи. TypeScript има по-стръмна крива на обучение поради своята статична типизация и допълнителни функции. Въпреки това, разработчиците с опит в силно типизирани езици като Java или C# може да намерят TypeScript по-познат и по-лесен за усвояване.",
                        blogTextSeven: "JavaScript има огромна общност и се поддържа от всички основни браузъри, което го прави важна технология за уеб разработка. TypeScript, подкрепен от Microsoft, намира все по-голямо приложение благодарение на своите предимства в големи приложения. Много популярни рамки като Angular са изградени с TypeScript и неговото общество продължава да расте.",
                        PlusCardTitleOne: "Изследване на новите функции в последната версия на C#",
                        PlusCardTitleTwo: "10 основни команди на Git за всеки разработчик",
                        PlusCardTitleThree: "Python срещу Ruby: Кой език трябва да научите?",
                        PlusCardTitleFour: "Разбиране на асинхронното програмиране в JavaScript",
                        PlusCardTextOne: "Тази статия разглежда тези обновления и демонстрира как да ги използвате във вашите проекти за подобряване на ефективността на кодирането.",
                        PlusCardTextTwo: "Овладяването на Git е от решаващо значение за съвременната разработка. Тази статия обхваща десетте най-важни команди на Git, предоставяйки обяснения и примери за подобряване на вашите умения за управление на версиите.",
                        PlusCardTextThree: "Python и Ruby са мощни, високонативни езици за програмиране. Тази статия сравнява техните характеристики, силни страни и други.",
                        PlusCardTextFour: "Асинхронното програмиране в JavaScript позволява изпълнение на неблокиращи операции, което осигурява по-ефективно изпълнение на кода.",
                        PlusCardButtonOne: "Повече информация",
                        PlusCardButtonTwo: "Повече информация",
                        PlusCardButtonThree: "Повече информация",
                        PlusCardButtonFour: "Повече информация"
                    };
                    elements(data);
                }
            }
            else if (checkLocalStorage("3")) {
                if (locale === "bg-BG") {
                    tranlateBlogsThreeToBulgarian();
                }
                else if (locale === "en-GB") {
                    tranlateBlogsThreeToEnglish();
                }
                else if (locale === "de-DE") {
                    tranlateBlogsThreeToGerman();
                }
                else if (locale === "ru-RU") {
                    tranlateBlogsThreeToRussian();
                }

                function tranlateBlogsThreeToEnglish() {
                    const data = {
                        titleHeader: "Most Commonly Asked Interview Questions for C#",
                        textHeaderOne: "Common C# interview questions cover topics like abstract classes vs. interfaces, memory management, string manipulation, and more.",
                        smallTextHeader: "Learn more &rarr;",
                        blogTextOne: "C# is a versatile and powerful language, often used in enterprise environments. When preparing for a C# interview, it's crucial to understand various key concepts and be ready to discuss them in detail:",
                        blogTextSecond: "Understanding the differences between abstract classes and interfaces is fundamental. Abstract classes can provide default behavior (methods with implementation), while interfaces can only declare methods without implementation. Abstract classes are used when classes share a common base and interfaces are used to define a contract that multiple classes can implement.",
                        blogTitleOne: "1. Abstract Classes vs. Interfaces",
                        blogTitleSecond: "2. Memory Management",
                        blogTitleThird: "3. String Manipulation",
                        blogTitleFour: "4. LINQ (Language Integrated Query)",
                        blogTitleFive: "5. Exception Handling",
                        blogTitleSix: "6. Threading and Asynchronous Programming",
                        blogTextThird: "Memory management in C# involves understanding garbage collection and how memory is allocated and deallocated. Interviewees should be able to explain the basics of garbage collection, managed and unmanaged resources, and the use of the IDisposable interface to manage resource cleanup.",
                        blogTextFour: "String manipulation questions often involve tasks like reversing a string, checking for palindromes, or comparing strings. Knowing the performance implications of using StringBuilder vs. string for concatenation and the immutability of strings in C# is also important.",
                        blogTextFive: "LINQ is a powerful feature in C#. Questions may involve writing queries to filter, project, and aggregate data. Understanding the differences between LINQ to Objects, LINQ to SQL, and LINQ to XML, and being able to write complex queries is essential.",
                        blogTextSix: "Exception handling is a crucial part of robust application development. Be prepared to discuss try-catch blocks, custom exceptions, and the best practices for handling exceptions. Understanding how to use finally and using statements to manage resources is also important.",
                        blogTextSeven: "With the rise of multi-core processors, understanding threading and asynchronous programming is vital. Expect questions on Task Parallel Library (TPL), async-await pattern, thread synchronization, and common concurrency issues like deadlock and race conditions.",
                        PlusCardTitleOne: "Why is JavaScript so popular?",
                        PlusCardTitleTwo: "Fundamentals of Object-Oriented Programming",
                        PlusCardTitleThree: "Exploring New Features in the Latest Version of C#",
                        PlusCardTitleFour: "JavaScript vs. TypeScript",
                        PlusCardTextOne: "JavaScript's popularity stems from its versatility in both client and server-side development, supported by a vast ecosystem of libraries and frameworks.",
                        PlusCardTextTwo: "Understanding the fundamentals of Object-Oriented Programming is crucial for building scalable and maintainable software systems.",
                        PlusCardTextThree: "This article reviews these updates and demonstrates how to leverage them in your projects to improve your coding efficiency.",
                        PlusCardTextFour: "JavaScript is a dynamic scripting language, while TypeScript is a superset of JavaScript with optional static typing, providing enhanced code maintainability and scalability.",
                        PlusCardButtonOne: "More information",
                        PlusCardButtonTwo: "More information",
                        PlusCardButtonThree: "More information",
                        PlusCardButtonFour: "More information"
                    };
                    elements(data);
                }

                function tranlateBlogsThreeToGerman() {
                    const data = {
                        titleHeader: "Häufig gestellte Interviewfragen zu C#",
                        textHeaderOne: "Typische Interviewfragen zu C# behandeln Themen wie abstrakte Klassen vs. Schnittstellen, Speicherverwaltung, Zeichenkettenmanipulation und mehr.",
                        smallTextHeader: "Mehr erfahren &rarr;",
                        blogTextOne: "C# ist eine vielseitige und leistungsstarke Sprache, die häufig in Unternehmensumgebungen verwendet wird. Bei der Vorbereitung auf ein C#-Interview ist es wichtig, verschiedene Schlüsselkonzepte zu verstehen und bereit zu sein, diese im Detail zu besprechen:",
                        blogTextSecond: "Das Verständnis der Unterschiede zwischen abstrakten Klassen und Schnittstellen ist grundlegend. Abstrakte Klassen können Standardverhalten bereitstellen (Methoden mit Implementierung), während Schnittstellen nur Methoden ohne Implementierung deklarieren können. Abstrakte Klassen werden verwendet, wenn Klassen eine gemeinsame Basis teilen, und Schnittstellen werden verwendet, um einen Vertrag zu definieren, den mehrere Klassen implementieren können.",
                        blogTitleOne: "1. Abstrakte Klassen vs. Schnittstellen",
                        blogTitleSecond: "2. Speicherverwaltung",
                        blogTitleThird: "3. Zeichenkettenmanipulation",
                        blogTitleFour: "4. LINQ (Language Integrated Query)",
                        blogTitleFive: "5. Ausnahmebehandlung",
                        blogTitleSix: "6. Threading und Asynchrones Programmieren",
                        blogTextThird: "Die Speicherverwaltung in C# umfasst das Verständnis der Garbage Collection und wie Speicher zugewiesen und freigegeben wird. Interviewteilnehmer sollten in der Lage sein, die Grundlagen der Garbage Collection, verwaltete und nicht verwaltete Ressourcen sowie die Verwendung des IDisposable-Interfaces zur Verwaltung der Ressourcensäuberung zu erklären.",
                        blogTextFour: "Fragen zur Zeichenkettenmanipulation beinhalten oft Aufgaben wie das Umkehren einer Zeichenkette, das Überprüfen auf Palindrome oder das Vergleichen von Zeichenketten. Es ist auch wichtig, die Leistungsimplikationen der Verwendung von StringBuilder vs. string zur Verkettung und die Unveränderlichkeit von Zeichenketten in C# zu kennen.",
                        blogTextFive: "LINQ ist eine leistungsstarke Funktion in C#. Fragen können das Schreiben von Abfragen zum Filtern, Projizieren und Aggregieren von Daten umfassen. Das Verständnis der Unterschiede zwischen LINQ to Objects, LINQ to SQL und LINQ to XML sowie die Fähigkeit, komplexe Abfragen zu schreiben, ist unerlässlich.",
                        blogTextSix: "Die Ausnahmebehandlung ist ein wesentlicher Bestandteil der robusten Anwendungsentwicklung. Seien Sie bereit, try-catch-Blöcke, benutzerdefinierte Ausnahmen und Best Practices für die Ausnahmebehandlung zu diskutieren. Es ist auch wichtig zu verstehen, wie finally- und using-Anweisungen zur Verwaltung von Ressourcen verwendet werden.",
                        blogTextSeven: "Mit dem Aufkommen von Mehrkernprozessoren ist das Verständnis von Threading und asynchronem Programmieren von entscheidender Bedeutung. Erwarten Sie Fragen zur Task Parallel Library (TPL), zum async-await-Muster, zur Threadsynchronisation und zu häufigen Konkurrenzproblemen wie Deadlocks und Race Conditions.",
                        PlusCardTitleOne: "Warum ist JavaScript so beliebt?",
                        PlusCardTitleTwo: "Grundlagen der objektorientierten Programmierung",
                        PlusCardTitleThree: "Neue Funktionen in der neuesten Version von C# erkunden",
                        PlusCardTitleFour: "JavaScript vs. TypeScript",
                        PlusCardTextOne: "Die Beliebtheit von JavaScript beruht auf seiner Vielseitigkeit sowohl in der Client- als auch in der Server-Entwicklung, unterstützt durch ein umfangreiches Ökosystem von Bibliotheken und Frameworks.",
                        PlusCardTextTwo: "Das Verständnis der Grundlagen der objektorientierten Programmierung ist entscheidend für den Aufbau skalierbarer und wartbarer Softwaresysteme.",
                        PlusCardTextThree: "Dieser Artikel untersucht diese Updates und zeigt, wie Sie sie in Ihren Projekten nutzen können, um Ihre Codierungseffizienz zu verbessern.",
                        PlusCardTextFour: "JavaScript ist eine dynamische Skriptsprache, während TypeScript ein Obermenge von JavaScript mit optionaler statischer Typisierung ist, die die Wartbarkeit und Skalierbarkeit des Codes verbessert.",
                        PlusCardButtonOne: "Mehr Informationen",
                        PlusCardButtonTwo: "Mehr Informationen",
                        PlusCardButtonThree: "Mehr Informationen",
                        PlusCardButtonFour: "Mehr Informationen"
                    };
                    elements(data);
                }

                function tranlateBlogsThreeToRussian() {
                    const data = {
                        titleHeader: "Наиболее часто задаваемые вопросы на собеседовании по C#",
                        textHeaderOne: "Общие вопросы на собеседовании по C# охватывают такие темы, как абстрактные классы против интерфейсов, управление памятью, манипуляции со строками и многое другое.",
                        smallTextHeader: "Узнать больше &rarr;",
                        blogTextOne: "C# — это универсальный и мощный язык, часто используемый в корпоративной среде. При подготовке к собеседованию по C# важно понимать различные ключевые концепции и быть готовым обсуждать их в деталях:",
                        blogTextSecond: "Понимание различий между абстрактными классами и интерфейсами является фундаментальным. Абстрактные классы могут предоставлять поведение по умолчанию (методы с реализацией), в то время как интерфейсы могут только декларировать методы без реализации. Абстрактные классы используются, когда классы имеют общую базу, а интерфейсы используются для определения контракта, который могут реализовывать несколько классов.",
                        blogTitleOne: "1. Абстрактные классы против интерфейсов",
                        blogTitleSecond: "2. Управление памятью",
                        blogTitleThird: "3. Манипуляции со строками",
                        blogTitleFour: "4. LINQ (Интегрированный язык запросов)",
                        blogTitleFive: "5. Обработка исключений",
                        blogTitleSix: "6. Многозадачность и асинхронное программирование",
                        blogTextThird: "Управление памятью в C# включает в себя понимание сборки мусора и того, как память распределяется и освобождается. Соискатели должны уметь объяснять основы сборки мусора, управляемые и неуправляемые ресурсы, а также использование интерфейса IDisposable для управления освобождением ресурсов.",
                        blogTextFour: "Вопросы по манипуляции со строками часто включают задачи, такие как переворачивание строки, проверка палиндромов или сравнение строк. Также важно знать производственные последствия использования StringBuilder против string для конкатенации и неизменяемости строк в C#.",
                        blogTextFive: "LINQ — это мощная функция в C#. Вопросы могут включать написание запросов для фильтрации, проецирования и агрегирования данных. Понимание различий между LINQ to Objects, LINQ to SQL и LINQ to XML, а также возможность написания сложных запросов имеют важное значение.",
                        blogTextSix: "Обработка исключений является ключевой частью разработки надежных приложений. Будьте готовы обсуждать блоки try-catch, пользовательские исключения и лучшие практики обработки исключений. Важно также понимать, как использовать блоки finally и using для управления ресурсами.",
                        blogTextSeven: "С увеличением числа многоядерных процессоров, понимание многозадачности и асинхронного программирования является жизненно важным. Ожидайте вопросы о библиотеке Task Parallel Library (TPL), async-await модели, синхронизации потоков и общих проблемах конкурентности, таких как взаимоблокировки и гонки.",
                        PlusCardTitleOne: "Почему JavaScript так популярен?",
                        PlusCardTitleTwo: "Основы объектно-ориентированного программирования",
                        PlusCardTitleThree: "Изучение новых функций в последней версии C#",
                        PlusCardTitleFour: "JavaScript против TypeScript",
                        PlusCardTextOne: "Популярность JavaScript обусловлена его универсальностью как в клиентской, так и в серверной разработке, поддерживаемой огромной экосистемой библиотек и фреймворков.",
                        PlusCardTextTwo: "Понимание основ объектно-ориентированного программирования имеет важное значение для создания масштабируемых и поддерживаемых программных систем.",
                        PlusCardTextThree: "Эта статья рассматривает эти обновления и демонстрирует, как использовать их в ваших проектах для повышения эффективности кодирования.",
                        PlusCardTextFour: "JavaScript — это динамический скриптовый язык, в то время как TypeScript является надмножеством JavaScript с опциональной статической типизацией, обеспечивающей улучшенную поддерживаемость и масштабируемость кода.",
                        PlusCardButtonOne: "Подробнее",
                        PlusCardButtonTwo: "Подробнее",
                        PlusCardButtonThree: "Подробнее",
                        PlusCardButtonFour: "Подробнее"
                    };
                    elements(data);
                }

                function tranlateBlogsThreeToBulgarian() {
                    const data = {
                        titleHeader: "Най-често задаваните въпроси за интервю за C#",
                        textHeaderOne: "Общите въпроси за интервю за C# обхващат теми като абстрактни класове срещу интерфейси, управление на паметта, манипулация на низове и други.",
                        smallTextHeader: "Научете повече &rarr;",
                        blogTextOne: "C# е универсален и мощен език, често използван в корпоративна среда. Когато се подготвяте за интервю за C#, е важно да разберете различни ключови концепции и да бъдете готови да ги обсъждате в детайли:",
                        blogTextSecond: "Разбирането на разликите между абстрактни класове и интерфейси е фундаментално. Абстрактните класове могат да предоставят основно поведение (методи с реализация), докато интерфейсите могат само да декларират методи без реализация. Абстрактните класове се използват, когато класовете споделят обща база, а интерфейсите се използват за дефиниране на договор, който множество класове могат да изпълняват.",
                        blogTitleOne: "1. Абстрактни класове срещу интерфейси",
                        blogTitleSecond: "2. Управление на паметта",
                        blogTitleThird: "3. Манипулация на низове",
                        blogTitleFour: "4. LINQ (Език за интегрирани заявки)",
                        blogTitleFive: "5. Обработка на изключения",
                        blogTitleSix: "6. Многозадачност и асинхронно програмиране",
                        blogTextThird: "Управлението на паметта в C# включва разбирането на събирането на боклука и как паметта се разпределя и освобождава. Кандидатите трябва да могат да обяснят основите на събирането на боклука, управляваните и неуправляваните ресурси и използването на интерфейса IDisposable за управление на освобождаването на ресурси.",
                        blogTextFour: "Въпросите за манипулация на низове често включват задачи като обръщане на низ, проверка за палиндроми или сравняване на низове. Също така е важно да знаете производствените последствия от използването на StringBuilder срещу string за конкатенация и неизменността на низовете в C#.",
                        blogTextFive: "LINQ е мощна функция в C#. Въпросите могат да включват писане на заявки за филтриране, проектиране и агрегиране на данни. Разбирането на разликите между LINQ to Objects, LINQ to SQL и LINQ to XML и възможността за писане на сложни заявки е от съществено значение.",
                        blogTextSix: "Обработката на изключения е ключова част от разработването на стабилни приложения. Бъдете готови да обсъждате блокове try-catch, потребителски изключения и най-добрите практики за обработка на изключения. Важно е също така да разберете как да използвате блокове finally и using за управление на ресурси.",
                        blogTextSeven: "С увеличаването на броя на многоядрените процесори, разбирането на многозадачността и асинхронното програмиране е жизненоважно. Очаквайте въпроси за библиотеката Task Parallel Library (TPL), async-await модела, синхронизацията на нишките и общи проблеми с конкурентността като deadlock и race conditions.",
                        PlusCardTitleOne: "Защо JavaScript е толкова популярен?",
                        PlusCardTitleTwo: "Основи на обектно-ориентираното програмиране",
                        PlusCardTitleThree: "Изследване на новите функции в последната версия на C#",
                        PlusCardTitleFour: "JavaScript срещу TypeScript",
                        PlusCardTextOne: "Популярността на JavaScript се дължи на неговата гъвкавост както при клиентска, така и при сървърна разработка, подкрепена от огромна екосистема от библиотеки и рамки.",
                        PlusCardTextTwo: "Разбирането на основите на обектно-ориентираното програмиране е от съществено значение за изграждането на мащабируеми и поддържащи се софтуерни системи.",
                        PlusCardTextThree: "Тази статия разглежда тези обновления и демонстрира как да ги използвате във вашите проекти за подобряване на ефективността на кодирането.",
                        PlusCardTextFour: "JavaScript е динамичен скриптов език, докато TypeScript е надмножество на JavaScript с опционална статична типизация, предоставяща подобрена поддръжка и мащабируемост на кода.",
                        PlusCardButtonOne: "Повече информация",
                        PlusCardButtonTwo: "Повече информация",
                        PlusCardButtonThree: "Повече информация",
                        PlusCardButtonFour: "Повече информация"
                    };
                    elements(data);
                }
            }
            else if (checkLocalStorage("4")) {
                if (locale === "bg-BG") {
                    tranlateBlogsFourToBulgarian();
                }
                else if (locale === "en-GB") {
                    tranlateBlogsFourToEnglish();
                }
                else if (locale === "de-DE") {
                    tranlateBlogsFourToGerman();
                }
                else if (locale === "ru-RU") {
                    tranlateBlogsFourToRussian();
                }

                function tranlateBlogsFourToEnglish() {
                    const data = {
                        titleHeader: "Fundamentals of Object-Oriented Programming",
                        textHeaderOne: "Understanding the fundamentals of Object-Oriented Programming is crucial for building scalable and maintainable software systems.",
                        smallTextHeader: "Learn more &rarr;",
                        blogTextOne: "Object-Oriented Programming (OOP) is a paradigm based on the concept of 'objects,' which can contain data and code. Here are the core principles and concepts of OOP:",
                        blogTextSecond: "A class is a blueprint for creating objects (instances). It defines a type by bundling data and methods that work on the data. Objects are instances of classes; they are created based on the class definition. Understanding the difference between a class and an object is fundamental in OOP.",
                        blogTitleOne: "1. Classes and Objects",
                        blogTitleSecond: "2. Inheritance",
                        blogTitleThird: "3. Polymorphism",
                        blogTitleFour: "4. Encapsulation",
                        blogTitleFive: "5. Abstraction",
                        blogTitleSix: "6. Methods and Properties",
                        blogTextThird: "Inheritance is a mechanism by which one class (child/subclass) inherits the properties and behavior (methods) of another class (parent/superclass). It promotes code reuse and establishes a natural hierarchy. Inheritance allows for the creation of a new class based on an existing class.",
                        blogTextFour: "Polymorphism allows methods to do different things based on the object it is acting upon. It enables one interface to be used for a general class of actions. The two main types of polymorphism are compile-time (method overloading) and runtime (method overriding).",
                        blogTextFive: "Encapsulation involves bundling the data (variables) and methods (functions) that operate on the data into a single unit, known as a class, and restricting access to some of the object's components. This helps in protecting the internal state of the object and only exposing a controlled interface.",
                        blogTextSix: "Abstraction is the concept of hiding the complex implementation details and showing only the essential features of the object. It helps in reducing programming complexity and effort by providing a clear separation between an object's interface and implementation.",
                        blogTextSeven: "Methods are functions defined inside a class that describe the behaviors of the objects. Properties, also known as attributes or fields, define the characteristics of the object. Understanding how to define and use methods and properties is key to working with objects.",
                        PlusCardTitleOne: "Most commonly asked interview questions for C#",
                        PlusCardTitleTwo: "Python vs. Ruby: Which Language Should You Learn?",
                        PlusCardTitleThree: "JavaScript vs TypeScript",
                        PlusCardTitleFour: "Understanding Asynchronous Programming in JavaScript",
                        PlusCardTextOne: "Common C# interview questions cover topics like abstract classes vs. interfaces, memory management, string manipulation, and more.",
                        PlusCardTextTwo: "Python and Ruby are both powerful, high-level programming languages. This article compares their features, strengths, and more.",
                        PlusCardTextThree: "JavaScript is a dynamic scripting language, while TypeScript is a superset of JavaScript with optional static typing, providing enhanced code maintainability and scalability.",
                        PlusCardTextFour: "Asynchronous programming in JavaScript enables non-blocking operations, allowing for more efficient code execution.",
                        PlusCardButtonOne: "More information",
                        PlusCardButtonTwo: "More information",
                        PlusCardButtonThree: "More information",
                        PlusCardButtonFour: "More information"
                    };
                    elements(data);
                }

                function tranlateBlogsFourToGerman() {
                    const data = {
                        titleHeader: "Grundlagen der objektorientierten Programmierung",
                        textHeaderOne: "Das Verständnis der Grundlagen der objektorientierten Programmierung ist entscheidend für den Aufbau skalierbarer und wartbarer Softwaresysteme.",
                        smallTextHeader: "Mehr erfahren &rarr;",
                        blogTextOne: "Objektorientierte Programmierung (OOP) ist ein Paradigma, das auf dem Konzept von 'Objekten' basiert, die Daten und Code enthalten können. Hier sind die Kernprinzipien und Konzepte der OOP:",
                        blogTextSecond: "Eine Klasse ist eine Blaupause für die Erstellung von Objekten (Instanzen). Sie definiert einen Typ, indem sie Daten und Methoden bündelt, die auf den Daten arbeiten. Objekte sind Instanzen von Klassen; sie werden basierend auf der Klassendefinition erstellt. Das Verständnis des Unterschieds zwischen einer Klasse und einem Objekt ist grundlegend in der OOP.",
                        blogTitleOne: "1. Klassen und Objekte",
                        blogTitleSecond: "2. Vererbung",
                        blogTitleThird: "3. Polymorphismus",
                        blogTitleFour: "4. Kapselung",
                        blogTitleFive: "5. Abstraktion",
                        blogTitleSix: "6. Methoden und Eigenschaften",
                        blogTextThird: "Vererbung ist ein Mechanismus, bei dem eine Klasse (Kind/Unterklasse) die Eigenschaften und das Verhalten (Methoden) einer anderen Klasse (Eltern/Oberklasse) erbt. Sie fördert die Wiederverwendung von Code und etabliert eine natürliche Hierarchie. Vererbung ermöglicht die Erstellung einer neuen Klasse basierend auf einer bestehenden Klasse.",
                        blogTextFour: "Polymorphismus ermöglicht es Methoden, unterschiedliche Dinge zu tun, basierend auf dem Objekt, auf das sie wirken. Es ermöglicht die Nutzung einer Schnittstelle für eine allgemeine Klasse von Aktionen. Die beiden Haupttypen des Polymorphismus sind Kompilierzeit- (Methodenüberladung) und Laufzeit- (Methodenüberschreibung) Polymorphismus.",
                        blogTextFive: "Kapselung beinhaltet das Bündeln der Daten (Variablen) und Methoden (Funktionen), die auf die Daten wirken, in einer einzigen Einheit, die als Klasse bekannt ist, und das Einschränken des Zugriffs auf einige der Komponenten des Objekts. Dies hilft, den internen Zustand des Objekts zu schützen und nur eine kontrollierte Schnittstelle freizugeben.",
                        blogTextSix: "Abstraktion ist das Konzept, die komplexen Implementierungsdetails zu verbergen und nur die wesentlichen Merkmale des Objekts zu zeigen. Es hilft, die Programmierkomplexität und den Aufwand zu reduzieren, indem es eine klare Trennung zwischen der Schnittstelle und der Implementierung eines Objekts bietet.",
                        blogTextSeven: "Methoden sind Funktionen, die innerhalb einer Klasse definiert sind und die Verhaltensweisen der Objekte beschreiben. Eigenschaften, auch bekannt als Attribute oder Felder, definieren die Merkmale des Objekts. Das Verständnis, wie man Methoden und Eigenschaften definiert und verwendet, ist der Schlüssel zur Arbeit mit Objekten.",
                        PlusCardTitleOne: "Die am häufigsten gestellten Interviewfragen für C#",
                        PlusCardTitleTwo: "Python vs. Ruby: Welche Sprache sollten Sie lernen?",
                        PlusCardTitleThree: "JavaScript vs TypeScript",
                        PlusCardTitleFour: "Verständnis der asynchronen Programmierung in JavaScript",
                        PlusCardTextOne: "Häufige Interviewfragen zu C# decken Themen wie abstrakte Klassen vs. Schnittstellen, Speicherverwaltung, Zeichenfolgenmanipulation und mehr ab.",
                        PlusCardTextTwo: "Python und Ruby sind beide leistungsstarke, hochrangige Programmiersprachen. Dieser Artikel vergleicht ihre Merkmale, Stärken und mehr.",
                        PlusCardTextThree: "JavaScript ist eine dynamische Skriptsprache, während TypeScript eine Obermenge von JavaScript mit optionaler statischer Typisierung ist, die die Wartbarkeit und Skalierbarkeit des Codes verbessert.",
                        PlusCardTextFour: "Asynchrone Programmierung in JavaScript ermöglicht nicht blockierende Operationen, die eine effizientere Codeausführung ermöglichen.",
                        PlusCardButtonOne: "Mehr Informationen",
                        PlusCardButtonTwo: "Mehr Informationen",
                        PlusCardButtonThree: "Mehr Informationen",
                        PlusCardButtonFour: "Mehr Informationen"
                    };
                    elements(data);
                }

                function tranlateBlogsFourToRussian() {
                    const data = {
                        titleHeader: "Основы объектно-ориентированного программирования",
                        textHeaderOne: "Понимание основ объектно-ориентированного программирования (ООП) важно для создания масштабируемых и поддерживаемых программных систем.",
                        smallTextHeader: "Узнать больше &rarr;",
                        blogTextOne: "Объектно-ориентированное программирование (ООП) — это парадигма, основанная на концепции «объектов», которые могут содержать данные и код. Вот основные принципы и концепции ООП:",
                        blogTextSecond: "Класс — это шаблон для создания объектов (экземпляров). Он определяет тип, объединяя данные и методы, которые работают с этими данными. Объекты — это экземпляры классов; они создаются на основе определения класса. Понимание различий между классом и объектом является основополагающим в ООП.",
                        blogTitleOne: "1. Классы и Объекты",
                        blogTitleSecond: "2. Наследование",
                        blogTitleThird: "3. Полиморфизм",
                        blogTitleFour: "4. Инкапсуляция",
                        blogTitleFive: "5. Абстракция",
                        blogTitleSix: "6. Методы и Свойства",
                        blogTextThird: "Наследование — это механизм, с помощью которого один класс (дочерний/подкласс) наследует свойства и поведение (методы) другого класса (родительского/суперкласса). Оно способствует повторному использованию кода и устанавливает естественную иерархию. Наследование позволяет создавать новый класс на основе существующего класса.",
                        blogTextFour: "Полиморфизм позволяет методам выполнять разные действия в зависимости от объекта, на котором они работают. Он позволяет использовать один интерфейс для общего класса действий. Основные типы полиморфизма — это полиморфизм времени компиляции (перегрузка методов) и полиморфизм времени выполнения (переопределение методов).",
                        blogTextFive: "Инкапсуляция включает в себя объединение данных (переменных) и методов (функций), которые работают с этими данными, в одну единицу, известную как класс, и ограничение доступа к некоторым компонентам объекта. Это помогает защитить внутреннее состояние объекта и предоставляет только контролируемый интерфейс.",
                        blogTextSix: "Абстракция — это концепция, которая скрывает сложные детали реализации и показывает только важные характеристики объекта. Она помогает уменьшить сложность и трудоемкость программирования, предоставляя четкое разделение между интерфейсом объекта и его реализацией.",
                        blogTextSeven: "Методы — это функции, определенные внутри класса, которые описывают поведение объектов. Свойства, также известные как атрибуты или поля, определяют характеристики объекта. Понимание того, как определять и использовать методы и свойства, является ключом к работе с объектами.",
                        PlusCardTitleOne: "Наиболее часто задаваемые вопросы на собеседованиях по C#",
                        PlusCardTitleTwo: "Python vs. Ruby: Какой язык программирования выбрать?",
                        PlusCardTitleThree: "JavaScript vs TypeScript",
                        PlusCardTitleFour: "Понимание асинхронного программирования в JavaScript",
                        PlusCardTextOne: "Общие вопросы на собеседованиях по C# охватывают такие темы, как абстрактные классы против интерфейсов, управление памятью, манипуляция строками и многое другое.",
                        PlusCardTextTwo: "Python и Ruby — оба мощные, высокоуровневые языки программирования. В этой статье сравниваются их особенности, сильные стороны и многое другое.",
                        PlusCardTextThree: "JavaScript — это динамический скриптовый язык, тогда как TypeScript является надмножеством JavaScript с опциональной статической типизацией, что улучшает поддерживаемость и масштабируемость кода.",
                        PlusCardTextFour: "Асинхронное программирование в JavaScript позволяет выполнять неблокирующие операции, что обеспечивает более эффективное выполнение кода.",
                        PlusCardButtonOne: "Подробнее",
                        PlusCardButtonTwo: "Подробнее",
                        PlusCardButtonThree: "Подробнее",
                        PlusCardButtonFour: "Подробнее"
                    };
                    elements(data);
                }

                function tranlateBlogsFourToBulgarian() {
                    const data = {
                        titleHeader: "Основи на обектно-ориентираното програмиране",
                        textHeaderOne: "Разбирането на основите на обектно-ориентираното програмиране е от съществено значение за изграждането на мащабируеми и поддържаеми софтуерни системи.",
                        smallTextHeader: "Научете повече &rarr;",
                        blogTextOne: "Обектно-ориентираното програмиране (ООП) е парадигма, базирана на концепцията за „обекти“, които могат да съдържат данни и код. Вот основните принципи и концепции на ООП:",
                        blogTextSecond: "Класът е чертеж за създаване на обекти (инстанции). Той дефинира тип, като обединява данни и методи, които работят с тези данни. Обектите са инстанции на класове; те се създават на база на дефиницията на класа. Разбирането на разликите между клас и обект е основополагащо в ООП.",
                        blogTitleOne: "1. Класове и Обекти",
                        blogTitleSecond: "2. Наследяване",
                        blogTitleThird: "3. Полиморфизъм",
                        blogTitleFour: "4. Инкапсулация",
                        blogTitleFive: "5. Абстракция",
                        blogTitleSix: "6. Методи и Свойства",
                        blogTextThird: "Наследяването е механизъм, чрез който един клас (детски/подклас) наследява свойствата и поведението (методите) на друг клас (родителски/суперклас). То насърчава повторното използване на кода и установява естествена йерархия. Наследяването позволява създаването на нов клас на база на съществуващ клас.",
                        blogTextFour: "Полиморфизмът позволява на методите да извършват различни действия в зависимост от обекта, върху който действат. Той позволява използването на един интерфейс за общ клас действия. Основните видове полиморфизъм са компилаторният (прегрузка на методи) и изпълнителният (пренаписване на методи).",
                        blogTextFive: "Инкапсулацията включва обединяването на данните (променливи) и методите (функции), които работят с тези данни, в единична единица, известна като клас, и ограничаването на достъпа до някои компоненти на обекта. Това помага за защита на вътрешното състояние на обекта и предоставя само контролиран интерфейс.",
                        blogTextSix: "Абстракцията е концепцията, която скрива сложните детайли на реализацията и показва само съществените характеристики на обекта. Тя помага за намаляване на сложността на програмирането и усилията, предоставяйки ясно разделение между интерфейса на обекта и неговата реализация.",
                        blogTextSeven: "Методите са функции, дефинирани вътре в класа, които описват поведението на обектите. Свойствата, известни също като атрибути или полета, определят характеристиките на обекта. Разбирането как да дефинирате и използвате методи и свойства е ключово за работата с обекти.",
                        PlusCardTitleOne: "Най-често задавани въпроси на интервюта за C#",
                        PlusCardTitleTwo: "Python срещу Ruby: Кой език да изберете?",
                        PlusCardTitleThree: "JavaScript срещу TypeScript",
                        PlusCardTitleFour: "Разбиране на асинхронното програмиране в JavaScript",
                        PlusCardTextOne: "Често задаваните въпроси на интервюта за C# обхващат теми като абстрактни класове срещу интерфейси, управление на паметта, манипулация с низове и много други.",
                        PlusCardTextTwo: "Python и Ruby са два мощни, високо нивови програмни езика. Тази статия сравнява техните характеристики, силните страни и други аспекти.",
                        PlusCardTextThree: "JavaScript е динамичен скриптов език, докато TypeScript е надмножество на JavaScript с опционална статична типизация, което подобрява поддръжката и мащабируемостта на кода.",
                        PlusCardTextFour: "Асинхронното програмиране в JavaScript позволява изпълнението на неблокиращи операции, което води до по-ефективно изпълнение на кода.",
                        PlusCardButtonOne: "Научи повече",
                        PlusCardButtonTwo: "Научи повече",
                        PlusCardButtonThree: "Научи повече",
                        PlusCardButtonFour: "Научи повече"
                    };
                    elements(data);
                }
            }
            else if (checkLocalStorage("5")) {
                if (locale === "bg-BG") {
                    tranlateBlogsFiveToBulgarian();
                }
                else if (locale === "en-GB") {
                    tranlateBlogsFiveToEnglish();
                }
                else if (locale === "de-DE") {
                    tranlateBlogsFiveToGerman();
                }
                else if (locale === "ru-RU") {
                    tranlateBlogsFiveToRussian();
                }

                function tranlateBlogsFiveToEnglish() {
                    const data = {
                        titleHeader: "Understanding Asynchronous Programming in JavaScript",
                        textHeaderOne: "Asynchronous programming in JavaScript enables non-blocking operations, allowing for more efficient code execution.",
                        smallTextHeader: "Learn more &rarr;",
                        blogTextOne: "Asynchronous programming in JavaScript is essential for building responsive web applications. It allows JavaScript to execute multiple operations simultaneously, without blocking the execution thread.",
                        blogTextSecond: "The primary mechanism for achieving asynchrony in JavaScript is through callbacks, promises, and async/await syntax introduced in ES6 and beyond.",
                        blogTitleOne: "1. Introduction to Asynchronous Programming",
                        blogTitleSecond: "2. Callbacks",
                        blogTitleThird: "3. Promises",
                        blogTitleFour: "4. Async/Await",
                        blogTitleFive: "5. Event Loop",
                        blogTitleSix: "6. Use Cases",
                        blogTextThird: "Callbacks are functions passed as arguments to another function to be executed later. They are a traditional approach to handle asynchronous operations but can lead to callback hell when nested deeply.",
                        blogTextFour: "Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and allow chaining multiple asynchronous operations together. They provide a cleaner alternative to callbacks and improve code readability.",
                        blogTextFive: "Async functions, introduced in ES8, offer a more concise and readable way to write asynchronous code. They allow developers to write promise-based asynchronous code as if it were synchronous, using the async keyword and await operator.",
                        blogTextSix: "Understanding event loop and how JavaScript handles asynchronous tasks is crucial. The event loop is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.",
                        blogTextSeven: "Common use cases for asynchronous programming include fetching data from a remote server, handling user input events without blocking the UI thread, and executing time-consuming operations without freezing the application.",
                        PlusCardTitleOne: "Python vs. Ruby: Which Language Should You Learn?",
                        PlusCardTitleTwo: "Introduction to Machine Learning with Python",
                        PlusCardTitleThree: "JavaScript vs TypeScript",
                        PlusCardTitleFour: "Fundamentals of Object-Oriented Programming",
                        PlusCardTextOne: "Python and Ruby are both powerful, high-level programming languages. This article compares their features, strengths and more.",
                        PlusCardTextTwo: "Machine learning is a rapidly growing field with diverse applications. This article introduces the basics of machine learning using Python.",
                        PlusCardTextThree: "JavaScript is a dynamic scripting language, while TypeScript is a superset of JavaScript with optional static typing, providing enhanced code maintainability and scalability.",
                        PlusCardTextFour: "Understanding the fundamentals of Object-Oriented Programming is crucial for building scalable and maintainable software systems.",
                        PlusCardButtonOne: "More information",
                        PlusCardButtonTwo: "More information",
                        PlusCardButtonThree: "More information",
                        PlusCardButtonFour: "More information"
                    };
                    elements(data);
                }

                function tranlateBlogsFiveToGerman() {
                    const data = {
                        titleHeader: "Verständnis der asynchronen Programmierung in JavaScript",
                        textHeaderOne: "Die asynchrone Programmierung in JavaScript ermöglicht nicht-blockierende Operationen und führt zu effizienterer Codeausführung.",
                        smallTextHeader: "Erfahren Sie mehr &rarr;",
                        blogTextOne: "Die asynchrone Programmierung in JavaScript ist entscheidend für die Entwicklung reaktionsfähiger Webanwendungen. Sie ermöglicht JavaScript, mehrere Operationen gleichzeitig auszuführen, ohne den Ausführungsthread zu blockieren.",
                        blogTextSecond: "Der primäre Mechanismus zur Erreichung von Asynchronität in JavaScript sind Callbacks, Promises und die async/await-Syntax, die in ES6 und späteren Versionen eingeführt wurden.",
                        blogTitleOne: "1. Einführung in die asynchrone Programmierung",
                        blogTitleSecond: "2. Callbacks",
                        blogTitleThird: "3. Promises",
                        blogTitleFour: "4. Async/Await",
                        blogTitleFive: "5. Ereignisschleife (Event Loop)",
                        blogTitleSix: "6. Anwendungsbeispiele",
                        blogTextThird: "Callbacks sind Funktionen, die als Argumente an eine andere Funktion übergeben werden, um später ausgeführt zu werden. Sie sind ein traditioneller Ansatz zur Behandlung asynchroner Operationen, können jedoch zu verschachteltem Callback-Code führen (Callback-Hölle).",
                        blogTextFour: "Promises sind Objekte, die die eventuelle Erfüllung (oder das Scheitern) einer asynchronen Operation darstellen und das Verketten mehrerer asynchroner Operationen ermöglichen. Sie bieten eine sauberere Alternative zu Callbacks und verbessern die Lesbarkeit des Codes.",
                        blogTextFive: "Async-Funktionen, die in ES8 eingeführt wurden, bieten eine kürzere und lesbarere Möglichkeit, asynchronen Code zu schreiben. Sie ermöglichen es Entwicklern, Promise-basierten asynchronen Code zu schreiben, als ob er synchron wäre, unter Verwendung des async-Schlüsselworts und des await-Operators.",
                        blogTextSix: "Das Verständnis der Ereignisschleife und wie JavaScript asynchrone Aufgaben behandelt, ist entscheidend. Die Ereignisschleife ist verantwortlich für die Ausführung des Codes, das Sammeln und Verarbeiten von Ereignissen sowie die Ausführung von geplanten Unter-Aufgaben.",
                        blogTextSeven: "Häufige Anwendungsfälle für die asynchrone Programmierung umfassen das Abrufen von Daten von einem entfernten Server, die Behandlung von Benutzereingabenereignissen ohne Blockieren des UI-Threads und die Ausführung zeitintensiver Operationen ohne Einfrieren der Anwendung.",
                        PlusCardTitleOne: "Python vs. Ruby: Welche Sprache sollten Sie lernen?",
                        PlusCardTitleTwo: "Einführung in maschinelles Lernen mit Python",
                        PlusCardTitleThree: "JavaScript vs TypeScript",
                        PlusCardTitleFour: "Grundlagen der objektorientierten Programmierung",
                        PlusCardTextOne: "Python und Ruby sind beide leistungsstarke, hochrangige Programmiersprachen. Dieser Artikel vergleicht ihre Funktionen, Stärken und mehr.",
                        PlusCardTextTwo: "Maschinelles Lernen ist ein schnell wachsendes Feld mit vielfältigen Anwendungen. Dieser Artikel führt die Grundlagen des maschinellen Lernens unter Verwendung von Python ein.",
                        PlusCardTextThree: "JavaScript ist eine dynamische Skriptsprache, während TypeScript eine Erweiterung von JavaScript mit optionaler statischer Typisierung ist, die die Wartbarkeit und Skalierbarkeit des Codes verbessert.",
                        PlusCardTextFour: "Das Verständnis der Grundlagen der objektorientierten Programmierung ist entscheidend für die Entwicklung skalierbarer und wartbarer Softwaresysteme.",
                        PlusCardButtonOne: "Mehr erfahren",
                        PlusCardButtonTwo: "Mehr erfahren",
                        PlusCardButtonThree: "Mehr erfahren",
                        PlusCardButtonFour: "Mehr erfahren"
                    };
                    elements(data);
                }

                function tranlateBlogsFiveToRussian() {
                    const data = {
                        titleHeader: "Понимание асинхронного программирования в JavaScript",
                        textHeaderOne: "Асинхронное программирование в JavaScript позволяет выполнять неблокирующие операции и повышает эффективность выполнения кода.",
                        smallTextHeader: "Узнать больше &rarr;",
                        blogTextOne: "Асинхронное программирование в JavaScript является ключевым для создания отзывчивых веб-приложений. Оно позволяет JavaScript выполнять несколько операций одновременно, не блокируя основной поток выполнения.",
                        blogTextSecond: "Основной механизм достижения асинхронности в JavaScript — через колбэки, промисы и синтаксис async/await, введенный в ES6 и позднее.",
                        blogTitleOne: "1. Введение в асинхронное программирование",
                        blogTitleSecond: "2. Колбэки",
                        blogTitleThird: "3. Промисы",
                        blogTitleFour: "4. Async/Await",
                        blogTitleFive: "5. Цикл событий (Event Loop)",
                        blogTitleSix: "6. Примеры использования",
                        blogTextThird: "Колбэки — это функции, передаваемые в качестве аргументов другой функции для выполнения позже. Они являются традиционным подходом к обработке асинхронных операций, но могут привести к \"аду колбэков\" при глубоком вложении.",
                        blogTextFour: "Промисы — это объекты, представляющие завершение (или неудачу) асинхронной операции и позволяющие цеплять несколько асинхронных операций вместе. Они представляют собой более чистую альтернативу колбэкам и улучшают читаемость кода.",
                        blogTextFive: "Async-функции, введенные в ES8, предлагают более краткий и читаемый способ написания асинхронного кода. Они позволяют разработчикам писать асинхронный код, основанный на промисах, как если бы он был синхронным, с использованием ключевого слова async и оператора await.",
                        blogTextSix: "Понимание цикла событий и того, как JavaScript обрабатывает асинхронные задачи, критично. Цикл событий отвечает за выполнение кода, сбор и обработку событий, а также выполнение запланированных подзадач.",
                        blogTextSeven: "Часто встречаемые случаи использования асинхронного программирования включают получение данных с удаленного сервера, обработку событий ввода пользователя без блокировки потока пользовательского интерфейса и выполнение времязатратных операций без замораживания приложения.",
                        PlusCardTitleOne: "Python против Ruby: Какой язык следует изучить?",
                        PlusCardTitleTwo: "Введение в машинное обучение с использованием Python",
                        PlusCardTitleThree: "JavaScript против TypeScript",
                        PlusCardTitleFour: "Основы объектно-ориентированного программирования",
                        PlusCardTextOne: "Python и Ruby являются мощными, высокоуровневыми языками программирования. Этот статья сравнивает их функции, сильные стороны и другие аспекты.",
                        PlusCardTextTwo: "Машинное обучение — это быстрорастущее направление с многочисленными приложениями. Этот статья вводит основы машинного обучения с использованием Python.",
                        PlusCardTextThree: "JavaScript является динамическим скриптовым языком, в то время как TypeScript является надмножеством JavaScript с опциональной статической типизацией, что улучшает поддерживаемость и масштабируемость кода.",
                        PlusCardTextFour: "Понимание основ объектно-ориентированного программирования критично для разработки масштабируемых и поддерживаемых программных систем.",
                        PlusCardButtonOne: "Узнать больше",
                        PlusCardButtonTwo: "Узнать больше",
                        PlusCardButtonThree: "Узнать больше",
                        PlusCardButtonFour: "Узнать больше"
                    };
                    elements(data);
                }

                function tranlateBlogsFiveToBulgarian() {
                    const data = {
                        titleHeader: "Разбиране на Асинхронното Програмиране в JavaScript",
                        textHeaderOne: "Асинхронното програмиране в JavaScript позволява изпълнението на не-блокиращи операции, което води до по-ефективно изпълнение на кода.",
                        smallTextHeader: "Научете повече &rarr;",
                        blogTextOne: "Асинхронното програмиране в JavaScript е от съществено значение за създаването на отзивчиви уеб приложения. То позволява на JavaScript да изпълнява множество операции едновременно, без да блокира изпълнителната нишка.",
                        blogTextSecond: "Основният механизъм за постигане на асинхронност в JavaScript са обратните викания (callbacks), обещанията (promises) и синтаксисът async/await, въведен в ES6 и по-нови версии на езика.",
                        blogTitleOne: "1. Въведение в Асинхронното Програмиране",
                        blogTitleSecond: "2. Обратни Викания (Callbacks)",
                        blogTitleThird: "3. Обещания (Promises)",
                        blogTitleFour: "4. Async/Await",
                        blogTitleFive: "5. Събитиен Цикъл (Event Loop)",
                        blogTitleSix: "6. Употреби",
                        blogTextThird: "Обратните викания са функции, предавани като аргументи на друга функция, за да се изпълнят по-късно. Те са традиционен подход за работа с асинхронни операции, но могат да доведат до \"callback hell\", когато са влагани дълбоко.",
                        blogTextFour: "Обещанията са обекти, които представляват крайното изпълнение (или неуспеха) на асинхронна операция и позволяват верижно свързване на множество асинхронни операции. Те предлагат по-чиста алтернатива на обратните викания и подобряват четливостта на кода.",
                        blogTextFive: "Асинхронните функции, въведени в ES8, предлагат по-кратък и четим начин за писане на асинхронен код. Те позволяват на разработчиците да пишат базирания на обещания асинхронен код като синхронен, използвайки ключовата дума async и оператора await.",
                        blogTextSix: "Разбирането на събитиен цикъл и как JavaScript обработва асинхронни задачи е от съществено значение. Събитиен цикълът е отговорен за изпълнението на кода, събирането и обработването на събития и изпълнението на опашкови подзадачи.",
                        blogTextSeven: "Честите употреби на асинхронното програмиране включват извличане на данни от отдалечен сървър, обработка на събития от потребителския вход без блокиране на потребителския интерфейс и изпълнение на времеемки операции без замразяване на приложението.",
                        PlusCardTitleOne: "Python срещу Ruby: Кой език да научите?",
                        PlusCardTitleTwo: "Въведение в Машинното Обучение с Python",
                        PlusCardTitleThree: "JavaScript срещу TypeScript",
                        PlusCardTitleFour: "Основи на Обектно-Ориентираното Програмиране",
                        PlusCardTextOne: "Python и Ruby са и двата мощни, високо нивови програмни езици. Този материал сравнява техните характеристики, силни страни и други.",
                        PlusCardTextTwo: "Машинното обучение е бързо развиваща се област с разнообразни приложения. Този материал въвежда основите на машинното обучение с използване на Python.",
                        PlusCardTextThree: "JavaScript е динамичен скриптов език, докато TypeScript е разширение на JavaScript с опционално статично типизиране, което подобрява поддържането и мащабируемостта на кода.",
                        PlusCardTextFour: "Разбирането на основите на обектно-ориентираното програмиране е от съществено значение за създаването на мащабируеми и поддържаеми софтуерни системи.",
                        PlusCardButtonOne: "Повече информация",
                        PlusCardButtonTwo: "Повече информация",
                        PlusCardButtonThree: "Повече информация",
                        PlusCardButtonFour: "Повече информация"
                    };
                    elements(data);
                }
            }
            else if (checkLocalStorage("6")) {
                if (locale === "bg-BG") {
                    tranlateBlogsSixToBulgarian();
                }
                else if (locale === "en-GB") {
                    tranlateBlogsSixToEnglish();
                }
                else if (locale === "de-DE") {
                    tranlateBlogsSixToGerman();
                }
                else if (locale === "ru-RU") {
                    tranlateBlogsSixToRussian();
                }

                function tranlateBlogsSixToEnglish() {
                    const data = {
                        titleHeader: "Python vs. Ruby: Which Language Should You Learn?",
                        textHeaderOne: "Python and Ruby are both powerful, high-level programming languages known for their simplicity and readability, making them popular choices among developers.",
                        smallTextHeader: "Learn more &rarr;",
                        blogTextOne: "Python and Ruby are both dynamically typed, high-level programming languages known for their simplicity and readability, making them popular choices among developers.",
                        blogTextSecond: "&#9679; Python emphasizes readability and simplicity, making it suitable for a wide range of applications including web development, data analysis, scientific computing, and automation. Its syntax is designed to be clear and expressive. <br><br> &#9679; Ruby: Ruby focuses on developer happiness and productivity with an emphasis on elegant and concise code. It prioritizes convention over configuration, particularly favored in web development with Ruby on Rails.",
                        blogTitleOne: "1. Introduction to Python and Ruby",
                        blogTitleSecond: "2. Python: Simplicity and Versatility",
                        blogTitleThird: "3. Ruby: Programmer Happiness",
                        blogTitleFour: "4. Popular Use Cases",
                        blogTitleFive: "5. Communities and Ecosystems",
                        blogTitleSix: "6. Making Your Choice",
                        blogTextThird: "Python is favored for its simplicity and ease of learning, which contributes to its widespread adoption by both beginners and experienced developers alike.",
                        blogTextFour: "Ruby emphasizes programmer happiness and boasts an elegant syntax designed to enhance developer productivity and satisfaction.",
                        blogTextFive: "Ruby gained popularity primarily due to the Ruby on Rails framework, celebrated for its capability to facilitate rapid development of web applications.",
                        blogTextSix: "Both Python and Ruby have vibrant communities and offer rich ecosystems of libraries and frameworks, supporting developers in building robust and scalable applications.",
                        blogTextSeven: "Choosing between Python and Ruby often hinges on specific project requirements, team preferences, and career aspirations, reflecting their respective strengths and advantages.",
                        PlusCardTitleOne: "Why JavaScript is so popular?",
                        PlusCardTitleTwo: "Fundamentals of Object-Oriented Programming",
                        PlusCardTitleThree: "Exploring New Features in the Latest Version of C#",
                        PlusCardTitleFour: "JavaScript vs TypeScript",
                        PlusCardTextOne: "JavaScript's popularity stems from its versatility in both client and server-side development, supported by a vast ecosystem of libraries and frameworks.",
                        PlusCardTextTwo: "Understanding the fundamentals of Object-Oriented Programming is crucial for building scalable and maintainable software systems.",
                        PlusCardTextThree: "This article reviews these updates and demonstrates how to leverage them in your projects to improve your coding efficiency.",
                        PlusCardTextFour: "JavaScript is a dynamic scripting language, while TypeScript is a superset of JavaScript with optional static typing, providing enhanced code maintainability and scalability.",
                        PlusCardButtonOne: "More information",
                        PlusCardButtonTwo: "More information",
                        PlusCardButtonThree: "More information",
                        PlusCardButtonFour: "More information"
                    };
                    elements(data);
                }

                function tranlateBlogsSixToGerman() {
                    const data = {
                        titleHeader: "Python vs. Ruby: Welche Sprache sollten Sie lernen?",
                        textHeaderOne: "Python und Ruby sind beide leistungsstarke Hochsprachenprogrammiersprachen, die für ihre Einfachheit und Lesbarkeit bekannt sind und bei Entwicklern beliebt sind.",
                        smallTextHeader: "Erfahren Sie mehr &rarr;",
                        blogTextOne: "Python und Ruby sind beide dynamisch typisierte, hochsprachige Programmiersprachen, die für ihre Einfachheit und Lesbarkeit bekannt sind und bei Entwicklern beliebt sind.",
                        blogTextSecond: "&#9679; Python betont Lesbarkeit und Einfachheit und eignet sich für eine Vielzahl von Anwendungen, einschließlich Webentwicklung, Datenanalyse, wissenschaftliches Rechnen und Automatisierung. Seine Syntax ist darauf ausgelegt, klar und ausdrucksstark zu sein. <br><br> &#9679; Ruby: Ruby konzentriert sich auf die Zufriedenheit und Produktivität der Entwickler mit einem Schwerpunkt auf elegantem und prägnantem Code. Es priorisiert Konventionen vor Konfigurationen, besonders beliebt in der Webentwicklung mit Ruby on Rails.",
                        blogTitleOne: "1. Einführung in Python und Ruby",
                        blogTitleSecond: "2. Python: Einfachheit und Vielseitigkeit",
                        blogTitleThird: "3. Ruby: Entwicklerzufriedenheit",
                        blogTitleFour: "4. Beliebte Anwendungsfälle",
                        blogTitleFive: "5. Gemeinschaften und Ökosysteme",
                        blogTitleSix: "6. Treffen Sie Ihre Wahl",
                        blogTextThird: "Python wird aufgrund seiner Einfachheit und einfachen Erlernbarkeit bevorzugt, was zu seiner weit verbreiteten Akzeptanz sowohl bei Anfängern als auch bei erfahrenen Entwicklern beiträgt.",
                        blogTextFour: "Ruby betont die Zufriedenheit der Entwickler und verfügt über eine elegante Syntax, die darauf ausgelegt ist, die Produktivität und Zufriedenheit der Entwickler zu steigern.",
                        blogTextFive: "Ruby gewann hauptsächlich aufgrund des Ruby on Rails-Frameworks an Popularität, das für seine Fähigkeit zur schnellen Entwicklung von Webanwendungen gefeiert wird.",
                        blogTextSix: "Sowohl Python als auch Ruby haben lebendige Gemeinschaften und bieten reiche Ökosysteme von Bibliotheken und Frameworks, die Entwickler bei der Erstellung robuster und skalierbarer Anwendungen unterstützen.",
                        blogTextSeven: "Die Wahl zwischen Python und Ruby hängt oft von spezifischen Projektanforderungen, Teampräferenzen und Karriereambitionen ab und spiegelt ihre jeweiligen Stärken und Vorteile wider.",
                        PlusCardTitleOne: "Warum ist JavaScript so beliebt?",
                        PlusCardTitleTwo: "Grundlagen der objektorientierten Programmierung",
                        PlusCardTitleThree: "Erkunden neuer Funktionen in der neuesten Version von C#",
                        PlusCardTitleFour: "JavaScript vs. TypeScript",
                        PlusCardTextOne: "Die Beliebtheit von JavaScript ergibt sich aus seiner Vielseitigkeit sowohl in der Client- als auch in der Serverseitenentwicklung, unterstützt durch ein umfangreiches Ökosystem von Bibliotheken und Frameworks.",
                        PlusCardTextTwo: "Das Verständnis der Grundlagen der objektorientierten Programmierung ist entscheidend für den Aufbau skalierbarer und wartbarer Softwaresysteme.",
                        PlusCardTextThree: "Dieser Artikel überprüft diese Updates und zeigt, wie Sie sie in Ihren Projekten nutzen können, um die Effizienz Ihrer Codierung zu verbessern.",
                        PlusCardTextFour: "JavaScript ist eine dynamische Skriptsprache, während TypeScript eine Erweiterung von JavaScript mit optionaler statischer Typisierung ist, die eine verbesserte Wartbarkeit und Skalierbarkeit des Codes bietet.",
                        PlusCardButtonOne: "Mehr Informationen",
                        PlusCardButtonTwo: "Mehr Informationen",
                        PlusCardButtonThree: "Mehr Informationen",
                        PlusCardButtonFour: "Mehr Informationen"
                    };
                    elements(data);
                }

                function tranlateBlogsSixToRussian() {
                    const data = {
                        titleHeader: "Python против Ruby: Какой язык стоит изучать?",
                        textHeaderOne: "Python и Ruby - это два мощных высокоуровневых языка программирования, известные своей простотой и читаемостью, что делает их популярными среди разработчиков.",
                        smallTextHeader: "Узнать больше &rarr;",
                        blogTextOne: "Python и Ruby оба динамически типизированные, высокоуровневые языки программирования, известные своей простотой и читаемостью, что делает их популярными среди разработчиков.",
                        blogTextSecond: "&#9679; Python акцентирует на читаемости и простоте, что делает его подходящим для широкого спектра приложений, включая веб-разработку, анализ данных, научные вычисления и автоматизацию. Его синтаксис разработан для ясности и выразительности. <br><br> &#9679; Ruby: Ruby фокусируется на удовлетворении разработчика и продуктивности, с акцентом на элегантный и краткий код. Приоритет отдается конвенции перед конфигурацией, особенно любимой в веб-разработке с Ruby on Rails.",
                        blogTitleOne: "1. Введение в Python и Ruby",
                        blogTitleSecond: "2. Python: Простота и универсальность",
                        blogTitleThird: "3. Ruby: Удовлетворение разработчика",
                        blogTitleFour: "4. Популярные случаи использования",
                        blogTitleFive: "5. Сообщества и экосистемы",
                        blogTitleSix: "6. Сделайте свой выбор",
                        blogTextThird: "Python предпочтителен из-за своей простоты и легкости в изучении, что способствует его широкому принятию как начинающими, так и опытными разработчиками.",
                        blogTextFour: "Ruby акцентирует на удовлетворении разработчика и гордится элегантным синтаксисом, разработанным для повышения производительности и удовлетворения разработчика.",
                        blogTextFive: "Ruby стал популярным в основном благодаря фреймворку Ruby on Rails, известному своей способностью ускорять разработку веб-приложений.",
                        blogTextSix: "И Python, и Ruby имеют активные сообщества и предлагают богатые экосистемы библиотек и фреймворков, поддерживающие разработчиков в создании надежных и масштабируемых приложений.",
                        blogTextSeven: "Выбор между Python и Ruby часто зависит от конкретных требований проекта, предпочтений команды и карьерных амбиций, отражая их сильные стороны и преимущества.",
                        PlusCardTitleOne: "Почему JavaScript так популярен?",
                        PlusCardTitleTwo: "Основы объектно-ориентированного программирования",
                        PlusCardTitleThree: "Исследование новых функций в последней версии C#",
                        PlusCardTitleFour: "JavaScript против TypeScript",
                        PlusCardTextOne: "Популярность JavaScript обусловлена его универсальностью как в клиентской, так и в серверной разработке, поддерживаемой обширной экосистемой библиотек и фреймворков.",
                        PlusCardTextTwo: "Понимание основ объектно-ориентированного программирования крайне важно для создания масштабируемых и поддерживаемых программных систем.",
                        PlusCardTextThree: "Эта статья рассматривает нововведения и демонстрирует, как использовать их в ваших проектах для повышения эффективности кодирования.",
                        PlusCardTextFour: "JavaScript - это динамический скриптовый язык, в то время как TypeScript является надмножеством JavaScript с возможностью опциональной статической типизации, обеспечивающий улучшенную поддержку и масштабируемость кода.",
                        PlusCardButtonOne: "Больше информации",
                        PlusCardButtonTwo: "Больше информации",
                        PlusCardButtonThree: "Больше информации",
                        PlusCardButtonFour: "Больше информации"
                    };
                    elements(data);
                }

                function tranlateBlogsSixToBulgarian() {
                    const data = {
                        titleHeader: "Python против Ruby: Кой език следва да научите?",
                        textHeaderOne: "Python и Ruby са два мощни, високо-нивни програмни езика, известни със своята простота и четимост, което ги прави популярни сред разработчиците.",
                        smallTextHeader: "Научете повече &rarr;",
                        blogTextOne: "Python и Ruby са и двата динамично типизирани, високо-нивни програмни езици, познати със своята простота и четимост, което ги прави популярни сред разработчиците.",
                        blogTextSecond: "&#9679; Python акцентира върху четимостта и простотата, което го прави подходящ за широк спектър приложения, включително уеб разработка, анализ на данни, научни изчисления и автоматизация. Неговият синтаксис е проектиран да бъде ясен и изразителен. <br><br> &#9679; Ruby: Ruby се фокусира върху удовлетворението на разработчика и продуктивността, с акцент върху елегантния и кратък код. Приоритет има согласуването пред конфигурирането, особено любимо в уеб разработката с Ruby on Rails.",
                        blogTitleOne: "1. Въведение в Python и Ruby",
                        blogTitleSecond: "2. Python: Простота и универсалност",
                        blogTitleThird: "3. Ruby: Удовлетворение на програмиста",
                        blogTitleFour: "4. Популярни случаи на приложение",
                        blogTitleFive: "5. Общности и екосистеми",
                        blogTitleSix: "6. Вземете своя избор",
                        blogTextThird: "Python се предпочита заради своята простота и леснота на изучаване, което допринася за неговото широко приемане както от начинаещи, така и от опитни разработчици.",
                        blogTextFour: "Ruby акцентира върху удовлетворението на програмиста и се гордее с елегантен синтаксис, проектиран за повишаване на продуктивността и удовлетворението на разработчика.",
                        blogTextFive: "Ruby стана популярен основно благодарение на фреймуърка Ruby on Rails, познат със способността си да улеснява бързото разработване на уеб приложения.",
                        blogTextSix: "И Python, и Ruby разполагат с активни общности и предлагат богати екосистеми от библиотеки и фреймуърки, подкрепящи разработчиците в създаването на надеждни и мащабируеми приложения.",
                        blogTextSeven: "Изборът между Python и Ruby често зависи от специфичните изисквания на проекта, предпочитанията на екипа и кариерните амбиции, отразяващи техните силни страни и предимства.",
                        PlusCardTitleOne: "Защо JavaScript е толкова популярен?",
                        PlusCardTitleTwo: "Основи на обектно-ориентираното програмиране",
                        PlusCardTitleThree: "Изследване на новите функции в последната версия на C#",
                        PlusCardTitleFour: "JavaScript срещу TypeScript",
                        PlusCardTextOne: "Популярността на JavaScript произлиза от неговата универсалност както в клиентско, така и в сървърско развитие, подкрепена от обширен екосистем от библиотеки и фреймуърки.",
                        PlusCardTextTwo: "Разбирането на основите на обектно-ориентираното програмиране е от съществено значение за изграждането на мащабируеми и поддръжаеми софтуерни системи.",
                        PlusCardTextThree: "Този артикул преглежда нововъведенията и демонстрира как да ги използвате в проектите си, за да подобрите ефективността на кодирането.",
                        PlusCardTextFour: "JavaScript е динамичен скриптов език, докато TypeScript е надмножество на JavaScript с опционално статично типизиране, осигуряващо подобрена поддръжка и мащабируемост на кода.",
                        PlusCardButtonOne: "Повече информация",
                        PlusCardButtonTwo: "Повече информация",
                        PlusCardButtonThree: "Повече информация",
                        PlusCardButtonFour: "Повече информация"
                    };
                    elements(data);
                }
            }
            else if (checkLocalStorage("7")) {
                if (locale === "bg-BG") {
                    tranlateBlogsSevenToBulgarian();
                }
                else if (locale === "en-GB") {
                    tranlateBlogsSevenToEnglish();
                }
                else if (locale === "de-DE") {
                    tranlateBlogsSevenToGerman();
                }
                else if (locale === "ru-RU") {
                    tranlateBlogsSevenToRussian();
                }

                function tranlateBlogsSevenToEnglish() {
                    const data = {
                        titleHeader: "10 Essential Git Commands for Every Developer",
                        textHeaderOne: "Mastering Git is crucial for modern development. This article covers the ten most essential Git commands, providing explanations and examples to enhance your version control.",
                        smallTextHeader: "Read more &rarr;",
                        blogTextOne: "Git is a powerful version control system that helps developers manage their codebase. Understanding essential Git commands is key to efficient workflow.",
                        blogTextSecond: "&#9679; <b>git init</b>: Initializes a new Git repository. This command creates a .git directory in the project root. <br><br> &#9679; <b>git clone</b>: Clones an existing repository into a new directory, allowing you to work on a project with a copy of the repository.",
                        blogTextThird: "&#9679; <b>git add</b>: Adds changes in the working directory to the staging area, preparing them to be included in the next commit. <br><br> &#9679; <b>git commit</b>: Records changes to the repository with a message describing what has been changed.",
                        blogTextFour: "&#9679; <b>git status</b>: Shows the working directory status, indicating which changes have been staged, which haven't, and files that aren't being tracked by Git.",
                        blogTextFive: "&#9679; <b>git pull</b>: Fetches and integrates changes from a remote repository to the local repository. <br><br> &#9679; <b>git push</b>: Uploads local repository content to a remote repository, enabling collaboration with other developers.",
                        blogTextSix: "&#9679; <b>git branch</b>: Lists all branches in the repository, and lets you create, rename, or delete branches.",
                        blogTextSeven: "Both <b>git merge</b> and <b>git checkout</b> are essential for combining changes from different branches and switching branches or restoring working tree files, respectively. <b>git log</b> shows the commit history, providing details of each commit including author, date, and message.",
                        blogTitleOne: "1. Initializing and Cloning Repositories",
                        blogTitleSecond: "2. Adding and Committing Changes",
                        blogTitleThird: "3. Checking Status",
                        blogTitleFour: "4. Pushing and Pulling Changes",
                        blogTitleFive: "5. Managing Branches",
                        blogTitleSix: "6. Merging, Checking Out, and Viewing History",
                        PlusCardTitleOne: "Python vs. Ruby: Which Language Should You Learn?",
                        PlusCardTitleTwo: "Introduction to Machine Learning with Python",
                        PlusCardTitleThree: "JavaScript vs TypeScript",
                        PlusCardTitleFour: "Fundamentals of Object-Oriented Programming",
                        PlusCardTextOne: "Python and Ruby are both powerful, high-level programming languages. This article compares their features, strengths and more.",
                        PlusCardTextTwo: "Machine learning is a rapidly growing field with diverse applications. This article introduces the basics of machine learning using Python.",
                        PlusCardTextThree: "JavaScript is a dynamic scripting language, while TypeScript is a superset of JavaScript with optional static typing, providing enhanced code maintainability and scalability.",
                        PlusCardTextFour: "Understanding the fundamentals of Object-Oriented Programming is crucial for building scalable and maintainable software systems.",
                        PlusCardButtonOne: "More Information",
                        PlusCardButtonTwo: "More Information",
                        PlusCardButtonThree: "More Information",
                        PlusCardButtonFour: "More Information"

                    };
                    elements(data);
                }

                function tranlateBlogsSevenToGerman() {
                    const data = {
                        titleHeader: "10 wichtige Git-Befehle für jeden Entwickler",
                        textHeaderOne: "Das Beherrschen von Git ist ein wesentlicher Aspekt moderner Entwicklung. Dieser Artikel behandelt die zehn wichtigsten Git-Befehle mit Erklärungen und Beispielen zur Verbesserung der Versionskontrolle.",
                        smallTextHeader: "Mehr erfahren &rarr;",
                        blogTextOne: "Git ist ein leistungsstarkes Versionskontrollsystem, das Entwicklern hilft, ihren Code zu verwalten. Das Verständnis grundlegender Git-Befehle ist entscheidend für einen effizienten Arbeitsablauf.",
                        blogTextSecond: "&#9679; <b>git init</b>: Initialisiert ein neues Git-Repository. Dieser Befehl erstellt ein .git-Verzeichnis im Stammverzeichnis des Projekts. <br><br> &#9679; <b>git clone</b>: Kloniert ein vorhandenes Repository in ein neues Verzeichnis, was es Ihnen ermöglicht, an einem Projekt mit einer Kopie des Repositorys zu arbeiten.",
                        blogTextThird: "&#9679; <b>git add</b>: Fügt Änderungen im Arbeitsverzeichnis zur Staging-Area hinzu und bereitet sie darauf vor, im nächsten Commit enthalten zu sein. <br><br> &#9679; <b>git commit</b>: Zeichnet Änderungen im Repository auf und beschreibt, was geändert wurde.",
                        blogTextFour: "&#9679; <b>git status</b>: Zeigt den Status des Arbeitsverzeichnisses an und gibt an, welche Änderungen gestaged wurden, welche nicht und welche Dateien von Git nicht verfolgt werden.",
                        blogTextFive: "&#9679; <b>git pull</b>: Holt Änderungen aus einem entfernten Repository ab und integriert sie in das lokale Repository. <br><br> &#9679; <b>git push</b>: Lädt den Inhalt des lokalen Repositorys in ein entferntes Repository hoch und ermöglicht die Zusammenarbeit mit anderen Entwicklern.",
                        blogTextSix: "&#9679; <b>git branch</b>: Listet alle Branches im Repository auf und ermöglicht es Ihnen, Branches zu erstellen, umzubenennen oder zu löschen.",
                        blogTextSeven: "Die Befehle <b>git merge</b> und <b>git checkout</b> sind entscheidend für das Zusammenführen von Änderungen aus verschiedenen Branches, das Wechseln zwischen Branches oder das Wiederherstellen von Dateien im Arbeitsbaum. <b>git log</b> zeigt die Commit-Historie an und liefert Details zu jedem Commit, einschließlich Autor, Datum und Nachricht.",
                        blogTitleOne: "1. Initialisieren und Klonen von Repositories",
                        blogTitleSecond: "2. Hinzufügen und Commiten von Änderungen",
                        blogTitleThird: "3. Status überprüfen",
                        blogTitleFour: "4. Hochladen und Herunterladen von Änderungen",
                        blogTitleFive: "5. Verwalten von Branches",
                        blogTitleSix: "6. Zusammenführen, Auschecken und Anzeigen der Historie",
                        PlusCardTitleOne: "Python vs. Ruby: Welche Sprache sollte man lernen?",
                        PlusCardTitleTwo: "Einführung in maschinelles Lernen mit Python",
                        PlusCardTitleThree: "JavaScript vs. TypeScript",
                        PlusCardTitleFour: "Grundlagen der objektorientierten Programmierung",
                        PlusCardTextOne: "Python und Ruby sind beide leistungsstarke, hochrangige Programmiersprachen. Dieser Artikel vergleicht ihre Merkmale, Stärken und mehr.",
                        PlusCardTextTwo: "Maschinelles Lernen ist ein schnell wachsendes Feld mit vielfältigen Anwendungen. Dieser Artikel stellt die Grundlagen des maschinellen Lernens unter Verwendung von Python vor.",
                        PlusCardTextThree: "JavaScript ist eine dynamische Skriptsprache, während TypeScript eine Erweiterung von JavaScript mit optionaler statischer Typisierung ist, die die Wartbarkeit und Skalierbarkeit des Codes verbessert.",
                        PlusCardTextFour: "Das Verständnis der Grundlagen der objektorientierten Programmierung ist entscheidend für den Aufbau skalierbarer und wartbarer Softwaresysteme.",
                        PlusCardButtonOne: "Mehr Informationen",
                        PlusCardButtonTwo: "Mehr Informationen",
                        PlusCardButtonThree: "Mehr Informationen",
                        PlusCardButtonFour: "Mehr Informationen"
                    };
                    elements(data);
                }

                function tranlateBlogsSevenToRussian() {
                    const data = {
                        titleHeader: "10 важных команд Git для каждого разработчика",
                        textHeaderOne: "Овладение Git является важным аспектом современной разработки. В этой статье рассмотрены десять наиболее важных команд Git с объяснениями и примерами для улучшения управления версиями.",
                        smallTextHeader: "Узнать больше &rarr;",
                        blogTextOne: "Git - мощная система контроля версий, которая помогает разработчикам управлять своим кодовым базисом. Понимание основных команд Git ключевое для эффективного рабочего процесса.",
                        blogTextSecond: "&#9679; <b>git init</b>: Инициализирует новый Git репозиторий. Эта команда создает каталог .git в корневом каталоге проекта. <br><br> &#9679; <b>git clone</b>: Клонирует существующий репозиторий в новый каталог, позволяя работать с копией репозитория.",
                        blogTextThird: "&#9679; <b>git add</b>: Добавляет изменения в рабочем каталоге в область подготовленности (staging area), подготавливая их к включению в следующий коммит. <br><br> &#9679; <b>git commit</b>: Записывает изменения в репозиторий с сообщением, описывающим, что было изменено.",
                        blogTextFour: "&#9679; <b>git status</b>: Показывает состояние рабочего каталога, указывая, какие изменения подготовлены к коммиту, какие нет, и какие файлы не отслеживаются Git.",
                        blogTextFive: "&#9679; <b>git pull</b>: Забирает и интегрирует изменения из удаленного репозитория в локальный репозиторий. <br><br> &#9679; <b>git push</b>: Загружает содержимое локального репозитория в удаленный репозиторий, обеспечивая совместную работу с другими разработчиками.",
                        blogTextSix: "&#9679; <b>git branch</b>: Показывает список всех веток в репозитории и позволяет создавать, переименовывать или удалять ветки.",
                        blogTextSeven: "Команды <b>git merge</b> и <b>git checkout</b> необходимы для объединения изменений из различных веток и переключения между ветками или восстановления файлов рабочего дерева, соответственно. Команда <b>git log</b> показывает историю коммитов, предоставляя детали каждого коммита, включая автора, дату и сообщение.",
                        blogTitleOne: "1. Инициализация и клонирование репозиториев",
                        blogTitleSecond: "2. Добавление и фиксация изменений",
                        blogTitleThird: "3. Проверка состояния",
                        blogTitleFour: "4. Отправка и получение изменений",
                        blogTitleFive: "5. Управление ветками",
                        blogTitleSix: "6. Объединение, проверка и просмотр истории",
                        PlusCardTitleOne: "Python против Ruby: Кой език следва да научите?",
                        PlusCardTitleTwo: "Введение в машинное обучение с использованием Python",
                        PlusCardTitleThree: "JavaScript против TypeScript",
                        PlusCardTitleFour: "Основы объектно-ориентированного программирования",
                        PlusCardTextOne: "Python и Ruby - оба мощные, высокоуровневые языки программирования. Эта статья сравнивает их особенности, преимущества и многое другое.",
                        PlusCardTextTwo: "Машинное обучение - быстрорастущая область с разнообразными применениями. Эта статья знакомит с основами машинного обучения с использованием Python.",
                        PlusCardTextThree: "JavaScript - это динамический скриптовый язык, в то время как TypeScript является надмножеством JavaScript с опциональной статической типизацией, обеспечивающий улучшенную поддержку и масштабируемость кода.",
                        PlusCardTextFour: "Понимание основ объектно-ориентированного программирования крайне важно для создания масштабируемых и поддерживаемых программных систем.",
                        PlusCardButtonOne: "Узнать больше",
                        PlusCardButtonTwo: "Узнать больше",
                        PlusCardButtonThree: "Узнать больше",
                        PlusCardButtonFour: "Узнать больше"
                    };
                    elements(data);
                }

                function tranlateBlogsSevenToBulgarian() {
                    const data = {
                        titleHeader: "10 важни команди Git за всеки разработчик",
                        textHeaderOne: "Овладяването на Git е ключов аспект от съвременната разработка. В тази статия са разгледани десетте най-важни команди Git с обяснения и примери за подобряване на управлението на версиите.",
                        smallTextHeader: "Научете повече &rarr;",
                        blogTextOne: "Git е мощна система за контрол на версиите, която помага на разработчиците да управляват своя кодов базис. Разбирането на основни команди Git е ключово за ефективния работен процес.",
                        blogTextSecond: "&#9679; <b>git init</b>: Инициализира нов Git репозиториум. Тази команда създава директория .git в основната директория на проекта. <br><br> &#9679; <b>git clone</b>: Клонира съществуващ репозиториум в нова директория, което ви позволява да работите с копие на репозиториума.",
                        blogTextThird: "&#9679; <b>git add</b>: Добавя промените от работната директория в областта за подготовка (staging area), като ги подготвя за включване в следващия комит. <br><br> &#9679; <b>git commit</b>: Записва промените в репозиториума със съобщение, описващо какво е било променено.",
                        blogTextFour: "&#9679; <b>git status</b>: Показва състоянието на работната директория, като указва кои промени са подготвени за комит, кои не са и кои файлове не се проследяват от Git.",
                        blogTextFive: "&#9679; <b>git pull</b>: Изтегля и интегрира промените от отдалечен репозиториум в локалния репозиториум. <br><br> &#9679; <b>git push</b>: Качва съдържанието на локалния репозиториум в отдалечен репозиториум, позволявайки сътрудничество с други разработчици.",
                        blogTextSix: "&#9679; <b>git branch</b>: Показва списък на всички клонове в репозиториума и ви позволява да създавате, преименувате или изтривате клонове.",
                        blogTextSeven: "Командите <b>git merge</b> и <b>git checkout</b> са необходими за сливане на промени от различни клонове, превключване между клонове или възстановяване на файлове от работното дърво, съответно. Командата <b>git log</b> показва историята на комитите, предоставяйки детайли за всеки комит, включително автора, датата и съобщението.",
                        blogTitleOne: "1. Инициализация и клониране на репозиториуми",
                        blogTitleSecond: "2. Добавяне и фиксиране на промени",
                        blogTitleThird: "3. Проверка на състоянието",
                        blogTitleFourth: "4. Качване и изтегляне на промени",
                        blogTitleFive: "5. Управление на клонове",
                        blogTitleSix: "6. Сливане, проверка и преглед на историята",
                        PlusCardTitleOne: "Python срещу Ruby: Кой език трябва да научите?",
                        PlusCardTitleTwo: "Въведение в машинното обучение с Python",
                        PlusCardTitleThree: "JavaScript срещу TypeScript",
                        PlusCardTitleFour: "Основи на обектно-ориентираното програмиране",
                        PlusCardTextOne: "Python и Ruby - два мощни, високо нивови програмни езика. Тази статия сравнява техните особености, предимства и други аспекти.",
                        PlusCardTextTwo: "Машинното обучение е бързоразвиваща се област с разнообразни приложения. Тази статия въвежда основите на машинното обучение с използване на Python.",
                        PlusCardTextThree: "JavaScript е динамичен скриптов език, докато TypeScript е надмножество на JavaScript с опционално статично типизиране, което подобрява поддръжката и мащабируемостта на кода.",
                        PlusCardTextFour: "Разбирането на основите на обектно-ориентираното програмиране е от решаващо значение за създаването на мащабируеми и поддържаеми софтуерни системи.",
                        PlusCardButtonOne: "Научете повече",
                        PlusCardButtonTwo: "Научете повече",
                        PlusCardButtonThree: "Научете повече",
                        PlusCardButtonFour: "Научете повече"
                    };
                    elements(data);
                }
            }
            else if (checkLocalStorage("8")) {
                if (locale === "bg-BG") {
                    tranlateBlogsEightToBulgarian();
                }
                else if (locale === "en-GB") {
                    tranlateBlogsEightToEnglish();
                }
                else if (locale === "de-DE") {
                    tranlateBlogsEightToGerman();
                }
                else if (locale === "ru-RU") {
                    tranlateBlogsEightToRussian();
                }

                function tranlateBlogsEightToEnglish() {
                    const data = {
                        titleHeader: "Exploring New Features in the Latest Version of C#",
                        textHeaderOne: "This article reviews these updates and demonstrates how to leverage them in your projects to improve your coding efficiency.",
                        smallTextHeader: "Read more &rarr;",
                        blogTextOne: "The latest version of C# introduces several powerful features that enhance developer productivity and code efficiency. Understanding these new features is essential for modern C# development.",
                        blogTextSecond: "&#9679; <b>Record Types</b>: Simplifies the creation of immutable data objects with concise syntax, enhancing data management. <br><br> &#9679; <b>Init-Only Setters</b>: Provides a way to set properties during object initialization, improving code safety.",
                        blogTextThird: "&#9679; <b>Top-level Statements</b>: Reduces boilerplate code by allowing statements directly in the namespace, making scripts and simple programs more concise. <br><br> &#9679; <b>Pattern Matching Enhancements</b>: Extends pattern matching capabilities to improve control flow and data manipulation.",
                        blogTextFour: "&#9679; <b>Records with Value Equality</b>: Ensures that two records with the same data are considered equal, facilitating comparison and testing.",
                        blogTextFive: "&#9679; <b>Init-Only Properties</b>: Allows setting of properties only during object construction, enhancing immutability. <br><br> &#9679; <b>Enhanced Pattern Matching</b>: Offers more sophisticated ways to deconstruct and analyze data.",
                        blogTextSix: "&#9679; <b>Init-Only Properties</b>: Allows setting of properties only during object construction, enhancing immutability. <br><br> &#9679; <b>Enhanced Pattern Matching</b>: Offers more sophisticated ways to deconstruct and analyze data.",
                        blogTextSeven: "&#9679; <b>Improved Performance</b>: Various optimizations in the runtime and libraries lead to better performance and resource management.",
                        blogTitleOne: "1. Introduction to New Features",
                        blogTitleSecond: "2. Record Types and Init-Only Setters",
                        blogTitleThird: "3. Top-level Statements and Pattern Matching Enhancements",
                        blogTitleFour: "4. Value Equality in Records",
                        blogTitleFive: "5. Init-Only Properties and Enhanced Pattern Matching",
                        blogTitleSix: "6. Performance Improvements and Conclusion",
                        PlusCardTitleOne: "Most commonly asked interview questions for C#",
                        PlusCardTitleTwo: "Python vs. Ruby: Which Language Should You Learn?",
                        PlusCardTitleThree: "JavaScript vs TypeScript",
                        PlusCardTitleFour: "Understanding Asynchronous Programming in JavaScript",
                        PlusCardTextOne: "Common C# interview questions cover topics like abstract classes vs. interfaces, memory management, string manipulation and more.",
                        PlusCardTextTwo: "Python and Ruby are both powerful, high-level programming languages. This article compares their features, strengths and more.",
                        PlusCardTextThree: "JavaScript is a dynamic scripting language, while TypeScript is a superset of JavaScript with optional static typing, providing enhanced code maintainability and scalability.",
                        PlusCardTextFour: "Asynchronous programming in JavaScript enables non-blocking operations, allowing for more efficient code execution.",
                        PlusCardButtonOne: "More Information",
                        PlusCardButtonTwo: "More Information",
                        PlusCardButtonThree: "More Information",
                        PlusCardButtonFour: "More Information"
                    };
                    elements(data);
                }

                function tranlateBlogsEightToGerman() {
                    const data = {
                        titleHeader: "Erkundung neuer Funktionen in der neuesten Version von C#",
                        textHeaderOne: "Dieser Artikel untersucht diese Updates und zeigt, wie Sie sie in Ihren Projekten nutzen können, um Ihre Codierungseffizienz zu verbessern.",
                        smallTextHeader: "Mehr erfahren &rarr;",
                        blogTextOne: "Die neueste Version von C# führt mehrere leistungsstarke Funktionen ein, die die Produktivität der Entwickler und die Codeeffizienz verbessern. Das Verständnis dieser neuen Funktionen ist für die moderne C#-Entwicklung unerlässlich.",
                        blogTextSecond: "&#9679; <b>Record-Typen</b>: Vereinfacht die Erstellung von unveränderlichen Datenobjekten mit prägnanter Syntax und verbessert das Datenmanagement. <br><br> &#9679; <b>Init-Only Setters</b>: Ermöglicht das Setzen von Eigenschaften während der Objektinitialisierung und verbessert die Codesicherheit.",
                        blogTextThird: "&#9679; <b>Top-Level-Anweisungen</b>: Reduziert Boilerplate-Code, indem Anweisungen direkt im Namensraum erlaubt werden, was Skripte und einfache Programme prägnanter macht. <br><br> &#9679; <b>Verbesserte Pattern Matching</b>: Erweitert die Möglichkeiten des Pattern Matchings, um die Kontrollfluss und die Datenmanipulation zu verbessern.",
                        blogTextFour: "&#9679; <b>Records mit Wertgleichheit</b>: Stellt sicher, dass zwei Datensätze mit denselben Daten als gleich betrachtet werden, was Vergleiche und Tests erleichtert.",
                        blogTextFive: "&#9679; <b>Init-Only Properties</b>: Erlaubt das Setzen von Eigenschaften nur während der Objekterstellung und verbessert die Unveränderlichkeit. <br><br> &#9679; <b>Verbessertes Pattern Matching</b>: Bietet anspruchsvollere Möglichkeiten, Daten zu destrukturieren und zu analysieren.",
                        blogTextSix: "&#9679; <b>Init-Only Properties</b>: Erlaubt das Setzen von Eigenschaften nur während der Objekterstellung und verbessert die Unveränderlichkeit. <br><br> &#9679; <b>Verbessertes Pattern Matching</b>: Bietet anspruchsvollere Möglichkeiten, Daten zu destrukturieren und zu analysieren.",
                        blogTextSeven: "&#9679; <b>Verbesserte Leistung</b>: Verschiedene Optimierungen in der Laufzeit und den Bibliotheken führen zu einer besseren Leistung und Ressourcenverwaltung.",
                        blogTitleOne: "1. Einführung in neue Funktionen",
                        blogTitleSecond: "2. Record-Typen und Init-Only Setters",
                        blogTitleThird: "3. Top-Level-Anweisungen und Verbesserte Pattern Matching",
                        blogTitleFour: "4. Wertgleichheit in Records",
                        blogTitleFive: "5. Init-Only Properties und Verbessertes Pattern Matching",
                        blogTitleSix: "6. Leistungsverbesserungen und Fazit",
                        PlusCardTitleOne: "Am häufigsten gestellte Interviewfragen für C#",
                        PlusCardTitleTwo: "Python vs. Ruby: Welche Sprache sollten Sie lernen?",
                        PlusCardTitleThree: "JavaScript vs TypeScript",
                        PlusCardTitleFour: "Verständnis für asynchrones Programmieren in JavaScript",
                        PlusCardTextOne: "Häufig gestellte C#-Interviewfragen behandeln Themen wie abstrakte Klassen vs. Schnittstellen, Speicherverwaltung, Zeichenkettenmanipulation und mehr.",
                        PlusCardTextTwo: "Python und Ruby sind beide leistungsstarke, hochrangige Programmiersprachen. Dieser Artikel vergleicht ihre Funktionen, Stärken und mehr.",
                        PlusCardTextThree: "JavaScript ist eine dynamische Skriptsprache, während TypeScript eine Erweiterung von JavaScript mit optionaler statischer Typisierung ist, die eine verbesserte Codepflege und Skalierbarkeit bietet.",
                        PlusCardTextFour: "Asynchrones Programmieren in JavaScript ermöglicht nicht-blockierende Operationen, was zu einer effizienteren Codeausführung führt.",
                        PlusCardButtonOne: "Mehr Informationen",
                        PlusCardButtonTwo: "Mehr Informationen",
                        PlusCardButtonThree: "Mehr Informationen",
                        PlusCardButtonFour: "Mehr Informationen",

                    };
                    elements(data);
                }

                function tranlateBlogsEightToRussian() {
                    const data = {
                        titleHeader: "Изучение новых возможностей в последней версии C#",
                        textHeaderOne: "Эта статья обзорно рассматривает обновления и демонстрирует, как использовать их в ваших проектах для повышения эффективности кодирования.",
                        smallTextHeader: "Узнать больше &rarr;",
                        blogTextOne: "В последней версии C# внедрено несколько мощных функций, которые повышают продуктивность разработчика и эффективность кода. Понимание этих новых функций необходимо для современной разработки на C#.",
                        blogTextSecond: "&#9679; <b>Типы записей</b>: Упрощает создание неизменяемых объектов данных с кратким синтаксисом, улучшая управление данными. <br><br> &#9679; <b>Init-Only Setters</b>: Позволяет устанавливать свойства во время инициализации объекта, повышая безопасность кода.",
                        blogTextThird: "&#9679; <b>Операторы на верхнем уровне</b>: Сокращает шаблонный код, позволяя выполнять операторы напрямую в пространстве имен, делая скрипты и простые программы более краткими. <br><br> &#9679; <b>Улучшения в сопоставлении шаблонов</b>: Расширяет возможности сопоставления шаблонов для улучшения управления потоком и манипуляций с данными.",
                        blogTextFour: "&#9679; <b>Записи с равенством значений</b>: Обеспечивает, что две записи с одинаковыми данными считаются равными, упрощая сравнение и тестирование.",
                        blogTextFive: "&#9679; <b>Свойства с доступом только для инициализации</b>: Позволяет устанавливать свойства только во время конструирования объекта, улучшая неизменяемость. <br><br> &#9679; <b>Улучшенное сопоставление шаблонов</b>: Предлагает более сложные способы деконструкции и анализа данных.",
                        blogTextSix: "&#9679; <b>Свойства с доступом только для инициализации</b>: Позволяет устанавливать свойства только во время конструирования объекта, улучшая неизменяемость. <br><br> &#9679; <b>Улучшенное сопоставление шаблонов</b>: Предлагает более сложные способы деконструкции и анализа данных.",
                        blogTextSeven: "&#9679; <b>Улучшенная производительность</b>: Различные оптимизации в среде выполнения и библиотеках приводят к лучшей производительности и управлению ресурсами.",
                        blogTitleOne: "1. Введение в новые функции",
                        blogTitleSecond: "2. Типы записей и свойства с доступом только для инициализации",
                        blogTitleThird: "3. Операторы на верхнем уровне и улучшения в сопоставлении шаблонов",
                        blogTitleFour: "4. Равенство значений в записях",
                        blogTitleFive: "5. Свойства с доступом только для инициализации и улучшенное сопоставление шаблонов",
                        blogTitleSix: "6. Улучшения производительности и заключение",
                        PlusCardTitleOne: "Самые часто задаваемые вопросы на собеседованиях по C#",
                        PlusCardTitleTwo: "Python против Ruby: Какой язык следует изучать?",
                        PlusCardTitleThree: "JavaScript против TypeScript",
                        PlusCardTitleFour: "Понимание асинхронного программирования в JavaScript",
                        PlusCardTextOne: "Часто задаваемые вопросы на собеседованиях по C# охватывают такие темы, как абстрактные классы против интерфейсов, управление памятью, манипуляции со строками и многое другое.",
                        PlusCardTextTwo: "Python и Ruby - оба мощные, высокоуровневые языки программирования. Эта статья сравнивает их особенности, преимущества и многое другое.",
                        PlusCardTextThree: "JavaScript - это динамический скриптовый язык, в то время как TypeScript является надмножеством JavaScript с опциональной статической типизацией, обеспечивающий улучшенную поддержку и масштабируемость кода.",
                        PlusCardTextFour: "Асинхронное программирование в JavaScript позволяет выполнять неблокирующие операции, что обеспечивает более эффективное выполнение кода.",
                        PlusCardButtonOne: "Узнать больше",
                        PlusCardButtonTwo: "Узнать больше",
                        PlusCardButtonThree: "Узнать больше",
                        PlusCardButtonFour: "Узнать больше"
                    };
                    elements(data);
                }

                function tranlateBlogsEightToBulgarian() {
                    const data = {
                        titleHeader: "Изследване на новите функции в последната версия на C#",
                        textHeaderOne: "Тази статия преглежда тези актуализации и демонстрира как да ги използвате в проектите си, за да подобрите ефективността на кодирането.",
                        smallTextHeader: "Прочети още &rarr;",
                        blogTextOne: "Най-новата версия на C# въвежда няколко мощни функции, които подобряват продуктивността на разработчика и ефективността на кода. Разбирането на тези нови функции е от съществено значение за модерното развитие на C#.",
                        blogTextSecond: "&#9679; <b>Типове записи (Record Types)</b>: Опростява създаването на неизменяеми обекти с кратък синтаксис, подобрява управлението на данните. <br><br> &#9679; <b>Инициализатори само по време на създаване (Init-Only Setters)</b>: Позволява задаването на свойства по време на инициализация на обект, подобрявайки безопасността на кода.",
                        blogTextThird: "&#9679; <b>Изявления на върхно ниво (Top-level Statements)</b>: Намалява кода за излишни действия, като позволява изявления директно в пространството имена, правейки скриптове и прости програми по-кратки. <br><br> &#9679; <b>Подобрения в шаблонното съвпадение (Pattern Matching Enhancements)</b>: Разширява възможностите на шаблонното съвпадение за подобряване на контрола на потока и манипулирането на данните.",
                        blogTextFour: "&#9679; <b>Записи с равенство на стойността (Records with Value Equality)</b>: Осигурява, че две записи с еднакви данни се считат за равни, улеснявайки сравнението и тестването.",
                        blogTextFive: "&#9679; <b>Инициализатори само по време на създаване (Init-Only Properties)</b>: Позволява задаването на свойства само по време на конструиране на обект, подобрявайки неизменяемостта. <br><br> &#9679; <b>Подобрено шаблонно съвпадение (Enhanced Pattern Matching)</b>: Предлага по-сложни начини за разглобяване и анализ на данни.",
                        blogTextSix: "&#9679; <b>Инициализатори само по време на създаване (Init-Only Properties)</b>: Позволява задаването на свойства само по време на конструиране на обект, подобрявайки неизменяемостта. <br><br> &#9679; <b>Подобрено шаблонно съвпадение (Enhanced Pattern Matching)</b>: Предлага по-сложни начини за разглобяване и анализ на данни.",
                        blogTextSeven: "&#9679; <b>Подобрение на производителността (Improved Performance)</b>: Различни оптимизации във времето за изпълнение и библиотеките водят до по-добра производителност и управление на ресурсите.",
                        blogTitleOne: "1. Въведение в новите функции",
                        blogTitleSecond: "2. Типове записи и инициализатори само по време на създаване",
                        blogTitleThird: "3. Изявления на върхно ниво и подобрения в шаблонното съвпадение",
                        blogTitleFour: "4. Равенство на стойността в записите",
                        blogTitleFive: "5. Инициализатори само по време на създаване и подобрено шаблонно съвпадение",
                        blogTitleSix: "6. Подобрения в производителността и заключение",
                        PlusCardTitleOne: "Най-често задавани интервю въпроси за C#",
                        PlusCardTitleTwo: "Python срещу Ruby: Кой език следва да научите?",
                        PlusCardTitleThree: "JavaScript срещу TypeScript",
                        PlusCardTitleFour: "Разбиране на асинхронното програмиране в JavaScript",
                        PlusCardTextOne: "Общите въпроси за интервюта на C# обхващат теми като абстрактни класове срещу интерфейси, управление на паметта, манипулиране на низове и други.",
                        PlusCardTextTwo: "Python и Ruby са два мощни, високо нивови езика за програмиране. Тази статия сравнява техните функции, силните страни и други.",
                        PlusCardTextThree: "JavaScript е динамичен скриптов език, докато TypeScript е надмножество на JavaScript с опционално статично типизиране, което осигурява подобрено поддържане и скалируемост на кода.",
                        PlusCardTextFour: "Асинхронното програмиране в JavaScript позволява не-блокиращи операции, което води до по-ефективно изпълнение на кода.",
                        PlusCardButtonOne: "Научете повече",
                        PlusCardButtonTwo: "Научете повече",
                        PlusCardButtonThree: "Научете повече",
                        PlusCardButtonFour: "Научете повече"
                    };
                    elements(data);
                }
            }
            else if (checkLocalStorage("9")) {
                if (locale === "bg-BG") {
                    tranlateBlogsNineToBulgarian();
                }
                else if (locale === "en-GB") {
                    tranlateBlogsNineToEnglish();
                }
                else if (locale === "de-DE") {
                    tranlateBlogsNineToGerman();
                }
                else if (locale === "ru-RU") {
                    tranlateBlogsNineToRussian();
                }

                function tranlateBlogsNineToEnglish() {
                    const data = {
                        titleHeader: "Introduction to Machine Learning with Python",
                        textHeaderOne: "Machine learning is a rapidly growing field with diverse applications. This article introduces the basics of machine learning using Python.",
                        smallTextHeader: "Read more &rarr;",
                        blogTextOne: "Machine learning (ML) is a subset of artificial intelligence that focuses on building systems that learn from data and improve their performance over time. Python is a popular language for ML due to its simplicity and extensive libraries.",
                        blogTextSecond: "&#9679; <b>Scikit-learn</b>: A powerful library for ML, providing simple and efficient tools for data mining and data analysis. <br><br> &#9679; <b>Pandas</b>: A library offering data structures and data analysis tools, crucial for data preprocessing in ML.",
                        blogTextThird: "&#9679; <b>NumPy</b>: Provides support for large multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays. <br><br> &#9679; <b>Matplotlib</b>: A plotting library used for creating static, animated, and interactive visualizations in Python.",
                        blogTextFour: "&#9679> <b>Data Preprocessing</b>: Involves cleaning and transforming raw data into a suitable format for analysis. Techniques include handling missing values, normalization, and encoding categorical variables.",
                        blogTextFive: "&#9679; <b>Model Training</b>: The process of feeding data into an ML algorithm to learn patterns and make predictions. <br><br> &#9679; <b>Model Evaluation</b>: Assessing the performance of an ML model using metrics like accuracy, precision, recall, and F1-score.",
                        blogTextSix: "&#9679; <b>Deep Learning</b>: A subset of ML that uses neural networks with many layers to model complex patterns in data. Popular frameworks include TensorFlow and Keras.",
                        blogTextSeven: "&#9679; <b>Deep Learning</b>: A subset of ML that uses neural networks with many layers to model complex patterns in data. Popular frameworks include TensorFlow and Keras.",
                        blogTitleOne: "1. Introduction to Machine Learning",
                        blogTitleSecond: "2. Essential Libraries: Scikit-learn and Pandas",
                        blogTitleThird: "3. NumPy and Matplotlib for Data Handling and Visualization",
                        blogTitleFour: "4. Data Preprocessing Techniques",
                        blogTitleFive: "5. Model Training and Evaluation",
                        blogTitleSix: "6. Deep Learning with Python",
                        PlusCardTitleOne: "Most commonly asked interview questions for C#",
                        PlusCardTitleTwo: "Python vs. Ruby: Which Language Should You Learn?",
                        PlusCardTitleThree: "JavaScript vs TypeScript",
                        PlusCardTitleFour: "Understanding Asynchronous Programming in JavaScript",
                        PlusCardTextOne: "Common C# interview questions cover topics like abstract classes vs. interfaces, memory management, string manipulation and more.",
                        PlusCardTextTwo: "Python and Ruby are both powerful, high-level programming languages. This article compares their features, strengths and more.",
                        PlusCardTextThree: "JavaScript is a dynamic scripting language, while TypeScript is a superset of JavaScript with optional static typing, providing enhanced code maintainability and scalability.",
                        PlusCardTextFour: "Asynchronous programming in JavaScript enables non-blocking operations, allowing for more efficient code execution.",
                        PlusCardButtonOne: "More Information",
                        PlusCardButtonTwo: "More Information",
                        PlusCardButtonThree: "More Information",
                        PlusCardButtonFour: "More Information"
                    };
                    elements(data);
                }

                function tranlateBlogsNineToGerman() {
                    const data = {
                        titleHeader: "Einführung in maschinelles Lernen mit Python",
                        textHeaderOne: "Maschinelles Lernen ist ein stark wachsendes Feld mit vielfältigen Anwendungen. Dieser Artikel führt in die Grundlagen des maschinellen Lernens mit Python ein.",
                        smallTextHeader: "Mehr lesen &rarr;",
                        blogTextOne: "Maschinelles Lernen (ML) ist ein Teilgebiet der künstlichen Intelligenz, das sich darauf konzentriert, Systeme zu entwickeln, die aus Daten lernen und im Laufe der Zeit ihre Leistung verbessern. Python ist aufgrund seiner Einfachheit und umfangreichen Bibliotheken eine beliebte Sprache für ML.",
                        blogTextSecond: "&#9679; <b>Scikit-learn</b>: Eine leistungsstarke Bibliothek für ML, die einfache und effiziente Werkzeuge für Data Mining und Datenanalyse bereitstellt. <br><br> &#9679; <b>Pandas</b>: Eine Bibliothek, die Datenstrukturen und Werkzeuge für die Datenanalyse bietet, die für die Datenpräprozessierung in ML entscheidend sind.",
                        blogTextThird: "&#9679; <b>NumPy</b>: Bietet Unterstützung für große multidimensionale Arrays und Matrizen sowie eine Sammlung mathematischer Funktionen zur Bearbeitung dieser Arrays. <br><br> &#9679; <b>Matplotlib</b>: Eine Plotting-Bibliothek, die zur Erstellung statischer, animierter und interaktiver Visualisierungen in Python verwendet wird.",
                        blogTextFour: "&#9679> <b>Datenpräprozessierung</b>: Umfasst die Reinigung und Transformation von Rohdaten in ein geeignetes Format für die Analyse. Techniken umfassen die Behandlung von fehlenden Werten, Normalisierung und die Kodierung kategorischer Variablen.",
                        blogTextFive: "&#9679; <b>Modelltraining</b>: Der Prozess, Daten in einen ML-Algorithmus einzuspeisen, um Muster zu erlernen und Vorhersagen zu treffen. <br><br> &#9679; <b>Modellbewertung</b>: Bewertung der Leistung eines ML-Modells mithilfe von Metriken wie Genauigkeit, Präzision, Recall und F1-Score.",
                        blogTextSix: "&#9679; <b>Deep Learning</b>: Ein Teilbereich des ML, der neuronale Netzwerke mit vielen Schichten verwendet, um komplexe Muster in Daten zu modellieren. Beliebte Frameworks sind TensorFlow und Keras.",
                        blogTextSeven: "&#9679; <b>Deep Learning</b>: Ein Teilbereich des ML, der neuronale Netzwerke mit vielen Schichten verwendet, um komplexe Muster in Daten zu modellieren. Beliebte Frameworks sind TensorFlow und Keras.",
                        blogTitleOne: "1. Einführung in maschinelles Lernen",
                        blogTitleSecond: "2. Wichtige Bibliotheken: Scikit-learn und Pandas",
                        blogTitleThird: "3. NumPy und Matplotlib zur Datenverarbeitung und Visualisierung",
                        blogTitleFour: "4. Techniken zur Datenpräprozessierung",
                        blogTitleFive: "5. Modelltraining und -bewertung",
                        blogTitleSix: "6. Deep Learning mit Python",
                        PlusCardTitleOne: "Am häufigsten gestellte Interviewfragen für C#",
                        PlusCardTitleTwo: "Python vs. Ruby: Welche Sprache sollten Sie lernen?",
                        PlusCardTitleThree: "JavaScript vs. TypeScript",
                        PlusCardTitleFour: "Verständnis der asynchronen Programmierung in JavaScript",
                        PlusCardTextOne: "Häufig gestellte Fragen zu C# behandeln Themen wie abstrakte Klassen vs. Schnittstellen, Speicherverwaltung, Zeichenkettenmanipulation und mehr.",
                        PlusCardTextTwo: "Python und Ruby sind beide leistungsstarke, hochrangige Programmiersprachen. Dieser Artikel vergleicht ihre Funktionen, Stärken und mehr.",
                        PlusCardTextThree: "JavaScript ist eine dynamische Skriptsprache, während TypeScript eine Erweiterung von JavaScript mit optionaler statischer Typisierung ist, die die Wartbarkeit und Skalierbarkeit des Codes verbessert.",
                        PlusCardTextFour: "Asynchrone Programmierung in JavaScript ermöglicht nicht blockierende Operationen, was zu einer effizienteren Codeausführung führt.",
                        PlusCardButtonOne: "Mehr Informationen",
                        PlusCardButtonTwo: "Mehr Informationen",
                        PlusCardButtonThree: "Mehr Informationen",
                        PlusCardButtonFour: "Mehr Informationen"
                    };
                    elements(data);
                }

                function tranlateBlogsNineToRussian() {
                    const data = {
                        titleHeader: "Введение в машинное обучение с использованием Python",
                        textHeaderOne: "Машинное обучение — быстро развивающаяся область с разнообразными применениями. Этот статья вводит основы машинного обучения с использованием Python.",
                        smallTextHeader: "Читать далее &rarr;",
                        blogTextOne: "Машинное обучение (ML) — это подраздел искусственного интеллекта, который фокусируется на создании систем, способных учиться на основе данных и улучшать свою производительность со временем. Python является популярным языком для ML благодаря своей простоте и обширным библиотекам.",
                        blogTextSecond: "&#9679; <b>Scikit-learn</b>: Мощная библиотека для ML, предоставляющая простые и эффективные инструменты для обработки данных и анализа. <br><br> &#9679; <b>Pandas</b>: Библиотека, предлагающая структуры данных и инструменты для анализа данных, важные для предобработки данных в ML.",
                        blogTextThird: "&#9679; <b>NumPy</b>: Поддержка больших многомерных массивов и матриц, а также коллекция математических функций для работы с этими массивами. <br><br> &#9679; <b>Matplotlib</b>: Библиотека для создания статических, анимированных и интерактивных визуализаций на Python.",
                        blogTextFour: "&#9679> <b>Предобработка данных</b>: Включает в себя очистку и преобразование необработанных данных в подходящий формат для анализа. Техники включают обработку пропущенных значений, нормализацию и кодирование категориальных переменных.",
                        blogTextFive: "&#9679; <b>Обучение модели</b>: Процесс подачи данных в ML-алгоритм для изучения паттернов и прогнозирования. <br><br> &#9679; <b>Оценка модели</b>: Оценка производительности ML-модели с использованием метрик, таких как точность, точность, полнота и F1-мера.",
                        blogTextSix: "&#9679; <b>Глубокое обучение</b>: Подраздел ML, который использует нейронные сети с множеством слоев для моделирования сложных паттернов в данных. Популярные фреймворки включают TensorFlow и Keras.",
                        blogTextSeven: "&#9679; <b>Глубокое обучение</b>: Подраздел ML, который использует нейронные сети с множеством слоев для моделирования сложных паттернов в данных. Популярные фреймворки включают TensorFlow и Keras.",
                        blogTitleOne: "1. Введение в машинное обучение",
                        blogTitleSecond: "2. Основные библиотеки: Scikit-learn и Pandas",
                        blogTitleThird: "3. NumPy и Matplotlib для обработки данных и визуализации",
                        blogTitleFour: "4. Техники предобработки данных",
                        blogTitleFive: "5. Обучение и оценка модели",
                        blogTitleSix: "6. Глубокое обучение с Python",
                        PlusCardTitleOne: "Самые часто задаваемые вопросы на собеседованиях по C#",
                        PlusCardTitleTwo: "Python против Ruby: Какой язык стоит изучить?",
                        PlusCardTitleThree: "JavaScript против TypeScript",
                        PlusCardTitleFour: "Понимание асинхронного программирования в JavaScript",
                        PlusCardTextOne: "Часто задаваемые вопросы на собеседованиях по C# охватывают такие темы, как абстрактные классы против интерфейсов, управление памятью, манипуляции со строками и многое другое.",
                        PlusCardTextTwo: "Python и Ruby — оба мощные, высокоуровневые языки программирования. Этот статья сравнивает их особенности, сильные стороны и многое другое.",
                        PlusCardTextThree: "JavaScript — динамический язык сценариев, в то время как TypeScript — это надмножество JavaScript с необязательной статической типизацией, обеспечивающее улучшенную поддержку поддержку кода и масштабируемость.",
                        PlusCardTextFour: "Асинхронное программирование в JavaScript позволяет выполнять неблокирующие операции, обеспечивая более эффективное выполнение кода.",
                        PlusCardButtonOne: "Узнать больше",
                        PlusCardButtonTwo: "Узнать больше",
                        PlusCardButtonThree: "Узнать больше",
                        PlusCardButtonFour: "Узнать больше"
                    };
                    elements(data);
                }

                function tranlateBlogsNineToBulgarian() {
                    const data = {
                        titleHeader: "Въведение в машинното обучение с Python",
                        textHeaderOne: "Машинното обучение е бързоразвиваща се област с разнообразни приложения. Тази статия представя основите на машинното обучение с използване на Python.",
                        smallTextHeader: "Прочети още &rarr;",
                        blogTextOne: "Машинното обучение (ML) е подмножество на изкуствен интелект, което се фокусира върху създаването на системи, които учат от данни и подобряват своите умения с времето. Python е популярен език за ML благодарение на своята простота и обширни библиотеки.",
                        blogTextSecond: "&#9679; <b>Scikit-learn</b>: Мощна библиотека за ML, предоставяща прости и ефективни инструменти за извличане и анализ на данни. <br><br> &#9679; <b>Pandas</b>: Библиотека, предлагаща структури за данни и инструменти за анализ, от решаващо значение за предобработката на данни в ML.",
                        blogTextThird: "&#9679; <b>NumPy</b>: Поддържа големи многомерни масиви и матрици, заедно с колекция от математически функции за работа с тези масиви. <br><br> &#9679; <b>Matplotlib</b>: Библиотека за създаване на статични, анимирани и интерактивни визуализации в Python.",
                        blogTextFour: "&#9679> <b>Предобработка на данни</b>: Включва почистване и трансформиране на сурови данни в подходящ формат за анализ. Техниките включват обработка на липсващи стойности, нормализация и кодиране на категорийни променливи.",
                        blogTextFive: "&#9679; <b>Обучение на модела</b>: Процесът на подаване на данни в ML алгоритъм за изучаване на модели и правене на прогнози. <br><br> &#9679; <b>Оценка на модела</b>: Оценяване на производителността на ML модела с използване на метрики като точност, прецизност, отзив и F1-мера.",
                        blogTextSix: "&#9679; <b>Дълбоко обучение</b>: Подмножество на ML, което използва невронни мрежи с много слоеве за моделиране на сложни шаблони в данни. Популярни рамки включват TensorFlow и Keras.",
                        blogTextSeven: "&#9679; <b>Дълбоко обучение</b>: Подмножество на ML, което използва невронни мрежи с много слоеве за моделиране на сложни шаблони в данни. Популярни рамки включват TensorFlow и Keras.",
                        blogTitleOne: "1. Въведение в машинното обучение",
                        blogTitleSecond: "2. Основни библиотеки: Scikit-learn и Pandas",
                        blogTitleThird: "3. NumPy и Matplotlib за обработка на данни и визуализация",
                        blogTitleFour: "4. Техники за предобработка на данни",
                        blogTitleFive: "5. Обучение и оценка на модела",
                        blogTitleSix: "6. Дълбоко обучение с Python",
                        PlusCardTitleOne: "Най-често задавани въпроси на интервюта за C#",
                        PlusCardTitleTwo: "Python срещу Ruby: Кой език да научите?",
                        PlusCardTitleThree: "JavaScript срещу TypeScript",
                        PlusCardTitleFour: "Разбиране на асинхронното програмиране в JavaScript",
                        PlusCardTextOne: "Често задаваните въпроси на интервюта за C# обхващат теми като абстрактни класове срещу интерфейси, управление на паметта, манипулация на низове и други.",
                        PlusCardTextTwo: "Python и Ruby са и двата мощни, високо ниво програмни езици. Тази статия сравнява техните функции, силни страни и други.",
                        PlusCardTextThree: "JavaScript е динамичен скриптов език, докато TypeScript е надмножество на JavaScript със статично типизиране, което осигурява подобрена поддръжка и скалируемост на кода.",
                        PlusCardTextFour: "Асинхронното програмиране в JavaScript позволява изпълнението на неблокиращи операции, което води до по-ефективно изпълнение на кода.",
                        PlusCardButtonOne: "Научете повече",
                        PlusCardButtonTwo: "Научете повече",
                        PlusCardButtonThree: "Научете повече",
                        PlusCardButtonFour: "Научете повече"
                    };
                    elements(data);
                }
            }
        }
        else {
            const navbarHome = document.getElementById('navbar-home');
            const navbarAbout = document.getElementById('navbar-about');
            const navbarServices = document.getElementById('navbar-services');
            const navbarSkills = document.getElementById('navbar-skills');
            const navbarCertificate = document.getElementById('navbar-certificate');
            const navbarProjects = document.getElementById('navbar-projects');
            const navbarContact = document.getElementById('navbar-contact');

            const homeTextOne = document.getElementById('homeTextOne');
            const homeName = document.getElementById('homeName');
            const homeTextTwo = document.getElementById('homeTextTwo');
            const homeTextThree = document.getElementById('homeTextThree');

            const aboutMeTitle = document.getElementById('aboutMeTitle');
            const aboutMeTextOne = document.getElementById('aboutMeTextOne');
            const aboutMeTextTwo = document.getElementById('aboutMeTextTwo');
            const aboutMeCV = document.getElementById('aboutMeCV');

            const servicesTitle = document.getElementById('servicesTitle');
            const cardOneText = document.getElementById('cardOneText');
            const cardTwoText = document.getElementById('spm');
            const cardThreeText = document.getElementById('cardThreeText');
            const cardFourText = document.getElementById('cardFourText');

            const mbtiTitle = document.getElementById('mbtiTitle');
            const personalityText = document.getElementById('personalityText');
            const type = document.getElementById('type');
            const textINTJ = document.getElementById('textINTJ');
            const mbtiButtonText = document.getElementById('mbtiButtonText');
            const leftTitleMBTI = document.getElementById('leftTitleMBTI');

            const progressOneTextOfficial = document.getElementById('progressOneTextOfficial');
            const progressOneTextOne = document.getElementById('progressOneTextOne');
            const progressOneTextTwo = document.getElementById('progressOneTextTwo');

            const progressTwoTextOfficial = document.getElementById('progressTwoTextOfficial');
            const progressTwoTextOne = document.getElementById('progressTwoTextOne');
            const progressTwoTextTwo = document.getElementById('progressTwoTextTwo');

            const progressThreeTextOfficial = document.getElementById('progressThreeTextOfficial');
            const progressThreeTextOne = document.getElementById('progressThreeTextOne');
            const progressThreeTextTwo = document.getElementById('progressThreeTextTwo');

            const progressFourTextOfficial = document.getElementById('progressFourTextOfficial');
            const progressFourTextOne = document.getElementById('progressFourTextOne');
            const progressFourTextTwo = document.getElementById('progressFourTextTwo');

            const progressFiveTextOfficial = document.getElementById('progressFiveTextOfficial');
            const progressFiveTextOne = document.getElementById('progressFiveTextOne');
            const progressFiveTextTwo = document.getElementById('progressFiveTextTwo');

            const servicesTitleNew = document.getElementById('servicesTitleNew');
            const firstBoxFromServicesTitle = document.getElementById('firstBoxFromServicesTitle');
            const firstBoxFromServicesText = document.getElementById('firstBoxFromServicesText');

            const secondBoxFromServicesTitle = document.getElementById('secondBoxFromServicesTitle');
            const secondBoxFromServicesText = document.getElementById('secondBoxFromServicesText');

            const thirdBoxFromServicesTitle = document.getElementById('thirdBoxFromServicesTitle');
            const thirdBoxFromServicesText = document.getElementById('thirdBoxFromServicesText');

            const fourBoxFromServicesTitle = document.getElementById('fourBoxFromServicesTitle');
            const fourBoxFromServicesText = document.getElementById('fourBoxFromServicesText');

            const fiveBoxFromServicesTitle = document.getElementById('fiveBoxFromServicesTitle');
            const fiveBoxFromServicesText = document.getElementById('fiveBoxFromServicesText');

            const sixBoxFromServicesTitle = document.getElementById('sixBoxFromServicesTitle');
            const sixBoxFromServicesText = document.getElementById('sixBoxFromServicesText');

            const blogTitle = document.getElementById('blogTitle');
            const blogCardOneTopic = document.getElementById('blog-card-one-topic');
            const blogOneTitle = document.getElementById('blog-one-title');
            const blogOneText = document.getElementById('blog-one-text');

            const blogCardTwoTopic = document.getElementById('blog-card-two-topic');
            const blogTwoTitle = document.getElementById('blog-two-title');
            const blogTwoText = document.getElementById('blog-two-text');

            const blogCardThreeTopic = document.getElementById('blog-card-three-topic');
            const blogThreeTitle = document.getElementById('blog-three-title');
            const blogThreeText = document.getElementById('blog-three-text');

            const blogCardFourTopic = document.getElementById('blog-card-four-topic');
            const blogFourTitle = document.getElementById('blog-four-title');
            const blogFourText = document.getElementById('blog-four-text');

            const priceTitle = document.getElementById('storeTitle');
            const priceCardOneTitle = document.getElementById('price-card-one-title');
            const priceCardOneText = document.getElementById('price-card-one-text');

            const priceCardTwoTitle = document.getElementById('price-card-two-title');
            const priceCardTwoText = document.getElementById('price-card-two-text');

            const priceCardThreeTitle = document.getElementById('price-card-three-title');
            const priceCardThreeText = document.getElementById('price-card-three-text');

            const skillsTitle = document.getElementById('skillsTitle');
            const skillsTitleText = document.getElementById('skillsTitleText');
            const skillsText = document.getElementById('skillsText');
            const skillsButtonText = document.getElementById('skillsButtonText');

            const projectsTitle = document.getElementById('projectsTitle');

            const contactTitle = document.getElementById('contactTitle');
            const contactTextOne = document.getElementById('contactTextOne');
            const contactTextTwo = document.getElementById('contactTextTwo');

            const contactInfoUserTitle = document.getElementById('contactInfoUserTitle');
            const contactInfoUserText = document.getElementById('contactInfoUserText');

            const contactInfoAddressTitle = document.getElementById('contactInfoAddressTitle');
            const contactInfoAddressText = document.getElementById('contactInfoAddressText');

            const contactInfoEmailTitle = document.getElementById('contactInfoEmailTitle');
            const contactInfoEmailText = document.getElementById('contactInfoEmailText');

            const messageText = document.getElementById('messageText');
            const buttonSendMessage = document.getElementById('buttonSendMessage');

            const nameInputFromContact = document.getElementById('nameInputFromContact');
            const emailInputFromContact = document.getElementById('emailInputFromContact');
            const subjectInputFromContact = document.getElementById('subjectInputFromContact');
            const messageInputFromContact = document.getElementById('messageInputFromContact');

            const copyright = document.getElementById('copyright');

            //dots for MBTI
            const imageIntj = document.getElementById('imageIntj');
            const dotType1 = document.getElementById('dotType1');
            const dotType2 = document.getElementById('dotType2');
            const dotType3 = document.getElementById('dotType3');


            //bar for MBTI
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

            function translateToBulgarianForIndexPage() {
                navbarHome.innerHTML = "Начало";
                navbarAbout.innerHTML = "За мен";
                navbarServices.innerHTML = "Услуги";
                navbarSkills.innerHTML = "Умения";
                navbarCertificate.innerHTML = "Сертификати";
                navbarProjects.innerHTML = "Проекти";
                navbarContact.innerHTML = "Контакти";

                homeTextOne.innerHTML = "Здравейте, моето име е";
                homeName.innerHTML = "Кадир Язаджи";
                homeTextTwo.innerHTML = "И аз съм";
                homeTextThree.innerHTML = "Наемете ме";

                aboutMeTitle.innerHTML = "За мен"
                aboutMeTextOne.innerHTML = "Аз съм Кадир Язаджи и съм";
                aboutMeTextTwo.innerHTML = "Аз съм 17 годишно, динамично и ентусиазирано момче, което търси работа като Уеб Дизайнер и Разработчик, главно специализиран в Front-End разработките. Вярвам в своите способности и ако и вие го направите, няма да съжалявате. Също така мога да работя в екип и нямам проблем с това да работя в предизвикателна среда. Идеите ми за проекти са иновативни и свежи с голям чувство за вкус. Добре съм запознат с няколко програмни езика, включително HTML, CSS, JavaScript, TypeScript, MySQL, PostgreSQL, Python, C++ и имам силно задължение към управлението на проекти и отношенията с клиенти.";
                aboutMeCV.innerHTML = "Свали CV";

                servicesTitle.innerHTML = "Проекти, които можете да ми предложите";
                cardOneText.innerHTML = "Уеб разработка";
                cardTwoText.innerHTML = "Разработка на бази данни";
                cardThreeText.innerHTML = "Разработка на дизайн";
                cardFourText.innerHTML = "Разработка на код";

                mbtiTitle.innerHTML = "Моят MBTI тип";
                mbtiButtonText.innerHTML = "Научи повече &rarr;";
                startPersonalData();
                leftTitleMBTI.innerHTML = "Моите черти";

                progressOneTextOfficial.innerHTML = "Интровертен";
                progressOneTextOne.innerHTML = "Интровертен";
                progressOneTextTwo.innerHTML = "Екстровертен";

                progressTwoTextOfficial.innerHTML = "Интуитивен";
                progressTwoTextOne.innerHTML = "Наблюдателен";
                progressTwoTextTwo.innerHTML = "Интуитивен";

                progressThreeTextOfficial.innerHTML = "Мислещ";
                progressThreeTextOne.innerHTML = "Мислещ";
                progressThreeTextTwo.innerHTML = "Чувстващ";

                progressFourTextOfficial.innerHTML = "Съдещ";
                progressFourTextOne.innerHTML = "Съдещ";
                progressFourTextTwo.innerHTML = "Изследващ";

                progressFiveTextOfficial.innerHTML = "Уверен";
                progressFiveTextOne.innerHTML = "Уверен";
                progressFiveTextTwo.innerHTML = "Неуверен";

                splink.innerHTML = 'НАУЧЕТЕ ПОВЕЧЕ';

                servicesTitleNew.innerHTML = "Моите услуги";
                firstBoxFromServicesTitle.innerHTML = "Дизайнер";
                firstBoxFromServicesText.innerHTML = "Аз съм новаторски дизайнер с огромно чувство за вкус. Създавам различни дизайни, които са уникални, точно като моите идеи. Лесно мога да възпроизведа желанията и нуждите на моите клиенти.";

                secondBoxFromServicesTitle.innerHTML = "Разработка";
                secondBoxFromServicesText.innerHTML = "В този цифров свят помагам на хората да изграждат своя бизнес и марка в дигитален формат, което е едно от най-големите оръжия на пазара.\n";

                thirdBoxFromServicesTitle.innerHTML = "SEO";
                thirdBoxFromServicesText.innerHTML = "Предлагам SEO за всеки бизнес, за да го позиционирам на първите места в Google търсенето, което помага на хората да го подобрят в резултатите на търсенето.";

                fourBoxFromServicesTitle.innerHTML = "Видео обработка";
                fourBoxFromServicesText.innerHTML = "В този конкурентен свят обработката на видео е необходима във всяка цифрова платформа. Повечето уебсайтове за електронна търговия се нуждаят от добре изглеждащи видеоклипове като рекламен метод, който привлича вниманието на клиентите.";

                fiveBoxFromServicesTitle.innerHTML = "Цифров маркетинг";
                fiveBoxFromServicesText.innerHTML = "Цифровият маркетинг е пряко свързан и много важен инструмент, който помага на хората да бъдат рекламирани дигитално, като ги привлича към техния бизнес.";

                sixBoxFromServicesTitle.innerHTML = "Разработка на приложения";
                sixBoxFromServicesText.innerHTML = "Приложенията са лесни за използване и добре структурирани за всички, които предпочитат тях пред уебсайтове. Те също помагат на хората в интерфейса на потребителя.";

                blogTitle.innerHTML = "Моят Блог";
                blogCardOneTopic.innerHTML = "ПРОГРАМИРАНЕ";
                blogOneTitle.innerHTML = "Защо JavaScript е толкова популярен?";
                blogOneText.innerHTML = "Популярността на JavaScript произтича от неговата гъвкавост както в клиентското, така и в сървърното разработване, подкрепена от огромна екосистема от библиотеки и фреймуъркове.";

                blogCardTwoTopic.innerHTML = "ПРОГРАМИРАНЕ";
                blogTwoTitle.innerHTML = "JavaScript срещу TypeScript";
                blogTwoText.innerHTML = "JavaScript е динамичен скриптов език, докато TypeScript е надмножество на JavaScript с опционално статично типизиране, което осигурява по-добра поддръжка и мащабируемост на кода.";

                blogCardThreeTopic.innerHTML = "ПРОГРАМИРАНЕ";
                blogThreeTitle.innerHTML = "Най-често задавани въпроси на интервю за C#";
                blogThreeText.innerHTML = "Обичайните въпроси за интервю на C# обхващат теми като абстрактни класове срещу интерфейси, управление на паметта, манипулация на стрингове и други.";

                blogCardFourTopic.innerHTML = "ПРОГРАМИРАНЕ";
                blogFourTitle.innerHTML = "Основи на обектно-ориентираното програмиране";
                blogFourText.innerHTML = "Разбирането на основите на обектно-ориентираното програмиране е от решаващо значение за изграждането на мащабируеми и лесни за поддръжка софтуерни системи.";

                priceTitle.innerHTML = "Моят Магазин";
                priceCardOneTitle.innerHTML = "Уебсайт с една страница";
                priceCardOneText.innerHTML = "Със HTML, CSS и Javascript";

                priceCardTwoTitle.innerHTML = "Уебсайт с една страница";
                priceCardTwoText.innerHTML = "Със React или Angular";

                priceCardThreeTitle.innerHTML = "Персонализиран уебсайт с няколко страници";
                priceCardThreeText.innerHTML = "С всички езици и фреймуъркове";

                skillsTitle.innerHTML = "Моите умения";
                skillsTitleText.innerHTML = "Моите креативни умения и опит.";
                skillsText.innerHTML = "<p id=\"skillsText\">Вдъхновен от страстта към иновациите, се развивам в динамичните предизвикателства на уеб разработката. Моята преданост към актуалните нови технологии гарантира, че предлагам революционни решения, персонализирани специално за вас. Нека сътрудничим, за да превърнем вашите идеи в зашеметяващи цифрови преживявания, оставящи дълбоко впечатление.\n" +
                    "                    <br><br>\n" +
                    "                    Владея уеб програмиране, управление на бази данни и много други. С няколко успешни уеб проекта в моето портфолио се специализирам в създаването на анимации, уеб приложения, респонсив дизайни и обширни проекти, пълни с функционалности. Моите умения включват владеене на HTML, CSS, JavaScript, TypeScript, MySQL, PostgreSQL, C++, Python и много други. Нека въздействаме на вашите цифрови визии с креативност, експертиза и прецизност.\n" +
                    "                    <br><br>\n" +
                    "                    Също така разполагам с опит като full-stack разработчик с популярни open-source CMS като (WordPress, bubble.io и други).\n" +
                    "                    <br>\n" +
                    "                    За повече подробности посетете моя<a href=\"#\" target=\"-blank\" id=\"link\">Facebook</a>профил и се свържете с мен.\n </p>";
                skillsButtonText.innerHTML = "Научете повече";

                projectsTitle.innerHTML = "Моите проекти";

                contactTitle.innerHTML = "Свържете се с мен";
                contactTextOne.innerHTML = "Вземете връзка";
                contactTextTwo.innerHTML = "Ако сте заинтересовани да работим заедно? Моля, попълнете формуляра отстрани с информация за вашия проект и ще се свържа с вас възможно най-скоро. Моля, отделете няколко дни за отговор.";

                contactInfoUserTitle.innerHTML = "Име:";
                contactInfoUserText.innerHTML = "Кадир Юсеин Язаджи";

                contactInfoAddressTitle.innerHTML = "Адрес:";
                contactInfoAddressText.innerHTML = "България";

                contactInfoEmailTitle.innerHTML = "Имейл:";
                contactInfoEmailText.innerHTML = "kyuya_2020g@pgiblg.com";

                messageText.innerHTML = "Изпратете ми съобщение";
                buttonSendMessage.innerHTML = "Изпрати съобщение";

                nameInputFromContact.placeholder = "Име";
                emailInputFromContact.placeholder = "Имейл";
                subjectInputFromContact.placeholder = "Тема";
                messageInputFromContact.placeholder = "Съобщение..";

                copyright.innerHTML = "Авторско право © 2024 - Всички права запазени || Дизайн от: Кадир Язаджи";
            }

            function translateToEnglishForIndexPage() {
                navbarHome.innerHTML = "Home";
                navbarAbout.innerHTML = "About me";
                navbarServices.innerHTML = "Services";
                navbarSkills.innerHTML = "Skills";
                navbarCertificate.innerHTML = "Certificates";
                navbarProjects.innerHTML = "Projects";
                navbarContact.innerHTML = "Contact";

                homeTextOne.innerHTML = "Hello, my name is";
                homeName.innerHTML = "Kadir Yazadzhi";
                homeTextTwo.innerHTML = "And I'm a";
                homeTextThree.innerHTML = "Hire me";

                aboutMeTitle.innerHTML = "About me"
                aboutMeTextOne.innerHTML = "I'm Kadir Yazadzhi and I am";
                aboutMeTextTwo.innerHTML = "I'm 17 years old, dynamic and enthusiastic boy looking for a job as Web Designer and Developer, mostly specific in front end development. I believe in my own abilities and if you do too, you won't regret it. I am also a team player who thrives in a challenging environment. My project ideas are innovative and fresh with big sense of taste. I am well-versed in numerous of programming languages including HTML, CSS, JavaScript, TypeScript, MySQL, PostgreSQL, Python, C++ and I have strong background in project management and customer relations.";
                aboutMeCV.innerHTML = "Download CV";

                servicesTitle.innerHTML = "Projects you can offer me";
                cardOneText.innerHTML = "Web Development";
                cardTwoText.innerHTML = "Database Development";
                cardThreeText.innerHTML = "Design Development";
                cardFourText.innerHTML = "Code Development";

                mbtiTitle.innerHTML = "My MBTI type";
                mbtiButtonText.innerHTML = "Learn more &rarr;";
                startPersonalData();
                leftTitleMBTI.innerHTML = "My Traits";

                progressOneTextOfficial.innerHTML = "Introverted";
                progressOneTextOne.innerHTML = "Introverted";
                progressOneTextTwo.innerHTML = "Extraverted";

                progressTwoTextOfficial.innerHTML = "Intuitive";
                progressTwoTextOne.innerHTML = "Observant";
                progressTwoTextTwo.innerHTML = "Intuitive";

                progressThreeTextOfficial.innerHTML = "Thinking";
                progressThreeTextOne.innerHTML = "Thinking";
                progressThreeTextTwo.innerHTML = "Feeling";

                progressFourTextOfficial.innerHTML = "Judging";
                progressFourTextOne.innerHTML = "Judging";
                progressFourTextTwo.innerHTML = "Prospecting";

                progressFiveTextOfficial.innerHTML = "Assertive";
                progressFiveTextOne.innerHTML = "Assertive";
                progressFiveTextTwo.innerHTML = "Turbulent";

                splink.innerHTML = 'LEARN MORE';

                servicesTitleNew.innerHTML = "My services";
                firstBoxFromServicesTitle.innerHTML = "Designer";
                firstBoxFromServicesText.innerHTML = "I am fresh designer with huge sense of taste. I have made different designs that are one of a kind, just like my ideas. I can easily give life to my customers wishes and needs.\n";

                secondBoxFromServicesTitle.innerHTML = "Development";
                secondBoxFromServicesText.innerHTML = "In this digital world I help people in building their business and brand digitally, which is one of the biggest market weapons.";

                thirdBoxFromServicesTitle.innerHTML = "SEO";
                thirdBoxFromServicesText.innerHTML = "I provide SEO in every business for getting it in first places, which help people to boost it in google search first.";

                fourBoxFromServicesTitle.innerHTML = "Video Editing";
                fourBoxFromServicesText.innerHTML = "In this competitive world video editing is necessary in any digital platform. Most of the eCommerce websites need a good-looking videos as an advertisement method, that catches the customer's eye.";

                fiveBoxFromServicesTitle.innerHTML = "Digital Marketing";
                fiveBoxFromServicesText.innerHTML = "Digital Marketing is directly connected and really important tool, that helps people to be advertised digitally which makes people more attracted to their business.";

                sixBoxFromServicesTitle.innerHTML = "App Development";
                sixBoxFromServicesText.innerHTML = "Apps are easy to use and well-structured for all the people that prefers them over websites. They also help people in user interface .";

                blogTitle.innerHTML = "My Blog";
                blogCardOneTopic.innerHTML = "CODING";
                blogOneTitle.innerHTML = "Why Javascript is so popular?";
                blogOneText.innerHTML = "JavaScript's popularity stems from its versatility in both client and server-side development, supported by a vast ecosystem of libraries and frameworks.";

                blogCardTwoTopic.innerHTML = "CODING";
                blogTwoTitle.innerHTML = "JavaScript vs TypeScript";
                blogTwoText.innerHTML = "JavaScript is a dynamic scripting language, while TypeScript is a superset of JavaScript with optional static typing, providing enhanced code maintainability and scalability.";

                blogCardThreeTopic.innerHTML = "CODING";
                blogThreeTitle.innerHTML = "Most commonly asked interview questions for C#";
                blogThreeText.innerHTML = "Common C# interview questions cover topics like abstract classes vs. interfaces, memory management, string manipulation and more.";

                blogCardFourTopic.innerHTML = "CODING";
                blogFourTitle.innerHTML = "Fundamentals of Object-Oriented Programming";
                blogFourText.innerHTML = "Understanding the fundamentals of Object-Oriented Programming is crucial for building scalable and maintainable software systems.";

                priceTitle.innerHTML = "My Store";
                priceCardOneTitle.innerHTML = "One Page Website";
                priceCardOneText.innerHTML = "With HTMl, CSS and Javascript";

                priceCardTwoTitle.innerHTML = "One Page Website";
                priceCardTwoText.innerHTML = "With React or Angular";

                priceCardThreeTitle.innerHTML = "Custom Multi-Page Website";
                priceCardThreeText.innerHTML = "With all language and frameworks";

                skillsTitle.innerHTML = "My skills";
                skillsTitleText.innerHTML = "My creative skills & experiences.";
                skillsText.innerHTML = "<p id=\"skillsText\">Driven by a passion for innovation, I thrive on the dynamic challenges of web development. My dedication is to stay on a current emerging technologies ensures that I deliver cutting-edge solutions tailored to your needs. Let's collaborate to turn your ideas into captivating digital experiences that leave a lasting impact.\n" +
                    "                    <br><br>\n" +
                    "                    I am proficient in web programming, database management, and more. With several successful web projects under my belt, I specialize in crafting animations, web applications, responsive designs, and extensive projects packed with functionalities. My skill set includes mastery of HTML, CSS, JavaScript, TypeScript, MySQL, PostgreSQL, C++, Python, and more. Let me bring your digital visions to life with creativity, expertise, and precision.\n" +
                    "                    <br><br>\n" +
                    "                    I also have full-stack developer experience with popular open-source CMS like (WordPress, bubble.io and others).\n" +
                    "                    <br>\n" +
                    "                    Visit my<a href=\"#\" target=\"-blank\" id=\"link\">Facebook</a>for more details<a href=\"#contact\" id=\"link\">contact</a>me.\n" +
                    "                </p>";
                skillsButtonText.innerHTML = "Learn more";

                projectsTitle.innerHTML = "My Projects";

                contactTitle.innerHTML = "Contact me";
                contactTextOne.innerHTML = "Get in Touch";
                contactTextTwo.innerHTML = "If you are interested in working together? Please fill out the form aside with some info about your project and I will get back to you as soon as I can. Please allow a couple days for me to respond.";

                contactInfoUserTitle.innerHTML = "Name:";
                contactInfoUserText.innerHTML = "Kadir Yusein Yazadzhi";

                contactInfoAddressTitle.innerHTML = "Address:";
                contactInfoAddressText.innerHTML = "Bulgaria";

                contactInfoEmailTitle.innerHTML = "Email:";
                contactInfoEmailText.innerHTML = "kyuya_2020g@pgiblg.com";

                messageText.innerHTML = "Message me";
                buttonSendMessage.innerHTML = "Send message";

                nameInputFromContact.placeholder = "Name";
                emailInputFromContact.placeholder = "Email";
                subjectInputFromContact.placeholder = "Subject";
                messageInputFromContact.placeholder = "Message..";

                copyright.innerHTML = "Copyright &copy; 2024 - All Rights Reserved || Designed By: Kadir Yazadzhi";
            }

            function translateToGermanForIndexPage() {
                navbarHome.innerHTML = "Startseite";
                navbarAbout.innerHTML = "Über mich";
                navbarServices.innerHTML = "Dienstleistungen";
                navbarSkills.innerHTML = "Fähigkeiten";
                navbarCertificate.innerHTML = "Zertifikate";
                navbarProjects.innerHTML = "Projekte";
                navbarContact.innerHTML = "Kontakt";

                homeTextOne.innerHTML = "Hallo, mein Name ist";
                homeName.innerHTML = "Kadir Yazadzhi";
                homeTextTwo.innerHTML = "Und ich bin ein";
                homeTextThree.innerHTML = "Mieten Sie mich";

                aboutMeTitle.innerHTML = "Über mich"
                aboutMeTextOne.innerHTML = "Ich bin Kadir Yazadzhi und ich bin";
                aboutMeTextTwo.innerHTML = "Ich bin 17 Jahre alt, ein dynamischer und begeisterter Junge, der einen Job als Webdesigner und -entwickler sucht, hauptsächlich spezialisiert auf Front-End-Entwicklungen. Ich glaube an meine eigenen Fähigkeiten und wenn Sie das auch tun, werden Sie es nicht bereuen. Ich kann auch im Team arbeiten und habe kein Problem damit, in einer herausfordernden Umgebung zu arbeiten. Meine Projektideen sind innovativ und frisch mit einem ausgeprägten Sinn für Geschmack. Ich bin gut vertraut mit mehreren Programmiersprachen, darunter HTML, CSS, JavaScript, TypeScript, MySQL, PostgreSQL, Python, C++, und ich habe eine starke Verpflichtung gegenüber Projektmanagement und Kundenbeziehungen.";
                aboutMeCV.innerHTML = "Lebenslauf herunterladen";

                servicesTitle.innerHTML = "Projekte, die Sie mir anbieten können";
                cardOneText.innerHTML = "Webentwicklung";
                cardTwoText.innerHTML = "Datenbankentwicklung";
                cardThreeText.innerHTML = "Designentwicklung";
                cardFourText.innerHTML = "Codeentwicklung";

                mbtiTitle.innerHTML = "Mein MBTI-Typ";
                mbtiButtonText.innerHTML = "Mehr erfahren &rarr;";
                startPersonalData();
                leftTitleMBTI.innerHTML = "Meine Eigenschaften";

                progressOneTextOfficial.innerHTML = "Introvertiert";
                progressOneTextOne.innerHTML = "Introvertiert";
                progressOneTextTwo.innerHTML = "Extrovertiert";

                progressTwoTextOfficial.innerHTML = "Intuitiv";
                progressTwoTextOne.innerHTML = "Beobachtend";
                progressTwoTextTwo.innerHTML = "Intuitiv";

                progressThreeTextOfficial.innerHTML = "Denkend";
                progressThreeTextOne.innerHTML = "Denkend";
                progressThreeTextTwo.innerHTML = "Fühlend";

                progressFourTextOfficial.innerHTML = "Urteilend";
                progressFourTextOne.innerHTML = "Urteilend";
                progressFourTextTwo.innerHTML = "Ausschauend";

                progressFiveTextOfficial.innerHTML = "Durchsetzungsfähig";
                progressFiveTextOne.innerHTML = "Durchsetzungsfähig";
                progressFiveTextTwo.innerHTML = "Unbeständig";

                splink.innerHTML = 'MEHR ERFAHREN';

                servicesTitleNew.innerHTML = "Meine Dienstleistungen";
                firstBoxFromServicesTitle.innerHTML = "Designer";
                firstBoxFromServicesText.innerHTML = "Ich bin ein frischer Designer mit einem ausgeprägten Geschmackssinn. Ich habe verschiedene Designs kreiert, die einzigartig sind, genau wie meine Ideen. Ich kann leicht die Wünsche und Bedürfnisse meiner Kunden umsetzen.";

                secondBoxFromServicesTitle.innerHTML = "Entwicklung";
                secondBoxFromServicesText.innerHTML = "In dieser digitalen Welt helfe ich Menschen dabei, ihr Geschäft und ihre Marke digital aufzubauen, was eine der größten Waffen im Markt ist.";

                thirdBoxFromServicesTitle.innerHTML = "SEO";
                thirdBoxFromServicesText.innerHTML = "Ich biete SEO für jedes Unternehmen an, um es an die Spitze der Google-Suchergebnisse zu bringen, was den Menschen hilft, ihre Position in den Suchergebnissen zu verbessern.";

                fourBoxFromServicesTitle.innerHTML = "Videobearbeitung";
                fourBoxFromServicesText.innerHTML = "In dieser wettbewerbsintensiven Welt ist die Videobearbeitung auf jeder digitalen Plattform unerlässlich. Die meisten E-Commerce-Websites benötigen ansprechende Videos als Werbemethode, die die Aufmerksamkeit der Kunden auf sich ziehen.";

                fiveBoxFromServicesTitle.innerHTML = "Digitales Marketing";
                fiveBoxFromServicesText.innerHTML = "Digitales Marketing ist ein direktes und sehr wichtiges Instrument, das den Menschen hilft, digital beworben zu werden und sie somit stärker an ihr Geschäft zu binden.";

                sixBoxFromServicesTitle.innerHTML = "App-Entwicklung";
                sixBoxFromServicesText.innerHTML = "Apps sind benutzerfreundlich und gut strukturiert für all diejenigen, die sie Websites vorziehen. Sie helfen auch den Menschen bei der Benutzeroberfläche.";

                blogTitle.innerHTML = "Mein Blog";
                blogCardOneTopic.innerHTML = "CODING";
                blogOneTitle.innerHTML = "Warum ist JavaScript so beliebt?";
                blogOneText.innerHTML = "Die Beliebtheit von JavaScript ergibt sich aus seiner Vielseitigkeit sowohl in der Client- als auch in der Server-Entwicklung, unterstützt durch ein umfangreiches Ökosystem von Bibliotheken und Frameworks";

                blogCardTwoTopic.innerHTML = "CODING";
                blogTwoTitle.innerHTML = "JavaScript vs TypeScript";
                blogTwoText.innerHTML = "JavaScript ist eine dynamische Skriptsprache, während TypeScript eine Obermenge von JavaScript mit optionaler statischer Typisierung ist, die eine verbesserte Code-Wartbarkeit und Skalierbarkeit bietet.";

                blogCardThreeTopic.innerHTML = "CODING";
                blogThreeTitle.innerHTML = "Häufig gestellte Interviewfragen zu C#";
                blogThreeText.innerHTML = "Häufige Interviewfragen zu C# umfassen Themen wie abstrakte Klassen vs. Schnittstellen, Speicherverwaltung, Zeichenkettenmanipulation und mehr.";

                blogCardFourTopic.innerHTML = "CODING";
                blogFourTitle.innerHTML = "Grundlagen der objektorientierten Programmierung";
                blogFourText.innerHTML = "Das Verständnis der Grundlagen der objektorientierten Programmierung ist entscheidend für den Aufbau skalierbarer und wartbarer Softwaresysteme.";

                priceTitle.innerHTML = "Mein Geschäft";
                priceCardOneTitle.innerHTML = "Einseitige Website";
                priceCardOneText.innerHTML = "Mit HTML, CSS und JavaScript";

                priceCardTwoTitle.innerHTML = "Einseitige Website";
                priceCardTwoText.innerHTML = "Mit React oder Angular";

                priceCardThreeTitle.innerHTML = "Angepasste Mehrseitige Webseite";
                priceCardThreeText.innerHTML = "Mit allen Sprachen und Frameworks";

                skillsTitle.innerHTML = "Meine Fähigkeiten";
                skillsTitleText.innerHTML = "Meine kreativen Fähigkeiten und Erfahrungen.";
                skillsText.innerHTML = "<p id=\"skillsText\">Getrieben von Leidenschaft für Innovationen, gedeihe ich in den dynamischen Herausforderungen der Webentwicklung. Meine Hingabe, stets auf dem neuesten Stand der aufkommenden Technologien zu bleiben, stellt sicher, dass ich maßgeschneiderte Lösungen liefere, die Ihren Bedürfnissen entsprechen. Lassen Sie uns zusammenarbeiten, um Ihre Ideen in fesselnde digitale Erlebnisse umzusetzen, die einen bleibenden Eindruck hinterlassen.\n" +
                    "                    <br><br>\n" +
                    "                    Ich bin kompetent in Webprogrammierung, Datenbankmanagement und mehr. Mit mehreren erfolgreichen Webprojekten in meinem Repertoire habe ich mich auf die Erstellung von Animationen, Webanwendungen, responsive Designs und umfangreiche Projekte spezialisiert, die mit Funktionalitäten ausgestattet sind. Mein Fähigkeiten umfassen die Beherrschung von HTML, CSS, JavaScript, TypeScript, MySQL, PostgreSQL, C++, Python und mehr. Lassen Sie mich Ihre digitalen Visionen mit Kreativität, Fachwissen und Präzision zum Leben erwecken.\n" +
                    "                    <br><br>\n" +
                    "                    Ich habe auch Erfahrung als Full-Stack-Entwickler mit beliebten Open-Source-CMS wie (WordPress, bubble.io und andere).\n" +
                    "                    <br>\n" +
                    "                    Besuchen Sie meine<a href=\"#\" target=\"-blank\" id=\"link\">Facebook-Seite</a>für weitere Details und kontaktieren Sie mich.\n </p>";
                skillsButtonText.innerHTML = "Mehr erfahren";

                projectsTitle.innerHTML = "Meine Projekte";

                contactTitle.innerHTML = "Kontaktiere mich";
                contactTextOne.innerHTML = "Kontakt aufnehmen";
                contactTextTwo.innerHTML = "Wenn Sie interessiert sind, zusammenzuarbeiten? Bitte füllen Sie das Formular nebenan mit einigen Informationen zu Ihrem Projekt aus, und ich werde mich so schnell wie möglich bei Ihnen melden. Bitte erlauben Sie mir ein paar Tage für eine Antwort.";

                contactInfoUserTitle.innerHTML = "Name:";
                contactInfoUserText.innerHTML = "Kadir Yusein Yazadzhi";

                contactInfoAddressTitle.innerHTML = "Adresse:";
                contactInfoAddressText.innerHTML = "Bulgarien";

                contactInfoEmailTitle.innerHTML = "E-Mail:";
                contactInfoEmailText.innerHTML = "kyuya_2020g@pgiblg.com";

                messageText.innerHTML = "Nachricht senden";
                buttonSendMessage.innerHTML = "Nachricht senden";

                nameInputFromContact.placeholder = "Name";
                emailInputFromContact.placeholder = "E-Mail";
                subjectInputFromContact.placeholder = "Betreff";
                messageInputFromContact.placeholder = "Nachricht..";

                copyright.innerHTML = "Urheberrecht © 2024 - Alle Rechte vorbehalten || Gestaltet von: Kadir Yazadzhi";
            }

            function translateToRussianForIndexPage() {
                navbarHome.innerHTML = "Домашняя";
                navbarAbout.innerHTML = "Обо мне";
                navbarServices.innerHTML = "Услуги";
                navbarSkills.innerHTML = "Навыки";
                navbarCertificate.innerHTML = "Сертификаты";
                navbarProjects.innerHTML = "Проекты";
                navbarContact.innerHTML = "Контакт";

                homeTextOne.innerHTML = "Привет, меня зовут";
                homeName.innerHTML = "Кадир Язаджи";
                homeTextTwo.innerHTML = "И я";
                homeTextThree.innerHTML = "Нанимайте меня";

                aboutMeTitle.innerHTML = "Обо мне"
                aboutMeTextOne.innerHTML = "Я Кадир Язаджи и я";
                aboutMeTextTwo.innerHTML = "Мне 17 лет, я динамичный и восторженный мальчик, ищущий работу в качестве веб-дизайнера и разработчика, в основном специализирующегося на разработке фронтэнда. Я верю в свои способности, и если и вы это сделаете, не пожалеете об этом. Я также умею работать в команде и не имею проблем с работой в сложной среде. Мои идеи для проектов инновационны и свежи, с отличным вкусом. Я хорошо владею несколькими языками программирования, включая HTML, CSS, JavaScript, TypeScript, MySQL, PostgreSQL, Python, C++, и у меня сильное стремление к управлению проектами и отношениям с клиентами.";
                aboutMeCV.innerHTML = "Скачать резюме";

                servicesTitle.innerHTML = "Проекты, которые вы можете мне предложить";
                cardOneText.innerHTML = "Веб-разработка";
                cardTwoText.innerHTML = "Разработка баз данных";
                cardThreeText.innerHTML = "Разработка дизайна";
                cardFourText.innerHTML = "Разработка кода";

                mbtiTitle.innerHTML = "Мой тип Майерс-Бриггс";
                mbtiButtonText.innerHTML = "Узнать больше &rarr;";
                startPersonalData();
                leftTitleMBTI.innerHTML = "Мои черты";

                progressOneTextOfficial.innerHTML = "Интровертированный";
                progressOneTextOne.innerHTML = "Интровертированный";
                progressOneTextTwo.innerHTML = "Экстровертированный";

                progressTwoTextOfficial.innerHTML = "Интуитивный";
                progressTwoTextOne.innerHTML = "Внимательный";
                progressTwoTextTwo.innerHTML = "Интуитивный";

                progressThreeTextOfficial.innerHTML = "Мыслящий";
                progressThreeTextOne.innerHTML = "Мыслящий";
                progressThreeTextTwo.innerHTML = "Чувствующий";

                progressFourTextOfficial.innerHTML = "Судящий";
                progressFourTextOne.innerHTML = "Судящий";
                progressFourTextTwo.innerHTML = "Проспективный";

                progressFiveTextOfficial.innerHTML = "Уверенный";
                progressFiveTextOne.innerHTML = "Уверенный";
                progressFiveTextTwo.innerHTML = "Тревожный";

                splink.innerHTML = 'УЗНАТЬ БОЛЬШЕ';

                servicesTitleNew.innerHTML = "Мои услуги";
                firstBoxFromServicesTitle.innerHTML = "Дизайнер";
                firstBoxFromServicesText.innerHTML = "Я новичок в дизайне с огромным чувством вкуса. Я создаю различные дизайны, которые уникальны, как и мои идеи. Легко могу воплотить желания и потребности моих клиентов.";

                secondBoxFromServicesTitle.innerHTML = "Разработка";
                secondBoxFromServicesText.innerHTML = "В этом цифровом мире я помогаю людям строить свой бизнес и бренд в цифровом формате, что является одним из самых мощных инструментов на рынке.";

                thirdBoxFromServicesTitle.innerHTML = "SEO";
                thirdBoxFromServicesText.innerHTML = "Я предоставляю услуги SEO для любого бизнеса, чтобы помочь ему занять первые места в поиске Google, что помогает людям продвигать свои бизнесы в поисковых результатах.\n";

                fourBoxFromServicesTitle.innerHTML = "Видеомонтаж";
                fourBoxFromServicesText.innerHTML = "В этом конкурентном мире монтаж видео является необходимым на любой цифровой платформе. Большинство интернет-магазинов нуждаются в красивых видео в качестве рекламного метода, который привлекает внимание клиентов.";

                fiveBoxFromServicesTitle.innerHTML = "Цифровой маркетинг";
                fiveBoxFromServicesText.innerHTML = "Цифровой маркетинг - это прямой и очень важный инструмент, который помогает людям продвигать свои бизнесы цифровым способом и делает их более привлекательными для клиентов.";

                sixBoxFromServicesTitle.innerHTML = "Разработка приложений";
                sixBoxFromServicesText.innerHTML = "Приложения легко использовать и хорошо структурированы для всех, кто предпочитает их сайтам. Они также помогают пользователям в интерфейсе.";

                blogTitle.innerHTML = "Мой блог";
                blogCardOneTopic.innerHTML = "ПРОГРАММИРОВАНИЕ";
                blogOneTitle.innerHTML = "Почему JavaScript такой популярный?";
                blogOneText.innerHTML = "Популярность JavaScript проистекает из его гибкости как в клиентской, так и в серверной разработке, поддержанной огромной экосистемой библиотек и фреймворков";

                blogCardTwoTopic.innerHTML = "ПРОГРАММИРОВАНИЕ";
                blogTwoTitle.innerHTML = "JavaScript против TypeScript";
                blogTwoText.innerHTML = "JavaScript — это динамический скриптовый язык, в то время как TypeScript — это надмножество JavaScript с опциональной статической типизацией, обеспечивающей улучшенное сопровождение и масштабируемость кода.";

                blogCardThreeTopic.innerHTML = "ПРОГРАММИРОВАНИЕ";
                blogThreeTitle.innerHTML = "Наиболее часто задаваемые вопросы на интервью по C#";
                blogThreeText.innerHTML = "Обычные вопросы на интервью по C# охватывают такие темы, как абстрактные классы против интерфейсов, управление памятью, манипуляция строками и многое другое.";

                blogCardFourTopic.innerHTML = "ПРОГРАММИРОВАНИЕ";
                blogFourTitle.innerHTML = "Основы объектно-ориентированного программирования";
                blogFourText.innerHTML = "Понимание основ объектно-ориентированного программирования имеет решающее значение для создания масштабируемых и поддерживаемых программных систем.";

                priceTitle.innerHTML = "Мой магазин";
                priceCardOneTitle.innerHTML = "Одностраничный сайт";
                priceCardOneText.innerHTML = "С HTML, CSS и JavaScript";

                priceCardTwoTitle.innerHTML = "Одностраничный сайт";
                priceCardTwoText.innerHTML = "С React или Angular";

                priceCardThreeTitle.innerHTML = "Персонализированный Многостраничный Сайт";
                priceCardThreeText.innerHTML = "Со всеми языками и фреймворками";

                skillsTitle.innerHTML = "Мои навыки";
                skillsTitleText.innerHTML = "Мои творческие навыки и опыт.";
                skillsText.innerHTML = "<p id=\"skillsText\">Вдохновленный страстью к инновациям, я процветаю в динамичных вызовах веб-разработки. Мое стремление быть в курсе новейших технологий гарантирует, что я предлагаю передовые решения, настроенные на ваши потребности. Давайте сотрудничать, чтобы превратить ваши идеи в захватывающие цифровые впечатления, оставляющие глубокий след.\n" +
                    "                    <br><br>\n" +
                    "                    Я владею веб-программированием, управлением базами данных и многим другим. С несколькими успешными веб-проектами в моем резюме я специализируюсь на создании анимаций, веб-приложений, адаптивных дизайнов и обширных проектов, наполненных функциональностью. Мой набор навыков включает в себя владение HTML, CSS, JavaScript, TypeScript, MySQL, PostgreSQL, C++, Python и многими другими. Позвольте мне воплотить ваши цифровые видения с помощью креативности, экспертизы и точности.\n" +
                    "                    <br><br>\n" +
                    "                    У меня также есть опыт работы в качестве разработчика full-stack с популярными открытыми CMS, такими как (WordPress, bubble.io и другие).\n" +
                    "                    <br>\n" +
                    "                    Загляните на мою страницу в<a href=\"#\" target=\"-blank\" id=\"link\">Facebook,</a>чтобы узнать больше деталей и связаться со мной.\n </p>";
                skillsButtonText.innerHTML = "Узнать больше";

                projectsTitle.innerHTML = "Мои проекты";

                contactTitle.innerHTML = "Свяжитесь со мной";
                contactTextOne.innerHTML = "Связаться";
                contactTextTwo.innerHTML = "Если вы заинтересованы в сотрудничестве? Пожалуйста, заполните форму рядом с некоторой информацией о вашем проекте, и я свяжусь с вами как можно скорее. Пожалуйста, дайте мне несколько дней на ответ.";

                contactInfoUserTitle.innerHTML = "Имя:";
                contactInfoUserText.innerHTML = "Кадир Юсеин Язаджи";

                contactInfoAddressTitle.innerHTML = "Адрес:";
                contactInfoAddressText.innerHTML = "Болгария";

                contactInfoEmailTitle.innerHTML = "Электронная почта:";
                contactInfoEmailText.innerHTML = "kyuya_2020g@pgiblg.com";

                messageText.innerHTML = "Отправить сообщение";
                buttonSendMessage.innerHTML = "Отправить сообщение";

                nameInputFromContact.placeholder = "Имя";
                emailInputFromContact.placeholder = "Электронная почта";
                subjectInputFromContact.placeholder = "Тема";
                messageInputFromContact.placeholder = "Сообщение..";

                copyright.innerHTML = "Авторские права © 2024 - Все права защищены || Дизайн: Кадир Язаджи";
            }


            if (locale === "bg-BG") {
                translateToBulgarianForIndexPage();
            }
            else if (locale === "en-GB") {
                translateToEnglishForIndexPage();
            }
            else if (locale === "de-DE") {
                translateToGermanForIndexPage();
            }
            else if (locale === "ru-RU") {
                translateToRussianForIndexPage();
            }

            function startPersonalData() {
                if (locale === "bg-BG") {
                    personalityText.innerHTML = "Моята личност";
                    type.innerHTML = "Архитект (INTJ-A)";
                    textINTJ.innerHTML = "Архитектите са стратегически мислители с развито въображение и план за всичко. Тези внимателни тактици обичат да усъвършенстват детайлите на живота, прилагайки креативност и рационалност.";
                }
                if (locale === "en-GB") {
                    personalityText.innerHTML = 'My Personality';
                    type.innerHTML = 'Architect (INTJ-A)';
                    textINTJ.innerHTML = 'Architects are imaginative and strategic thinkers, with a plan for everything. These thoughtful tacticians love perfecting the details of life, applying creativity and rationality.';
                }
                if (locale === "de-DE") {
                    personalityText.innerHTML = "Meine Persönlichkeit";
                    type.innerHTML = "Architekt (INTJ-A)";
                    textINTJ.innerHTML = "Architekten sind strategische Denker, welche durch die Anwendung von Kreativität und Rationalität darauf abzielen, die Feinheiten des Lebens zu optimieren und zu verfeinern.";
                }
                if (locale === "ru-RU") {
                    personalityText.innerHTML = "Моя личность";
                    type.innerHTML = "Архитектор (INTJ-A)";
                    textINTJ.innerHTML = "Архитекторы - это стратегические мыслители с развитым воображением и планом на все случаи жизни. Эти внимательные тактики любят совершенствовать детали жизни, применяя креативность и рациональность.";
                }
            }

            function secondPersonalData() {
                if (locale === "bg-BG") {
                    personalityText.innerHTML = "Моята роля";
                    type.innerHTML = "Анализатор";
                    textINTJ.innerHTML = "Анализаторите приемат рационалност и безпристрастност, преуспявайки в интелектуални дебати и научни или технологични области. Те са яростно независими, отворени и силно волят.";
                }
                if (locale === "en-GB") {
                    personalityText.innerHTML = 'My Role';
                    type.innerHTML = 'Analyst';
                    textINTJ.innerHTML = 'Analysts embrace rationality and impartiality, excelling in intellectual debates and scientific or technological fields. They are fiercely independent, open-minded, and strong-willed.';
                }
                if (locale === "de-DE") {
                    personalityText.innerHTML = "Meine Rolle";
                    type.innerHTML = "Analytiker";
                    textINTJ.innerHTML = "Analytiker setzen auf Rationalität und Unparteilichkeit und glänzen in intellektuellen Debatten sowie in wissenschaftlichen oder technologischen Bereichen. Sie sind äußerst unabhängig, aufgeschlossen und willensstark.";
                }
                if (locale === "ru-RU") {
                    personalityText.innerHTML = "Моя роль";
                    type.innerHTML = "Аналитики";
                    textINTJ.innerHTML = "Аналитики принимают рациональность и беспристрастие, отличаются в интеллектуальных дебатах и научных или технологических областях. Они яростно независимы, открыты и сильной воли.";

                }
            }

            function thirdPersonalData() {
                if (locale === "bg-BG") {
                    personalityText.innerHTML = "Моята стратегия";
                    type.innerHTML = "Уверен индивидуализъм";
                    textINTJ.innerHTML = "Тези, които предпочитат стратегията на Уверения индивидуализъм, предпочитат да правят нещата сами, избирайки да се доверяват на своите умения и инстинкти вместо да търсят контакт с други хора.";
                }
                if (locale === "en-GB") {
                    personalityText.innerHTML = 'My Strategy';
                    type.innerHTML = 'Confident Individualism';
                    textINTJ.innerHTML = 'Those who prefer the Confident Individualism Strategy like doing things alone, choosing to rely on their own skills and instincts instead of seeking contact with other people.';
                }
                if (locale === "de-DE") {
                    personalityText.innerHTML = "Meine Strategie";
                    type.innerHTML = "Selbstbewusster Individualismus";
                    textINTJ.innerHTML = "Selbstbewusste Individualisten bevorzugen es, allein zu handeln und sich auf ihre eigenen Fähigkeiten und Instinkte zu verlassen, anstatt Kontakt zu anderen Menschen zu suchen.";
                }
                if (locale === "ru-RU") {
                    personalityText.innerHTML = "Моя стратегия";
                    type.innerHTML = "Уверенный индивидуализм";
                    textINTJ.innerHTML = "Те, кто предпочитает стратегию Уверенного индивидуализма, предпочитают делать вещи в одиночку, предпочитая полагаться на свои собственные навыки и инстинкты, а не искать контакта с другими людьми.";

                }
            }


            dotType1.style.backgroundColor = '#4298b4';
            dotType1.addEventListener('click', function() {
                startPersonalData();
                imageIntj.src = '';
                imageIntj.src = 'Image/intj.png';
                dotType1.style.backgroundColor = '#4298b4';
                dotType2.style.backgroundColor = '';
                dotType3.style.backgroundColor = '';
            });

            dotType2.addEventListener('click', function() {
                secondPersonalData();
                imageIntj.src = '';
                imageIntj.src = 'Image/intj-2.png';
                dotType1.style.backgroundColor = '';
                dotType2.style.backgroundColor = '#4298b4';
                dotType3.style.backgroundColor = '';
            });

            dotType3.addEventListener('click', function() {
                thirdPersonalData();
                imageIntj.src = '';
                imageIntj.src = 'Image/intj-3.png';
                dotType1.style.backgroundColor = '';
                dotType2.style.backgroundColor = '';
                dotType3.style.backgroundColor = '#4298b4';
            });


            function DataForBarOne() {
                if (locale === "bg-BG") {
                    miniText.innerHTML = 'Енергия';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #0CADBAFF; font-weight: 650 ">85%</span> Интровертен</p>';
                    text.innerHTML = 'Предпочитам по-малко, но дълбоки и значими социални взаимодействия и се чувствам привличан към по-спокойни среди.';
                    splink.innerHTML = 'НАУЧЕТЕ ПОВЕЧЕ';
                }
                if (locale === "en-GB") {
                    miniText.innerHTML = 'Energy';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #0CADBAFF; font-weight: 650 ">85%</span> Introverted</p>';
                    text.innerHTML = 'I prefer fewer, yet deep and meaningful, social interactions and feel drawn to calmer environments.';
                    splink.innerHTML = 'LEARN MORE';
                }
                if (locale === "de-DE") {
                    miniText.innerHTML = 'Energie';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #0CADBAFF; font-weight: 650 ">85%</span> Introvertiert</p>';
                    text.innerHTML = 'Ich bevorzuge weniger, aber tiefe und bedeutungsvolle soziale Interaktionen und fühle mich zu ruhigeren Umgebungen hingezogen.';
                    splink.innerHTML = 'MEHR ERFAHREN';
                }
                if (locale === "ru-RU") {
                    miniText.innerHTML = 'Энергия';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #0CADBAFF; font-weight: 650 ">85%</span> Интровертированный</p>';
                    text.innerHTML = 'Предпочитаю меньше, но более глубокие и значимые социальные контакты, а также тихие окружения мне больше нравятся.';
                    splink.innerHTML = 'УЗНАТЬ БОЛЬШЕ';
                }
            }

            document.addEventListener('DOMContentLoaded', function () {
                DataForBarOne();
            });

            function DataForBarTwo() {
                if (locale === "bg-BG") {
                    miniText.innerHTML = 'Ум';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #E4AE3AFF; font-weight: 650 ">79%</span> Интуитивен</p>';
                    text.innerHTML = 'Бързо се въображавам и съм отворен на нови идеи, фокусирайки се върху скрити значения и далечни възможности.';
                }
                if (locale === "en-GB") {
                    miniText.innerHTML = 'Mind';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #E4AE3AFF; font-weight: 650 ">79%</span> Intuitive</p>';
                    text.innerHTML = 'I am very imaginative and open-minded, focusing on hidden meanings and distant possibilities.';
                }
                if (locale === "de-DE") {
                    miniText.innerHTML = 'Verstand';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #E4AE3AFF; font-weight: 650 ">79%</span> Intuitiv</p>';
                    text.innerHTML = 'Ich bin sehr einfallsreich und aufgeschlossen und konzentriere mich auf verborgene Bedeutungen und entfernte Möglichkeiten.';
                }
                if (locale === "ru-RU") {
                    miniText.innerHTML = 'Ум';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #E4AE3AFF; font-weight: 650 ">79%</span> Интуитивный</p>';
                    text.innerHTML = 'Я очень фантазирую и открыт для новых идей, фокусируясь на скрытых значениях и далеких возможностях.';
                }
            }

            function DataForBarThree() {
                if (locale === "bg-BG") {
                    miniText.innerHTML = 'Природа';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #33a474; font-weight: 650 ">71%</span> Мислещ</p>';
                    text.innerHTML = 'Предпочитам да се фокусирам върху обективността и рационалността, като поставям ефективността над социалната хармония.<br><br>'
                }
                if (locale === "en-GB") {
                    miniText.innerHTML = 'Nature';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #33a474; font-weight: 650 ">71%</span> Thinking</p>';
                    text.innerHTML = 'I like focus on objectivity and rationality, putting effectiveness above social harmony.<br><br>'
                }
                if (locale === "de-DE") {
                    miniText.innerHTML = 'Natur';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #33a474; font-weight: 650 ">71%</span> Denkend</p>';
                    text.innerHTML = 'Ich konzentriere mich lieber auf Objektivität und Rationalität und setze Effizienz über soziale Harmonie.<br><br>'
                }
                if (locale === "ru-RU") {
                    miniText.innerHTML = 'Природа';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #33a474; font-weight: 650 ">71%</span> Мыслящий</p>';
                    text.innerHTML = 'Я предпочитаю сосредотачиваться на объективности и рациональности, ставя эффективность выше социальной гармонии.<br><br>'
                }
            }

            function DataForBarFour() {
                if (locale === "bg-BG") {
                    miniText.innerHTML = 'Тактика';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #88619a; font-weight: 650 ">78%</span> Съдещ</p>';
                    text.innerHTML = 'Предпочитам високоорганизирани, решителни и изчерпателни подходи. Цените яснотата и предпочитате планирането пред спонтанността.';
                }
                if (locale === "en-GB") {
                    miniText.innerHTML = 'Tactics';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #88619a; font-weight: 650 ">78%</span> Judging</p>';
                    text.innerHTML = 'I like highly organized, decisive, and thorough. You value clarity and prefer planning to spontaneity.';
                }
                if (locale === "de-DE") {
                    miniText.innerHTML = 'Taktik';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #88619a; font-weight: 650 ">78%</span> Urteilend</p>';
                    text.innerHTML = 'Ich bevorzuge hochorganisierte, entscheidungsfreudige und gründliche Herangehensweisen. Sie schätzen Klarheit und ziehen Planung der Spontaneität vor.';
                }
                if (locale === "ru-RU") {
                    miniText.innerHTML = 'Тактика';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #88619a; font-weight: 650 ">78%</span> Судящий</p>';
                    text.innerHTML = 'Мне нравится высокоорганизованный, решительный и тщательный подход. Вы цените ясность и предпочитаете планирование спонтанности.';
                }
            }

            function DataForBarFive() {
                if (locale === "bg-BG") {
                    miniText.innerHTML = 'Идентичност';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #88619a; font-weight: 650 ">53%</span> Уверен</p>';
                    text.innerHTML = 'Аз съм уверен в себе си, с равномерно настроение и устойчив на стрес, отказвайки се да се притеснявам твърде много.<br><br>';
                }
                if (locale === "en-GB") {
                    miniText.innerHTML = 'Identity';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #88619a; font-weight: 650 ">53%</span> Assertive</p>';
                    text.innerHTML = 'I am self-assured, even-tempered, and resistant to stress, refusing to worry too much.<br><br>';
                }
                if (locale === "de-DE") {
                    miniText.innerHTML = 'Identität';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #88619a; font-weight: 650 ">53%</span> Durchsetzungsfähig</p>';
                    text.innerHTML = 'Ich bin selbstbewusst, ausgeglichen und widerstandsfähig gegen Stress, weigere mich, mich zu sehr zu sorgen.<br><br>';
                }
                if (locale === "ru-RU") {
                    miniText.innerHTML = 'Личность';
                    title.innerHTML = '<p id="specialBarTitle" class="specialcardtitle"><span style="font-size: 24px; color: #88619a; font-weight: 650 ">53%</span> Уверенный</p>';
                    text.innerHTML = 'Я уверен в себе си, спокоен и устойчив к стрессу, отказываясь беспокоиться слишком много.<br><br>';
                }
            }

            barOne.addEventListener('mouseover', function() {
                DataForBarOne();
                image.src = 'Image/personality-1.svg';
                splink.href = 'https://www.16personalities.com/articles/energy-introverted-vs-extraverted';
                specialBar.style.borderTopLeftRadius = '0px';
            });
            barOne.addEventListener('mouseout', function() {
                specialBar.style.borderTopLeftRadius = '12px';
            });

            barTwo.addEventListener('mouseover', function() {
                DataForBarTwo();
                image.src = 'Image/personality-2.svg';
                splink.href = 'https://www.16personalities.com/articles/mind-intuitive-vs-observant';
            });

            barThree.addEventListener('mouseover', function() {
                DataForBarThree();
                image.src = 'Image/personality-3.svg';
                splink.href = 'https://www.16personalities.com/articles/nature-thinking-vs-feeling';
            });

            barFour.addEventListener('mouseover', function() {
                DataForBarFour();
                image.src = 'Image/personality-4.svg';
                splink.href = 'https://www.16personalities.com/articles/tactics-judging-vs-prospecting';
            });

            barFive.addEventListener('mouseover', function() {
                DataForBarFive();
                image.src = 'Image/personality-5.svg';
                splink.href = 'https://www.16personalities.com/articles/identity-assertive-vs-turbulent';
                specialBar.style.borderBottomLeftRadius = '0px';
            });
            barFive.addEventListener('mouseout', function() {
                specialBar.style.borderBottomLeftRadius = '12px';
            });
        }


        dropdownBtn.innerHTML = `<img src="${getFlagSrc(intlLocale.region)}" />${langName}<span class="arrow-down"></span>`;
    }

    setSelectedLocale(locales[0]);
    const browserLang = new Intl.Locale(navigator.language).language;
    for (const locale of locales) {
        const localeLang = new Intl.Locale(locale).language;
        if (localeLang === browserLang) {
            setSelectedLocale(locale);
        }
    }


    function checkLocalStorage(id) {
        if (localStorage.getItem('lastClickedBlogId') === id) {
            return true;
        }
        return false;
    }

});






