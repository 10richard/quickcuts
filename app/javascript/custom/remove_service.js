const addServiceBtn = document.querySelector('#add-service');
const servicesContainer = document.getElementById('services');
const removeServiceBtns = document.querySelectorAll('#remove-service');

addServiceBtn.addEventListener('click', () => {
    addListenersToRemoveBtns()
});

function addListenersToRemoveBtns() {
    const removeServiceBtns = document.querySelectorAll('#remove-service');
    removeServiceBtns.forEach((btn) => btn.addEventListener('click', () => {
        if (servicesContainer.querySelectorAll('div').length > 1) {
            btn.parentElement.remove();
        }
    }));
};

addListenersToRemoveBtns()