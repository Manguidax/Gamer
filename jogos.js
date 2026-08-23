/* =====================================================
   MANGUI D'DAX GAMER HUB - BANCO DE DADOS OFICIAL
   Suporta: Múltiplos Downloads, GPUs e Informações
===================================================== */

const games = [

    /* 01 - LIFE IS STRANGE */
{
    id: "life-is-strange",
    title: "Life is Strange",
    platform: "Android",
    category: "Aventura",
    image: "images/life-is-strange.jpg",
    description: "Aventura narrativa baseada em escolhas.",
    requirements: {
        storage: "1.2GB",
        ram: "3 GB+",
        system: "Android 9+"
    },
    info: "Compatibilidade depende do dispositivo. CPU: Octa-Core. GPU compatível. Idioma: Português conforme a versão.",
    downloads: [
        { name: "Android APK", url: "https://direct-link.net/1275086/AYmeqO8ncujq" }
    ]
},

/* 02 - THE WALKING DEAD SEASON TWO (LEGENDADO) */
{
    id: "walking-dead-season-two-legendado",
    title: "The Walking Dead: Season Two",
    subtitle: "Versão antiga • Legendado em Português",
    platform: "Android",
    category: "Aventura",
    image: "images/walking-dead-season-two.jpg",
    description: "Segunda temporada da aventura narrativa de The Walking Dead.",
    requirements: {
        storage: "780MB",
        ram: "1 GB+",
        system: "Android abaixo de 14"
    },
    info: "Destinada principalmente para versões antigas do Android. CPU: Dual-Core 1.2 GHz. GPU compatível. Idioma: Português legendado.",
    downloads: [
        { name: "LEGENDAS PT-BR v1.35", url: "https://drive.google.com/file/d/19XL984CZ3wjwtKzyvAIXjhoDD1uRKxLj/view?usp=drivesdk" },
        { name: "GPU ADRENO APK", url: "https://link-center.net/1275086/pSTUoEPfS8BL" },
        { name: "GPU ADRENO OBB", url: "https://link-hub.net/1275086/9hwAXCxSAsrM" },
        { name: "GPU MALI APK", url: "https://link-center.net/1275086/B91x18AuRNLK" },
        { name: "GPU MALI OBB", url: "https://direct-link.net/1275086/JkSw87z3B9fT" },
        { name: "GPU POWERVR APK", url: "https://link-center.net/1275086/yjJcHd6hRMed" },
        { name: "GPU POWERVR OBB", url: "https://link-hub.net/1275086/2L321AKRPL4x" },
        { name: "GPU TEGRA APK", url: "https://link-hub.net/1275086/fkBmF42VauSw" },
        { name: "GPU TEGRA OBB", url: "https://link-target.net/1275086/8upz4R1Bzq6K" }
    ]
},

/* 03 - THE WALKING DEAD SEASON TWO (ATUALIZADO) */
{
    id: "walking-dead-season-two-atualizado",
    title: "The Walking Dead: Season Two Atualizado",
    subtitle: "Versão atualizada",
    platform: "Android",
    category: "Aventura",
    image: "images/walking-dead-season-two-updated.jpg",
    description: "Versão atualizada da segunda temporada.",
    requirements: {
        storage: "1GB",
        ram: "1 GB+",
        system: "Android 14 / 15 / 16"
    },
    info: "Compatibilidade depende do aparelho e da versão. CPU: Dual-Core ou superior. GPU compatível conforme versão. Sem legendas em português.",
    downloads: [
        { name: "GPU MALI APK", url: "https://direct-link.net/1275086/xjjrlU8UPVrn" },
        { name: "GPU ADRENO APK", url: "https://link-center.net/1275086/j1vgefEAPuZC" }
    ]
},

/* =================================================
   04 - THE AMAZING SPIDER-MAN 2
================================================= */

{
    id: "amazing-spiderman-2",

    title: "The Amazing Spider-Man 2",

    platform: "Android",

    category: "Acao",

    image:
        "images/amazing-spiderman-2.jpg",

    description:
        "Jogo de acao baseado no universo do Spider-Man.",

    requirements: {
        android: "6+",
        ram: "1GB",
        cpu: "compativel",
        gpu: "GPU especifica conforme versao",
        storage: "680MB"
    },

    info:
        "Compatibilidade pode variar conforme a versao. Idioma: Portugues, ingles, espanhol e outros.",

    downloads: [
        {
            name: "PASSWORD/SENHA",
            type: "HardTECH",
            url: "#"
        },

        {
            name: "APK+OBB",
            type: "COMPACTO",
            url: "https://direct-link.net/1275086/nfTV0yj52z8q"
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
        gpu: "GPU compativel",
        storage: "1.2GB"
    },

    info:
        "Jogo relativamente exigente para Android. Idioma: Portugues, Ingles e Espanhol.",

    downloads: [
        {
            name: "Android",
            type: "APK",
            url: "https://link-hub.net/1275086/FdtNlzNJhfZh"
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
        "Corridas, carros e perseguicoes policiais.",

    requirements: {
        android: "5+",
        ram: "1GB",
        cpu: "compativel",
        gpu: "GPU compativel",
        storage: "690MB"
    },

    info:
        "Compatibilidade varia conforme dispositivo e versao. Idioma: Portugues, Ingles e Espanhol.",

    downloads: [
        {
            name: "APK",
            type: "19MB",
            url: "https://direct-link.net/1275086/Z0BKknI8Dq5N"
        },

        {
            name: "OBB",
            type: "668MB",
            url: "https://direct-link.net/1275086/1XteZQwZtY3P"
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

    category: "Acao",

    image:
        "images/red-dead-redemption.jpg",

    description:
        "Aventura de mundo aberto no universo de Red Dead Redemption.",

    requirements: {
        android: "Consultar versao oficial",
        ram: "Consultar",
        cpu: "Alto desempenho recomendado",
        gpu: "GPU de alto desempenho",
        storage: "Consultar"
    },

    info:
        "Requer hardware compativel. Idioma: Portugues, Espanhol e Ingles.",

    downloads: [
        {
            name: "Android",
            type: "Oficial",
            url: "#"
        }
    ]
},
/* 08 - GOD OF WAR GHOST OF SPARTA */
{
    id: "god-of-war-ghost-of-sparta",
    title: "God of War: Ghost of Sparta",
    subtitle: "Dublado em portugues",
    platform: "PSP",
    category: "Acao",
    image: "images/god-of-war-ghost-of-sparta.jpg",
    description: "Aventura de acao originalmente lancada para PSP.",
    requirements: {
        emulator: "PPSSPP",
        android: "Depende do emulador",
        ram: "Depende do dispositivo",
        cpu: "Depende do dispositivo",
        gpu: "Compativel com PPSSPP",
        storage: "1.5GB"
    },
    info: "Pode ser executado atraves de emulador PSP. Idioma: Portugues dublado.",
    downloads: [
        {
            name: "PPSSPP",
            type: "APK",
            url: "https://play.google.com/store/apps/details?id=org.ppsspp.ppsspp"
        },
        {
            name: "DADOS",
            type: "ISO / CSO",
            url: "https://link-target.net/1275086/god-of-war-ghost-dublado"
        }
    ]
},

/* 09 - NBA 2K20 */
{
    id: "nba-2k20",
    title: "NBA 2K20 ATUALIZADO",
    platform: "Android",
    category: "Esportes",
    version: "99.0.5",
    image: "images/nba-2k20.jpg",
    description: "Jogo de basquete da serie NBA 2K.",
    requirements: {
        android: "7+",
        ram: "3GB",
        cpu: "Alto desempenho",
        gpu: "GPU compativel",
        storage: "2.6GB"
    },
    info: "Depende da versao e do dispositivo. Idioma: Portugues, Espanhol e Ingles.",
    downloads: [
        {
            name: "Android",
            type: "APK",
            url: "https://direct-link.net/1275086/WTY060KTR7G3"
        }
    ]
},

/* 10 - MINECRAFT STORY MODE */
{
    id: "minecraft-story-mode",
    title: "Minecraft: Story Mode",
    platform: "Android",
    category: "Aventura",
    image: "images/minecraft-story-mode.jpg",
    description: "Aventura narrativa no universo de Minecraft.",
    requirements: {
        android: "Versao antiga",
        ram: "2GB",
        cpu: "Compativel",
        gpu: "GPU especifica conforme versao",
        storage: "4GB"
    },
    info: "Pode apresentar incompatibilidade em Android recente. Idioma: Ingles.",
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

/* 11 - GTA SAN ANDREAS DEFINITIVE */
{
    id: "gta-san-andreas-definitive",
    title: "GTA San Andreas: Definitive Edition",
    platform: "Android",
    category: "Acao",
    image: "images/gta-san-andreas-definitive.jpg",
    description: "Versao Definitive Edition de GTA San Andreas.",
    requirements: {
        android: "11+",
        ram: "6GB recomendado",
        cpu: "Alto desempenho",
        gpu: "GPU compativel",
        storage: "7GB"
    },
    info: "Versao mais exigente graficamente. Idioma: Portugues, Espanhol e Ingles.",
    downloads: [
        {
            name: "Android",
            type: "Oficial",
            url: "https://link-hub.net/1275086/CBPOx88I5nmo"
        }
    ]
},

/* 12 - BATMAN THE DARK KNIGHT RISES */
{
    id: "batman-dark-knight-rises",
    title: "Batman: The Dark Knight Rises",
    platform: "Android",
    category: "Acao",
    image: "images/batman-dark-knight-rises.jpg",
    description: "Jogo de acao baseado em The Dark Knight Rises.",
    requirements: {
        android: "6+",
        ram: "2GB",
        cpu: "Compativel",
        gpu: "GPU especifica conforme versao",
        storage: "900MB"
    },
    info: "Jogo antigo para Android. Idioma: Portugues, Espanhol e Ingles.",
    downloads: [
        {
            name: "APK",
            type: "APK",
            url: "https://link-center.net/1275086/XKbz65qUDf19"
        },
        {
            name: "DADOS",
            type: "Data",
            url: "https://link-center.net/1275086/LUGvcFvWhdlC"
        }
    ]
},

/* 13 - NFS MOST WANTED 2005 PC */
{
    id: "nfs-most-wanted-2005-pc",
    title: "Need for Speed: Most Wanted (2005)",
    subtitle: "PC",
    platform: "PC",
    category: "Corrida",
    image: "images/nfs-most-wanted-2005.jpg",
    description: "Classico Need for Speed: Most Wanted lancado em 2005.",
    requirements: {
        os: "Windows",
        ram: "2 GB+",
        cpu: "Consultar",
        gpu: "DirectX compativel",
        storage: "3GB"
    },
    info: "Compatibilidade depende da configuracao do PC. Idioma: Portugues, Espanhol e Ingles.",
    downloads: [
        {
            name: "WINLATOR",
            type: "EMULADOR DE PC",
            url: "https://link-center.net/1275086/yUfsy7RP9AJX"
        },
        {
            name: "PC GAME",
            type: "Pre-Installed",
            url: "https://link-target.net/1275086/QljnzoP6C1B6"
        }
    ]
},

/* 14 - THE WALKING DEAD SEASON ONE */
{
    id: "walking-dead-season-one",
    title: "The Walking Dead: Season One",
    subtitle: "Versao atualizada",
    platform: "Android",
    category: "Aventura",
    image: "images/walking-dead-season-one.jpg",
    description: "Primeira temporada da serie narrativa The Walking Dead.",
    requirements: {
        android: "8+",
        ram: "1 GB+",
        cpu: "Dual-Core",
        gpu: "GPU compativel",
        storage: "1.2GB"
    },
    info: "A compatibilidade depende da versao. Sem legendas em portugues.",
    downloads: [
        {
            name: "GPU ADRENO",
            type: "APK",
            url: "https://link-target.net/1275086/x1u1oe3NTNsG"
        },
        {
            name: "GPU MALI",
            type: "APK",
            url: "https://link-target.net/1275086/1XVc9jcHfbI3"
        }
    ]
},
/* 15 - THE WALKING DEAD SEASON THREE */
{
    id: "walking-dead-season-three",

    title: "The Walking Dead: Season Three",

    subtitle: "A New Frontier",

    platform: "Android",

    category: "Aventura",

    image: "images/walking-dead-season-three.jpg",

    description: "Terceira temporada da serie The Walking Dead.",

    requirements: {
        android: "8+",
        ram: "2GB",
        cpu: "compativel",
        gpu: "GPU compativel",
        storage: "900MB"
    },

    info: "Compatibilidade depende da versao. Idioma: Portugues legendado.",

    downloads: [
        {
            name: "TODAS GPUS",
            type: "APK",
            url: "https://link-target.net/1275086/0EiNF4U8LzGL"
        }
    ]
},


/* 16 - THE WALKING DEAD MICHONNE */
{
    id: "walking-dead-michonne",

    title: "The Walking Dead: Michonne",

    subtitle: "Versao atualizada",

    platform: "Android",

    category: "Aventura",

    image: "images/walking-dead-michonne.jpg",

    description: "Minisserie narrativa protagonizada por Michonne.",

    requirements: {
        android: "8+",
        ram: "2GB",
        cpu: "compativel",
        gpu: "Adreno e Mali",
        storage: "1GB"
    },

    info: "Versao atualizada pode funcionar em Android recente. Sem legendas em Portugues.",

    downloads: [
        {
            name: "GPU ADRENO",
            type: "APK",
            url: "https://direct-link.net/1275086/KRazvjYAQduy"
        },

        {
            name: "GPU MALI",
            type: "APK",
            url: "https://link-hub.net/1275086/SLCQj60ZXUC7"
        }
    ]
},


/* 17 - MODERN COMBAT 4 */
{
    id: "modern-combat-4",

    title: "Modern Combat 4",

    platform: "Android",

    category: "Acao",

    image: "images/modern-combat-4.jpg",

    description: "Jogo de tiro em primeira pessoa.",

    requirements: {
        android: "7+",
        ram: "2GB",
        cpu: "Compativel",
        gpu: "GPU compativel",
        storage: "1.4GB"
    },

    info: "Jogo antigo; compatibilidade pode variar. Idioma: Portugues, Espanhol e Ingles.",

    downloads: [
        {
            name: "Adaptado para Rodar Ate Em Android 15",
            type: "Informacao",
            url: "#"
        },

        {
            name: "APK+OBB",
            type: "ZIP",
            url: "https://link-hub.net/1275086/cRHTFexGfSiG"
        }
    ]
},
/* 18 - TEEN TITANS GO */
{
    id: "teen-titans-go",
    title: "Teen Titans GO! Figure",
    platform: "Android",
    category: "RPG",
    image: "images/teen-titans-go.jpg",
    description: "RPG baseado em Teen Titans GO!.",
    requirements: {
        android: "5+",
        ram: "1GB",
        cpu: "compativel",
        gpu: "GPU compativel",
        storage: "300MB"
    },
    info: "Depende da versao. Idioma: Espanhol, Portugues e Ingles.",
    downloads: [
        { name: "APK", url: "https://link-target.net/1275086/oTMMdQhsdiic" },
        { name: "OBB", url: "https://link-hub.net/1275086/SUkACnHyODU1" }
    ]
},

/* 19 - TEEN TITANS GO 2 */
{
    id: "teen-titans-go-2",
    title: "Teen Titans GO! Figure 2",
    platform: "Android",
    category: "RPG",
    image: "images/teen-titans-go-2.jpg",
    description: "Continuacao de Teen Titans GO! Figure.",
    requirements: {
        android: "5+",
        ram: "1GB",
        cpu: "compativel",
        gpu: "GPU compativel",
        storage: "400MB"
    },
    info: "Depende da versao. Idioma: Espanhol, Portugues e Ingles.",
    downloads: [
        { name: "APK", url: "https://link-target.net/1275086/pjOZU8nQP4KJ" },
        { name: "OBB", url: "https://link-center.net/1275086/yeHBZG9HT0iP" }
    ]
},

/* 20 - BATMAN ARKHAM ORIGINS */
{
    id: "batman-arkham-origins",
    title: "Batman: Arkham Origins",
    platform: "Android",
    category: "Acao",
    image: "images/batman-arkham-origins.jpg",
    description: "Jogo de acao baseado no universo Batman.",
    requirements: {
        android: "6+",
        ram: "2GB",
        cpu: "compativel",
        gpu: "GPU especifica conforme versao",
        storage: "1GB"
    },
    info: "Jogo antigo para Android.",
    downloads: [
        { name: "GPU ADRENO APK", url: "https://link-center.net/1275086/XaQ3oOOXTg2b" },
        { name: "GPU ADRENO OBB", url: "https://link-hub.net/1275086/oCJyEP4Ttjkm" },
        { name: "GPU MALI APK", url: "https://link-target.net/1275086/G8GvdODWSOcs" },
        { name: "GPU MALI OBB", url: "https://direct-link.net/1275086/dVEMiMcPfcGB" },
        { name: "GPU POWERVR APK", url: "https://direct-link.net/1275086/Zfg4fAPjQYgu" },
        { name: "GPU POWERVR OBB", url: "https://link-hub.net/1275086/VzudWzsa53Zj" }
    ]
},

/* 21 - ADVENTURE TIME CARD WARS */
{
    id: "adventure-time-card-wars",
    title: "Adventure Time: Card Wars",
    platform: "Android",
    category: "Estrategia",
    image: "images/adventure-time-card-wars.jpg",
    description: "Jogo de cartas baseado em Adventure Time.",
    requirements: {
        android: "5+",
        ram: "1GB",
        cpu: "compativel",
        gpu: "Nao requer GPU especifica",
        storage: "400MB"
    },
    info: "Verificar a versao do jogo.",
    downloads: [
        { name: "APK", url: "https://direct-link.net/1275086/EbvbNe6i7QrG" },
        { name: "OBB", url: "https://link-center.net/1275086/cOkTcZJMLFPA" }
    ]
},

/* 22 - THE WOLF AMONG US */
{
    id: "wolf-among-us",
    title: "The Wolf Among Us",
    platform: "Android",
    category: "Aventura",
    image: "images/wolf-among-us.jpg",
    description: "Aventura narrativa da Telltale.",
    requirements: {
        android: "6+",
        ram: "3GB",
        cpu: "compativel",
        gpu: "GPU especifica conforme versao",
        storage: "4GB"
    },
    info: "Compatibilidade depende da versao.",
    downloads: [
              { name: "APK", url: "https://link-target.net/1275086/NFwzpkW2FCfN" },
        { name: "OBB", url: "https://direct-link.net/1275086/SoaJcmxKSV65" }
    ]
},

/* 23 - CALL OF DUTY STRIKE TEAM */
{
    id: "call-of-duty-strike-team",
    title: "Call of Duty: Strike Team",
    platform: "Android",
    category: "Acao",
    image: "images/call-of-duty-strike-team.jpg",
    description: "Spin-off de Call of Duty para dispositivos moveis.",
    requirements: {
        android: "6+",
        ram: "2GB",
        cpu: "compativel",
        gpu: "GPU especifica conforme versao",
        storage: "1.5GB"
    },
    info: "Jogo antigo; Android moderno pode apresentar incompatibilidade.",
    downloads: [
        { name: "APK", url: "https://link-hub.net/1275086/67B21PqaslTG" },
        { name: "OBB", url: "https://link-hub.net/1275086/wODx6jFKIfMD" }
    ]
},

/* 24 - FORGOTTEN MEMORIES REMASTERED */
{
    id: "forgotten-memories-remastered",
    title: "Forgotten Memories Remastered",
    platform: "Android",
    category: "Terror",
    image: "images/forgotten-memories.jpg",
    description: "Jogo de terror e sobrevivencia.",
    requirements: {
        android: "9+",
        ram: "3GB",
        cpu: "Alto desempenho",
        gpu: "GPU compativel",
        storage: "2GB"
    },
    info: "Pode exigir hardware mais potente.",
    downloads: [
        { name: "Android APK", url: "https://direct-link.net/1275086/L7cAhsC4ZDJt" }
    ]
},
/* =================================================
   25 - MORTAL KOMBAT
================================================= */

{
    id: "mortal-kombat",

    title: "Mortal Kombat",

    subtitle:
        "Versao offline",

    platform: "Android",

    category: "Luta",

    image:
        "images/mortal-kombat.jpg",

    description:
        "Jogo de luta da serie Mortal Kombat.",

    requirements: {
        android: "6+",
        ram: "2 GB",
        cpu: "Consultar",
        gpu: "GPU compativel",
        storage: "1.5 GB"
    },

    compatibility:
        "Depende da versao.",

    language:
        "PT EN ES",

    downloads: [
        {
            name: "GPU POWERVR",
            type: "APK",
            url: "https://direct-link.net/1275086/Fy83ELuCMldy"
        },

        {
            name: "GPU POWERVR",
            type: "OBB",
            url: "https://link-center.net/1275086/Eu4ly8yDKFvf"
        },

        {
            name: "GPU MALI",
            type: "APK",
            url: "https://link-center.net/1275086/bdSDha1cmZbe"
        },

        {
            name: "Dados",
            type: "OBB",
            url: "https://link-hub.net/1275086/uDZcJzOGVKln"
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

    category: "Acao",

    image:
        "images/gta-vice-city-definitive.jpg",

    description:
        "Versao Definitive Edition de GTA Vice City.",

    requirements: {
        android: "11+",
        ram: "6 GB recomendado",
        cpu: "Processador compativel",
        gpu: "GPU compativel",
        storage: "4 GB"
    },

    compatibility:
        "Versao graficamente exigente.",

    language:
        "PT EN ES",

    gpuDownloads: {

        adreno: null,

        mali: null,

        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Oficial",
            url: "https://direct-link.net/1275086/yAZOIMC4IwYd"
        }
    ]
},


/* =================================================
   27 - WALL OF INSANITY 2
================================================= */

{
    id: "wall-of-insanity-2",

    title: "Wall of Insanity 2",

    platform: "Android",

    category: "Acao",

    image:
        "images/walk-of-insanity-2.jpg",

    description:
        "Jogo de acao para Android com elementos de combate e aventura.",

    requirements: {
        android: "8.0+",
        ram: "4 GB recomendado",
        cpu: "Processador octa-core compativel",
        gpu: "Adreno / Mali / PowerVR compativel",
        storage: "2 GB"
    },

    compatibility:
        "A compatibilidade depende da versao do jogo e do dispositivo Android.",

    language:
        "PT EN ES",

    gpuDownloads: {

        adreno: null,

        mali: null,

        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Oficial",
            url: "https://link-target.net/1275086/VJIbtd05hT2U"
        }
    ]
},


/* =================================================
   28 - THE AMAZING SPIDER-MAN
================================================= */

{
    id: "the-amazing-spider-man",

    title: "The Amazing Spider-Man",

    platform: "Android",

    category: "Acao",

    image:
        "images/the-amazing-spider-man.jpg",

    description:
        "Jogo de acao e aventura baseado no universo de Spider-Man.",

    requirements: {
        android: "2.2+",
        ram: "2 GB recomendado",
        cpu: "Processador dual-core ou superior",
        gpu: "Adreno / Mali / PowerVR compativel",
        storage: "2 GB"
    },

    compatibility:
        "E um jogo antigo para Android e pode apresentar incompatibilidades em versoes modernas do sistema.",

    language:
        "PT EN ES",

    downloads: [
        {
            name: "Android",
            type: "Oficial",
            url: "https://link-center.net/1275086/nWe4twnrsTw5"
        }
    ]
},


/* =================================================
   29 - NEED FOR SPEED MOST WANTED LIMITED EDITION
================================================= */

{
    id: "need-for-speed-most-wanted-limited-edition-pc",

    title: "Need for Speed: Most Wanted Limited Edition",

    platform: "PC",

    category: "Corrida",

    image:
        "images/nfs-most-wanted-limited-edition.jpg",

    description:
        "Versao Limited Edition de Need for Speed: Most Wanted para PC.",

    requirements: {
        android: "N/A",
        ram: "2 GB minimo / 4 GB recomendado",
        cpu: "Dual-core 2 GHz minimo / Quad-core recomendado",
        gpu: "GPU DirectX 10/11 compativel",
        storage: "12GB"
    },

    compatibility:
        "Compativel com PCs que atendam aos requisitos minimos do jogo.",

    language:
        "PT EN ES",

    gpuDownloads: {

        adreno: null,

        mali: null,

        powervr: null
    },

    downloads: [
        {
            name: "WINLATOR",
            type: "EMULADOR DE PC",
            url: "https://link-center.net/1275086/yUfsy7RP9AJX"
        },

        {
            name: "NFS MW 2012",
            type: "PC",
            url: "https://link-center.net/1275086/jqGvF5zKe6Ls"
        }
    ]
},
/* =================================================
   30 - CARS: FAST AS LIGHTNING
================================================= */

{
    id: "cars-fast-as-lightning",

    title: "Cars: Fast as Lightning",

    platform: "Android",

    category: "Corrida",

    image:
        "images/cars-fast-as-lightning.jpg",

    description:
        "Jogo de corrida baseado no universo Disney Pixar Cars, desenvolvido pela Gameloft.",

    requirements: {
        android: "4.0+",
        ram: "1 GB recomendado",
        cpu: "Processador compativel",
        gpu: "Adreno / Mali / PowerVR compativel",
        storage: "400MB"
    },

    compatibility:
        "Jogo descontinuado e removido da Google Play; versoes antigas podem apresentar problemas em dispositivos Android atuais.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Arquivo do jogo",
            url: "https://link-target.net/1275086/rnQ2ApPKRi7H"
        }
    ]
},


/* =================================================
   31 - SPONGEBOB SQUAREPANTS: THE COSMIC SHAKE
================================================= */

{
    id: "spongebob-the-cosmic-shake",

    title: "SpongeBob SquarePants: The Cosmic Shake",

    platform: "Android",

    category: "Aventura",

    image:
        "images/spongebob-the-cosmic-shake.jpg",

    description:
        "Jogo de aventura e plataforma baseado no universo de SpongeBob SquarePants.",

    requirements: {
        android: "10+",
        ram: "4 GB recomendado",
        cpu: "Processador octa-core compativel",
        gpu: "Adreno / Mali compativel",
        storage: "8 GB"
    },

    compatibility:
        "Requer um dispositivo Android compativel com os requisitos graficos do jogo.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Oficial",
            url: "https://link-center.net/1275086/fBJpQRwUHQcH"
        }
    ]
},


/* =================================================
   32 - ASSASSIN'S CREED: BLOODLINES
================================================= */

{
    id: "assassins-creed-bloodlines",

    title: "Assassin's Creed: Bloodlines",

    platform: "PSP",

    category: "Acao",

    image:
        "images/assassins-creed-bloodlines.jpg",

    description:
        "Jogo de acao e aventura exclusivo do PSP, protagonizado por Altair apos os acontecimentos do primeiro Assassin's Creed.",

    requirements: {
        android: "PSP",
        ram: "2 GB recomendado para emulacao",
        cpu: "Processador compativel com emulacao de PSP",
        gpu: "GPU compativel com emulacao de PSP",
        storage: "600MB"
    },

    compatibility:
        "Para jogar em Android, e necessario utilizar um emulador compativel com PSP.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "PSP",
            type: "Jogo",
            url: "https://link-target.net/1275086/assassins-creed-bloodlin"
        }
    ]
},
/* =================================================
   33 - GTA SAN ANDREAS DEFINITIVE EDITION
================================================= */

{
    id: "gta-san-andreas-definitive",

    title: "GTA San Andreas: Definitive Edition",

    platform: "PC",

    category: "Acao",

    image:
        "images/gta-san-andreas-definitive.jpg",

    description:
        "Versao Definitive Edition de Grand Theft Auto: San Andreas para PC.",

    requirements: {
        android: "N/A",
        ram: "8 GB",
        cpu: "Intel Core i5-6600K / AMD FX-6300",
        gpu: "GTX 760 / Radeon R9 280",
        storage: "45 GB"
    },

    compatibility:
        "Requer PC compativel com os requisitos graficos da Definitive Edition.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "PC",
            type: "Oficial",
            url: "https://link-target.net/1275086/KAowacMWL64z"
        }
    ]
},


