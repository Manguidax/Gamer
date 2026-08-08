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
// ÍCONES DAS PLATAFORMAS
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
// MOSTRAR PLATAFORMAS
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

        button.addEventListener(
            "click",
            () => {

                currentPlatform = platform;

                renderPlatforms();

                renderGames();

            }
        );

        platformsContainer.appendChild(button);

    });

}


// =====================================================
// MOSTRAR CATEGORIAS
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

        button.addEventListener(
            "click",
            () => {

                currentCategory = category;

                renderCategories();

                renderGames();

            }
        );

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
// MOSTRAR JOGOS NO INDEX
// =====================================================

function renderGames() {

    if (!gamesContainer) return;

    const filteredGames =
        getFilteredGames();

    gamesContainer.innerHTML = "";


    // RESULTADO

    if (resultText) {

        resultText.textContent =

            `${filteredGames.length} ` +

            (

                filteredGames.length === 1

                    ? "jogo encontrado"

                    : "jogos encontrados"

            );

    }


    // NENHUM JOGO

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


    // CARDS

    filteredGames.forEach(game => {

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

            <div class="game-image">

                <img

                    src="${game.image}"

                    alt="${game.title}"

                    loading="lazy"

                    onerror="
                        this.src='images/default-game.jpg'
                    "

                >

                <span class="game-platform">

                    ${game.platform}

                </span>

            </div>


            <div class="game-info">

                <h3>

                    ${game.title}

                </h3>

                ${subtitle}


                <div class="meta">

                    <span>

                        🎮 ${game.platform}

                    </span>

                    <span>

                        🔥 ${game.category}

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


        gamesContainer.appendChild(card);

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
// CONTADOR TOTAL
// =====================================================

if (totalGames) {

    totalGames.textContent =
        gameList.length;

}


// =====================================================
// ESCAPAR HTML
// Evita problemas com caracteres especiais
// =====================================================

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// =====================================================
// JOGOS EM DESTAQUE
// =====================================================

function getFeaturedGames(currentGameId) {

    if (!gameList.length) return [];


    // Remove o jogo que está sendo visualizado

    let available =
        gameList.filter(
            game => game.id !== currentGameId
        );


    // Embaralhar

    available.sort(
        () => Math.random() - 0.5
    );


    // Pegar até 6

    return available.slice(0, 6);

}


// =====================================================
// RENDERIZAR JOGOS EM DESTAQUE
// =====================================================

function renderFeaturedGames(currentGameId) {

    const container =
        document.getElementById(
            "featuredGames"
        );

    if (!container) return;


    const featured =
        getFeaturedGames(currentGameId);


    if (!featured.length) {

        container.innerHTML = "";

        return;

    }


    container.innerHTML = featured
        .map(game => `

            <a
                href="jogo.html?id=${encodeURIComponent(game.id)}"
                class="featured-card"
            >

                <div class="featured-image">

                    <img

                        src="${escapeHTML(game.image)}"

                        alt="${escapeHTML(game.title)}"

                        loading="lazy"

                        onerror="
                            this.src='images/default-game.jpg'
                        "

                    >

                    <span class="featured-platform">

                        ${escapeHTML(game.platform)}

                    </span>

                </div>


                <div class="featured-info">

                    <strong>

                        ${escapeHTML(game.title)}

                    </strong>

                    <small>

                        ${escapeHTML(game.category || "Jogo")}

                    </small>

                </div>

            </a>

        `)
        .join("");

}


// =====================================================
// VÍDEO TUTORIAL
// =====================================================

function renderTutorialVideo() {

    const videoContainer =
        document.getElementById(
            "tutorialVideo"
        );

    if (!videoContainer) return;


    videoContainer.innerHTML = `

        <div class="tutorial-video">

            <iframe

                src="https://www.youtube.com/embed/0bMlw7H3U2k"

                title="Tutorial - Como passar do encurtador"

                loading="lazy"

                frameborder="0"

                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                allowfullscreen

            ></iframe>

        </div>

    `;

}


// =====================================================
// PÁGINA INDIVIDUAL DO JOGO
// =====================================================

function loadGamePage() {

    const gamePage =
        document.getElementById("gamePage");

    if (!gamePage) return;


    // =================================================
    // PEGAR ID DA URL
    // =================================================

    const params =
        new URLSearchParams(
            window.location.search
        );

    const gameId =
        params.get("id");


    // =================================================
    // SEM ID
    // =================================================

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


    // =================================================
    // PROCURAR JOGO
    // =================================================

    const game =
        gameList.find(
            item => item.id === gameId
        );


    // =================================================
    // JOGO NÃO ENCONTRADO
    // =================================================

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

        adreno: "🔴 Adreno",

        mali: "🟢 Mali",

        powervr: "🔵 PowerVR",

        storage: "💾 Armazenamento"

    };


    Object.entries(requirements)
        .forEach(
            ([key, value]) => {

                if (
                    value === undefined ||
                    value === null ||
                    value === ""
                ) {
                    return;
                }


                const label =
                    labels[key] ||
                    key;


                requirementsHTML += `

                    <div class="requirement">

                        <span>

                            ${escapeHTML(label)}

                        </span>

                        <strong>

                            ${escapeHTML(value)}

                        </strong>

                    </div>

                `;

            }
        );


    if (!requirementsHTML) {

        requirementsHTML = `

            <div class="empty">

                Requisitos não cadastrados.

            </div>

        `;

    }


    // =================================================
    // DOWNLOADS
    // =================================================

    let downloadsHTML = "";


    if (

        game.downloads &&

        game.downloads.length > 0

    ) {

        game.downloads.forEach(
            download => {

                const url =
                    download.url || "#";


                downloadsHTML += `

                    <a

                        href="${escapeHTML(url)}"

                        class="download-btn"

                        ${
                            url !== "#"
                                ? 'target="_blank" rel="noopener noreferrer"'
                                : ""
                        }

                    >

                        <span>

                            🔽

                        </span>


                        <span>

                            ${escapeHTML(
                                download.name ||
                                "Download"
                            )}


                            <small>

                                ${escapeHTML(
                                    download.type ||
                                    "Download"
                                )}

                            </small>

                        </span>

                    </a>

                `;

            }
        );

    } else {

        downloadsHTML = `

            <div class="empty">

                📦 Downloads ainda não adicionados.

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
    // HTML DA PÁGINA
    // =================================================

    gamePage.innerHTML = `


        <!-- =========================================
             BLOCO PRINCIPAL
        ========================================== -->

        <div class="game-detail">


            <!-- CAPA -->

            <div class="game-detail-cover">

                <img

                    src="${escapeHTML(game.image)}"

                    alt="${escapeHTML(game.title)}"

                    onerror="
                        this.src='images/default-game.jpg'
                    "

                >

            </div>


            <!-- INFORMAÇÕES -->

            <div class="game-detail-info">


                <span class="detail-platform">

                    ${escapeHTML(game.platform)}

                </span>


                <h1>

                    ${escapeHTML(game.title)}

                </h1>


                ${
                    game.subtitle

                        ? `

                            <p class="detail-subtitle">

                                ${escapeHTML(
                                    game.subtitle
                                )}

                            </p>

                          `

                        : ""
                }


                <div class="detail-meta">

                    <span>

                        🎮 ${escapeHTML(
                            game.platform
                        )}

                    </span>


                    <span>

                        🔥 ${escapeHTML(
                            game.category ||
                            "Jogo"
                        )}

                    </span>


                    <span>

                        🌐 ${escapeHTML(
                            language
                        )}

                    </span>

                </div>


                <p class="detail-description">

                    ${escapeHTML(
                        game.description || ""
                    )}

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

                ${escapeHTML(
                    compatibility
                )}

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
             DOWNLOADS
        ========================================== -->

        <section class="detail-section">

            <h2>

                🔽 Downloads

            </h2>


            <p>

                Escolha a versão ou arquivo
                disponível para este jogo.

            </p>


            <div class="downloads">

                ${downloadsHTML}

            </div>

        </section>



        <!-- =========================================
             TUTORIAL
        ========================================== -->

        <section class="detail-section tutorial-section">

            <h2>

                🎥 Como passar do encurtador

            </h2>

            <p>

                Assista ao tutorial antes de fazer
                o download.

            </p>


            <div id="tutorialVideo">

            </div>

        </section>



        <!-- =========================================
             JOGOS EM DESTAQUE
        ========================================== -->

        <section class="detail-section featured-section">

            <h2>

                🔥 Jogos em destaque

            </h2>

            <p>

                Talvez você também goste destes jogos.

            </p>


            <div
                id="featuredGames"
                class="featured-games"
            >

            </div>

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
    // VÍDEO
    // =================================================

    renderTutorialVideo();


    // =================================================
    // JOGOS EM DESTAQUE
    // =================================================

    renderFeaturedGames(game.id);


    // =================================================
    // TÍTULO DA ABA
    // =================================================

    document.title =
        `${game.title} | Mangui d'Dax`;

}


// =====================================================
// INICIALIZAÇÃO DO INDEX
// =====================================================

if (gamesContainer) {

    renderPlatforms();

    renderCategories();

    renderGames();

}


// =====================================================
// EXPOR FUNÇÃO PARA JOGO.HTML
// =====================================================

window.loadGamePage =
    loadGamePage;


// =====================================================
// EXPOR FUNÇÕES
// =====================================================

window.renderFeaturedGames =
    renderFeaturedGames;

window.renderTutorialVideo =
    renderTutorialVideo;
       