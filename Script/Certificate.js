document.addEventListener('DOMContentLoaded', function() {
    const cardHTMl = document.getElementById('cardHTML');
    const cardCSS = document.getElementById('cardCSS');
    const cardBootstrap = document.getElementById('cardBootstrap');
    const cardJS = document.getElementById('cardJavaScript');
    const cardTS = document.getElementById('cardTS');
    const cardSQL = document.getElementById('cardSQL');
    const cardMySQL = document.getElementById('cardMySQL');
    const cardPostgreSQL = document.getElementById('cardPostgreSQL');
    const cardPython = document.getElementById('cardPython');
    const cardCPlus = document.getElementById('cardCPlus');
    const cardGoogle = document.getElementById('cardGoogle');
    const cardMicrosoft = document.getElementById('cardMicrosoft');
    const cardDatabase = document.getElementById('cardDataBase');
    const cardFrontEnd = document.getElementById('cardFrontEnd');
    const cardReact = document.getElementById('cardReact');
    const cardAngular = document.getElementById('cardAngular');
    const cardCrypto = document.getElementById('cardCrypto');
    const cardWeb = document.getElementById('cardWebDevelopment');
    const cardCybersecurity = document.getElementById('cardCybersecurity');
    const cardOther = document.getElementById('cardOther');

    const certificateHTML = document.getElementById('certificate-HTML');
    const certificateCSS = document.getElementById('certificate-CSS');
    const certificateBootstrap = document.getElementById('certificate-Bootstrap');
    const certificateJS = document.getElementById('certificate-JS');
    const certificateTS = document.getElementById('certificate-TS');
    const certificateSQL = document.getElementById('certificate-SQL');
    const certificateMySQL = document.getElementById('certificate-MySQL');
    const certificatePostgreSQL = document.getElementById('certificate-PostgreSQL');
    const certificatePython = document.getElementById('certificate-Python');
    const certificateCPlus = document.getElementById('certificate-CPlus');
    const certificateGoogle = document.getElementById('certificate-Google');
    const certificateMicrosoft = document.getElementById('certificate-Microsoft');
    const certificateDatabase = document.getElementById('certificate-DataBase');
    const certificateFrontEnd = document.getElementById('certificate-FrontEnd');
    const certificateReact = document.getElementById('certificate-React');
    const certificateAngular = document.getElementById('certificate-Angular');
    const certificateWeb = document.getElementById('certificate-Web');
    const certificateCrypto = document.getElementById('certificate-Crypto');
    const certificateCybersecurity = document.getElementById('certificate-Cubersecurity');
    const certificateOther = document.getElementById('certificate-Other');

function hideCertificate() {
    certificateHTML.style.display = 'none';
    certificateCSS.style.display = 'none';
    certificateBootstrap.style.display = 'none';
    certificateJS.style.display = 'none';
    certificateTS.style.display = 'none';
    certificateSQL.style.display = 'none';
    certificateMySQL.style.display = 'none';
    certificatePostgreSQL.style.display = 'none';
    certificatePython.style.display = 'none';
    certificateCPlus.style.display = 'none';
    certificateGoogle.style.display = 'none';
    certificateMicrosoft.style.display = 'none';
    certificateDatabase.style.display = 'none';
    certificateFrontEnd.style.display = 'none';
    certificateReact.style.display = 'none';
    certificateAngular.style.display = 'none';
    certificateWeb.style.display = 'none';
    certificateCrypto.style.display = 'none';
    certificateCybersecurity.style.display = 'none';
    certificateOther.style.display = 'none';
}

let isCertificateVisible = false;
function showCertificate(certificate) {
        if (isCertificateVisible) {
            hideCertificate();
        } else {
            certificate.style.display = 'flex';
        }
        isCertificateVisible = !isCertificateVisible;
}

    hideCertificate();


    cardHTMl.addEventListener('click', function() {
      showCertificate(certificateHTML);
    });

    cardCSS.addEventListener('click', function() {
        showCertificate(certificateCSS);
    });

    cardBootstrap.addEventListener('click', function() {
        showCertificate(certificateBootstrap);
    });

    cardJS.addEventListener('click', function() {
        showCertificate(certificateJS);
    });

    cardTS.addEventListener('click', function() {
        showCertificate(certificateTS);
    });

    cardSQL.addEventListener('click', function() {
        showCertificate(certificateSQL);
    });

    cardMySQL.addEventListener('click', function() {
        showCertificate(certificateMySQL);
    });

    cardPostgreSQL.addEventListener('click', function() {
        showCertificate(certificatePostgreSQL);
    });

    cardPython.addEventListener('click', function() {
        showCertificate(certificatePython);
    });

    cardCPlus.addEventListener('click', function() {
        showCertificate(certificateCPlus);
    });

    cardGoogle.addEventListener('click', function() {
        showCertificate(certificateGoogle);
    });

    cardMicrosoft.addEventListener('click', function() {
        showCertificate(certificateMicrosoft);
    });

    cardDatabase.addEventListener('click', function() {
        showCertificate(certificateDatabase);
    });

    cardFrontEnd.addEventListener('click', function() {
        showCertificate(certificateFrontEnd);
    });

    cardReact.addEventListener('click', function() {
        showCertificate(certificateReact);
    });

    cardAngular.addEventListener('click', function() {
        showCertificate(certificateAngular);
    });

    cardWeb.addEventListener('click', function() {
        showCertificate(certificateWeb);
    });

    cardCrypto.addEventListener('click', function() {
        showCertificate(certificateCrypto);
    });

    cardCybersecurity.addEventListener('click', function() {
        showCertificate(certificateCybersecurity);
    });

    cardOther.addEventListener('click', function() {
        showCertificate(certificateOther);
    });


    function checkScreenWidth() {
        var mobileScreenWidth = 768;

        if (window.innerWidth <= mobileScreenWidth) {
            var elementToMoveHTML = document.getElementById("certificate-HTML");
            var destinationElementHTML = document.getElementById("cardHTML");
            document.body.appendChild(elementToMoveHTML);
            destinationElementHTML.parentNode.insertBefore(elementToMoveHTML, destinationElementHTML.nextSibling);

            var elementToMoveCSS = document.getElementById("certificate-CSS");
            var destinationElementCSS = document.getElementById("cardCSS");
            document.body.appendChild(elementToMoveCSS);
            destinationElementCSS.parentNode.insertBefore(elementToMoveCSS, destinationElementCSS.nextSibling);

            var elementToMoveBootstrap = document.getElementById("certificate-Bootstrap");
            var destinationElementBootstrap = document.getElementById("cardBootstrap");
            document.body.appendChild(elementToMoveBootstrap);
            destinationElementBootstrap.parentNode.insertBefore(elementToMoveBootstrap, destinationElementBootstrap.nextSibling);

            var elementToMoveJS = document.getElementById("certificate-JS");
            var destinationElementJS = document.getElementById("cardJavaScript");
            document.body.appendChild(elementToMoveJS);
            destinationElementJS.parentNode.insertBefore(elementToMoveJS, destinationElementJS.nextSibling);

            var elementToMoveTS = document.getElementById("certificate-TS");
            var destinationElementTS = document.getElementById("cardTS");
            document.body.appendChild(elementToMoveTS);
            destinationElementTS.parentNode.insertBefore(elementToMoveTS, destinationElementTS.nextSibling);

            var elementToMoveSQL = document.getElementById("certificate-SQL");
            var destinationElementSQL = document.getElementById("cardSQL");
            document.body.appendChild(elementToMoveSQL);
            destinationElementSQL.parentNode.insertBefore(elementToMoveSQL, destinationElementSQL.nextSibling);

            var elementToMoveMySQL = document.getElementById("certificate-MySQL");
            var destinationElementMySQL = document.getElementById("cardMySQL");
            document.body.appendChild(elementToMoveMySQL);
            destinationElementMySQL.parentNode.insertBefore(elementToMoveMySQL, destinationElementMySQL.nextSibling);

            var elementToMovePostgreSQL = document.getElementById("certificate-PostgreSQL");
            var destinationElementPostgreSQL = document.getElementById("cardMyPostgreSQL");
            document.body.appendChild(elementToMovePostgreSQL);
            destinationElementPostgreSQL.parentNode.insertBefore(elementToMovePostgreSQL, destinationElementPostgreSQL.nextSibling);

            var elementToMovePython = document.getElementById("certificate-Python");
            var destinationElementPython = document.getElementById("cardPython");
            document.body.appendChild(elementToMovePython);
            destinationElementPython.parentNode.insertBefore(elementToMovePython, destinationElementPython.nextSibling);

            var elementToMoveCPlus = document.getElementById("certificate-CPlus");
            var destinationElementCPlus = document.getElementById("cardCPlus");
            document.body.appendChild(elementToMoveCPlus);
            destinationElementCPlus.parentNode.insertBefore(elementToMoveCPlus, destinationElementCPlus.nextSibling);

            var elementToMoveGoogle = document.getElementById("certificate-Google");
            var destinationElementGoogle = document.getElementById("cardGoogle");
            document.body.appendChild(elementToMoveGoogle);
            destinationElementGoogle.parentNode.insertBefore(elementToMoveGoogle, destinationElementGoogle.nextSibling);

            var elementToMoveMicrosoft = document.getElementById("certificate-Microsoft");
            var destinationElementMicrosoft = document.getElementById("cardMicrosoft");
            document.body.appendChild(elementToMoveMicrosoft);
            destinationElementMicrosoft.parentNode.insertBefore(elementToMoveMicrosoft, destinationElementMicrosoft.nextSibling);

            var elementToMoveDatabase = document.getElementById("certificate-DataBase");
            var destinationElementDatabase = document.getElementById("cardDataBase");
            document.body.appendChild(elementToMoveDatabase);
            destinationElementDatabase.parentNode.insertBefore(elementToMoveDatabase, destinationElementDatabase.nextSibling);

            var elementToMoveFrontEnd = document.getElementById("certificate-FrontEnd");
            var destinationElementFrontEnd = document.getElementById("cardFrontEnd");
            document.body.appendChild(elementToMoveFrontEnd);
            destinationElementFrontEnd.parentNode.insertBefore(elementToMoveFrontEnd, destinationElementFrontEnd.nextSibling);

            var elementToMoveReact = document.getElementById("certificate-React");
            var destinationElementReact = document.getElementById("cardReact");
            document.body.appendChild(elementToMoveReact);
            destinationElementReact.parentNode.insertBefore(elementToMoveReact, destinationElementReact.nextSibling);

            var elementToMoveAngular = document.getElementById("certificate-Angular");
            var destinationElementAngular = document.getElementById("cardAngular");
            document.body.appendChild(elementToMoveAngular);
            destinationElementAngular.parentNode.insertBefore(elementToMoveAngular, destinationElementAngular.nextSibling);

            var elementToMoveWeb = document.getElementById("certificate-Web");
            var destinationElementWeb = document.getElementById("cardWebDevelopment");
            document.body.appendChild(elementToMoveWeb);
            destinationElementWeb.parentNode.insertBefore(elementToMoveWeb, destinationElementWeb.nextSibling);

            var elementToMoveCrypto = document.getElementById("certificate-Crypto");
            var destinationElementCrypto = document.getElementById("cardCrypto");
            document.body.appendChild(elementToMoveCrypto);
            destinationElementCrypto.parentNode.insertBefore(elementToMoveCrypto, destinationElementCrypto.nextSibling);

            var elementToMoveCybersecurity = document.getElementById("certificate-Cybersecurity");
            var destinationElementCybersecurity = document.getElementById("cardCybersecurity");
            document.body.appendChild(elementToMoveCybersecurity);
            destinationElementCybersecurity.parentNode.insertBefore(elementToMoveCybersecurity, destinationElementCybersecurity.nextSibling);

            var elementToMoveOther = document.getElementById("certificate-Other");
            var destinationElementOther = document.getElementById("cardOther");
            document.body.appendChild(elementToMoveOther);
            destinationElementOther.parentNode.insertBefore(elementToMoveOther, destinationElementOther.nextSibling);
        }
    }
    window.addEventListener('load', checkScreenWidth);
    window.addEventListener('resize', checkScreenWidth);
});










