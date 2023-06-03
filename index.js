// regex validation
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[0-9]).{6,24}$/;
const USERNAME_REGEX = /^(?=.*[a-z])(?=.*[0-9]).{2,16}$/;
const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const NUMBER_REGEX = /^[0-9]{6,16}$/;

const inputNombre = document.querySelector('#nombre');
const inputCorreo = document.querySelector('#correo');
const inputNumero = document.querySelector('#numero');
const inputContraseña = document.querySelector('#contraseña');
const inputConfirmarContraseña = document.querySelector('#confirmar-contraseña');
const FormBtn = document.querySelector('#btn');
FormBtn.disabled = true;
// Validacion
let nombreValidacion = false
let correoValidacion = false
let contraseñaValidacion = false
let confirmarContraseñaValidacion = false
let numeroValidacion = false


const validacion = () =>{
     if (!nombreValidacion || !correoValidacion || !contraseñaValidacion   || !confirmarContraseñaValidacion  || !numeroValidacion ) {
        FormBtn.disabled = true;
    }
    else{
        FormBtn.disabled = false;
    }
}


inputNombre.addEventListener('input', element => {
    const formato = element.target.parentElement.children[1]
    if(USERNAME_REGEX.test(element.target.value)){
        console.log("si se puede");
        nombreValidacion = true
        formato.classList.remove('informacion-visible')
        inputNombre.classList.add('correcto')
        inputNombre.classList.remove('incorrecto')
    }
    else{
        console.log("No esta validado");
        formato.classList.add('informacion-visible')
        inputNombre.classList.add('incorrecto')
        inputNombre.classList.remove('correcto')
        nombreValidacion = false
    };
    validacion();
})



inputCorreo.addEventListener('input', element => {
    const formato = element.target.parentElement.children[1]
    if(EMAIL_REGEX.test(element.target.value)){
        console.log("si se puede");
        correoValidacion = true
        formato.classList.remove('informacion-visible')
        inputCorreo.classList.add('correcto')
        inputCorreo.classList.remove('incorrecto')
    }
    else{
        console.log("No esta validado");
        formato.classList.add('informacion-visible')
        inputCorreo.classList.add('incorrecto')
        inputCorreo.classList.remove('correcto')
        correoValidacion = false
    };
    validacion();
})

inputNumero.addEventListener('input', element => {
    const formato = element.target.parentElement.children[1]
    if(NUMBER_REGEX.test(element.target.value)){
        console.log("si se puede");
        numeroValidacion = true
        formato.classList.remove('informacion-visible')
        element.target.classList.add('correcto')
        element.target.classList.remove('incorrecto')
    }
    else{
        console.log("No esta validado");
        formato.classList.add('informacion-visible')
        element.target.classList.add('incorrecto')
        element.target.classList.remove('correcto')
        numeroValidacion = false
    };
    validacion();
})

inputContraseña.addEventListener('input', element => {
    console.log(inputConfirmarContraseña.value);
    const formato = element.target.parentElement.children[1]
    if(PASSWORD_REGEX.test(element.target.value)){
        console.log("si se puede");
        contraseñaValidacion = true
        formato.classList.remove('informacion-visible')
        element.target.classList.add('correcto')
        element.target.classList.remove('incorrecto')
    }
    else{
        console.log("No esta validado");
        formato.classList.add('informacion-visible')
        element.target.classList.add('incorrecto')
        element.target.classList.remove('correcto')
        contraseñaValidacion = false
    };

    validacion();
})

inputConfirmarContraseña.addEventListener('input', element => {
    const formato = element.target.parentElement.children[1]
    if(element.target.value === inputContraseña.value){
        console.log("si se puede");
        confirmarContraseñaValidacion = true
        formato.classList.remove('informacion-visible')
        element.target.classList.add('correcto')
        element.target.classList.remove('incorrecto')
    }
    else{
        console.log("No esta validado");
        formato.classList.add('informacion-visible')
        element.target.classList.add('incorrecto')
        element.target.classList.remove('correcto')
        confirmarContraseñaValidacion = false
    };
    validacion();
})
