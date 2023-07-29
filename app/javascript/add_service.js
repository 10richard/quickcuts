const btn = document.getElementById('add-service');
const servicesContainer = document.getElementById('services');

btn.addEventListener('click', () => {
    console.log('YAY');
    const serviceInput = document.createElement('input');
    servicesContainer.append(addAttributes(serviceInput));
});

function addAttributes(input) {
    input.setAttribute('multiple', 'multiple')
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'listing[services][]');
    input.setAttribute('id', 'listing_services')
    return input
}