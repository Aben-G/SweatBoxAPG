document.addEventListener('DOMContentLoaded', () => {
    // Tab switching logic
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const tab = link.dataset.tab;

            tabLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');

            tabContents.forEach(content => {
                if (content.id === tab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    const themeSwitcher = document.getElementById('theme-switcher');
    const currentTheme = localStorage.getItem('theme');

    // Function to update button text and icon
    function updateButtonText() {
        if (document.body.classList.contains('light-theme')) {
            themeSwitcher.textContent = 'Dark 🌙';
        } else {
            themeSwitcher.textContent = 'Light ☀️';
        }
    }

    // Apply saved theme and update button
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }
    updateButtonText();

    themeSwitcher.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        let theme = 'dark-theme';
        if (document.body.classList.contains('light-theme')) {
            theme = 'light-theme';
        }
        localStorage.setItem('theme', theme);
        updateButtonText();
    });

    // Delete functionality
    const checkboxes = document.querySelectorAll('.select-item');
    const selectAllCheckboxes = document.querySelectorAll('.select-all');
    const deleteButtons = document.querySelectorAll('.delete-btn');

    function toggleDeleteButton(type) {
        const selectedCheckboxes = document.querySelectorAll(`#${type} .select-item:checked`);
        const deleteButton = document.querySelector(`.delete-btn[data-type="${type}"]`);
        if (selectedCheckboxes.length > 0) {
            deleteButton.classList.remove('hidden');
        } else {
            deleteButton.classList.add('hidden');
        }
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const type = checkbox.closest('.tab-content').id;
            toggleDeleteButton(type);
        });
    });

    selectAllCheckboxes.forEach(selectAll => {
        selectAll.addEventListener('change', () => {
            const type = selectAll.dataset.type;
            const itemCheckboxes = document.querySelectorAll(`#${type} .select-item`);
            itemCheckboxes.forEach(checkbox => {
                checkbox.checked = selectAll.checked;
            });
            toggleDeleteButton(type);
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const type = button.dataset.type;
            const selectedCheckboxes = document.querySelectorAll(`#${type} .select-item:checked`);
            const ids = Array.from(selectedCheckboxes).map(checkbox => checkbox.dataset.id);

            if (ids.length === 0) {
                alert('Please select items to delete.');
                return;
            }

            if (confirm(`Are you sure you want to delete ${ids.length} selected items?`)) {
                try {
                    const response = await fetch('/admin/submissions/delete', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ ids })
                    });

                    const result = await response.json();

                    if (result.success) {
                        alert(result.message);
                        location.reload();
                    } else {
                        alert('Error: ' + result.error);
                    }
                } catch (error) {
                    alert('Network error. Please try again.');
                }
            }
        });
    });
});
