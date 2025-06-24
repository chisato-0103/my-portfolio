export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card featured">
            <div className="project-header">
              <h3>東京ゲームショウ プロジェクト</h3>
              <span className="project-status">開発中</span>
            </div>
            <p className="project-description">
              東京ゲームショウに出展予定のゲームプロジェクト。
              革新的なゲームプレイと技術的チャレンジを組み合わせた作品です。
            </p>
            <div className="project-tech">
              <span className="tech-tag">C++</span>
              <span className="tech-tag">Game Engine</span>
              <span className="tech-tag">Graphics</span>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/chisato-0103"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub →
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>Web Portfolio</h3>
              <span className="project-status">完了</span>
            </div>
            <p className="project-description">
              React + TypeScriptで構築したモダンなポートフォリオサイト。
              アニメーションとインタラクティブな要素を含む。
            </p>
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
