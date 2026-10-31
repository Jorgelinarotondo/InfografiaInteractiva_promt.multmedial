/* =========================================================
   LÍNEA DEL TIEMPO — 8 momentos de la IA generativa
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

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

    const hitos = ["2014", "2016", "2018–20", "2021", "2022", "2023", "2024", "2025–26"];


    /* =====================================================
       ELEMENTOS
    ====================================================== */

    const $ = (id) => document.getElementById(id);

    const slider = $("slider");
    const circulo = $("slider-circulo");
    const relleno = $("slider-relleno");
    const contHitos = $("slider-hitos");
    const pista = $("pista-arrastre");

    const anio = $("anio");
    const titulo = $("titulo-anio");
    const informacion = $("informacion");
    const textoImagen = $("texto-imagen");
    const iconoAnio = $("icono-anio");
    const textoAnio = $("texto-anio");

    const ANCHO = 1180;     // ancho de la barra (px del escenario)
    const CIRCULO = 84;
    const MIN = 0;
    const MAX = ANCHO - CIRCULO;
    const posiciones = hitos.map((_, i) => MIN + (MAX - MIN) * i / (hitos.length - 1));

    let actual = 0;
    let arrastrando = false;
    let inicioX = 0;
    let inicioPos = 0;
    let usado = false;


    /* =====================================================
       HITOS (años debajo de la barra, se pueden tocar)
    ====================================================== */

    hitos.forEach((h, i) => {
        const b = document.createElement("div");
        b.className = "hito";
        b.style.left = (posiciones[i] + CIRCULO / 2) + "px";
        b.style.setProperty("--k", i);
        b.innerHTML = '<span class="hito-punto"></span><button type="button" class="hito-anio" aria-label="Ir a ' + h + '">' + h + "</button>";
        b.querySelector(".hito-anio").addEventListener("click", () => { marcarUso(); ir(i); });
        contHitos.appendChild(b);
    });

    const botonesHito = contHitos.querySelectorAll(".hito");


    /* =====================================================
       ACTUALIZAR CONTENIDO (con salida/entrada animada)
    ====================================================== */

    function pintarTexto(i) {
        const p = pantallas[i];
        anio.textContent = p.anio;
        titulo.textContent = p.titulo;
        informacion.innerHTML = p.informacion;
        informacion.querySelectorAll("p").forEach((el, k) => el.style.setProperty("--k", k));
        iconoAnio.src = p.icono;
        iconoAnio.alt = p.titulo;
        textoImagen.textContent = p.textoImagen;
    }

    function actualizarContenido(i) {
        textoAnio.classList.add("cambiando");
        textoImagen.classList.add("cambiando");
        setTimeout(() => {
            pintarTexto(i);
            textoAnio.classList.remove("cambiando");
            textoImagen.classList.remove("cambiando");
            textoAnio.classList.remove("entrando");
            void textoAnio.offsetWidth;
            textoAnio.classList.add("entrando");
        }, 260);
    }


    /* =====================================================
       CAMBIAR IMAGEN (la anterior queda "atrás")
    ====================================================== */

    function cambiarImagen(i) {
        const vieja = document.querySelector(".imagen-timeline.imagen-activa");
        const nueva = document.querySelector('.imagen-timeline[data-index="' + i + '"]');
        if (!nueva || nueva === vieja) return;

        document.querySelectorAll(".imagen-timeline").forEach((im) => im.classList.remove("imagen-atras"));
        if (vieja) {
            vieja.classList.remove("imagen-activa");
            vieja.classList.add("imagen-atras");
        }
        nueva.classList.add("imagen-entra");
        requestAnimationFrame(() => requestAnimationFrame(() => {
            nueva.classList.add("imagen-activa");
            nueva.classList.remove("imagen-entra");
        }));
        setTimeout(() => { if (vieja) vieja.classList.remove("imagen-atras"); }, 750);
    }


    /* =====================================================
       IR A UNA PANTALLA
    ====================================================== */

    function colocar(pos, animado) {
        circulo.classList.toggle("sin-transicion", !animado);
        circulo.style.left = pos + "px";
        relleno.style.width = (pos + CIRCULO / 2) + "px";
        relleno.classList.toggle("sin-transicion", !animado);
    }

    function ir(i) {
        i = Math.max(0, Math.min(pantallas.length - 1, i));
        if (i !== actual) {
            cambiarImagen(i);
            actualizarContenido(i);
            actual = i;
        }
        colocar(posiciones[actual], true);
        circulo.setAttribute("aria-valuenow", actual);
        botonesHito.forEach((b, k) => {
            b.classList.toggle("activo", k === actual);
            b.classList.toggle("pasado", k < actual);
        });
    }

    function marcarUso() {
        if (usado) return;
        usado = true;
        pista.classList.add("oculta");
    }


    /* =====================================================
       ARRASTRE (compensa la escala del escenario)
    ====================================================== */

    circulo.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        arrastrando = true;
        marcarUso();
        circulo.classList.add("arrastrando");
        inicioX = e.clientX;
        inicioPos = parseFloat(circulo.style.left) || 0;
        try { circulo.setPointerCapture(e.pointerId); } catch (err) { }
    });

    circulo.addEventListener("pointermove", (e) => {
        if (!arrastrando) return;
        const escala = window.escalaEscenario || 1;
        let pos = inicioPos + (e.clientX - inicioX) / escala;
        pos = Math.max(MIN, Math.min(MAX, pos));
        colocar(pos, false);

        // Cambia el contenido en vivo mientras se arrastra
        let cercano = 0, dist = Infinity;
        posiciones.forEach((p, k) => {
            const d = Math.abs(pos - p);
            if (d < dist) { dist = d; cercano = k; }
        });
        if (cercano !== actual) {
            cambiarImagen(cercano);
            actualizarContenido(cercano);
            actual = cercano;
            botonesHito.forEach((b, k) => {
                b.classList.toggle("activo", k === actual);
                b.classList.toggle("pasado", k < actual);
            });
        }
    });

    function soltar() {
        if (!arrastrando) return;
        arrastrando = false;
        circulo.classList.remove("arrastrando");
        ir(actual);
    }

    circulo.addEventListener("pointerup", soltar);
    circulo.addEventListener("pointercancel", soltar);

    // Click en cualquier parte de la barra
    slider.querySelector(".slider-barra").addEventListener("click", (e) => {
        const r = slider.getBoundingClientRect();
        const escala = window.escalaEscenario || 1;
        const x = (e.clientX - r.left) / escala - CIRCULO / 2;
        let cercano = 0, dist = Infinity;
        posiciones.forEach((p, k) => {
            const d = Math.abs(x - p);
            if (d < dist) { dist = d; cercano = k; }
        });
        marcarUso();
        ir(cercano);
    });


    /* =====================================================
       TECLADO ← →
    ====================================================== */

    window.addEventListener("keydown", (e) => {
        if (Tutorial.activo || modal.classList.contains("activo")) return;
        if (e.key === "ArrowRight") { marcarUso(); ir(actual + 1); }
        if (e.key === "ArrowLeft") { marcarUso(); ir(actual - 1); }
    });


    /* =====================================================
       IMAGEN AMPLIADA (modal)
    ====================================================== */

    const modal = $("modal-imagen");
    const imagenAmpliada = $("imagen-ampliada");
    const modalPie = $("modal-pie");

    function abrirModal(img) {
        imagenAmpliada.src = img.src;
        modalPie.innerHTML = "<b>" + hitos[actual] + "</b> · " + pantallas[actual].textoImagen;
        modal.classList.add("activo");
        modal.setAttribute("aria-hidden", "false");
    }

    function cerrarModal() {
        modal.classList.remove("activo");
        modal.setAttribute("aria-hidden", "true");
    }

    document.querySelectorAll(".imagen-timeline").forEach((img) => {
        img.addEventListener("click", () => abrirModal(img));
    });

    $("cerrar-imagen").addEventListener("click", (e) => { e.stopPropagation(); cerrarModal(); });
    modal.addEventListener("click", (e) => { if (e.target === modal || e.target.classList.contains("modal-contenido")) cerrarModal(); });
    window.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarModal(); });


    /* =====================================================
       INICIO
    ====================================================== */

    pintarTexto(0);
    ir(0);
    colocar(posiciones[0], false);
    textoAnio.classList.add("entrando");


    /* =====================================================
       MINI TUTORIAL
    ====================================================== */

    const pasos = [
        {
            el: "#slider",
            texto: "<strong>Arrastrá el círculo naranja</strong> o tocá un año para viajar de 2014 a 2026.",
            gesto: "arrastrar",
            pos: "arriba",
            margen: 14,
            radio: 46
        },
        {
            el: "#imagen-contenedor .imagen-timeline.imagen-activa",
            texto: "Hacé <strong>click en la imagen</strong> para verla en grande.",
            gesto: "click",
            pos: "izquierda",
            margen: 10,
            radio: 34
        }
    ];

    document.addEventListener("pagina-lista", () => {
        setTimeout(() => Tutorial.mostrar("timeline", pasos), 1500);
    });

    botonAyuda(() => Tutorial.mostrar("timeline", pasos, true));
});
