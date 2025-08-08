/**
 * Shows a modal dialog with the given HTML content.
 * @param {string} htmlContent The full HTML content for the modal's inner structure.
 */
export const showModal = (htmlContent) => {
    // Remove any existing modal first
    const existingModal = document.getElementById('app-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'app-modal';
    modalOverlay.className = 'modal-overlay';
    modalOverlay.innerHTML = htmlContent;
    document.body.appendChild(modalOverlay);

    // Close modal when clicking outside
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            hideModal();
        }
    });
};

/**
 * Hides the currently displayed modal.
 */
export const hideModal = () => {
    const existingModal = document.getElementById('app-modal');
    if (existingModal) {
        existingModal.remove();
    }
};