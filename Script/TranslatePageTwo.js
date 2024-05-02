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
        listEl.innerHTML = `${otherLangName}<img src="${getFlagSrc(
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
    const homeTextTwo = document.getElementById('homeTextTwo');
    const homeButtonText = document.getElementById('homeButtonText');

    const cards = document.querySelectorAll(".card-excerpt");

    const copyright = document.getElementById('copyright');

    function translateToBulgarian() {
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

    function translateToEnglish() {
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

    function translateToGerman() {
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

    function translateToRussian() {
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