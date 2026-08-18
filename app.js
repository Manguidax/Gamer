// =====================================================
// MANGUI D'DAX GAMER HUB
// APP.JS
// =====================================================


// =====================================================
// DADOS DOS JOGOS
// =====================================================

const gameList = window.games || [];


// =====================================================
// ELEMENTOS DO INDEX
// =====================================================

const gamesContainer =
    document.getElementById("games");

const platformsContainer =
    document.getElementById("platforms");

const categoriesContainer =
    document.getElementById("categories");

const searchInput =
    document.getElementById("search");

const resultText =
    document.getElementById("resultText");

const totalGames =
    document.getElementById("totalGames");


// =====================================================
// FILTROS
// =====================================================

let currentPlatform = "Todos";
let currentCategory = "Todos";
let currentSearch = "";


// =====================================================
// PLATAFORMAS
// =====================================================

const platforms = [
    "Todos",
    "Android",
    "PC",
    "PS1",
    "PS2",
    "PSP",
    "GameCube",
    "Wii",
    "Xbox",
    "Nintendo"
];


// =====================================================
// ÍCONES
// =====================================================

function getPlatformIcon(platform) {

    const icons = {

        "Todos": "🎮",
        "Android": "📱",
        "PC": "💻",
        "PS1": "🎮",
        "PS2": "🎮",
        "PSP": "🕹️",
        "GameCube": "🟣",
        "Wii": "🎮",
        "Xbox": "🟢",
        "Nintendo": "🔴"

    };

    return icons[platform] || "🎮";
}


// =====================================================
// PLATAFORMAS
// =====================================================

function renderPlatforms() {

    if (!platformsContainer) return;

    platformsContainer.innerHTML = "";

    platforms.forEach(platform => {

        const button =
            document.createElement("button");

        button.className = "platform";

        if (platform === currentPlatform) {
            button.classList.add("active");
        }

        button.innerHTML = `

            <span class="platform-icon">
                ${getPlatformIcon(platform)}
            </span>

            <span class="platform-name">
                ${platform}
            </span>

        `;

        button.addEventListener("click", () => {

            currentPlatform = platform;

            renderPlatforms();
            renderGames();

        });

        platformsContainer.appendChild(button);

    });

}


// =====================================================
// CATEGORIAS
// =====================================================

function renderCategories() {

    if (!categoriesContainer) return;

    categoriesContainer.innerHTML = "";

    const categories = [

        "Todos",

        ...new Set(
            gameList
                .map(game => game.category)
                .filter(Boolean)
        )

    ];

    categories.forEach(category => {

        const button =
            document.createElement("button");

        button.className = "category";

        if (category === currentCategory) {
            button.classList.add("active");
        }

        button.textContent = category;

        button.addEventListener("click", () => {

            currentCategory = category;

            renderCategories();
            renderGames();

        });

        categoriesContainer.appendChild(button);

    });

}


// =====================================================
// FILTRAR JOGOS
// =====================================================

function getFilteredGames() {

    return gameList.filter(game => {

        const platformOK =
            currentPlatform === "Todos" ||
            game.platform === currentPlatform;

        const categoryOK =
            currentCategory === "Todos" ||
            game.category === currentCategory;

        const search =
            currentSearch
                .toLowerCase()
                .trim();

        const searchOK =

            search === "" ||

            (game.title || "")
                .toLowerCase()
                .includes(search) ||

            (game.platform || "")
                .toLowerCase()
                .includes(search) ||

            (game.category || "")
                .toLowerCase()
                .includes(search);

        return (
            platformOK &&
            categoryOK &&
            searchOK
        );

    });

}


// =====================================================
// CARD DO JOGO
// =====================================================

function createGameCard(game) {

    const card =
        document.createElement("article");

    card.className = "game-card";

    const subtitle =
        game.subtitle
            ? `
                <small class="game-subtitle">
                    ${game.subtitle}
                </small>
              `
            : "";

    card.innerHTML = `

   <a
    href="jogo.html?id=${encodeURIComponent(game.id)}"
    class="game-image game-image-link"
    aria-label="Abrir ${game.title}"
>
    <img
        src="${game.image}"
        alt="${game.title}"
        loading="lazy"
        onerror="this.src='images/default-game.jpg'"
    >

    <span class="game-platform">
        ${game.platform}
    </span>
</a>


        <div class="game-info">

            <h3>
                ${game.title || "Jogo"}
            </h3>

            ${subtitle}

            <div class="meta">

                <span>
                    🎮 ${game.platform || "N/A"}
                </span>

                <span>
                    🔥 ${game.category || "N/A"}
                </span>

            </div>

            <a
                href="jogo.html?id=${encodeURIComponent(game.id)}"
                class="view-btn"
            >
                VER JOGO →
            </a>

        </div>

    `;

    return card;

}


