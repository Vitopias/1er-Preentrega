let seguirOperando = true;

alert ("Bienvenido! Para calcular el impuesto de su compra, siga las instrucciones")
do {
function aplicarImpuesto(valorDelProducto, valorDeImpuesto) {
    const sumaDeImpuesto = valorDelProducto * valorDeImpuesto / 100;
    const valorConImpuesto = valorDelProducto + sumaDeImpuesto;
    return valorConImpuesto;
}

const valorDelProducto = parseFloat(prompt('Ingrese el valor del producto'));
const valorDeImpuesto = parseFloat(prompt('Ingrese el porcentaje del impuesto a aplicar'));

const valorConImpuesto = aplicarImpuesto(valorDelProducto, valorDeImpuesto);

alert ("El valor del producto con impuesto es de " + valorConImpuesto.toFixed(2) + " pesos");



alert ("Quiere calcular el valor en cuotas?");


function aplicarCuotas(valorConImpuesto, cantCuotas){
    const divisionEnCuotas = valorConImpuesto / cantCuotas;
    return divisionEnCuotas;
}

const cantCuotas = parseInt(prompt("Ingrese la cantidad de cuotas"));
const divisionEnCuotas = aplicarCuotas(valorConImpuesto, cantCuotas);

alert ("Ql valor del producto en " + cantCuotas + " cuotas es de " + divisionEnCuotas.toFixed(2) + " por cuota.");

seguirOperando = confirm("Quiere seguir operando?");

if (!seguirOperando){
    let terminarOperacion = confirm("No quiere seguir operando?");
    if (terminarOperacion){
        alert("Hasta Luego!");
    }
}
}
while (seguirOperando);