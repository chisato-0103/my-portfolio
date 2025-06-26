export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card featured">
            <div className="project-header">
              <h3>東京ゲームショウ 2025 プロジェクト</h3>
              <span className="project-status">開発中</span>
            </div>
            <p className="project-description">
              Unity + LiDARセンサーを使ったゲーム。
              スクリーンに向かって実際に物を投げて遊ぶゲームで、
              LiDARセンサーが投げられた物体をスキャン・認識します。
            </p>
            <div className="project-tech">
              <span className="tech-tag">Unity</span>
              <span className="tech-tag">C#</span>
              <span className="tech-tag">LiDAR</span>
              <span className="tech-tag">物理演算</span>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/chisato-0103/TGS2025.git"
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
              <h3>東京ゲームショウ 2024 プロジェクト</h3>
              <span className="project-status">完了</span>
            </div>
            <p className="project-description">
              去年の東京ゲームショウで展示したゲーム作品。
              初めてのゲーム開発チャレンジとして制作しました。
            </p>
            <div className="project-tech">
              <span className="tech-tag">Unity</span>
              <span className="tech-tag">C#</span>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/chisato-0103/TGS2024.git"
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
            <div className="project-links">
              <a
                href="https://github.com/chisato-0103/my-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
