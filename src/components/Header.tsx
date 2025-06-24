interface HeaderProps {
  onNavigate: (sectionIndex: number) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">粉雪</div>
        <ul className="nav-menu">
          <li onClick={() => onNavigate(0)}>Home</li>
          <li onClick={() => onNavigate(1)}>About</li>
          <li onClick={() => onNavigate(2)}>Skills</li>
          <li onClick={() => onNavigate(3)}>Projects</li>
          <li onClick={() => onNavigate(4)}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
