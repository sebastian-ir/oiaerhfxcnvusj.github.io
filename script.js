document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Grab all the dropdown items created by Materialize
    const dropdownItems = document.querySelectorAll('ul.dropdown-content li');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {
            const theme = this.textContent.toLowerCase().trim();
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    });
});
