(function () {
  "use strict";

  const defaults = [
    { id: 1, pair: 2, side: "FACE", title: "BÃ©bÃ© Dyno Codex", kicker: "Le gardien de lâ€™imaginaire entre en scÃ¨ne.", description: "Petit dragon bleu, grande mission : protÃ©ger les idÃ©es avant quâ€™elles ne deviennent rÃ©elles. Il ouvre la famille avec lâ€™Ã©nergie de ceux qui osent crÃ©er.", titleEn: "Baby Dyno Codex", kickerEn: "The guardian of imagination enters the story.", descriptionEn: "A little blue dragon with a great mission: protecting ideas before they become real. He opens the family story with the energy of those who dare to create.", media: "assets/cards/bebe-dyno-face.png", mediaEn: "assets/cards-en/baby-dyno-front-en.png" },
    { id: 2, pair: 1, side: "DOS", title: "DerriÃ¨re BÃ©bÃ© Dyno", kicker: "La bravoure possÃ¨de aussi un envers.", description: "Retourner la carte rÃ©vÃ¨le le membre du staff, celui qui veille dans lâ€™ombre et porte lâ€™histoire jusque dans les dÃ©tails.", titleEn: "Behind Baby Dyno", kickerEn: "Courage also has another side.", descriptionEn: "Turning the card reveals the staff member who watches from the shadows and carries the story through every detail.", media: "assets/cards/bebe-dyno-dos.png", mediaEn: "assets/cards-en/baby-dyno-back-en.png" },
    { id: 3, pair: 4, side: "FACE", title: "The Boss", kicker: "Le fauteuil nâ€™est jamais vide.", description: "Une prÃ©sence, une dÃ©cision, une nouvelle idÃ©e : The Boss reprÃ©sente lâ€™autoritÃ© crÃ©ative et la responsabilitÃ© de donner une direction au rÃªve.", titleEn: "The Boss", kickerEn: "The chair is never truly empty.", descriptionEn: "A presence, a decision, a new idea: The Boss embodies creative authority and the responsibility of giving the dream a direction.", media: "assets/cards/boss-face.png", mediaEn: "assets/cards-en/boss-front-en.png" },
    { id: 4, pair: 3, side: "DOS", title: "Le revers du pouvoir", kicker: "Diriger, câ€™est aussi porter ce que les autres ne voient pas.", description: "Le dos du fauteuil raconte la fonction derriÃ¨re le symbole. Le pouvoir devient travail, vigilance et promesse tenue.", titleEn: "The Other Side of Power", kickerEn: "Leading also means carrying what others cannot see.", descriptionEn: "The back of the chair reveals the work behind the symbol. Power becomes effort, vigilance and a promise kept.", media: "assets/cards/boss-dos.png", mediaEn: "assets/cards-en/boss-back-en.png" },
    { id: 5, pair: 6, side: "FACE", title: "Eve", kicker: "Une lumiÃ¨re se lÃ¨ve dans la famille.", description: "Eve avance comme une apparition dorÃ©e. Elle apporte la grÃ¢ce, lâ€™intuition et cette force douce qui transforme lâ€™espace autour dâ€™elle.", titleEn: "Eve", kickerEn: "A new light rises within the family.", descriptionEn: "Eve moves like a golden apparition. She brings grace, intuition and the quiet strength that transforms everything around her.", media: "assets/cards/eve-face.png", mediaEn: "assets/cards-en/eve-front-en.png" },
    { id: 6, pair: 5, side: "DOS", title: "Les ailes dâ€™Eve", kicker: "La lumiÃ¨re continue quand le regard se dÃ©tourne.", description: "De dos, Eve rejoint le staff ABDZ. Ses ailes rappellent quâ€™un personnage ne disparaÃ®t jamais vraiment : il change seulement de point de vue.", titleEn: "Eveâ€™s Wings", kickerEn: "The light continues when the gaze turns away.", descriptionEn: "From behind, Eve joins the ABDZ staff. Her wings remind us that a character never truly disappears: only the point of view changes.", media: "assets/cards/eve-dos.png", mediaEn: "assets/cards-en/eve-back-en.png" },
    { id: 7, pair: 8, side: "FACE", title: "Lâ€™IrÃ©elle", kicker: "Elle vit dans lâ€™espace entre le rÃªve et le monde.", description: "Lâ€™IrÃ©elle refuse de choisir entre Ã©lÃ©gance et mystÃ¨re. Elle entre dans la sÃ©rie comme une question : que devient une idÃ©e lorsquâ€™on lui donne un visage ?", titleEn: "Unreal", kickerEn: "She lives between the dream and the world.", descriptionEn: "Unreal refuses to choose between elegance and mystery. She enters the series as a question: what does an idea become when it is given a face?", media: "assets/cards/ireelle-face.png", mediaEn: "assets/cards-en/unreal-front-en.png" },
    { id: 8, pair: 7, side: "DOS", title: "Le reflet de Lâ€™IrÃ©elle", kicker: "Le miroir garde une part du secret.", description: "Quand la carte se retourne, la silhouette devient trace. Le miroir et les chaussures racontent une prÃ©sence qui vient de passer â€” ou qui sâ€™apprÃªte Ã  revenir.", titleEn: "Unrealâ€™s Reflection", kickerEn: "The mirror keeps part of the secret.", descriptionEn: "When the card turns, the silhouette becomes a trace. The mirror and the shoes reveal a presence that has just passedâ€”or is about to return.", media: "assets/cards/ireelle-dos.png", mediaEn: "assets/cards-en/unreal-back-en.png" },
    { id: 9, pair: 10, side: "FACE", title: "Pika", kicker: "La douceur rejoint lâ€™aventure.", description: "Pika apporte lâ€™attachement, la fidÃ©litÃ© et lâ€™instinct. Dans la Famille ABDZ, les plus petites prÃ©sences peuvent devenir les plus grandes forces.", titleEn: "Pika", kickerEn: "Tenderness joins the adventure.", descriptionEn: "Pika brings affection, loyalty and instinct. In the ABDZ Family, the smallest presences can become the greatest strengths.", media: "assets/cards/pika-face.jpg", mediaEn: "assets/cards-en/pika-front-en.png" },
    { id: 10, pair: 9, side: "DOS", title: "Le courage de Pika", kicker: "MÃªme de dos, elle veille sur la famille.", description: "Pika porte les couleurs du staff. Son revers raconte la confiance, la protection et ce lien silencieux qui ne demande aucune explication.", titleEn: "Pikaâ€™s Courage", kickerEn: "Even from behind, she watches over the family.", descriptionEn: "Pika wears the staff colors. Her reverse side tells a story of trust, protection and a silent bond that needs no explanation.", media: "assets/cards/pika-dos.png", mediaEn: "assets/cards-en/pika-back-en.png" }
  ];

  const generalDefaults = {
    heroTitle: "ABDZ FAMILY",
    heroCopy: "Chaque carte montre un visage.\nChaque dos ouvre une histoire.",
    letterTitle: "AU MONDE,",
    letterCopy: "Jâ€™ai crÃ©Ã© une famille qui nâ€™existait nulle part.\n\nChaque carte possÃ¨de un visage et un envers. Chaque personnage porte une allure, une mÃ©moire, une contradiction.\n\nJe ne vous prÃ©sente pas un jeu figÃ©. Je vous ouvre une sÃ©rie vivante : douze Ã©pisodes pour rencontrer cette famille et entrer dans son histoire.\n\nLes images changeront, les films entreront, les textes grandiront. Mais le geste restera le mÃªme : regarder plus longtemps, retourner la carte et laisser une histoire apparaÃ®tre.\n\nBienvenue dans la Famille ABDZ.\nAICHA â€” ABDZ",
    familyMessageTitle: "NOTRE PRÃ‰SENTATION FAMILLE",
    familyMessageCopy: "Â« Peu importe oÃ¹ la vie vous mÃ¨ne, sachez reconnaÃ®tre votre vraie famille. Elle ne partage pas forcÃ©ment votre chair, votre sang ou votre nom. Mais si elle vous voit vraiment, vous accepte tel que vous Ãªtes, vous Ã©coute, vous aime et vous soutient, alors ne cherchez plus : vous avez trouvÃ© votre famille. Â»\n\nÂ« La famille nâ€™est pas toujours celle dont on hÃ©rite. Câ€™est parfois celle qui nous reconnaÃ®t. Â»",
    familyMessageSignature: "ABDZ FAMILY â€” Une Ã©quipe. Une vision. Un rÃªve. Une famille.",
    finaleTitle: "Ã€ VOUS Dâ€™ENTRER.",
    finaleCopy: "Regardez. Retournez la carte.\nChoisissez un personnage.\nRacontez ce quâ€™il rÃ©veille.",
    heroTitleEn: "ABDZ FAMILY",
    heroCopyEn: "Every card reveals a face.\nEvery reverse side opens a story.",
    letterTitleEn: "TO THE WORLD,",
    letterCopyEn: "I created a family that existed nowhere else.\n\nEvery card has a face and a reverse side. Every character carries a presence, a memory and a contradiction.\n\nThis is not a fixed game. It is a living series: twelve episodes to meet this family and enter its story.\n\nThe images will change, films will arrive and the stories will grow. But the gesture will remain the same: look longer, turn the card and let a story appear.\n\nWelcome to ABDZ FAMILY.\nAICHA â€” ABDZ",
    familyMessageTitleEn: "OUR FAMILY PRESENTATION",
    familyMessageCopyEn: "â€œWherever life takes you, learn to recognize your true family. They may not share your flesh, your blood or your name. But if they truly see you, accept you as you are, listen to you, love you and support you, then look no further: you have found your family.â€\n\nâ€œFamily is not always the one we inherit. Sometimes, it is the one that recognizes us.â€",
    familyMessageSignatureEn: "ABDZ FAMILY â€” One team. One vision. One dream. One family.",
    finaleTitleEn: "NOW ITâ€™S YOUR TURN.",
    finaleCopyEn: "Watch. Turn the card.\nChoose a character.\nTell the story it awakens."
  };

  const videoDefaults = Array.from({ length: 12 }, (_, index) => {
    const posters = [
      "assets/cards/bebe-dyno-face.png",
      "assets/cards/boss-face.png",
      "assets/cards/eve-face.png",
      "assets/cards/ireelle-face.png",
      "assets/cards/pika-face.jpg",
      "assets/cards/famille-face.png"
    ];
    return {
      id: index + 1,
      title: `Ã‰pisode ${String(index + 1).padStart(2, "0")}`,
      summary: "Une nouvelle histoire de la Famille ABDZ. Ajoutez ici votre rÃ©sumÃ© et votre vidÃ©o.",
      titleEn: `Episode ${String(index + 1).padStart(2, "0")}`,
      summaryEn: "A new ABDZ FAMILY story. Add your English summary and video here.",
      poster: posters[index % posters.length]
    };
  });

  const $ = (selector, root = document) => root.querySelector(selector);
  const resolveAsset = (path) => `${document.body.dataset.systemRoot || ""}${path}`;
  const pick = (item, key) => currentLanguage === "en" ? (item[`${key}En`] || item[key]) : item[key];
  const grid = $("#character-grid");
  const videoGrid = $("#video-episode-grid");
  const dialog = $("#episode-dialog");
  const videoDialog = $("#video-dialog");
  const editor = $("#editor");
  const shade = $("#editor-shade");
  const toast = $("#toast");
  const storageKey = "abdz-famille-saison-1-textes-v1";
  const generalStorageKey = "abdz-famille-saison-1-general-v2";
  const videoStorageKey = "abdz-famille-saison-1-videos-v1";
  const characterOrderKey = "abdz-family-character-order-v1";
  const languageKey = "abdz-family-language-v1";
  const passportSubmissionsKey = "abdz-family-passport-submissions-v1";
  const passportAccessKey = "abdz-family-passport-access-v1";
  let episodes = loadTextContent();
  let general = loadGeneralContent();
  let videoEpisodes = loadVideoContent();
  let characterOrder = loadCharacterOrder();
  let currentLanguage = localStorage.getItem(languageKey) === "en" ? "en" : "fr";
  let activeId = 1;
  let activeVideoId = 1;
  let pendingMedia = null;
  let pendingMediaEn = null;
  let pendingBanner = null;
  let pendingBannerEn = null;
  let pendingVideoPoster = null;
  let pendingVideoFile = null;
  let draggedCharacterId = null;
  let justDragged = false;
  let passportFaceFile = null;
  let passportBackFile = null;
  let dbPromise;
  const mediaUrls = new Map();

  function loadTextContent() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      if (!Array.isArray(saved)) return structuredClone(defaults);
      return defaults.map((base) => {
        const item = { ...base, ...(saved.find((entry) => entry.id === base.id) || {}), media: base.media, mediaEn: base.mediaEn };
        if ((item.id === 7 || item.id === 8) && /ir[Ã©e]elle/i.test(item.titleEn || "")) item.titleEn = base.titleEn;
        if (item.id === 7 || item.id === 8) item.descriptionEn = (item.descriptionEn || base.descriptionEn).replace(/L[â€™']Ir[Ã©e]elle/gi, "Unreal");
        return item;
      });
    } catch (_) {
      return structuredClone(defaults);
    }
  }

  function saveTextContent() {
    const textOnly = episodes.map(({ id, title, kicker, description, titleEn, kickerEn, descriptionEn }) => ({ id, title, kicker, description, titleEn, kickerEn, descriptionEn }));
    localStorage.setItem(storageKey, JSON.stringify(textOnly));
  }

  function loadVideoContent() {
    try {
      const saved = JSON.parse(localStorage.getItem(videoStorageKey));
      if (!Array.isArray(saved)) return structuredClone(videoDefaults);
      return videoDefaults.map((base) => ({ ...base, ...(saved.find((item) => Number(item.id) === base.id) || {}), poster: base.poster }));
    } catch (_) {
      return structuredClone(videoDefaults);
    }
  }

  function saveVideoContent() {
    localStorage.setItem(videoStorageKey, JSON.stringify(videoEpisodes.map(({ id, title, summary, titleEn, summaryEn }) => ({ id, title, summary, titleEn, summaryEn }))));
  }

  function loadGeneralContent() {
    try {
      const saved = JSON.parse(localStorage.getItem(generalStorageKey)) || {};
      if (saved.letterCopy && saved.letterCopy.includes("dix Ã©pisodes pour rencontrer cette famille, une carte Ã  la fois")) {
        saved.letterCopy = generalDefaults.letterCopy;
      }
      if (!saved.heroTitle || saved.heroTitle === "FAMILLE ABDZ") saved.heroTitle = "ABDZ FAMILY";
      return { ...generalDefaults, ...saved };
    } catch (_) {
      return { ...generalDefaults };
    }
  }

  function saveGeneralContent() {
    localStorage.setItem(generalStorageKey, JSON.stringify(general));
  }

  function loadCharacterOrder() {
    const fallback = [3, 9, 5, 1, 7];
    try {
      const saved = JSON.parse(localStorage.getItem(characterOrderKey));
      return Array.isArray(saved) && fallback.every((id) => saved.includes(id)) ? saved.filter((id) => fallback.includes(id)) : fallback;
    } catch (_) {
      return fallback;
    }
  }

  function saveCharacterOrder() {
    localStorage.setItem(characterOrderKey, JSON.stringify(characterOrder));
    setSaveStatus("Ordre des personnages enregistrÃ©");
  }

  function characterFaceId(id) {
    const item = episodes.find((entry) => entry.id === Number(id));
    return item?.side === "DOS" ? item.pair : item?.id;
  }

  function characterDisplayNumber(id) {
    const numbers = { 3: 1, 9: 2, 5: 3, 1: 4, 7: 5 };
    return numbers[characterFaceId(id)] || 1;
  }

  async function moveCharacter(id, direction) {
    const faceId = characterFaceId(id);
    const from = characterOrder.indexOf(faceId);
    const to = Math.max(0, Math.min(characterOrder.length - 1, from + direction));
    if (from < 0 || from === to) return;
    characterOrder.splice(from, 1);
    characterOrder.splice(to, 0, faceId);
    saveCharacterOrder();
    await renderEpisodes();
  }

  function openDb() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open("abdz-famille-media-v1", 1);
      request.onupgradeneeded = () => request.result.createObjectStore("episodes");
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    return dbPromise;
  }

  async function getStoredMedia(id) ÷v¶‰žËkºwµçe˜€¡µ•‘¥…UÉ±Ì¹¡…Ì¡­•ä¤¤UI0¹É•Ù½­•=‰©•ÑUI0¡µ•‘¥…UÉ±Ì¹•Ð¡­•ä¤¤ì(€€€½¹ÍÐ¥µœ€ô€¡Í•±•Ñ½È¤ì(€€€¥˜€ …™¥±”¤ì(€€€€€¥µœ¹É•µ½Ù•ÑÑÉ¥‰ÕÑ” ‰ÍÉŒˆ¤ì(€€€€€É•ÑÕÉ¸ì(€€€ô(€€€½¹ÍÐÕÉ°€ôUI0¹É•…Ñ•=‰©•ÑUI0¡™¥±”¤ì(€€€µ•‘¥…UÉ±Ì¹Í•Ð¡­•ä°ÕÉ°¤ì(€€€¥µœ¹ÍÉŒ€ôÕÉ°ì(€ô((€™Õ¹Ñ¥½¸Õ¹±½­A…ÍÍÁ½ÉÐ ¤ì(€€€½¹ÍÐ•¹Ñ•É•€ô€ ˆÁ…ÍÍÁ½ÉÐµ½‘”ˆ¤¹Ù…±Õ”¹ÑÉ¥´ ¤ì(€€€½¹ÍÐÍÑ…ÑÕÌ€ô€ ˆÁ…ÍÍÁ½ÉÐµ…Ñ”µÍÑ…ÑÕÌˆ¤ì(€€€¥˜€¡•¹Ñ•É•€„ôô•ÑA…ÍÍÁ½ÉÑ•ÍÍ½‘” ¤¤ì(€€€€€ÍÑ…ÑÕÌ¹Ñ•áÑ½¹Ñ•¹Ð€ô€‰¡ÌÉ•™ÕÏ¤¸•µ…¹‘•èÙ½ÑÉ”A…ÍÍ•Á½ÉÐ	hƒ€Q¡”	½ÍÌ¸ˆì(€€€€€É•ÑÕÉ¸ì(€€€ô(€€€€ ˆÁ…ÍÍÁ½ÉÐµÉ•…Ñ½Èˆ¤¹¡¥‘‘•¸€ô™…±Í”ì(€€€€ ˆÁ…ÍÍÁ½ÉÐµ…Ñ”ˆ¤¹¡¥‘‘•¸€ôÑÉÕ”ì(€€€ÍÑ…ÑÕÌ¹Ñ•áÑ½¹Ñ•¹Ð€ô€ˆˆì(€€€€ ˆÁ…ÍÍÁ½ÉÐµ¹…µ”ˆ¤¹™½ÕÌ ¤ì(€ô((€…Íå¹Œ™Õ¹Ñ¥½¸ÍÕ‰µ¥ÑA…ÍÍÁ½ÉÐ¡•Ù•¹Ð¤ì(€€€•Ù•¹Ð¹ÁÉ•Ù•¹Ñ•™…Õ±Ð ¤ì(€€€½¹ÍÐÍÑ…ÑÕÌ€ô€ ˆÁ…ÍÍÁ½ÉÐµÍÕ‰µ¥ÐµÍÑ…ÑÕÌˆ¤ì(€€€¥˜€ …Á…ÍÍÁ½ÉÑ…•¥±”ñð€…Á…ÍÍÁ½ÉÑ	…­¥±”¤ì(€€€€€ÍÑ…ÑÕÌ¹Ñ•áÑ½¹Ñ•¹Ð€ô€‰©½ÕÑ•è½‰±¥…Ñ½¥É•µ•¹ÐÕ¹”¥µ…”‘”™…”•ÐÕ¹”¥µ…”‘”‘½Ì¸ˆì(€€€€€É•ÑÕÉ¸ì(€€€ô(€€€½¹ÍÐ¥Ñ•´€ôì(€€€€€¥è…Ñ”¹¹½Ü ¤°(€€€€€¹…µ”è€ ˆÁ…ÍÍÁ½ÉÐµ¹…µ”ˆ¤¹Ù…±Õ”¹ÑÉ¥´ ¤°(€€€€€É½±”è€ ˆÁ…ÍÍÁ½ÉÐµÉ½±”ˆ¤¹Ù…±Õ”¹ÑÉ¥´ ¤°(€€€€€ÅÕ…±¥Ñ¥•Ìè€ ˆÁ…ÍÍÁ½ÉÐµÅÕ…±¥Ñ¥•Ìˆ¤¹Ù…±Õ”¹ÑÉ¥´ ¤°(€€€€€Ý•…­¹•ÍÍ•Ìè€ ˆÁ…ÍÍÁ½ÉÐµÝ•…­¹•ÍÍ•Ìˆ¤¹Ù…±Õ”¹ÑÉ¥´ ¤°(€€€€€ÅÕ½Ñ”è€ ˆÁ…ÍÍÁ½ÉÐµÅÕ½Ñ”ˆ¤¹Ù…±Õ”¹ÑÉ¥´ ¤°(€€€€€ÍÑ…ÑÕÌè€‰Á•¹‘¥¹œˆ°(€€€€€ÍÕ‰µ¥ÑÑ•‘Ðè¹•Ü…Ñ” ¤¹Ñ½%M=MÑÉ¥¹œ ¤(€€€ôì(€€€¥˜€ …¥Ñ•´¹¹…µ”ñð€…¥Ñ•´¹É½±”ñð€…¥Ñ•´¹ÅÕ…±¥Ñ¥•Ìñð€…¥Ñ•´¹Ý•…­¹•ÍÍ•Ìñð€…¥Ñ•´¹ÅÕ½Ñ”ñð€„ ˆÁ…ÍÍÁ½ÉÐµ½¹Í•¹Ðˆ¤¹¡•­•¤ì(€€€€€ÍÑ…ÑÕÌ¹Ñ•áÑ½¹Ñ•¹Ð€ô€‰½µÁ³¥Ñ•èÑ½ÕÌ±•Ì¡…µÁÌ•Ð½¹™¥Éµ•è³Še…ÕÑ½É¥Í…Ñ¥½¸‘•Ì¥µ…•Ì¸ˆì(€€€€€É•ÑÕÉ¸ì(€€€ô(€€€…Ý…¥ÐÍ•ÑMÑ½É•‘5•‘¥„¡Á…ÍÍÁ½ÉÐµ™…”´‘í¥Ñ•´¹¥‘õ€°Á…ÍÍÁ½ÉÑ…•¥±”¤ì(€€€…Ý…¥ÐÍ•ÑMÑ½É•‘5•‘¥„¡Á…ÍÍÁ½ÉÐµ‰…¬´‘í¥Ñ•´¹¥‘õ€°Á…ÍÍÁ½ÉÑ	…­¥±”¤ì(€€€½¹ÍÐ¥Ñ•µÌ€ô±½…‘A…ÍÍÁ½ÉÑMÕ‰µ¥ÍÍ¥½¹Ì ¤ì(€€€¥Ñ•µÌ¹ÁÕÍ ¡¥Ñ•´¤ì(€€€Í…Ù•A…ÍÍÁ½ÉÑMÕ‰µ¥ÍÍ¥½¹Ì¡¥Ñ•µÌ¤ì(€€€€ ˆÁ…ÍÍÁ½ÉÐµ™½É´ˆ¤¹É•Í•Ð ¤ì(€€€Á…ÍÍÁ½ÉÑ…•¥±”€ô¹Õ±°ì(€€€Á…ÍÍÁ½ÉÑ	…­¥±”€ô¹Õ±°ì(€€€Í¡½ÝA…ÍÍÁ½ÉÑAÉ•Ù¥•Ý%µ…”¡¹Õ±°°€ˆÁ…ÍÍÁ½ÉÐµ™…”µÁÉ•Ù¥•Üˆ°€‰Á…ÍÍÁ½ÉÐµÁÉ•Ù¥•Üµ™…”ˆ¤ì(€€€Í¡½ÝA…ÍÍÁ½ÉÑAÉ•Ù¥•Ý%µ…”¡¹Õ±°°€ˆÁ…ÍÍÁ½ÉÐµ‰…¬µÁÉ•Ù¥•Üˆ°€‰Á…ÍÍÁ½ÉÐµÁÉ•Ù¥•Üµ‰…¬ˆ¤ì(€€€ÕÁ‘…Ñ•A…ÍÍÁ½ÉÑAÉ•Ù¥•Ü ¤ì(€€€ÍÑ…ÑÕÌ¹Ñ•áÑ½¹Ñ•¹Ð€ô€‰…ÉÑ”•¹Ù½ç¥”¸±±”É•ÍÑ”¥¹Ù¥Í¥‰±”©ÕÍÅ×Šg€±„Ù…±¥‘…Ñ¥½¸‘”Q¡”	½ÍÌ¸ˆì(€€€…Ý…¥ÐÉ•¹‘•ÉA…ÍÍÁ½ÉÑ‘µ¥¹EÕ•Õ” ¤ì(€ô((€…Íå¹Œ™Õ¹Ñ¥½¸Á…ÍÍÁ½ÉÑ%µ…•UÉ°¡¥°Í¥‘”¤ì(€€€½¹ÍÐ­•ä€ôÁ…ÍÍÁ½ÉÐ´‘íÍ¥‘•ô´‘í¥‘õ€ì(€€€½¹ÍÐÍÑ½É•€ô…Ý…¥Ð•ÑMÑ½É•‘5•‘¥„¡­•ä¤ì(€€€¥˜€ …ÍÑ½É•¤É•ÑÕÉ¸€ˆˆì(€€€½¹ÍÐÕÉ±-•ä€ôÁ…ÍÍÁ½ÉÐµ…±±•Éä´‘íÍ¥‘•ô´‘í¥‘õ€ì(€€€¥˜€¡µ•‘¥…UÉ±Ì¹¡…Ì¡ÕÉ±-•ä¤¤UI0¹É•Ù½­•=‰©•ÑUI0¡µ•‘¥…UÉ±Ì¹•Ð¡ÕÉ±-•ä¤¤ì(€€€½¹ÍÐÕÉ°€ôUI0¹É•…Ñ•=‰©•ÑUI0¡ÍÑ½É•¹‰±½ˆ¤ì(€€€µ•‘¥…UÉ±Ì¹Í•Ð¡ÕÉ±-•ä°ÕÉ°¤ì(€€€É•ÑÕÉ¸ÕÉ°ì(€ô((€…Íå¹Œ™Õ¹Ñ¥½¸É•¹‘•ÉÁÁÉ½Ù•‘A…ÍÍÁ½ÉÑ…É‘Ì ¤ì(€€€½¹ÍÐ…±±•Éä€ô€ ˆÁ…ÍÍÁ½ÉÐµ…ÁÁÉ½Ù•µ…±±•Éäˆ¤ì(€€€½¹ÍÐ…ÁÁÉ½Ù•€ô±½…‘A…ÍÍÁ½ÉÑMÕ‰µ¥ÍÍ¥½¹Ì ¤¹™¥±Ñ•È ¡¥Ñ•´¤€ôø¥Ñ•´¹ÍÑ…ÑÕÌ€ôôô€‰…ÁÁÉ½Ù•ˆ¤ì(€€€…±±•Éä¹¥¹¹•É!Q50€ô€ˆˆì(€€€¥˜€ ……ÁÁÉ½Ù•¹±•¹Ñ ¤ì(€€€€€…±±•Éä¹¥¹¹•É!Q50€ô€œñ‘¥Ø±…ÍÌô‰Á…ÍÍÁ½ÉÐµ•µÁÑäˆù1•ÌÁÉ•µ§¡É•Ì…ÉÑ•Ì…ÁÁÉ½ÕÛ¥•ÌÁ…ÈQ¡”	½ÍÌ…ÁÁ…É‡¹ÑÉ½¹Ð¥¤¸ð½‘¥Øøœì(€€€€€É•ÑÕÉ¸ì(€€€ô(€€€™½È€¡½¹ÍÐ¥Ñ•´½˜…ÁÁÉ½Ù•¤ì(€€€€€½¹ÍÐ™…•UÉ°€ô…Ý…¥ÐÁ…ÍÍÁ½ÉÑ%µ…•UÉ°¡¥Ñ•´¹¥°€‰™…”ˆ¤ì(€€€€€½¹ÍÐ‰…­UÉ°€ô…Ý…¥ÐÁ…ÍÍÁ½ÉÑ%µ…•UÉ°¡¥Ñ•´¹¥°€‰‰…¬ˆ¤ì(€€€€€½¹ÍÐ…É€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‰…ÉÑ¥±”ˆ¤ì(€€€€€…É¹±…ÍÍ9…µ”€ô€‰Á…ÍÍÁ½ÉÐµµ•µ‰•Èµ…Éˆì(€€€€€…É¹Ñ…‰%¹‘•à€ô€Àì(€€€€€…É¹‘…Ñ…Í•Ð¹Í¥‘”€ô€‰™…”ˆì(€€€€€…É¹¥¹¹•É!Q50€ô€ñ¥µœÍÉŒôˆ‘í™…•UÉ±ôˆ…±Ðô‰…ÉÑ”‘”€‘í•Í…Á•!Ñµ°¡¥Ñ•´¹¹…µ”¥ôˆøñ‘¥Øøñ Ìø‘í•Í…Á•!Ñµ°¡¥Ñ•´¹¹…µ”¥ôð½ ÌøñÀø‘í•Í…Á•!Ñµ°¡¥Ñ•´¹É½±”¥ôð½Àøð½‘¥Øù€ì(€€€€€½¹ÍÐ™±¥À€ô€ ¤€ôøì(€€€€€€€½¹ÍÐ‰…¬€ô…É¹‘…Ñ…Í•Ð¹Í¥‘”€ôôô€‰™…”ˆì(€€€€€€€…É¹‘…Ñ…Í•Ð¹Í¥‘”€ô‰…¬€ü€‰‰…¬ˆ€è€‰™…”ˆì(€€€€€€€€ ‰¥µœˆ°…É¤¹ÍÉŒ€ô‰…¬€ü‰…­UÉ°€è™…•UÉ°ì(€€€€€€€€ ‰Àˆ°…É¤¹Ñ•áÑ½¹Ñ•¹Ð€ô‰…¬€ü…¥‰±•ÍÍ•Ì€è€‘í¥Ñ•´¹Ý•…­¹•ÍÍ•ÍôƒŠPƒ
¬€‘í¥Ñ•´¹ÅÕ½Ñ•ôƒ
í€€è¥Ñ•´¹É½±”ì(€€€€€ôì(€€€€€…É¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°™±¥À¤ì(€€€€€…É¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰­•å‘½Ý¸ˆ°€¡•Ù•¹Ð¤€ôøì¥˜€¡•Ù•¹Ð¹­•ä€ôôô€‰¹Ñ•Èˆñð•Ù•¹Ð¹­•ä€ôôô€ˆ€ˆ¤ì•Ù•¹Ð¹ÁÉ•Ù•¹Ñ•™…Õ±Ð ¤ì™±¥À ¤ìôô¤ì(€€€€€…±±•Éä¹…ÁÁ•¹‘¡¥±¡…É¤ì(€€€ô(€ô((€…Íå¹Œ™Õ¹Ñ¥½¸µ½‘•É…Ñ•A…ÍÍÁ½ÉÐ¡¥°‘•¥Í¥½¸¤ì(€€€½¹ÍÐ¥Ñ•µÌ€ô±½…‘A…ÍÍÁ½ÉÑMÕ‰µ¥ÍÍ¥½¹Ì ¤ì(€€€½¹ÍÐ¥Ñ•´€ô¥Ñ•µÌ¹™¥¹ ¡•¹ÑÉä¤€ôø•¹ÑÉä¹¥€ôôô9Õµ‰•È¡¥¤¤ì(€€€¥˜€ …¥Ñ•´¤É•ÑÕÉ¸ì(€€€¥Ñ•´¹ÍÑ…ÑÕÌ€ô‘•¥Í¥½¸ì(€€€¥Ñ•´¹É•Ù¥•Ý•‘Ð€ô¹•Ü…Ñ” ¤¹Ñ½%M=MÑÉ¥¹œ ¤ì(€€€Í…Ù•A…ÍÍÁ½ÉÑMÕ‰µ¥ÍÍ¥½¹Ì¡¥Ñ•µÌ¤ì(€€€…Ý…¥ÐÉ•¹‘•ÉA…ÍÍÁ½ÉÑ‘µ¥¹EÕ•Õ” ¤ì(€€€…Ý…¥ÐÉ•¹‘•ÉÁÁÉ½Ù•‘A…ÍÍÁ½ÉÑ…É‘Ì ¤ì(€€€Í¡½ÝQ½…ÍÐ¡‘•¥Í¥½¸€ôôô€‰…ÁÁÉ½Ù•ˆ€ü€‰…ÉÑ”…ÁÁÉ½ÕÛ¥”Á…ÈQ¡”	½ÍÌˆ€è€‰…ÉÑ”É•™ÕÏ¥”ˆ¤ì(€ô((€…Íå¹Œ™Õ¹Ñ¥½¸É•¹‘•ÉA…ÍÍÁ½ÉÑ‘µ¥¹EÕ•Õ” ¤ì(€€€½¹ÍÐÅÕ•Õ”€ô€ ˆÁ…ÍÍÁ½ÉÐµ…‘µ¥¸µÅÕ•Õ”ˆ¤ì(€€€½¹ÍÐÁ•¹‘¥¹œ€ô±½…‘A…ÍÍÁ½ÉÑMÕ‰µ¥ÍÍ¥½¹Ì ¤¹™¥±Ñ•È ¡¥Ñ•´¤€ôø¥Ñ•´¹ÍÑ…ÑÕÌ€ôôô€‰Á•¹‘¥¹œˆ¤ì(€€€ÅÕ•Õ”¹¥¹¹•É!Q50€ô€ˆˆì(€€€¥˜€ …Á•¹‘¥¹œ¹±•¹Ñ ¤ì(€€€€€ÅÕ•Õ”¹¥¹¹•É!Q50€ô€œñÀ±…ÍÌô‰µ•‘¥„µÍÑ…ÑÕÌˆùÕÕ¹”…ÉÑ”•¸…ÑÑ•¹Ñ”¸ð½Àøœì(€€€€€É•ÑÕÉ¸ì(€€€ô(€€€Á•¹‘¥¹œ¹™½É…  ¡¥Ñ•´¤€ôøì(€€€€€½¹ÍÐÉ½Ü€ô‘½Õµ•¹Ð¹É•…Ñ•±•µ•¹Ð ‰‘¥Øˆ¤ì(€€€€€É½Ü¹±…ÍÍ9…µ”€ô€‰Á…ÍÍÁ½ÉÐµ…‘µ¥¸µ¥Ñ•´ˆì(€€€€€É½Ü¹¥¹¹•É!Q50€ô€ñÍÑÉ½¹œø‘í•Í…Á•!Ñµ°¡¥Ñ•´¹¹…µ”¥ôð½ÍÑÉ½¹œøñÀø‘í•Í…Á•!Ñµ°¡¥Ñ•´¹É½±”¥ôñ‰ÈùEÕ…±¥Ó¥Ì€è€‘í•Í…Á•!Ñµ°¡¥Ñ•´¹ÅÕ…±¥Ñ¥•Ì¥ôñ‰Èù…¥‰±•ÍÍ•Ì€è€‘í•Í…Á•!Ñµ°¡¥Ñ•´¹Ý•…­¹•ÍÍ•Ì¥ôñ‰Èû
¬€‘í•Í…Á•!Ñµ°¡¥Ñ•´¹ÅÕ½Ñ”¥ôƒ
ìð½Àøñ‘¥Ø±…ÍÌô‰Á…ÍÍÁ½ÉÐµ…‘µ¥¸µ…Ñ¥½¹Ìˆøñ‰ÕÑÑ½¸±…ÍÌô‰…ÁÁÉ½Ù”ˆÑåÁ”ô‰‰ÕÑÑ½¸ˆùÁÁÉ½ÕÙ•Èð½‰ÕÑÑ½¸øñ‰ÕÑÑ½¸±…ÍÌô‰É•©•ÐˆÑåÁ”ô‰‰ÕÑÑ½¸ˆùI•™ÕÍ•Èð½‰ÕÑÑ½¸øð½‘¥Øù€ì(€€€€€€ ˆ¹…ÁÁÉ½Ù”ˆ°É½Ü¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€ ¤€ôøµ½‘•É…Ñ•A…ÍÍÁ½ÉÐ¡¥Ñ•´¹¥°€‰…ÁÁÉ½Ù•ˆ¤¤ì(€€€€€€ ˆ¹É•©•Ðˆ°É½Ü¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€ ¤€ôøµ½‘•É…Ñ•A…ÍÍÁ½ÉÐ¡¥Ñ•´¹¥°€‰É•©•Ñ•ˆ¤¤ì(€€€€€ÅÕ•Õ”¹…ÁÁ•¹‘¡¥±¡É½Ü¤ì(€€€ô¤ì(€ô((€™Õ¹Ñ¥½¸Í…Ù•A…ÍÍÁ½ÉÑ½‘” ¤ì(€€€½¹ÍÐÙ…±Õ”€ô€ ˆ•‘¥ÐµÁ…ÍÍÁ½ÉÐµ½‘”ˆ¤¹Ù…±Õ”¹ÑÉ¥´ ¤ì(€€€¥˜€ …Ù…±Õ”¤É•ÑÕÉ¸Í¡½ÝQ½…ÍÐ ‰¡½¥Í¥ÍÍ•èÕ¸½‘”“Še¥¹Ù¥Ñ…Ñ¥½¸ˆ¤ì(€€€±½…±MÑ½É…”¹Í•Ñ%Ñ•´¡Á…ÍÍÁ½ÉÑ•ÍÍ-•ä°Ù…±Õ”¤ì(€€€Í¡½ÝQ½…ÍÐ ‰½‘”A…ÍÍ•Á½ÉÐ	h•¹É•¥ÍÑË¤ˆ¤ì(€ô((€…Íå¹Œ™Õ¹Ñ¥½¸¥¹¥ÑA…ÍÍÁ½ÉÐ ¤ì(€€€€ ˆ•‘¥ÐµÁ…ÍÍÁ½ÉÐµ½‘”ˆ¤¹Ù…±Õ”€ô•ÑA…ÍÍÁ½ÉÑ•ÍÍ½‘” ¤ì(€€€€ ˆÁ…ÍÍÁ½ÉÐµÕ¹±½¬ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°Õ¹±½­A…ÍÍÁ½ÉÐ¤ì(€€€€ ˆÁ…ÍÍÁ½ÉÐµ½‘”ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰­•å‘½Ý¸ˆ°€¡•Ù•¹Ð¤€ôøì¥˜€¡•Ù•¹Ð¹­•ä€ôôô€‰¹Ñ•Èˆ¤Õ¹±½­A…ÍÍÁ½ÉÐ ¤ìô¤ì(€€€€ ˆÁ…ÍÍÁ½ÉÐµ™½É´ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰ÍÕ‰µ¥Ðˆ°ÍÕ‰µ¥ÑA…ÍÍÁ½ÉÐ¤ì(€€€lˆÁ…ÍÍÁ½ÉÐµ¹…µ”ˆ°€ˆÁ…ÍÍÁ½ÉÐµÉ½±”ˆ°€ˆÁ…ÍÍÁ½ÉÐµÅÕ…±¥Ñ¥•Ìˆ°€ˆÁ…ÍÍÁ½ÉÐµÝ•…­¹•ÍÍ•Ìˆ°€ˆÁ…ÍÍÁ½ÉÐµÅÕ½Ñ”‰t¹™½É…  ¡Í•±•Ñ½È¤€ôø€¡Í•±•Ñ½È¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¥¹ÁÕÐˆ°ÕÁ‘…Ñ•A…ÍÍÁ½ÉÑAÉ•Ù¥•Ü¤¤ì(€€€€ ˆÁ…ÍÍÁ½ÉÐµ™…”µ¥µ…”ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¡…¹”ˆ°€¡•Ù•¹Ð¤€ôøì(€€€€€Á…ÍÍÁ½ÉÑ…•¥±”€ô•Ù•¹Ð¹Ñ…É•Ð¹™¥±•ÍlÁtñð¹Õ±°ì(€€€€€Í¡½ÝA…ÍÍÁ½ÉÑAÉ•Ù¥•Ý%µ…”¡Á…ÍÍÁ½ÉÑ…•¥±”°€ˆÁ…ÍÍÁ½ÉÐµ™…”µÁÉ•Ù¥•Üˆ°€‰Á…ÍÍÁ½ÉÐµÁÉ•Ù¥•Üµ™…”ˆ¤ì(€€€ô¤ì(€€€€ ˆÁ…ÍÍÁ½ÉÐµ‰…¬µ¥µ…”ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¡…¹”ˆ°€¡•Ù•¹Ð¤€ôøì(€€€€€Á…ÍÍÁ½ÉÑ	…­¥±”€ô•Ù•¹Ð¹Ñ…É•Ð¹™¥±•ÍlÁtñð¹Õ±°ì(€€€€€Í¡½ÝA…ÍÍÁ½ÉÑAÉ•Ù¥•Ý%µ…”¡Á…ÍÍÁ½ÉÑ	…­¥±”°€ˆÁ…ÍÍÁ½ÉÐµ‰…¬µÁÉ•Ù¥•Üˆ°€‰Á…ÍÍÁ½ÉÐµÁÉ•Ù¥•Üµ‰…¬ˆ¤ì(€€€ô¤ì(€€€€ ˆÁ…ÍÍÁ½ÉÐµ™±¥Àˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€ ¤€ôøì(€€€€€½¹ÍÐ…É€ô€ ˆÁ…ÍÍÁ½ÉÐµÁÉ•Ù¥•Üµ…Éˆ¤ì(€€€€€½¹ÍÐ‰…¬€ô…É¹‘…Ñ…Í•Ð¹Í¥‘”€ôôô€‰™…”ˆì(€€€€€…É¹‘…Ñ…Í•Ð¹Í¥‘”€ô‰…¬€ü€‰‰…¬ˆ€è€‰™…”ˆì(€€€€€€ ˆÁ…ÍÍÁ½ÉÐµ™±¥Àˆ¤¹Ñ•áÑ½¹Ñ•¹Ð€ô‰…¬€ü€‹ŠìI•Ù½¥È±„™…”ˆ€è€‹ŠìY½¥È±”‘½Ìˆì(€€€ô¤ì(€€€€ ˆÍ…Ù”µÁ…ÍÍÁ½ÉÐµ½‘”ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°Í…Ù•A…ÍÍÁ½ÉÑ½‘”¤ì(€€€ÕÁ‘…Ñ•A…ÍÍÁ½ÉÑAÉ•Ù¥•Ü ¤ì(€€€…Ý…¥ÐÉ•¹‘•ÉA…ÍÍÁ½ÉÑ‘µ¥¹EÕ•Õ” ¤ì(€€€…Ý…¥ÐÉ•¹‘•ÉÁÁÉ½Ù•‘A…ÍÍÁ½ÉÑ…É‘Ì ¤ì(€ô((€™Õ¹Ñ¥½¸‰¥¹‘Ù•¹ÑÌ ¤ì(€€€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½É±° ‰m‘…Ñ„µ½Á•¸µ•Á¥Í½‘•tˆ¤¹™½É…  ¡‰ÕÑÑ½¸¤€ôø‰ÕÑÑ½¸¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€ ¤€ôø½Á•¹Á¥Í½‘”¡‰ÕÑÑ½¸¹‘…Ñ…Í•Ð¹½Á•¹Á¥Í½‘”¤¤¤ì(€€€‘½Õµ•¹Ð¹ÅÕ•ÉåM•±•Ñ½É±° ‰m‘…Ñ„µ½Á•¸µÙ¥‘•½tˆ¤¹™½É…  ¡‰ÕÑÑ½¸¤€ôø‰ÕÑÑ½¸¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€ ¤€ôø½Á•¹Y¥‘•½Á¥Í½‘”¡‰ÕÑÑ½¸¹‘…Ñ…Í•Ð¹½Á•¹Y¥‘•¼¤¤¤ì(€€€€ ˆ‘¥…±½œµ±½Í”ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°±½Í•¥…±½œ¤ì(€€€‘¥…±½œ¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€¡•Ù•¹Ð¤€ôøì(€€€€€½¹ÍÐ‰½Õ¹‘Ì€ô‘¥…±½œ¹•Ñ	½Õ¹‘¥¹±¥•¹ÑI•Ð ¤ì(€€€€€¥˜€¡•Ù•¹Ð¹±¥•¹Ñ`€ð‰½Õ¹‘Ì¹±•™Ðñð•Ù•¹Ð¹±¥•¹Ñ`€ø‰½Õ¹‘Ì¹É¥¡Ðñð•Ù•¹Ð¹±¥•¹Ñd€ð‰½Õ¹‘Ì¹Ñ½Àñð•Ù•¹Ð¹±¥•¹Ñd€ø‰½Õ¹‘Ì¹‰½ÑÑ½´¤±½Í•¥…±½œ ¤ì(€€€ô¤ì(€€€€ ˆ™±¥Àµ…Éˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€ ¤€ôøì(€€€€€½¹ÍÐ•Á¥Í½‘”€ô•Á¥Í½‘•Ì¹™¥¹ ¡¥Ñ•´¤€ôø¥Ñ•´¹¥€ôôô…Ñ¥Ù•%¤ì(€€€€€½Á•¹Á¥Í½‘”¡•Á¥Í½‘”¹Á…¥È¤ì(€€€ô¤ì(€€€€ ˆÙ¥‘•¼µ‘¥…±½œµ±½Í”ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°±½Í•Y¥‘•½¥…±½œ¤ì(€€€Ù¥‘•½¥…±½œ¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€¡•Ù•¹Ð¤€ôøì(€€€€€½¹ÍÐ‰½Õ¹‘Ì€ôÙ¥‘•½¥…±½œ¹•Ñ	½Õ¹‘¥¹±¥•¹ÑI•Ð ¤ì(€€€€€¥˜€¡•Ù•¹Ð¹±¥•¹Ñ`€ð‰½Õ¹‘Ì¹±•™Ðñð•Ù•¹Ð¹±¥•¹Ñ`€ø‰½Õ¹‘Ì¹É¥¡Ðñð•Ù•¹Ð¹±¥•¹Ñd€ð‰½Õ¹‘Ì¹Ñ½Àñð•Ù•¹Ð¹±¥•¹Ñd€ø‰½Õ¹‘Ì¹‰½ÑÑ½´¤±½Í•Y¥‘•½¥…±½œ ¤ì(€€€ô¤ì(€€€€ ˆ¹•áÐµÙ¥‘•¼µ•Á¥Í½‘”ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€ ¤€ôø½Á•¹Y¥‘•½Á¥Í½‘”¡…Ñ¥Ù•Y¥‘•½%€ôôô€ÄÈ€ü€Ä€è…Ñ¥Ù•Y¥‘•½%€¬€Ä¤¤ì(€€€€ ˆ•‘¥ÐµÑ½±”ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°½Á•¹‘¥Ñ½È¤ì(€€€€ ˆ±…¹Õ…”µÑ½±”ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°ÍÝ¥Ñ¡1…¹Õ…”¤ì(€€€€ ˆ•‘¥Ñ½Èµ±½Í”ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°±½Í•‘¥Ñ½È¤ì(€€€Í¡…‘”¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°±½Í•‘¥Ñ½È¤ì(€€€€ ˆ•‘¥Ðµ•Á¥Í½‘”ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¡…¹”ˆ°€¡•Ù•¹Ð¤€ôø™¥±±‘¥Ñ½È¡•Ù•¹Ð¹Ñ…É•Ð¹Ù…±Õ”¤¤ì(€€€€ ˆ•‘¥ÐµÙ¥‘•¼µ•Á¥Í½‘”ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¡…¹”ˆ°€¡•Ù•¹Ð¤€ôø™¥±±Y¥‘•½‘¥Ñ½È¡•Ù•¹Ð¹Ñ…É•Ð¹Ù…±Õ”¤¤ì(€€€€ ˆµ½Ù”µ¡…É…Ñ•Èµ±•™Ðˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€ ¤€ôøµ½Ù•¡…É…Ñ•È¡…Ñ¥Ù•%°€´Ä¤¤ì(€€€€ ˆµ½Ù”µ¡…É…Ñ•ÈµÉ¥¡Ðˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°€ ¤€ôøµ½Ù•¡…É…Ñ•È¡…Ñ¥Ù•%°€Ä¤¤ì(€€€€ ˆ•‘¥Ðµµ•‘¥„ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¡…¹”ˆ°€¡•Ù•¹Ð¤€ôøì(€€€€€Á•¹‘¥¹5•‘¥„€ô•Ù•¹Ð¹Ñ…É•Ð¹™¥±•ÍlÁtñð¹Õ±°ì(€€€€€€ ˆµ•‘¥„µÍÑ…ÑÕÌˆ¤¹Ñ•áÑ½¹Ñ•¹Ð€ôÁ•¹‘¥¹5•‘¥„€üAË©Ðƒ€•¹É•¥ÍÑÉ•È€è€‘íÁ•¹‘¥¹5•‘¥„¹¹…µ•õ€€è€‰Y¥ÍÕ•°½É¥¥¹…°ÕÑ¥±¥Ï¤ˆì(€€€ô¤ì(€€€€ ˆ•‘¥Ðµµ•‘¥„µ•¸ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¡…¹”ˆ°€¡•Ù•¹Ð¤€ôøì(€€€€€Á•¹‘¥¹5•‘¥…¸€ô•Ù•¹Ð¹Ñ…É•Ð¹™¥±•ÍlÁtñð¹Õ±°ì(€€€€€€ ˆµ•‘¥„µÍÑ…ÑÕÌµ•¸ˆ¤¹Ñ•áÑ½¹Ñ•¹Ð€ôÁ•¹‘¥¹5•‘¥…¸€üI•…‘äÑ¼Í…Ù”è€‘íÁ•¹‘¥¹5•‘¥…¸¹¹…µ•õ€€è€‰…ÉÑ”…¹±…¥Í”	h5%1dÕÑ¥±¥Ï¥”ˆì(€€€ô¤ì(€€€€ ˆ•‘¥Ðµ‰…¹¹•Èˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¡…¹”ˆ°€¡•Ù•¹Ð¤€ôøì(€€€€€Á•¹‘¥¹	…¹¹•È€ô•Ù•¹Ð¹Ñ…É•Ð¹™¥±•ÍlÁtñð¹Õ±°ì(€€€€€€ ˆ‰…¹¹•ÈµÍÑ…ÑÕÌˆ¤¹Ñ•áÑ½¹Ñ•¹Ð€ôÁ•¹‘¥¹	…¹¹•È€üAË©Ñ”ƒ€•¹É•¥ÍÑÉ•È€è€‘íÁ•¹‘¥¹	…¹¹•È¹¹…µ•õ€€è€‰	…¹¹§¡É”…µ¥±±”	hÕÑ¥±¥Ï¥”ˆì(€€€ô¤ì(€€€€ ˆ•‘¥Ðµ‰…¹¹•Èµ•¸ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¡…¹”ˆ°€¡•Ù•¹Ð¤€ôøì(€€€€€Á•¹‘¥¹	…¹¹•É¸€ô•Ù•¹Ð¹Ñ…É•Ð¹™¥±•ÍlÁtñð¹Õ±°ì(€€€€€€ ˆ‰…¹¹•ÈµÍÑ…ÑÕÌµ•¸ˆ¤¹Ñ•áÑ½¹Ñ•¹Ð€ôÁ•¹‘¥¹	…¹¹•É¸€üI•…‘äÑ¼Í…Ù”è€‘íÁ•¹‘¥¹	…¹¹•É¸¹¹…µ•õ€€è€‰	…¹¹§¡É”…¹±…¥Í”	h5%1dÕÑ¥±¥Ï¥”ˆì(€€€ô¤ì(€€€€ ˆÍ…Ù”µ•¹•É…°ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°Í…Ù••¹•É…°¤ì(€€€€ ˆÍ…Ù”µ…±°ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°Í…Ù•±°¤ì(€€€€ ˆ±•…Èµ‰…¹¹•Èˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°…Íå¹Œ€ ¤€ôøì(€€€€€…Ý…¥Ð‘•±•Ñ•MÑ½É•‘5•‘¥„ ‰¡•É¼µ‰…¹¹•Èˆ¤ì(€€€€€Á•¹‘¥¹	…¹¹•È€ô¹Õ±°ì(€€€€€€ ˆ•‘¥Ðµ‰…¹¹•Èˆ¤¹Ù…±Õ”€ô€ˆˆì(€€€€€…Ý…¥ÐÉ•¹‘•É	…¹¹•È ¤ì(€€€€€Í¡½ÝQ½…ÍÐ ‰	…¹¹§¡É”½É¥¥¹…±”É•ÍÑ…ÕË¥”ˆ¤ì(€€€ô¤ì(€€€€ ˆ±•…Èµ‰…¹¹•Èµ•¸ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°…Íå¹Œ€ ¤€ôøì(€€€€€…Ý…¥Ð‘•±•Ñ•MÑ½É•‘5•‘¥„ ‰¡•É¼µ‰…¹¹•Èµ•¸ˆ¤ì(€€€€€Á•¹‘¥¹	…¹¹•É¸€ô¹Õ±°ì(€€€€€€ ˆ•‘¥Ðµ‰…¹¹•Èµ•¸ˆ¤¹Ù…±Õ”€ô€ˆˆì(€€€€€…Ý…¥ÐÉ•¹‘•É	…¹¹•È ¤ì(€€€€€Í¡½ÝQ½…ÍÐ ‰	…¹¹§¡É”…¹±…¥Í”½É¥¥¹…±”É•ÍÑ…ÕË¥”ˆ¤ì(€€€ô¤ì(€€€€ ˆÍ…Ù”µ•Á¥Í½‘”ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°Í…Ù•Á¥Í½‘”¤ì(€€€€ ˆ•‘¥ÐµÙ¥‘•¼µÁ½ÍÑ•Èˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¡…¹”ˆ°€¡•Ù•¹Ð¤€ôøì(€€€€€Á•¹‘¥¹Y¥‘•½A½ÍÑ•È€ô•Ù•¹Ð¹Ñ…É•Ð¹™¥±•ÍlÁtñð¹Õ±°ì(€€€€€€ ˆÙ¥‘•¼µÁ½ÍÑ•ÈµÍÑ…ÑÕÌˆ¤¹Ñ•áÑ½¹Ñ•¹Ð€ôÁ•¹‘¥¹Y¥‘•½A½ÍÑ•È€üAË©Ñ”ƒ€•¹É•¥ÍÑÉ•È€è€‘íÁ•¹‘¥¹Y¥‘•½A½ÍÑ•È¹¹…µ•õ€€è€‰™™¥¡”ÁÉ½Á½Ï¥”ÕÑ¥±¥Ï¥”ˆì(€€€ô¤ì(€€€€ ˆ•‘¥ÐµÙ¥‘•¼µ™¥±”ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¡…¹”ˆ°€¡•Ù•¹Ð¤€ôøì(€€€€€Á•¹‘¥¹Y¥‘•½¥±”€ô•Ù•¹Ð¹Ñ…É•Ð¹™¥±•ÍlÁtñð¹Õ±°ì(€€€€€€ ˆÙ¥‘•¼µ™¥±”µÍÑ…ÑÕÌˆ¤¹Ñ•áÑ½¹Ñ•¹Ð€ôÁ•¹‘¥¹Y¥‘•½¥±”€üAË©Ñ”ƒ€•¹É•¥ÍÑÉ•È€è€‘íÁ•¹‘¥¹Y¥‘•½¥±”¹¹…µ•õ€€è€‰ÕÕ¹”Ù¥“¥¼•¹É•¥ÍÑË¥”ˆì(€€€ô¤ì(€€€€ ˆÍ…Ù”µÙ¥‘•¼µ•Á¥Í½‘”ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°Í…Ù•Y¥‘•½Á¥Í½‘”¤ì(€€€€ ˆ±•…ÈµÙ¥‘•¼µÁ½ÍÑ•Èˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°…Íå¹Œ€ ¤€ôøì(€€€€€…Ý…¥Ð‘•±•Ñ•MÑ½É•‘5•‘¥„¡Ù¥‘•¼µÁ½ÍÑ•È´‘í…Ñ¥Ù•Y¥‘•½%‘õ€¤ì(€€€€€Á•¹‘¥¹Y¥‘•½A½ÍÑ•È€ô¹Õ±°ì(€€€€€…Ý…¥ÐÉ•¹‘•ÉY¥‘•½Á¥Í½‘•Ì ¤ì(€€€€€…Ý…¥Ð™¥±±Y¥‘•½‘¥Ñ½È¡…Ñ¥Ù•Y¥‘•½%¤ì(€€€€€Í¡½ÝQ½…ÍÐ ‰™™¥¡”ÁÉ½Á½Ï¥”É•ÍÑ…ÕË¥”ˆ¤ì(€€€ô¤ì(€€€€ ˆ±•…ÈµÙ¥‘•¼µ™¥±”ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°…Íå¹Œ€ ¤€ôøì(€€€€€…Ý…¥Ð‘•±•Ñ•MÑ½É•‘5•‘¥„¡Ù¥‘•¼µ™¥±”´‘í…Ñ¥Ù•Y¥‘•½%‘õ€¤ì(€€€€€Á•¹‘¥¹Y¥‘•½¥±”€ô¹Õ±°ì(€€€€€…Ý…¥Ð™¥±±Y¥‘•½‘¥Ñ½È¡…Ñ¥Ù•Y¥‘•½%¤ì(€€€€€¥˜€¡Ù¥‘•½¥…±½œ¹½Á•¸¤…Ý…¥Ð½Á•¹Y¥‘•½Á¥Í½‘”¡…Ñ¥Ù•Y¥‘•½%¤ì(€€€€€Í¡½ÝQ½…ÍÐ ‰Y¥“¥¼É•Ñ¥Ë¥”ˆ¤ì(€€€ô¤ì(€€€€ ˆ±•…Èµµ•‘¥„ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°…Íå¹Œ€ ¤€ôøì(€€€€€…Ý…¥Ð‘•±•Ñ•MÑ½É•‘5•‘¥„¡…Ñ¥Ù•%¤ì(€€€€€Á•¹‘¥¹5•‘¥„€ô¹Õ±°ì(€€€€€…Ý…¥ÐÉ•¹‘•ÉÁ¥Í½‘•Ì ¤ì(€€€€€…Ý…¥Ð™¥±±‘¥Ñ½È¡…Ñ¥Ù•%¤ì(€€€€€Í¡½ÝQ½…ÍÐ ‰Y¥ÍÕ•°½É¥¥¹…°É•ÍÑ…ÕË¤ˆ¤ì(€€€ô¤ì(€€€€ ˆ±•…Èµµ•‘¥„µ•¸ˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°…Íå¹Œ€ ¤€ôøì(€€€€€…Ý…¥Ð‘•±•Ñ•MÑ½É•‘5•‘¥„¡…Éµ•¸´‘í…Ñ¥Ù•%‘õ€¤ì(€€€€€Á•¹‘¥¹5•‘¥…¸€ô¹Õ±°ì(€€€€€…Ý…¥ÐÉ•¹‘•ÉÁ¥Í½‘•Ì ¤ì(€€€€€…Ý…¥Ð™¥±±‘¥Ñ½È¡…Ñ¥Ù•%¤ì(€€€€€¥˜€¡‘¥…±½œ¹½Á•¸¤…Ý…¥Ð½Á•¹Á¥Í½‘”¡…Ñ¥Ù•%¤ì(€€€€€Í¡½ÝQ½…ÍÐ ‰…ÉÑ”…¹±…¥Í”½É¥¥¹…±”É•ÍÑ…ÕË¥”ˆ¤ì(€€€ô¤ì(€€€€ ˆ•áÁ½ÉÐµ½¹Ñ•¹Ðˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°•áÁ½ÉÑQ•áÑÌ¤ì(€€€€ ˆ¥µÁ½ÉÐµ½¹Ñ•¹Ðˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¡…¹”ˆ°€¡•Ù•¹Ð¤€ôøì(€€€€€½¹ÍÐ™¥±”€ô•Ù•¹Ð¹Ñ…É•Ð¹™¥±•ÍlÁtì(€€€€€¥˜€¡™¥±”¤¥µÁ½ÉÑQ•áÑÌ¡™¥±”¤ì(€€€€€•Ù•¹Ð¹Ñ…É•Ð¹Ù…±Õ”€ô€ˆˆì(€€€ô¤ì(€€€€ ˆÉ•Í•Ðµ½¹Ñ•¹Ðˆ¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰±¥¬ˆ°É•Í•ÑM•…Í½¸¤ì(€€€lˆ•‘¥Ðµ¡•É¼µÑ¥Ñ±”ˆ°€ˆ•‘¥Ðµ¡•É¼µ½Áäˆ°€ˆ•‘¥Ðµ±•ÑÑ•ÈµÑ¥Ñ±”ˆ°€ˆ•‘¥Ðµ±•ÑÑ•Èµ½Áäˆ°€ˆ•‘¥Ðµ™…µ¥±äµµ•ÍÍ…”µÑ¥Ñ±”ˆ°€ˆ•‘¥Ðµ™…µ¥±äµµ•ÍÍ…”µ½Áäˆ°€ˆ•‘¥Ðµ™…µ¥±äµµ•ÍÍ…”µÍ¥¹…ÑÕÉ”ˆ°€ˆ•‘¥Ðµ™¥¹…±”µÑ¥Ñ±”ˆ°€ˆ•‘¥Ðµ™¥¹…±”µ½Áäˆ°€ˆ•‘¥Ðµ¡•É¼µÑ¥Ñ±”µ•¸ˆ°€ˆ•‘¥Ðµ¡•É¼µ½Áäµ•¸ˆ°€ˆ•‘¥Ðµ±•ÑÑ•ÈµÑ¥Ñ±”µ•¸ˆ°€ˆ•‘¥Ðµ±•ÑÑ•Èµ½Áäµ•¸ˆ°€ˆ•‘¥Ðµ™…µ¥±äµµ•ÍÍ…”µÑ¥Ñ±”µ•¸ˆ°€ˆ•‘¥Ðµ™…µ¥±äµµ•ÍÍ…”µ½Áäµ•¸ˆ°€ˆ•‘¥Ðµ™…µ¥±äµµ•ÍÍ…”µÍ¥¹…ÑÕÉ”µ•¸ˆ°€ˆ•‘¥Ðµ™¥¹…±”µÑ¥Ñ±”µ•¸ˆ°€ˆ•‘¥Ðµ™¥¹…±”µ½Áäµ•¸‰t¹™½É…  ¡Í•±•Ñ½È¤€ôøì(€€€€€€¡Í•±•Ñ½È¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¡…¹”ˆ°Í…Ù••¹•É…°¤ì(€€€ô¤ì(€€€lˆ•‘¥ÐµÑ¥Ñ±”ˆ°€ˆ•‘¥Ðµ­¥­•Èˆ°€ˆ•‘¥Ðµ‘•ÍÉ¥ÁÑ¥½¸ˆ°€ˆ•‘¥ÐµÑ¥Ñ±”µ•¸ˆ°€ˆ•‘¥Ðµ­¥­•Èµ•¸ˆ°€ˆ•‘¥Ðµ‘•ÍÉ¥ÁÑ¥½¸µ•¸‰t¹™½É…  ¡Í•±•Ñ½È¤€ôøì(€€€€€€¡Í•±•Ñ½È¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¡…¹”ˆ°Í…Ù•Á¥Í½‘”¤ì(€€€ô¤ì(€€€lˆ•‘¥ÐµÙ¥‘•¼µÑ¥Ñ±”ˆ°€ˆ•‘¥ÐµÙ¥‘•¼µÍÕµµ…Éäˆ°€ˆ•‘¥ÐµÙ¥‘•¼µÑ¥Ñ±”µ•¸ˆ°€ˆ•‘¥ÐµÙ¥‘•¼µÍÕµµ…Éäµ•¸‰t¹™½É…  ¡Í•±•Ñ½È¤€ôøì(€€€€€€¡Í•±•Ñ½È¤¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰¡…¹”ˆ°Í…Ù•Y¥‘•½Á¥Í½‘”¤ì(€€€ô¤ì(€€€‘½Õµ•¹Ð¹…‘‘Ù•¹Ñ1¥ÍÑ•¹•È ‰­•å‘½Ý¸ˆ°€¡•Ù•¹Ð¤€ôøì(€€€€€¥˜€¡•Ù•¹Ð¹­•ä€ôôô€‰Í…Á”ˆ€˜˜•‘¥Ñ½È¹±…ÍÍ1¥ÍÐ¹½¹Ñ…¥¹Ì ‰½Á•¸ˆ¤¤±½Í•‘¥Ñ½È ¤ì(€€€ô¤ì(€ô((€…Íå¹Œ™Õ¹Ñ¥½¸¥¹¥Ð ¤ì(€€€½¹ÍÐÍ•±•Ð€ô€ ˆ•‘¥Ðµ•Á¥Í½‘”ˆ¤ì(€€€Í•±•Ð¹¥¹¹•É!Q50€ô•Á¥Í½‘•Ì¹µ…À ¡•À¤€ôø€ñ½ÁÑ¥½¸Ù…±Õ”ôˆ‘í•À¹¥‘ôˆø‘íÑÝ¼¡¡…É…Ñ•É¥ÍÁ±…å9Õµ‰•È¡•À¹¥¤¥ôƒŠP€‘í•Í…Á•!Ñµ°¡•À¹Ñ¥Ñ±”¥ô€ ‘í•À¹Í¥‘•ô¤ð½½ÁÑ¥½¸ù€¤¹©½¥¸ ˆˆ¤ì(€€€½¹ÍÐÙ¥‘•½M•±•Ð€ô€ ˆ•‘¥ÐµÙ¥‘•¼µ•Á¥Í½‘”ˆ¤ì(€€€Ù¥‘•½M•±•Ð¹¥¹¹•É!Q50€ôÙ¥‘•½Á¥Í½‘•Ì¹µ…À ¡•À¤€ôø€ñ½ÁÑ¥½¸Ù…±Õ”ôˆ‘í•À¹¥‘ôˆø‘íÑÝ¼¡•À¹¥¥ôƒŠP€‘í•Í…Á•!Ñµ°¡•À¹Ñ¥Ñ±”¥ôð½½ÁÑ¥½¸ù€¤¹©½¥¸ ˆˆ¤ì(€€€‰¥¹‘Ù•¹ÑÌ ¤ì(€€€ÕÁ‘…Ñ•MÑ…Ñ¥1…¹Õ…” ¤ì(€€€É•¹‘•É•¹•É…±Q•áÐ ¤ì(€€€…Ý…¥ÐÉ•¹‘•É	…¹¹•È ¤ì(€€€…Ý…¥ÐÉ•¹‘•ÉÁ¥Í½‘•Ì ¤ì(€€€…Ý…¥ÐÉ•¹‘•ÉY¥‘•½Á¥Í½‘•Ì ¤ì(€€€…Ý…¥Ð¥¹¥ÑA…ÍÍÁ½ÉÐ ¤ì(€ô((€¥¹¥Ð ¤ì)ô¤ ¤ì(