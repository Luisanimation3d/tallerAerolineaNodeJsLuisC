const formulario = document.getElementById('formulario');
const message = document.querySelector('#mensajeSalida')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    try{
        const date = new Date();
        const departing = e.target.departing.value;
        const returning = e.target.returning.value;
        if(departing === '' || returning === '') {
            throw 'Las fechas son obligatorias';
        }
        // validar que las fechas ingresadas no sean menores que la actual
        if(!new Date(departing) >= date || !new Date(returning) >= date) {
            throw 'Las fechas no pueden ser menores a la actual';
        }

        // validar que la fecha de regreso no sea menor a la de salida
        if(new Date(departing) > new Date(returning)) {
            throw 'La fecha de regreso no puede ser menor a la de salida';
        }
        
        message.style.color = '#4CAF50';
        message.innerText = 'Datos validados correctamente';
    }catch(error){
        message.style.color = '#f44336';
        message.innerText = error;
    }
})