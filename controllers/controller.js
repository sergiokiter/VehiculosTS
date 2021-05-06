"use strict";
var car;
window.addEventListener('load', onPageLoad);
function onPageLoad() {
    var wheelsForm = document.querySelector('#wheelsForm');
    wheelsForm.style.display = 'none';
}
function validatePlate(plate) {
    var patt = /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/;
    return patt.test(plate);
}
function validateCar() {
    var inputPlate = document.querySelector('#inputPlate');
    var inputBrand = document.querySelector('#inputBrand');
    var inputColor = document.querySelector('#inputColor');
    var errors = 0;
    if (!inputPlate.value || !validatePlate(inputPlate.value)) {
        errors++;
        inputPlate.classList.add("is-invalid");
    }
    else {
        inputPlate.classList.remove("is-invalid");
    }
    if (!inputBrand.value) {
        errors++;
        inputBrand.classList.add("is-invalid");
    }
    else {
        inputBrand.classList.remove("is-invalid");
    }
    if (!inputColor.value) {
        errors++;
        inputColor.classList.add("is-invalid");
    }
    else {
        inputColor.classList.remove("is-invalid");
    }
    if (errors > 0) {
        return false;
    }
    else {
        createCar(inputPlate.value, inputBrand.value, inputColor.value);
        var wheelsForm = document.querySelector('#wheelsForm');
        wheelsForm.style.display = 'block';
        var carForm = document.querySelector('#carForm');
        carForm.style.display = 'none';
        return false;
    }
}
function validateWheelsForm() {
    var brandWheel1Input = document.querySelector('#brandWheel1Input');
    var diameterWheel1Input = document.querySelector('#diameterWheel1Input');
    var errors = 0;
    if (!brandWheel1Input.value) {
        errors++;
        brandWheel1Input.classList.add("is-invalid");
    }
    else {
        brandWheel1Input.classList.remove("is-invalid");
    }
    if (!diameterWheel1Input.value || !validateDiameter(diameterWheel1Input.value)) {
        errors++;
        diameterWheel1Input.classList.add("is-invalid");
    }
    else {
        diameterWheel1Input.classList.remove("is-invalid");
    }
    if (errors > 0) {
        return false;
    }
    else {
        car.addWheel(new Wheel(parseInt(diameterWheel1Input.value), brandWheel1Input.value));
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
function createCar(plate, brand, color) {
    car = new Car(plate, color, brand);
    var carInfo = document.querySelector('#carInfo');
    carInfo.innerText = "CAR: PLATE: " + car.plate
        + " COLOR: " + car.color + " BRAND: " + brand
        + " WHEELS: " + JSON.stringify(car.wheels);
}
