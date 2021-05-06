let car: Car

window.addEventListener('load', onPageLoad)
function onPageLoad(){
    let wheelsForm = <HTMLElement>document.querySelector('#wheelsForm');
    wheelsForm.style.display = 'none'
}

function validatePlate(plate: string) {
    var patt = /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/;
    return patt.test(plate);
}


    function validateCar(){
    let inputPlate = <HTMLInputElement>document.querySelector('#inputPlate');
    let inputBrand = <HTMLInputElement>document.querySelector('#inputBrand');
    let inputColor = <HTMLInputElement>document.querySelector('#inputColor');
    let errors = 0;

    if(!inputPlate.value || !validatePlate(inputPlate.value)){
        errors ++;
        inputPlate.classList.add("is-invalid");
        
    } else {
        inputPlate.classList.remove("is-invalid")
    }
    if(!inputBrand.value){
        errors ++;
        inputBrand.classList.add("is-invalid");
        
    } else {
        inputBrand.classList.remove("is-invalid")
    }
    if(!inputColor.value){
        errors ++;
        inputColor.classList.add("is-invalid");
        
    } else {
        inputColor.classList.remove("is-invalid")
    }
    if (errors > 0){
        return false;
    } else {
        createCar (inputPlate.value, inputBrand.value,inputColor.value)
        let wheelsForm = <HTMLElement>document.querySelector('#wheelsForm')
        wheelsForm.style.display = 'block'
        let carForm = <HTMLElement>document.querySelector('#carForm')
        carForm.style.display = 'none'
        return false;
    }
}

function validateWheelsForm (){
    let brandWheel1Input = <HTMLInputElement>document.querySelector('#brandWheel1Input');
    let diameterWheel1Input = <HTMLInputElement>document.querySelector('#diameterWheel1Input');
    let errors = 0;
    if(!brandWheel1Input.value){
        errors ++;
        brandWheel1Input.classList.add("is-invalid");
        
    } else {
        brandWheel1Input.classList.remove("is-invalid")
    } 

    if(!diameterWheel1Input.value || !validateDiameter(diameterWheel1Input.value)){
            errors ++;
            diameterWheel1Input.classList.add("is-invalid");
            
    } else {
        diameterWheel1Input.classList.remove("is-invalid")
    }
    if (errors > 0){
        return false
    } else {
        car.addWheel(new Wheel(parseInt(diameterWheel1Input.value), brandWheel1Input.value));

    }
   


}
function validateDiameter (diameter: string){
    if (parseInt(diameter) >= 0.4 && parseInt(diameter) <= 2){
        return true
    } else {
        return false
    }
}



function createCar(plate:string,brand:string,color:string){
    car=new Car(plate,color,brand);
    
    let carInfo = <HTMLInputElement>document.querySelector('#carInfo');
    carInfo.innerText="CAR: PLATE: " + car.plate 
    + " COLOR: " +car.color + " BRAND: " + brand 
    + " WHEELS: " + JSON.stringify(car.wheels);
}

