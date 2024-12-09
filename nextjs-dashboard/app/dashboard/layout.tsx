// サイドナビゲーションコンポーネントをインポート
import SideNav from '@/app/ui/dashboard/sidenav';
 
// ダッシュボードのレイアウトコンポーネント
// children: ダッシュボード内の各ページコンテンツを受け取る
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // メインコンテナ - 画面全体の高さを使用し、モバイルでは縦方向、デスクトップでは横方向にレイアウト
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* サイドナビゲーションエリア - デスクトップでは固定幅（64単位）を確保 */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      {/* メインコンテンツエリア - 残りの空間を埋め、スクロール可能 */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}