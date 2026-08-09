/* =================================================
   📖 GAMER NEON — MANUAL DO SITE
   Arquivo: manual.js
================================================= */

(function () {

    "use strict";


    /* =================================================
       CRIAR BOTÃO DO MANUAL
    ================================================= */

    const manualButton = document.createElement("button");

    manualButton.id = "manualButton";

    manualButton.type = "button";

    manualButton.innerHTML = "📖";

    manualButton.setAttribute(
        "aria-label",
        "Abrir Manual"
    );


    /* =================================================
       CRIAR JANELA DO MANUAL
    ================================================= */

    const manualOverlay =
        document.createElement("div");

    manualOverlay.id = "manualOverlay";


    /* =================================================
       CONTEÚDO DO MANUAL
    ================================================= */

    manualOverlay.innerHTML = `

        <div class="manualBox">

            <button
                id="manualClose"
                class="manualClose"
                aria-label="Fechar manual"
            >
                ×
            </button>


            <div class="manualHeader">

                <div class="manualIcon">
                    📖
                </div>

                <div>
                    <h2>
                        MANUAL DO GAMER
                    </h2>

                    <p>
                        Guia rápido para usar o site
                    </p>
                </div>

            </div>


            <div class="manualContent">


                <!-- =================================
                     COMO USAR O SITE
                ================================== -->

                <section class="manualSection">

                    <h3>
                        🎮 Como usar o site
                    </h3>

                    <p>
                        Navegue pelas categorias e
                        escolha o jogo que deseja
                        conhecer.
                    </p>

                    <p>
                        Ao abrir um jogo, você poderá
                        consultar plataforma,
                        requisitos, compatibilidade
                        e opções disponíveis.
                    </p>

                </section>


                <!-- =================================
                     ANDROID
                ================================== -->

                <section class="manualSection">

                    <h3>
                        📱 Jogos Android
                    </h3>

                    <p>
                        Confira primeiro a versão
                        do Android, RAM, processador,
                        GPU e espaço necessário.
                    </p>

                    <p>
                        Nem todo jogo funciona em
                        todos os aparelhos Android.
                    </p>

                </section>


                <!-- =================================
                     APK
                ================================== -->

                <section class="manualSection">

                    <h3>
                        📦 O que é APK?
                    </h3>

                    <p>
                        APK é o formato utilizado
                        para instalar aplicativos
                        Android.
                    </p>

                    <p>
                        Antes de instalar, confira
                        sempre a compatibilidade
                        indicada na página do jogo.
                    </p>

                </section>


                <!-- =================================
                     OBB
                ================================== -->

                <section class="manualSection">

                    <h3>
                        🗂️ O que é OBB?
                    </h3>

                    <p>
                        Alguns jogos Android utilizam
                        arquivos adicionais para seus
                        dados.
                    </p>

                    <p>
                        Quando um jogo exigir arquivos
                        adicionais, siga as instruções
                        específicas apresentadas
                        na página do jogo.
                    </p>

                </section>


                <!-- =================================
                     GPU
                ================================== -->

                <section class="manualSection">

                    <h3>
                        🧩 GPU
                    </h3>

                    <p>
                        A GPU é responsável por
                        processar os gráficos do jogo.
                    </p>

                    <div class="gpuList">

                        <span>
                            Adreno
                        </span>

                        <span>
                            Mali
                        </span>

                        <span>
                            PowerVR
                        </span>

                    </div>

                    <p>
                        Confira a GPU do seu aparelho
                        antes de escolher uma versão
                        específica do jogo.
                    </p>

                </section>


                <!-- =================================
                     PC
                ================================== -->

                <section class="manualSection">

                    <h3>
                        🖥️ Jogos para PC
                    </h3>

                    <p>
                        Compare os requisitos do jogo
                        com o hardware do seu computador.
                    </p>

                    <p>
                        Observe principalmente RAM,
                        CPU, GPU e espaço de armazenamento.
                    </p>

                </section>


                <!-- =================================
                     GAMECUBE
                ================================== -->

                <section class="manualSection">

                    <h3>
                        🎮 GameCube
                    </h3>

                    <p>
                        Jogos de GameCube são destinados
                        ao console original ou podem
                        ser utilizados através de um
                        emulador compatível.
                    </p>

                    <p>
                        O desempenho da emulação depende
                        do dispositivo e da configuração
                        utilizada.
                    </p>

                </section>


                <!-- =================================
                     PSP
                ================================== -->

                <section class="manualSection">

                    <h3>
                        🎮 PSP
                    </h3>

                    <p>
                        Jogos de PSP podem ser executados
                        no console original ou através
                        de um emulador compatível.
                    </p>

                </section>


                <!-- =================================
                     REQUISITOS
                ================================== -->

                <section class="manualSection">

                    <h3>
                        ⚙️ Requisitos
                    </h3>

                    <div class="requirementList">

                        <div>
                            <strong>RAM</strong>
                            <span>
                                Memória necessária
                            </span>
                        </div>

                        <div>
                            <strong>CPU</strong>
                            <span>
                                Processador
                            </span>
                        </div>

                        <div>
                            <strong>GPU</strong>
                            <span>
                                Processador gráfico
                            </span>
                        </div>

                        <div>
                            <strong>Storage</strong>
                            <span>
                                Espaço necessário
                            </span>
                        </div>

                    </div>

                </section>


                <!-- =================================
                     DOWNLOAD
                ================================== -->

                <section class="manualSection">

                    <h3>
                        ⬇️ Downloads
                    </h3>

                    <p>
                        Utilize somente os botões de
                        download disponibilizados na
                        página do jogo.
                    </p>

                    <p>
                        Sempre confira o nome do jogo,
                        plataforma e compatibilidade
                        antes de iniciar qualquer
                        download.
                    </p>

                </section>


                <!-- =================================
                     PROBLEMAS
                ================================== -->

                <section class="manualSection">

                    <h3>
                        ❓ Problemas comuns
                    </h3>

                    <p>
                        Se o jogo não funcionar,
                        verifique primeiro:
                    </p>

                    <ul>

                        <li>
                            Versão do Android
                        </li>

                        <li>
                            Memória RAM
                        </li>

                        <li>
                            Processador
                        </li>

                        <li>
                            GPU
                        </li>

                        <li>
                            Espaço disponível
                        </li>

                        <li>
                            Compatibilidade do jogo
                        </li>

                    </ul>

                </section>


            </div>


            <div class="manualFooter">

                <span>
                    🎮 Gamer Neon
                </span>

                <span>
                    Manual do site
                </span>

            </div>

        </div>
    `;


    /* =================================================
       CSS
    ================================================= */

    const manualStyle =
        document.createElement("style");


    manualStyle.textContent = `

        /* =========================================
           BOTÃO
        ========================================= */

        #manualButton {

            position: fixed;

            right: 18px;

            bottom: 82px;

            width: 52px;

            height: 52px;

            border-radius: 50%;

            border:
                1px solid
                rgba(0, 255, 255, 0.65);

            background:
                rgba(8, 8, 20, 0.90);

            color: #00ffff;

            font-size: 21px;

            cursor: pointer;

            z-index: 99998;

            display: flex;

            align-items: center;

            justify-content: center;

            backdrop-filter: blur(12px);

            -webkit-backdrop-filter:
                blur(12px);

            box-shadow:

                0 0 10px
                rgba(0, 255, 255, 0.35),

                0 0 25px
                rgba(0, 255, 255, 0.15);

            transition:
                0.25s ease;
        }


        #manualButton:hover {

            transform:
                scale(1.1);

            box-shadow:

                0 0 15px
                rgba(0, 255, 255, 0.8),

                0 0 35px
                rgba(0, 255, 255, 0.4);
        }


        #manualButton:active {

            transform:
                scale(0.92);
        }


        /* =========================================
           OVERLAY
        ========================================= */

        #manualOverlay {

            position: fixed;

            inset: 0;

            z-index: 100000;

            display: none;

            align-items: center;

            justify-content: center;

            padding: 20px;

            background:
                rgba(0, 0, 0, 0.78);

            backdrop-filter:
                blur(8px);

            -webkit-backdrop-filter:
                blur(8px);
        }


        #manualOverlay.active {

            display: flex;

            animation:
                manualFadeIn
                0.25s ease;
        }


        /* =========================================
           CAIXA
        ========================================= */

        .manualBox {

            position: relative;

            width: min(
                680px,
                100%
            );

            max-height:
                88vh;

            overflow: hidden;

            border:
                1px solid
                rgba(0, 255, 255, 0.45);

            border-radius:
                22px;

            background:
                linear-gradient(
                    145deg,
                    rgba(12, 15, 30, 0.98),
                    rgba(5, 8, 18, 0.98)
                );

            box-shadow:

                0 0 20px
                rgba(0, 255, 255, 0.25),

                0 0 70px
                rgba(0, 255, 255, 0.12);

            color:
                #ffffff;
        }


        /* =========================================
           FECHAR
        ========================================= */

        .manualClose {

            position: absolute;

            top: 14px;

            right: 14px;

            width: 40px;

            height: 40px;

            border: 0;

            border-radius:
                50%;

            background:
                rgba(255, 255, 255, 0.08);

            color:
                #ffffff;

            font-size:
                28px;

            line-height:
                1;

            cursor:
                pointer;

            z-index:
                5;

            transition:
                0.2s ease;
        }


        .manualClose:hover {

            background:
                rgba(255, 50, 80, 0.25);

            transform:
                rotate(90deg);
        }


        /* =========================================
           HEADER
        ========================================= */

        .manualHeader {

            display:
                flex;

            align-items:
                center;

            gap:
                15px;

            padding:
                25px 55px 20px 25px;

            border-bottom:
                1px solid
                rgba(255, 255, 255, 0.08);
        }


        .manualIcon {

            width:
                52px;

            height:
                52px;

            flex-shrink:
                0;

            display:
                flex;

            align-items:
                center;

            justify-content:
                center;

            border-radius:
                15px;

            background:
                rgba(0, 255, 255, 0.10);

            border:
                1px solid
                rgba(0, 255, 255, 0.30);

            font-size:
                25px;
        }


        .manualHeader h2 {

            margin:
                0 0 5px;

            font-size:
                21px;

            letter-spacing:
                1px;

            color:
                #00ffff;
        }


        .manualHeader p {

            margin:
                0;

            color:
                rgba(255, 255, 255, 0.6);

            font-size:
                13px;
        }


        /* =========================================
           CONTEÚDO
        ========================================= */

        .manualContent {

            padding:
                20px;

            max-height:
                calc(88vh - 155px);

            overflow-y:
                auto;
        }


        .manualContent::-webkit-scrollbar {

            width:
                6px;
        }


        .manualContent::-webkit-scrollbar-thumb {

            background:
                rgba(0, 255, 255, 0.35);

            border-radius:
                10px;
        }


        /* =========================================
           SEÇÕES
        ========================================= */

        .manualSection {

            margin-bottom:
                15px;

            padding:
                17px;

            border:
                1px solid
                rgba(255, 255, 255, 0.07);

            border-radius:
                15px;

            background:
                rgba(255, 255, 255, 0.035);
        }


        .manualSection:last-child {

            margin-bottom:
                0;
        }


        .manualSection h3 {

            margin:
                0 0 10px;

            color:
                #00ffff;

            font-size:
                16px;
        }


        .manualSection p {

            margin:
                7px 0;

            color:
                rgba(255, 255, 255, 0.78);

            font-size:
                14px;

            line-height:
                1.6;
        }


        .manualSection ul {

            margin:
                10px 0 0;

            padding-left:
                20px;

            color:
                rgba(255, 255, 255, 0.75);

            line-height:
                1.8;
        }


        /* =========================================
           GPU
        ========================================= */

        .gpuList {

            display:
                flex;

            flex-wrap:
                wrap;

            gap:
                8px;

            margin:
                12px 0;
        }


        .gpuList span {

            padding:
                7px 11px;

            border-radius:
                20px;

            background:
                rgba(0, 255, 255, 0.08);

            border:
                1px solid
                rgba(0, 255, 255, 0.22);

            color:
                #00ffff;

            font-size:
                12px;
        }


        /* =========================================
           REQUISITOS
        ========================================= */

        .requirementList {

            display:
                grid;

            grid-template-columns:
                repeat(2, 1fr);

            gap:
                9px;

            margin-top:
                12px;
        }


        .requirementList div {

            display:
                flex;

            flex-direction:
                column;

            gap:
                4px;

            padding:
                12px;

            border-radius:
                12px;

            background:
                rgba(255, 255, 255, 0.04);
        }


        .requirementList strong {

            color:
                #00ffff;

            font-size:
                13px;
        }


        .requirementList span {

            color:
                rgba(255, 255, 255, 0.6);

            font-size:
                11px;
        }


        /* =========================================
           FOOTER
        ========================================= */

        .manualFooter {

            display:
                flex;

            justify-content:
                space-between;

            gap:
                10px;

            padding:
                15px 20px;

            border-top:
                1px solid
                rgba(255, 255, 255, 0.08);

            color:
                rgba(255, 255, 255, 0.45);

            font-size:
                11px;
        }


        /* =========================================
           ANIMAÇÃO
        ========================================= */

        @keyframes manualFadeIn {

            from {

                opacity:
                    0;

                transform:
                    scale(0.96);
            }

            to {

                opacity:
                    1;

                transform:
                    scale(1);
            }
        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

            #manualButton {

                right:
                    18px;

                bottom:
                    82px;
            }


            .manualBox {

                width:
                    100%;

                max-height:
                    92vh;

                border-radius:
                    18px;
            }


            .manualContent {

                max-height:
                    calc(92vh - 155px);

                padding:
                    14px;
            }


            .manualHeader {

                padding:
                    20px 55px 17px 18px;
            }


            .manualHeader h2 {

                font-size:
                    18px;
            }


            .manualSection {

                padding:
                    14px;
            }


            .requirementList {

                grid-template-columns:
                    1fr;
            }
        }

    `;


    /* =================================================
       ADICIONAR CSS AO DOCUMENTO
    ================================================= */

    document.head.appendChild(
        manualStyle
    );


    /* =================================================
       ADICIONAR ELEMENTOS AO DOCUMENTO
    ================================================= */

    document.body.appendChild(
        manualButton
    );

    document.body.appendChild(
        manualOverlay
    );


    /* =================================================
       ABRIR MANUAL
    ================================================= */

    manualButton.addEventListener(
        "click",
        function () {

            manualOverlay.classList.add(
                "active"
            );

            document.body.style.overflow =
                "hidden";
        }
    );


    /* =================================================
       FECHAR MANUAL
    ================================================= */

    const closeButton =
        document.getElementById(
            "manualClose"
        );


    closeButton.addEventListener(
        "click",
        function () {

            closeManual();

        }
    );


    /* =================================================
       FUNÇÃO FECHAR
    ================================================= */

    function closeManual() {

        manualOverlay.classList.remove(
            "active"
        );

        document.body.style.overflow =
            "";
    }


    /* =================================================
       FECHAR CLICANDO FORA
    ================================================= */

    manualOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                manualOverlay
            ) {

                closeManual();
            }
        }
    );


    /* =================================================
       FECHAR COM ESC
    ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                manualOverlay.classList.contains(
                    "active"
                )
            ) {

                closeManual();
            }
        }
    );


})();
    