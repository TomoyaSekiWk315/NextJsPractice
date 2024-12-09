import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// Rootレイアウトコンポーネント - アプリケーションの基本レイアウト構造を定義
export default function RootLayout({
  children,
}: {
  // childrenプロップの型定義：React.ReactNodeを受け入れる
  children: React.ReactNode;
}) {
  return (
    // HTML言語を英語に設定
    <html lang="en">
      {/* アプリケーションのコンテンツをbodyタグ内にレンダリング */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
