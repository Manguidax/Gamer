// =====================================================
// MANGUI D'DAX GAMER HUB
// ANÚNCIO FLUTUANTE YOUTUBE
// =====================================================

(function () {

    function iniciarAnuncio() {

        // Evita criar duas vezes
        if (document.getElementById("youtube-ad")) {
            return;
        }

        const canal =
            "https://www.youtube.com/channel/UCnH_491SwNHGoXoBleASHtw?sub_confirmation=1";

        const anuncio = document.createElement("div");

        anuncio.id = "youtube-ad";

        anuncio.innerHTML = `
            <div class="youtube-ad-box">

                <button
                    type="button"
                    class="youtube-ad-close"
                    aria-label="Fechar"
                >
                    ×
                </button>

                <a
                    href="${canal}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="youtube-ad-link"
                >

                    <div class="youtube-logo">
                        ▶
                    </div>

                    <div class="youtube-ad-content">

                        <strong>
                            Mangui d'Dax
                        </strong>

                        <span>
                            🎮 Jogos • Tutoriais • Novidades
                        </span>

                        <b>
                            🔔 INSCREVA-SE NO CANAL
                        </b>

                    </div>

                </a>

            </div>
        `;

        document.body.appendChild(anuncio);


        // Fechar
        const fechar =
            anuncio.querySelector(".youtube-ad-close");

        if (fechar) {

            fechar.addEventListener("click", function (event) {

                event.preventDefault();
                event.stopPropagation();

                anuncio.classList.remove(
                    "youtube-ad-show"
                );

                setTimeout(function () {

                    if (anuncio.parentNode) {
                        anuncio.parentNode.removeChild(anuncio);
                    }

                }, 350);

            });

        }


        // Aparecer depois de 2 segundos
        setTimeout(function () {

            anuncio.classList.add(
                "youtube-ad-show"
            );

        }, 2000);

    }


    // Se o HTML ainda estiver carregando
    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            iniciarAnuncio
        );

    } else {

        iniciarAnuncio();

    }

})();