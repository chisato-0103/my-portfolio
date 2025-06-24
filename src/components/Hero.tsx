import { useState, useEffect, useMemo } from "react";

// TypeScript型定義
interface HeroProps {
  onNavigate: (sectionIndex: number) => void;
}

/**
 * Heroセクション - 軽量高パフォーマンス版
 * 
 * 主な軽量化ポイント：
 * - パーティクルエフェクトを削除（最重要）
 * - マウス追従エフェクトを削除
 * - CSS animationを使用してJSアニメーションを削減
 * - タイピングエフェクトのみを残してパフォーマンス重視
 */
export default function Hero({ onNavigate }: HeroProps) {
  // タイピングエフェクト用のstate
  const [displayText, setDisplayText] = useState("");

  // 複数のメッセージを順番に表示するための配列
  // useMemoでメモ化してパフォーマンス最適化
  const messages = useMemo(
    () => [
      "Hello, I am 粉雪",
      "Student Developer",
      "Game Creator",
      "東京ゲームショウ参加予定！",
    ],
    []
  );

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // 軽量タイピングエフェクト（間隔を長くしてパフォーマンス向上）
  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    let timeoutId: number;

    if (!isDeleting) {
      // 文字を追加する処理
      if (displayText.length < currentMessage.length) {
        timeoutId = window.setTimeout(() => {
          setDisplayText(currentMessage.slice(0, displayText.length + 1));
        }, 150); // 150ms間隔に延長（軽量化）
      } else {
        // 現在のメッセージの表示が完了したら、少し待ってから削除開始
        timeoutId = window.setTimeout(() => {
          setIsDeleting(true);
        }, 3000); // 3秒間表示（長めに）
      }
    } else {
      // 文字を削除する処理
      if (displayText.length > 0) {
        timeoutId = window.setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 80); // 削除は少し速く
      } else {
        // 削除完了後、次のメッセージに進む
        setIsDeleting(false);
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      }
    }

    // クリーンアップ：タイマーを削除してメモリリークを防ぐ
    return () => window.clearTimeout(timeoutId);
  }, [displayText, isDeleting, currentMessageIndex, messages]);

  return (
    <section className="hero">
      {/* パーティクルエフェクトを削除 - 軽量化の最重要ポイント */}
      
      <div className="hero-content">
        <div className="hero-text">
          {/* 動的タイピングエフェクト付きタイトル */}
          <h1 className="hero-title animated-title">
            {displayText}
            <span className="cursor">|</span>
          </h1>

          {/* サブタイトルにもアニメーション追加 */}
          <h2 className="hero-subtitle animated-subtitle">
            Student Developer & Game Creator
          </h2>

          {/* 説明文にフェードインエフェクト */}
          <p className="hero-description animated-description">
            コードで世界を変える。ゲームで人を感動させる。
          </p>

          {/* シンプルなボタンアニメーション */}
          <div className="hero-buttons">
            <button
              className="btn-primary btn-glow"
              onClick={() => onNavigate(3)}
            >
              <span className="btn-text">View Projects</span>
            </button>

            <button
              className="btn-outline btn-pulse"
              onClick={() => onNavigate(4)}
            >
              <span className="btn-text">Contact Me</span>
            </button>
          </div>
        </div>

        {/* 軽量3Dアニメーション付きアイコン（個数を削減） */}
        <div className="hero-visual">
          <div className="floating-icons-3d">
            {["💻", "🎮", "⚡"].map((icon, index) => (
              <div
                key={index}
                className={`icon-3d icon-${index}`}
                style={{
                  animationDelay: `${index * 1}s`, // アニメーション間隔をさらに長く
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* アニメーション付きスクロールインジケーター */}
      <div className="scroll-indicator-enhanced">
        <div className="scroll-text">Scroll Down</div>
        <div className="scroll-arrow">↓</div>
        <div className="scroll-line-animated"></div>
      </div>
    </section>
  );
}
