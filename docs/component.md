# コンポーネント規約

## ディレクトリ構成

ページ文脈ベースで分類する。ディレクトリ名はページのパスと一致させる。

```
src/components/
  common/           # 全ページ共通（Header, Footer, Button など）
  home/             # トップページ固有
  about/            # /about ページ固有
  services/web/     # /services/web ページ固有
```

### 共通化のルール

- コンポーネントは最初にページディレクトリに配置する
- **2箇所以上で使う時点で `common/` に移動**する

## ファイル命名

- **PascalCase** を使用する（例: `HeroSection.astro`）

## Props

- Propsがある場合は `interface Props {}` を必ず定義する
- Propsがない場合は省略可

```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---
```

## 備考

- スタイルの規約は [style.md](./style.md) を参照
- Biomeの `noUnusedImports` / `noUnusedVariables` は `.astro` ファイルではテンプレート部分を認識できないため、overridesで無効化している
- 将来的にESLint + eslint-plugin-astro への移行を検討する可能性あり
