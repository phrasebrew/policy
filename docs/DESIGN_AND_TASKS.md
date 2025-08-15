# 利用規約・プライバシーポリシーページ 設計書

## 概要

PhraseBrewの利用規約とプライバシーポリシーをGitHub Pages（phrasebrew.github.io）で公開するための設計とタスク分解。
モバイルアプリのデザインシステムを参考に、シンプルで読みやすいWebページを構築する。

## プロジェクト構成

```
phrasebrew/policy/
├── src/
│   ├── pages/
│   │   ├── terms.astro        # 利用規約
│   │   └── privacy.astro      # プライバシーポリシー
│   ├── layouts/
│   │   └── Layout.astro       # 共通レイアウト
│   ├── styles/
│   │   └── global.css         # グローバルスタイル
│   └── content/               # ポリシー文書（Markdown）
│       ├── terms.md
│       └── privacy.md
├── public/
│   ├── CNAME                  # カスタムドメイン設定
│   └── favicon.ico
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages自動デプロイ
├── astro.config.mjs           # Astro設定
├── package.json
└── tsconfig.json
```

## デザインシステム（シンプル版）

### カラーパレット

```css
:root {
  /* ブランドカラー（モバイルアプリから継承） */
  --color-primary: #B8814F;
  --color-espresso: #4A2E2C;
  --color-cream: #F5E6D3;
  
  /* テキストカラー */
  --color-text: #1a1a1a;
  --color-text-secondary: #666666;
  
  /* 背景 */
  --color-bg: #ffffff;
  --color-bg-secondary: #f9f9f9;
  
  /* ボーダー */
  --color-border: #e5e5e5;
}

/* ダークモード */
@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #f0f0f0;
    --color-text-secondary: #a0a0a0;
    --color-bg: #1a1a1a;
    --color-bg-secondary: #2a2a2a;
    --color-border: #404040;
  }
}
```

### タイポグラフィ

```css
/* モダンな日本語フォント */
font-family: "BIZ UDPGothic", sans-serif;

/* Google Fontsからの読み込み（BIZ UDPGothic: ユニバーサルデザイン対応） */
@import url('https://fonts.googleapis.com/css2?family=BIZ+UDPGothic:wght@400;700&display=swap');

/* サイズ */
--text-xl: 2rem;     /* h1 */
--text-lg: 1.5rem;   /* h2 */
--text-md: 1.125rem; /* h3 */
--text-base: 1rem;   /* body */
--text-sm: 0.875rem; /* small */

/* 日本語向け最適化 */
font-feature-settings: "palt" 1; /* 文字詰め */
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

### スペーシング

```css
--space-xs: 0.5rem;
--space-sm: 1rem;
--space-md: 1.5rem;
--space-lg: 2rem;
--space-xl: 3rem;
```

## ページ実装

### Layout.astro（共通レイアウト）

```astro
---
export interface Props {
  title: string;
  description?: string;
}

const { title, description = "PhraseBrewの法的文書" } = Astro.props;
---

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} - PhraseBrew</title>
  <meta name="description" content={description}>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=BIZ+UDPGothic:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles/global.css">
</head>
<body>
  <header>
    <nav>
      <span class="brand">PhraseBrew</span>
      <a href="/terms">利用規約</a>
      <a href="/privacy">プライバシーポリシー</a>
    </nav>
  </header>
  
  <main>
    <slot />
  </main>
  
  <footer>
    <p>© 2024 PhraseBrew. All rights reserved.</p>
    <p>最終更新日: {new Date().toLocaleDateString('ja-JP')}</p>
  </footer>
