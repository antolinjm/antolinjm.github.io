// Theme: toggle applies to page-wrapper for compatibility with existing CSS
function toggleTheme() {
    const wrapper = document.getElementById('page-wrapper');
    const isDark = wrapper.classList.contains('dark-mode');
    const icon = document.querySelector('.theme-icon');

    if (isDark) {
        wrapper.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        icon.textContent = '☀';
    } else {
        wrapper.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        icon.textContent = '☽';
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (savedTheme === null && prefersDark);

    if (isDark) {
        document.getElementById('page-wrapper').classList.add('dark-mode');
        document.querySelector('.theme-icon').textContent = '☽';
    } else {
        document.querySelector('.theme-icon').textContent = '☀';
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (localStorage.getItem('theme') === null) {
        const wrapper = document.getElementById('page-wrapper');
        const icon = document.querySelector('.theme-icon');
        if (e.matches) {
            wrapper.classList.add('dark-mode');
            icon.textContent = '☽';
        } else {
            wrapper.classList.remove('dark-mode');
            icon.textContent = '☀';
        }
    }
});