/* =================================================
   34 - RESIDENT EVIL 5
================================================= */

{
    id: "resident-evil-5",

    title: "Resident Evil 5",

    platform: "PC",

    category: "Acao",

    image:
        "images/resident-evil-5.jpg",

    description:
        "Jogo de acao e sobrevivencia da serie Resident Evil.",

    requirements: {
        android: "N/A",
        ram: "4 GB minimo",
        cpu: "Intel Pentium D / AMD Athlon 64 X2",
        gpu: "GeForce 6800 / Radeon HD 2400",
        storage: "15 GB"
    },

    compatibility:
        "Pode ser executado em PCs que atendam aos requisitos minimos do jogo.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "PC",
            type: "Oficial",
            url: "https://link-target.net/1275086/KAowacMWL64z"
        }
    ]
},


/* =================================================
   35 - DAYS GONE
================================================= */

{
    id: "days-gone",

    title: "Days Gone",

    platform: "PC",

    category: "Acao",

    image:
        "images/days-gone.jpg",

    description:
        "Jogo de acao e sobrevivencia em mundo aberto ambientado em um cenario pos-apocaliptico.",

    requirements: {
        android: "N/A",
        ram: "8 GB minimo",
        cpu: "Intel Core i5-2500K / AMD FX-6300",
        gpu: "GTX 780 / Radeon R9 290",
        storage: "70 GB"
    },

    compatibility:
        "E um jogo exigente e requer um PC com hardware compativel.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "PC",
            type: "Oficial",
            url: "https://link-target.net/1275086/KAowacMWL64z"
        }
    ]
},


