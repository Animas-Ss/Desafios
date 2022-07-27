class Display{
    // agregamos el costructor de la clace que son los elementos o variabels de mi calculadora
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;//elementos que queremos modificar
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = ''; // valor Actual y el valor anterior son los numeros que estamos guardando
        this.calorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-',
        }
        
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }
    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();

    }
// metodo para agregar numeros 
    agregarNumero(numero){
        // this.valorActual.includes('.') pregunta si el valor actual tiene un punto incluido
        //preguntamos si lo que estamos ingresando es un punto y si es un punto y el valor actual incluye (include('.')) un punto retortnar (return) sin hacer nada
        if(numero === '.' && this.valorActual.includes('.'))return// validacion para no poner dos puntos seguidos , si al condicion se cumple se sale sin hacer nada 
        // this.valorActual esta linea de codigo nos permite que el valor se guarde y sumarle el numero concatena el nuevo numero que digitemos
        // por eso igualamos nuestra variable pata que valla aguardando los valores con la concatenacion de this.valorActual.toString() + numero.toString();
        this.valorActual = this.valorActual.toString() + numero.toString();//toString nos da la certesa que trabajamos con cadena de string (cadena de caraccteres)
        this.imprimirValores();
    }

// metodo para imprimir valores
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }
    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return // isNaN es una funcion  de javaScript que nos permite preguntar si nuestra variable es un none namber osea una strig vacia
        //preguntamos si cualquierra de estois dos es NaN no hacemos ninguna operacion poresos retornamos (return)sin hacer nada
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
        //
    }
    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();

    }
}