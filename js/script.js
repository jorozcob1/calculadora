function agregar(a) {
    document.getElementById("resultado").innerHTML += a;
}

function calcular() {
    let resultado = document.getElementById("resultado").innerHTML;
    let resultadoFinal = eval(resultado);
    document.getElementById("resultado").innerHTML = resultadoFinal;
}

function borrar() {
    document.getElementById("resultado").innerHTML = "";
}

function borrar() {
    document.getElementById("resultado").innerHTML = "";
}