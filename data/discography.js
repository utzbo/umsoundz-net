// ============================================
// ディスコグラフィーデータ
// 楽曲を追加するときはオブジェクトを追加するだけ（表示は日付の新しい順）
//   youtube:   YouTubeのVideo ID（URLのv=以降）
//   embedUrl:  SoundCloud等のiframe src URL（任意）
//   thumbnail: YouTubeが無い場合のサムネイル画像パス（任意）
// ============================================

export const discography = [
  {
    id: "UMSZ-001",
    title: "ORIENTAL RADIANCE Vol.1",
    date: "2025-10-26",
    tags: ["オリジナル", "アルバム", "コンピレーション"],
    description: "Ultramarine Soundzが贈る、豪華ゲストによる計12曲のOrientalcoreが収録されたコンピレーションアルバムです。",
    youtube: "5AW7ATmuPUg",
    links: [
      { label: "特設サイト", url: "https://oriental-radiance-01.tumblr.com/" },
    ],
  },
  {
    id: "UZBCD-004",
    title: "ETHEREAL EP",
    date: "2025-04-22",
    tags: ["オリジナル", "EP"],
    description: "utzboによるファンタジー、ケルティック系の過去曲をまとめたEPです。",
    youtube: "JE-LC83MNUQ",
    links: [
      { label: "bandcamp", url: "https://utzbo.bandcamp.com/album/ethereal-ep" },
    ],
  },
  {
    id: "UZBCD-003",
    title: "Hyper Orient",
    date: "2024-10-27",
    tags: ["オリジナル", "アルバム"],
    description: "utzboによる「オリエンタル」をテーマにした2ndアルバムです。",
    youtube: "HaYaJtwRbec",
    links: [
      { label: "特設サイト", url: "https://hyper-orient.tumblr.com/" },
    ],
  },
  {
    id: "UZBCD-002",
    title: "Gymholax EP",
    date: "2023-04-30",
    tags: ["オリジナル", "EP"],
    description: "「Gymholax」名義での6曲入りEPです。",
    youtube: "Z58a3ZiOwpg",
    links: [
      { label: "特設サイト", url: "https://gymholax-ep.netlify.app/" },
    ],
  },
  {
    id: "utzbo-serum-presets",
    title: "utzbo SERUM Presets",
    date: "2023-04-30",
    tags: ["オリジナル", "プリセット・サンプルパック"],
    description: "utzboによるSerumのプリセットパックです。\n計91個のプリセット+αが同梱されています。",
    youtube: "rTn-LQjecOU",
    links: [
      { label: "Booth", url: "https://utzbo.booth.pm/items/4706001" },
    ],
  },
  {
    id: "UZBCD-001-2",
    title: "Infinite Colors +",
    date: "2021-12-31",
    tags: ["オリジナル", "EP"],
    description: "2曲入りのプチEPです。",
    youtube: "x_HQX7mN4XU",
    links: [
      { label: "Bandcamp", url: "https://utzbo.bandcamp.com/album/infinite-colors-2" },
    ],
  },
  {
    id: "UZBCD-001",
    title: "Infinite Colors",
    date: "2021-10-24",
    tags: ["オリジナル", "アルバム"],
    description: "様々な色(ジャンル)が入り混じった utzbo 1st Album",
    youtube: "N_ngS0FpydQ",
    links: [
      { label: "Bandcamp", url: "https://utzbo.bandcamp.com/album/infinite-colors" },
      { label: "メロンブックス", url: "https://www.melonbooks.co.jp/detail/detail.php?product_id=1130080" },
    ],
  },
].sort((a, b) => b.date.localeCompare(a.date));

export const allTags = [...new Set(discography.flatMap(t => t.tags))].sort();
