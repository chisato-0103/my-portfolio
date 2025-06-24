// TypeScriptの型定義：コンポーネントが受け取るpropsの型を明確に定義
interface HeaderProps {
  onNavigate: (sectionIndex: number) => void; // 関数型：数値を受け取り何も返さない
  activeSection: number; // 現在アクティブなセクションのインデックス
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  // ナビゲーションメニューの項目を配列で定義
  // 後でmapメソッドで動的にレンダリングするため
  const navItems = [
    { label: "Home", index: 0 },
    { label: "About", index: 1 },
    { label: "Skills", index: 2 },
    { label: "Projects", index: 3 },
    { label: "Contact", index: 4 },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* ロゴ部分：クリックでトップに戻る */}
        <div
          className="nav-logo"
          onClick={() => onNavigate(0)}
          style={{ cursor: "pointer" }} // カーソルをポインターに
        >
          粉雪
        </div>

        {/* ナビゲーションメニュー */}
        <ul className="nav-menu">
          {/* 配列をmapでループしてメニュー項目を動的生成 */}
          {navItems.map((item) => (
            <li
              key={item.index} // Reactで配列をレンダリングする際は一意のkeyが必要
              onClick={() => onNavigate(item.index)}
              // 条件付きクラス名：現在のセクションがアクティブな場合は特別なスタイル
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
