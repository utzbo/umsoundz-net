// ============================================
// 実績データ
// 実績を追加するときはオブジェクトを追加する
// ============================================
export const workCategories = {
  event:      "イベント",
  game:       "ゲーム収録",
  commission: "楽曲提供",
  remix:      "リミックス",
  submission: "コンペ・公募",
  mastering:  "マスタリング",
  award:      "受賞・掲載",
  media:      "メディア使用",
  other:      "その他",
};

export const works = [
  {
    id: "work-26-02-12",
    title: "Dream Engine Games様「Rotaeno」楽曲提供",
    date: "2026-02-12",
    category: ["game", "commission"],
    tags: ["楽曲提供", "音楽ゲーム", "アプリ"],
    description: "「Chunlian」を提供させていただきました。",
    youtube: "oqWKOnQufmU",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "公式サイト", url: "https://www.rotaeno.com/" },
    ],
    thumbnail: "",
  },
  {
    id: "work-26-01-30",
    title: "PRWAVE様「OverEcho」楽曲提供",
    date: "2026-01-30",
    category: ["game"],
    tags: ["楽曲提供", "音楽ゲーム", "アプリ"],
    description: "「花一匁」を提供させていただきました。\n※etowa氏との合作",
    youtube: "",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "告知ツイート", url: "https://x.com/overecho_jp/status/2017160876458176541?s=20" },
    ],
    thumbnail: "",
  },
  {
    id: "work-25-10-26-2",
    title: "KodamaSounds様 「ECLECTIC RESONANCE UPRISING 3」楽曲提供",
    date: "2025-10-26",
    category: ["commission"],
    tags: ["楽曲提供", "同人音楽"],
    description: "「Impulse」を提供させていただきました。",
    youtube: "ms7oVen6bDA",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "特設サイト", url: "https://kodamasoft.net/releases/eclectic-resonance-uprising-3" },
    ],
    thumbnail: "",
  },
  {
    id: "work-25-10-26",
    title: "RAMENDOZE様「INFiNiTE ENERZY : RMXEZ」リミックス採用",
    date: "2025-10-26",
    category: ["remix", "submission"],
    tags: ["楽曲採用", "リミックス", "同人音楽"],
    description: "「INFiNiTE ENERZY -Overdoze- (utzbo Remix)」を採用していただきました。",
    youtube: "8xHsJlICPM8",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "特設サイト", url: "https://rmxez.netlify.app/" },
    ],
    thumbnail: "",
  },
  {
    id: "work-25-10-07",
    title: "Konami Arcade Games様「SOUND VOLTEX」楽曲採用",
    date: "2025-10-07",
    category: ["game", "submission"],
    tags: ["楽曲採用", "音楽ゲーム", "アーケードゲーム"],
    description: "「SOUND VOLTEX13周年記念！キャラクターテーマ楽曲コンテスト」にて「FLAVOR-G」を採用していただきました。",
    youtube: "",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "SOUND VOLTEX公式サイト", url: "https://p.eagate.573.jp/game/sdvx/sv/p/floor/original/32/index.html" },
    ],
    thumbnail: "",
  },
  {
    id: "work-25-05-06",
    title: "KodamaSounds様 「Gensokyo Party Vol. 6 Border in Stasis」 アレンジ提供",
    date: "2025-04-27",
    category: ["remix"],
    tags: ["リミックス", "同人音楽", "東方アレンジ"],
    description: "「Hidden Gateway」を提供させていただきました。\n原曲：上海アリス幻樂団 - 秘匿されたフォーシーズンズ / 秘神マターラ ～ Hidden Star in All Seasons.",
    youtube: "tgIVZm9JuFE",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "Bandcamp", url: "https://kodamasounds.bandcamp.com/album/gensokyo-party-vol-6-border-in-stasis" },
    ],
    thumbnail: "",
  },
  {
    id: "work-25-04-27-2",
    title: "Starry Canyon様「Scarlet Driverz 160 from 東方紅魔郷」 アレンジ提供/マスタリング担当",
    date: "2025-04-27",
    category: ["remix", "mastering"],
    tags: ["リミックス", "マスタリング", "同人音楽", "東方アレンジ"],
    description: "「Shang-hai Hyperdrive」の提供とマスタリングを担当しました。\n原曲：上海アリス幻樂団 - 上海紅茶館 ～ Chinese Tea / 明治十七年の上海アリス",
    youtube: "bPciiTGWHok",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=2946194" },
    ],
    thumbnail: "",
  },
  {
    id: "work-25-04-27",
    title: "STRLabel様「Xingularity: Beyond the Ultrafunk」 楽曲提供",
    date: "2025-04-27",
    category: ["commission"],
    tags: ["楽曲提供", "同人音楽"],
    description: "「Bathyscion」を提供させていただきました。",
    youtube: "H497RtI2UoY",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "特設サイト", url: "https://str3.org/strl_0051/" },
    ],
    thumbnail: "",
  },
  {
    id: "work-25-04-20",
    title: "GroundbreakinG様「GroundbreakinG 2024 BOF:TT COMPILATION ALBUM」楽曲提供",
    date: "2025-04-20",
    category: ["commission"],
    tags: ["楽曲提供", "同人音楽", "音楽ゲーム"],
    description: "「影縫」を提供させていただきました。",
    youtube: "drdgs4H8Uj0",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "GrounbreakinG", url: "https://gdbg.tv/release/2024" },
    ],
    thumbnail: "",
  },
  {
    id: "work-25-04-05",
    title: "「BE-MUSIC Special Selection 2024」楽曲提供",
    date: "2025-04-05",
    category: ["commission"],
    tags: ["楽曲提供", "同人音楽", "音楽ゲーム"],
    description: "「HANAMI」を提供させていただきました。",
    youtube: "",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "BE-MUSIC Special Selection 2024", url: "https://hpx.getonpictochat.com/bmss/2024/" },
    ],
    thumbnail: "",
  },
  {
    id: "work-25-03-04",
    title: "Arcstar様「ELLIA」楽曲提供",
    date: "2025-03-04",
    category: ["game"],
    tags: ["楽曲提供", "音楽ゲーム", "アプリ"],
    description: "「Dynasty of Extinction」「Kung-fu Fantasia」「九龍霓虹街」の3曲を提供させていただきました。\n※「Dynasty of Extinction」はparaneumann氏との合作",
    youtube: "",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "ELLIA公式サイト", url: "https://ellia-console.teamarcstar.com/" },
    ],
    thumbnail: "",
  },
  {
    id: "work-24-10-27-2",
    title: "TAKAMARI HARD SOUND様「CRUDITY」 リミックス提供/マスタリング担当",
    date: "2024-10-27",
    category: ["remix", "mastering"],
    tags: ["リミックス", "マスタリング", "同人音楽"],
    description: "「VORATILITY (utzbo Remix)」の提供及びマスタリングを担当しました。",
    youtube: "OW4Cdr_skk0",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "Booth", url: "https://taro0430.booth.pm/items/6249368" },
    ],
    thumbnail: "",
  },
  {
    id: "work-24-10-27",
    title: "Drossel/Studio様「SHINOBI SLASH SOUNDTRACK 3」 楽曲提供",
    date: "2024-10-27",
    category: ["commission"],
    tags: ["楽曲提供", "音楽ゲーム", "同人音楽"],
    description: "「花鳥暁日」を提供させていただきました。\n※Reku Mochizuki氏との合作",
    youtube: "lyP05-zWXO4",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "シノビスラッシュ公式サイト", url: "https://drossel.studio/goods" },
    ],
    thumbnail: "",
  },
  {
    id: "work-24-05-30",
    title: "Noxy Games様「Lanota」楽曲提供",
    date: "2024-05-30",
    category: ["game"],
    tags: ["楽曲提供", "音楽ゲーム", "アプリ"],
    description: "「Dynasty of Extinction」を提供させていただきました。\n※paraneumann氏との合作",
    youtube: "",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "Lanota公式サイト", url: "https://noxygames.com/lanota/" },
    ],
    thumbnail: "",
  },
  {
    id: "work-24-04-28-2",
    title: "Technological audio Works.様「Project Arcadia －プロジェクト・アルカディア－」リミックス提供",
    date: "2024-04-28",
    category: ["remix"],
    tags: ["リミックス", "同人音楽"],
    description: "4rcad1a(utzbo Remix)を提供させていただきました。",
    youtube: "8jP30pj4Gik",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "特設サイト", url: "https://tawminus50.wixsite.com/cite/project-arcadia" },
    ],
    thumbnail: "",
  },
  {
    id: "work-24-04-28",
    title: "Street様「GOD Remixer」リミックス採用",
    date: "2024-04-28",
    category: ["remix", "submission"],
    tags: ["楽曲採用", "リミックス", "同人音楽"],
    description: "「雲雀(utzbo Remix)」を採用していただきました。",
    youtube: "DRXqOCTREYQ",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "特設サイト", url: "https://godremixer.tumblr.com/" },
    ],
    thumbnail: "",
  },
  {
    id: "work-24-04-23",
    title: "Drossel/Studio様「シノビスラッシュ」楽曲提供",
    date: "2024-04-23",
    category: ["game"],
    tags: ["楽曲提供", "音楽ゲーム", "アプリ"],
    description: "「花鳥暁日」を提供させていただきました。\n※Reku Mochizuki氏との合作",
    youtube: "",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "シノビスラッシュ公式サイト", url: "https://drossel.studio/shinobi" },
    ],
    thumbnail: "",
  },
  {
    id: "work-24-04-21",
    title: "GroundbreakinG様「BOF:NT COMPILATION ALBUM」楽曲提供",
    date: "2024-04-21",
    category: ["commission"],
    tags: ["楽曲提供", "同人音楽", "音楽ゲーム"],
    description: "「Dynasty of Extinction -Brachiosaurus Strike Back-」を提供させていただきました。\n※paraneumann氏との合作",
    youtube: "-KNQ-gBLIAQ",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "GrounbreakinG", url: "https://gdbg.tv/release/2023" },
    ],
    thumbnail: "",
  },
  {
    id: "work-23-10-29-3",
    title: "Vector Tech様「Style」 リミックス提供/マスタリング担当",
    date: "2023-10-29",
    category: ["remix", "mastering"],
    tags: ["リミックス", "マスタリング", "同人音楽"],
    description: "「On1y(uzb Remix)」の提供及びマスタリングを担当させていただきました。",
    youtube: "sQSAtUL0oMs",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [],
    thumbnail: "",
  },
  {
    id: "work-23-10-29-2",
    title: "NenotaNi Face様「中华幻想两」楽曲提供",
    date: "2023-10-29",
    category: ["commission"],
    tags: ["楽曲提供", "同人音楽"],
    description: "「彩灯巷子」を提供させていただきました。",
    youtube: "0BRCfs9pq_k",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "Booth", url: "https://nenotani.booth.pm/items/5193798" },
    ],
    thumbnail: "",
  },
  {
    id: "work-23-10-29",
    title: "時空渦様「Astral Elysium」リミックス提供",
    date: "2023-10-29",
    category: ["remix"],
    tags: ["リミックス", "同人音楽", "東方アレンジ"],
    description: "「Millennium Lunatic Dancer」を提供させていただきました。\n原曲：上海アリス幻樂団 - 千年幻想郷 ～ History of the Moon",
    youtube: "rthWG-Ass0Q",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "特設サイト", url: "https://astralelysium1.tumblr.com/" },
    ],
    thumbnail: "",
  },
  {
    id: "work-23-04-23",
    title: "GrounbreakinG様「BOF:ET COMPILATION ALBUM」楽曲提供",
    date: "2023-04-23",
    category: ["commission"],
    tags: ["楽曲提供", "同人音楽", "音楽ゲーム"],
    description: "「九龍霓虹街:加長版」を提供させていただきました。",
    youtube: "tezF2_9KA60",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "GrounbreakinG", url: "https://gdbg.tv/release/2022/" },
    ],
    thumbnail: "",
  },
  {
    id: "work-22-04-24",
    title: "音屋がモナカ様 MoVIIkA 1st EP 「Hayate EP」リミックス提供",
    date: "2022-04-24",
    category: ["remix"],
    tags: ["リミックス", "同人音楽"],
    description: "「Hayate (uzb Remix)」を提供させていただきました。",
    youtube: "rYux6j2EJ2Y",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "Bandcamp", url: "https://moviika.bandcamp.com/album/hayate-ep" },
    ],
    thumbnail: "",
  },
  {
    id: "work-22-02-17",
    title: "A-ZERO Entertainment様「WAVEAT」楽曲提供",
    date: "2022-02-17",
    category: ["game"],
    tags: ["楽曲提供", "音楽ゲーム", "アプリ"],
    description: "「Secret Order」を提供させていただきました。",
    youtube: "",
    soundcloudUrl: "",
    // 外部リンク（Bandcamp・Webサイト・その他）を配列で管理
    externalLinks: [
      { label: "WAVEAT公式サイト", url: "https://waveat.a-zero.net/" },
    ],
    thumbnail: "",
  },
  {
    id: "work-21-01-29",
    title: "StrayCubic様 「TAKUMI³」楽曲採用",
    date: "2021-01-29",
    category: ["game", "submission"],
    tags: ["楽曲採用", "音楽ゲーム", "アプリ"],
    description: "「Secret Order」を採用していただきました。",
    youtube: "",
    soundcloudUrl: "",
    externalLinks: [],
    thumbnail: "",
  },
];

export const allWorkTags = [...new Set(works.flatMap(w => w.tags))].sort();
