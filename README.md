# 🎮 chisato's Portfolio

> コードで世界を変える。ゲームで人を感動させる。

**東京ゲームショウ参加予定**の学生開発者 **chisato** のポートフォリオサイトです。Unity + LiDAR を活用したゲーム開発と、React + TypeScript + Vite で構築されたモダンな Web 開発の両方を手がけています。

## 🌐 ライブデモ

**[https://chisato-0103.github.io/my-portfolio/](https://chisato-0103.github.io/my-portfolio/)**

## ✨ 特徴

### 🎨 デザイン・UI/UX

- **フラッシュアニメーション**: 超派手なアニメーション効果
- **レスポンシブデザイン**: 5 段階のブレークポイント対応
- **ハンバーガーメニュー**: スマホ向けの直感的ナビゲーション
- **3D エフェクト**: フローティングアイコンとホログラム効果
- **ダークテーマ**: プロフェッショナルな配色設計

### 📱 モバイル対応

- **1025px+**: デスクトップ（フル機能）
- **769-1024px**: タブレット（2 カラムレイアウト）
- **481-768px**: スマートフォン（1 カラム + ハンバーガーメニュー）
- **351-480px**: 小型スマホ（コンパクトレイアウト）
- **~350px**: 極小デバイス（最小化レイアウト）

### 🚀 パフォーマンス

- **GPU アクセラレーション**: `will-change`プロパティでスムーズなアニメーション
- **遅延読み込み**: LazyImage コンポーネントによる最適化
- **IntersectionObserver**: セクション検出とアニメーション制御
- **軽量化**: 不要なアニメーションの削除と CPU 使用率の最適化

### 🎯 技術スタック

**フロントエンド**

- React 18 + TypeScript
- Vite (高速ビルドツール)
- CSS Modules + カスタム CSS

**UI/UX**

- CSS Grid & Flexbox
- CSS Animations & Transitions
- Intersection Observer API
- Responsive Web Design

**デプロイ**

- GitHub Pages
- GitHub Actions (CI/CD)

**ゲーム開発**

- Unity (ゲームエンジン)
- LiDAR (3D スキャン・AR 技術)
- C# (Unity スクリプティング)

**開発支援**

- GitHub Copilot (AI ペアプログラミング)
- TypeScript (型安全性)
- ESLint + Prettier (コード品質)

## 🤖 AI 駆動開発

このプロジェクトは **GitHub Copilot** をフル活用したモダンな開発手法で構築されています：

### 🎯 GitHub Copilot の活用範囲

**コード生成**

- React コンポーネントの自動生成
- TypeScript 型定義の提案
- CSS アニメーションの実装支援
- Unity C# スクリプトの開発支援

**アーキテクチャ設計**

- モジュラー設計の提案
- パフォーマンス最適化の実装
- レスポンシブデザインのブレークポイント設計
- Unity プロジェクトの効率的な構成設計

**品質向上**

- バグの早期発見と修正提案
- ベストプラクティスの適用
- コードレビューとリファクタリング

### 💡 AI との協働メリット

- **開発速度の向上**: 繰り返し作業の自動化
- **コード品質**: ベストプラクティスの自動適用
- **学習効率**: 新しい技術パターンの習得
- **創造性**: アイデアの具現化に集中

## 📂 プロジェクト構成

```
src/
├── components/          # Reactコンポーネント
│   ├── Header.tsx      # ナビゲーションヘッダー
│   ├── Hero.tsx        # ヒーローセクション
│   ├── About.tsx       # 自己紹介セクション
│   ├── Skills.tsx      # スキルセクション
│   ├── Projects.tsx    # プロジェクトセクション
│   ├── Contact.tsx     # コンタクトセクション
│   ├── Footer.tsx      # フッター
│   └── LazyImage.tsx   # 遅延読み込み画像コンポーネント
├── styles/             # スタイルシート
│   ├── globals.css     # グローバルスタイル
│   ├── navigation.css  # ナビゲーション用スタイル
│   └── sections.css    # セクション用スタイル
├── App.tsx            # メインアプリケーション
└── main.tsx           # エントリーポイント
```

## 🛠️ 開発環境のセットアップ

### 前提条件

- Node.js 18.0.0 以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/chisato-0103/my-portfolio.git
cd my-portfolio

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

### ビルド

```bash
# プロダクション用ビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## 🎨 カスタマイズ

### カラーテーマの変更

`src/styles/globals.css` で主要なカラー変数を変更できます：

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --background-dark: #0a0a0a;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
}
```

### アニメーションの調整

`src/styles/sections.css` でアニメーションの設定を変更できます：

```css
/* アニメーション速度の調整 */
.skill-progress {
  transition: width 1.5s ease;
}

/* モーション設定を尊重する場合の無効化 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}
```

## 📱 ブラウザサポート

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 🚀 デプロイ

このプロジェクトは GitHub Actions を使用して自動デプロイされます：

1. `main`ブランチへのプッシュ
2. 自動ビルド＆テスト
3. GitHub Pages へのデプロイ

## 📄 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 👤 作者

**chisato** - Student Developer & Game Creator

> AI とペアプログラミングを駆使して、次世代の Web 体験とゲーム体験を創造する学生開発者

**特徴**

- GitHub Copilot を活用したモダン開発手法
- 東京ゲームショウ参加予定のゲーム開発者（Unity + LiDAR 技術）
- フロントエンド技術とアニメーション表現への情熱
- Web 開発からゲーム開発まで幅広い技術領域をカバー

**リンク**

- Portfolio: [https://chisato-0103.github.io/my-portfolio/](https://chisato-0103.github.io/my-portfolio/)
- GitHub: [@chisato-0103](https://github.com/chisato-0103)

---

⭐ このプロジェクトが気に入ったら、ぜひスターを付けてください！

💡 **GitHub Copilot** と **人間の創造性** の融合によって生まれたポートフォリオサイトです。AI 時代の新しい開発スタイルを体験してみてください。

### 🎮 東京ゲームショウプロジェクト

**使用技術**

- **Unity 2023.x**: 3D ゲーム開発
- **LiDAR**: リアルタイム 3D スキャン・環境認識
- **C#**: ゲームロジック・UI システム
- **AR Foundation**: 拡張現実機能

**実装内容**

- LiDAR センサーを活用した空間認識システム
- リアルタイム 3D 環境マッピング
- Unity と AR 技術の融合
- インタラクティブなゲーム体験の創造
