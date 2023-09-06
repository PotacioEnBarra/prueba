var intentos = 2;
var contadorpositivos = 0;
window.addEventListener('load', inicio, false);

function inicio() {
    for (let i = 1; i <= 6; i++) {
        const wordElement = document.getElementById('word-' + i);
        wordElement.addEventListener('dragstart', dragInicio, false);
    }
    
    for (let i = 1; i <= 6; i++) {
        const recuadroElement = document.getElementById('container-paragraph-words-' + i);
        recuadroElement.addEventListener('dragover', allowDrop, false);
        recuadroElement.addEventListener('drop', drop, false);
    }

}

function dragInicio(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var dato = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(dato));
    document.getElementById(dato);
    validarCampos(ev)
}

function allowDrop(ev) {
    ev.preventDefault();
}

function checkElement(id, recuadro) {
    let color = "rgb(217, 113, 113)";
    if (document.getElementById(id).parentNode.id == recuadro) {
        color = "rgb(111, 237, 111)";
    } else { }
    document.getElementById(recuadro).style.background = color;
}

function validarCampos(ev) {
    var contador = 0

    for (let i = 1; i <= 6; i++) {
        let auxRecuadro = "container-paragraph-words-" + i;

        for (let j = 1; j <= 6; j++) {
            let auxPalabra = "word-" + j;
            if (document.getElementById(auxPalabra).parentNode.id == auxRecuadro) {
                contador = contador + 1;
            }
        }
    }
    if (contador == 6) {
        document.getElementById("btn-validar").style.display = "unset";
    }
}

function validate(ev) {
    if (intentos == 0) {
        if (contadorpositivos >= 6) {
            alert("¡Felicitaciones!Haz logrado organizar correctamente cada uno de los términos y así recordar la definición de la arquitectura multiprocesador.Sigue estudiando para ser cada vez mejor.");
        } else {
            alert("Estudia una vez más la arquitectura procesador e inténtalo de nuevo.");
        }
    }
    if (intentos > 0) {

        var divPalabras = document.getElementById("words");
        for (let index = 1; index <= 6; index++) {
            let auxPalabra = "word-" + index;
            let auxRecuadro = "container-paragraph-words-" + index;
            checkElement(auxPalabra, auxRecuadro);
            if (document.getElementById(auxPalabra).parentNode.id == auxRecuadro) {
                contadorpositivos = contadorpositivos + 1;
            } else {
                var palabraMal = document.getElementById(auxPalabra);
                divPalabras.appendChild(palabraMal);
                this.inicio();
            }
        }
        if (intentos == 0) {
            if (contadorpositivos >= 6) {
                alert("¡Felicitaciones!Haz logrado organizar correctamente cada uno de los términos y así recordar la definición de la arquitectura multiprocesador.Sigue estudiando para ser cada vez mejor.");
            } else {
                alert("Estudia una vez más la arquitectura procesador e inténtalo de nuevo.");
            }
        }
        intentos = intentos - 1
        alert("Quedan " + intentos + " Intentos");

    } else {
        document.getElementById("btn-validar").style.display = "none";
    }
}