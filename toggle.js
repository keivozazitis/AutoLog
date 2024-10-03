document.addEventListener('DOMContentLoaded', () => {

    const toggle = document.getElementById('theme-toggle');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });


    document.querySelectorAll('.button').forEach(button => {
        // Show overlay when mouse enters the button
        button.addEventListener('mouseenter', function() {
            let parentCard = button.closest('.stils'); // Get the parent card of the button
            let overlay = parentCard.querySelector('.info-overlay'); // Find the overlay within the card
            overlay.style.display = 'block'; // Show the overlay
        });

        // Hide overlay when mouse leaves the button
        button.addEventListener('mouseleave', function() {
            let parentCard = button.closest('.stils'); // Get the parent card of the button
            let overlay = parentCard.querySelector('.info-overlay'); // Find the overlay within the card
            overlay.style.display = 'none'; // Hide the overlay
        });
    });
});
