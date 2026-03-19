const select = document.getElementById('Theme');
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
select.value = savedTheme;

select.addEventListener('change', () => {
    document.documentElement.setAttribute('data-theme', select.value);
    localStorage.setItem('theme', select.value);
});
