document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.querySelector('input[type="checkbox"]');
    const link = document.getElementById('specialLinkForDarkTheme');

    const darkThemeEnabled = localStorage.getItem('darkThemeEnabled');
    if (darkThemeEnabled === 'true') {
        checkbox.checked = true;
        link.href = 'Style/Dark%20theme.css';
    }
    else {
        checkbox.checked = false;
        link.href = '';
    }

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            link.href = 'Style/Dark%20theme.css';
            localStorage.setItem('darkThemeEnabled', 'true');
        }
        else {
            link.href = '';
            localStorage.removeItem('darkThemeEnabled');
        }
    });
});

