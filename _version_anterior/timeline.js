document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTOS
    ====================================================== */

    const circulo =
        document.getElementById("slider-circulo");

    const anio =
        document.getElementById("anio");

    const titulo =
        document.getElementById("titulo-anio");

    const informacion =
        document.getElementById("informacion");

    const textoImagen =
        document.getElementById("texto-imagen");

    const iconoAnio =
        document.getElementById("icono-anio");

    const dedo =
        document.querySelector(".dedo-icono");

    const flecha =
        document.querySelector(".flecha-indicacion");


    /* =====================================================
       MODAL
    ====================================================== */

    const modalImagen =
        document.getElementById("modal-imagen");

    const imagenAmpliada =
        document.getElementById("imagen-ampliada");

    const cerrarImagen =
        document.getElementById("cerrar-imagen");


    if (
        !circulo ||
        !anio ||
        !titulo ||
        !informacion ||
        !textoImagen
    ) {

        return;

    }



    /* =====================================================
       DATOS DE LAS 8 PANTALLAS
    ====================================================== */

    const pantallas = [


        /* =================================================
           2014
        ================================================= */

        {

            anio: "AÑO - 2014",

            titulo: "LA IA APRENDE A CREAR",

            icono:
                "imagenes/icono pantalla 1.png",

            informacion: `

                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        <strong>2014:</strong>
                        aparecen las
                        <strong>GANs.</strong>
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        Sistema capaz de
                        <strong>generar</strong>
                        imágenes.
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        Dos redes compiten:
                        una genera y otra
                        <strong>detecta.</strong>
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        El resultado:
                        <strong>
                            imágenes cada vez más realistas.
                        </strong>
                    </span>

                </p>

            `,

            textoImagen:
                "GANs: rostros generados durante el entrenamiento."

        },


        /* =================================================
           2016
        ================================================= */

        {

            anio: "AÑO - 2016",

            titulo:
                "DE PALABRAS A IMÁGENES",

            icono:
                "imagenes/icono pantalla 2.png",

            informacion: `

                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        <strong>2016:</strong>
                        aparece un avance clave:
                        <strong>
                            texto → imagen.
                        </strong>
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        Las GANs pueden
                        <strong>
                            transformar descripciones escritas en imágenes.
                        </strong>
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        Generan imágenes siguiendo las
                        <strong>
                            características indicadas en el texto.
                        </strong>
                    </span>

                </p>

            `,

            textoImagen:
                "Imágenes generadas a partir de descripciones escritas."

        },


        /* =================================================
           2018 - 2020
        ================================================= */

        {

            anio: "AÑOS 2018 - 2020",

            titulo:
                "CUANDO LO FALSO PARECE REAL",

            icono:
                "imagenes/icono pantalla 3.png",

            informacion: `

                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        <strong>2018–2020:</strong>
                        las GANs logran un
                        <strong>
                            gran salto en calidad.
                        </strong>
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        <strong>StyleGAN</strong>
                        genera rostros cada vez más
                        <strong>realistas</strong>
                        y permite controlar detalles como
                        <strong>
                            pose, pelo e identidad.
                        </strong>
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        <strong>StyleGAN2</strong>
                        mejora aún más la calidad y
                        <strong>
                            reduce los defectos
                        </strong>
                        de las primeras generaciones.
                    </span>

                </p>

            `,

            textoImagen:
                "StyleGAN: rostros sintéticos cada vez más realistas."

        },


        /* =================================================
           2021
        ================================================= */

        {

            anio: "AÑO - 2021",

            titulo:
                "IMAGINÁ. ESCRIBÍ. CREÁ",

            icono:
                "imagenes/icono pantalla 4.png",

            informacion: `

                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        <strong>2021:</strong>
                        OpenAI presenta
                        <strong>DALL·E</strong>,
                        llevando la generación de imágenes
                        desde texto a otro nivel.
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        Puede
                        <strong>
                            interpretar descripciones
                        </strong>,
                        combinar conceptos y
                        transformarlos en imágenes.
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        Surge una nueva forma de crear:
                        “<strong>
                            escribir lo que querés ver
                        </strong>”.
                    </span>

                </p>

            `,

            textoImagen:
                "DALL·E: imágenes generadas a partir de instrucciones."

        },


        /* =================================================
           2022
        ================================================= */

        {

            anio: "AÑO - 2022",

            titulo:
                "LA EXPLOSIÓN GENERATIVA",

            icono:
                "imagenes/icono pantalla 5.png",

            informacion: `

                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        <strong>2022:</strong>
                        llega el gran punto de
                        <strong>
                            expansión.
                        </strong>
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        <strong>DALL·E 2</strong>
                        genera imágenes más
                        realistas y precisas.
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        <strong>Midjourney</strong>
                        entra en beta abierta y
                        <strong>Stable Diffusion</strong>
                        se vuelve accesible para una
                        comunidad más amplia.
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        Generar imágenes desde texto
                        comienza a convertirse en una
                        <strong>
                            herramienta accesible.
                        </strong>
                    </span>

                </p>

            `,

            textoImagen:
                "La generación de imágenes comienza a expandirse."

        },


        /* =================================================
           2023
        ================================================= */

        {

            anio: "AÑO - 2023",

            titulo:
                "LA IA ENTRA AL DISEÑO",

            icono:
                "imagenes/icono pantalla 6.png",

            informacion: `

                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        <strong>2023:</strong>
                        la IA generativa comienza a
                        integrarse al
                        <strong>
                            proceso creativo.
                        </strong>
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        <strong>Adobe Firefly</strong>
                        incorpora IA generativa
                        a sus herramientas de diseño.
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        <strong>DALL·E 3</strong>
                        mejora la interpretación de
                        instrucciones y se integra con
                        <strong>ChatGPT.</strong>
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        La IA deja de ser solo un generador
                        y se convierte en una
                        <strong>
                            herramienta dentro del proceso de diseño.
                        </strong>
                    </span>

                </p>

            `,

            textoImagen:
                "La IA generativa comienza a integrarse al diseño."

        },


        /* =================================================
           2024
        ================================================= */

        {

            anio: "AÑO - 2024",

            titulo:
                "YA NO SOLO GENERA",

            icono:
                "imagenes/icono pantalla 7.png",

            informacion: `

                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        <strong>2024:</strong>
                        el foco pasa de crear imágenes
                        bonitas a tener
                        <strong>
                            mayor control sobre el resultado.
                        </strong>
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        Los modelos mejoran en
                        <strong>
                            realismo, coherencia e interpretación de instrucciones.
                        </strong>
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        Herramientas como
                        <strong>
                            Ideogram, Midjourney y FLUX
                        </strong>
                        ofrecen cada vez más
                        <strong>
                            control visual al usuario.
                        </strong>
                    </span>

                </p>

            `,

            textoImagen:
                "Más control sobre el resultado visual."

        },


        /* =================================================
           2025 - 2026
        ================================================= */

        {

            anio: "AÑOS 2025 - 2026",

            titulo:
                "LA IA COMO HERRAMIENTA",

            icono:
                "imagenes/icono pantalla 8.png",

            informacion: `

                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        <strong>2025–2026:</strong>
                        la IA se integra cada vez más con la
                        <strong>
                            conversación y la edición.
                        </strong>
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        Los modelos siguen instrucciones
                        más precisas y trabajan con
                        <strong>
                            imágenes de referencia.
                        </strong>
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        Pueden mantener elementos entre
                        distintas versiones y crear piezas
                        para
                        <strong>
                            usos específicos.
                        </strong>
                    </span>

                </p>


                <p>

                    <span class="viñeta">
                        •
                    </span>

                    <span>
                        La IA pasa de generar imágenes a
                        formar parte de un
                        <strong>
                            proceso creativo completo.
                        </strong>
                    </span>

                </p>

            `,

            textoImagen:
                "La IA se integra cada vez más al proceso creativo."

        }

    ];



    /* =====================================================
       IMÁGENES
    ====================================================== */

    const imagenes = [

        "imagenes/imagen 2014.png",

        "imagenes/imagen 2016.png",

        "imagenes/imagen 2018.png",

        "imagenes/imagen 2021.png",

        "imagenes/imagen 2022.png",

        "imagenes/imagen 2023.png",

        "imagenes/imagen 2024.png",

        "imagenes/imagen 2025-2026.png"

    ];



    /* =====================================================
       CONFIGURACIÓN DEL SLIDER
    ====================================================== */

    const posiciones = [

        13,
        155,
        297,
        439,
        581,
        723,
        865,
        982

    ];


    let pantallaActual = 0;

    let arrastrando = false;

    let posicionInicialX = 0;

    let posicionInicialCirculo =
        posiciones[0];



    /* =====================================================
       TUTORIAL
    ====================================================== */

    function actualizarTutorial(indice) {

        if (!dedo || !flecha) {

            return;

        }


        if (indice === 0) {

            dedo.classList.remove(
                "tutorial-oculto"
            );

            flecha.classList.remove(
                "tutorial-oculto"
            );

        } else {

            dedo.classList.add(
                "tutorial-oculto"
            );

            flecha.classList.add(
                "tutorial-oculto"
            );

        }

    }



    /* =====================================================
       ACTUALIZAR CONTENIDO
    ====================================================== */

    function actualizarContenido(indice) {

        const pantalla =
            pantallas[indice];


        if (!pantalla) {

            return;

        }


        anio.textContent =
            pantalla.anio;


        titulo.textContent =
            pantalla.titulo;


        informacion.innerHTML =
            pantalla.informacion;


        if (iconoAnio) {

            iconoAnio.src =
                pantalla.icono;

            iconoAnio.alt =
                pantalla.titulo;

        }
        iconoAnio.classList.remove("icono-2018", "icono-2025");

if (indice === 2) {
    iconoAnio.classList.add("icono-2018");
}

if (indice === 7) {
    iconoAnio.classList.add("icono-2025");
}


        textoImagen.style.opacity =
            "0";

        textoImagen.style.transform =
            "translateY(5px)";


        setTimeout(() => {

            textoImagen.textContent =
                pantalla.textoImagen;

            textoImagen.style.opacity =
                "1";

            textoImagen.style.transform =
                "translateY(0)";

        }, 180);

    }



    /* =====================================================
       CAMBIAR IMAGEN
    ====================================================== */

    function cambiarImagen(indice) {

        const imagenActual =
            document.querySelector(
                ".imagen-timeline.imagen-activa"
            );


        const nuevaImagen =
            document.querySelector(
                `.imagen-timeline[data-index="${indice}"]`
            );


        if (
            !nuevaImagen ||
            nuevaImagen === imagenActual
        ) {

            return;

        }


        if (imagenActual) {

            imagenActual.classList.remove(
                "imagen-activa"
            );

            imagenActual.classList.add(
                "imagen-atras"
            );

        }


        nuevaImagen.classList.add(
            "imagen-entra"
        );


        requestAnimationFrame(() => {

            nuevaImagen.classList.add(
                "imagen-activa"
            );

            nuevaImagen.classList.remove(
                "imagen-entra"
            );

        });


        setTimeout(() => {

            document
                .querySelectorAll(
                    ".imagen-timeline"
                )
                .forEach((imagen) => {

                    if (
                        imagen !== nuevaImagen
                    ) {

                        imagen.classList.remove(
                            "imagen-atras",
                            "imagen-entra"
                        );

                    }

                });

        }, 700);

    }



    /* =====================================================
       CAMBIAR DE PANTALLA
    ====================================================== */

    function cambiarPantalla(indice) {


        indice = Math.max(
            0,
            Math.min(
                pantallas.length - 1,
                indice
            )
        );


        if (
            indice !== pantallaActual
        ) {

            cambiarImagen(indice);

            actualizarContenido(indice);

            pantallaActual =
                indice;

        }


        circulo.style.left =
            posiciones[pantallaActual] +
            "px";


        actualizarTutorial(
            pantallaActual
        );

    }



    /* =====================================================
       INICIO
    ====================================================== */

    circulo.style.left =
        posiciones[0] + "px";


    actualizarContenido(0);


    actualizarTutorial(0);



    /* =====================================================
       INICIO DEL ARRASTRE
    ====================================================== */

    circulo.addEventListener(
        "pointerdown",
        (evento) => {

            evento.preventDefault();


            arrastrando = true;


            circulo.classList.add(
                "arrastrando"
            );


            posicionInicialX =
                evento.clientX;


            posicionInicialCirculo =
                parseFloat(
                    circulo.style.left
                ) ||
                posiciones[0];


            if (dedo) {

                dedo.classList.add(
                    "tutorial-oculto"
                );

            }


            if (flecha) {

                flecha.classList.add(
                    "tutorial-oculto"
                );

            }


            try {

                circulo.setPointerCapture(
                    evento.pointerId
                );

            } catch (error) {

            }

        }
    );



    /* =====================================================
       MOVIMIENTO DEL SLIDER
    ====================================================== */

    circulo.addEventListener(
        "pointermove",
        (evento) => {

            if (!arrastrando) {

                return;

            }


            evento.preventDefault();


            let nuevaPosicion =
                posicionInicialCirculo +
                (
                    evento.clientX -
                    posicionInicialX
                );


            nuevaPosicion =
                Math.max(
                    posiciones[0],
                    Math.min(
                        posiciones[
                            posiciones.length - 1
                        ],
                        nuevaPosicion
                    )
                );


            circulo.style.left =
                nuevaPosicion + "px";

        }
    );



    /* =====================================================
       FIN DEL ARRASTRE
    ====================================================== */

    function terminarArrastre() {

        if (!arrastrando) {

            return;

        }


        arrastrando = false;


        circulo.classList.remove(
            "arrastrando"
        );


        const posicionActual =
            parseFloat(
                circulo.style.left
            ) ||
            posiciones[0];


        let indiceCercano = 0;

        let distanciaMinima =
            Infinity;


        posiciones.forEach(
            (posicion, indice) => {

                const distancia =
                    Math.abs(
                        posicionActual -
                        posicion
                    );


                if (
                    distancia <
                    distanciaMinima
                ) {

                    distanciaMinima =
                        distancia;

                    indiceCercano =
                        indice;

                }

            }
        );


        cambiarPantalla(
            indiceCercano
        );

    }



    circulo.addEventListener(
        "pointerup",
        terminarArrastre
    );


    circulo.addEventListener(
        "pointercancel",
        terminarArrastre
    );


    circulo.addEventListener(
        "dragstart",
        (evento) => {

            evento.preventDefault();

        }
    );



    /* =====================================================
       TECLADO
    ====================================================== */

    circulo.setAttribute(
        "tabindex",
        "0"
    );


    circulo.addEventListener(
        "keydown",
        (evento) => {

            if (
                evento.key ===
                "ArrowRight"
            ) {

                cambiarPantalla(
                    pantallaActual + 1
                );

            }


            if (
                evento.key ===
                "ArrowLeft"
            ) {

                cambiarPantalla(
                    pantallaActual - 1
                );

            }

        }
    );



    /* =====================================================
       CARTEL DEL RELOJ
    ====================================================== */

    const relojButton =
        document.getElementById(
            "reloj-button"
        );


    const cartelReloj =
        document.getElementById(
            "cartel-reloj"
        );


    if (
        relojButton &&
        cartelReloj
    ) {


        relojButton.addEventListener(
            "click",
            (evento) => {

                evento.stopPropagation();


                cartelReloj.classList.toggle(
                    "mostrar"
                );

            }
        );


        document.addEventListener(
            "click",
            (evento) => {

                if (
                    !cartelReloj.contains(
                        evento.target
                    ) &&
                    !relojButton.contains(
                        evento.target
                    )
                ) {

                    cartelReloj.classList.remove(
                        "mostrar"
                    );

                }

            }
        );

    }



    /* =====================================================
       IMAGEN AMPLIADA
    ====================================================== */

    const imagenesTimeline =
        document.querySelectorAll(
            ".imagen-timeline"
        );


    function abrirImagenGrande(
        imagen
    ) {

        if (
            !modalImagen ||
            !imagenAmpliada
        ) {

            return;

        }


        imagenAmpliada.src =
            imagen.src;


        imagenAmpliada.alt =
            imagen.alt ||
            "Imagen ampliada";


        modalImagen.classList.add(
            "mostrar"
        );


        document.body.classList.add(
            "modal-abierto"
        );

    }



    function cerrarImagenGrande() {

        if (!modalImagen) {

            return;

        }


        modalImagen.classList.remove(
            "mostrar"
        );


        document.body.classList.remove(
            "modal-abierto"
        );

    }



    imagenesTimeline.forEach(
        (imagen) => {

            imagen.addEventListener(
                "click",
                () => {

                    abrirImagenGrande(
                        imagen
                    );

                }
            );

        }
    );



    /* =====================================================
       BOTÓN X
    ====================================================== */

    if (cerrarImagen) {

        cerrarImagen.addEventListener(
            "click",
            (evento) => {

                evento.stopPropagation();

                cerrarImagenGrande();

            }
        );

    }



    /* =====================================================
       CERRAR HACIENDO CLICK AFUERA
    ====================================================== */

    if (modalImagen) {

        modalImagen.addEventListener(
            "click",
            (evento) => {

                if (
                    evento.target ===
                    modalImagen
                ) {

                    cerrarImagenGrande();

                }

            }
        );

    }



    /* =====================================================
       CERRAR CON ESC
    ====================================================== */

    document.addEventListener(
        "keydown",
        (evento) => {

            if (
                evento.key ===
                "Escape"
            ) {

                cerrarImagenGrande();

            }

        }
    );


});



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
   BOTÓN HERRAMIENTA → NÚCLEO
