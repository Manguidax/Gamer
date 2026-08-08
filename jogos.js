/* =====================================================
   MANGUI D'DAX GAMER HUB
   JOGOS.JS

   Estrutura:
   - Dados dos jogos
   - Requisitos
   - Compatibilidade
   - Downloads
   - GPU: Adreno / Mali / PowerVR
===================================================== */

const games = [

    /* =================================================
       01 - LIFE IS STRANGE
    ================================================= */

    {
        id: "life-is-strange",

        title: "Life is Strange",

        platform: "Android",

        category: "Aventura",

        image: "images/life-is-strange.jpg",

        description:
            "Aventura narrativa baseada em escolhas.",

        requirements: {
            android: "Android 9+",
            ram: "3 GB+",
            cpu: "Octa-Core",
            gpu: "Consultar compatibilidade",
            storage: "Consultar"
        },

        compatibility:
            "Compatibilidade depende do dispositivo.",

        language:
            "Português conforme a versão",

        gpuDownloads: {

            adreno: null,

            mali: null,

            powervr: null
        },

        downloads: [
            {
                name: "Android",
                type: "APK",
                url: "#"
            }
        ]
    },


    /* =================================================
       02 - THE WALKING DEAD SEASON TWO
       LEGENDADO
    ================================================= */

    {
        id: "walking-dead-season-two-legendado",

        title: "The Walking Dead: Season Two",

        subtitle:
            "Versão antiga • Legendado em português",

        platform: "Android",

        category: "Aventura",

        image:
            "images/walking-dead-season-two.jpg",

        description:
            "Segunda temporada da aventura narrativa de The Walking Dead.",

        requirements: {
            android: "Android abaixo de 14",
            ram: "1 GB+",
            cpu: "Dual-Core 1.2 GHz",
            gpu: "GPU compatível",
            storage: "Consultar"
        },

        compatibility:
            "Destinada principalmente a versões antigas do Android.",

        language:
            "Português — legendado",

        gpuDownloads: {

            adreno: {
                apk: "#",
                obb: "#"
            },

            mali: {
                apk: "#",
                obb: "#"
            },

            powervr: {
                apk: "#",
                obb: "#"
            }
        },

        downloads: [
            {
                name: "APK",
                type: "APK",
                url: "#"
            },

            {
                name: "Dados",
                type: "OBB",
                url: "#"
            }
        ]
    },


    /* =================================================
       03 - THE WALKING DEAD SEASON TWO
       ATUALIZADO
    ================================================= */

    {
        id: "walking-dead-season-two-atualizado",

        title: "The Walking Dead: Season Two",

        subtitle:
            "Versão atualizada",

        platform: "Android",

        category: "Aventura",

        image:
            "images/walking-dead-season-two-updated.jpg",

        description:
            "Versão atualizada da segunda temporada.",

        requirements: {
            android: "Android 14 / 15 / 16",
            ram: "1 GB+",
            cpu: "Dual-Core ou superior",
            gpu: "GPU compatível conforme versão",
            storage: "Consultar"
        },

        compatibility:
            "Compatibilidade depende do aparelho e da versão.",

        language:
            "Sem legendas em português",

        gpuDownloads: {

            adreno: {
                apk: "#",
                obb: "#"
            },

            mali: {
                apk: "#",
                obb: "#"
            },

            powervr: {
                apk: "#",
                obb: "#"
            }
        },

        downloads: [
            {
                name: "APK atualizado",
                type: "APK",
                url: "#"
            },

            {
                name: "Dados",
                type: "DATA / OBB",
                url: "#"
            }
        ]
    },


    /* =================================================
       04 - THE AMAZING SPIDER-MAN 2
    ================================================= */

    {
        id: "amazing-spiderman-2",

        title: "The Amazing Spider-Man 2",

        platform: "Android",

        category: "Ação",

        image:
            "images/amazing-spiderman-2.jpg",

        description:
            "Jogo de ação baseado no universo do Spider-Man.",

        requirements: {
            android: "Consultar versão",
            ram: "Consultar",
            cpu: "Consultar",
            gpu: "GPU específica conforme versão",
            storage: "Consultar"
        },

        compatibility:
            "Compatibilidade pode variar conforme a versão.",

        language:
            "Consultar",

        gpuDownloads: {

            adreno: {
                apk: "#",
                obb: "#"
            },

            mali: {
                apk: "#",
                obb: "#"
            },

            powervr: {
                apk: "#",
                obb: "#"
            }
        },

        downloads: [
            {
                name: "APK",
                type: "APK",
                url: "#"
            },

            {
                name: "OBB",
                type: "OBB",
                url: "#"
            }
        ]
    },


    /* =================================================
       05 - LIFE IS STRANGE BEFORE THE STORM
    ================================================= */

    {
        id: "life-is-strange-before-the-storm",

        title: "Life is Strange: Before the Storm",

        platform: "Android",

        category: "Aventura",

        image:
            "images/life-is-strange-before-the-storm.jpg",

        description:
            "Aventura narrativa ambientada antes de Life is Strange.",

        requirements: {
            android: "Android 9+",
            ram: "3 GB+",
            cpu: "Octa-Core",
            gpu: "GPU compatível",
            storage: "Consultar"
        },

        compatibility:
            "Jogo relativamente exigente para Android.",

        language:
            "Consultar",

        gpuDownloads: {

            adreno: null,

            mali: null,

            powervr: null
        },

        downloads: [
            {
                name: "Android",
                type: "APK",
                url: "#"
            }
        ]
    },


    /* =================================================
       06 - NEED FOR SPEED MOST WANTED ANDROID
    ================================================= */

    {
        id: "nfs-most-wanted-android",

        title: "Need for Speed: Most Wanted",

        platform: "Android",

        category: "Corrida",

        image:
            "images/nfs-most-wanted.jpg",

        description:
            "Corridas, carros e perseguições policiais.",

        requirements: {
            android: "Consultar versão",
            ram: "Consultar",
            cpu: "Consultar",
            gpu: "GPU compatível",
            storage: "Consultar"
        },

        compatibility:
            "Compatibilidade varia conforme dispositivo e versão.",

        language:
            "Consultar",

        gpuDownloads: {

            adreno: {
                apk: "#",
                obb: "#"
            },

            mali: {
                apk: "#",
                obb: "#"
            },

            powervr: {
                apk: "#",
                obb: "#"
            }
        },

        downloads: [
            {
                name: "APK",
                type: "APK",
                url: "#"
            },

            {
                name: "OBB",
                type: "OBB",
                url: "#"
            }
        ]
    },


    /* =================================================
       07 - RED DEAD REDEMPTION
    ================================================= */

    {
        id: "red-dead-redemption",

        title: "Red Dead Redemption",

        subtitle: "Mobile",

        platform: "Android",

        category: "Ação",

        image:
            "images/red-dead-redemption.jpg",

        description:
            "Aventura de mundo aberto no universo de Red Dead Redemption.",

        requirements: {
            android: "Consultar versão oficial",
            ram: "Consultar",
            cpu: "Alto desempenho recomendado",
            gpu: "GPU de alto desempenho",
            storage: "Consultar"
        },

        compatibility:
            "Requer hardware compatível.",

        language:
            "Consultar",

        gpuDownloads: {

            adreno: null,

            mali: null,

            powervr: null
        },

        downloads: [
            {
                name: "Android",
                type: "Oficial",
                url: "#"
            }
        ]
    },


    /* =================================================
       08 - GOD OF WAR GHOST OF SPARTA
    ================================================= */

    {
        id: "god-of-war-ghost-of-sparta",

        title: "God of War: Ghost of Sparta",

        subtitle:
            "Dublado em português",

        platform: "PSP",

        category: "Ação",

        image:
            "images/god-of-war-ghost-of-sparta.jpg",

        description:
            "Aventura de ação originalmente lançada para PSP.",

        requirements: {
            emulator: "PPSSPP",
            android: "Depende do emulador",
            ram: "Depende do dispositivo",
            cpu: "Depende do dispositivo",
            gpu: "Compatível com PPSSPP",
            storage: "Consultar"
        },

        compatibility:
            "Pode ser executado através de emulador PSP.",

        language:
            "Português — dublado",

        gpuDownloads: null,

        downloads: [
            {
                name: "PSP",
                type: "ISO / CSO",
                url: "#"
            }
        ]
    },


    /* =================================================
       09 - NBA 2K20
    ================================================= */

    {
        id: "nba-2k20",

        title: "NBA 2K20",

        platform: "Android",

        category: "Esportes",

        image:
            "images/nba-2k20.jpg",

        description:
            "Jogo de basquete da série NBA 2K.",

        requirements: {
            android: "Consultar versão",
            ram: "Consultar",
            cpu: "Consultar",
            gpu: "GPU compatível",
            storage: "Consultar"
        },

        compatibility:
            "Depende da versão e do dispositivo.",

        language:
            "Consultar",

        gpuDownloads: {

            adreno: null,

            mali: null,

            powervr: null
        },

        downloads: [
            {
                name: "Android",
                type: "APK",
                url: "#"
            }
        ]
    },


    /* =================================================
       10 - MINECRAFT STORY MODE
    ================================================= */

    {
        id: "minecraft-story-mode",

        title: "Minecraft: Story Mode",

        platform: "Android",

        category: "Aventura",

        image:
            "images/minecraft-story-mode.jpg",

        description:
            "Aventura narrativa no universo de Minecraft.",

        requirements: {
            android: "Versão antiga",
            ram: "Consultar",
            cpu: "Consultar",
            gpu: "GPU específica conforme versão",
            storage: "Consultar"
        },

        compatibility:
            "Pode apresentar incompatibilidade em Android recente.",

        language:
            "Consultar",

        gpuDownloads: {

            adreno: {
                apk: "#",
                obb: "#"
            },

            mali: {
                apk: "#",
                obb: "#"
            },

            powervr: {
                apk: "#",
                obb: "#"
            }
        },

        downloads: [
            {
                name: "APK",
                type: "APK",
                url: "#"
            },

            {
                name: "Dados",
                type: "OBB",
                url: "#"
            }
        ]
    },


    /* =================================================
       11 - GTA SAN ANDREAS DEFINITIVE
    ================================================= */

    {
        id: "gta-san-andreas-definitive",

        title: "GTA San Andreas: Definitive Edition",

        platform: "Android",

        category: "Ação",

        image:
            "images/gta-san-andreas-definitive.jpg",

        description:
            "Versão Definitive Edition de GTA San Andreas.",

        requirements: {
            android: "Consultar versão",
            ram: "Consultar",
            cpu: "Consultar",
            gpu: "GPU compatível",
            storage: "Consultar"
        },

        compatibility:
            "Versão mais exigente graficamente.",

        language:
            "Consultar",

        gpuDownloads: {

            adreno: null,

            mali: null,

            powervr: null
        },

        downloads: [
            {
                name: "Android",
                type: "Oficial",
                url: "#"
            }
        ]
    },


    /* =================================================
       12 - BATMAN THE DARK KNIGHT RISES
    ================================================= */

    {
        id: "batman-dark-knight-rises",

        title: "Batman: The Dark Knight Rises",

        platform: "Android",

        category: "Ação",

        image:
            "images/batman-dark-knight-rises.jpg",

        description:
            "Jogo de ação baseado em The Dark Knight Rises.",

        requirements: {
            android: "Consultar",
            ram: "Consultar",
            cpu: "Consultar",
            gpu: "GPU específica conforme versão",
            storage: "Consultar"
        },

        compatibility:
            "Jogo antigo para Android.",

        language:
            "Consultar",

        gpuDownloads: {

            adreno: {
                apk: "#",
                obb: "#"
            },

            mali: {
                apk: "#",
                obb: "#"
            },

            powervr: {
                apk: "#",
                obb: "#"
            }
        },

        downloads: [
            {
                name: "APK",
                type: "APK",
                url: "#"
            },

            {
                name: "OBB",
                type: "OBB",
                url: "#"
            }
        ]
    },


    /* =================================================
       13 - NFS MOST WANTED 2005 PC
    ================================================= */

    {
        id: "nfs-most-wanted-2005-pc",

        title: "Need for Speed: Most Wanted (2005)",

        subtitle: "PC",

        platform: "PC",

        category: "Corrida",

        image:
            "images/nfs-most-wanted-2005.jpg",

        description:
            "Clássico Need for Speed: Most Wanted lançado em 2005.",

        requirements: {
            os: "Windows",
            ram: "2 GB+",
            cpu: "Consultar",
            gpu: "DirectX compatível",
            storage: "Consultar"
        },

        compatibility:
            "Compatibilidade depende da configuração do PC.",

        language:
            "Consultar",

        gpuDownloads: null,

        downloads: [
            {
                name: "PC",
                type: "Instalador",
                url: "#"
            }
        ]
    },


    /* =================================================
       14 - THE WALKING DEAD SEASON ONE
    ================================================= */

    {
        id: "walking-dead-season-one",

        title: "The Walking Dead: Season One",

        subtitle:
            "Versão atualizada",

        platform: "Android",

        category: "Aventura",

        image:
            "images/walking-dead-season-one.jpg",

        description:
            "Primeira temporada da série narrativa The Walking Dead.",

        requirements: {
            android: "Consultar versão",
            ram: "1 GB+",
            cpu: "Dual-Core",
            gpu: "GPU compatível",
            storage: "Consultar"
        },

        compatibility:
            "A compatibilidade depende da versão.",

        language:
            "Sem legendas em português",

        gpuDownloads: {

            adreno: null,

            mali: null,

            powervr: null
        },

        downloads: [
            {
                name: "Android",
                type: "APK",
                url: "#"
            }
        ]
    },


    /* =================================================
       15 - THE WALKING DEAD SEASON THREE
    ================================================= */

    {
        id: "walking-dead-season-three",

        title: "The Walking Dead: Season Three",

        subtitle:
            "A New Frontier",

        platform: "Android",

        category: "Aventura",

        image:
            "images/walking-dead-season-three.jpg",

        description:
            "Terceira temporada da série The Walking Dead.",

        requirements: {
            android: "Consultar",
            ram: "Consultar",
            cpu: "Consultar",
            gpu: "GPU compatível",
            storage: "Consultar"
        },

        compatibility:
            "Compatibilidade depende da versão.",

        language:
            "Português — legendado",

        gpuDownloads: {

            adreno: null,

            mali: null,

            powervr: null
        },

        downloads: [
            {
                name: "Android",
                type: "APK",
                url: "#"
            }
        ]
    },


    /* =================================================
       16 - THE WALKING DEAD MICHONNE
    ================================================= */

    {
        id: "walking-dead-michonne",

        title: "The Walking Dead: Michonne",

        subtitle:
            "Versão atualizada",

        platform: "Android",

        category: "Aventura",

        image:
            "images/walking-dead-michonne.jpg",

        description:
            "Minissérie narrativa protagonizada por Michonne.",

        requirements: {
            android: "Consultar",
            ram: "Consultar",
            cpu: "Consultar",
            gpu: "GPU compatível",
            storage: "Consultar"
        },

        compatibility:
            "Versão atualizada pode funcionar em Android recente.",

        language:
            "Sem legendas em português",

        gpuDownloads: {

            adreno: null,

            mali: null,

            powervr: null
        },

        downloads: [
            {
                name: "Android",
                type: "APK",
                url: "#"
            }
        ]
    },


    /* =================================================
       17 - MODERN COMBAT 4
    ================================================= */

    {
        id: "modern-combat-4",

        title: "Modern Combat 4",

        platform: "Android",

        category: "Ação",

        image:
            "images/modern-combat-4.jpg",

        description:
            "Jogo de tiro em primeira pessoa.",

        requirements: {
            android: "Consultar",
            ram: "Consultar",
            cpu: "Consultar",
            gpu: "GPU compatível",
            storage: "Consultar"
        },

        compatibility:
            "Jogo antigo; compatibilidade pode variar.",

        language:
            "Consultar",

        gpuDownloads: {

            adreno: {
                apk: "#",
                obb: "#"
            },

            mali: {
                apk: "#",
                obb: "#"
            },

            powervr: {
                apk: "#",
                obb: "#"
            }
        },

        downloads: [
            {
                name: "APK",
                type: "APK",
                url: "#"
            },

            {
                name: "OBB",
                type: "OBB",
                url: "#"
            }
        ]
    },


    /* =================================================
       18 - TEEN TITANS GO
    ================================================= */

    {
        id: "teen-titans-go",

        title: "Teen Titans GO! Figure",

        platform: "Android",

        category: "RPG",

        image:
            "images/teen-titans-go.jpg",

        description:
            "RPG baseado em Teen Titans GO!.",

        requirements: {
            android: "Consultar",
            ram: "Consultar",
            cpu: "Consultar",
            gpu: "GPU compatível",
            storage: "Consultar"
        },

        compatibility:
            "Depende da versão.",

        language:
            "Consultar",

        gpuDownloads: {

            adreno: null,

            mali: null,

            powervr: null
        },

        downloads: [
            {
                name: "APK",
                type: "APK",
                url: "#"
            },

            {
                name: "OBB",
                type: "OBB",
                url: "#"
            }
        ]
    },


    /* =================================================
       19 - TEEN TITANS GO 2
    ================================================= */

    {
        id: "teen-titans-go-2",

        title: "Teen Titans GO! Figure 2",

        platform: "Android",

        category: "RPG",

        image:
            "images/teen-titans-go-2.jpg",

        description:
            "Continuação de Teen Titans GO! Figure.",

        requirements: {
            android: "Consultar",
            ram: "Consultar",
            cpu: "Consultar",
            gpu: "GPU compatível",
            storage: "Consultar"
        },

        compatibility:
            "Depende da versão.",

        language:
            "Consultar",

        gpuDownloads: {

            adreno: null,

            mali: null,

            powervr: null
        },

        downloads: [
            {
                name: "APK",
                type: "APK",
                url: "#"
            },

            {
                name: "OBB",
                type: "OBB",
                url: "#"
            }
        ]
    },


    /* =================================================
       20 - BATMAN ARKHAM ORIGINS
    ================================================= */

    {
        id: "batman-arkham-origins",

        title: "Batman: Arkham Origins",

        platform: "Android",

        category: "Ação",

        image:
            "images/batman-arkham-origins.jpg",

        description:
            "Jogo de ação baseado no universo Batman.",

        requirements: {
            android: "Consultar",
            ram: "Consultar",
            cpu: "Consultar",
            gpu: "GPU específica conforme versão",
            storage: "Consultar"
        },

        compatibility:
            "Jogo antigo para Android.",

        language:
            "Consultar",

        gpuDownloads: {

            adreno: {
                apk: "#",
                obb: "#"
            },

            mali: {
                apk: "#",
                obb: "#"
            },

            powervr: {
                apk: "#",
                obb: "#"
            }
        },

        downloads: [
            {
                name: "APK",
                type: "APK",
                url: "#"
            },

            {
                name: "OBB",
                type: "OBB",
                url: "#"
            }
        ]
    },


    /* =================================================
       21 - ADVENTURE TIME CARD WARS
    ================================================= */

    {
        id: "adventure-time-card-wars",

        title: "Adventure Time: Card Wars",

        platform: "Android",

        category: "Estratégia",

        image:
            "images/adventure-time-card-wars.jpg",

        description:
            "Jogo de cartas baseado em Adventure Time.",

        requirements: {
            android: "Consultar",
            ram: "Consultar",
            cpu: "Consultar",
            gpu: "Não requer GPU específica conhecida",
            storage: "Consultar"
        },

        compatibility:
            "Verificar a versão do jogo.",

        language:
            "Consultar",

        gpuDownloads: null,

        downloads: [
            {
                name: "APK",
                type: "APK",
                url: "#"
            },

            {
                name: "OBB",
                type: "OBB",
                url: "#"
            }
        ]
    },


    /* =================================================
       22 - THE WOLF AMONG US
    ================================================= */

    {
        id: "wolf-among-us",

        title: "The Wolf Among Us",

        platform: "Android",

        category: "Aventura",

        image:
            "images/wolf-among-us.jpg",

        description:
            "Aventura narrativa da Telltale.",

        requirements: {
            android: "Consultar",
            ram: "Consultar",
            cpu: "Consultar",
            gpu: "GPU específica conforme versão",
            storage: "Consultar"
        },

        compatibility:
            "Compatibilidade depende da versão.",

        language:
            "Consultar",

        gpuDownloads: {

            adreno: {
                apk: "#",
                obb: "#"
            },

            mali: {
                apk: "#",
                obb: "#"
            },

            powervr: {
                apk: "#",
                obb: "#"
            }
        },

        downloads: [
            {
                name: "APK",
                type: "APK",
                url: "#"
            },

            {
                name: "OBB",
                type: "OBB",
                url: "#"
            }
        ]
    },


    /* =================================================
       23 - CALL OF DUTY STRIKE TEAM
    ================================================= */

    {
        id: "call-of-duty-strike-team",

        title: "Call of Duty: Strike Team",

        platform: "Android",

        category: "Ação",

        image:
            "images/call-of-duty-strike-team.jpg",

        description:
            "Spin-off de Call of Duty para dispositivos móveis.",

        requirements: {
            android: "Consultar",
            ram: "Consultar",
            cpu: "Consultar",
            gpu: "GPU específica conforme versão",
            storage: "Consultar"
        },

        compatibility:
            "Jogo antigo; Android moderno pode apresentar incompatibilidade.",

        language:
            "Consultar",

        gpuDownloads: {

            adreno: null,

            mali: null,

            powervr: null
        },

        downloads: [
            {
                name: "APK",
                type: "APK",
                url: "#"
            },

            {
                name: "OBB",
                type: "OBB",
                url: "#"
            }
        ]
    },


    /* =================================================
       24 - FORGOTTEN MEMORIES REMASTERED
    ================================================= */

    {
        id: "forgotten-memories-remastered",

        title: "Forgotten Memories Remastered",

        platform: "Android",

        category: "Terror",

        image:
            "images/forgotten-memories.jpg",

        description:
            "Jogo de terror e sobrevivência.",

        requirements: {
            android: "Consultar",
            ram: "Consultar",
            cpu: "Consultar",
            gpu: "GPU compatível",
            storage: "Consultar"
        },

        compatibility:
            "Pode exigir hardware mais potente.",

        language:
            "Consultar",

        gpuDownloads: {

            adreno: null,

            mali: null,

            powervr: null
        },

        downloads: [
            {
                name: "Android",
                type: "APK",
                url: "#"
            }
        ]
    },


    /* =================================================
       25 - MORTAL KOMBAT
    ================================================= */

    {
        id: "mortal-kombat",

        title: "Mortal Kombat",

        subtitle:
            "Versão offline",

        platform: "Android",

        category: "Luta",

        image:
            "images/mortal-kombat.jpg",

        description:
            "Jogo de luta da série Mortal Kombat.",

        requirements: {
            android: "6+",
            ram: "2 GB",
            cpu: "Consultar",
            gpu: "GPU compatível",
            storage: "1.5 GB"
        },

        compatibility:
            "Depende da versão.",

        language:
            "Consultar",

        gpuDownloads: {

            adreno: {
                apk: "#",
                obb: "#"
            },

            mali: {
                apk: "#",
                obb: "#"
            },

            powervr: {
                apk: "#",
                obb: "#"
            }
        },

        downloads: [
            {
                name: "APK",
                type: "APK",
                url: "#"
            },

            {
                name: "OBB",
                type: "OBB",
                url: "#"
            }
        ]
    },


    /* =================================================
       26 - GTA VICE CITY DEFINITIVE EDITION
    ================================================= */

    {
        id: "gta-vice-city-definitive",

        title: "GTA Vice City: Definitive Edition",

        platform: "Android",

        category: "Ação",

        image:
            "images/gta-vice-city-definitive.jpg",

        description:
            "Versão Definitive Edition de GTA Vice City.",

        requirements: {
            android: "11+",
            ram: "6 GB recomendado",
            cpu: "Processador compatível",
            gpu: "GPU compatível",
            storage: "4 GB"
        },

        compatibility:
            "Versão graficamente exigente.",

        language:
            "Consultar",

        gpuDownloads: {

            adreno: null,

            mali: null,

            powervr: null
        },

        downloads: [
            {
                name: "Android",
                type: "Oficial",
                url: "#"
            }
        ]
    }

];


/* =====================================================
   DISPONIBILIZA OS JOGOS PARA O APP.JS
===================================================== */

window.games = games;