document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const rueda =
        document.getElementById("rueda");


    const ruedaImagen =
        document.getElementById("rueda-imagen");


    const tituloSeccion =
        document.getElementById("titulo-seccion");


    const imagenCard =
        document.getElementById("imagen-card");


    const imagenCardContenedor =
        document.querySelector(".imagen-card-contenedor");


    const textoCard =
        document.getElementById("texto-card");


    const flechaCard =
        document.getElementById("flecha-card");


    const puntosFlecha =
        document.getElementById("puntos-flecha");


    const flechaRueda =
        document.getElementById("flecha-rueda");


    const frase =
        document.getElementById("frase");


    const iconoFrase =
        document.getElementById("icono-frase");


    /* =====================================================
       DATOS DE LAS SECCIONES
    ===================================================== */

    const secciones = [


        /* =================================================
           1 — LÍMITES
        ================================================= */

        {

            nombre: "LÍMITES",

            icono:
                "imagenes/limite descripcion.png",

            frase:
                'GENERAR <span>NO ES LO MISMO</span><br>QUE DISEÑAR',

            rueda:
                "imagenes/tuerca límites.png",

            cards: [

                {
                    imagen:
                        "imagenes/nucleo limites 1.png",

                    texto:
                        "Pueden aparecer rasgos faciales poco realistas, manos o anatomías incorrectas."
                },

                {
                    imagen:
                        "imagenes/error de texto(limites).png",

                    texto:
                        "También letras distorsionadas o errores en el texto generado."
                },

                {
                    imagen:
                        "imagenes/error en imagenes (limites).png",

                    texto:
                        "Algunos elementos pueden perder coherencia dentro de la imagen."
                },

                {
                    imagen:
                        "imagenes/error de adobe fligtfly.png",

                    texto:
                        "Adobe reconoce actualmente problemas relacionados con texto generado y características faciales o corporales en Firefly."
                },

                {
                    imagen:
                        "imagenes/verse bien pero no funcionar (limites).png",

                    texto:
                        "Una imagen puede verse bien y aun así no funcionar para la pieza."
                },

                {
                    imagen:
                        "imagenes/no determina cuanto contenido (limites).png",

                    texto:
                        "No determina cuánto contenido incluir ni qué información debe tener mayor importancia."
                }

            ]

        },


        /* =================================================
           2 — EDITAR
        ================================================= */

        {

            nombre: "EDITAR",

            icono:
                "imagenes/editar descripcion.png",

            frase:
                '<span>MODIFICAR</span> ES FÁCIL.<br><span>DECIDIR</span> ES DISEÑAR.',

            rueda:
                "imagenes/tuerca editar.png",

            cards: [

                {
                    imagen:
                        "imagenes/agregar o eliminar elementos (editar).png",

                    texto:
                        "Se pueden agregar o eliminar objetos de una imagen sin reconstruirla por completo."
                },

                {
                    imagen:
                        "imagenes/cambiar fondo(editar).png",

                    texto:
                        "Permite cambiar fondos y elementos manteniendo gran parte de la composición original."
                },

                {
                    imagen:
                        "imagenes/diferentes versiones (editar).png",

                    texto:
                        "Puedes probar diferentes versiones de una imagen de manera rápida y sencilla."
                },

                {
                    imagen:
                        "imagenes/extender sus limites (editar).png",

                    texto:
                        "Una imagen puede extender sus límites, completando espacios que antes no existían."
                },

                {
                    imagen:
                        "imagenes/generar diferentes versiones de una propuesta(editar).png",

                    texto:
                        "La IA permite generar distintas versiones de una misma propuesta para compararlas entre sí."
                },

                {
                    imagen:
                        "imagenes/detectar q funciona(editar).png",

                    texto:
                        "A partir de estas opciones, el diseñador puede detectar qué funciona mejor según el objetivo del proyecto."
                },

                {
                    imagen:
                        "imagenes/alternativas (editar).png",

                    texto:
                        "También puede seleccionar, combinar y refinar las alternativas que realmente aportan a la propuesta."
                },

                {
                    imagen:
                        "imagenes/explorar posibilidades (editar).png",

                    texto:
                        "La IA funciona como una herramienta para explorar posibilidades, mientras el diseñador mantiene el criterio para decidir."
                }

            ]

        },


        /* =================================================
           3 — INSPIRACIÓN
        ================================================= */

        {

            nombre: "INSPIRACIÓN",

            icono:
                "imagenes/inspiracion descripcion.png",

            frase:
                'LA IA <span>ABRE CAMINOS</span><br>EL DISEÑADOR ELIGE CUÁL SEGUIR',

            rueda:
                "imagenes/tuerca inspiración.png",

            cards: [

                {
                    imagen:
                        "imagenes/diferentes interpretantes (inspiracion ).jpg",

                    texto:
                        "A partir de una palabra o concepto la IA puede generar distintas interpretaciones visuales."
                },

                {
                    imagen:
                        "imagenes/variaciones ( inspiracion).jpg",

                    texto:
                        "Permite probar estilos, colores y composiciones, incluso sin tener una dirección definida."
                },

                {
                    imagen:
                        "imagenes/explorar(inspiracion).jpg",

                    texto:
                        "La IA funciona como un punto de partida para explorar, no como una propuesta final."
                },

                {
                    imagen:
                        "imagenes/diferentes ideas (inspiracion).jpg",

                    texto:
                        "El diseñador puede seleccionar y desarrollar las ideas que realmente aportan al proyecto."
                },

                {
                    imagen:
                        "imagenes/multiples alternativas (inspiracion).jpg",

                    texto:
                        "Múltiples alternativas permiten comparar estilos, combinaciones y diferentes direcciones visuales."
                },

                {
                    imagen:
                        "imagenes/caminos inesperados (inspiracion).jpg",

                    texto:
                        "La exploración puede ayudar a descubrir caminos inesperados que quizás no habían sido considerados al comienzo."
                },

                {
                    imagen:
                        "imagenes/adaptar al proyecto ( inspiracion).jpg",

                    texto:
                        "El diseñador puede refinar, personalizar y desarrollar la dirección que mejor se adapte al proyecto."
                }

            ]

        },


        /* =================================================
           4 — GENERAR
        ================================================= */

        {

            nombre: "GENERAR",

            icono:
                "imagenes/generar descripcion.png",

            frase:
                'LA IA PUEDE <span>GENERAR</span><br>VOS <span>DECIDÍS</span>',

            rueda:
                "imagenes/tuerca generar.png",

            cards: [

                {
                    imagen:
                        "imagenes/multiples visiones de ina idea (generar).jpg",

                    texto:
                        "Crear múltiples versiones de una misma idea."
                },

                {
                    imagen:
                        "imagenes/cambiar estilos (generar).jpg",

                    texto:
                        "Cambiar estilos, colores y composiciones."
                },

                {
                    imagen:
                        "imagenes/probar posibilidades (generar).jpg",

                    texto:
                        "Probar distintas variaciones y posibilidades."
                },

                {
                    imagen:
                        "imagenes/modificar (generar).jpg",

                    texto:
                        "Iterar modificando las indicaciones para mejorar el resultado."
                },

                {
                    imagen:
                        "imagenes/generar recursos ( generar).jpg",

                    texto:
                        "Generar recursos visuales rápidamente."
                },

                {
                    imagen:
                        "imagenes/generar conceptos (generar).jpg",

                    texto:
                        "Crear conceptos, fondos y escenas."
                },

                {
                    imagen:
                        "imagenes/variaciones (generar).jpg",

                    texto:
                        "Producir variaciones y referencias visuales."
                },

                {
                    imagen:
                        "imagenes/producir contenido en menos tiempo (generar).jpg",

                    texto:
                        "La IA permite producir contenido en menos tiempo."
                }

            ]

        }

    ];


    /* =====================================================
       ESTADO
    ===================================================== */

    let seccionActual = 0;

    let cardActual = 0;

    let ruedaGirando = false;

    let cambiandoCard = false;


    /* =====================================================
       PRECARGAR TODAS LAS IMÁGENES
    ===================================================== */

    secciones.forEach((seccion) => {


        /* -----------------------------------------------
           PRECARGAR TUERCA
        ------------------------------------------------ */

        const imagenRueda =
            new Image();

        imagenRueda.src =
            seccion.rueda;


        /* -----------------------------------------------
           PRECARGAR IMÁGENES DE LAS CARDS
        ------------------------------------------------ */

        seccion.cards.forEach((card) => {

            const imagen =
                new Image();

            imagen.src =
                card.imagen;

        });


        /* -----------------------------------------------
           PRECARGAR ICONO
        ------------------------------------------------ */

        const imagenIcono =
            new Image();

        imagenIcono.src =
            seccion.icono;

    });


    /* =====================================================
       CREAR PUNTITOS
    ===================================================== */

    function crearPuntos() {

        puntosFlecha.innerHTML = "";

        const cantidad =
            secciones[seccionActual].cards.length;


        for (
            let i = 0;
            i < cantidad;
            i++
        ) {

            const punto =
                document.createElement("span");


            punto.classList.add(
                "punto-flecha"
            );


            if (i === cardActual) {

                punto.classList.add(
                    "punto-activo"
                );

            }


            puntosFlecha.appendChild(
                punto
            );

        }

    }


    /* =====================================================
       ACTUALIZAR PUNTITOS
    ===================================================== */

    function actualizarPuntos() {

        const puntos =
            puntosFlecha.querySelectorAll(
                ".punto-flecha"
            );


        puntos.forEach(
            (punto, index) => {

                punto.classList.toggle(
                    "punto-activo",
                    index === cardActual
                );

            }
        );

    }


    /* =====================================================
       MOSTRAR CARD
    ===================================================== */
