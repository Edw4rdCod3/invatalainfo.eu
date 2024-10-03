const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Check local storage for sidebar state
const isOpen = localStorage.getItem('sidebarOpen') === 'true';
if (isOpen) {
    menu.classList.add('sidebar-open');
}

hamburger.addEventListener('click', () => {
    menu.classList.toggle('sidebar-open');
    // Save sidebar state to local storage
    localStorage.setItem('sidebarOpen', menu.classList.contains('sidebar-open'));
});

// Save sidebar state on page unload
window.addEventListener('beforeunload', () => {
    localStorage.setItem('sidebarOpen', menu.classList.contains('sidebar-open'));
});

document.addEventListener('DOMContentLoaded', (event) => {
    hljs.highlightAll(); // Ensure that highlighting is applied after the DOM is fully loaded
});

function copyCode(button) {
    const code = button.nextElementSibling.textContent;
    navigator.clipboard.writeText(code).then(() => {
        // Change icon to checkmark after copying
        button.innerHTML = '<i class="fas fa-check"></i>';
        
        // Change back to the copy icon after 1.5 seconds
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-copy"></i>';
        }, 1500);
    });
}
