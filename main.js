function mostrarResultado(resultado){
    document.getElementById("resultado").value = resultado;
}

function suma(){
    let primerCampo = +document.getElementById("campo1").value;
    let segCampo = +document.getElementById("campo2").value;
    mostrarResultado(primerCampo + segCampo);
}

function resta(){
    let primerCampo = +document.getElementById("campo1").value;
    let segCampo = +document.getElementById("campo2").value;
    mostrarResultado(primerCampo - segCampo);
}

function multiplicacion(){
    let primerCampo = +document.getElementById("campo1").value;
    let segCampo = +document.getElementById("campo2").value;
    mostrarResultado(primerCampo * segCampo);
}

function division(){
    let primerCampo = +document.getElementById("campo1").value;
    let segCampo = +document.getElementById("campo2").value;
    mostrarResultado(primerCampo / segCampo);
}

function raiz(){
    let numero = +document.getElementById("campo2").value;
    mostrarResultado(Math.sqrt(numero));
}

function potencia(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(Math.pow(numero1, numero2));
}

function absoluto(){
    let numero = +document.getElementById("campo2").value;
    mostrarResultado(Math.abs(numero));
}

function aleatorio(){
    let minimo = +document.getElementById("campo1").value;
    let maximo = +document.getElementById("campo2").value;
    maximo = maximo + 1;
    mostrarResultado(Math.floor(Math.random()*(maximo - minimo) + minimo));
}

function redondear(){
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.round(resultado));
}

function alPiso(){
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.floor(resultado));
}

function alTecho(){
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.ceil(resultado));
}