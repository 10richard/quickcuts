const addServiceBtn = document.querySelector('#add-service');
const removeServiceBtns = document.querySelectorAll('#remove-service');

addServiceBtn.addEventListener('click', () => {
    addListenersToRemoveBtns()
});

function addListenersToRemoveBtns() {
    const removeServiceBtns = document.querySelectorAll('#remove-service');
    removeServiceBtns.forEach((btn) => btn.addEventListener('click', () => {
        if (removeServiceBtns.length > 1) {
            btn.parentElement.remove();
        }
    }));
};

addListenersToRemoveBtns()