===================================================== */

function irNucleo() {

    window.location.href =
        "nucleo.html";

}

/* =========================================================
   IMAGEN AMPLIADA — ABRIR Y CERRAR
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const imagenesTimeline =
        document.querySelectorAll(".imagen-timeline");


    /* =====================================================
       CREAR MODAL
    ===================================================== */

    const modal =
        document.createElement("div");

    modal.className = "modal-imagen";


    modal.innerHTML = `

        <div class="modal-contenido">

            <img
                id="imagen-ampliada"
                src=""
                alt=""
            >

            <button
                class="cerrar-imagen"
                type="button"
                aria-label="Cerrar imagen"
            >
                ×
            </button>

        </div>

    `;


    document.body.appendChild(modal);


    /* =====================================================
       ELEMENTOS DEL MODAL
    ===================================================== */

    const imagenAmpliada =
        modal.querySelector("#imagen-ampliada");

    const botonCerrar =
        modal.querySelector(".cerrar-imagen");


    /* =====================================================
       ABRIR IMAGEN
    ===================================================== */

    imagenesTimeline.forEach((imagen) => {

        imagen.addEventListener("click", () => {

            imagenAmpliada.src =
                imagen.src;

            imagenAmpliada.alt =
                imagen.alt || "Imagen ampliada";


            modal.classList.add("activo");

            document.body.style.overflow =
                "hidden";

        });

    });


    /* =====================================================
       CERRAR CON LA X
    ===================================================== */

    botonCerrar.addEventListener(
        "click",
        () => {

            modal.classList.remove("activo");

            imagenAmpliada.src = "";

            document.body.style.overflow =
                "";

        }
    );


    /* =====================================================
       CERRAR HACIENDO CLICK FUERA
    ===================================================== */

    modal.addEventListener(
        "click",
        (evento) => {

            if (
                evento.target === modal
            ) {

                modal.classList.remove(
                    "activo"
                );

                imagenAmpliada.src = "";

                document.body.style.overflow =
                    "";

            }

        }
    );


    /* =====================================================
       CERRAR CON ESC
    ===================================================== */

    document.addEventListener(
        "keydown",
        (evento) => {

            if (
                evento.key === "Escape" &&
                modal.classList.contains("activo")
            ) {

                modal.classList.remove(
                    "activo"
                );

                imagenAmpliada.src = "";

                document.body.style.overflow =
                    "";

            }

        }
    );

});