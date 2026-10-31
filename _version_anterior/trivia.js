function respuestaCorrecta() {

    document
        .getElementById("pregunta-1")
        .classList.remove("activa");

    document
        .getElementById("resultado-correcto")
        .classList.add("activa");
}


function respuestaIncorrecta() {

    document
        .getElementById("pregunta-1")
        .classList.remove("activa");

    document
        .getElementById("resultado-incorrecto")
        .classList.add("activa");
}


function irPregunta2() {

    document
        .getElementById("resultado-correcto")
        .classList.remove("activa");

    document
        .getElementById("resultado-incorrecto")
        .classList.remove("activa");

    document
        .getElementById("pregunta-2")
        .classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


function respuestaCorrecta2() {

    document
        .getElementById("pregunta-2")
        .classList.remove("activa");

    document
        .getElementById("resultado-correcto-2")
        .classList.add("activa");
}


function respuestaIncorrecta2() {

    document
        .getElementById("pregunta-2")
        .classList.remove("activa");

    document
        .getElementById("resultado-incorrecto-2")
        .classList.add("activa");
}


function irPregunta3() {

    document
        .getElementById("resultado-correcto-2")
        .classList.remove("activa");

    document
        .getElementById("resultado-incorrecto-2")
        .classList.remove("activa");

    document
        .getElementById("pregunta-3")
        .classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}

function respuestaCorrecta3() {

    document
        .getElementById("pregunta-3")
        .classList.remove("activa");

    document
        .getElementById("resultado-correcto-3")
        .classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


function respuestaIncorrecta3() {

    document
        .getElementById("pregunta-3")
        .classList.remove("activa");

    document
        .getElementById("resultado-incorrecto-3")
        .classList.add("activa");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}
function irConclusion() {
    window.location.href = "conclusion.html";
}