/* =================================================
   36 - FIFA 16
================================================= */

{
    id: "fifa-16",

    title: "FIFA 16",

    platform: "PC",

    category: "Esportes",

    image:
        "images/fifa-16.jpg",

    description:
        "Jogo de futebol da serie FIFA com diversos modos de jogo e equipes licenciadas.",

    requirements: {
        android: "N/A",
        ram: "4 GB",
        cpu: "Intel Core 2 Duo E8200",
        gpu: "Radeon HD 6870 / GTX 650",
        storage: "15 GB"
    },

    compatibility:
        "Compativel com PCs que atendam aos requisitos minimos da versao para PC.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "PC",
            type: "Oficial",
            url: "https://link-target.net/1275086/JI4vcuzr4LbJ"
        }
    ]
},
/* =================================================
   37 - NEED FOR SPEED MOST WANTED 2005
================================================= */

{
    id: "need-for-speed-most-wanted-2005",

    title: "Need for Speed: Most Wanted (2005)",

    platform: "GameCube",

    category: "Corrida",

    image:
        "images/nfs-most-wanted-2005.jpg",

    description:
        "Classico jogo de corrida da EA com perseguicoes policiais e uma campanha baseada na Blacklist.",

    requirements: {
        android: "N/A",
        ram: "4 GB recomendado para emulacao",
        cpu: "Processador compativel com emulacao de GameCube",
        gpu: "GPU compativel com emulacao de GameCube",
        storage: "2 GB"
    },

    compatibility:
        "Para jogar em Android, requer um emulador compativel com GameCube.",

    language:
        "PT EN ES",

    gpuDownloads: {

        adreno: null,

        mali: null,

        powervr: null
    },

    downloads: [
        {
            name: "GameCube",
            type: "Jogo",
            url: "https://sites.google.com/view/manguigamer/jogos/need-for-speedmost-wanted-2005-nintendo-gamecube"
        }
    ]
},


