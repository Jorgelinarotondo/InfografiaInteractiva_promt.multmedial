/* =========================================================
   TRIVIA — 3 preguntas, feedback animado y resultado final
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       DATOS (mismo contenido que la versión anterior)
    ----------------------------------------------------- */

    const preguntas = [
        {
            A: "imagenes/imagen A pantalla1 trivia.png",
            B: "imagenes/imagen trivia 1b.png",
            ia: "A",
            info: "Este diseño fue creado por un ilustrador digital independiente que firma bajo el pseudónimo de <strong>Resa Putra Pamungkas</strong>, especializado en gráficos vectoriales."
        },
        {
            A: "imagenes/imagen A pantalla2 trivia.png",
            B: "imagenes/imagen B pantalla2 trivia.png",
            ia: "A",
            info: "El cartel y el nombre de <strong>Churros El Topo</strong> fueron creados en <strong>1968</strong> por un letrista anónimo de Villa Gesell, inspirado en Topo Gigio."
        },
        {
            A: "imagenes/imagen A pantalla3 trivia.png",
            B: "imagenes/imagen B pantalla3 trivia.png",
            ia: "B",
            info: "Creado por <strong>Basim Bashir</strong> como propuesta base de logotipo y grilla tipográfica. Luego, la diseñadora <strong>Eman Fatima</strong> desarrolló el sistema completo de empaques."
        }
    ];

    // Precarga
    preguntas.forEach((p) => { new Image().src = p.A; new Image().src = p.B; });


    /* -----------------------------------------------------
       ELEMENTOS
    ----------------------------------------------------- */

    const trivia = document.getElementById("trivia");
    const tinte = document.getElementById("tinte");
    const contador = document.getElementById("contador");
    const barras = document.querySelectorAll(".progreso-barras span");
    const titulo = document.getElementById("titulo-pregunta");
    const bajada = document.getElementById("bajada");
    const opciones = document.querySelectorAll(".opcion");
    const info = document.getElementById("info-disenador");
    const infoTexto = document.getElementById("info-texto");
    const siguiente = document.getElementById("boton-siguiente");
    const textoSiguiente = document.getElementById("texto-siguiente");
    const final = document.getElementById("final");

    let actual = 0;
    let respondida = false;
    const resultados = [];

    const BAJADA_INICIAL = bajada.innerHTML;


    /* -----------------------------------------------------
       CARGAR PREGUNTA
    ----------------------------------------------------- */

    function cargar(i, animar) {
        const p = preguntas[i];
        respondida = false;

        trivia.classList.remove("respondida", "es-correcta", "es-incorrecta");
        tinte.className = "tinte";
        info.classList.remove("visible");
        siguiente.classList.remove("visible");

        contador.textContent = (i + 1) + " / " + preguntas.length;
        barras.forEach((b, k) => {
            b.classList.toggle("hecha", k < i);
            b.classList.toggle("actual", k === i);
        });

        titulo.textContent = "¿Cuál fue creada por IA?";
        bajada.innerHTML = BAJADA_INICIAL;

        opciones.forEach((op) => {
            const letra = op.dataset.letra;
            op.classList.remove("elegida", "es-ia", "es-humana", "atenuada");
            op.disabled = false;
            op.querySelector("img").src = p[letra];
            op.querySelector(".etiqueta-resultado").textContent = "";
            op.querySelector(".sello").textContent = "";
        });

        if (animar) {
            trivia.classList.remove("entrando");
            void trivia.offsetWidth;
            trivia.classList.add("entrando");
        }
    }


    /* -----------------------------------------------------
       RESPONDER
    ----------------------------------------------------- */

    function responder(letra) {
        if (respondida) return;
        respondida = true;

        const p = preguntas[actual];
        const acierto = letra === p.ia;
        resultados.push(acierto);

        trivia.classList.add("respondida", acierto ? "es-correcta" : "es-incorrecta");
        tinte.className = "tinte " + (acierto ? "verde" : "rojo");

        titulo.textContent = acierto ? "¡CORRECTO!" : "¡INCORRECTO!";
        bajada.innerHTML = acierto
            ? "La imagen <strong>" + p.ia + "</strong> fue generada con inteligencia artificial."
            : "No era esa: la imagen <strong>" + p.ia + "</strong> fue la generada con IA.";

        opciones.forEach((op) => {
            const l = op.dataset.letra;
            const esIA = l === p.ia;
            op.disabled = true;
            op.classList.add(esIA ? "es-ia" : "es-humana");
            if (l === letra) op.classList.add("elegida");
            op.querySelector(".etiqueta-resultado").innerHTML = esIA
                ? "<i>✦</i> CREADA CON IA"
                : "<i>✎</i> HECHA POR PERSONAS";
            op.querySelector(".sello").textContent = esIA ? "IA" : "HUMANO";
        });

        infoTexto.innerHTML = p.info;
        setTimeout(() => info.classList.add("visible"), 450);

        textoSiguiente.textContent =
            actual === preguntas.length - 1 ? "VER MI RESULTADO" : "SIGUIENTE PREGUNTA";
        setTimeout(() => siguiente.classList.add("visible"), 750);

    }

    opciones.forEach((op) => {
        op.addEventListener("click", () => responder(op.dataset.letra));
    });

    // Teclado: A / B
    window.addEventListener("keydown", (e) => {
        const k = e.key.toUpperCase();
        if ((k === "A" || k === "B") && !respondida && !final.classList.contains("visible")) {
            responder(k);
        }
    });


    /* -----------------------------------------------------
       SIGUIENTE
    ----------------------------------------------------- */

    siguiente.addEventListener("click", () => {
        if (actual < preguntas.length - 1) {
            actual++;
            trivia.classList.add("saliendo-pregunta");
            setTimeout(() => {
                trivia.classList.remove("saliendo-pregunta");
                cargar(actual, true);
            }, 420);
        } else {
            mostrarFinal();
        }
    });


    /* -----------------------------------------------------
       RESULTADO FINAL
    ----------------------------------------------------- */

    function mostrarFinal() {
        const puntos = resultados.filter(Boolean).length;
        memoria.set("puntaje-trivia", String(puntos));

        tinte.className = "tinte";
        trivia.classList.add("en-final");
        barras.forEach((b) => { b.classList.add("hecha"); b.classList.remove("actual"); });

        const titulos = ["¡A seguir entrenando el ojo!", "¡Nada mal!", "¡Muy buen ojo!", "¡Ojo de diseñador/a!"];
        document.getElementById("final-titulo").textContent = titulos[puntos];
        document.getElementById("final-texto").innerHTML =
            "Acertaste <strong>" + puntos + " de 3</strong>. Distinguir una imagen hecha con IA " +
            "es cada vez más difícil: por eso importa <strong>lo que hay detrás</strong>.";

        const resumen = document.getElementById("final-resumen");
        resumen.innerHTML = resultados.map((r, i) =>
            '<li class="' + (r ? "ok" : "no") + '" style="--k:' + i + '"><b>P' + (i + 1) + "</b>" + (r ? "✓" : "✕") + "</li>"
        ).join("");

        setTimeout(() => {
            final.classList.add("visible");

            // Aro que se completa + número que cuenta
            const aro = document.getElementById("aro-valor");
            const largo = 2 * Math.PI * 92;
            aro.style.strokeDasharray = largo;
            aro.style.strokeDashoffset = largo;
            requestAnimationFrame(() => {
                aro.style.strokeDashoffset = largo * (1 - puntos / 3);
            });

            const num = document.getElementById("puntaje");
            let n = 0;
            const t = setInterval(() => {
                if (n >= puntos) { clearInterval(t); return; }
                n++;
                num.textContent = n;
            }, 380);

        }, 450);
    }

    document.getElementById("boton-conclusion").addEventListener("click", () => irA("conclusion.html"));


    /* -----------------------------------------------------
       EFECTOS
    ----------------------------------------------------- */

    function confeti() {
        const colores = ["#4737FF", "#ACA5FF", "#E477CF", "#F08BCB", "#FFFFFF", "#7CF2A0"];
        const capa = document.createElement("div");
        capa.className = "confeti";
        document.body.appendChild(capa);
        for (let i = 0; i < 70; i++) {
            const c = document.createElement("i");
            c.style.left = (40 + Math.random() * 20) + "vw";
            c.style.background = colores[i % colores.length];
            c.style.setProperty("--x", (Math.random() * 90 - 45) + "vw");
            c.style.setProperty("--y", (-30 - Math.random() * 50) + "vh");
            c.style.setProperty("--r", (Math.random() * 720 - 360) + "deg");
            c.style.animationDelay = Math.random() * 0.15 + "s";
            c.style.width = (6 + Math.random() * 8) + "px";
            c.style.height = (8 + Math.random() * 10) + "px";
            capa.appendChild(c);
        }
        setTimeout(() => capa.remove(), 2600);
    }

    function sacudir() {
        const elegida = document.querySelector(".opcion.elegida .tarjeta-imagen");
        if (!elegida) return;
        elegida.classList.remove("sacudir");
        void elegida.offsetWidth;
        elegida.classList.add("sacudir");
    }


    /* -----------------------------------------------------
       INICIO + MINI TUTORIAL
    ----------------------------------------------------- */

    cargar(0, false);

    const pasos = [
        {
            el: "#opciones",
            texto: "Mirá bien las dos imágenes y <strong>hacé click en la que creas que fue creada con IA</strong>.",
            gesto: "click",
            pos: "arriba",
            margen: 16
        },
        {
            el: "#progreso",
            texto: "Son <strong>3 preguntas</strong>. Acá ves en cuál vas.",
            gesto: "click",
            pos: "auto",
            margen: 10,
            radio: 16
        }
    ];

    document.addEventListener("pagina-lista", () => {
        setTimeout(() => Tutorial.mostrar("trivia", pasos), 1300);
    });

    botonAyuda(() => Tutorial.mostrar("trivia", pasos, true));
});
