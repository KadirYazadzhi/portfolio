'use strict';


const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}






const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
}
addEventOnElem(navToggler, "click", toggleNavbar);
const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}
addEventOnElem(navbarLinks, "click", closeNavbar);






const header = document.querySelector("[data-header]");
const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
addEventOnElem(window, "scroll", activeHeader);







const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");
const toggleActive = function () {
  this.classList.toggle("active");
}
addEventOnElem(addToFavBtns, "click", toggleActive);








const sections = document.querySelectorAll("[data-section]");
const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}
scrollReveal();
addEventOnElem(window, "scroll", scrollReveal);



function More() {
  const moreButton = document.getElementById('more');
  const moreLinks = document.querySelectorAll('.other');



  let linksVisible = false;

  moreButton.addEventListener('click', function() {
    if (linksVisible) {
      moreLinks.forEach(link => {
        link.style.display = 'none';
        more.innerHTML = "More &darr;";
      });
      linksVisible = false;
    } else {
      moreLinks.forEach(link => {
        link.style.display = 'table-row';
        more.innerHTML = "Less &uarr;";
      });
      linksVisible = true;
    }
  });
}

More();




document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.tab-btn');
  const crypto = document.getElementById('crypto');
  const DeFi = document.getElementById('DeFi');
  const cryptoLink = document.querySelectorAll(".Crypto");
  const DeFiLink = document.querySelectorAll(".DeFi");
  const BSC = document.getElementById('BSC');
  const BSCLink = document.getElementById('BSCLink');
  const NFT = document.getElementById('NFT');
  const NFTLink = document.querySelectorAll(".NFT");
  const METAVERSE = document.getElementById('Metaverse');
  const MetaverseOne = document.getElementById('Metaverse-1');
  const MetaverseTwo = document.getElementById('Metaverse-2');
  const MetaverseThree = document.getElementById('Metaverse-3');
  const MetaverseFour = document.getElementById('Metaverse-4');
  const Polkadot = document.getElementById('Polkadot');
  const PolakotLink = document.querySelectorAll(".Polkadot");
  const LINKOne = document.getElementById('LINK-1');
  const Solana = document.getElementById('Solana');
  const SolanaLink = document.querySelectorAll(".Solana");

  DeFi.addEventListener('click', function () {
    cryptoLink.forEach(function(element) {
      element.style.display = 'none';
    });
    DeFiLink.forEach(function(element) {
      element.style.display = 'block';
    });
    NFTLink.forEach(function(element) {
      element.style.display = 'none';
    });
    SolanaLink.forEach(function(element) {
      element.style.display = 'none';
    });
    PolakotLink.forEach(function(element) {
      element.style.display = 'none';
    });

    BSCLink.style.display = 'none';
    MetaverseOne.style.display = 'none';
    MetaverseTwo.style.display = 'none';
    MetaverseThree.style.display = 'none';
    MetaverseFour.style.display = 'none';
  });

  Solana.addEventListener('click', function () {
    cryptoLink.forEach(function(element) {
      element.style.display = 'none';
    });
    DeFiLink.forEach(function(element) {
      element.style.display = 'none';
    });
    NFTLink.forEach(function(element) {
      element.style.display = 'none';
    });
    PolakotLink.forEach(function(element) {
      element.style.display = 'none';
    });
    SolanaLink.forEach(function(element) {
      element.style.display = 'block';
    });

    BSCLink.style.display = 'none';
    MetaverseOne.style.display = 'none';
    MetaverseTwo.style.display = 'none';
    MetaverseThree.style.display = 'none';
    MetaverseFour.style.display = 'none';
  });

  Polkadot.addEventListener('click', function () {
    cryptoLink.forEach(function(element) {
      element.style.display = 'none';
    });
    DeFiLink.forEach(function(element) {
      element.style.display = 'none';
    });
    NFTLink.forEach(function(element) {
      element.style.display = 'none';
    });
    PolakotLink.forEach(function(element) {
      element.style.display = 'block';
    });
    SolanaLink.forEach(function(element) {
      element.style.display = 'none';
    });
    LINKOne.style.display = 'block';
    BSCLink.style.display = 'none';
    MetaverseOne.style.display = 'none';
    MetaverseTwo.style.display = 'none';
    MetaverseThree.style.display = 'none';
    MetaverseFour.style.display = 'none';


  });

  METAVERSE.addEventListener('click', function () {
    cryptoLink.forEach(function(element) {
      element.style.display = 'none';
    });
    DeFiLink.forEach(function(element) {
      element.style.display = 'none';
    });
    NFTLink.forEach(function(element) {
      element.style.display = 'none';
    });
    PolakotLink.forEach(function(element) {
      element.style.display = 'none';
    });
    SolanaLink.forEach(function(element) {
      element.style.display = 'none';
    });
    BSCLink.style.display = 'none';
    MetaverseOne.style.display = 'block';
    MetaverseTwo.style.display = 'block';
    MetaverseThree.style.display = 'block';
    MetaverseFour.style.display = 'block';
  });

  NFT.addEventListener('click', function () {
    cryptoLink.forEach(function(element) {
      element.style.display = 'none';
    });
    DeFiLink.forEach(function(element) {
      element.style.display = 'none';
    });
    NFTLink.forEach(function(element) {
      element.style.display = 'block';
    });
    PolakotLink.forEach(function(element) {
      element.style.display = 'none';
    });
    SolanaLink.forEach(function(element) {
      element.style.display = 'none';
    });
    BSCLink.style.display = 'none';
    MetaverseOne.style.display = 'none';
    MetaverseTwo.style.display = 'none';
    MetaverseThree.style.display = 'block';
    MetaverseFour.style.display = 'block';
  });

  BSC.addEventListener('click', function () {
    cryptoLink.forEach(function(element) {
      element.style.display = 'none';
    });
    DeFiLink.forEach(function(element) {
      element.style.display = 'none';
    });
    NFTLink.forEach(function(element) {
      element.style.display = 'none';
    });
    PolakotLink.forEach(function(element) {
      element.style.display = 'none';
    });
    SolanaLink.forEach(function(element) {
      element.style.display = 'none';
    });
    BSCLink.style.display = 'block';
    MetaverseOne.style.display = 'none';
    MetaverseTwo.style.display = 'none';
    MetaverseThree.style.display = 'none';
    MetaverseFour.style.display = 'none';
  });

  crypto.addEventListener('click', function () {
    cryptoLink.forEach(function(element) {
      element.style.display = 'block';
    });
    DeFiLink.forEach(function(element) {
      element.style.display = 'none';
    });
    NFTLink.forEach(function(element) {
      element.style.display = 'none';
    });
    PolakotLink.forEach(function(element) {
      element.style.display = 'none';
    });
    SolanaLink.forEach(function(element) {
      element.style.display = 'none';
    });
    BSCLink.style.display = 'block';
    MetaverseOne.style.display = 'none';
    MetaverseTwo.style.display = 'none';
    MetaverseThree.style.display = 'none';
    MetaverseFour.style.display = 'none';

  });



  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      buttons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});









