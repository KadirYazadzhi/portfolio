const locales = ["en-GB","de-DE","bg-BG","ru-RU", ];

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

function translateToBulgarian() {
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

function translateToEnglish() {
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

function translateToGerman() {
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

function translateToRussian() {
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
        translateToBulgarian();
    }
    else if (locale === "en-GB") {
        translateToEnglish();
    }
    else if (locale === "de-DE") {
        translateToGerman();
    }
    else if (locale === "ru-RU") {
        translateToRussian();
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






