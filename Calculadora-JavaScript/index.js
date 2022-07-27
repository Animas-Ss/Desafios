const displayValorAnterior = document.getElementById('ValorAnterior');
const displayValorActual = document.getElementById('ValorActual');
const botonesNumero = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorActual, displayValorAnterior);

botonesNumero.forEach(boton => {
    boton.addEventListener('click',()=>{
        display.agregarNumero(boton.innerHTML)
    });
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', ()=>{
        display.computar(boton.value)
    });
});

