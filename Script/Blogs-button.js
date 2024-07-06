function changePageLocationAndSaveToLocalStorage(clickedButton, id) {
    let button = document.getElementById(clickedButton);
    button.addEventListener('click', () => {
        localStorage.setItem('lastClickedBlogId', id);
        window.location.href = "Blogs.html";
    });
}

function checkLocalStorage(id) {
    if (localStorage.getItem('lastClickedBlogId') === id) {
        return true;
    }
    return false;
}

if (checkLocalStorage("1")) {
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-one', '9');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-two', '7');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-three', '4');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-four', '3');
}
else if (checkLocalStorage("2")) {
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-one', '8');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-two', '7');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-three', '6');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-four', '5');
}
else if (checkLocalStorage("3")) {
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-one', '1');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-two', '4');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-three', '8');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-four', '2');
}
else if (checkLocalStorage("4") || checkLocalStorage("8") || checkLocalStorage("9")) {
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-one', '3');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-two', '6');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-three', '2');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-four', '5');
}
else if (checkLocalStorage("5") || checkLocalStorage("7")) {
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-one', '6');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-two', '9');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-three', '2');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-four', '4');
}
else if (checkLocalStorage("6")) {
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-one', '1');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-two', '4');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-three', '8');
    changePageLocationAndSaveToLocalStorage('blog-button-plus-card-four', '2');
}

