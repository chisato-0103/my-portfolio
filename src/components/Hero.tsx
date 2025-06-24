import { useState, useEffect } from "react";

interface HeroProps {
  onNavigate: (sectionIndex: number) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hello, I am 粉雪";

  // タイピングエフェクト
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            {displayText}
            <span className="cursor">|</span>
          </h1>
          <h2 className="hero-subtitle">Student Developer & Game Creator</h2>
          <p className="hero-description">
            コードで世界を変える。ゲームで人を感動させる。
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => onNavigate(3)}>
              View Projects
            </button>
            <button className="btn-outline" onClick={() => onNavigate(4)}>
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-icons">
            <div className="icon">💻</div>
            <div className="icon">🎮</div>
            <div className="icon">⚡</div>
            <div className="icon">🚀</div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
