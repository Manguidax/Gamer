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
    category: "Adventure",
    image: "images/life-is-strange.jpg",
    description: "Experience a story-driven adventure where your choices shape the journey. Play as Max Caulfield, a photography student who discovers she can rewind time and use this mysterious ability to change events around her. Explore the town of Arcadia Bay, meet different characters, investigate secrets, and make decisions that can have lasting consequences. With an emotional story, memorable characters, exploration, and a unique time-rewind mechanic, Life is Strange offers an interactive experience where the way you play can influence how the story unfolds.",
    requirements: {
        storage: "1.2GB",
        ram: "3 GB+",
        system: "Android 9+"
    },
    info: "Compatibility depends on the device. CPU: Octa-Core. Compatible GPU required. Language: Portuguese depending on the game version.",
    downloads: [
        { name: "Android APK", url: "https://direct-link.net/1275086/AYmeqO8ncujq" }
    ]
},

/* 02 - THE WALKING DEAD SEASON TWO (LEGENDADO) */
{
    id: "walking-dead-season-two-legendado",
    title: "The Walking Dead: Season Two",
    subtitle: "Old Version • Portuguese Subtitles",
    platform: "Android",
    category: "Adventure",
    image: "images/walking-dead-season-two.jpg",
    description: "Continue Clementine's journey in the second season of the acclaimed narrative adventure series. In a world where survival is never guaranteed, your decisions can influence relationships, conversations, and the events that follow. Explore different locations, interact with survivors, discover new characters, and face difficult situations where there may be no easy choice. This version is designed for older Android devices and includes Portuguese subtitles, allowing Portuguese-speaking players to follow the story and dialogue more easily.",
    requirements: {
        storage: "780MB",
        ram: "1 GB+",
        system: "Android below 14"
    },
    info: "Primarily intended for older Android versions. CPU: Dual-Core 1.2 GHz. Compatible GPU required. Language: Portuguese subtitles.",
    downloads: [
        { name: "PT-BR SUBTITLES v1.35", url: "https://drive.google.com/file/d/19XL984CZ3wjwtKzyvAIXjhoDD1uRKxLj/view?usp=drivesdk" },
        { name: "ADRENO GPU APK", url: "https://link-center.net/1275086/pSTUoEPfS8BL" },
        { name: "ADRENO GPU OBB", url: "https://link-hub.net/1275086/9hwAXCxSAsrM" },
        { name: "MALI GPU APK", url: "https://link-center.net/1275086/B91x18AuRNLK" },
        { name: "MALI GPU OBB", url: "https://direct-link.net/1275086/JkSw87z3B9fT" },
        { name: "POWERVR GPU APK", url: "https://link-center.net/1275086/yjJcHd6hRMed" },
        { name: "POWERVR GPU OBB", url: "https://link-hub.net/1275086/2L321AKRPL4x" },
        { name: "TEGRA GPU APK", url: "https://link-hub.net/1275086/fkBmF42VauSw" },
        { name: "TEGRA GPU OBB", url: "https://link-target.net/1275086/8upz4R1Bzq6K" }
    ]
},

/* 03 - THE WALKING DEAD SEASON TWO (UPDATED) */
{
    id: "walking-dead-season-two-atualizado",
    title: "The Walking Dead: Season Two Updated",
    subtitle: "Updated Version",
    platform: "Android",
    category: "Adventure",
    image: "images/walking-dead-season-two-updated.jpg",
    description: "Continue Clementine's story in this updated version of The Walking Dead: Season Two. Experience a narrative adventure focused on survival, exploration, character relationships, and meaningful decisions. Your actions can influence conversations and events as you travel through a dangerous world filled with unpredictable situations. Meet other survivors, explore different environments, and make difficult choices while following Clementine's journey. This version is intended for newer Android versions and does not include Portuguese subtitles.",
    requirements: {
        storage: "1GB",
        ram: "1 GB+",
        system: "Android 14 / 15 / 16"
    },
    info: "Compatibility depends on the device and Android version. CPU: Dual-Core or higher. Compatible GPU required depending on the version. No Portuguese subtitles.",
    downloads: [
        { name: "MALI GPU APK", url: "https://direct-link.net/1275086/xjjrlU8UPVrn" },
        { name: "ADRENO GPU APK", url: "https://link-center.net/1275086/j1vgefEAPuZC" }
    ]
},
/* =================================================
   04 - THE AMAZING SPIDER-MAN 2
================================================= */

{
    id: "amazing-spiderman-2",

    title: "The Amazing Spider-Man 2",

    platform: "Android",

    category: "Action",

    image:
        "images/amazing-spiderman-2.jpg",

    description:
        "Swing through the streets of New York as Spider-Man in this action-packed open-world adventure. Explore the city, fight criminals, complete missions, and use Spider-Man's abilities to move freely across the urban environment. Take on powerful enemies, investigate events throughout the city, and experience an adventure inspired by The Amazing Spider-Man 2 universe. With web-swinging, fast-paced combat, exploration, and a variety of missions, the game delivers a superhero experience designed for mobile devices.",

    requirements: {
        android: "6+",
        ram: "1GB",
        cpu: "Compatible",
        gpu: "Specific GPU depending on version",
        storage: "680MB"
    },

    info:
        "Compatibility may vary depending on the version and device. Languages: Portuguese, English, Spanish, and others.",

    downloads: [
        {
            name: "Password Is HardTECH",
            type: "HardTECH",
            url: "#"
        },

        {
            name: "APK+OBB",
            type: "COMPACT",
            url: "https://direct-link.net/1275086/nfTV0yj52z8q"
        }
    ]
},


