# Astro Template

## セットアップ

```bash
bun install
bun dev
```

## プロジェクト開始時に変更する項目

| 項目      | ファイル                     | 変更内容                                            |
| --------- | ---------------------------- | --------------------------------------------------- |
| サイトURL | `astro.config.mjs`           | `site` を実際のドメインに変更                       |
| サイトURL | `public/robots.txt`          | `Sitemap` の URL を実際のドメインに変更             |
| OGP 画像  | `public/images/ogp.jpg`      | デフォルトの OGP 画像を配置                         |
| favicon   | `public/`                    | `favicon.svg` / `favicon.ico` を差し替え            |
| フォント  | `src/layouts/Layout.astro`   | Google Fonts の読み込みをプロジェクトに合わせて変更 |
| フォント  | `src/styles/_variables.scss` | `--font-family-base` / `--font-family-en` を変更    |
| カラー    | `src/styles/_variables.scss` | `--color-*` をデザインに合わせて変更                |

## ドキュメント

- [コンポーネント規約](docs/component.md)
- [スタイル規約](docs/style.md)
- [画像規約](docs/image.md)
- [SEO 規約](docs/seo.md)