/* =====================================================
   ACTUALIZAR PREVIEW
===================================================== */

const imagenPreview =
    document.getElementById("imagen-preview");


function actualizarPreview() {

    const seccion =
        secciones[seccionActual];

    let siguienteCard =
        cardActual + 1;


    /* Si estamos en la última,
       volvemos a la primera */

    if (
        siguienteCard >=
        seccion.cards.length
    ) {

        siguienteCard = 0;

    }


    imagenPreview.src =
        seccion.cards[siguienteCard].imagen;

}
    function mostrarCard() {

    const seccion =
        secciones[seccionActual];

    const card =
        seccion.cards[cardActual];


    /* IMAGEN PRINCIPAL */

    imagenCard.src =
        card.imagen;

    imagenCard.alt =
        card.texto;


    /* TEXTO */

    textoCard.textContent =
        card.texto;


    /* PREVIEW */

    actualizarPreview();


    /* PUNTITOS */

    crearPuntos();

}

    /* =====================================================
       CAMBIAR CARD
    ===================================================== */

    function cambiarCard() {

        if (cambiandoCard) {

            return;

        }


        cambiandoCard = true;


        /* -----------------------------------------------
           SIGUIENTE
        ------------------------------------------------ */

        cardActual++;


        if (
            cardActual >=
            secciones[seccionActual].cards.length
        ) {

            cardActual = 0;

        }


        /* -----------------------------------------------
           SALIDA
        ------------------------------------------------ */

        imagenCardContenedor.style.opacity =
            "0";

        imagenCardContenedor.style.transform =
            "translateX(18px)";


        /* -----------------------------------------------
           CAMBIO DE CONTENIDO
        ------------------------------------------------ */

        setTimeout(() => {

            mostrarCard();


            imagenCardContenedor.style.opacity =
                "1";

            imagenCardContenedor.style.transform =
                "translateX(0)";


            actualizarPuntos();


        }, 180);


        /* -----------------------------------------------
           LIBERAR
        ------------------------------------------------ */

        setTimeout(() => {

            cambiandoCard = false;

        }, 500);

    }


    /* =====================================================
       ANIMACIÓN DE LA RUEDA
    ===================================================== */

    function animarRueda(nuevaImagen) {

        return new Promise((resolver) => {


            const imagenActual =
                ruedaImagen;


            const imagenNueva =
                document.createElement("img");


            imagenNueva.src =
                nuevaImagen;


            imagenNueva.style.position =
                "absolute";


            imagenNueva.style.left =
                "0";


            imagenNueva.style.top =
                "0";


            imagenNueva.style.width =
                "100%";


            imagenNueva.style.height =
                "100%";


            imagenNueva.style.objectFit =
                "contain";


            imagenNueva.style.pointerEvents =
                "none";


            imagenNueva.style.userSelect =
                "none";


            imagenNueva.style.webkitUserDrag =
                "none";


            imagenNueva.style.transform =
                "rotate(-90deg)";


            imagenNueva.style.transition =
                "none";


            imagenActual.style.position =
                "absolute";


            imagenActual.style.left =
                "0";


            imagenActual.style.top =
                "0";


            imagenActual.style.width =
                "100%";


            imagenActual.style.height =
                "100%";


            imagenActual.style.objectFit =
                "contain";


            imagenActual.style.transition =
                "none";


            imagenActual.style.transform =
                "rotate(0deg)";


            rueda.appendChild(
                imagenNueva
            );


            void imagenNueva.offsetWidth;


            const duracion =
                620;


            imagenActual.style.transition =
                `transform ${duracion}ms cubic-bezier(.16, 1, .3, 1)`;


            imagenNueva.style.transition =
                `transform ${duracion}ms cubic-bezier(.16, 1, .3, 1)`;


            imagenActual.style.transform =
                "rotate(90deg)";


            imagenNueva.style.transform =
                "rotate(0deg)";


            setTimeout(() => {


                ruedaImagen.src =
                    nuevaImagen;


                ruedaImagen.style.position =
                    "relative";


                ruedaImagen.style.left =
                    "auto";


                ruedaImagen.style.top =
                    "auto";


                ruedaImagen.style.width =
                    "100%";


                ruedaImagen.style.height =
                    "100%";


                ruedaImagen.style.objectFit =
                    "contain";


                ruedaImagen.style.transform =
                    "rotate(0deg)";


                ruedaImagen.style.transition =
                    "opacity 200ms ease";


                imagenNueva.remove();


                resolver();


            }, duracion);

        });

    }


    /* =====================================================
       CAMBIAR SECCIÓN
    ===================================================== */

    async function cambiarSeccion() {

        if (ruedaGirando) {

            return;

        }


        ruedaGirando = true;


        /* -----------------------------------------------
           SIGUIENTE SECCIÓN
        ------------------------------------------------ */

        seccionActual++;


        if (
            seccionActual >=
            secciones.length
        ) {

            seccionActual = 0;

        }


        /* -----------------------------------------------
           VOLVER AL PRIMER ITEM
        ------------------------------------------------ */

        cardActual = 0;


        const seccion =
            secciones[seccionActual];


        /* -----------------------------------------------
           SALIDA DEL TÍTULO
        ------------------------------------------------ */

        tituloSeccion.classList.add(
            "cambiando"
        );


        /* -----------------------------------------------
           SALIDA DEL CONCEPTO
        ------------------------------------------------ */

        frase.style.opacity =
            "0";

        frase.style.transform =
            "translateY(8px)";


        iconoFrase.style.opacity =
            "0";

        iconoFrase.style.transform =
            "scale(.92)";


        /* -----------------------------------------------
           SALIDA DE LA CARD
        ------------------------------------------------ */

        imagenCardContenedor.style.opacity =
            "0";

        imagenCardContenedor.style.transform =
            "translateX(25px)";


        /* -----------------------------------------------
           GIRO DE LA RUEDA
        ------------------------------------------------ */

        await animarRueda(
            seccion.rueda
        );


        /* -----------------------------------------------
           CAMBIAR TÍTULO
        ------------------------------------------------ */

        tituloSeccion.textContent =
            seccion.nombre;


        tituloSeccion.classList.remove(
            "cambiando"
        );

/* =====================================================
   POSICIÓN DEL CONCEPTO SEGÚN LA SECCIÓN
===================================================== */

const nucleo = document.querySelector(".nucleo");

nucleo.classList.remove(
    "seccion-limites",
    "seccion-editar",
    "seccion-inspiracion",
    "seccion-generar"
);

if (seccionActual === 0) {
    nucleo.classList.add("seccion-limites");
}

if (seccionActual === 1) {
    nucleo.classList.add("seccion-editar");
}

if (seccionActual === 2) {
    nucleo.classList.add("seccion-inspiracion");
}

if (seccionActual === 3) {
    nucleo.classList.add("seccion-generar");
}


        /* -----------------------------------------------
           CAMBIAR FRASE
        ------------------------------------------------ */

        frase.innerHTML =
            seccion.frase;


        iconoFrase.src =
            seccion.icono;


        /* -----------------------------------------------
           CAMBIAR CARD
        ------------------------------------------------ */

        mostrarCard();


        /* -----------------------------------------------
           ENTRADA
        ------------------------------------------------ */

        requestAnimationFrame(() => {

            imagenCardContenedor.style.opacity =
                "1";

            imagenCardContenedor.style.transform =
                "translateX(0)";


            frase.style.opacity =
                "1";

            frase.style.transform =
                "translateY(0)";


            iconoFrase.style.opacity =
                "1";

            iconoFrase.style.transform =
                "scale(1)";

        });


        /* -----------------------------------------------
           LIBERAR RUEDA
        ------------------------------------------------ */

        setTimeout(() => {

            ruedaGirando =
                false;

        }, 100);

    }


    /* =====================================================
       BOTÓN DE CARD
    ===================================================== */

    flechaCard.addEventListener(
        "click",
        cambiarCard
    );


    /* =====================================================
       BOTÓN DE SECCIÓN
    ===================================================== */

    flechaRueda.addEventListener(
        "click",
        cambiarSeccion
    );


    /* =====================================================
       BOTÓN HOME
    ===================================================== */

    const homeButton =
        document.querySelector(
            ".home-button"
        );


    if (homeButton) {

        homeButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    "index.html";

            }
        );

    }


    /* =====================================================
       BOTÓN LÍNEA DEL TIEMPO
    ===================================================== */

    const relojButton =
        document.querySelector(
            ".reloj-button"
        );


    if (relojButton) {

        relojButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    "timeline.html";

            }
        );

    }
  
    /* =====================================================
   BOTÓN HERRAMIENTA → NÚCLEO
===================================================== */

const herramientaButton =
    document.querySelector(".herramienta-button");

if (herramientaButton) {

    herramientaButton.addEventListener(
        "click",
        () => {

            window.location.href =
                "nucleo.html";

        }
    );

}

    /* =====================================================
       INICIAR
    ===================================================== */

    ruedaImagen.src =
        "imagenes/tuerca límites.png";


    mostrarCard();

/* =====================================================
   ESCALA DEL DISEÑO SEGÚN LA PANTALLA
===================================================== */

function ajustarEscala() {

    const anchoBase = 1440;
    const escala = Math.min(
        window.innerWidth / anchoBase,
        1
    );

    document.querySelector(".nucleo").style.transform =
        `scale(${escala})`;

}

ajustarEscala();

window.addEventListener(
    "resize",
    ajustarEscala
);

});