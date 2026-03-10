/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        ultramarine: {
          "primary":          "#1a7fd4",   // 明るめの濃い青
          "primary-content":  "#ffffff",
          "secondary":        "#2ba3e8",   // 水面の青
          "secondary-content":"#ffffff",
          "accent":           "#93d4f8",   // 光の差し込む水色
          "neutral":          "#1a6bbf",   // ナビ・フッターの深青（暗くしすぎない）
          "neutral-content":  "#ffffff",
          "base-100":         "#e8f4fd",   // 背景
          "base-200":         "#cce6f8",
          "base-300":         "#a3d0f0",
          "base-content":     "#062040",
          "info":             "#38bdf8",
          "success":          "#34d399",
          "warning":          "#fbbf24",
          "error":            "#f87171",
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
  },
};