/* =================================================
   05 - LIFE IS STRANGE: BEFORE THE STORM
================================================= */

{
    id: "life-is-strange-before-the-storm",

    title: "Life is Strange: Before the Storm",

    platform: "Android",

    category: "Adventure",

    image:
        "images/life-is-strange-before-the-storm.jpg",

    description:
        "Discover the story that takes place before the events of Life is Strange. Play as Chloe Price and experience a narrative-driven adventure focused on friendship, relationships, exploration, and difficult choices. Explore different locations, interact with characters, uncover personal stories, and make decisions that can influence the way the story develops. With an emotional narrative and a strong focus on character relationships, Before the Storm offers a story-centered experience for players who enjoy interactive adventures.",

    requirements: {
        android: "Android 9+",
        ram: "3 GB+",
        cpu: "Octa-Core",
        gpu: "Compatible GPU",
        storage: "1.2GB"
    },

    info:
        "Relatively demanding game for Android devices. Languages: Portuguese, English, and Spanish.",

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

    category: "Racing",

    image:
        "images/nfs-most-wanted.jpg",

    description:
        "Get behind the wheel and experience high-speed street racing in Need for Speed: Most Wanted. Race through the city, compete against rival drivers, unlock and customize powerful cars, and escape intense police pursuits. Build your reputation by winning races and taking on increasingly challenging opponents. With fast-paced gameplay, a wide selection of cars, detailed environments, and exciting police chases, this mobile version delivers an arcade-style racing experience focused on speed and action.",

    requirements: {
        android: "5+",
        ram: "1GB",
        cpu: "Compatible",
        gpu: "Compatible GPU",
        storage: "690MB"
    },

    info:
        "Compatibility varies depending on the device and version. Languages: Portuguese, English, and Spanish.",

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

    category: "Action",

    image:
        "images/red-dead-redemption.jpg",

    description:
        "Experience an open-world western adventure set in the world of Red Dead Redemption. Explore vast landscapes, travel through towns and wilderness, interact with characters, and take part in missions across a detailed frontier environment. Follow the story of John Marston as he travels across the American frontier, facing dangerous situations and meeting different characters along the way. With exploration, action, storytelling, and an expansive open world, the mobile version brings the western adventure to compatible Android devices.",

    requirements: {
        android: "Check official version",
        ram: "Check",
        cpu: "High-performance hardware recommended",
        gpu: "High-performance GPU",
        storage: "Check"
    },

    info:
        "Requires compatible hardware. Languages: Portuguese, Spanish, and English.",

    downloads: [
        {
            name: "Android",
            type: "Official",
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
    category: "Adventure",
    image: "images/wolf-among-us.jpg",
    description: "A narrative adventure game developed by Telltale.",
    requirements: {
        android: "Android 12 Fix",
        ram: "3GB",
        cpu: "Compatible CPU",
        gpu: "Specific GPU depending on the version",
        storage: "2.6GB"
    },
    info: "Compatibility depends on your device and GPU version.",
    downloads: [
        {
            name: "GPU ADRENO APK",
            url: "https://direct-link.net/1275086/p4vYJLPN6h9O"
        },
        {
            name: " IMPORTANT: OBB DOWNLOAD EXPIRES IN 7 DAYS — IF THE LINK EXPIRES, LEAVE A COMMENT ON THE CHANNEL REQUESTING AN UPDATE — GPU ADRENO OBB",
            url: "https://5play.org/en/?do=cdn&id=23098p"
        },

        {
            name: "GPU MALI APK",
            url: "https://direct-link.net/1275086/p4vYJLPN6h9O"
        },
        {
            name: " IMPORTANT: OBB DOWNLOAD EXPIRES IN 7 DAYS — IF THE LINK EXPIRES, LEAVE A COMMENT ON THE CHANNEL REQUESTING AN UPDATE — GPU MALI OBB",
            url: "https://5play.org/en/?do=cdn&id=23098"
        },

        {
            name: "GPU POWERVR APK",
            url: "https://direct-link.net/1275086/p4vYJLPN6h9O"
        },
        {
            name: " IMPORTANT: OBB DOWNLOAD EXPIRES IN 7 DAYS — IF THE LINK EXPIRES, LEAVE A COMMENT ON THE CHANNEL REQUESTING AN UPDATE — GPU POWERVR OBB",
            url: "https://5play.org/en/?do=cdn&id=23098"
        },

        {
            name: "GPU TEGRA APK",
            url: "https://direct-link.net/1275086/p4vYJLPN6h9O"
        },
        {
            name: " IMPORTANT: OBB DOWNLOAD EXPIRES IN 7 DAYS — IF THE LINK EXPIRES, LEAVE A COMMENT ON THE CHANNEL REQUESTING AN UPDATE — GPU TEGRA OBB",
            url: "https://5play.org/en/?do=cdn&id=23098"
        }
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
        storage: "550MB"
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
            name: "EMULATOR",
            type: "Android",
            url: "https://play.google.com/store/apps/details?id=org.ppsspp.ppsspp"
        },
        {
            name: "ROM",
            type: "ISO",
            url: "https://direct-link.net/1275086/FKjVcWXyf0WH"
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
    id: "sally-face-v1-5-54",

    title: "Sally Face v1.5.54",

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
            url: "https://link-center.net/1275086/BZywiDkpvgOs"
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

/* =================================================
   65 - ASSASSIN'S CREED: BACKSTAB
================================================= */

{
    id: "assassins-creed-backstab",

    title: "Assassin's Creed: Backstab",

    platform: "Android",

    category: "Action",

    image:
    "images/assassins-creed-backstab.jpg",

    description:
        "Assassin's Creed: Backstab for Android.",

    requirements: {
        android: "2.3+",
        ram: "1GB",
        cpu: "Single Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "1GB"
    },

    info:
        "Assassin's Creed: Backstab is an action-adventure game developed by Gameloft. Play as Henry Blake, an assassin seeking revenge, explore different locations, complete missions, and fight enemies in an adventure inspired by the Assassin's Creed universe. Compatibility may vary depending on the device. Languages: English and others.",

    downloads: [
        {
            name: "APK",
            type: "APK",
            url: "https://direct-link.net/1275086/xJ9FzaQ8rDcz"
        },

        {
            name: "OBB",
            type: "OBB",
            url: "https://link-center.net/1275086/gmMs5IyQn9cV"
        },

    ]
},
/* =================================================
   71 - CARS: FAST AS LIGHTNING
================================================= */

{
    id: "cars-fast-as-lightning",

    title: "Cars: Fast as Lightning",

    platform: "Android",

    category: "Racing",

    image:
    "images/cars-fast-as-lightning.jpg",

    description:
        "Cars: Fast as Lightning for Android.",

    requirements: {
        android: "4.0+",
        ram: "1GB",
        cpu: "Dual Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "1GB"
    },

    info:
        "Cars: Fast as Lightning is a racing game based on Disney Pixar's Cars. Race with Lightning McQueen and other characters. VPhoneOS is recommended for better compatibility on updated Android devices.",

    downloads: [
        {
            name: "APK",
            type: "APK",
            url: "https://link-hub.net/1275086/4SebK9ulk6NY"
        },
        
        {
            name: "VPhoneOS",
            type: "Play Store",
            url: "https://play.google.com/store/apps/details?id=com.yoyo.snake.rush"
        }
    ]
},

/* =================================================
   72 - INFINITY BLADE
================================================= */

{
    id: "infinity-blade",

    title: "Infinity Blade",

    platform: "Android",

    category: "Action",

    image:
    "images/infinity-blade.jpg",

    description:
        "Infinity Blade for Android.",

    requirements: {
        android: "4.0+",
        ram: "1GB",
        cpu: "Dual Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "1GB"
    },

    info:
        "Infinity Blade is an action RPG with intense sword fights and impressive graphics.",

    downloads: [
        {
            name: "APK",
            type: "APK",
            url: "https://link-hub.net/1275086/xlM0RW9IQlTD"
        }
    ]
},
/* =================================================
   73 - ODDWORLD: STRANGER'S WRATH
================================================= */

{
    id: "oddworld-strangers-wrath",

    title: "Oddworld: Stranger's Wrath",

    platform: "Android",

    category: "Action",

    image:
    "images/oddworld-strangers-wrath.jpg",

    description:
        "Oddworld: Stranger's Wrath for Android.",

    requirements: {
        android: "4.0+",
        ram: "1GB",
        cpu: "Dual Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "2GB"
    },

    info:
        "Oddworld: Stranger's Wrath is an action-adventure game with shooting and exploration. Choose the APK version for your device GPU. VPhoneOS is recommended for better compatibility on updated Android devices.",

    downloads: [
        {
            name: "Adreno APK",
            type: "APK",
            url: "https://link-center.net/1275086/jH5LpTnDRwaB"
        },

        {
            name: "Mali APK",
            type: "APK",
            url: "https://link-hub.net/1275086/8toEkOi5e7Nw"
        },

        {
            name: "PowerVR APK",
            type: "APK",
            url: "https://link-target.net/1275086/hKY3Nx2OLWB3"
        },

        {
            name: "VPhoneOS",
            type: "Play Store",
            url: "https://play.google.com/store/apps/details?id=com.yoyo.snake.rush"
        }
    ]
},
/* =================================================
   74 - REAL STEEL
================================================= */

{
    id: "real-steel",

    title: "Real Steel",

    platform: "Android",

    category: "Action",

    image:
    "images/real-steel.jpg",

    description:
        "Real Steel for Android.",

    requirements: {
        android: "4.0+",
        ram: "1GB",
        cpu: "Dual Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "1GB"
    },

    info:
        "Real Steel is a robot fighting game inspired by the movie. Fight against powerful robots and become the champion. VPhoneOS is recommended for better compatibility on updated Android devices.",

    downloads: [
        {
            name: "APK",
            type: "APK",
            url: "https://link-hub.net/1275086/125QsFb4lHsf"
        },

        {
            name: "VPhoneOS",
            type: "Play Store",
            url: "https://play.google.com/store/apps/details?id=com.yoyo.snake.rush"
        }
    ]
},
/* =================================================
   75 - AMERICAN FARMING 2
================================================= */

{
    id: "american-farming-2",

    title: "American Farming 2",

    platform: "Android",

    category: "Simulation",

    image:
    "images/american-farming-2.jpg",

    description:
        "American Farming 2 for Android.",

    requirements: {
        android: "5.0+",
        ram: "2GB",
        cpu: "Quad Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "2GB"
    },

    info:
        "American Farming 2 is a farming simulation game where you can manage your farm, use agricultural vehicles, grow crops, and take care of your farming activities.",

    downloads: [
        {
            name: "APK",
            type: "APK",
            url: "https://link-target.net/1275086/QhPDuOkUUGGd"
        }
    ]
},
/* =================================================
   76 - LEGO MARVEL SUPER HEROES
================================================= */

{
    id: "lego-marvel-super-heroes",

    title: "LEGO Marvel Super Heroes",

    platform: "Android",

    category: "Action",

    image:
    "images/lego-marvel-super-heroes.jpg",

    description:
        "LEGO Marvel Super Heroes for Android.",

    requirements: {
        android: "4.0+",
        ram: "1GB",
        cpu: "Dual Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "2GB"
    },

    info:
        "LEGO Marvel Super Heroes is an action-adventure game featuring popular Marvel characters. Play with heroes and villains, explore different locations, fight enemies, and complete missions.",

    downloads: [
        {
            name: "APK",
            type: "APK",
            url: "https://link-target.net/1275086/LpzCefzcFmJz"
        },
    ]
},
/* =================================================
   77 - ASPHALT XTREME
================================================= */

{
    id: "asphalt-xtreme",

    title: "Asphalt Xtreme",

    platform: "Android",

    category: "Racing",

    image:
    "images/asphalt-xtreme.jpg",

    description:
        "Asphalt Xtreme for Android.",

    requirements: {
        android: "4.0+",
        ram: "1GB",
        cpu: "Dual Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "1GB"
    },

    info:
        "Asphalt Xtreme is an off-road racing game developed by Gameloft. Race through extreme environments using powerful vehicles and compete in exciting off-road challenges.",

    downloads: [
        {
            name: "APK",
            type: "APK",
            url: "https://link-target.net/1275086/DERgC5w2i7i"
        },

        {
            name: "OBB",
            type: "OBB",
            url: "https://link-center.net/1275086/MY2poFXxVapB"
        }
    ]
},

/* =================================================
   78 - MARVEL'S SPIDER-MAN: MILES MORALES
================================================= */

{
    id: "marvel-spiderman-miles-morales",

    title: "Marvel's Spider-Man: Miles Morales",

    platform: "Android",

    category: "Action",

    image:
    "images/marvel-spiderman-miles-morales.jpg",

    description:
        "Marvel's Spider-Man: Miles Morales for Android.",

    requirements: {
        android: "7.0+",
        ram: "4GB",
        cpu: "Octa Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "280MB"
    },

    info:
        "Marvel's Spider-Man: Miles Morales is an exciting superhero adventure. Play as Miles Morales and use incredible spider abilities to protect the city and face powerful enemies. A great experience for Spider-Man fans and gamers.",

    downloads: [
        {
            name: "APK",
            type: "Android",
            url: "https://link-target.net/1275086/WAVSJwPY1ECx"
        },

    ]
},

/* =================================================
   78 - RESIDENT EVIL 4
================================================= */

{
    id: "resident-evil-4-gamecube",

    title: "Resident Evil 4",

    platform: "GameCube",

    category: "Action",

    image:
    "images/resident-evil-4.jpg",

    description:
        "Resident Evil 4 for GameCube.",

    requirements: {
        android: "7.0+",
        ram: "4GB",
        cpu: "Snapdragon 660 or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "3GB"
    },

    info:
        "Resident Evil 4 is one of the most popular survival horror games of all time. Play as Leon S. Kennedy in an intense mission filled with action, zombies and dangerous enemies. This version is for GameCube and requires the Dolphin Emulator to play on Android.",

    downloads: [
        {
            name: "Disc 1",
            type: "GameCube",
            url: "https://link-target.net/1275086/HSJX3ZfumcxD"
        },

        {
            name: "Disc 2",
            type: "GameCube",
            url: "https://link-center.net/1275086/6TFzgPbSzea3"
        },

        {
            name: "Dolphin Emulator",
            type: "Emulator",
            url: "https://dl.dolphin-emu.org/releases/2606a/dolphin-2606a.apk"
        }
    ]
},

/* =================================================
   78 - BULLY: SCHOLARSHIP EDITION
================================================= */

{
    id: "bully-scholarship-edition",

    title: "Bully: Scholarship Edition",

    platform: "Wii",

    category: "Action",

    image:
    "images/bully-scholarship-edition.jpg",

    description:
        "Bully: Scholarship Edition for Wii.",

    requirements: {
        android: "Android 5.0+",
        ram: "3GB",
        cpu: "Quad Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "4GB"
    },

    info:
        "Bully: Scholarship Edition is an action-adventure game where you play as Jimmy Hopkins at Bullworth Academy. Complete missions, attend classes, explore the city, and face different challenges. Dolphin Emulator is required to play the Wii version.",

    downloads: [
        {
            name: "Game",
            type: "Wii",
            url: "https://direct-link.net/1275086/bOeo6AyyipS2"
        },

        {
            name: "Dolphin Emulator",
            type: "Android",
            url: "https://dl.dolphin-emu.org/releases/2606a/dolphin-2606a.apk"
        }
    ]
},

/* =================================================
   79 - MORTAL KOMBAT: ARMAGEDDON
================================================= */

{
    id: "mortal-kombat-armageddon",

    title: "Mortal Kombat: Armageddon",

    platform: "Wii",

    category: "Fighting",

    image:
    "images/mortal-kombat-armageddon.jpg",

    description:
        "Mortal Kombat: Armageddon for Wii.",

    requirements: {
        android: "Android 5.0+",
        ram: "3GB",
        cpu: "Quad Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "4GB"
    },

    info:
        "Mortal Kombat: Armageddon is a fighting game featuring a large roster of characters from the Mortal Kombat universe. Choose your fighter, battle against powerful opponents, and experience intense fights. Dolphin Emulator is required to play the Wii version.",

    downloads: [
        {
            name: "Game",
            type: "Wii",
            url: "https://link-target.net/1275086/JQkGd32J2TEE"
        },

        {
            name: "Dolphin Emulator",
            type: "Android",
            url: "https://dl.dolphin-emu.org/releases/2606a/dolphin-2606a.apk"
        }
    ]
},

/* =================================================
   80 - CARS
================================================= */

{
    id: "cars",

    title: "Disney-Pixar Cars",

    platform: "GameCube",

    category: "Racing",

    image:
    "images/cars.jpg",

    description:
        "Cars for GameCube.",

    requirements: {
        android: "Android 5.0+",
        ram: "3GB",
        cpu: "Quad Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "2GB"
    },

    info:
        "Cars is a racing and adventure game based on the Disney Pixar movie. Play as Lightning McQueen and other characters, explore different locations, complete challenges, and race against opponents. Dolphin Emulator is required to play the GameCube version.",

    downloads: [
        {
            name: "Game",
            type: "GameCube",
            url: "https://direct-link.net/1275086/onpZSH3tMG5L"
        },

        {
            name: "Dolphin Emulator",
            type: "Android",
            url: "https://dl.dolphin-emu.org/releases/2606a/dolphin-2606a.apk"
        }
    ]
},

/* =================================================
   81 - MARVEL NEMESIS: RISE OF THE IMPERFECTS
================================================= */

{
    id: "marvel-nemesis-rise-of-the-imperfects",

    title: "Marvel Nemesis: Rise of the Imperfects",

    platform: "GameCube",

    category: "Fighting",

    image:
    "images/marvel-nemesis-rise-of-the-imperfects.jpg",

    description:
        "Marvel Nemesis: Rise of the Imperfects for GameCube.",

    requirements: {
        android: "Android 5.0+",
        ram: "3GB",
        cpu: "Quad Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "2GB"
    },

    info:
        "Marvel Nemesis: Rise of the Imperfects is a fighting game featuring Marvel heroes and villains. Choose your character, battle powerful opponents, and fight in destructible environments. Dolphin Emulator is required to play the GameCube version.",

    downloads: [
        {
            name: "Game",
            type: "GameCube",
            url: "https://link-center.net/1275086/OgOyp3I9P7QS"
        },

        {
            name: "Dolphin Emulator",
            type: "APK",
            url: "https://dl.dolphin-emu.org/releases/2606a/dolphin-2606a.apk"
        }
    ]
},

/* =================================================
   82 - DRAGON BALL Z: BUDOKAI 2
================================================= */

{
    id: "dragon-ball-z-budokai-2",

    title: "Dragon Ball Z: Budokai 2",

    platform: "GameCube",

    category: "Fighting",

    image:
    "images/dragon-ball-z-budokai-2.jpg",

    description:
        "Dragon Ball Z: Budokai 2 for GameCube.",

    requirements: {
        android: "Android 5.0+",
        ram: "3GB",
        cpu: "Quad Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "2GB"
    },

    info:
        "Dragon Ball Z: Budokai 2 is a fighting game based on the Dragon Ball Z anime. Choose your favorite characters, fight powerful opponents, and experience battles inspired by the Dragon Ball Z universe. Dolphin Emulator is required to play the GameCube version.",

    downloads: [
        {
            name: "Game",
            type: "GameCube",
            url: "https://link-hub.net/1275086/bPRyyBqmRWIE"
        },

        {
            name: "Dolphin Emulator",
            type: "APK",
            url: "https://dl.dolphin-emu.org/releases/2606a/dolphin-2606a.apk"
        }
    ]
},

/* =================================================
   83 - DEF JAM: FIGHT FOR NY
================================================= */

{
    id: "def-jam-fight-for-ny",

    title: "Def Jam: Fight for NY",

    platform: "GameCube",

    category: "Fighting",

    image:
    "images/def-jam-fight-for-ny.jpg",

    description:
        "Def Jam: Fight for NY for GameCube.",

    requirements: {
        android: "Android 5.0+",
        ram: "3GB",
        cpu: "Quad Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "2GB"
    },

    info:
        "Def Jam: Fight for NY is a fighting game featuring intense street battles and hip-hop culture. Choose your fighter, use different fighting styles, and battle against powerful opponents. Dolphin Emulator is required to play the GameCube version.",

    downloads: [
        {
            name: "Game",
            type: "GameCube",
            url: "https://link-hub.net/1275086/SPaou7T3PxYZ"
        },

        {
            name: "Dolphin Emulator",
            type: "APK",
            url: "https://dl.dolphin-emu.org/releases/2606a/dolphin-2606a.apk"
        }
    ]
},

/* =================================================
   84 - SPIDER-MAN
================================================= */

{
    id: "spider-man",

    title: "Spider-Man",

    platform: "GameCube",

    category: "Action",

    image:
    "images/spider-man.jpg",

    description:
        "Spider-Man for GameCube.",

    requirements: {
        android: "Android 5.0+",
        ram: "3GB",
        cpu: "Quad Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "2GB"
    },

    info:
        "Spider-Man is an action-adventure game based on the 2002 movie starring Tobey Maguire. Play as Spider-Man, fight enemies, complete missions, and face iconic villains. Dolphin Emulator is required to play the GameCube version.",

    downloads: [
        {
            name: "Game",
            type: "GameCube",
            url: "https://direct-link.net/1275086/YN5UQTjksmkS"
        },

        {
            name: "Dolphin Emulator",
            type: "APK",
            url: "https://dl.dolphin-emu.org/releases/2606a/dolphin-2606a.apk"
        }
    ]
},

/* =================================================
   85 - THE SPONGEBOB SQUAREPANTS MOVIE
================================================= */

{
    id: "the-spongebob-squarepants-movie",

    title: "The SpongeBob SquarePants Movie",

    platform: "GameCube",

    category: "Adventure",

    image:
    "images/the-spongebob-squarepants-movie.jpg",

    description:
        "The SpongeBob SquarePants Movie for GameCube.",

    requirements: {
        android: "Android 5.0+",
        ram: "3GB",
        cpu: "Quad Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "2GB"
    },

    info:
        "The SpongeBob SquarePants Movie is an action-adventure game based on the animated movie. Play as SpongeBob and Patrick, explore different locations, complete missions, and face various challenges. Dolphin Emulator is required to play the GameCube version.",

    downloads: [
        {
            name: "Game",
            type: "GameCube",
            url: "https://direct-link.net/1275086/BB3AzC8AR6oO"
        },

        {
            name: "Dolphin Emulator",
            type: "APK",
            url: "https://dl.dolphin-emu.org/releases/2606a/dolphin-2606a.apk"
        }
    ]
},
/* =================================================
   86 - MINECRAFT: STORY MODE SEASON TWO
================================================= */

{
    id: "minecraft-story-mode-season-two",

    title: "Minecraft: Story Mode - Season Two",

    platform: "Android",

    category: "Adventure",

    image:
    "images/minecraft-story-mode-season-two.jpg",

    description:
        "Minecraft: Story Mode - Season Two for Android.",

    requirements: {
        android: "5.0+",
        ram: "2GB",
        cpu: "Quad Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "5GB"
    },

    info:
        "Minecraft: Story Mode - Season Two is an adventure game from Telltale Games. Experience the complete story with all episodes. This version provides a way to run the game on more current devices with Android 14, Android 15, and Android 16 using VPhoneOS for better compatibility.",

    downloads: [
        {
            name: "APK",
            type: "APK",
            url: "https://link-target.net/1275086/k6RGVHVWEPQv"
        },

        {
            name: "OBB",
            type: "OBB",
            url: "https://link-hub.net/1275086/mKeuF2QjdjPx"
        },

        {
            name: "Telltale Episode Files",
            type: "EPISODES",
            url: "https://drive.google.com/file/d/1BAebyfPeWxPUgPHBVM2_ohtZWl-s-gQ_/view?usp=drivesdk"
        },

        {
            name: "VPhoneOS",
            type: "Play Store",
            url: "https://play.google.com/store/apps/details?id=com.yoyo.snake.rush"
        }
    ]
},
 /* =================================================
   86 - GTA SAN ANDREAS: PORTUGUESE DUBBED 
================================================= */

{
    id: "gta-san-andreas-portuguese-dubbed",

    title: "GTA San Andreas - Portuguese Dubbed ",

    platform: "Android",

    category: "Action",

    image:
    "images/gta-san-andreas-dublado.jpg",

    description:
        "GTA San Andreas for Android, fully dubbed in Brazilian Portuguese . Even the NPCs speak Portuguese, making the experience much more fun and immersive.",

    requirements: {
        android: "6.1+",
        ram: "3GB",
        cpu: "Quad Core or higher",
        gpu: "Adreno, Mali, PowerVR",
        storage: "4GB"
    },

    info:
        "GTA San Andreas is one of the greatest classic open-world games. This version is fully dubbed in Brazilian Portuguese , including NPC dialogue throughout the adventure. For proper installation, it is recommended to use ZArchiver.",

    downloads: [
        {
            name: "Android",
            type: "APK",
            url: "https://direct-link.net/1275086/YFJ1FSvj0Y9T"
        }
    ]
},

/* =================================================
   91 - BROTHERS: A TALE OF TWO SONS
================================================= */

{
    id: "brothers-tale-of-two-sons",

    title: "Brothers: A Tale of Two Sons",

    subtitle: "APK + DATA - All GPUs",

    platform: "Android",

    category: "Adventure",

    image:
        "images/brothers-tale-of-two-sons.jpg",

    description:
        "Brothers: A Tale of Two Sons is an emotional adventure that follows two brothers on a journey to find a cure for their seriously ill father. Explore beautiful environments, solve environmental puzzles, overcome obstacles, and work with both brothers to progress through the story. The game focuses on exploration, cooperation, storytelling, and cinematic presentation.",

    requirements: {
        android: "Android 12+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 4xx+, Mali-T6xx+, PowerVR Rogue or Tegra equivalent",
        storage: "1GB+"
    },

    info:
        "The game uses different builds for different GPU architectures. Select the APK and OBB files that correspond to your device's GPU family. Android 12 and 13 generally provide better compatibility with older builds, while Android 14, 15, and 16 may require VPhoneOS depending on the device and game version.",

    language:
        "English and other languages depending on the game release",

    gpuDownloads: {
        adreno: {
            apk: "https://link-target.net/1275086/O9RCjwsFcZMr",
            obb: "https://link-hub.net/1275086/tZUfEmDOOBVw"
        },

        mali: {
            apk: "https://link-center.net/1275086/s6C1HbBRyiNr",
            obb: "https://link-center.net/1275086/AisxcKjAiHvg"
        },

        powervr: {
            apk: "https://link-target.net/1275086/TeKB9RhStckV",
            obb: "https://link-target.net/1275086/hoHzMjJUkXBx"
        },

        tegra: {
            apk: "https://direct-link.net/1275086/MKZv5jxPjXq9",
            obb: "https://link-target.net/1275086/cpVhZayWPV5f"
        }
    },

    downloads: [
        {
            name: "GPU ADRENO - APK",
            type: "APK",
            url: "https://link-target.net/1275086/O9RCjwsFcZMr"
        },

        {
            name: "GPU ADRENO - OBB",
            type: "OBB",
            url: "https://link-hub.net/1275086/tZUfEmDOOBVw"
        },

        {
            name: "GPU MALI - APK",
            type: "APK",
            url: "https://link-center.net/1275086/s6C1HbBRyiNr"
        },

        {
            name: "GPU MALI - OBB",
            type: "OBB",
            url: "https://link-center.net/1275086/AisxcKjAiHvg"
        },

        {
            name: "GPU POWERVR - APK",
            type: "APK",
            url: "https://link-target.net/1275086/TeKB9RhStckV"
        },

        {
            name: "GPU POWERVR - OBB",
            type: "OBB",
            url: "https://link-target.net/1275086/hoHzMjJUkXBx"
        },

        {
            name: "GPU TEGRA - APK",
            type: "APK",
            url: "https://direct-link.net/1275086/MKZv5jxPjXq9"
        },

        {
            name: "GPU TEGRA - OBB",
            type: "OBB",
            url: "https://link-target.net/1275086/cpVhZayWPV5f"
        }
    ]
},
/* =================================================
   92 - THE WALKING DEAD: SEASON ONE
================================================= */

{
    id: "the-walking-dead-season-one-android-14",

    title: "The Walking Dead: Season One",

    subtitle: "Android 14 - Spanish",

    platform: "Android",

    category: "Adventure",

    image:
        "images/walking-dead-season-one.jpg",

    description:
        "The Walking Dead: Season One is a story-driven adventure game based on the comic book universe. Follow Lee Everett as he tries to survive a world overrun by walkers while protecting Clementine and making difficult decisions throughout the journey. Your choices influence conversations, relationships, and how different parts of the story unfold.",

    requirements: {
        android: "Android 6.0+",
        ram: "2GB+",
        cpu: "Quad-Core 1.4GHz or better",
        gpu: "Adreno 3xx+, Mali-400 series, PowerVR Rogue or Tegra equivalent",
        storage: "2GB+"
    },

    info:
        "This build is adapted for Android 14 and includes separate APK versions for different GPU architectures. Select the version corresponding to your device's GPU family. The game is provided in Spanish. Android 15 and 16 may have additional compatibility issues depending on the device and game build.",

    language:
        "Spanish",

    gpuDownloads: {
        adreno: "LINK_APK_ADRENO",
        mali: "https://link-target.net/1275086/XsVr5ywLbImp",
        powervr: "https://link-hub.net/1275086/Y8j7cI38vKiR",
        tegra: "https://link-target.net/1275086/cZUSTgwTvoS1"
    },

    downloads: [
        {
            name: "GPU MALI - APK",
            type: "APK",
            url: "https://link-target.net/1275086/XsVr5ywLbImp"
        },

        {
            name: "GPU ADRENO - APK",
            type: "APK",
            url: "LINK_APK_ADRENO"
        },

        {
            name: "GPU POWERVR - APK",
            type: "APK",
            url: "https://link-hub.net/1275086/Y8j7cI38vKiR"
        },

        {
            name: "GPU TEGRA - APK",
            type: "APK",
            url: "https://link-target.net/1275086/cZUSTgwTvoS1"
        }
    ]
},

/* =================================================
   93 - REAL RACING 3
================================================= */

{
    id: "real-racing-3",

    title: "Real Racing 3",

    platform: "Android",

    category: "Racing",

    image:
        "images/real-racing-3.jpg",

    description:
        "Real Racing 3 is a realistic racing game featuring officially licensed cars, detailed circuits, competitive events, and physics designed to provide a more authentic driving experience. Race on famous tracks, collect and upgrade vehicles, and compete across a variety of racing events with different classes of cars.",

    requirements: {
        android: "Android 8.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 4xx+, Mali-T6xx+ or equivalent",
        storage: "10GB+"
    },

    info: `
IMPORTANT NOTICE

This version of Real Racing 3 corresponds to the last official version released before changes to the game's online services.

This tutorial is intended to help players install and use the classic version of the game.

This version may have some limitations:

• Offline functionality only.
• No new updates.
• No online events.
• Features that depend on online servers may not work.
• Compatibility may vary depending on the device.

REQUIREMENTS

• ZArchiver or another compatible file manager is recommended.
• Follow the installation tutorial carefully.
• Android 8 through Android 16 may be supported depending on the device and game build.
• An ARM64-v8a device is recommended.
• 32-bit devices may have compatibility issues.
• Do not rename or move the required "data" folder after installation.

Language: Portuguese, Spanish and English.
`,

    language:
        "Portuguese, Spanish and English",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "APK + Data",
            type: "ZIP",
            url: "https://direct-link.net/1275086/VvhfhVYObINf"
        }
    ]
}, 
/* =================================================
   93 - THE WALKING DEAD: MICHONNE
================================================= */

{
    id: "the-walking-dead-michonne-android-multi-gpu",

    title: "The Walking Dead: Michonne",

    subtitle: "Android - Multi GPU Edition",

    platform: "Android",

    category: "Adventure",

    image:
        "images/walking-dead-michonne.jpg",

    description:
        "The Walking Dead: Michonne is a narrative adventure game from Telltale Games. Experience Michonne's story between the comic book events, facing difficult choices, dangerous situations, and emotional moments in a world full of walkers. This edition includes separate versions optimized for different Android GPU architectures.",

    requirements: {
        android: "Android 6.0+",
        ram: "2GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno, Mali, PowerVR or Tegra",
        storage: "3GB+"
    },

    info:
        "This version includes APK + data files separated by GPU type. Choose the correct version according to your device's graphics processor for better compatibility. Supported GPU versions: Adreno, Mali, PowerVR and Tegra. Android 14, 15 and newer systems may require additional compatibility adjustments depending on the device.",

    language:
        "Spanish",

    gpuDownloads: {
        adreno: "LINK_APK_ADRENO",
        mali: "LINK_APK_MALI",
        powervr: "LINK_APK_POWERVR",
        tegra: "LINK_APK_TEGRA"
    },

    downloads: [
        {
            name: "GPU ADRENO - APK + OBB",
            type: "APK + OBB",
            url: "https://direct-link.net/1275086/q1LX36qZje6M"
        },

        {
            name: "GPU MALI - APK + OBB",
            type: "APK + OBB",
            url: "https://link-center.net/1275086/S9lyfDuwpJKC"
        },

        {
            name: "GPU POWERVR - APK + OBB",
            type: "APK + OBB",
            url: "https://direct-link.net/1275086/saNvzdSBHVrx"
        },

        {
            name: "GPU TEGRA - APK + OBB",
            type: "APK + OBB",
            url: "https://link-hub.net/1275086/eO6rhBiBmiBm"
        }
    ]
},
];