/* =================================================
   38 - THE WALKING DEAD
================================================= */

{
    id: "the-walking-dead-pc",

    title: "The Walking Dead",

    platform: "PC",

    category: "Aventura",

    image:
        "images/the-walking-dead.jpg",

    description:
        "Aventura narrativa da Telltale Games ambientada no universo de The Walking Dead.",

    requirements: {
        android: "N/A",
        ram: "3 GB",
        cpu: "Dual-core 2.0 GHz",
        gpu: "GPU compativel com DirectX 9",
        storage: "3 GB"
    },

    compatibility:
        "Requer PC compativel com a versao do jogo.",

    language:
        "PT EN ES",

    gpuDownloads: {

        adreno: null,

        mali: null,

        powervr: null
    },

    downloads: [
        {
            name: "PC",
            type: "Oficial",
            url: "https://direct-link.net/1275086/IpEXrW24lW9h"
        }
    ]
},


/* =================================================
   39 - INSIDE
================================================= */

{
    id: "inside",

    title: "INSIDE",

    platform: "PC",

    category: "Aventura",

    image:
        "images/inside.jpg",

    description:
        "Jogo de aventura e plataforma com atmosfera sombria e narrativa misteriosa.",

    requirements: {
        android: "N/A",
        ram: "4 GB",
        cpu: "Intel Core 2 Duo E8400",
        gpu: "GeForce GT 640 / Radeon HD 6750",
        storage: "1GB"
    },

    compatibility:
        "Compativel com PCs que atendam aos requisitos minimos do jogo.",

    language:
        "PT EN ES",

    gpuDownloads: {

        adreno: null,

        mali: null,

        powervr: null
    },

    downloads: [
        {
            name: "INSIDE APK",
            type: "Versao Recompilado Do Nintendo Switch",
            url: "https://linkvertise.com/access/1275086/lYzFvMBynaEW"
        },
        {
            name: "INSIDE PC PRE-INSTALLED",
            type: "VERSAO DE PC",
            url: ""
        }
    ]
},
/* =================================================
   40 - BULLY ANNIVERSARY EDITION
================================================= */

