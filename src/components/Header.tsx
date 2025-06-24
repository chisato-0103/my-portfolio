import { useState } from "react";

// TypeScriptの型定義：コンポーネントが受け取るpropsの型を明確に定義
interface HeaderProps {
  onNavigate: (sectionIndex: number) => void; // 関数型：数値を受け取り何も返さない
  activeSection: number; // 現在アクティブなセクションのインデックス
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  // モバイルメニューの開閉状態を管理
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ナビゲーションメニューの項目を配列で定義
  // 後でmapメソッドで動的にレンダリングするため
  const navItems = [
    { label: "Home", index: 0 },
    { label: "About", index: 1 },
    { label: "Skills", index: 2 },
    { label: "Projects", index: 3 },
    { label: "Contact", index: 4 },
  ];

  // メニュー項目クリック時の処理
  const handleNavItemClick = (index: number) => {
    onNavigate(index);
    setIsMobileMenuOpen(false); // モバイルメニューを閉じる
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* ロゴ部分：クリックでトップに戻る */}
        <div
          className="nav-logo"
          onClick={() => handleNavItemClick(0)}
          style={{ cursor: "pointer" }} // カーソルをポインターに
        >
          chisato
        </div>

        {/* ハンバーガーメニューボタン（モバイル用） */}
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="メニューを開く"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* デスクトップ用ナビゲーションメニュー */}
        <ul className="nav-menu desktop-menu">
          {/* 配列をmapでループしてメニュー項目を動的生成 */}
          {navItems.map((item) => (
            <li
              key={item.index} // Reactで配列をレンダリングする際は一意のkeyが必要
              onClick={() => handleNavItemClick(item.index)}
              // 条件付きクラス名：現在のセクションがアクティブな場合は特別なスタイル
              className={
                activeSection === item.index ? "nav-item active" : "nav-item"
              }
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* モバイル用ナビゲーションメニュー */}
        <ul
          className={`nav-menu mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
        >
          {navItems.map((item) => (
            <li
              key={`mobile-${item.index}`}
              onClick={() => handleNavItemClick(item.index)}
              className={
                activeSection === item.index ? "nav-item active" : "nav-item"
              }
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
