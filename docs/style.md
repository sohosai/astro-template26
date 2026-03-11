# スタイル規約

## 基本方針

- **SCSS** を使用する（`sass` パッケージ導入済み）
- **CSS Modules** を使用する（`.module.scss`）
- コンポーネントと同階層に同名のファイルを配置する

```
src/components/common/
  Button.astro
  Button.module.scss
```

### 使い方

```astro
---
import styles from "./Button.module.scss";
---

<button class={styles.button}>
  <slot />
</button>
```

```scss
// Button.module.scss
.button {
  display: inline-flex;
  padding: 0.75em 1.5em;
}
```

## Linting

- **Stylelint** でリント・プロパティ順序を管理
- プロパティ順序は **Recess order**（`stylelint-config-recess-order`）に準拠
- `reset.css` はリント対象外