{
    id: "bully-anniversary-edition",

    title: "Bully: Anniversary Edition",

    platform: "Android",

    category: "Acao",

    image:
        "images/bully-anniversary-edition.jpg",

    description:
        "Versao mobile de Bully com a campanha original e conteudos adicionais.",

    requirements: {
        android: "9.0+",
        ram: "4 GB recomendado",
        cpu: "Processador octa-core compativel",
        gpu: "Adreno / Mali / PowerVR compativel",
        storage: "3 GB"
    },

    compatibility:
        "Compatibilidade pode variar conforme a versao do Android e o dispositivo.",

    language:
        "PT EN ES",

    gpuDownloads: {

        adreno: null,

        mali: null,

        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Oficial",
            url: "https://link-target.net/1275086/ycYdzTkTGjFi"
        }
    ]
},


/* =================================================
   41 - NBA 2K19
================================================= */

{
    id: "nba-2k19",

    title: "NBA 2K19",

    platform: "Android",

    category: "Esportes",

    image:
        "images/nba-2k19.jpg",

    description:
        "Jogo de basquete da serie NBA 2K para dispositivos Android.",

    requirements: {
        android: "4.3+",
        ram: "3 GB recomendado",
        cpu: "Processador quad-core ou superior",
        gpu: "Adreno / Mali compativel",
        storage: "2 GB"
    },

    compatibility:
        "Pode apresentar incompatibilidade em versoes modernas do Android.",

    language:
        "PT EN ES",

    gpuDownloads: {

        adreno: null,

        mali: null,

        powervr: null
    },

    downloads: [
        {
            name: "APK",
            type: "APK",
            url: "https://link-center.net/1275086/iTh6hKgQP7aW"
        },

        {
            name: "Dados",
            type: "OBB",
            url: "https://link-hub.net/1275086/C0ncHWbYgPWC"
        }
    ]
},


/* =================================================
   42 - COPA TOON GOLEADORES
================================================= */

{
    id: "copa-toon-goleadores",

    title: "Copa Toon Goleadores",

    platform: "Android",

    category: "Esportes",

    image:
        "images/copa-toon-goleadores.jpg",

    description:
        "Jogo de futebol casual com personagens do universo Toon.",

    requirements: {
        android: "4.0+",
        ram: "1 GB recomendado",
        cpu: "Processador dual-core ou superior",
        gpu: "Adreno / Mali / PowerVR compativel",
        storage: "500 MB"
    },

    compatibility:
        "Jogo leve, mas a compatibilidade pode variar em versoes recentes do Android.",

    language:
        "PT BR PT EN ES",

    gpuDownloads: {

        adreno: null,

        mali: null,

        powervr: null
    },

    downloads: [
        {
            name: "APK",
            type: "APK",
            url: "https://link-center.net/1275086/cWc3xgG5IT0F"
        },

        {
            name: "Dados",
            type: "OBB",
            url: "https://link-center.net/1275086/CtDhOJCa1Yho"
        }
    ]
},
/* =================================================
   43 - MORTAL KOMBAT: DEADLY ALLIANCE
================================================= */

{
    id: "mortal-kombat-deadly-alliance",

    title: "Mortal Kombat: Deadly Alliance",

    platform: "GameCube",

    category: "Luta",

    image:
        "images/mortal-kombat-deadly-alliance.jpg",

    description:
        "Jogo de luta da serie Mortal Kombat lancado para Nintendo GameCube.",

    requirements: {
        android: "7+",
        ram: "4 GB recomendado para emulacao",
        cpu: "Processador compativel com emulacao de GameCube",
        gpu: "GPU compativel com emulacao de GameCube",
        storage: "1.5 GB"
    },

    compatibility:
        "Para jogar no Android, requer um emulador compativel com GameCube.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "GameCube",
            type: "Jogo",
            url: "https://link-hub.net/1275086/Xxikd6jbZxvH"
        }
    ]
},


/* =================================================
   44 - GTA III DEFINITIVE EDITION
================================================= */

{
    id: "gta-iii-definitive",

    title: "GTA III: Definitive Edition",

    platform: "Android",

    category: "Acao",

    image:
        "images/gta-iii-definitive.jpg",

    description:
        "Versao Definitive Edition de Grand Theft Auto III para dispositivos Android.",

    requirements: {
        android: "11+",
        ram: "4 GB recomendado",
        cpu: "Processador octa-core compativel",
        gpu: "Adreno / Mali / PowerVR compativel",
        storage: "5 GB"
    },

    compatibility:
        "Versao graficamente exigente; requer dispositivo Android compativel.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Oficial",
            url: "https://direct-link.net/1275086/ggKIZEpTXjml"
        }
    ]
},


