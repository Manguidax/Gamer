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
    description: "A story-driven adventure game where your choices shape the future. Play as Max Caulfield, a young photography student who discovers the ability to rewind time and uses this power to uncover mysteries in Arcadia Bay.",
    requirements: {
        storage: "Around 1.2GB",
        ram: "2GB+",
        system: "Android 9.0+"
    },
    info: "Official Android version requirements may vary depending on the device. Requires a compatible ARM processor and supported GPU. The game features cinematic storytelling, interactive choices, and a unique time manipulation mechanic.",
    downloads: [
        { name: "Android APK", url: "https://direct-link.net/1275086/AYmeqO8ncujq" }
    ]
},

/* 02 - THE WALKING DEAD SEASON TWO (PORTUGUESE SUBTITLES) */
{
    id: "walking-dead-season-two-legendado",
    title: "The Walking Dead: Season Two",
    subtitle: "Classic Version • Portuguese Subtitles",
    platform: "Android",
    category: "Adventure",
    image: "images/walking-dead-season-two.jpg",
    description: "Continue Clementine's journey in the second season of Telltale's award-winning adventure series. Make difficult decisions, interact with survivors, and experience a dramatic story where choices affect the events around you.",
    requirements: {
        storage: "Around 780MB",
        ram: "1GB+",
        system: "Android 2.3.3+"
    },
    info: "This is an older Android version designed mainly for older devices. Requires a compatible ARM CPU and GPU. Performance depends on the device model and Android version. Includes Portuguese subtitles depending on the installed version.",
    downloads: [
        { name: "PORTUGUESE SUBTITLES PT-BR v1.35", url: "https://drive.google.com/file/d/19XL984CZ3wjwtKzyvAIXjhoDD1uRKxLj/view?usp=drivesdk" },
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

/* 03 - THE WALKING DEAD SEASON TWO (UPDATED VERSION) */
{
    id: "walking-dead-season-two-atualizado",
    title: "The Walking Dead: Season Two",
    subtitle: "Updated Version",
    platform: "Android",
    category: "Adventure",
    image: "images/walking-dead-season-two-updated.jpg",
    description: "An updated version of The Walking Dead: Season Two, the cinematic adventure game from Telltale Games. Continue Clementine's journey in a dangerous world where every decision can change the story and the fate of the characters.",
    requirements: {
        storage: "Around 1GB",
        ram: "1GB+",
        system: "Android 4.0+"
    },
    info: "Compatibility may vary depending on the device and Android version. This updated build may work on newer Android systems. Requires a compatible ARM processor and GPU according to the APK version. Language: English (no Portuguese subtitles included).",
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

    category: "Action",

    image:
        "images/amazing-spiderman-2.jpg",

    description:
        "An action-adventure game based on the Spider-Man universe. Explore New York City, fight enemies, complete missions, and experience Spider-Man's abilities in an open-world environment.",

    requirements: {
        android: "Android 6+",
        ram: "2GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 3xx+, Mali equivalent or PowerVR compatible",
        storage: "680MB+"
    },

    info:
        "Recommended for a smoother experience. Compatibility depends on device hardware and APK version. Languages include Portuguese, English, Spanish, and others.",

    downloads: [
        {
            name: "password Is HardTECH",
            type: "",
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
        "A narrative adventure game that tells Chloe Price's story before the events of Life is Strange. Discover her relationship with Rachel Amber through choices and emotional moments.",

    requirements: {
        android: "Android 9+",
        ram: "3GB+",
        cpu: "Octa-Core processor",
        gpu: "Adreno 5xx+, Mali-G series or equivalent",
        storage: "1.2GB+"
    },

    info:
        "Recommended hardware for better performance and graphics quality. Requires a capable device due to its advanced visuals and cinematic gameplay.",

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
        "A high-speed racing game featuring licensed cars, police chases, and intense street races. Compete against rivals and become the most wanted driver.",

    requirements: {
        android: "Android 5+",
        ram: "2GB+",
        cpu: "Quad-Core 1.4GHz or better",
        gpu: "Adreno 3xx+, Mali-400+, or equivalent",
        storage: "690MB+"
    },

    info:
        "Recommended specifications for stable performance. Compatibility may vary depending on device model and Android version.",

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
        "An open-world action adventure set in the Wild West. Experience John Marston's journey through a vast world filled with missions, exploration, and intense battles.",

    requirements: {
        android: "Android 10+",
        ram: "6GB+",
        cpu: "High-performance Snapdragon processor",
        gpu: "Adreno 6xx+ or equivalent high-performance GPU",
        storage: "10GB+"
    },

    info:
        "Requires powerful hardware for stable performance. Compatibility depends on the official Android version or supported emulation method. Languages include Portuguese, Spanish, and English.",

    downloads: [
        {
            name: "Android",
            type: "Official",
            url: "#"
        }
    ]
},


/* =================================================
   08 - GOD OF WAR: GHOST OF SPARTA
================================================= */

{
    id: "god-of-war-ghost-of-sparta",

    title: "God of War: Ghost of Sparta",

    subtitle: "Portuguese Dubbed",

    platform: "PSP",

    category: "Action",

    image:
        "images/god-of-war-ghost-of-sparta.jpg",

    description:
        "An action-adventure game originally released for PSP. Follow Kratos on a journey filled with battles, mythology, puzzles, and epic boss fights.",

    requirements: {
        emulator: "PPSSPP",
        android: "Android 7+",
        ram: "3GB+",
        cpu: "Snapdragon 600 series or better",
        gpu: "Adreno 5xx+, Mali equivalent or better",
        storage: "1.5GB+"
    },

    info:
        "Can be played through the PPSSPP emulator. Recommended settings may vary depending on the device. Language: Portuguese dubbed.",

    downloads: [
        {
            name: "PPSSPP",
            type: "APK",
            url: "https://play.google.com/store/apps/details?id=org.ppsspp.ppsspp"
        },
        {
            name: "GAME DATA",
            type: "ISO / CSO",
            url: "https://link-target.net/1275086/god-of-war-ghost-dublado"
        }
    ]
},


/* =================================================
   09 - NBA 2K20
================================================= */

{
    id: "nba-2k20",

    title: "NBA 2K20 UPDATED",

    platform: "Android",

    category: "Sports",

    version: "99.0.5",

    image:
        "images/nba-2k20.jpg",

    description:
        "A basketball simulation game from the NBA 2K series featuring realistic gameplay, teams, players, and multiple game modes.",

    requirements: {
        android: "Android 7+",
        ram: "4GB+",
        cpu: "Octa-Core processor",
        gpu: "Adreno 5xx+, Mali-G series or equivalent",
        storage: "2.6GB+"
    },

    info:
        "Recommended specifications for smoother gameplay. Compatibility depends on device hardware and installed version. Languages include Portuguese, Spanish, and English.",

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

/* 14 - THE WALKING DEAD SEASON ONE */
{
    id: "walking-dead-season-one",

    title: "The Walking Dead: Season One",

    subtitle: "Updated Version",

    platform: "Android",

    category: "Adventure",

    image: "images/walking-dead-season-one.jpg",

    description:
        "The first season of Telltale's award-winning narrative adventure series. Follow Lee Everett and Clementine through a dramatic journey where every choice can change the story.",

    requirements: {
        android: "Android 7+",
        ram: "2GB+",
        cpu: "Quad-Core processor",
        gpu: "Adreno 3xx+, Mali equivalent or better",
        storage: "1.2GB+"
    },

    info:
        "Recommended specifications for smoother gameplay. Compatibility depends on the installed version and device hardware. Language: English (no Portuguese subtitles included).",

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

    category: "Adventure",

    image: "images/walking-dead-season-three.jpg",

    description:
        "The third season of Telltale's The Walking Dead series. Experience Javier Garcia's story while making difficult choices in a world full of danger and survival challenges.",

    requirements: {
        android: "Android 7+",
        ram: "3GB+",
        cpu: "Quad-Core or Octa-Core processor",
        gpu: "Adreno 4xx+, Mali equivalent or better",
        storage: "900MB+"
    },

    info:
        "Recommended hardware for better performance. Compatibility depends on the game version and device specifications. Language: Portuguese subtitles available depending on the version.",

    downloads: [
        {
            name: "ALL GPU VERSION",
            type: "APK",
            url: "https://link-target.net/1275086/0EiNF4U8LzGL"
        }
    ]
},


/* 16 - THE WALKING DEAD: MICHONNE */
{
    id: "walking-dead-michonne",

    title: "The Walking Dead: Michonne",

    subtitle: "Updated Version",

    platform: "Android",

    category: "Adventure",

    image: "images/walking-dead-michonne.jpg",

    description:
        "A standalone mini-series from Telltale Games following Michonne's story. Explore her past, face dangerous enemies, and make important decisions that affect the narrative.",

    requirements: {
        android: "Android 7+",
        ram: "3GB+",
        cpu: "Quad-Core processor",
        gpu: "Adreno 4xx+, Mali equivalent or better",
        storage: "1GB+"
    },

    info:
        "Updated versions may support newer Android devices. Performance depends on hardware compatibility. Language: English (no Portuguese subtitles included).",

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
/* 17 - MODERN COMBAT 4 */
{
    id: "modern-combat-4",

    title: "Modern Combat 4",

    platform: "Android",

    category: "Action",

    image: "images/modern-combat-4.jpg",

    description:
        "A first-person shooter set in a modern military conflict. Take part in intense missions, use different weapons, fight enemy forces, and experience cinematic action across multiple environments.",

    requirements: {
        android: "Android 7+",
        ram: "2GB+",
        cpu: "Quad-Core 1.4GHz or better",
        gpu: "Adreno 3xx+, Mali-400+ or equivalent",
        storage: "1.4GB+"
    },

    info:
        "Recommended specifications for smoother gameplay on modern Android devices. This is an older game and compatibility may vary depending on the Android version and APK build. Languages may include Portuguese, Spanish, and English.",

    downloads: [
        {
            name: "ADAPTED FOR ANDROID 15",
            type: "Information",
            url: "#"
        },

        {
            name: "APK+OBB",
            type: "ZIP",
            url: "https://link-hub.net/1275086/cRHTFexGfSiG"
        }
    ]
},


/* 18 - TEEN TITANS GO! FIGURE */
{
    id: "teen-titans-go",

    title: "Teen Titans GO! Figure",

    platform: "Android",

    category: "RPG",

    image: "images/teen-titans-go.jpg",

    description:
        "A fun RPG adventure based on the Teen Titans GO! animated series. Collect characters, explore different locations, battle enemies, and build your team while enjoying the show's humorous style.",

    requirements: {
        android: "Android 5+",
        ram: "2GB+",
        cpu: "Quad-Core processor",
        gpu: "Adreno 3xx+, Mali equivalent or better",
        storage: "300MB+"
    },

    info:
        "Recommended specifications for stable gameplay. Compatibility may vary depending on the device and game version. Languages may include Spanish, Portuguese, and English.",

    downloads: [
        {
            name: "APK",
            url: "https://link-target.net/1275086/oTMMdQhsdiic"
        },

        {
            name: "OBB",
            url: "https://link-hub.net/1275086/SUkACnHyODU1"
        }
    ]
},


/* 19 - TEEN TITANS GO! FIGURE 2 */
{
    id: "teen-titans-go-2",

    title: "Teen Titans GO! Figure 2",

    platform: "Android",

    category: "RPG",

    image: "images/teen-titans-go-2.jpg",

    description:
        "The sequel to Teen Titans GO! Figure. Join the Titans on another RPG adventure featuring new locations, characters, battles, and humorous moments inspired by the animated series.",

    requirements: {
        android: "Android 5+",
        ram: "2GB+",
        cpu: "Quad-Core processor",
        gpu: "Adreno 3xx+, Mali equivalent or better",
        storage: "400MB+"
    },

    info:
        "Recommended specifications for smoother gameplay. Compatibility depends on the installed version and device hardware. Languages may include Spanish, Portuguese, and English.",

    downloads: [
        {
            name: "APK",
            url: "https://link-target.net/1275086/pjOZU8nQP4KJ"
        },

        {
            name: "OBB",
            url: "https://link-center.net/1275086/yeHBZG9HT0iP"
        }
    ]
},


/* 20 - BATMAN: ARKHAM ORIGINS */
{
    id: "batman-arkham-origins",

    title: "Batman: Arkham Origins",

    platform: "Android",

    category: "Action",

    image: "images/batman-arkham-origins.jpg",

    description:
        "An action game based on the Batman universe. Take control of Batman, fight dangerous enemies, use different abilities, and protect Gotham City from criminal threats.",

    requirements: {
        android: "Android 6+",
        ram: "2GB+",
        cpu: "Quad-Core 1.4GHz or better",
        gpu: "Adreno 3xx+, Mali-400+ or PowerVR equivalent",
        storage: "1GB+"
    },

    info:
        "Recommended specifications for a smoother experience. This is an older Android title, but compatibility can vary considerably depending on the GPU, Android version, and APK build.",

    downloads: [
        {
            name: "GPU ADRENO APK",
            url: "https://link-center.net/1275086/XaQ3oOOXTg2b"
        },

        {
            name: "GPU ADRENO OBB",
            url: "https://link-hub.net/1275086/oCJyEP4Ttjkm"
        },

        {
            name: "GPU MALI APK",
            url: "https://link-target.net/1275086/G8GvdODWSOcs"
        },

        {
            name: "GPU MALI OBB",
            url: "https://direct-link.net/1275086/dVEMiMcPfcGB"
        },

        {
            name: "GPU POWERVR APK",
            url: "https://direct-link.net/1275086/Zfg4fAPjQYgu"
        },

        {
            name: "GPU POWERVR OBB",
            url: "https://link-hub.net/1275086/VzudWzsa53Zj"
        }
    ]
},
/* 21 - ADVENTURE TIME: CARD WARS */
{
    id: "adventure-time-card-wars",

    title: "Adventure Time: Card Wars",

    platform: "Android",

    category: "Strategy",

    image: "images/adventure-time-card-wars.jpg",

    description:
        "A strategy card game based on the Adventure Time animated series. Build your deck, summon creatures, use powerful cards, and battle opponents in the unique Card Wars universe.",

    requirements: {
        android: "Android 5+",
        ram: "2GB+",
        cpu: "Quad-Core processor",
        gpu: "Adreno 3xx+, Mali equivalent or better",
        storage: "400MB+"
    },

    info:
        "Recommended specifications for a smoother experience. Compatibility may vary depending on the game version and Android device.",

    downloads: [
        {
            name: "APK",
            url: "https://direct-link.net/1275086/EbvbNe6i7QrG"
        },

        {
            name: "OBB",
            url: "https://link-center.net/1275086/cOkTcZJMLFPA"
        }
    ]
},


/* 22 - THE WOLF AMONG US */
{
    id: "wolf-among-us",

    title: "The Wolf Among Us",

    platform: "Android",

    category: "Adventure",

    image: "images/wolf-among-us.jpg",

    description:
        "A cinematic narrative adventure developed by Telltale Games. Play as Bigby Wolf and investigate a series of mysterious events in Fabletown, where your decisions can change the course of the story.",

    requirements: {
        android: "Android 9+",
        ram: "3GB+",
        cpu: "Quad-Core 1.8GHz or better",
        gpu: "Adreno 4xx+, Mali equivalent or better",
        storage: "2.6GB+"
    },

    info:
        "Recommended specifications for stable gameplay. Compatibility depends on the Android version, device hardware, and GPU-specific build.",

    downloads: [
        {
            name: "GPU ADRENO APK",
            url: "https://direct-link.net/1275086/p4vYJLPN6h9O"
        },

        {
            name: "IMPORTANT: OBB DOWNLOAD EXPIRES IN 7 DAYS — IF THE LINK EXPIRES, LEAVE A COMMENT ON THE CHANNEL REQUESTING AN UPDATE — GPU ADRENO OBB",
            url: "https://dl71.apkawards.com/apk/dl10/com.telltalegames.fables100/Adreno/com.telltalegames.fables100.zip"
        },

        {
            name: "GPU MALI APK",
            url: "https://direct-link.net/1275086/p4vYJLPN6h9O"
        },

        {
            name: "IMPORTANT: OBB DOWNLOAD EXPIRES IN 7 DAYS — IF THE LINK EXPIRES, LEAVE A COMMENT ON THE CHANNEL REQUESTING AN UPDATE — GPU MALI OBB",
            url: "https://dl71.apkawards.com/apk/dl10/com.telltalegames.fables100/Mali/com.telltalegames.fables100.zip"
        },

        {
            name: "GPU POWERVR APK",
            url: "https://direct-link.net/1275086/p4vYJLPN6h9O"
        },

        {
            name: "IMPORTANT: OBB DOWNLOAD EXPIRES IN 7 DAYS — IF THE LINK EXPIRES, LEAVE A COMMENT ON THE CHANNEL REQUESTING AN UPDATE — GPU POWERVR OBB",
            url: "https://dl71.apkawards.com/apk/dl10/com.telltalegames.fables100/PowerVR/com.telltalegames.fables100.zip"
        },

        {
            name: "GPU TEGRA APK",
            url: "https://direct-link.net/1275086/p4vYJLPN6h9O"
        },

        {
            name: "IMPORTANT: OBB DOWNLOAD EXPIRES IN 7 DAYS — IF THE LINK EXPIRES, LEAVE A COMMENT ON THE CHANNEL REQUESTING AN UPDATE — GPU TEGRA OBB",
            url: "https://dl71.apkawards.com/apk/dl10/com.telltalegames.fables100/Tegra/com.telltalegames.fables100.zip"
        }
    ]
},


/* 23 - CALL OF DUTY: STRIKE TEAM */
{
    id: "call-of-duty-strike-team",

    title: "Call of Duty: Strike Team",

    platform: "Android",

    category: "Action",

    image: "images/call-of-duty-strike-team.jpg",

    description:
        "A mobile spin-off of the Call of Duty series combining first-person combat with tactical squad gameplay. Command your team, switch between soldiers, and take part in missions across different environments.",

    requirements: {
        android: "Android 6+",
        ram: "2GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 3xx+, Mali-400+ or equivalent",
        storage: "1.5GB+"
    },

    info:
        "Recommended specifications for smoother gameplay. This is an older Android title, so newer Android versions may experience compatibility issues depending on the device and APK build.",

    downloads: [
        {
            name: "APK",
            url: "https://link-hub.net/1275086/67B21PqaslTG"
        },

        {
            name: "OBB",
            url: "https://link-hub.net/1275086/wODx6jFKIfMD"
        }
    ]
},


/* 24 - FORGOTTEN MEMORIES REMASTERED */
{
    id: "forgotten-memories-remastered",

    title: "Forgotten Memories Remastered",

    platform: "Android",

    category: "Horror",

    image: "images/forgotten-memories.jpg",

    description:
        "A survival horror experience focused on exploration, atmosphere, puzzles, and psychological tension. Explore dark environments, uncover hidden secrets, and face terrifying threats.",

    requirements: {
        android: "Android 9+",
        ram: "4GB+",
        cpu: "High-performance Octa-Core processor",
        gpu: "Adreno 5xx+, Mali-G series or equivalent",
        storage: "2GB+"
    },

    info:
        "Recommended for devices with stronger hardware due to the game's detailed graphics and demanding visual effects. Performance may vary depending on the device.",

    downloads: [
        {
            name: "Android APK",
            url: "https://direct-link.net/1275086/L7cAhsC4ZDJt"
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
        "Offline Version",

    platform: "Android",

    category: "Fighting",

    image:
        "images/mortal-kombat.jpg",

    description:
        "A mobile fighting game from the legendary Mortal Kombat series. Build your team of fighters, unlock powerful characters, compete in battles, and experience iconic combat and special moves.",

    requirements: {
        android: "Android 6+",
        ram: "3GB+",
        cpu: "Octa-Core processor",
        gpu: "Adreno 4xx+, Mali equivalent or better",
        storage: "1.5GB+"
    },

    compatibility:
        "Recommended specifications for smoother gameplay. Compatibility may vary depending on the game version and device hardware.",

    language:
        "Portuguese, English and Spanish",

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
            name: "DATA",
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

    category: "Action",

    image:
        "images/gta-vice-city-definitive.jpg",

    description:
        "The Definitive Edition of Grand Theft Auto: Vice City, featuring an enhanced visual presentation, updated graphics, improved controls, and the classic open-world experience set in 1980s Vice City.",

    requirements: {
        android: "Android 11+",
        ram: "6GB+",
        cpu: "High-performance Octa-Core processor",
        gpu: "Adreno 6xx+, Mali-G7xx or equivalent",
        storage: "4GB+"
    },

    compatibility:
        "A demanding game that benefits from a powerful Android device. Performance may vary depending on the processor, GPU, Android version, and installed game build.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {

        adreno: null,

        mali: null,

        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Official",
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

    category: "Action",

    image:
        "images/walk-of-insanity-2.jpg",

    description:
        "A dark action-adventure game featuring intense combat, exploration, dangerous enemies, and a mysterious atmosphere. Fight your way through hostile environments and uncover the secrets behind the world.",

    requirements: {
        android: "Android 8.0+",
        ram: "4GB+",
        cpu: "Octa-Core processor",
        gpu: "Adreno 5xx+, Mali-G series or equivalent",
        storage: "2GB+"
    },

    compatibility:
        "Recommended for Android devices with mid-range or higher hardware. Compatibility and performance may vary depending on the game version and device specifications.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {

        adreno: null,

        mali: null,

        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Official",
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

    category: "Action",

    image:
        "images/the-amazing-spider-man.jpg",

    description:
        "An open-world action-adventure game based on the Spider-Man universe. Swing through New York City, fight criminals, complete missions, and use Spider-Man's abilities to protect the city.",

    requirements: {
        android: "Android 4.0+",
        ram: "2GB+",
        cpu: "Dual-Core 1.5GHz or better",
        gpu: "Adreno 2xx+, Mali-400+ or PowerVR equivalent",
        storage: "2GB+"
    },

    compatibility:
        "This is an older Android title and may have compatibility issues on modern Android versions. Performance depends on the device hardware and game build.",

    language:
        "Portuguese, English and Spanish",

    downloads: [
        {
            name: "Android",
            type: "Official",
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

    category: "Racing",

    image:
        "images/nfs-most-wanted-limited-edition.jpg",

    description:
        "The Limited Edition of Need for Speed: Most Wanted for PC. Race through an open-world city, compete against rival drivers, customize your cars, and escape intense police pursuits.",

    requirements: {
        android: "N/A",
        ram: "6GB+",
        cpu: "Quad-Core 2.0GHz or better",
        gpu: "DirectX 10/11 compatible GPU with 1GB+ VRAM",
        storage: "12GB+"
    },

    compatibility:
        "Designed for PC. When running through Winlator on Android, actual performance depends on the phone's CPU, GPU, drivers, Winlator configuration, and graphics settings.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {

        adreno: null,

        mali: null,

        powervr: null
    },

    downloads: [
        {
            name: "WINLATOR",
            type: "PC EMULATOR",
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

    category: "Racing",

    image:
        "images/cars-fast-as-lightning.jpg",

    description:
        "A fast-paced arcade racing game based on the Disney Pixar Cars universe. Race against iconic characters such as Lightning McQueen and Mater, customize your vehicles, build and upgrade your own Radiator Springs-style town, and compete across colorful tracks inspired by the Cars movies.",

    requirements: {
        android: "Android 6.0+",
        ram: "2GB+",
        cpu: "Quad-Core 1.4GHz or better",
        gpu: "Adreno 3xx+, Mali-400 series or equivalent PowerVR GPU",
        storage: "300MB+"
    },

    compatibility:
        "The game has been discontinued and removed from Google Play. Because it was designed for older Android versions, compatibility on modern devices may vary depending on the Android version, processor, GPU, and game build.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Game File",
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

    category: "Adventure",

    image:
        "images/spongebob-the-cosmic-shake.jpg",

    description:
        "A 3D platforming adventure set in the colorful world of SpongeBob SquarePants. After a mysterious wish causes chaos across the universe, SpongeBob and his friends must travel through bizarre wishworlds, explore different environments, solve puzzles, defeat enemies, and collect resources while trying to restore Bikini Bottom.",

    requirements: {
        android: "Android 10+",
        ram: "6GB+",
        cpu: "High-performance Octa-Core processor",
        gpu: "Adreno 6xx+, Mali-G7xx or equivalent",
        storage: "8GB+"
    },

    compatibility:
        "A demanding 3D game that benefits from a modern Android device with a powerful processor and GPU. Performance may vary depending on the chipset, GPU drivers, Android version, game build, graphics settings, and available storage.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Official",
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

    category: "Action",

    image:
        "images/assassins-creed-bloodlines.jpg",

    description:
        "An action-adventure game developed exclusively for the PSP. The story follows Altaïr after the events of the first Assassin's Creed, as he travels through new locations and faces Templar enemies while continuing his journey as an Assassin. The game combines stealth, exploration, combat, platforming, and cinematic storytelling designed for the PSP.",

    requirements: {
        android: "Android 7.0+",
        ram: "3GB+",
        cpu: "Snapdragon 600 series or equivalent",
        gpu: "Adreno 5xx+, Mali-G series or equivalent",
        storage: "600MB+"
    },

    compatibility:
        "Designed for PSP. On Android, the game requires a PSP emulator such as PPSSPP. Performance depends on the phone's CPU, GPU, emulator version, graphics backend, resolution, and configuration.",

    language:
        "Portuguese, English and Spanish",

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

    category: "Action",

    image:
        "images/gta-san-andreas-definitive.jpg",

    description:
        "A remastered version of Grand Theft Auto: San Andreas featuring upgraded graphics, improved lighting, enhanced character models, updated environments, and modernized controls. Explore Los Santos, San Fierro, and Las Venturas as Carl Johnson returns to his hometown and becomes involved in a large-scale story of crime, family, and survival.",

    requirements: {
        android: "N/A",
        ram: "8GB+",
        cpu: "Intel Core i5-6600K / AMD FX-6300 or better",
        gpu: "GeForce GTX 760 / Radeon R9 280 or better",
        storage: "45GB+"
    },

    compatibility:
        "Designed for PC. The recommended hardware provides a more stable experience at standard PC resolutions and settings. When running through Winlator on Android, actual performance depends on the phone's chipset, GPU drivers, Winlator configuration, graphics settings, and compatibility layer.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "PC",
            type: "Official",
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

    category: "Action",

    image:
        "images/resident-evil-5.jpg",

    description:
        "An action and survival-horror game set in the Resident Evil universe. Chris Redfield and Sheva Alomar investigate a dangerous biological threat in Africa while confronting infected enemies and uncovering the events behind a new outbreak. The game combines third-person shooting, exploration, resource management, and cooperative gameplay.",

    requirements: {
        android: "N/A",
        ram: "6GB+",
        cpu: "Intel Core 2 Quad / AMD Phenom II X4 or better",
        gpu: "GeForce GTX 460 / Radeon HD 6850 or better",
        storage: "15GB+"
    },

    compatibility:
        "Designed for PC. The recommended configuration provides a better experience than the game's basic minimum requirements. When running through Winlator on Android, performance depends heavily on the phone's CPU, GPU, drivers, Winlator configuration, resolution, and graphics settings.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "PC",
            type: "Official",
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

    category: "Action",

    image:
        "images/days-gone.jpg",

    description:
        "An open-world action-adventure game set in a post-apocalyptic world devastated by a mysterious pandemic. Play as Deacon St. John, a former outlaw biker surviving in a dangerous wilderness filled with hostile survivors and large groups of infected creatures. Explore the open world, customize your motorcycle, collect resources, complete missions, and uncover Deacon's story.",

    requirements: {
        android: "N/A",
        ram: "16GB+",
        cpu: "Intel Core i7-4770K / AMD Ryzen 5 1500X or better",
        gpu: "GeForce GTX 1060 6GB / Radeon RX 580 8GB or better",
        storage: "70GB+"
    },

    compatibility:
        "A demanding open-world PC game that benefits from a modern multi-core processor, dedicated graphics card, and sufficient RAM. When running through Winlator on Android, actual performance depends heavily on the phone's chipset, GPU drivers, emulator configuration, resolution, and graphics settings.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "PC",
            type: "Official",
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

    category: "Sports",

    image:
        "images/fifa-16.jpg",

    description:
        "A football simulation game from the FIFA series featuring licensed teams, players, leagues, stadiums, and multiple game modes. FIFA 16 introduces gameplay improvements focused on defensive organization, midfield control, passing, and more realistic match situations.",

    requirements: {
        android: "N/A",
        ram: "8GB+",
        cpu: "Intel Core i5-2550K / AMD FX-8120 or better",
        gpu: "GeForce GTX 660 / Radeon R9 270 or better",
        storage: "15GB+"
    },

    compatibility:
        "Designed for PC. The recommended configuration provides a more comfortable experience than the basic minimum requirements. When running through Winlator on Android, performance depends on the phone's CPU, GPU drivers, compatibility layer, configuration, and graphics settings.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "PC",
            type: "Official",
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

    category: "Racing",

    image:
        "images/nfs-most-wanted-2005.jpg",

    description:
        "A classic arcade racing game from EA that combines high-speed street racing, police pursuits, car customization, and an iconic career mode built around the Blacklist. Compete against rival drivers, earn performance upgrades, and evade increasingly aggressive police chases as you climb toward the top of the Blacklist.",

    requirements: {
        android: "Android 9.0+",
        ram: "6GB+",
        cpu: "Snapdragon 720G / equivalent or better",
        gpu: "Adreno 6xx+, Mali-G5xx or equivalent",
        storage: "3GB+"
    },

    compatibility:
        "Designed for Nintendo GameCube. On Android, the game requires a compatible GameCube emulator such as Dolphin. Recommended hardware is intended for smoother emulation and may still require graphics and resolution adjustments depending on the device.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "GameCube",
            type: "Game",
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

    category: "Adventure",

    image:
        "images/the-walking-dead.jpg",

    description:
        "A story-driven adventure game developed by Telltale Games and set in the universe of The Walking Dead. Follow Lee Everett and Clementine as they travel through a world devastated by a zombie outbreak, making difficult decisions, forming relationships, exploring locations, and facing the consequences of their choices.",

    requirements: {
        android: "N/A",
        ram: "4GB+",
        cpu: "Intel Core 2 Quad / AMD Phenom II X4 or better",
        gpu: "GeForce GTX 550 Ti / Radeon HD 6770 or better",
        storage: "3GB+"
    },

    compatibility:
        "Designed for PC. The recommended configuration provides additional headroom for smoother gameplay. When running through Winlator on Android, performance varies according to the phone's processor, GPU drivers, compatibility layer, resolution, and configuration.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "PC",
            type: "Official",
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

    category: "Adventure",

    image:
        "images/inside.jpg",

    description:
        "A dark cinematic puzzle-platformer created by Playdead. Control a young boy as he explores a mysterious and unsettling world filled with strange environments, dangerous situations, environmental puzzles, and hidden secrets. The game relies heavily on atmosphere, exploration, physics-based puzzles, and visual storytelling.",

    requirements: {
        android: "N/A",
        ram: "4GB+",
        cpu: "Intel Core i5-2500K / AMD FX-8350 or better",
        gpu: "GeForce GTX 660 / Radeon R9 270 or better",
        storage: "2GB+"
    },

    compatibility:
        "Designed for PC. The recommended configuration provides a smoother experience than the game's basic minimum requirements. The Android package listed below is a separately rebuilt version and may have different compatibility characteristics depending on the device.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "INSIDE APK",
            type: "Recompiled Nintendo Switch Version",
            url: "https://linkvertise.com/access/1275086/lYzFvMBynaEW"
        },
        {
            name: "INSIDE PC PRE-INSTALLED",
            type: "PC Version",
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

    category: "Action",

    image:
        "images/bully-anniversary-edition.jpg",

    description:
        "The mobile edition of Rockstar Games' classic open-world action-adventure. Play as Jimmy Hopkins, a rebellious teenager attending Bullworth Academy, as he navigates school life, completes missions, interacts with different groups, explores the campus and surrounding areas, and gets involved in the chaotic conflicts of teenage life. The Anniversary Edition includes the original campaign along with additional content and improvements for mobile devices.",

    requirements: {
        android: "Android 9.0+",
        ram: "4GB+",
        cpu: "Octa-Core 1.8GHz or better",
        gpu: "Adreno 5xx+, Mali-G5xx or equivalent",
        storage: "4GB+"
    },

    compatibility:
        "Performance and compatibility may vary depending on the Android version, chipset, GPU drivers, game build, and available storage. A modern mid-range or higher-performance device is recommended for a smoother experience.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Official",
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

    category: "Sports",

    image:
        "images/nba-2k19.jpg",

    description:
        "A basketball simulation game from the NBA 2K series designed for Android devices. Build your career, play competitive basketball matches, develop your player, and experience a variety of game modes inspired by professional basketball.",

    requirements: {
        android: "Android 7.0+",
        ram: "4GB+",
        cpu: "Octa-Core 1.8GHz or better",
        gpu: "Adreno 5xx+, Mali-G5xx or equivalent",
        storage: "3GB+"
    },

    compatibility:
        "The game was designed for older Android hardware and may have compatibility limitations on newer Android versions. Performance depends on the device chipset, GPU drivers, Android version, and installed game build.",

    language:
        "Portuguese, English and Spanish",

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
            name: "Data",
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

    category: "Sports",

    image:
        "images/copa-toon-goleadores.jpg",

    description:
        "A casual football game featuring characters from the Cartoon Network Toon universe. Play fast-paced matches, compete against different opponents, score goals, and enjoy simple arcade-style football designed for quick and accessible gameplay.",

    requirements: {
        android: "Android 6.0+",
        ram: "2GB+",
        cpu: "Quad-Core 1.4GHz or better",
        gpu: "Adreno 3xx+, Mali-400 series or equivalent PowerVR GPU",
        storage: "700MB+"
    },

    compatibility:
        "This is a lightweight game originally designed for older Android devices. Because the original game is no longer maintained, compatibility may vary on modern Android versions and devices.",

    language:
        "Brazilian Portuguese, Portuguese, English and Spanish",

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
            name: "Data",
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

    category: "Fighting",

    image:
        "images/mortal-kombat-deadly-alliance.jpg",

    description:
        "A classic fighting game from the Mortal Kombat series released for Nintendo GameCube. Choose from a large roster of fighters, master different combat styles, perform special moves and fatalities, and compete across multiple fighting modes in the deadly tournament.",

    requirements: {
        android: "Android 9.0+",
        ram: "6GB+",
        cpu: "Snapdragon 720G / equivalent or better",
        gpu: "Adreno 6xx+, Mali-G5xx or equivalent",
        storage: "2GB+"
    },

    compatibility:
        "Designed for Nintendo GameCube. On Android, the game requires a compatible GameCube emulator such as Dolphin. Performance depends on the phone's CPU, GPU drivers, emulator version, graphics backend, resolution, and configuration.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "GameCube",
            type: "Game",
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

    category: "Action",

    image:
        "images/gta-iii-definitive.jpg",

    description:
        "A remastered version of Grand Theft Auto III optimized for modern platforms. Return to Liberty City as Claude and experience an open-world crime story featuring missions, vehicle driving, exploration, combat, and a large variety of activities across the city. The Definitive Edition features upgraded visuals, improved character models, enhanced lighting, and updated controls.",

    requirements: {
        android: "Android 11+",
        ram: "6GB+",
        cpu: "High-performance Octa-Core processor",
        gpu: "Adreno 6xx+, Mali-G7xx or equivalent",
        storage: "6GB+"
    },

    compatibility:
        "A relatively demanding mobile game that benefits from a modern mid-range or high-end Android device. Performance may vary depending on the chipset, GPU drivers, Android version, game build, graphics settings, and available storage.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Official",
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

    category: "Action",

    image:
        "images/cover-fire.jpg",

    description:
        "A third-person shooting game featuring cinematic missions, multiple playable characters, and different combat scenarios. Build a team of specialized soldiers, take cover, eliminate enemies, complete tactical objectives, and progress through a campaign with a variety of weapons and environments.",

    requirements: {
        android: "Android 7.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 4xx+, Mali-T6xx or equivalent",
        storage: "1GB+"
    },

    compatibility:
        "A relatively lightweight 3D shooter, but performance may vary depending on the Android version, chipset, GPU drivers, game build, and graphics settings. A modern entry-level or mid-range device is recommended for smoother gameplay.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Official",
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

    category: "Racing",

    image:
        "images/drift-ride-2.jpg",

    description:
        "An arcade-style driving game focused on drifting and high-speed racing. Control different cars, perform long drifts, navigate challenging roads, and improve your driving skills while competing for higher scores and better performance.",

    requirements: {
        android: "Android 7.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 4xx+, Mali-T6xx or equivalent",
        storage: "1.5GB+"
    },

    compatibility:
        "Performance may vary depending on the device's processor, GPU, Android version, graphics drivers, and game build. A mid-range Android device is recommended for stable performance.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Official",
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

    category: "Action",

    image:
        "images/sleeping-dogs.jpg",

    description:
        "An open-world action game set in Hong Kong. Play as undercover police officer Wei Shen as he infiltrates dangerous criminal organizations while trying to maintain his cover. The game combines hand-to-hand combat, gunfights, vehicle pursuits, exploration, missions, and a detailed open-world environment.",

    requirements: {
        android: "N/A",
        ram: "4GB+",
        cpu: "Intel Core i5-2400 / AMD FX-6100 or better",
        gpu: "GeForce GTX 560 / Radeon HD 7750 or better",
        storage: "20GB+"
    },

    compatibility:
        "Designed for PC. The recommended configuration provides more performance headroom than the game's basic minimum requirements. When running through Winlator on Android, performance depends heavily on the phone's CPU, GPU drivers, compatibility layer, configuration, resolution, and graphics settings.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "PC",
            type: "Official",
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

    category: "Adventure",

    image:
        "images/the-walking-dead-final-season.jpg",

    description:
        "The final chapter of Telltale's The Walking Dead series follows Clementine as she attempts to build a new home while protecting AJ in a dangerous world. Explore locations, interact with other survivors, make important decisions, solve situations, and experience a story where player choices influence relationships and events.",

    requirements: {
        android: "N/A",
        ram: "8GB+",
        cpu: "Intel Core i5-2500K / AMD FX-8350 or better",
        gpu: "GeForce GTX 660 / Radeon HD 7870 or better",
        storage: "15GB+"
    },

    compatibility:
        "Designed for PC. The game uses a more demanding 3D rendering system than the earlier entries in the series. When running through Winlator on Android, performance depends on the phone's chipset, GPU drivers, compatibility layer, configuration, resolution, and graphics settings.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "PC",
            type: "Official",
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

    category: "Action",

    image:
        "images/9mm-hd-remastered.jpg",

    description:
        "A third-person action shooter inspired by modern police action movies. Take control of a tough police officer involved in dangerous criminal investigations, engage enemies in intense firefights, use different weapons, and progress through cinematic missions in a story-driven campaign.",

    requirements: {
        android: "Android 7.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 4xx+, Mali-T6xx or equivalent",
        storage: "2.5GB+"
    },

    compatibility:
        "This is an older Android game and may have compatibility limitations on newer Android versions. Performance depends on the Android version, processor, GPU drivers, game build, and available storage.",

    language:
        "Portuguese, English and Spanish",

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
            name: "Data",
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

    category: "Adventure",

    image:
        "images/the-adventures-of-tintin.jpg",

    description:
        "An action-adventure game based on The Adventures of Tintin film. Join Tintin, Captain Haddock, and their friends on an exciting journey involving exploration, platforming, puzzles, combat, and cinematic sequences inspired by the movie. Travel through different locations, uncover clues, and experience an adventure filled with mysteries and challenges.",

    requirements: {
        android: "Android 6.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 3xx+, Mali-T6xx or equivalent",
        storage: "2.5GB+"
    },

    compatibility:
        "An older Android game that may have compatibility limitations on newer Android versions. Performance depends on the device chipset, GPU drivers, Android version, game build, and available storage.",

    language:
        "Portuguese, English and Spanish",

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
            name: "Data",
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

    category: "Action",

    image:
        "images/suicide-squad.jpg",

    description:
        "An action game based on the Suicide Squad universe. Take control of characters from the team, fight enemies, complete missions, and progress through a series of fast-paced combat encounters inspired by the movie.",

    requirements: {
        android: "Android 6.0+",
        ram: "2GB+",
        cpu: "Quad-Core 1.4GHz or better",
        gpu: "Adreno 3xx+, Mali-400 series or equivalent",
        storage: "200MB+"
    },

    compatibility:
        "An older Android game that may have compatibility limitations on modern devices. Actual performance depends on the Android version, processor, GPU drivers, and game build.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Game File",
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

    category: "Action",

    image:
        "images/red-dustlands-online.jpg",

    description:
        "An action-adventure survival game featuring an open-world environment and a harsh post-apocalyptic setting. Explore dangerous areas, gather resources, survive hostile encounters, and progress through an environment where exploration and combat play an important role.",

    requirements: {
        android: "Android 9.0+",
        ram: "4GB+",
        cpu: "Octa-Core 1.8GHz or better",
        gpu: "Adreno 5xx+, Mali-G5xx or equivalent",
        storage: "1GB+"
    },

    compatibility:
        "Performance may vary depending on the device chipset, GPU drivers, Android version, game build, graphics settings, and available storage.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Official",
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

    category: "Action",

    image:
        "images/batman-begins.jpg",

    description:
        "An action-adventure game based on the Batman Begins film. Play as Bruce Wayne and Batman as you explore Gotham City, investigate threats, use stealth, engage enemies in close combat, and use Batman's equipment to overcome different challenges inspired by the movie.",

    requirements: {
        android: "Android 9.0+",
        ram: "6GB+",
        cpu: "Snapdragon 720G / equivalent or better",
        gpu: "Adreno 6xx+, Mali-G5xx or equivalent",
        storage: "2.5GB+"
    },

    compatibility:
        "Designed for Nintendo GameCube. On Android, the game requires a compatible GameCube emulator such as Dolphin. Performance depends on the phone's CPU, GPU drivers, emulator version, graphics backend, resolution, and configuration.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "GameCube",
            type: "Game",
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

    category: "Action",

    image:
        "images/terminator-genisys-guardian.jpg",

    description:
        "A third-person action shooter based on the Terminator Genisys universe. Fight against machines and hostile forces, complete combat missions, use different weapons, and experience a campaign inspired by the futuristic conflict between humans and Skynet.",

    requirements: {
        android: "Android 7.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 4xx+, Mali-T6xx or equivalent",
        storage: "2GB+"
    },

    compatibility:
        "An older Android game that may have compatibility issues on newer Android versions. Performance depends on the device chipset, GPU drivers, Android version, game build, and available storage.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "APK+OBB",
            type: "Game File",
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

    category: "Action",

    image:
        "images/naruto-mobile.jpg",

    description:
        "A mobile action game based on the Naruto universe, featuring characters, abilities, combat techniques, and locations inspired by the anime and manga. Build a team of ninja characters, take part in fast-paced battles, unlock abilities, and progress through different missions and challenges.",

    requirements: {
        android: "Android 11+",
        ram: "6GB+",
        cpu: "High-performance Octa-Core processor",
        gpu: "Adreno 6xx+, Mali-G7xx or equivalent",
        storage: "3GB+"
    },

    compatibility:
        "Compatibility and availability may vary depending on the region, Android version, device chipset, GPU drivers, and game version. Some versions may also require specific regional services or account configurations.",

    language:
        "Chinese and Japanese",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Official",
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

    category: "Fighting",

    image:
        "images/naruto-clash-of-ninja-2.jpg",

    description:
        "A fast-paced fighting game based on the Naruto universe and released for Nintendo GameCube. Choose from a roster of familiar ninja characters, use unique techniques and special attacks, and compete in battles inspired by the early Naruto series. The game focuses on accessible combat, character abilities, and competitive matches.",

    requirements: {
        android: "Android 9.0+",
        ram: "6GB+",
        cpu: "Snapdragon 720G / equivalent or better",
        gpu: "Adreno 6xx+, Mali-G5xx or equivalent",
        storage: "600MB+"
    },

    compatibility:
        "Designed for Nintendo GameCube. On Android, the game requires a compatible GameCube emulator such as Dolphin. Performance depends on the phone's CPU, GPU drivers, emulator version, graphics backend, resolution, and configuration.",

    language:
        "Japanese and English",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "GameCube",
            type: "Game",
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

    category: "Adventure",

    image:
        "images/little-nightmares.jpg",

    description:
        "A dark atmospheric adventure and puzzle-platformer where you control Six, a mysterious young girl trapped in a strange and dangerous world. Explore unsettling environments, solve environmental puzzles, avoid terrifying creatures, and uncover the secrets hidden throughout the Maw.",

    requirements: {
        android: "Android 9.0+",
        ram: "4GB+",
        cpu: "Octa-Core 1.8GHz or better",
        gpu: "Adreno 5xx+, Mali-G5xx or equivalent",
        storage: "2.5GB+"
    },

    compatibility:
        "A visually demanding mobile game that benefits from a modern mid-range Android device. Performance may vary depending on the chipset, GPU drivers, Android version, game build, graphics settings, and available storage.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "APK",
            type: "Official",
            url: "https://direct-link.net/1275086/xvvdpHlxmLHh"
        }
    ]
},


/* =================================================
   58 - JOGO PARECIDO COM RED DEAD REDEMPTION
================================================= */

{
    id: "red-dead-redemption-like",

    title: "Red Dead Redemption-Like Game",

    platform: "Android",

    category: "Action",

    image:
        "images/red-dead-redemption-like.jpg",

    description:
        "An Android action-adventure game with a western-inspired setting and gameplay elements reminiscent of open-world western adventures. Explore large environments, take part in action sequences, complete missions, and experience a frontier-style atmosphere on mobile devices.",

    requirements: {
        android: "Android 8.0+",
        ram: "3GB+",
        cpu: "Octa-Core 1.8GHz or better",
        gpu: "Adreno 5xx+, Mali-G5xx or equivalent",
        storage: "1GB+"
    },

    compatibility:
        "Compatibility depends on the specific game build and device hardware. Performance may vary according to the processor, GPU drivers, Android version, graphics settings, and available storage.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "APK",
            type: "Game File",
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

    category: "Sports",

    image:
        "images/nba-2k17-legend-edition-kobe-bryant.jpg",

    description:
        "A special edition of NBA 2K17 celebrating Kobe Bryant and his legendary basketball career. Experience realistic basketball gameplay, competitive matches, player progression, and content dedicated to one of the most influential players in NBA history.",

    requirements: {
        android: "Android 7.0+",
        ram: "4GB+",
        cpu: "Octa-Core 1.8GHz or better",
        gpu: "Adreno 4xx+, Mali-T7xx or equivalent",
        storage: "2GB+"
    },

    compatibility:
        "Originally designed for older Android devices, this game may have compatibility limitations on modern Android versions. Performance depends on the device chipset, GPU drivers, Android version, and installed game build.",

    language:
        "Portuguese, English and Spanish",

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
            name: "Data",
            type: "OBB",
            url: "https://link-center.net/1275086/rl68pXKNL0lB"
        }
    ]
},


/* =================================================
   60 - RESIDENT EVIL 4 DUBBED - PS2
================================================= */

{
    id: "resident-evil-4-dublado-ps2",

    title: "Resident Evil 4 Dubbed",

    platform: "PS2",

    category: "Action",

    image:
        "images/resident-evil-4-dublado-ps2.jpg",

    description:
        "The classic Resident Evil 4 experience on PlayStation 2, following Leon S. Kennedy on a dangerous mission filled with action, survival-horror elements, exploration, and intense encounters. This version features Portuguese dubbing and can be played on Android using a compatible PlayStation 2 emulator.",

    requirements: {
        android: "Android 9.0+",
        ram: "4GB+",
        cpu: "Snapdragon 720G / equivalent or better",
        gpu: "Adreno 6xx+, Mali-G5xx or equivalent",
        storage: "4GB+"
    },

    compatibility:
        "Designed for PlayStation 2. On Android, the game requires a compatible PS2 emulator. Actual performance depends on the phone's CPU, GPU drivers, emulator version, graphics backend, internal resolution, and configuration. Some devices may require graphical adjustments for stable performance.",

    language:
        "Portuguese Dubbed",

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

    category: "Adventure",

    image:
        "images/sally-face-v1-5-50.jpg",

    description:
        "Sally Face is a story-driven adventure game with a mysterious atmosphere and an intriguing narrative. Follow Sally and his friends as they investigate strange events, explore unusual locations, and uncover the secrets behind a series of mysterious occurrences. This Android version is based on the v1.5.50 MOD release.",

    requirements: {
        android: "Android 7.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 4xx+, Mali-T6xx or equivalent",
        storage: "1GB+"
    },

    compatibility:
        "The game was designed for older Android hardware, but compatibility may vary on modern devices depending on the Android version, chipset, GPU drivers, and installed game build.",

    language:
        "Portuguese and English",

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
   62 - ROBOCOP v3.0.6 UPDATED
================================================= */

{
    id: "robocop-v3-0-6-atualizado",

    title: "RoboCop v3.0.6 Updated",

    platform: "Android",

    category: "Action",

    image:
        "images/robocop.jpg",

    description:
        "RoboCop v3.0.6 is an action shooter based on the RoboCop universe. Take control of the iconic law enforcement cyborg, fight hostile enemies, complete combat missions, and progress through a campaign inspired by the RoboCop franchise. This version is an updated Android release.",

    requirements: {
        android: "Android 7.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 4xx+, Mali-T6xx or equivalent",
        storage: "3GB+"
    },

    compatibility:
        "An older Android game that may have compatibility limitations on newer versions of Android. Performance depends on the device chipset, GPU drivers, Android version, game build, and available storage.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "APK",
            type: "APK",
            url: "https://link-hub.net/1275086/PDsbkL1bjLh6"
        },

        {
            name: "Data",
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

    category: "Action",

    image:
        "images/dragon-ball-tap-battle.jpg",

    description:
        "Dragon Ball Tap Battle is a fast-paced mobile fighting game set in the Dragon Ball universe. Take control of familiar characters, engage in quick battles, perform attacks and special techniques through touch controls, and compete in intense one-on-one matches.",

    requirements: {
        android: "Android 6.0+",
        ram: "2GB+",
        cpu: "Quad-Core 1.4GHz or better",
        gpu: "Adreno 3xx+, Mali-400 series or equivalent",
        storage: "500MB+"
    },

    compatibility:
        "This is an older Android game and may have compatibility limitations on newer Android versions. Performance depends on the device chipset, GPU drivers, Android version, and game build.",

    language:
        "Japanese and English",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "Android",
            type: "Game File",
            url: "https://direct-link.net/1275086/XGHklSNWyt97"
        }
    ]
},


/* =================================================
   64 - THE AMAZING SPIDER-MAN 2 V1.2.8d
================================================= */

{
    id: "amazing-spiderman-2-v1-2-8d",

    title: "The Amazing Spider-Man 2 v1.2.8d",

    platform: "Android",

    category: "Action",

    image:
        "images/amazing-spiderman-2-v1-2-8d.jpg",

    description:
        "The Amazing Spider-Man 2 v1.2.8d is an open-world action game based on the Spider-Man universe. Play as Spider-Man, explore a large version of New York City, swing between buildings, fight criminals, complete missions, and use Spider-Man's abilities in fast-paced combat.",

    requirements: {
        android: "Android 6.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 3xx+, Mali-T6xx or equivalent",
        storage: "2GB+"
    },

    compatibility:
        "This is an older and relatively demanding Android game. Compatibility may vary on newer Android versions depending on the chipset, GPU drivers, game build, and available storage.",

    info:
        "The listed package contains separate APK and OBB files. Supported languages may vary depending on the installed game build, including Portuguese, English, Spanish, and other languages.",

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

    category: "Action",

    image:
        "images/the-fall-3-zombie-survival.jpg",

    description:
        "The Fall 3: Zombie Survival is a survival-action game set in a dangerous world overrun by zombies. Explore hostile environments, fight infected enemies, collect resources, manage your equipment, and survive increasingly dangerous encounters while progressing through the game.",

    requirements: {
        android: "Android 7.1+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 4xx+, Mali-T6xx or equivalent",
        storage: "3GB+"
    },

    compatibility:
        "Compatibility may vary depending on the Android version, processor, GPU drivers, game build, graphics settings, and available storage. A modern entry-level or mid-range device is recommended for a smoother experience.",

    info:
        "A zombie survival game featuring exploration, combat, resource management, and survival mechanics. Available language options may vary depending on the installed version.",

    downloads: [
        {
            name: "APK",
            type: "Game File",
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

    category: "Action",

    image:
        "images/hijacker-jack-famous-rich-wanted.jpg",

    description:
        "Hijacker Jack: Famous. Rich. Wanted. is an interactive FMV action game built around a cinematic storyline and player choices. Follow Jack as he becomes involved in a dangerous and unpredictable journey where decisions influence the direction of the story. The game combines live-action video sequences, action scenes, exploration, and interactive choices.",

    requirements: {
        android: "Android 7.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 4xx+, Mali-T6xx or equivalent",
        storage: "3GB+"
    },

    compatibility:
        "The game relies heavily on video playback and may require additional performance and storage compared with simpler Android titles. Compatibility can vary depending on the Android version, chipset, GPU drivers, and installed game build.",

    info:
        "An interactive FMV adventure with cinematic scenes and branching choices. Available language options may vary depending on the installed version.",

    downloads: [
        {
            name: "APK",
            type: "Game File",
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

    category: "Action",

    image:
        "images/god-of-war-mobile-edition.jpg",

    description:
        "God of War Mobile Edition is an unofficial Android adaptation inspired by the God of War franchise. The game features action-focused gameplay, combat encounters, and elements inspired by the original series. On modern Android devices, compatibility may require a virtualized Android environment depending on the device and game build.",

    requirements: {
        android: "Android 7.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 4xx+, Mali-T6xx or equivalent",
        storage: "500MB+"
    },

    info:
        "God of War Mobile Edition is a version developed by FAM and inspired by the well-known God of War franchise. On newer Android devices, VPhoneOS may provide better compatibility depending on the game build and device configuration. Actual performance may vary. Available languages may include English and others depending on the installed version.",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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

    category: "Action",

    image:
        "images/gangstar-rio-city-of-saints.jpg",

    description:
        "Gangstar Rio: City of Saints is an open-world action game developed by Gameloft and set in Rio de Janeiro. Explore different areas of the city, complete story missions, engage in combat, drive vehicles, participate in pursuits, and experience a crime-focused adventure across a large open-world environment.",

    requirements: {
        android: "Android 6.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 3xx+, Mali-T6xx or equivalent",
        storage: "2GB+"
    },

    info:
        "An older Gameloft open-world game that may have compatibility limitations on modern Android versions. Performance depends on the device chipset, GPU drivers, Android version, game build, and available storage. Available languages may include Portuguese, English, Spanish, and others depending on the installed version.",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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

    category: "Action",

    image:
        "images/spider-man-unlimited.jpg",

    description:
        "Spider-Man Unlimited is an action-packed endless runner developed by Gameloft. Play as Spider-Man, swing through dynamic environments, fight enemies, collect resources, and unlock different versions of the character while facing villains and challenges inspired by the Spider-Man universe.",

    requirements: {
        android: "Android 6.0+",
        ram: "2GB+",
        cpu: "Quad-Core 1.4GHz or better",
        gpu: "Adreno 3xx+, Mali-400 series or equivalent",
        storage: "500MB+"
    },

    info:
        "The game was designed for older Android devices and may have compatibility limitations on newer versions of Android. Performance depends on the device chipset, GPU drivers, Android version, and installed game build. Available languages may include Portuguese, English, Spanish, and others depending on the version.",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "APK",
            type: "50MB",
            url: "https://link-center.net/1275086/CPbbeRyID5SM"
        }
    ]
},


/* =================================================
   70 - ASSASSIN'S CREED: BACKSTAB
================================================= */

{
    id: "assassins-creed-backstab",

    title: "Assassin's Creed: Backstab",

    platform: "Android",

    category: "Action",

    image:
        "images/assassins-creed-backstab.jpg",

    description:
        "Assassin's Creed: Backstab is an action-adventure game developed by Gameloft. Play as Henry Blake, a man seeking revenge after a tragic betrayal, as he travels through different locations, completes missions, fights enemies, and explores a world inspired by the Assassin's Creed universe.",

    requirements: {
        android: "Android 6.0+",
        ram: "2GB+",
        cpu: "Quad-Core 1.4GHz or better",
        gpu: "Adreno 3xx+, Mali-400 series or equivalent",
        storage: "1.5GB+"
    },

    info:
        "This is an older Android game and may require additional compatibility adjustments on modern devices. Performance depends on the Android version, chipset, GPU drivers, game build, and available storage. Language availability may vary depending on the installed version.",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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
        }
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
        "Cars: Fast as Lightning is an arcade racing game based on the Disney Pixar Cars universe. Race with Lightning McQueen and other iconic characters, compete across colorful tracks, customize and upgrade vehicles, and build your own racing-themed town while progressing through different events and challenges.",

    requirements: {
        android: "Android 6.0+",
        ram: "2GB+",
        cpu: "Quad-Core 1.4GHz or better",
        gpu: "Adreno 3xx+, Mali-400 series or equivalent",
        storage: "1GB+"
    },

    info:
        "The game has been discontinued and was designed for older Android hardware. On modern Android devices, VPhoneOS may provide better compatibility depending on the device and game build. Performance can vary according to the Android version, chipset, GPU drivers, and virtualization configuration.",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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
        "Infinity Blade is an action RPG focused on intense real-time sword combat. Fight powerful enemies and bosses, improve your character and equipment, explore a visually detailed fantasy world, and progress through a cinematic adventure built around fast-paced melee battles.",

    requirements: {
        android: "Android 7.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 4xx+, Mali-T6xx or equivalent",
        storage: "2GB+"
    },

    info:
        "The original Infinity Blade series was designed for older mobile hardware and may require compatibility adjustments on modern Android devices. Actual compatibility depends on the game build, Android version, chipset, GPU drivers, and available storage.",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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
        "Oddworld: Stranger's Wrath is an action-adventure game that combines third-person exploration with first-person shooting mechanics. Play as the mysterious Stranger, explore the strange world of Oddworld, hunt wanted targets, collect resources, and use a unique arsenal of living ammunition during intense encounters.",

    requirements: {
        android: "Android 7.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 4xx+, Mali-T6xx or equivalent",
        storage: "3GB+"
    },

    info:
        "The Android release may use different packages depending on the device GPU. Select the appropriate Adreno, Mali, or PowerVR version when available. VPhoneOS may also provide an alternative compatibility environment on some modern Android devices. Performance depends on the chipset, GPU drivers, Android version, and game build.",

    gpuDownloads: {
        adreno: "https://link-center.net/1275086/jH5LpTnDRwaB",
        mali: "https://link-hub.net/1275086/8toEkOi5e7Nw",
        powervr: "https://link-target.net/1275086/hKY3Nx2OLWB3"
    },

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
        "Real Steel is a robot fighting game inspired by the Real Steel movie universe. Build and customize powerful fighting robots, enter intense one-on-one battles, unlock new machines and upgrades, and compete to become the ultimate robot boxing champion.",

    requirements: {
        android: "Android 7.0+",
        ram: "2GB+",
        cpu: "Quad-Core 1.4GHz or better",
        gpu: "Adreno 3xx+, Mali-400 series or equivalent",
        storage: "1.5GB+"
    },

    info:
        "The game was designed for older Android devices and may have compatibility limitations on newer versions of Android. VPhoneOS may provide an alternative environment for improved compatibility on some modern devices. Performance depends on the device chipset, GPU drivers, Android version, and game build.",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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
        "American Farming 2 is a farming simulation game focused on managing and developing your own agricultural operation. Drive farming machinery, prepare fields, grow crops, manage resources, and expand your farm while taking care of different agricultural activities.",

    requirements: {
        android: "Android 8.0+",
        ram: "4GB+",
        cpu: "Octa-Core 1.8GHz or better",
        gpu: "Adreno 5xx+, Mali-G5xx or equivalent",
        storage: "3GB+"
    },

    info:
        "A 3D farming simulation that benefits from a modern mid-range Android device. Performance may vary depending on the processor, GPU drivers, Android version, game build, graphics settings, and available storage.",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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
        "LEGO Marvel Super Heroes is an action-adventure game featuring a large roster of Marvel superheroes and villains. Play as iconic characters, use their unique abilities, explore different locations, solve LEGO-based puzzles, fight enemies, and complete missions inspired by the Marvel universe.",

    requirements: {
        android: "Android 7.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 4xx+, Mali-T6xx or equivalent",
        storage: "3GB+"
    },

    info:
        "This is an older Android game and may have compatibility limitations on newer Android versions. Performance depends on the device chipset, GPU drivers, Android version, game build, and available storage.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "APK",
            type: "APK",
            url: "https://link-target.net/1275086/LpzCefzcFmJz"
        }
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
        "Asphalt Xtreme is an off-road arcade racing game developed by Gameloft. Drive powerful vehicles across extreme environments, race through dirt tracks and challenging terrain, perform spectacular jumps and drifts, and compete in fast-paced events using a variety of off-road machines.",

    requirements: {
        android: "Android 7.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 4xx+, Mali-T6xx or equivalent",
        storage: "2GB+"
    },

    info:
        "The game was designed for older Android hardware and may have compatibility limitations on newer devices. Performance depends on the Android version, chipset, GPU drivers, game build, graphics settings, and available storage.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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
        "Marvel's Spider-Man: Miles Morales is a superhero action-adventure experience centered on Miles Morales. Use his unique spider abilities, move through the city, fight enemies, perform acrobatic attacks, and take on missions inspired by the Spider-Man universe.",

    requirements: {
        android: "Android 10+",
        ram: "6GB+",
        cpu: "High-performance Octa-Core processor",
        gpu: "Adreno 6xx+, Mali-G7xx or equivalent",
        storage: "5GB+"
    },

    info:
        "The Android package may have compatibility characteristics different from official console or PC versions. Actual performance depends on the game build, Android version, chipset, GPU drivers, graphics settings, and available storage.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

    downloads: [
        {
            name: "APK",
            type: "Android",
            url: "https://link-target.net/1275086/WAVSJwPY1ECx"
        }
    ]
},


/* =================================================
   79 - RESIDENT EVIL 4
================================================= */

{
    id: "resident-evil-4-gamecube",

    title: "Resident Evil 4",

    platform: "GameCube",

    category: "Action",

    image:
        "images/resident-evil-4.jpg",

    description:
        "Resident Evil 4 is a landmark survival-horror action game originally released for Nintendo GameCube. Play as Leon S. Kennedy on a dangerous mission involving a mysterious threat, hostile enemies, exploration, resource management, and intense third-person combat. This version is designed for GameCube emulation on Android.",

    requirements: {
        android: "Android 9.0+",
        ram: "6GB+",
        cpu: "Snapdragon 720G / equivalent or better",
        gpu: "Adreno 6xx+, Mali-G5xx or equivalent",
        storage: "4GB+"
    },

    info:
        "Designed for Nintendo GameCube. On Android, the game requires a compatible GameCube emulator such as Dolphin. Performance depends on the phone's CPU, GPU drivers, emulator version, graphics backend, internal resolution, and configuration. Some devices may require graphical adjustments for stable performance.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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
   80 - BULLY: SCHOLARSHIP EDITION
================================================= */

{
    id: "bully-scholarship-edition",

    title: "Bully: Scholarship Edition",

    platform: "Wii",

    category: "Action",

    image:
        "images/bully-scholarship-edition.jpg",

    description:
        "Bully: Scholarship Edition is an open-world action-adventure game set at Bullworth Academy. Play as Jimmy Hopkins, a rebellious student navigating school life, completing missions, attending classes, exploring the surrounding areas, interacting with different characters, and dealing with rival groups throughout the story.",

    requirements: {
        android: "Android 9.0+",
        ram: "6GB+",
        cpu: "Snapdragon 720G / equivalent or better",
        gpu: "Adreno 6xx+, Mali-G5xx or equivalent",
        storage: "4GB+"
    },

    info:
        "Designed for Nintendo Wii. On Android, the game requires a compatible Wii/GameCube emulator such as Dolphin. Performance depends on the phone's CPU, GPU drivers, emulator version, graphics backend, internal resolution, and configuration.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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
   81 - MORTAL KOMBAT: ARMAGEDDON
================================================= */

{
    id: "mortal-kombat-armageddon",

    title: "Mortal Kombat: Armageddon",

    platform: "Wii",

    category: "Fighting",

    image:
        "images/mortal-kombat-armageddon.jpg",

    description:
        "Mortal Kombat: Armageddon is a fighting game featuring a large roster of characters from the Mortal Kombat universe. Choose your fighter, compete in intense battles, use special moves, and experience a variety of combat modes while facing powerful opponents in the fight for survival.",

    requirements: {
        android: "Android 9.0+",
        ram: "6GB+",
        cpu: "Snapdragon 720G / equivalent or better",
        gpu: "Adreno 6xx+, Mali-G5xx or equivalent",
        storage: "4GB+"
    },

    info:
        "Designed for Nintendo Wii. On Android, the game requires a compatible Wii/GameCube emulator such as Dolphin. Performance depends on the device chipset, GPU drivers, emulator version, graphics backend, internal resolution, and configuration.",

    language:
        "English and other languages depending on the game release",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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
   82 - DISNEY-PIXAR CARS
================================================= */

{
    id: "cars",

    title: "Disney-Pixar Cars",

    platform: "GameCube",

    category: "Racing",

    image:
        "images/cars.jpg",

    description:
        "Disney-Pixar Cars is a racing and adventure game based on the animated movie. Play as Lightning McQueen and other characters, explore locations inspired by Radiator Springs, compete in races and challenges, unlock new events, and experience an arcade-style adventure based on the Cars universe.",

    requirements: {
        android: "Android 9.0+",
        ram: "6GB+",
        cpu: "Snapdragon 720G / equivalent or better",
        gpu: "Adreno 6xx+, Mali-G5xx or equivalent",
        storage: "3GB+"
    },

    info:
        "Designed for Nintendo GameCube. On Android, the game requires a compatible GameCube emulator such as Dolphin. Performance depends on the phone's CPU, GPU drivers, emulator version, graphics backend, internal resolution, and configuration.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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
   83 - MARVEL NEMESIS: RISE OF THE IMPERFECTS
================================================= */

{
    id: "marvel-nemesis-rise-of-the-imperfects",

    title: "Marvel Nemesis: Rise of the Imperfects",

    platform: "GameCube",

    category: "Fighting",

    image:
        "images/marvel-nemesis-rise-of-the-imperfects.jpg",

    description:
        "Marvel Nemesis: Rise of the Imperfects is a superhero fighting game featuring Marvel heroes and villains alongside original characters known as the Imperfects. Fight across interactive and destructible environments, use special abilities, and compete in intense battles against powerful opponents.",

    requirements: {
        android: "Android 9.0+",
        ram: "6GB+",
        cpu: "Snapdragon 720G / equivalent or better",
        gpu: "Adreno 6xx+, Mali-G5xx or equivalent",
        storage: "3GB+"
    },

    info:
        "Designed for Nintendo GameCube. On Android, the game requires a compatible GameCube emulator such as Dolphin. Performance depends on the phone's CPU, GPU drivers, emulator version, graphics backend, internal resolution, and configuration.",

    language:
        "Portuguese, English and Spanish",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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
   85 - DRAGON BALL Z: BUDOKAI 2
================================================= */

{
    id: "dragon-ball-z-budokai-2",

    title: "Dragon Ball Z: Budokai 2",

    platform: "GameCube",

    category: "Fighting",

    image:
        "images/dragon-ball-z-budokai-2.jpg",

    description:
        "Dragon Ball Z: Budokai 2 is a fighting game based on the Dragon Ball Z universe. Choose from a variety of iconic characters, master powerful techniques, unleash devastating special attacks, and battle opponents across different game modes. The game combines traditional fighting mechanics with a strategic single-player experience inspired by the Dragon Ball Z storyline.",

    requirements: {
        android: "Android 9.0+",
        ram: "6GB+",
        cpu: "Snapdragon 720G / equivalent or better",
        gpu: "Adreno 6xx+, Mali-G5xx or equivalent",
        storage: "3GB+"
    },

    info:
        "Originally developed for Nintendo GameCube. On Android, the game requires a compatible GameCube emulator such as Dolphin Emulator. Performance depends on the phone's CPU, GPU drivers, emulator version, graphics backend, internal resolution, and emulator configuration.",

    language:
        "English and other languages depending on the game release",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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
   86 - DEF JAM: FIGHT FOR NY
================================================= */

{
    id: "def-jam-fight-for-ny",

    title: "Def Jam: Fight for NY",

    platform: "GameCube",

    category: "Fighting",

    image:
        "images/def-jam-fight-for-ny.jpg",

    description:
        "Def Jam: Fight for NY is a street-fighting game that combines intense combat with hip-hop culture. Build your fighter, choose from different fighting styles, learn powerful moves, and battle rival crews across a story-driven campaign. The game features a large roster of fighters, interactive environments, and a variety of combat techniques.",

    requirements: {
        android: "Android 9.0+",
        ram: "6GB+",
        cpu: "Snapdragon 720G / equivalent or better",
        gpu: "Adreno 6xx+, Mali-G5xx or equivalent",
        storage: "3GB+"
    },

    info:
        "Originally developed for Nintendo GameCube. On Android, the game requires a compatible GameCube emulator such as Dolphin Emulator. Performance depends on the phone's CPU, GPU drivers, emulator version, graphics backend, internal resolution, and configuration.",

    language:
        "English and other languages depending on the game release",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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
   87 - SPIDER-MAN
================================================= */

{
    id: "spider-man",

    title: "Spider-Man",

    platform: "GameCube",

    category: "Action",

    image:
        "images/spider-man.jpg",

    description:
        "Spider-Man is an action-adventure game inspired by the 2002 Spider-Man movie. Play as Spider-Man, swing through the city, fight criminals and supervillains, complete story missions, and use a variety of web-based abilities during combat and exploration. The game combines superhero action with platforming and cinematic sequences.",

    requirements: {
        android: "Android 9.0+",
        ram: "6GB+",
        cpu: "Snapdragon 720G / equivalent or better",
        gpu: "Adreno 6xx+, Mali-G5xx or equivalent",
        storage: "3GB+"
    },

    info:
        "Originally developed for Nintendo GameCube. On Android, the game requires a compatible GameCube emulator such as Dolphin Emulator. Performance depends on the phone's CPU, GPU drivers, emulator version, graphics backend, internal resolution, and configuration.",

    language:
        "English and other languages depending on the game release",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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
   88 - THE SPONGEBOB SQUAREPANTS MOVIE
================================================= */

{
    id: "the-spongebob-squarepants-movie",

    title: "The SpongeBob SquarePants Movie",

    platform: "GameCube",

    category: "Adventure",

    image:
        "images/the-spongebob-squarepants-movie.jpg",

    description:
        "The SpongeBob SquarePants Movie is an action-adventure game based on the animated movie. Play as SpongeBob and Patrick as they travel through Bikini Bottom and other locations, complete platforming challenges, fight enemies, collect items, and progress through a story inspired by the movie. The game combines exploration, combat, puzzles, and classic SpongeBob humor.",

    requirements: {
        android: "Android 9.0+",
        ram: "6GB+",
        cpu: "Snapdragon 720G / equivalent or better",
        gpu: "Adreno 6xx+, Mali-G5xx or equivalent",
        storage: "3GB+"
    },

    info:
        "Originally developed for Nintendo GameCube. On Android, the game requires a compatible GameCube emulator such as Dolphin Emulator. Performance depends on the phone's CPU, GPU drivers, emulator version, graphics backend, internal resolution, and configuration.",

    language:
        "English and other languages depending on the game release",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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
   89 - MINECRAFT: STORY MODE - SEASON TWO
================================================= */

{
    id: "minecraft-story-mode-season-two",

    title: "Minecraft: Story Mode - Season Two",

    platform: "Android",

    category: "Adventure",

    image:
        "images/minecraft-story-mode-season-two.jpg",

    description:
        "Minecraft: Story Mode - Season Two is a narrative-driven adventure game developed by Telltale Games and set in the Minecraft universe. Follow Jesse and their companions through a new story filled with exploration, dialogue choices, puzzles, dangerous encounters, and important decisions that can affect how the adventure unfolds. The complete season includes all episodes and continues the story from the first season.",

    requirements: {
        android: "Android 7.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 4xx+, Mali-T6xx+ or equivalent",
        storage: "5GB+"
    },

    info:
        "The original Android version was designed for older Android devices. Compatibility with modern Android versions may vary depending on the device and game build. On Android 14, 15, and 16, VPhoneOS may be required in some cases to improve compatibility and allow older game builds to run.",

    language:
        "English and other languages depending on the game release",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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
   90 - GTA SAN ANDREAS: PORTUGUESE DUBBED
================================================= */

{
    id: "gta-san-andreas-portuguese-dubbed",

    title: "GTA San Andreas - Portuguese Dubbed",

    platform: "Android",

    category: "Action",

    image:
        "images/gta-san-andreas-dublado.jpg",

    description:
        "Grand Theft Auto: San Andreas is an open-world action game set in the fictional state of San Andreas. Follow Carl Johnson, also known as CJ, as he returns to Los Santos and becomes involved in a large story involving gangs, family, rival organizations, and the criminal underworld. This version features Brazilian Portuguese dubbing, including spoken dialogue for characters and NPCs, providing a more immersive experience for Portuguese-speaking players.",

    requirements: {
        android: "Android 7.0+",
        ram: "3GB+",
        cpu: "Quad-Core 1.5GHz or better",
        gpu: "Adreno 3xx+, Mali-400 series or equivalent PowerVR GPU",
        storage: "4GB+"
    },

    info:
        "This version includes Brazilian Portuguese dubbing and is based on the classic Android release of GTA San Andreas. Compatibility may vary depending on the Android version, processor, GPU, and game build. ZArchiver or another compatible file manager may be useful when extracting and organizing game data files.",

    language:
        "Brazilian Portuguese",

    gpuDownloads: {
        adreno: null,
        mali: null,
        powervr: null
    },

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
];