</body>
</html>
```

### 利用規約ページ構成

1. **サービス概要**
2. **利用条件**
3. **アカウント登録**
4. **利用料金とサブスクリプション**
5. **ユーザーの責任**
6. **知的財産権**
7. **プライバシー**
8. **免責事項**
9. **サービスの変更・終了**
10. **準拠法と管轄**
11. **お問い合わせ**

### プライバシーポリシーページ構成

1. **個人情報の定義**
2. **収集する情報**
3. **情報の利用目的**
4. **情報の共有と開示**
5. **データの保管とセキュリティ**
6. **Cookieの使用**
7. **第三者サービス**
8. **児童のプライバシー**
9. **ユーザーの権利**
10. **ポリシーの変更**
11. **お問い合わせ先**

## 技術スタック

### コア技術
- **Astro** - 静的サイトジェネレーター
- **Markdown** - コンテンツ管理
- **CSS** - スタイリング（CSS変数でテーマ管理）

### デプロイ
- **GitHub Actions** - 自動ビルド・デプロイ
- **GitHub Pages** - ホスティング

## タスク分解

### Phase 1: 基盤構築（0.5日）

- [x] Astroプロジェクト初期化
- [x] 基本ディレクトリ構成作成（layouts, styles, content）
- [x] Git リポジトリ設定
- [x] GitHub Pages設定

### Phase 2: スタイル設定（0.5日）

- [x] global.css作成（CSS変数定義）
- [x] レスポンシブデザイン対応

### Phase 3: レイアウト実装（0.5日）

- [x] Layout.astro作成
- [x] ヘッダー・フッター実装
- [x] ナビゲーション実装

### Phase 4: コンテンツ作成（1日）

- [x] 利用規約（references/terms.md）- 参考資料完成
- [x] プライバシーポリシー（references/privacy-policy.md）- 参考資料完成
- [ ] src/content/への移行または直接利用の実装

### Phase 5: ページ実装（0.5日）

- [ ] terms.astro（利用規約）
- [ ] privacy.astro（プライバシーポリシー）

### Phase 6: デプロイ（0.5日）

- [ ] GitHub Actions workflow作成
- [ ] Astroビルド設定（GitHub Pages用）
- [ ] CNAME設定
- [ ] デプロイテスト

### Phase 7: 最終調整（0.5日）

- [ ] レスポンシブデザイン確認
- [ ] ブラウザ互換性テスト
- [ ] アクセシビリティチェック
- [ ] README.md作成

**合計工数: 約3.5日**

## Astro実装サンプル

### terms.astro の例

```astro
---
import Layout from '../layouts/Layout.astro';
import { Content as TermsContent } from '../content/terms.md';
---

<Layout title="利用規約" description="PhraseBrewサービス利用規約">
  <article class="policy-content">
    <h1>利用規約</h1>
    <p class="last-updated">最終更新日: 2024年1月1日</p>
    
    <nav class="toc">
      <h2>目次</h2>
      <ol>
        <li><a href="#overview">サービス概要</a></li>
        <li><a href="#conditions">利用条件</a></li>
        <li><a href="#account">アカウント登録</a></li>
        <!-- 他のセクション -->
      </ol>
    </nav>
    
    <TermsContent />
  </article>
</Layout>

<style>
  .policy-content {
    max-width: 800px;
    margin: 0 auto;
    padding: var(--space-lg);
  }
  
  .toc {
    background: var(--color-bg-secondary);
    padding: var(--space-md);
    border-radius: 8px;
    margin-bottom: var(--space-xl);
  }
  
  .last-updated {
    color: var(--color-text-secondary);
    font-size: var(--text-sm);
  }
</style>
```

### global.css の構成

```css
/* リセット */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ベーススタイル */
body {
  font-family: "BIZ UDPGothic", sans-serif;
  line-height: 1.8; /* 日本語の可読性向上のため行間を広く */
  color: var(--color-text);
  background: var(--color-bg);
}

/* ヘッダー */
header {
  background: var(--color-cream);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-md);
}

header nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: var(--space-lg);
  align-items: center;
}

header a {
  color: var(--color-espresso);
  text-decoration: none;
  font-weight: 500;
}

header .brand {
  font-weight: 700;
  color: var(--color-primary);
  margin-right: auto;
}

/* フッター */
footer {
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  padding: var(--space-lg);
  text-align: center;
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
}

/* レスポンシブ */
@media (max-width: 768px) {
  header nav {
    flex-direction: column;
    gap: var(--space-sm);
  }
  
  header .brand {
    margin-right: 0;
  }
}
```

## 成功基準

- **シンプルさ**: 最小限の依存関係とビルド時間
- **パフォーマンス**: Lighthouse スコア 95以上
- **アクセシビリティ**: セマンティックHTML、適切なコントラスト
- **保守性**: Markdownでコンテンツ管理

## 参考リソース

- [Astro Documentation](https://docs.astro.build)
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [MDN Web Docs - CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)