/* =================================================
   45 - COVER FIRE
================================================= */

{
    id: "cover-fire",

    title: "Cover Fire",

    platform: "Android",

    category: "Acao",

    image:
        "images/cover-fire.jpg",

    description:
        "Jogo de tiro em terceira pessoa com campanhas e diferentes personagens.",

    requirements: {
        android: "6.0+",
        ram: "2 GB recomendado",
        cpu: "Processador quad-core ou superior",
        gpu: "Adreno / Mali / PowerVR compativel",
        storage: "600MB"
    },

    compatibility:
        "Jogo otimizado para dispositivos Android compativeis.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Oficial",
            url: "https://link-target.net/1275086/HT9GYLSghDQ9"
        }
    ]
},
/* =================================================
   46 - DRIFT RIDE 2
================================================= */

{
    id: "drift-ride-2",

    title: "Drift Ride 2",

    platform: "Android",

    category: "Corrida",

    image:
        "images/drift-ride-2.jpg",

    description:
        "Jogo de corrida e drifting para dispositivos Android.",

    requirements: {
        android: "5.0+",
        ram: "2 GB recomendado",
        cpu: "Processador quad-core ou superior",
        gpu: "Adreno / Mali / PowerVR compativel",
        storage: "1 GB"
    },

    compatibility:
        "Compatibilidade pode variar conforme o dispositivo e a versao do Android.",

    language:
        "PT EN ES",

    gpuDownloads: {

        adreno: null,

        mali: null,

        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Oficial",
            url: "https://play.google.com/store/apps/details?id=com.underdriftgames.driftride2"
        }
    ]
},


/* =================================================
   47 - SLEEPING DOGS
================================================= */

{
    id: "sleeping-dogs",

    title: "Sleeping Dogs",

    platform: "PC",

    category: "Acao",

    image:
        "images/sleeping-dogs.jpg",

    description:
        "Jogo de acao em mundo aberto ambientado em Hong Kong, com combate corpo a corpo, perseguicoes e tiroteios.",

    requirements: {
        android: "N/A",
        ram: "2 GB minimo",
        cpu: "Core 2 Duo 2.4 GHz / Athlon X2 2.7 GHz",
        gpu: "GeForce 8800 GT / Radeon 3870",
        storage: "20 GB"
    },

    compatibility:
        "Requer PC compativel com os requisitos minimos da versao para PC.",

    language:
        "PT EN ES",

    gpuDownloads: {

        adreno: null,

        mali: null,

        powervr: null
    },

    downloads: [
        {
            name: "PC",
            type: "Oficial",
            url: "https://link-center.net/1275086/QzXj7rofKJ0J"
        }
    ]
},


/* =================================================
   48 - THE WALKING DEAD: THE FINAL SEASON
================================================= */

{
    id: "the-walking-dead-final-season",

    title: "The Walking Dead: The Final Season",

    platform: "PC",

    category: "Aventura",

    image:
        "images/the-walking-dead-final-season.jpg",

    description:
        "Aventura narrativa da Telltale Games que acompanha Clementine em sua temporada final.",

    requirements: {
        android: "N/A",
        ram: "4 GB minimo",
        cpu: "Intel Core 2 Duo 2.4 GHz",
        gpu: "NVIDIA GTS 450 / Radeon HD 5770",
        storage: "15 GB"
    },

    compatibility:
        "Requer PC compativel com os requisitos graficos do jogo.",

    language:
        "PT EN ES",

    gpuDownloads: {

        adreno: null,

        mali: null,

        powervr: null
    },

    downloads: [
        {
            name: "PC",
            type: "Oficial",
            url: "https://link-target.net/1275086/Uimd3k2xzkDT"
        }
    ]
},


/* =================================================
   49 - 9MM HD REMASTERED
================================================= */

{
    id: "9mm-hd-remastered",

    title: "9MM HD Remastered",

    platform: "Android",

    category: "Acao",

    image:
        "images/9mm-hd-remastered.jpg",

    description:
        "Jogo de acao e tiro em terceira pessoa inspirado em filmes policiais de acao.",

    requirements: {
        android: "4.0+",
        ram: "2 GB recomendado",
        cpu: "Processador quad-core compativel",
        gpu: "Adreno / Mali / PowerVR compativel",
        storage: "2 GB"
    },

    compatibility:
        "Jogo antigo; a compatibilidade pode variar em versoes recentes do Android.",

    language:
        "PT EN ES",

    gpuDownloads: {

        adreno: null,

        mali: null,

        powervr: null
    },

    downloads: [
        {
            name: "APK",
            type: "APK",
            url: "https://direct-link.net/1275086/nQ8jASd9UlLq"
        },

        {
            name: "Dados",
            type: "OBB",
            url: "https://link-center.net/1275086/x82QgifYUW7N"
        }
    ]
},
/* =================================================
   50 - THE ADVENTURES OF TINTIN
================================================= */

{
    id: "the-adventures-of-tintin",

    title: "The Adventures of Tintin",

    platform: "Android",

    category: "Aventura",

    image:
        "images/the-adventures-of-tintin.jpg",

    description:
        "Jogo de aventura baseado no filme As Aventuras de Tintim.",

    requirements: {
        android: "4.0+",
        ram: "2 GB recomendado",
        cpu: "Processador dual-core ou superior",
        gpu: "Adreno / Mali / PowerVR compativel",
        storage: "2 GB"
    },

    compatibility:
        "Jogo antigo para Android e pode apresentar incompatibilidade em versoes modernas.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "APK",
            type: "APK",
            url: "https://direct-link.net/1275086/PFnnfiEOip1S"
        },

        {
            name: "Dados",
            type: "OBB",
            url: "https://link-hub.net/1275086/4b32u7GRHMfJ"
        }
    ]
},


/* =================================================
   51 - SUICIDE SQUAD
================================================= */

{
    id: "suicide-squad",

    title: "Suicide Squad",

    platform: "Android",

    category: "Acao",

    image:
        "images/suicide-squad.jpg",

    description:
        "Jogo de acao baseado no universo de Suicide Squad.",

    requirements: {
        android: "4.0+",
        ram: "512MB",
        cpu: "Processador quad-core compativel",
        gpu: "Adreno / Mali / PowerVR compativel",
        storage: "30MB"
    },

    compatibility:
        "Jogo antigo; pode apresentar incompatibilidade em versoes atuais do Android.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Arquivo do jogo",
            url: null
        }
    ]
},


/* =================================================
   52 - RED DUSTLANDS ONLINE
================================================= */

{
    id: "red-dustlands-online",

    title: "Red Dustlands Online",

    platform: "Android",

    category: "Acao",

    image:
        "images/red-dustlands-online.jpg",

    description:
        "Jogo de acao e aventura com tematica de mundo aberto e sobrevivencia.",

    requirements: {
        android: "8.0+",
        ram: "2GB",
        cpu: "Processador octa-core compativel",
        gpu: "Adreno / Mali compativel",
        storage: "600MB"
    },

    compatibility:
        "Requer dispositivo compativel com os requisitos graficos do jogo.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Oficial",
            url: "https://link-target.net/1275086/DSDKAlrYB0QZ"
        }
    ]
},


/* =================================================
   53 - BATMAN BEGINS
================================================= */

