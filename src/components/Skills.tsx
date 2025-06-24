import { useState, useEffect, useRef, useCallback, useMemo } from "react";

// TypeScript型定義
interface Skill {
  name: string;
  level: number;
  color: string;
}

export default function Skills() {
  // スキルのプログレスバーアニメーション用のstate
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // スキルデータ配列をuseMemoでメモ化してパフォーマンス最適化
  const skills: Skill[] = useMemo(
    () => [
      { name: "Unity", level: 65, color: "#000000" },
      { name: "C#", level: 60, color: "#239120" },
      { name: "React", level: 55, color: "#61DAFB" },
      { name: "JavaScript", level: 50, color: "#F7DF1E" },
      { name: "HTML/CSS", level: 80, color: "#e34c26" },
      { name: "Python", level: 40, color: "#3776ab" },
      { name: "Flask", level: 35, color: "#000000" },
      { name: "C", level: 60, color: "#00599C" },
      { name: "C++", level: 28, color: "#f34b7d" },
      { name: "Java", level: 50, color: "#ED8B00" },
    ],
    []
  );

  // スキルバーのアニメーション関数をuseCallbackでメモ化
  const animateSkillBars = useCallback(() => {
    // 各スキルのプログレスバーを時間差で0から目標値まで滑らかにアニメーション
    skills.forEach((skill, index) => {
      setTimeout(() => {
        // 0から目標値まで滑らかにアニメーション
        let currentLevel = 0;
        const targetLevel = skill.level;
        const increment = targetLevel / 60; // 1秒間で60フレーム

        const animate = () => {
          currentLevel += increment;
          if (currentLevel >= targetLevel) {
            currentLevel = targetLevel;
            // 最終値をstateに保存
            setAnimatedLevels((prev) => {
              const newLevels = [...prev];
              newLevels[index] = currentLevel;
              return newLevels;
            });
          } else {
            // 途中の値をstateに保存
            setAnimatedLevels((prev) => {
              const newLevels = [...prev];
              newLevels[index] = currentLevel;
              return newLevels;
            });
            requestAnimationFrame(animate);
          }
        };
        animate();
      }, index * 200); // 各スキルのアニメーションを200ms間隔で開始
    });
  }, [skills]);

  // スクロール位置の監視でアニメーションを開始
  useEffect(() => {
    // Intersection Observer APIを使用してセクションの表示を監視
    // これにより、セクションが画面に入ったときだけアニメーションを開始
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // スキルバーのアニメーションを順番に開始
            animateSkillBars();
          }
        });
      },
      {
        threshold: 0.3, // セクションの30%が見えたらアニメーション開始
        rootMargin: "0px 0px -100px 0px", // 少し早めに開始
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // クリーンアップ
    return () => observer.disconnect();
  }, [isVisible, animateSkillBars]);

  return (
    <section className="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-item ${isVisible ? "skill-item-animated" : ""}`}
              style={{
                animationDelay: `${index * 0.1}s`, // 各アイテムを順番にアニメーション
              }}
            >
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage skill-percentage-animated">
                  {Math.round(animatedLevels[index] || 0)}%
                </span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress skill-progress-animated"
                  style={{
                    width: `${animatedLevels[index] || 0}%`,
                    backgroundColor: skill.color,
                    // 各スキルに応じた動的なシャドウ効果
                    boxShadow: `0 0 20px ${skill.color}40, inset 0 0 20px ${skill.color}20`,
                  }}
                />
              </div>

              {/* スキルレベルに応じた視覚的エフェクト */}
              {skill.level >= 85 && (
                <div className="skill-excellence-badge">
                  <span className="badge-icon">⭐</span>
                  <span className="badge-text">Expert</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
