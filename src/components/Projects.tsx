export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card featured">
            <div className="project-header">
              <h3>東京ゲームショウ AR プロジェクト</h3>
              <span className="project-status">開発中</span>
            </div>
            <p className="project-description">
              Unity + LiDARセンサーを活用した革新的な空間認識ゲーム。
              リアルタイム3D環境マッピングとAR技術を融合し、
              プレイヤーの周囲の空間をゲームフィールドとして活用する新感覚の体験を提供します。
            </p>
            <div className="project-tech">
              <span className="tech-tag">Unity 2023.x</span>
              <span className="tech-tag">C#</span>
              <span className="tech-tag">LiDAR</span>
              <span className="tech-tag">AR Foundation</span>
              <span className="tech-tag">3D Mapping</span>
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
