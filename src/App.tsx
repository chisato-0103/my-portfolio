import { useRef, useCallback, useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/globals.css";
import "./styles/navigation.css";
import "./styles/sections.css";

function App() {
  // ページタイトルとメタ情報を設定
  useEffect(() => {
    document.title = "chisato | Student Developer & Game Creator";

    // メタ情報も動的に更新
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "chisato - Student Developer & Game Creator. 東京ゲームショウ参加予定のポートフォリオサイト"
      );
    }
  }, []);

  // useRefを使って各セクションのDOM要素への参照を作成
  // これにより直接DOM要素にアクセスでき、スクロール操作が可能になる
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // 現在表示中のセクションを追跡するstate
  // ナビゲーションバーのアクティブ状態表示に使用
  const [activeSection, setActiveSection] = useState(0);

  // 全てのセクションの参照を配列にまとめる
  // インデックスでアクセスしやすくするため
  // useMemoでメモ化してuseEffectの依存関係を最適化
  const sectionRefs = useMemo(
    () => [heroRef, aboutRef, skillsRef, projectsRef, contactRef],
    [heroRef, aboutRef, skillsRef, projectsRef, contactRef]
  );

  // useCallbackでスクロール関数をメモ化
  // 不要な再レンダリングを防ぎ、パフォーマンスを向上させる
  const scrollToSection = useCallback(
    (sectionIndex: number) => {
      // 指定されたインデックスのセクションが存在するかチェック
      const targetRef = sectionRefs[sectionIndex];
      if (targetRef?.current) {
        // スムーズなスクロールアニメーションでセクションに移動
        targetRef.current.scrollIntoView({
          behavior: "smooth", // スムーズなアニメーション
          block: "start", // セクションの上端に合わせる
          inline: "nearest", // 水平方向は最適な位置
        });

        // アクティブセクションを更新
        setActiveSection(sectionIndex);

        // デバッグ用のログ（開発時に動作確認）
        console.log(`Scrolling to section ${sectionIndex}`);
      }
    },
    [sectionRefs]
  );

  // スクロール位置に基づいてアクティブセクションを自動検出（軽量化版）
  useEffect(() => {
    // パフォーマンス最適化：IntersectionObserverを使用してスクロール処理を軽量化
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // セクションが画面中央に来たときに反応
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // セクションのインデックスを取得
          const sectionIndex = sectionRefs.findIndex(
            (ref) => ref.current === entry.target
          );
          if (sectionIndex !== -1) {
            setActiveSection(sectionIndex);
          }
        }
      });
    }, observerOptions);

    // 各セクションを監視対象に追加
    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // クリーンアップ
    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  return (
    <div className="app">
      {/* ヘッダーにアクティブセクション情報とスクロール関数を渡す */}
      <Header onNavigate={scrollToSection} activeSection={activeSection} />

      {/* 各セクションにref属性を追加してDOM要素への参照を設定 */}
      <div ref={heroRef}>
        <Hero onNavigate={scrollToSection} />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
