let car: Car;

window.addEventListener('load', onPageLoad);

function onPageLoad() {
  const wheelsForm = <HTMLElement>document.querySelector('#wheelsForm');
  wheelsForm.style.display = 'none';

  const carInfo = <HTMLElement>document.querySelector('.carInfo');
  carInfo.style.display = 'none';

  const wheelsInfo = <HTMLElement>document.querySelector('.wheelsInfo');
  wheelsInfo.style.display = 'none';
}

function createCar(plate:string,brand:string,color:string){
    car = new Car(plate,color,brand);
    const plateSpan = <HTMLElement>document.querySelector('#plateSpan');
    const brandSpan = <HTMLElement>document.querySelector('#brandSpan');
    const colorSpan = <HTMLElement>document.querySelector('#colorSpan');

    plateSpan.innerHTML = plate;
    brandSpan.innerHTML = brand;
    colorSpan.innerHTML = color;
}

function validatePlate(plate: string) {
  var patt = /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/;
  return patt.test(plate);
}

function validateCarForm() {
  let errors = 0;
  const plateInput = <HTMLInputElement>document.querySelector('#plateInput');
  const brandInput = <HTMLInputElement>document.querySelector('#brandInput');
  const colorInput = <HTMLInputElement>document.querySelector('#colorInput');

  if (!plateInput.value || !validatePlate(plateInput.value)) {
    plateInput.classList.add('is-invalid')
    errors++;
  } else {
    plateInput.classList.remove('is-invalid')
  }

  if (!brandInput.value) {
    brandInput.classList.add('is-invalid')
    errors++;
  } else {
    brandInput.classList.remove('is-invalid')
  }

  if (!colorInput.value) {
    colorInput.classList.add('is-invalid')
    errors++;
  } else {
    colorInput.classList.remove('is-invalid')
  }

  if (errors > 0) {
    return false;
  } else {
    createCar(plateInput.value, brandInput.value, colorInput.value);

    const wheelsForm = <HTMLElement>document.querySelector('#wheelsForm');
    wheelsForm.style.display = 'block';

    const carInfo = <HTMLElement>document.querySelector('.carInfo');
    carInfo.style.display = 'block';

    return false;
  }
}
function validateDiameter(diameter: string) {
  if (parseInt(diameter) >= 0.4 && parseInt(diameter) <= 2){
    return true;
  } else {
    return false;
  }
}

function validateWheelsForm() {
  let errors = 0;
  const brandWheel1Input = <HTMLInputElement>document.querySelector('#brandWheel1Input');
  const diameterWheel1Input = <HTMLInputElement>document.querySelector('#diameterWheel1Input');

  const brandWheel2Input = <HTMLInputElement>document.querySelector('#brandWheel2Input');
  const diameterWheel2Input = <HTMLInputElement>document.querySelector('#diameterWheel2Input');

  const brandWheel3Input = <HTMLInputElement>document.querySelector('#brandWheel3Input');
  const diameterWheel3Input = <HTMLInputElement>document.querySelector('#diameterWheel3Input');

  const brandWheel4Input = <HTMLInputElement>document.querySelector('#brandWheel4Input');
  const diameterWheel4Input = <HTMLInputElement>document.querySelector('#diameterWheel4Input');
  // Rueda 1
  if (!brandWheel1Input.value) {
    brandWheel1Input.classList.add('is-invalid')
    errors++;
  } else {
    brandWheel1Input.classList.remove('is-invalid')
  }

  if (!diameterWheel1Input.value || !validateDiameter(diameterWheel1Input.value)) {
    diameterWheel1Input.classList.add('is-invalid')
    errors++;
  } else {
    diameterWheel1Input.classList.remove('is-invalid')
  }
  // Rueda 2
  if (!brandWheel2Input.value) {
    brandWheel2Input.classList.add('is-invalid')
    errors++;
  } else {
    brandWheel2Input.classList.remove('is-invalid')
  }

  if (!diameterWheel2Input.value || !validateDiameter(diameterWheel2Input.value)) {
    diameterWheel2Input.classList.add('is-invalid')
    errors++;
  } else {
    diameterWheel2Input.classList.remove('is-invalid')
  }

  // Rueda 3
  if (!brandWheel3Input.value) {
    brandWheel3Input.classList.add('is-invalid')
    errors++;
  } else {
    brandWheel3Input.classList.remove('is-invalid')
  }

  if (!diameterWheel3Input.value || !validateDiameter(diameterWheel3Input.value)) {
    diameterWheel3Input.classList.add('is-invalid')
    errors++;
  } else {
    diameterWheel3Input.classList.remove('is-invalid')
  }

    // Rueda 4
    if (!brandWheel4Input.value) {
      brandWheel4Input.classList.add('is-invalid')
      errors++;
    } else {
      brandWheel4Input.classList.remove('is-invalid')
    }
  
    if (!diameterWheel4Input.value || !validateDiameter(diameterWheel4Input.value)) {
      diameterWheel4Input.classList.add('is-invalid')
      errors++;
    } else {
      diameterWheel4Input.classList.remove('is-invalid')
    }
  if (errors > 0) {
    return false;
  } else {
    const wheelsInfo = <HTMLElement>document.querySelector('.wheelsInfo');
    wheelsInfo.style.display = 'block'; 

    // Añádir Rueda 1
    const wheel1 = new Wheel(parseInt(diameterWheel1Input.value), brandWheel1Input.value);
    car.addWheel(wheel1);

    // Actualizar info rueda 1
    const brandWheel1Span = <HTMLSpanElement>document.querySelector('#brandWheel1Span');
    const diameterWheel1Span = <HTMLSpanElement>document.querySelector('#diameterWheel1Span');
    brandWheel1Span.innerHTML = wheel1.brand;
    diameterWheel1Span.innerHTML = wheel1.diameter.toString();

    // Añádir Rueda 2
    const wheel2 = new Wheel(parseInt(diameterWheel2Input.value), brandWheel2Input.value);
    car.addWheel(wheel2);

    // Actualizar info rueda 2
    const brandWheel2Span = <HTMLSpanElement>document.querySelector('#brandWheel2Span');
    const diameterWheel2Span = <HTMLSpanElement>document.querySelector('#diameterWheel2Span');
    brandWheel2Span.innerHTML = wheel2.brand;
    diameterWheel2Span.innerHTML = wheel2.diameter.toString();

    // Añádir Rueda 3
    const wheel3 = new Wheel(parseInt(diameterWheel3Input.value), brandWheel3Input.value);
    car.addWheel(wheel3);

    // Actualizar info rueda 3
    const brandWheel3Span = <HTMLSpanElement>document.querySelector('#brandWheel3Span');
    const diameterWheel3Span = <HTMLSpanElement>document.querySelector('#diameterWheel3Span');
    brandWheel3Span.innerHTML = wheel3.brand;
    diameterWheel3Span.innerHTML = wheel3.diameter.toString();

    // Añádir Rueda 4
    const wheel4 = new Wheel(parseInt(diameterWheel4Input.value), brandWheel4Input.value);
    car.addWheel(wheel4);

    // Actualizar info rueda 4
    const brandWheel4Span = <HTMLSpanElement>document.querySelector('#brandWheel4Span');
    const diameterWheel4Span = <HTMLSpanElement>document.querySelector('#diameterWheel4Span');
    brandWheel4Span.innerHTML = wheel4.brand;
    diameterWheel4Span.innerHTML = wheel4.diameter.toString();

    return false;
  }
}
