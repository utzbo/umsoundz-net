// ============================================
// サイト全体の設定ファイル
// ここを編集するだけでサイト全体に反映されます
// ============================================

export const SITE_CONFIG = {
  // サークル基本情報
  name: "Ultramarine Soundz",
  description: "前身サークルを改名し、2025年に立ち上げた同人音楽サークル。\nutzboによる個人アルバムの他、コンピレーションアルバム等さまざまな作品を制作しています。",

  // 主催者情報
  organizer: {
    name: "utzbo",
    role: "Composer / Arranger",
    bio: "2017年から音楽制作を開始。\n電子音楽を中心に、ジャンルを問わず様々な楽曲を制作しています。音楽ゲームへの書き下ろしやアルバム制作など精力的に活動中。",
    avatar: "/images/utzbo_logo.png",  // public/images/ に画像を置く
  },

  // ロゴ（public/images/ に置く。未設定時はテキスト表示）
  logo: "/images/logo.svg",
  favicon: "/favicon.png",

  // SNS・外部リンク
  links: [
    { label: "X (Twitter)", url: "https://twitter.com/utzzbo" },
    { label: "YouTube",     url: "https://youtube.com/@utzbo" },
    { label: "SoundCloud",  url: "https://soundcloud.com/utzbo" },
    { label: "Skeb",        url: "https://skeb.jp/@utzzbo" },
    { label: "bandcamp",    url: "https://utzbo.bandcamp.com/" },
    { label: "Spotify",     url: "https://open.spotify.com/artist/2jRusHcGFTiPAmZPiErlTQ" },
    { label: "Apple Music", url: "https://music.apple.com/jp/artist/utzbo/1750697434" },
  ],

  // 問い合わせ
  contact: {
    email: "semiutsubo[at]gmail.com",
    formUrl: "",   // Googleフォーム等のURL（使う場合）
    note: "楽曲の制作及び使用依頼、マスタリング依頼等は下記メールアドレスにお送りください。\n※現在制作・マスタリング依頼は有償のみとさせていただいております。",
  },
};