document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('ul li');

  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      links.forEach(function(otherLink) {
        otherLink.classList.remove('activeNew');
      });

      this.classList.add('activeNew');
    });
  });

  window.addEventListener('scroll', function() {
    links.forEach(function(link) {
      var targetId = link.querySelector('a').hash.substring(1); // Променено тук
      var targetElement = document.getElementById(targetId);

      if (isElementInViewport(targetElement)) {
        links.forEach(function(otherLink) {
          otherLink.classList.remove('activeNew');
        });

        link.classList.add('activeNew');
      }
    });
  });

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
});










const walletButton = document.getElementById('wallet');
const windowElement = document.getElementById('window');
const modalElement = document.getElementById('modal');
const closeElement = document.getElementById('close');
const LogInButton = document.getElementById('LoginButton');
const SignUpButton = document.getElementById('SignUpButton');
const SignUpModalElement = document.getElementById('modalSingUp');
const SignUpCloseElement = document.getElementById('closeNew');

walletButton.addEventListener('click', function () {
  windowElement.style.display = 'block';
  modalElement.style.display = 'block';
});
closeElement.addEventListener('click', function () {
  windowElement.style.display = 'none';
  modalElement.style.display = 'none';
});
LogInButton.addEventListener('click', function () {
  modalElement.style.display = 'block';
  SignUpModalElement.style.display = 'none';
});
SignUpButton.addEventListener('click', function () {
  modalElement.style.display = 'none';
  SignUpModalElement.style.display = 'block';
});
SignUpCloseElement.addEventListener('click', function () {
  SignUpModalElement.style.display = 'none';
  windowElement.style.display = 'none';
});


