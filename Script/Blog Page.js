
const hiddenButtonToShowSection = document.getElementById('hidden-button');
const leftSection = document.getElementById("left-section");
const arrowToHideSection = document.getElementById('hide-section');
hiddenButtonToShowSection.addEventListener('click', function () {
    leftSection.style.left = '0';
});

arrowToHideSection.addEventListener('click', function () {
    leftSection.style.left = '-100%';
});



