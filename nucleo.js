/* =========================================================
   NÚCLEO — IA COMO HERRAMIENTA
   4 temas (rueda) × carrusel de imágenes
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

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
                        "Podés probar diferentes versiones de una imagen de manera rápida y sencilla."
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
                        "imagenes/multiples alternativas (inspiracion) web.jpg",

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
                        "imagenes/adaptar al proyecto ( inspiracion) web.jpg",

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
                        "imagenes/multiples visiones de ina idea (generar) web.jpg",

                    texto:
                        "Crear múltiples versiones de una misma idea."
                },

                {
                    imagen:
                        "imagenes/cambiar estilos (generar) web.jpg",

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
                        "imagenes/modificar (generar) web.jpg",

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
                        "imagenes/generar conceptos (generar) web.jpg",

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
       ELEMENTOS
    ===================================================== */

    const $ = (id) => document.getElementById(id);

    const nucleo = $("nucleo");
    const rueda = $("rueda");
    const ruedaImagen = $("rueda-imagen");
    const tituloSeccion = $("titulo-seccion");
    const concepto = $("concepto");
    const frase = $("frase");
    const iconoFrase = $("icono-frase");

    const cardContenedor = $("card-contenedor");
    const previewContenedor = $("preview-contenedor");
    const imagenCard = $("imagen-card");
    const imagenPreview = $("imagen-preview");
    const textoCard = $("texto-card");
    const textoNumero = $("texto-numero");

    const segmentos = $("segmentos");
    const numActual = $("num-actual");
    const numTotal = $("num-total");
    const siguienteTema = $("siguiente-tema");

    const clasesSeccion = ["seccion-limites", "seccion-editar", "seccion-inspiracion", "seccion-generar"];

    let seccionActual = 0;
    let cardActual = 0;
    let ocupado = false;

    const dos = (n) => String(n).padStart(2, "0");


    /* =====================================================
       PRECARGA (todas las imágenes)
    ===================================================== */

    secciones.forEach((s) => {
        new Image().src = s.rueda;
        new Image().src = s.icono;
        s.cards.forEach((c) => { new Image().src = c.imagen; });
    });


    function marcarTemas() {
        const sig = secciones[(seccionActual + 1) % secciones.length];
        siguienteTema.textContent = sig.nombre;
    }


    /* =====================================================
       INDICADOR + MINIATURAS
    ===================================================== */

    function crearIndicador() {
        const cards = secciones[seccionActual].cards;
        segmentos.innerHTML = "";

        cards.forEach((c, i) => {
            const s = document.createElement("button");
            s.type = "button";
            s.className = "segmento";
            s.setAttribute("aria-label", "Ver imagen " + (i + 1));
            s.addEventListener("click", () => irACard(i));
            segmentos.appendChild(s);

        });

        numTotal.textContent = dos(cards.length);
    }

    function marcarIndicador() {
        segmentos.querySelectorAll(".segmento").forEach((s, i) => {
            s.classList.toggle("activo", i === cardActual);
            s.classList.toggle("visto", i < cardActual);
        });
        numActual.textContent = dos(cardActual + 1);
    }


    /* =====================================================
       MOSTRAR CARD
    ===================================================== */

    function pintarCard() {
        const s = secciones[seccionActual];
        const c = s.cards[cardActual];
        const sig = s.cards[(cardActual + 1) % s.cards.length];

        imagenCard.src = c.imagen;
        imagenCard.alt = c.texto;
        textoCard.textContent = c.texto;
        textoNumero.textContent = dos(cardActual + 1) + " / " + dos(s.cards.length);
        imagenPreview.src = sig.imagen;
        marcarIndicador();
    }


    /* =====================================================
       CAMBIAR CARD (con dirección)
    ===================================================== */

    function irACard(indice, direccion) {
        const total = secciones[seccionActual].cards.length;
        indice = (indice + total) % total;
        if (ocupado || indice === cardActual) return;
        ocupado = true;

        const dir = direccion || (indice > cardActual ? 1 : -1);

        cardContenedor.classList.remove("entra-der", "entra-izq");
        cardContenedor.classList.add(dir > 0 ? "sale-izq" : "sale-der");
        previewContenedor.classList.add("avanza");

        setTimeout(() => {
            cardActual = indice;
            pintarCard();
            cardContenedor.classList.remove("sale-izq", "sale-der");
            previewContenedor.classList.remove("avanza");
            void cardContenedor.offsetWidth;
            cardContenedor.classList.add(dir > 0 ? "entra-der" : "entra-izq");
        }, 320);

        setTimeout(() => { ocupado = false; }, 700);
    }

    $("flecha-card").addEventListener("click", () => irACard(cardActual + 1, 1));
    $("anterior").addEventListener("click", () => irACard(cardActual - 1, -1));
    cardContenedor.addEventListener("click", () => irACard(cardActual + 1, 1));
    previewContenedor.addEventListener("click", () => irACard(cardActual + 1, 1));


    /* =====================================================
       CAMBIAR SECCIÓN (gira la rueda)
    ===================================================== */

    async function irASeccion(indice) {
        indice = (indice + secciones.length) % secciones.length;
        if (ocupado || indice === seccionActual) return;
        ocupado = true;

        const s = secciones[indice];

        // Salida
        nucleo.classList.add("cambiando-seccion");

        // Giro de la rueda: la nueva tuerca entra girando 90°
        ruedaImagen.src = s.rueda;
        rueda.style.transition = "none";
        rueda.style.transform = "rotate(-90deg)";
        void rueda.offsetWidth;
        rueda.style.transition = "transform .75s cubic-bezier(.16, 1, .3, 1)";
        rueda.style.transform = "rotate(0deg)";
        ruedaImagen.classList.add("destello");

        await new Promise((r) => setTimeout(r, 420));

        seccionActual = indice;
        cardActual = 0;

        tituloSeccion.textContent = s.nombre;
        frase.innerHTML = s.frase;
        iconoFrase.src = s.icono;

        nucleo.classList.remove(...clasesSeccion);
        nucleo.classList.add(clasesSeccion[indice]);

        crearIndicador();
        pintarCard();
        marcarTemas();

        void nucleo.offsetWidth;
        nucleo.classList.remove("cambiando-seccion");

        setTimeout(() => {
            ruedaImagen.classList.remove("destello");
            ocupado = false;
        }, 500);
    }

    $("flecha-rueda").addEventListener("click", () => irASeccion(seccionActual + 1));


    /* =====================================================
       TECLADO: ← → imágenes  ·  ↑ ↓ temas
    ===================================================== */

    window.addEventListener("keydown", (e) => {
        if (Tutorial.activo) return;
        if (e.key === "ArrowRight") irACard(cardActual + 1, 1);
        if (e.key === "ArrowLeft") irACard(cardActual - 1, -1);
        if (e.key === "ArrowDown") irASeccion(seccionActual + 1);
        if (e.key === "ArrowUp") irASeccion(seccionActual - 1);
    });


    /* =====================================================
       INICIO
    ===================================================== */

    crearIndicador();
    pintarCard();
    marcarTemas();


    /* =====================================================
       MINI TUTORIAL
    ===================================================== */

    const pasos = [
        {
            el: "#controles",
            texto: "Usá <strong>las flechas</strong> (o hacé click en la imagen) para pasar las imágenes. Abajo ves <strong>cuántas hay</strong> y en cuál estás.",
            gesto: "click",
            pos: "arriba",
            margen: 12,
            radio: 40
        },
        {
            el: "#flecha-rueda",
            texto: "Con este botón <strong>gira la tuerca</strong> y cambiás de tema: límites, editar, inspiración y generar.",
            gesto: "click",
            pos: "derecha",
            margen: 14,
            radio: 50
        },
        {
            el: "#menu-principal",
            texto: "Desde este <strong>menú</strong> podés ir a la línea del tiempo, la conclusión o volver al inicio.",
            gesto: "click",
            pos: "abajo",
            margen: 8
        }
    ];

    document.addEventListener("pagina-lista", () => {
        setTimeout(() => Tutorial.mostrar("nucleo", pasos), 1500);
    });

    botonAyuda(() => Tutorial.mostrar("nucleo", pasos, true));
});
