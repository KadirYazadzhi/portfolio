const submitBtn = document.querySelector(".submit-button");
const inputs = document.querySelectorAll(".contact input");
const textarea = document.querySelector(".contact textarea");

submitBtn.addEventListener("click", (e) => {
    setTimeout(() => {
        inputs.forEach((input) => {
            input.value = '';
        });
        textarea.value = '';
    }, 2000);
});
