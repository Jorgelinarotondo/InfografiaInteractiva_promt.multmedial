/* =========================================================
   COMÚN — JS COMPARTIDO
   - Escala del escenario 16:9
   - Fondo ambiente + cortina de transición
   - Navegación con transición (window.irA)
   - Menú principal con etiquetas
   - Cursor personalizado + botones magnéticos
   - Mini tutoriales (window.Tutorial)
   - Modo muestra: vuelve al inicio tras inactividad
========================================================= */

(function () {

    const ANCHO = 1440;
    const ALTO = 810;


    /* -----------------------------------------------------
       ALMACENAMIENTO SEGURO (puede fallar en modo privado)
    ----------------------------------------------------- */

    const memoria = {
        get(k) {
            try { return sessionStorage.getItem(k); } catch (e) { return null; }
        },
        set(k, v) {
            try { sessionStorage.setItem(k, v); } catch (e) { }
        },
        limpiar() {
            try { sessionStorage.clear(); } catch (e) { }
        }
    };

    window.memoria = memoria;


    /* -----------------------------------------------------
       ESCALA
    ----------------------------------------------------- */

    function escalar() {
        const escala = Math.min(
            window.innerWidth / ANCHO,
            window.innerHeight / ALTO
        );
        document.documentElement.style.setProperty("--escala", escala);
        window.escalaEscenario = escala;
    }

    escalar();
    window.addEventListener("resize", escalar);


    /* -----------------------------------------------------
       ESTRUCTURA COMÚN (fondo + cortina + cursor)
    ----------------------------------------------------- */

    function crearEstructura() {

        const fondo = document.createElement("div");
        fondo.className = "fondo-ambiente";
        fondo.setAttribute("aria-hidden", "true");
        fondo.innerHTML =
            '<div class="mancha mancha-1"></div>' +
            '<div class="mancha mancha-2"></div>' +
            '<div class="mancha mancha-3"></div>' +
            '<div class="grilla"></div>' +
            '<div class="grano"></div>';
        document.body.prepend(fondo);

        const cortina = document.createElement("div");
        cortina.className = "cortina";
        cortina.setAttribute("aria-hidden", "true");
        cortina.innerHTML = "<span></span><span></span><span></span><span></span><span></span>";
        document.body.appendChild(cortina);

        const marca = document.createElement("div");
        marca.className = "cortina-marca";
        marca.setAttribute("aria-hidden", "true");
        marca.textContent = "DISEÑADORES VS IA";
        document.body.appendChild(marca);
    }


    /* -----------------------------------------------------
       TEXTO LETRA POR LETRA  (data-letras)
    ----------------------------------------------------- */

    function partirLetras() {
        document.querySelectorAll("[data-letras]").forEach((el) => {
            const texto = el.textContent.trim();
            el.textContent = "";
            el.classList.add("letras");
            el.setAttribute("aria-label", texto);
            [...texto].forEach((c, i) => {
                const s = document.createElement("span");
                s.className = "l";
                s.style.setProperty("--i", i);
                s.textContent = c === " " ? " " : c;
                s.setAttribute("aria-hidden", "true");
                el.appendChild(s);
            });
        });
    }


    /* -----------------------------------------------------
       NAVEGAR CON TRANSICIÓN
    ----------------------------------------------------- */

    let navegando = false;

    window.irA = function (url) {
        if (navegando) return;
        navegando = true;
        document.body.classList.add("saliendo");
        setTimeout(() => {
            window.location.href = url;
        }, 800);
    };

    // Al volver con el botón "atrás" del navegador
    window.addEventListener("pageshow", (e) => {
        if (e.persisted) {
            navegando = false;
            document.body.classList.remove("saliendo");
        }
    });


    /* -----------------------------------------------------
       MENÚ PRINCIPAL CON ETIQUETAS
       <nav class="nav-principal" data-actual="nucleo"></nav>
    ----------------------------------------------------- */

    const SECCIONES = [
        {
            id: "inicio",
            url: "index.html",
            icono: "imagenes/home icono.png",
            titulo: "INICIO",
            desc: "Volver a la portada"
        },
        {
            id: "nucleo",
            url: "nucleo.html",
            icono: "imagenes/herramienta.png",
            titulo: "IA COMO HERRAMIENTA",
            desc: "Límites, editar, inspirar, generar"
        },
        {
            id: "timeline",
            url: "timeline.html",
            icono: "imagenes/icono reloj de arena.png",
            titulo: "LÍNEA DEL TIEMPO",
            desc: "Cómo evolucionó, 2014 → 2026"
        },
        {
            id: "conclusion",
            url: "conclusion.html",
            icono: "imagenes/conclusion ojo.png",
            titulo: "LO QUE HAY DETRÁS",
            desc: "Velocidad, decisión, intención"
        }
    ];

    function crearMenus() {
        document.querySelectorAll(".nav-principal").forEach((nav) => {
            const actual = nav.dataset.actual;
            const ocultar = (nav.dataset.ocultar || "").split(",");
            nav.setAttribute("aria-label", "Menú principal");

            SECCIONES.forEach((s) => {
                if (ocultar.includes(s.id)) return;
                const b = document.createElement("button");
                b.type = "button";
                b.className = "nav-boton";
                b.dataset.seccion = s.id;
                if (s.id === actual) {
                    b.classList.add("actual");
                    b.setAttribute("aria-current", "page");
                }
                b.innerHTML =
                    '<span class="nav-icono"><img src="' + s.icono + '" alt=""></span>' +
                    '<span class="nav-textos">' +
                    '<span class="nav-titulo">' + s.titulo + "</span>" +
                    '<span class="nav-desc">' + s.desc + "</span>" +
                    "</span>";
                b.addEventListener("click", () => {
                    if (s.id === actual) return;
                    window.irA(s.url);
                });
                nav.appendChild(b);
            });
        });
    }


    /* -----------------------------------------------------
       CURSOR PERSONALIZADO
    ----------------------------------------------------- */

    function crearCursor() {
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const punto = document.createElement("div");
        const aro = document.createElement("div");
        punto.className = "cursor-punto";
        aro.className = "cursor-aro";
        document.body.append(punto, aro);

        let mx = -100, my = -100, ax = -100, ay = -100;

        window.addEventListener("pointermove", (e) => {
            mx = e.clientX;
            my = e.clientY;
            punto.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
            document.body.classList.add("cursor-activo");

            const interactivo = e.target.closest(
                "button, a, [onclick], .interactivo, input, .slider-circulo, .imagen-timeline, .bloque, .imagen-interactiva"
            );
            document.body.classList.toggle("cursor-sobre", !!interactivo);
        }, { passive: true });

        document.addEventListener("pointerleave", () => {
            document.body.classList.remove("cursor-activo");
        });

        window.addEventListener("pointerdown", () => document.body.classList.add("cursor-presion"));
        window.addEventListener("pointerup", () => document.body.classList.remove("cursor-presion"));

        (function loop() {
            ax += (mx - ax) * 0.18;
            ay += (my - ay) * 0.18;
            aro.style.transform = `translate(${ax}px, ${ay}px) translate(-50%, -50%)`;
            requestAnimationFrame(loop);
        })();
    }


    /* -----------------------------------------------------
       BOTONES MAGNÉTICOS  (data-magnetico)
    ----------------------------------------------------- */

    function magneticos() {
        document.querySelectorAll("[data-magnetico]").forEach((el) => {
            const fuerza = parseFloat(el.dataset.magnetico) || 0.25;
            el.addEventListener("pointermove", (e) => {
                const r = el.getBoundingClientRect();
                const x = (e.clientX - (r.left + r.width / 2)) * fuerza;
                const y = (e.clientY - (r.top + r.height / 2)) * fuerza;
                el.style.translate = `${x / (window.escalaEscenario || 1)}px ${y / (window.escalaEscenario || 1)}px`;
            });
            el.addEventListener("pointerleave", () => {
                el.style.translate = "0px 0px";
            });
            el.style.transition = (el.style.transition ? el.style.transition + "," : "") + "translate .45s cubic-bezier(.22,1,.36,1)";
        });
    }


    /* -----------------------------------------------------
       MINI TUTORIAL
       Tutorial.mostrar("clave", [
          { el: "#selector", texto: "…", gesto: "click|arrastrar|hover" }
       ])
    ----------------------------------------------------- */

    const GESTOS = {
        click:
            '<svg class="gesto-click" viewBox="0 0 48 48"><circle class="onda" cx="20" cy="14" r="10" fill="none" stroke="#E477CF" stroke-width="2"/>' +
            '<g class="dedo"><path d="M18 14v16l-4-3c-1.6-1.2-3.8.8-2.6 2.5l7 9.5c1 1.3 2.5 2 4 2h8c2.8 0 5-2.2 5-5v-9c0-1.6-1.3-3-3-3s-3 1.4-3 3v-1c0-1.6-1.3-3-3-3s-3 1.4-3 3V14c0-1.6-1.3-3-3-3s-3 1.4-3 3z" fill="#6B3FFF"/></g></svg>',
        arrastrar:
            '<svg class="gesto-arrastrar" viewBox="0 0 48 48"><path d="M6 40h36" stroke="#E477CF" stroke-width="2" stroke-dasharray="3 4"/><path d="M38 36l4 4-4 4" fill="none" stroke="#E477CF" stroke-width="2"/>' +
            '<g class="dedo"><path d="M20 8v16l-4-3c-1.6-1.2-3.8.8-2.6 2.5l6 8c1 1.3 2.5 2 4 2h7c2.8 0 5-2.2 5-5v-7c0-1.6-1.3-3-3-3s-3 1.4-3 3v-1c0-1.6-1.3-3-3-3s-3 1.4-3 3V8c0-1.6-1.3-3-3-3s-3 1.4-3 3z" fill="#6B3FFF"/></g></svg>',
        hover:
            '<svg class="gesto-hover" viewBox="0 0 48 48"><rect x="4" y="8" width="26" height="22" rx="5" fill="none" stroke="#E477CF" stroke-width="2"/>' +
            '<g class="dedo"><path d="M24 18l16 6-7 2.5 5 7-3 2-5-7-4 6z" fill="#6B3FFF" stroke="#fff" stroke-width="1"/></g></svg>'
    };

    const Tutorial = {
        activo: false,

        mostrar(clave, pasos, forzar) {
            if (!forzar && memoria.get("tuto-" + clave)) return;
            if (this.activo) return;
            pasos = pasos.filter((p) => !p.el || document.querySelector(p.el));
            if (!pasos.length) return;
            this.activo = true;
            memoria.set("tuto-" + clave, "1");

            const capa = document.createElement("div");
            capa.className = "tutorial-capa";
            capa.innerHTML = '<div class="tutorial-foco"></div>';
            document.body.appendChild(capa);
            const foco = capa.querySelector(".tutorial-foco");

            let i = 0;
            const cerrar = () => {
                capa.classList.remove("visible");
                setTimeout(() => capa.remove(), 450);
                this.activo = false;
                window.removeEventListener("keydown", teclado);
            };

            const teclado = (e) => {
                if (e.key === "Escape") cerrar();
                if (e.key === "Enter" || e.key === "ArrowRight") siguiente();
            };
            window.addEventListener("keydown", teclado);

            const siguiente = () => {
                i++;
                if (i >= pasos.length) cerrar();
                else pintar();
            };

            const pintar = () => {
                const paso = pasos[i];
                const viejo = capa.querySelector(".tutorial-globo");
                if (viejo) viejo.remove();

                let r;
                if (paso.el) {
                    r = document.querySelector(paso.el).getBoundingClientRect();
                } else {
                    r = { left: innerWidth / 2, top: innerHeight / 2, width: 0, height: 0, right: innerWidth / 2, bottom: innerHeight / 2 };
                }
                const m = paso.margen != null ? paso.margen : 12;
                foco.style.left = r.left - m + "px";
                foco.style.top = r.top - m + "px";
                foco.style.width = r.width + m * 2 + "px";
                foco.style.height = r.height + m * 2 + "px";
                foco.style.borderRadius = (paso.radio || 22) + "px";

                const globo = document.createElement("div");
                globo.className = "tutorial-globo";
                const puntitos = pasos.length > 1
                    ? '<span class="puntitos">' + pasos.map((_, k) => '<i class="' + (k <= i ? "on" : "") + '"></i>').join("") + "</span>"
                    : "";
                globo.innerHTML =
                    '<div class="tutorial-paso">CÓMO SE USA ' + puntitos + "</div>" +
                    '<div class="tutorial-gesto">' + (GESTOS[paso.gesto] || GESTOS.click) +
                    '<p class="tutorial-texto">' + paso.texto + "</p></div>" +
                    '<div class="tutorial-acciones">' +
                    '<button class="tutorial-saltar" type="button">' + (pasos.length > 1 ? "SALTAR" : "") + "</button>" +
                    '<button class="tutorial-ok" type="button">' + (i === pasos.length - 1 ? "¡ENTENDIDO!" : "SIGUIENTE →") + "</button>" +
                    "</div>";
                capa.appendChild(globo);

                // Posición del globo: debajo, arriba, derecha o izquierda del foco
                const gw = 340, gh = globo.offsetHeight || 170, sep = 26;
                let gx, gy;
                const pos = paso.pos || "auto";
                if (!paso.el) {
                    gx = innerWidth / 2 - gw / 2; gy = innerHeight / 2 - gh / 2;
                } else if (pos === "arriba" || (pos === "auto" && r.bottom + gh + sep > innerHeight)) {
                    gx = r.left + r.width / 2 - gw / 2; gy = r.top - m - gh - sep;
                } else if (pos === "derecha") {
                    gx = r.right + m + sep; gy = r.top + r.height / 2 - gh / 2;
                } else if (pos === "izquierda") {
                    gx = r.left - m - gw - sep; gy = r.top + r.height / 2 - gh / 2;
                } else {
                    gx = r.left + r.width / 2 - gw / 2; gy = r.bottom + m + sep;
                }
                gx = Math.max(16, Math.min(innerWidth - gw - 16, gx));
                gy = Math.max(16, Math.min(innerHeight - gh - 16, gy));
                globo.style.left = gx + "px";
                globo.style.top = gy + "px";

                globo.querySelector(".tutorial-ok").addEventListener("click", (e) => { e.stopPropagation(); siguiente(); });
                globo.querySelector(".tutorial-saltar").addEventListener("click", (e) => { e.stopPropagation(); cerrar(); });
            };

            // Click en la zona resaltada = cerrar y dejar interactuar
            capa.addEventListener("click", (e) => {
                if (e.target.closest(".tutorial-globo")) return;
                const f = foco.getBoundingClientRect();
                const dentro = e.clientX >= f.left && e.clientX <= f.right && e.clientY >= f.top && e.clientY <= f.bottom;
                cerrar();
                if (dentro) {
                    // Si tocaron la zona resaltada, el click llega al elemento de abajo
                    capa.style.pointerEvents = "none";
                    const debajo = document.elementFromPoint(e.clientX, e.clientY);
                    if (debajo) debajo.click();
                }
            });

            pintar();
            requestAnimationFrame(() => capa.classList.add("visible"));
        }
    };

    window.Tutorial = Tutorial;


    /* -----------------------------------------------------
       BOTÓN "?" PARA VOLVER A VER EL TUTORIAL
    ----------------------------------------------------- */

    window.botonAyuda = function (alHacerClick) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "boton-ayuda";
        b.innerHTML = '<span class="q">?</span>¿CÓMO SE USA?';
        b.addEventListener("click", alHacerClick);
        document.body.appendChild(b);
        return b;
    };


    /* -----------------------------------------------------
       MODO MUESTRA: SI NADIE TOCA NADA, VOLVER AL INICIO
    ----------------------------------------------------- */

    function modoMuestra() {
        const enInicio = /index\.html$|\/$/.test(location.pathname) || document.body.dataset.pagina === "inicio";
        if (enInicio) return;

        const ESPERA = 90;   // segundos sin actividad
        const CUENTA = 10;   // segundos de aviso
        let ultimo = Date.now();
        let aviso = null;

        const reset = () => {
            ultimo = Date.now();
            if (aviso) {
                aviso.classList.remove("visible");
            }
        };

        ["pointermove", "pointerdown", "keydown", "wheel", "touchstart"].forEach((ev) =>
            window.addEventListener(ev, reset, { passive: true })
        );

        setInterval(() => {
            const inactivo = (Date.now() - ultimo) / 1000;
            if (inactivo > ESPERA) {
                if (!aviso) {
                    aviso = document.createElement("div");
                    aviso.className = "aviso-inactividad";
                    aviso.innerHTML = '<span class="cuenta"></span><span>¿Seguís ahí? Volvemos al inicio para el próximo visitante. Mové el mouse para seguir.</span>';
                    document.body.appendChild(aviso);
                }
                const resta = Math.max(0, Math.ceil(ESPERA + CUENTA - inactivo));
                aviso.querySelector(".cuenta").textContent = resta;
                aviso.classList.add("visible");
                if (resta <= 0) {
                    memoria.limpiar();
                    window.irA("index.html");
                }
            }
        }, 250);
    }


    /* -----------------------------------------------------
       INICIO
    ----------------------------------------------------- */

    document.addEventListener("DOMContentLoaded", () => {
        crearEstructura();
        partirLetras();
        crearMenus();
        modoMuestra();

        // Precarga de la siguiente página para que el cambio sea instantáneo
        ["index.html", "trivia.html", "conclusion.html", "nucleo.html", "timeline.html"].forEach((u) => {
            const l = document.createElement("link");
            l.rel = "prefetch";
            l.href = u;
            document.head.appendChild(l);
        });

        const lista = () => requestAnimationFrame(() =>
            requestAnimationFrame(() => {
                document.body.classList.add("pagina-lista");
                document.dispatchEvent(new Event("pagina-lista"));
            })
        );

        // Espera las tipografías (máx. 1,2 s) para que no "salten"
        if (document.fonts && document.fonts.ready) {
            Promise.race([
                document.fonts.ready,
                new Promise((r) => setTimeout(r, 1200))
            ]).then(lista);
        } else {
            lista();
        }
    });

})();
