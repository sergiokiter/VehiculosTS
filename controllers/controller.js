"use strict";
var car;
window.addEventListener('load', onPageLoad);
function onPageLoad() {
    var wheelsForm = document.querySelector('#wheelsForm');
    wheelsForm.style.display = 'none';
    var carInfo = document.querySelector('.carInfo');
    carInfo.style.display = 'none';
    var wheelsInfo = document.querySelector('.wheelsInfo');
    wheelsInfo.style.display = 'none';
}
function createCar(plate, brand, color) {
    car = new Car(plate, color, brand);
    var plateSpan = document.querySelector('#plateSpan');
    var brandSpan = document.querySelector('#brandSpan');
    var colorSpan = document.querySelector('#colorSpan');
    plateSpan.innerHTML = plate;
    brandSpan.innerHTML = brand;
    colorSpan.innerHTML = color;
}
function validatePlate(plate) {
    var patt = /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/;
    return patt.test(plate);
}
function validateCarForm() {
    var errors = 0;
    var plateInput = document.querySelector('#plateInput');
    var brandInput = document.querySelector('#brandInput');
    var colorInput = document.querySelector('#colorInput');
    if (!plateInput.value || !validatePlate(plateInput.value)) {
        plateInput.classList.add('is-invalid');
        errors++;
    }
    else {
        plateInput.classList.remove('is-invalid');
    }
    if (!brandInput.value) {
        brandInput.classList.add('is-invalid');
        errors++;
    }
    else {
        brandInput.classList.remove('is-invalid');
    }
    if (!colorInput.value) {
        colorInput.classList.add('is-invalid');
        errors++;
    }
    else {
        colorInput.classList.remove('is-invalid');
    }
    if (errors > 0) {
        return false;
    }
    else {
        createCar(plateInput.value, brandInput.value, colorInput.value);
        var wheelsForm = document.querySelector('#wheelsForm');
        wheelsForm.style.display = 'block';
        var carInfo = document.querySelector('.carInfo');
        carInfo.style.display = 'block';
        return false;
    }
}
function validateDiameter(diameter) {
    if (parseInt(diameter) >= 0.4 && parseInt(diameter) <= 2) {
        return true;
    }
    else {
        return false;
    }
}
function validateWheelsForm() {
    var errors = 0;
    var brandWheel1Input = document.querySelector('#brandWheel1Input');
    var diameterWheel1Input = document.querySelector('#diameterWheel1Input');
    var brandWheel2Input = document.querySelector('#brandWheel2Input');
    var diameterWheel2Input = document.querySelector('#diameterWheel2Input');
    var brandWheel3Input = document.querySelector('#brandWheel3Input');
    var diameterWheel3Input = document.querySelector('#diameterWheel3Input');
    var brandWheel4Input = document.querySelector('#brandWheel4Input');
    var diameterWheel4Input = document.querySelector('#diameterWheel4Input');
    // Rueda 1
    if (!brandWheel1Input.value) {
        brandWheel1Input.classList.add('is-invalid');
        errors++;
    }
    else {
        brandWheel1Input.classList.remove('is-invalid');
    }
    if (!diameterWheel1Input.value || !validateDiameter(diameterWheel1Input.value)) {
        diameterWheel1Input.classList.add('is-invalid');
        errors++;
    }
    else {
        diameterWheel1Input.classList.remove('is-invalid');
    }
    // Rueda 2
    if (!brandWheel2Input.value) {
        brandWheel2Input.classList.add('is-invalid');
        errors++;
    }
    else {
        brandWheel2Input.classList.remove('is-invalid');
    }
    if (!diameterWheel2Input.value || !validateDiameter(diameterWheel2Input.value)) {
        diameterWheel2Input.classList.add('is-invalid');
        errors++;
    }
    else {
        diameterWheel2Input.classList.remove('is-invalid');
    }
    // Rueda 3
    if (!brandWheel3Input.value) {
        brandWheel3Input.classList.add('is-invalid');
        errors++;
    }
    else {
        brandWheel3Input.classList.remove('is-invalid');
    }
    if (!diameterWheel3Input.value || !validateDiameter(diameterWheel3Input.value)) {
        diameterWheel3Input.classList.add('is-invalid');
        errors++;
    }
    else {
        diameterWheel3Input.classList.remove('is-invalid');
    }
    // Rueda 4
    if (!brandWheel4Input.value) {
        brandWheel4Input.classList.add('is-invalid');
        errors++;
    }
    else {
        brandWheel4Input.classList.remove('is-invalid');
    }
    if (!diameterWheel4Input.value || !validateDiameter(diameterWheel4Input.value)) {
        diameterWheel4Input.classList.add('is-invalid');
        errors++;
    }
    else {
        diameterWheel4Input.classList.remove('is-invalid');
    }
    if (errors > 0) {
        return false;
    }
    else {
        var wheelsInfo = document.querySelector('.wheelsInfo');
        wheelsInfo.style.display = 'block';
        // Añádir Rueda 1
        var wheel1 = new Wheel(parseInt(diameterWheel1Input.value), brandWheel1Input.value);
        car.addWheel(wheel1);
        // Actualizar info rueda 1
        var brandWheel1Span = document.querySelector('#brandWheel1Span');
        var diameterWheel1Span = document.querySelector('#diameterWheel1Span');
        brandWheel1Span.innerHTML = wheel1.brand;
        diameterWheel1Span.innerHTML = wheel1.diameter.toString();
        // Añádir Rueda 2
        var wheel2 = new Wheel(parseInt(diameterWheel2Input.value), brandWheel2Input.value);
        car.addWheel(wheel2);
        // Actualizar info rueda 2
        var brandWheel2Span = document.querySelector('#brandWheel2Span');
        var diameterWheel2Span = document.querySelector('#diameterWheel2Span');
        brandWheel2Span.innerHTML = wheel2.brand;
        diameterWheel2Span.innerHTML = wheel2.diameter.toString();
        // Añádir Rueda 3
        var wheel3 = new Wheel(parseInt(diameterWheel3Input.value), brandWheel3Input.value);
        car.addWheel(wheel3);
        // Actualizar info rueda 3
        var brandWheel3Span = document.querySelector('#brandWheel3Span');
        var diameterWheel3Span = document.querySelector('#diameterWheel3Span');
        brandWheel3Span.innerHTML = wheel3.brand;
        diameterWheel3Span.innerHTML = wheel3.diameter.toString();
        // Añádir Rueda 4
        var wheel4 = new Wheel(parseInt(diameterWheel4Input.value), brandWheel4Input.value);
        car.addWheel(wheel4);
        // Actualizar info rueda 4
        var brandWheel4Span = document.querySelector('#brandWheel4Span');
        var diameterWheel4Span = document.querySelector('#diameterWheel4Span');
        brandWheel4Span.innerHTML = wheel4.brand;
        diameterWheel4Span.innerHTML = wheel4.diameter.toString();
        return false;
    }
}
