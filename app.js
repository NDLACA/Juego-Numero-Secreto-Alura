let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximoIntentos = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto) {

    let elementoHMTL = document.querySelector (elemento);
    elementoHMTL.innerHTML = texto;
    return;
}
function verificarIntento () {
    let numerDeUsuario = parseInt(document.getElementById ("valorUsuario").value); 

    if (numerDeUsuario === numeroSecreto) {
        asignarTextoElemento ("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        // El usuario no acertó.
    } else {
        if (numerDeUsuario > numeroSecreto) {
            asignarTextoElemento ("p", "El número secreto es menor");
        } else {
            asignarTextoElemento ("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}    
function limpiarCaja (){
    //Otra forma de hacerlo
    // let limpiarCaja = document.querySelector("#valorUsuario");
    // valorCaja.value = "";
    document.querySelector("#valorUsuario").value = "";
    
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximoIntentos)+1;

    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximoIntentos) {
        asignarTextoElemento ("p","Ya se sortearon todos los números posibles");
    } else {
            //Si el número generado esta incluido en la lista
            if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
            }
    }
}
function condicionesIniciales (){
    asignarTextoElemento ("h1","Juego del número secreto");
    asignarTextoElemento ("p",`Indica un número del 1 al ${numeroMaximoIntentos}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;

}
function reiniciarJuego (){
    //limpar caja
    limpiarCaja();
    //Indicar mensaje de intervalos de números
    //Generar el número aleatorio
    //Iniciar el número de intentos
    condicionesIniciales();
    //Deshabilitar botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    
}

condicionesIniciales();

