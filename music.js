/* =================================================
   🎵 GAMER NEON — MUSIC SYSTEM
   Arquivo: music.js
================================================= */

(function () {

    "use strict";


    /* =================================================
       CONFIGURAÇÃO
    ================================================= */

    const MUSIC_FILE = "images/musica-site.mp3";

    const DEFAULT_VOLUME = 0.35;


    /* =================================================
       CRIAR ÁUDIO
    ================================================= */

    const music = document.createElement("audio");

    music.id = "siteMusic";

    music.src = MUSIC_FILE;

    music.loop = true;

    music.preload = "auto";

    music.volume = DEFAULT_VOLUME;


    /* =================================================
       ADICIONAR ÁUDIO À PÁGINA
    ================================================= */

    document.body.appendChild(music);


    /* =================================================
       CRIAR BOTÃO
    ================================================= */

    const button = document.createElement("button");

    button.id = "musicButton";

    button.type = "button";

    button.innerHTML = "🎵";

    button.setAttribute(
        "aria-label",
        "Ativar música"
    );


    /* =================================================
       ESTILO DO BOTÃO
    ================================================= */

    const style = document.createElement("style");

    style.textContent = `

        #musicButton {

            position: fixed;

            right: 18px;
            bottom: 18px;

            width: 52px;
            height: 52px;

            border-radius: 50%;

            border: 1px solid
                rgba(0, 255, 255, 0.65);

            background:
                rgba(8, 8, 20, 0.88);

            color: #00ffff;

            font-size: 21px;

            display: flex;

            align-items: center;

            justify-content: center;

            cursor: pointer;

            z-index: 99999;

            backdrop-filter: blur(12px);

            -webkit-backdrop-filter:
                blur(12px);

            box-shadow:
                0 0 10px
                rgba(0, 255, 255, 0.35),

                0 0 25px
                rgba(0, 255, 255, 0.15);

            transition:
                transform 0.25s ease,
                box-shadow 0.25s ease,
                border-color 0.25s ease;
        }


        #musicButton:hover {

            transform: scale(1.1);

            box-shadow:
                0 0 15px
                rgba(0, 255, 255, 0.8),

                0 0 35px
                rgba(0, 255, 255, 0.4);
        }


        #musicButton:active {

            transform: scale(0.92);
        }


        #musicButton.playing {

            animation:
                musicPulse 1.5s infinite;
        }


        @keyframes musicPulse {

            0% {

                box-shadow:
                    0 0 10px
                    rgba(0, 255, 255, 0.4),

                    0 0 20px
                    rgba(0, 255, 255, 0.15);
            }


            50% {

                box-shadow:
                    0 0 18px
                    rgba(0, 255, 255, 0.8),

                    0 0 40px
                    rgba(0, 255, 255, 0.35);
            }


            100% {

                box-shadow:
                    0 0 10px
                    rgba(0, 255, 255, 0.4),

                    0 0 20px
                    rgba(0, 255, 255, 0.15);
            }
        }

    `;


    /* =================================================
       ADICIONAR ESTILO E BOTÃO
    ================================================= */

    document.head.appendChild(style);

    document.body.appendChild(button);


    /* =================================================
       ATUALIZAR BOTÃO
    ================================================= */

    function updateButton() {

        if (music.paused) {

            button.innerHTML = "🎵";

            button.classList.remove(
                "playing"
            );

            button.setAttribute(
                "aria-label",
                "Ativar música"
            );

        } else {

            button.innerHTML = "🔊";

            button.classList.add(
                "playing"
            );

            button.setAttribute(
                "aria-label",
                "Desativar música"
            );
        }
    }


    /* =================================================
       TOCAR MÚSICA
    ================================================= */

    function playMusic() {

        music.volume =
            DEFAULT_VOLUME;


        const promise =
            music.play();


        if (promise !== undefined) {

            promise
                .then(function () {

                    updateButton();

                })
                .catch(function () {

                    /*
                     O navegador bloqueou
                     o autoplay.
                    */

                    updateButton();

                });
        }
    }


    /* =================================================
       BOTÃO PLAY / PAUSE
    ================================================= */

    button.addEventListener(
        "click",
        function () {

            if (music.paused) {

                playMusic();

            } else {

                music.pause();

                updateButton();
            }
        }
    );


    /* =================================================
       PRIMEIRA INTERAÇÃO
    ================================================= */

    function firstInteraction() {

        if (music.paused) {

            playMusic();
        }

        document.removeEventListener(
            "touchstart",
            firstInteraction
        );

        document.removeEventListener(
            "click",
            firstInteraction
        );

        document.removeEventListener(
            "keydown",
            firstInteraction
        );
    }


    /* =================================================
       EVENTOS
    ================================================= */

    document.addEventListener(
        "touchstart",
        firstInteraction,
        {
            once: true,
            passive: true
        }
    );


    document.addEventListener(
        "click",
        firstInteraction,
        {
            once: true
        }
    );


    document.addEventListener(
        "keydown",
        firstInteraction,
        {
            once: true
        }
    );


    /* =================================================
       EVENTOS DO ÁUDIO
    ================================================= */

    music.addEventListener(
        "play",
        updateButton
    );


    music.addEventListener(
        "pause",
        updateButton
    );


    music.addEventListener(
        "ended",
        updateButton
    );


    /* =================================================
       INICIALIZAÇÃO
    ================================================= */

    updateButton();

    playMusic();

})();