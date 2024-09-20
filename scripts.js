document.addEventListener('DOMContentLoaded', () => {
    // Expand/Collapse Service Details
    const expandButtons = document.querySelectorAll('.expand-btn');

    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;

            if (details.style.maxHeight) {
                details.style.maxHeight = null;
                details.style.opacity = 0;
                button.textContent = '+';
            } else {
                details.style.maxHeight = details.scrollHeight + "px";
                details.style.opacity = 1;
                button.textContent = '−';
            }
        });
    });
});
if (window.innerWidth <= 768) { // Adjust the width as needed
    const userWantsDesktop = confirm("For a better experience, we suggest using the desktop version. Do you want to continue on mobile?");
    if (!userWantsDesktop) {
        // User chooses to stay on mobile, no action needed
    } else {
        // Optionally, redirect to the desktop version
        window.location.href = "https://your-desktop-url.com"; // Change to your desktop URL
    }
}