{
    id: "batman-begins",

    title: "Batman Begins",

    platform: "GameCube",

    category: "Acao",

    image:
        "images/batman-begins.jpg",

    description:
        "Jogo de acao e aventura baseado no filme Batman Begins.",

    requirements: {
        android: "N/A",
        ram: "4 GB recomendado para emulacao",
        cpu: "Processador compativel com emulacao de GameCube",
        gpu: "GPU compativel com emulacao de GameCube",
        storage: "2 GB"
    },

    compatibility:
        "Para jogar no Android, requer um emulador compativel com GameCube.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "GameCube",
            type: "Jogo",
            url: "https://link-center.net/1275086/WntjPu81XWjF"
        }
    ]
},
/* =================================================
   54 - TERMINATOR GENISYS: GUARDIAN
================================================= */

{
    id: "terminator-genisys-guardian",

    title: "Terminator Genisys: Guardian",

    platform: "Android",

    category: "Acao",

    image:
        "images/terminator-genisys-guardian.jpg",

    description:
        "Jogo de acao baseado no universo de Terminator Genisys.",

    requirements: {
        android: "4.0+",
        ram: "2 GB recomendado",
        cpu: "Processador quad-core compativel",
        gpu: "Adreno / Mali / PowerVR compativel",
        storage: "1.5 GB"
    },

    compatibility:
        "Jogo antigo; pode apresentar problemas de compatibilidade em versoes modernas do Android.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "APK+OBB",
            type: "Arquivo do jogo",
            url: "https://link-target.net/1275086/u2vfbnyq8AKR"
        }
    ]
},


/* =================================================
   55 - NARUTO MOBILE
================================================= */

{
    id: "naruto-mobile",

    title: "Naruto Ultimate Ninja Mobile",

    platform: "Android",

    category: "Acao",

    image:
        "images/naruto-mobile.jpg",

    description:
        "Jogo mobile baseado no universo de Naruto.",

    requirements: {
        android: "11+",
        ram: "6GB recomendado",
        cpu: "Processador octa-core compativel",
        gpu: "Adreno / Mali compativel",
        storage: "4 GB"
    },

    compatibility:
        "A compatibilidade e disponibilidade podem variar conforme a regiao e a versao do jogo.",

    language:
        "CN JP",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Oficial",
            url: "https://link-center.net/1275086/r0JQBtsZsKQz"
        }
    ]
},


/* =================================================
   56 - NARUTO: CLASH OF NINJA 2
================================================= */

{
    id: "naruto-clash-of-ninja-2",

    title: "Naruto: Clash of Ninja 2",

    platform: "GameCube",

    category: "Luta",

    image:
        "images/naruto-clash-of-ninja-2.jpg",

    description:
        "Jogo de luta baseado no universo de Naruto para Nintendo GameCube.",

    requirements: {
        android: "N/A",
        ram: "4 GB recomendado para emulacao",
        cpu: "Processador compativel com emulacao de GameCube",
        gpu: "GPU compativel com emulacao de GameCube",
        storage: "1.5 GB"
    },

    compatibility:
        "Para jogar no Android, requer um emulador compativel com GameCube.",

    language:
        "JP EN",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "GameCube",
            type: "Jogo",
            url: "https://direct-link.net/1275086/w3iVpJH6souF"
        }
    ]
},


/* =================================================
   57 - LITTLE NIGHTMARES
================================================= */

{
    id: "little-nightmares",

    title: "Little Nightmares",

    platform: "Android",

    category: "Aventura",

    image:
        "images/little-nightmares.jpg",

    description:
        "Jogo de aventura e plataforma com exploracao, enigmas e atmosfera sombria.",

    requirements: {
        android: "9.0+",
        ram: "4 GB recomendado",
        cpu: "Processador octa-core compativel",
        gpu: "Adreno / Mali compativel",
        storage: "2 GB"
    },

    compatibility:
        "Requer dispositivo Android compativel com os requisitos graficos do jogo.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "APK",
            type: "Oficial",
            url: "https://direct-link.net/1275086/xvvdpHlxmLHh"
        }
    ]
},
/* =================================================
   58 - JOGO PARECIDO COM RED DEAD REDEMPTION
================================================= */

{
    id: "red-dead-redemption-like",

    title: "Jogo parecido com Red Dead Redemption",

    platform: "Android",

    category: "Acao",

    image:
        "images/red-dead-redemption-like.jpg",

    description:
        "Jogo de acao e aventura para Android com tematica semelhante a Red Dead Redemption.",

    requirements: {
        android: "8.0+",
        ram: "1GB recomendado",
        cpu: "Processador octa-core compativel",
        gpu: "Adreno / Mali compativel",
        storage: "600MB"
    },

    compatibility:
        "A compatibilidade depende do jogo especifico e das caracteristicas do dispositivo.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "APK",
            type: "Arquivo do jogo",
            url: "https://link-center.net/1275086/PEfr7f05XCYS"
        }
    ]
},


/* =================================================
   59 - NBA 2K17 LEGEND EDITION - KOBE BRYANT
================================================= */

{
    id: "nba-2k17-legend-edition-kobe-bryant",

    title: "NBA 2K17: Legend Edition - Kobe Bryant",

    platform: "Android",

    category: "Esportes",

    image:
        "images/nba-2k17-legend-edition-kobe-bryant.jpg",

    description:
        "Edicao especial de NBA 2K17 dedicada a Kobe Bryant, com conteudo relacionado a carreira e legado do jogador.",

    requirements: {
        android: "4.3+",
        ram: "3 GB recomendado",
        cpu: "Processador quad-core ou superior",
        gpu: "Compativel",
        storage: "1.01GB"
    },

    compatibility:
        "Pode apresentar incompatibilidade em versoes modernas do Android.",

    language:
        "PT EN ES",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "APK",
            type: "APK",
            url: "https://link-center.net/1275086/y9sWqHSbqIgW"
        },

        {
            name: "Dados",
            type: "OBB",
            url: "https://link-center.net/1275086/rl68pXKNL0lB"
        }
    ]
},


/* =================================================
   60 - RESIDENT EVIL 4 DUBLADO - PS2
================================================= */

{
    id: "resident-evil-4-dublado-ps2",

    title: "Resident Evil 4 Dublado",

    platform: "PS2",

    category: "Acao",

    image:
        "images/resident-evil-4-dublado-ps2.jpg",

    description:
        "Resident Evil 4 Dublado para PS2 traz a classica aventura de Leon S. Kennedy em uma missao cheia de acao, suspense e momentos intensos. Esta versao conta com dublagem em portugues e pode ser jogada usando emuladores de PlayStation 2 no Android.",

    requirements: {
        android: "Android 7.0+",
        ram: "4 GB recomendado",
        cpu: "Snapdragon 660 ou superior",
        gpu: "Adreno / Mali / PowerVR compativel",
        storage: "4 GB"
    },

    compatibility:
        "Requer emulador de PS2. O desempenho pode variar conforme o dispositivo e o emulador utilizado.",

    language:
        "Portugues Dublado",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "ISO",
            type: "PS2",
            url: "https://link-center.net/1275086/t9Zguesf1tza"
        }
    ]
},
/* =================================================
   61 - SALLY FACE
================================================= */

{
    id: "sally-face-v1-5-50",

    title: "Sally Face v1.5.50",

    platform: "Android",

    category: "Aventura",

    image:
        "images/sally-face-v1-5-50.jpg",

    description:
        "Sally Face e uma aventura narrativa com uma atmosfera misteriosa e uma historia envolvente. Acompanhe Sally e seus amigos enquanto exploram acontecimentos estranhos e descobrem os segredos por tras de uma serie de misterios. Esta versao traz a versao 1.5.50 MOD para Android.",

    requirements: {
        android: "Android 7.0+",
        ram: "2 GB recomendado",
        cpu: "Quad-Core ou superior",
        gpu: "Adreno / Mali / PowerVR compativel",
        storage: "700MB"
    },

    compatibility:
        "Compativel com dispositivos Android suportados. O desempenho pode variar conforme o aparelho e a versao do Android.",

    language:
        "Portugues / Ingles",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "APK",
            type: "Android",
            url: "https://link-center.net/1275086/t9Zguesf1tza"
        }
    ]
},