// =====================================================
// JOGOS EM DESTAQUE
// =====================================================

function renderFeaturedGames() {

    const featuredContainer =
        document.getElementById("featuredGames");

    if (!featuredContainer) return;

    featuredContainer.innerHTML = "";

    if (gameList.length === 0) {

        featuredContainer.innerHTML = `

            <div class="empty">
                Nenhum destaque disponível.
            </div>

        `;

        return;

    }

    const shuffled = [...gameList];

    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            shuffled[i],
            shuffled[j]
        ] = [
            shuffled[j],
            shuffled[i]
        ];

    }

    const amount =
        Math.min(8, shuffled.length);

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const wrapper =
            document.createElement("div");

        wrapper.className =
            "featured-card";

        wrapper.appendChild(
            createGameCard(shuffled[i])
        );

        featuredContainer.appendChild(
            wrapper
        );

    }

}


// =====================================================
// MOSTRAR JOGOS
// =====================================================

function renderGames() {

    if (!gamesContainer) return;

    const filteredGames =
        getFilteredGames();

    gamesContainer.innerHTML = "";

    if (resultText) {

        resultText.textContent =
            `${filteredGames.length} ` +
            (
                filteredGames.length === 1
                    ? "jogo encontrado"
                    : "jogos encontrados"
            );

    }

    if (filteredGames.length === 0) {

        gamesContainer.innerHTML = `

            <div class="empty">

                😕 Nenhum jogo encontrado.

                <br>

                Tente outra pesquisa ou categoria.

            </div>

        `;

        return;

    }

    filteredGames.forEach(game => {

        gamesContainer.appendChild(
            createGameCard(game)
        );

    });

}


// =====================================================
// PESQUISA
// =====================================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        event => {

            currentSearch =
                event.target.value;

            renderGames();

        }
    );

}


// =====================================================
// CONTADOR
// =====================================================

if (totalGames) {

    totalGames.textContent =
        gameList.length;

}


// =====================================================
// CRIAR BOTÃO DE DOWNLOAD
// =====================================================

function createDownloadButton(
    name,
    url,
    type
) {

    if (
        !url ||
        typeof url !== "string" ||
        url.trim() === "" ||
        url === "#"
    ) {

        return "";

    }

    return `

        <a
            href="${url}"
            class="download-btn"
            target="_blank"
            rel="noopener noreferrer"
        >

            <span>
                🔽
            </span>

            <span>

                ${name}

                <small>
                    ${type || "Download"}
                </small>

            </span>

        </a>

    `;

}


// =====================================================
// DOWNLOADS
// APK / OBB / GPU
// =====================================================

function renderDownloads(game) {

    let html = "";


    // -------------------------------------------------
    // DOWNLOADS NORMAIS
    // -------------------------------------------------

    if (Array.isArray(game.downloads)) {

        game.downloads.forEach(download => {

            if (!download) return;

            html += createDownloadButton(

                download.name || "Download",

                download.url,

                download.type || "Download"

            );

        });

    }


    // -------------------------------------------------
    // GPUs
    // -------------------------------------------------

    const gpuNames = [
        "Adreno",
        "Mali",
        "PowerVR",
        "Tegra"
    ];


    gpuNames.forEach(gpuName => {

        let gpuData = null;


        if (
            game.gpu &&
            game.gpu[gpuName]
        ) {

            gpuData =
                game.gpu[gpuName];

        }


        if (
            !gpuData &&
            game.gpus &&
            game.gpus[gpuName]
        ) {

            gpuData =
                game.gpus[gpuName];

        }


        if (!gpuData) return;


        // ---------------------------------------------
        // GPU COMO STRING
        // ---------------------------------------------

        if (
            typeof gpuData === "string"
        ) {

            html += createDownloadButton(

                `GPU ${gpuName}`,

                gpuData,

                "Download"

            );

            return;

        }


        // ---------------------------------------------
        // GPU COMO OBJETO
        // ---------------------------------------------

        if (
            typeof gpuData === "object"
        ) {

            const apk =
                gpuData.apk ||
                "";

            const obb =
                gpuData.obb ||
                "";


            if (apk) {

                html += createDownloadButton(

                    `${gpuName} — APK`,

                    apk,

                    "APK"

                );

            }


            if (obb) {

                html += createDownloadButton(

                    `${gpuName} — OBB`,

                    obb,

                    "OBB"

                );

            }

        }

    });


    if (!html) {

        html = `

            <div class="empty">

                📦 Downloads ainda não adicionados.

            </div>

        `;

    }


    return html;

}


// =====================================================
// TEMPORIZADOR DE DOWNLOAD
// =====================================================
//
// 4 segundos.
// Depois libera APK / OBB / GPUs.
//
// =====================================================

