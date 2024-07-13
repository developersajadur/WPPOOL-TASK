document.addEventListener('DOMContentLoaded', () => {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    const dropdownHiddenButtons = document.querySelectorAll('.dropdown-hidden');

    dropdownButtons.forEach((button, index) => {
        const menu = dropdownMenus[index];
        const hiddenButton = dropdownHiddenButtons[index];

        // Toggle dropdown visibility on button click
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click from bubbling up
            menu.classList.toggle('hidden'); // Toggle hidden class
        });

        // Hide dropdown on close button click inside the dropdown
        hiddenButton.addEventListener('click', (event) => {
            event.stopPropagation();
            menu.classList.add('hidden');
        });

        // Close dropdown if clicking outside
        document.addEventListener('click', (event) => {
            if (!button.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.add('hidden'); // Hide dropdown
            }
        });
    });
});

// click the first dropdown menu item
