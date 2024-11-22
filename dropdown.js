const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        // Check if the clicked element is a link <a> inside the dropdown
        if (e.target.tagName.toLowerCase() === 'a') {
            // Allow the link to open normally by NOT preventing the default action
            return; // Simply return, preventing further action in the dropdown click handler
        }

        // Prevent the default action for dropdown clicks (to avoid page reload if links are clicked)
        e.preventDefault();

        // Close all other dropdowns
        dropdowns.forEach(d => {
            if (d !== this) {
                d.classList.remove('clicked');
            }
        });

        // Toggle the 'clicked' class on the clicked dropdown
        this.classList.toggle('clicked');
    });
});

// Add a listener for clicks anywhere outside of the dropdown to close the open one
document.addEventListener('click', function(e) {
    // If the clicked target is not inside any of the dropdowns
    if (!e.target.closest('.dropdown')) {
        // Close all dropdowns by removing the 'clicked' class
        dropdowns.forEach(dropdown => dropdown.classList.remove('clicked'));
    }
});
