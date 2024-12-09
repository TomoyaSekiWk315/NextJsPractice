import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

// メインページコンポーネント
export default function Page() {
  return (
    // メインコンテナ - 画面の高さいっぱいに表示し、縦方向にコンテンツを配置
    <main className="flex min-h-screen flex-col p-6">
      <div className={styles.shape} />
      {/* ヘッダーセクション - 青い背景のバナー */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
        {/* Acmeロゴ - 現在は非表示 */}
        {/* <AcmeLogo /> */}
      </div>
      {/* メインコンテンツエリア - モバイルでは縦並び、デスクトップでは横並びに */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        {/* 左側のコンテンツボックス - テキストとログインボタンを含む */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {/* 装飾的な三角形 */}
          <div
            className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
          />
          {/* ウェルカムメッセージとコース説明 */}
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Acmeへようこそ。</strong> これは{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js学習コース
            </a>
            のサンプルで、Vercelが提供しています。
          </p>
          {/* ログインボタン - ホバー時に色が変化 */}
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>ログイン</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        {/* 右側のコンテンツエリア - 画像用のスペース */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* デスクトップ用イメージ */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          {/* モバイル用イメージ */}
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}