const btn = document.getElementById('add-service');
const servicesContainer = document.getElementById('services');
let count = 1;

btn.addEventListener('click', () => {
    if (servicesContainer.childNodes.length - 1 === 6) return;
    
    const nameInput = document.createElement('input');
    const priceInput = document.createElement('input');
    const deleteBtn = document.createElement('button');
    const serviceContainer = document.createElement('div');
    serviceContainer.append(addNameAttributes(nameInput));
    serviceContainer.append(addPriceAttributes(priceInput));
    serviceContainer.append(addBtnAttributes(deleteBtn));
    servicesContainer.append(serviceContainer);
    count += 1;
});

function addNameAttributes(input) {
    input.setAttribute('type', 'text');
    input.setAttribute('name', `listing[services_attributes][${count}][name]`);
    input.setAttribute('id', `listing_services_attributes_${count}_name`)
    input.setAttribute('class', 'mb-4')
    return input
}

function addPriceAttributes(input) {
    input.setAttribute('type', 'text');
    input.setAttribute('name', `listing[services_attributes][${count}][price]`);
    input.setAttribute('id', `listing_services_attributes_${count}_price`)
    input.setAttribute('class', 'mb-4')
    return input
}

function addBtnAttributes(btn) {
    btn.setAttribute('type', 'button');
    btn.setAttribute('id', 'remove-service');
    btn.setAttribute('class', 'bg-red-600 ml-2 w-6 text-center text-white rounded-full hover:opacity-70');
    btn.textContent = 'x'
    return btn
}

//<label for="listing_services_attributes_0_name">Name</label>
//<label for="listing_services_attributes_0_price">Price</label>