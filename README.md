# Astro Template

## セットアップ

```bash
bun install
bun dev
```

## よく使うコマンド

| コマンド                 | 用途                                                                |
| ------------------------ | ------------------------------------------------------------------- |
| `bun dev`                | 開発サーバーを起動                                                  |
| `bun run build`          | 本番用にビルド                                                      |
| `bun run preview`        | ビルド済みのサイトをローカルで確認                                  |
| `bun run typecheck`      | TypeScript の型チェックを実行                                       |
| `bun run lint`           | ESLint と Stylelint でコードとスタイルを検査                        |
| `bun run lint:eslint`    | ESLint のみ実行                                                     |
| `bun run lint:stylelint` | Stylelint のみ実行                                                  |
| `bun run format`         | Prettier で整形                                                     |
| `bun run check`          | ESLint、Prettier、Stylelint の自動修正をまとめて実行                |
| `bun run ci`             | CI 向けの検査を実行。自動修正はせず、整形差分やlintエラーを検出する |

### 整形・lintの使い分け

- 作業中にまとめて直す場合は `bun run check` を使います。import順、未使用import、Prettier整形、CSS/SCSS/AstroのStylelint自動修正が対象です。
- エラー確認だけをしたい場合は `bun run lint` を使います。
- CIと同じ確認をローカルで行う場合は `bun run ci` を使います。`ci` は自動修正しないため、失敗した場合は `bun run check` で直してから再実行してください。
- commit時は Lefthook の `pre-commit` でESLint、Prettier、Stylelintの自動修正がstaged filesに対して実行されます。
- push時の `pre-push` は main ブランチへの直接push確認のみで、lintは実行しません。

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
| 言語      | `src/layouts/Layout.astro`   | `<html lang="ja">` をプロジェクトの言語に変更       |
| タイトル  | `src/pages/index.astro`      | デフォルトの `title` を変更                         |
| 404       | `src/pages/404.astro`        | エラーメッセージをプロジェクトに合わせて変更        |

## ドキュメント

- [コンポーネント規約](docs/component.md)
- [スタイル規約](docs/style.md)
- [画像規約](docs/image.md)
- [SEO 規約](docs/seo.md)
