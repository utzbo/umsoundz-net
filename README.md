# サークルサイト (Ultramarine)

Astro + Tailwind CSS + DaisyUI で作られた個人サークル向けWebサイトテンプレートです。

## セットアップ

```bash
npm install
npm run dev
# → http://localhost:4321
```

---

## カスタマイズ

### サイト情報・リンクの変更
`src/config.js` を編集するだけでサイト全体に反映されます。

### 楽曲を追加する
`data/discography.js` にオブジェクトを追加します。
```js
{
  id: "track-004",           // ユニークなID（URLになります）
  title: "曲名",
  date: "2025-01-01",
  type: "original",          // original / arrange / commission
  tags: ["オリジナル", "ボカロ"],
  description: "説明",
  youtube: "VideoID",        // YouTubeのv=以降
  embedUrl: "",              // SoundCloud等のiframe src
  thumbnail: "",             // public/images/tracks/ に置く場合
  links: [],
},
```

### 実績を追加する
`data/works.js` にオブジェクトを追加します。
```js
{
  id: "work-004",
  title: "実績タイトル",
  date: "2025-01-01",
  category: "event",         // event / commission / award / media / other
  tags: ["M3", "イベント"],
  description: "説明",
  youtube: "",
  externalUrl: "https://...",
  externalLabel: "詳細を見る",
  thumbnail: "",
},
```

### テーマカラーの変更
`tailwind.config.mjs` の `ultramarine` テーマ内の色を変更します。

### ロゴ・アバター画像の設定
`public/images/` に画像を置き、`src/config.js` のパスを更新します。

---

## GitHub Pages デプロイ

1. GitHubにリポジトリを作成してpush
2. Settings → Pages → Source を **GitHub Actions** に設定
3. `astro.config.mjs` の `site` と `base` をリポジトリに合わせて変更

```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',  // カスタムドメインの場合は削除
});
```

`main` ブランチにpushすると自動デプロイされます。
