import { memo } from "react";

// TypeScript型定義
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

// 画像の遅延読み込みコンポーネント
// memo()でコンポーネントをメモ化してパフォーマンス最適化
const LazyImage = memo(
  ({ src, alt, className, width, height }: LazyImageProps) => {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading="lazy" // ブラウザネイティブの遅延読み込み
        decoding="async" // 非同期デコード
        style={{
          // 画像が読み込まれるまでのスケルトン効果
          background:
            "linear-gradient(90deg, #f0f0f0 25%, transparent 37%, #f0f0f0 63%)",
          backgroundSize: "400% 100%",
          animation: "skeleton 1.5s ease-in-out infinite",
        }}
      />
    );
  }
);

LazyImage.displayName = "LazyImage";

export default LazyImage;
