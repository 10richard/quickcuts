const btn = document.getElementById('add-service');
const servicesContainer = document.getElementById('services');
let count = parseInt(servicesContainer.lastElementChild.id.split('_')[3]) + 1;

btn.addEventListener('click', () => {
    if (servicesContainer.querySelectorAll('div').length > 4) return;
    
    const nameLabel = document.createElement('label')
    const priceLabel = document.createElement('label')
    const nameInput = document.createElement('input');
    const priceInput = document.createElement('input');
    const deleteBtn = document.createElement('button');
    const serviceContainer = document.createElement('div');
    serviceContainer.append(addLabelAttributes(nameLabel, 'name'));
    serviceContainer.append(addNameAttributes(nameInput));
    serviceContainer.append(addLabelAttributes(priceLabel, 'price'));
    serviceContainer.append(addPriceAttributes(priceInput));
    serviceContainer.append(addBtnAttributes(deleteBtn));
    servicesContainer.append(serviceContainer);
    count += 1;
});

function addLabelAttributes(label, name="price") {
    label.setAttribute('class', 'mr-[0.27rem]')
    if (name == 'name') {
        label.setAttribute('for', `listing_services_attributes_${count}_name`);
        label.textContent = 'Name';
        return label;
    };
    label.setAttribute('for', `listing_services_attributes_${count}_price`);
    label.textContent = 'Price';
    return label;
}

function addNameAttributes(input) {
    input.setAttribute('type', 'text');
    input.setAttribute('name', `listing[services_attributes][${count}][name]`);
    input.setAttribute('id', `listing_services_attributes_${count}_name`)
    input.setAttribute('class', 'mb-4 mr-[0.275rem]');
    return input
}

function addPriceAttributes(input) {
    input.setAttribute('type', 'text');
    input.setAttribute('name', `listing[services_attributes][${count}][price]`);
    input.setAttribute('id', `listing_services_attributes_${count}_price`)
    input.setAttribute('class', 'mb-4 mr-[0.275rem]');
    return input
}

function addBtnAttributes(btn) {
    btn.setAttribute('type', 'button');
    btn.setAttribute('id', 'remove-service');
    btn.setAttribute('class', 'bg-red-600 ml-2 w-6 text-center text-white rounded-full hover:opacity-70');
    btn.textContent = 'x';
    return btn
}