/* =================================================
   62 - ROBOCOP v3.0.6 ATUALIZADO
================================================= */

{
    id: "robocop-v3-0-6-atualizado",

    title: "RoboCop v3.0.6 Atualizado",

    platform: "Android",

    category: "Acao",

    image:
        "images/robocop.jpg",

    description:
        "RoboCop v3.0.6 atualizado para Android. Baixe o APK e o arquivo OBB e siga o tutorial para realizar a instalacao corretamente.",

    downloads: [
        {
            name: "APK",
            type: "APK",
            url: "https://link-hub.net/1275086/PDsbkL1bjLh6"
        },

        {
            name: "Dados",
            type: "OBB",
            url: "https://link-hub.net/1275086/TvbCoTfqEsMI"
        }
    ]
},


/* =================================================
   63 - DRAGON BALL TAP BATTLE - ANDROID
================================================= */

{
    id: "dragon-ball-tap-battle-android",

    title: "Dragon Ball Tap Battle",

    platform: "Android",

    category: "Acao",

    image:
        "images/dragon-ball-tap-battle.jpg",

    description:
        "Dragon Ball Tap Battle para Android. Prepare-se para batalhas rapidas e intensas no universo de Dragon Ball.",

    download:
        "https://direct-link.net/1275086/XGHklSNWyt97"
},

/* =================================================
   64 - THE AMAZING SPIDER-MAN 2 V1.2.8d
================================================= */

{
    id: "amazing-spiderman-2-v1-2-8d",

    title: "The Amazing Spider-Man 2 V1.2.8d",

    platform: "Android",

    category: "Acao",

    image:
    "images/amazing-spiderman-2-v1-2-8d.jpg",

    description:
        "The Amazing Spider-Man 2 V1.2.8d para Android.",

    requirements: {
        android: "6+",
        ram: "1GB",
        cpu: "compativel",
        gpu: "GPU especifica conforme versao",
        storage: "680MB"
    },

    info:
        "Compatibilidade pode variar conforme o dispositivo. Idiomas: Portugues, ingles, espanhol e outros.",

    downloads: [
        {
            name: "APK",
            type: "14 MB",
            url: "https://link-target.net/1275086/gJbauweC6bDM"
        },

        {
            name: "OBB",
            type: "488 MB",
            url: "https://link-target.net/1275086/8muft9yfCZKb"
        }
    ]
},
/* =================================================
   65 - THE FALL 3: ZOMBIE SURVIVAL
================================================= */

{
    id: "the-fall-3-zombie-survival",

    title: "The Fall 3: Zombie Survival",

    platform: "Android",

    category: "Acao",

    image:
    "images/the-fall-3-zombie-survival.jpg",

    description:
        "The Fall 3: Zombie Survival para Android.",

    requirements: {
        android: "7.1+",
        ram: "2GB",
        cpu: "compativel",
        gpu: "Adreno, Mali, PowerVR",
        storage: "2GB"
    },

    info:
        "Jogo de sobrevivencia contra zumbis com exploracao, combate e gerenciamento de recursos. Compatibilidade pode variar conforme o dispositivo. Idiomas: ingles e outros.",

    downloads: [
        {
            name: "APK",
            type: "2GB",
            url: "https://link-hub.net/1275086/TSIXDsMicWBl"
        }
    ]
},
/* =================================================
   66 - HIJACKER JACK: FAMOUS. RICH. WANTED.
================================================= */

{
    id: "hijacker-jack-famous-rich-wanted",

    title: "Hijacker Jack: Famous. Rich. Wanted.",

    platform: "Android",

    category: "Acao",

    image:
    "images/hijacker-jack-famous-rich-wanted.jpg",

    description:
        "Hijacker Jack: Famous. Rich. Wanted. para Android.",

    requirements: {
        android: "5.0+",
        ram: "2GB",
        cpu: "compativel",
        gpu: "Adreno, Mali, PowerVR",
        storage: "2GB"
    },

    info:
        "Hijacker Jack: Famous. Rich. Wanted. é um jogo de ação FMV com uma história interativa onde suas escolhas influenciam o caminho do personagem. Compatibilidade pode variar conforme o dispositivo. Idiomas: ingles e outros.",

    downloads: [
        {
            name: "APK",
            type: "2GB",
            url: "https://direct-link.net/1275086/0JQvJ0vh2Zqk"
        }
    ]
},
/* =================================================
   67 - GOD OF WAR MOBILE EDITION
================================================= */

{
    id: "god-of-war-mobile-edition",

    title: "God of War Mobile Edition",

    platform: "Android",

    category: "Acao",

    image:
    "images/god-of-war-mobile-edition.jpg",

    description:
        "God of War Mobile Edition para Android.",

    requirements: {
        android: "4.0+",
        ram: "1GB",
        cpu: "Dual Core ou superior",
        gpu: "Adreno, Mali, PowerVR",
        storage: "200MB"
    },

    info:
        "God of War Mobile Edition é uma versão desenvolvida pela FAM inspirada na famosa franquia God of War. Em dispositivos Android atuais, o jogo pode funcionar melhor utilizando o VPhoneOS para maior compatibilidade e desempenho. Compatibilidade pode variar conforme o dispositivo. Idiomas: ingles e outros.",

    downloads: [
        {
            name: "APK",
            type: "200MB",
            url: "https://link-target.net/1275086/WFJSEXKrab5J"
        }
    ]
},
/* =================================================
   68 - GANGSTAR RIO: CITY OF SAINTS
================================================= */

{
    id: "gangstar-rio-city-of-saints",

    title: "Gangstar Rio: City of Saints",

    platform: "Android",

    category: "Acao",

    image:
    "images/gangstar-rio-city-of-saints.jpg",

    description:
        "Gangstar Rio: City of Saints para Android.",

    requirements: {
        android: "4.0+",
        ram: "1GB",
        cpu: "Dual Core ou superior",
        gpu: "Adreno, Mali, PowerVR",
        storage: "1.2GB"
    },

    info:
        "Gangstar Rio: City of Saints é um jogo de mundo aberto desenvolvido pela Gameloft, ambientado no Rio de Janeiro. Explore a cidade, participe de missões, combates e perseguições em uma grande aventura criminal. Compatibilidade pode variar conforme o dispositivo. Idiomas: Portugues, ingles, espanhol e outros.",

    downloads: [
        {
            name: "APK",
            type: "20MB",
            url: "https://link-target.net/1275086/2BvuWI4NRD7d"
        },

        {
            name: "OBB",
            type: "1GB",
            url: "https://direct-link.net/1275086/h38zGblpkAg4"
        }
    ]
},
/* =================================================
   69 - SPIDER-MAN UNLIMITED
================================================= */

{
    id: "spider-man-unlimited",

    title: "Spider-Man Unlimited",

    platform: "Android",

    category: "Acao",

    image:
    "images/spider-man-unlimited.jpg",

    description:
        "Spider-Man Unlimited para Android.",

    requirements: {
        android: "4.0+",
        ram: "1GB",
        cpu: "Dual Core ou superior",
        gpu: "Adreno, Mali, PowerVR",
        storage: "50MB"
    },

    info:
        "Spider-Man Unlimited é um jogo de ação e corrida infinita desenvolvido pela Gameloft. Controle o Homem-Aranha em uma aventura contra vilões clássicos, desbloqueie diferentes versões do personagem e enfrente desafios em vários cenários. Compatibilidade pode variar conforme o dispositivo. Idiomas: Portugues, ingles, espanhol e outros.",

    downloads: [
        {
            name: "APK",
            type: "50MB",
            url: "https://link-center.net/1275086/CPbbeRyID5SM"
        },

    ]
},
];