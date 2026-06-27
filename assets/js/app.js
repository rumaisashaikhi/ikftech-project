// Theme Initializer function
function applyTheme() {
    // Agar user ne pehle se dark mode select kiya hua hai to apply karein
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) toggleBtn.innerText = '☀️';
    } else {
        document.documentElement.classList.remove('dark');
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) toggleBtn.innerText = '🌙';
    }
}

// Event Listener jab page poora load ho jaye
document.addEventListener('DOMContentLoaded', () => {
    // Page load hote hi sahi theme apply karein
    applyTheme();

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Agar pehle se dark class hai, toh light mode par switch karein
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                themeToggle.innerText = '🌙';
            } else {
                // Warna dark mode apply karein
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.innerText = '☀️';
            }
        });
    }
});