function createDownloadTimer(game) {

    return `

        <div
            class="download-lock"
            id="downloadLock"
        >

            <div class="download-lock-icon">
                🔒
            </div>

            <h3>
                Download protegido
            </h3>

            <p>
                Clique no botão abaixo para
                liberar os arquivos.
            </p>


            <button
                type="button"
                class="install-btn"
                id="startDownloadTimer"
            >

                ⬇️ INSTALAR

            </button>


            <div
                class="download-countdown"
                id="downloadCountdown"
                style="display:none;"
            >

                Preparando download...

                <strong id="countdownNumber">
                    4
                </strong>

            </div>

        </div>


        <div
            class="downloads-unlocked"
            id="downloadsUnlocked"
            style="display:none;"
        >

            <div class="unlock-message">

                ✅ Downloads liberados!

            </div>

            <div class="downloads">

                ${renderDownloads(game)}

            </div>

        </div>

    `;

}


// =====================================================
// INICIAR TEMPORIZADOR
// =====================================================

function startDownloadTimer() {

    const button =
        document.getElementById(
            "startDownloadTimer"
        );

    const countdown =
        document.getElementById(
            "downloadCountdown"
        );

    const number =
        document.getElementById(
            "countdownNumber"
        );

    const lock =
        document.getElementById(
            "downloadLock"
        );

    const unlocked =
        document.getElementById(
            "downloadsUnlocked"
        );


    if (
        !button ||
        !countdown ||
        !number ||
        !lock ||
        !unlocked
    ) {

        return;

    }


    // Evita clicar várias vezes

    button.disabled = true;

    button.style.pointerEvents =
        "none";


    countdown.style.display =
        "block";


    button.style.display =
        "none";


    let seconds = 4;

    number.textContent =
        seconds;


    const timer =
        setInterval(() => {

            seconds--;

            number.textContent =
                seconds;


            if (seconds <= 0) {

                clearInterval(timer);


                lock.style.display =
                    "none";


                unlocked.style.display =
                    "block";


                unlocked.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }, 1000);

}


// =====================================================
// PÁGINA INDIVIDUAL
// =====================================================

function loadGamePage() {

    const gamePage =
        document.getElementById(
            "gamePage"
        );

    if (!gamePage) return;


    // -------------------------------------------------
    // ID
    // -------------------------------------------------

    const params =
        new URLSearchParams(
            window.location.search
        );

    const gameId =
        params.get("id");


    if (!gameId) {

        gamePage.innerHTML = `

            <div class="empty">

                ❌ Jogo não especificado.

                <br><br>

                <a
                    href="index.html"
                    class="view-btn"
                >
                    ← Voltar para os jogos
                </a>

            </div>

        `;

        return;

    }


    // -------------------------------------------------
    // PROCURAR JOGO
    // -------------------------------------------------

    const game =
        gameList.find(
            item =>
                String(item.id) ===
                String(gameId)
        );


    if (!game) {

        gamePage.innerHTML = `

            <div class="empty">

                ❌ Jogo não encontrado.

                <br><br>

                <a
                    href="index.html"
                    class="view-btn"
                >
                    ← Voltar para o início
                </a>

            </div>

        `;

        return;

    }


    // =================================================
    // REQUISITOS
    // =================================================

    const requirements =
        game.requirements || {};

    let requirementsHTML = "";


    const labels = {

        android: "📱 Android",
        os: "💻 Sistema",
        emulator: "🎮 Emulador",
        ram: "🧠 RAM",
        cpu: "⚙️ CPU",
        gpu: "🎨 GPU",
        storage: "💾 Armazenamento",
        processor: "⚙️ Processador",
        graphics: "🎨 Gráficos"

    };


    Object.entries(
        requirements
    ).forEach(
        ([key, value]) => {

            if (
                value === undefined ||
                value === null ||
                String(value).trim() === ""
            ) {

                return;

            }


            const label =
                labels[key] || key;


            requirementsHTML += `

                <div class="requirement">

                    <span>
                        ${label}
                    </span>

                    <strong>
                        ${value}
                    </strong>

                </div>

            `;

        }
    );


    if (!requirementsHTML) {

        requirementsHTML = `

            <div class="empty">

                ⚙️ Requisitos não informados.

            </div>

        `;

    }


    // =================================================
    // COMPATIBILIDADE
    // =================================================

    const compatibility =
        game.compatibility ||
        "Consulte os requisitos antes de instalar.";


    // =================================================
    // IDIOMA
    // =================================================

    const language =
        game.language ||
        "Consultar";


    // =================================================
// VÍDEO DO YOUTUBE
    // =================================================

    const tutorialVideo = `

        <section class="detail-section">

            <h2>
                🎥 Tutorial de download
            </h2>

            <p>
                Veja como passar pelo encurtador
                e realizar o download do jogo.
            </p>

            <div class="tutorial-video">

                <iframe

                    src="https://www.youtube.com/embed/0bMlw7H3U2k"

                    title="Tutorial de download"

                    loading="lazy"

                    allow="
                        accelerometer;
                        autoplay;
                        clipboard-write;
                        encrypted-media;
                        gyroscope;
                        picture-in-picture;
                        web-share
                    "

                    allowfullscreen

                ></iframe>

            </div>

        </section>

    `;


    // =================================================
    // PÁGINA
    // =================================================

    gamePage.innerHTML = `

        <!-- =========================================
             INFORMAÇÕES DO JOGO
        ========================================== -->

        <div class="game-detail">


            <div class="game-detail-cover">

                <img

                    src="${game.image || "images/default-game.jpg"}"

                    alt="${game.title || "Jogo"}"

                    onerror="
                        this.src='images/default-game.jpg'
                    "

                >

            </div>


            <div class="game-detail-info">

                <span class="detail-platform">

                    ${game.platform || "Game"}

                </span>


                <h1>

                    ${game.title || "Jogo"}

                </h1>


                ${
                    game.subtitle
                        ? `

                            <p class="detail-subtitle">

                                ${game.subtitle}

                            </p>

                          `
                        : ""
                }


                <div class="detail-meta">

                    <span>
                        🎮 ${game.platform || "N/A"}
                    </span>

                    <span>
                        🔥 ${game.category || "N/A"}
                    </span>

                    <span>
                        🌐 ${language}
                    </span>

                </div>


                <p class="detail-description">

                    ${game.description || ""}

                </p>

            </div>

        </div>


        <!-- =========================================
             COMPATIBILIDADE
        ========================================== -->

        <section class="detail-section">

            <h2>
                📱 Compatibilidade
            </h2>

            <p>
                ${compatibility}
            </p>

        </section>


        <!-- =========================================
             REQUISITOS
        ========================================== -->

        <section class="detail-section">

            <h2>
                ⚙️ Requisitos
            </h2>

            <div class="requirements">

                ${requirementsHTML}

            </div>

        </section>


        <!-- =========================================
             DOWNLOAD
        ========================================== -->

        <section class="detail-section">

            <h2>
                🔽 Downloads
            </h2>

            <p>
                Clique em INSTALAR para liberar
                os arquivos disponíveis.
            </p>


            <div id="downloadArea">

                ${createDownloadTimer(game)}

            </div>

        </section>


        <!-- =========================================
             TUTORIAL YOUTUBE
        ========================================== -->

        ${tutorialVideo}


        <!-- =========================================
             JOGOS RELACIONADOS
        ========================================== -->

        <section class="detail-section">

            <h2>
                🎮 Jogos que talvez você goste
            </h2>

            <div
                id="relatedGames"
                class="featured-games"
            ></div>

        </section>


        <!-- =========================================
             VOLTAR
        ========================================== -->

        <div class="back-games">

            <a
                href="index.html#jogos"
                class="view-btn"
            >

                ← Ver todos os jogos

            </a>

        </div>

    `;


    // =================================================
    // BOTÃO DO TEMPORIZADOR
    // =================================================

    const startButton =
        document.getElementById(
            "startDownloadTimer"
        );


    if (startButton) {

        startButton.addEventListener(
            "click",
            startDownloadTimer
        );

    }


    // =================================================
    // RELACIONADOS
    // =================================================

    renderRelatedGames(game);


    // =================================================
    // TÍTULO
    // =================================================

    document.title =
        `${game.title} | Mangui d'Dax`;

}


// =====================================================
// JOGOS RELACIONADOS
// =====================================================

function renderRelatedGames(currentGame) {

    const container =
        document.getElementById(
            "relatedGames"
        );

    if (!container) return;


    let related =
        gameList.filter(
            game =>
                String(game.id) !==
                String(currentGame.id)
        );


    // Priorizar mesma categoria

    const sameCategory =
        related.filter(
            game =>
                game.category &&
                currentGame.category &&
                game.category ===
                currentGame.category
        );


    const others =
        related.filter(
            game =>
                !sameCategory.includes(game)
        );


    related = [
        ...sameCategory,
        ...others
    ];


    // Embaralhar

    for (
        let i = related.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            related[i],
            related[j]
        ] = [
            related[j],
            related[i]
        ];

    }


    // Até 8 jogos

    related
        .slice(0, 8)
        .forEach(game => {

            const wrapper =
                document.createElement("div");

            wrapper.className =
                "featured-card";

            wrapper.appendChild(
                createGameCard(game)
            );

            container.appendChild(
                wrapper
            );

        });

}


// =====================================================
// INICIALIZAÇÃO
// =====================================================

if (gamesContainer) {

    renderPlatforms();

    renderCategories();

    renderFeaturedGames();

    renderGames();

}


// =====================================================
// EXPOR PARA JOGO.HTML
// =====================================================

window.loadGamePage =
    loadGamePage;