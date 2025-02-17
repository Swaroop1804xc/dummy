function reachOut() {
    alert("Thank you for reaching out! You can contact me at: swaroopchanna@gmail.com");
}

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});