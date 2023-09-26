function mostrarResultado(resultado){
    document.getElementById("resultado").value = resultado;
}

function suma(){
    let p = document.getElementById("signo1");
    let primerCampo = +document.getElementById("campo1").value;
    let segCampo = +document.getElementById("campo2").value;
    mostrarResultado(primerCampo + segCampo); 
    return p.innerHTML = "+";
}

function resta(){
    let p = document.getElementById("signo1");
    let primerCampo = +document.getElementById("campo1").value;
    let segCampo = +document.getElementById("campo2").value;
    mostrarResultado(primerCampo - segCampo);
    return p.innerHTML = "-";
}

function multiplicacion(){
    let p = document.getElementById("signo1");
    let primerCampo = +document.getElementById("campo1").value;
    let segCampo = +document.getElementById("campo2").value;
    mostrarResultado(primerCampo * segCampo);
    return p.innerHTML = "X";
}

function division(){
    let p = document.getElementById("signo1");
    let primerCampo = +document.getElementById("campo1").value;
    let segCampo = +document.getElementById("campo2").value;
    mostrarResultado(primerCampo / segCampo);
    return p.innerHTML = "÷";
}

function raiz(){
    let p = document.getElementById("signo1");
    let numero = +document.getElementById("campo2").value;
    mostrarResultado(Math.sqrt(numero));
    return p.innerHTML = "√";
}

function potencia(){
    let p = document.getElementById("signo1");
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(Math.pow(numero1, numero2));
    return p.innerHTML = "^";
}

function absoluto(){
    let p = document.getElementById("signo1");
    let numero = +document.getElementById("campo2").value;
    mostrarResultado(Math.abs(numero));
    return p.innerHTML = "| |";
}

function aleatorio(){
    let p = document.getElementById("signo1");
    let minimo = +document.getElementById("campo1").value;
    let maximo = +document.getElementById("campo2").value;
    maximo = maximo + 1;
    mostrarResultado(Math.floor(Math.random()*(maximo - minimo) + minimo));
    return p.innerHTML = "Rand";
}

function redondear(){
    let p = document.getElementById("signo1");
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.round(resultado));
    return p.innerHTML = "O";
}

function alPiso(){
    let p = document.getElementById("signo1");
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.floor(resultado));
    return p.innerHTML = "↓";
}

function alTecho(){
    let p = document.getElementById("signo1");
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.ceil(resultado));
    return p.innerHTML = "↑";
}