// Custom Modal System
class CustomModal {
    constructor() {
        this.createModal();
    }

    createModal() {
        const modalHTML = `
            <div id="customModal" class="modal-overlay">
                <div class="modal-card">
                    <div class="modal-header">
                        <div class="modal-icon" id="modalIcon">
                            <i class="fas fa-info-circle"></i>
                        </div>
                        <h3 class="modal-title" id="modalTitle">Confirmation</h3>
                    </div>
                    <div class="modal-message" id="modalMessage">
                        Are you sure you want to proceed?
                    </div>
                    <div class="modal-actions" id="modalActions">
                        <button class="modal-btn modal-btn-secondary" id="modalCancel">Cancel</button>
                        <button class="modal-btn modal-btn-primary" id="modalConfirm">Confirm</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modal = document.getElementById('customModal');
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Close modal when clicking overlay
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hide();
            }
        });

        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.hide();
            }
        });
    }

    show(options = {}) {
        const {
            title = 'Confirmation',
            message = 'Are you sure?',
            type = 'info', // info, warning, error, success
            confirmText = 'Confirm',
            cancelText = 'Cancel',
            onConfirm = () => {},
            onCancel = () => {},
            showCancel = true
        } = options;

        // Update content
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalMessage').textContent = message;
        
        // Update icon
        const iconElement = document.getElementById('modalIcon');
        const icons = {
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-triangle',
            error: 'fas fa-times-circle',
            success: 'fas fa-check-circle'
        };
        
        iconElement.className = `modal-icon ${type}`;
        iconElement.innerHTML = `<i class="${icons[type]}"></i>`;

        // Update buttons
        const actionsContainer = document.getElementById('modalActions');
        const confirmBtn = document.getElementById('modalConfirm');
        const cancelBtn = document.getElementById('modalCancel');

        confirmBtn.textContent = confirmText;
        cancelBtn.textContent = cancelText;
        cancelBtn.style.display = showCancel ? 'block' : 'none';

        // Update confirm button style based on type
        confirmBtn.className = `modal-btn ${type === 'error' || type === 'warning' ? 'modal-btn-danger' : 'modal-btn-primary'}`;

        // Set up event handlers
        const handleConfirm = () => {
            this.hide();
            onConfirm();
        };

        const handleCancel = () => {
            this.hide();
            onCancel();
        };

        // Remove old listeners and add new ones
        confirmBtn.replaceWith(confirmBtn.cloneNode(true));
        cancelBtn.replaceWith(cancelBtn.cloneNode(true));
        
        document.getElementById('modalConfirm').addEventListener('click', handleConfirm);
        document.getElementById('modalCancel').addEventListener('click', handleCancel);

        // Show modal
        this.modal.classList.add('active');
    }

    hide() {
        this.modal.classList.remove('active');
    }

    // Static methods for easy use
    static alert(message, title = 'Alert', type = 'info') {
        return new Promise((resolve) => {
            window.customModal.show({
                title,
                message,
                type,
                confirmText: 'OK',
                showCancel: false,
                onConfirm: resolve
            });
        });
    }

    static confirm(message, title = 'Confirm', type = 'warning') {
        return new Promise((resolve) => {
            window.customModal.show({
                title,
                message,
                type,
                confirmText: 'Yes',
                cancelText: 'No',
                onConfirm: () => resolve(true),
                onCancel: () => resolve(false)
            });
        });
    }
}

// Initialize modal system
window.customModal = new CustomModal();

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
                CustomModal.alert('Please select items to delete.', 'No Items Selected', 'warning');
                return;
            }

            const confirmed = await CustomModal.confirm(
                `Are you sure you want to delete ${ids.length} selected items? This action cannot be undone.`,
                'Delete Items',
                'warning'
            );

            if (confirmed) {
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
                        await CustomModal.alert(result.message, 'Success', 'success');
                        location.reload();
                    } else {
                        await CustomModal.alert('Error: ' + result.error, 'Error', 'error');
                    }
                } catch (error) {
                    await CustomModal.alert('Network error. Please try again.', 'Network Error', 'error');
                }
            }
        });
    });
});

// Logout confirmation handler
async function handleLogout(event) {
    event.preventDefault();
    
    const confirmed = await CustomModal.confirm(
        'Are you sure you want to logout? You will need to login again to access the admin panel.',
        'Confirm Logout',
        'warning'
    );
    
    if (confirmed) {
        window.location.href = '/admin/logout';
    }
}
