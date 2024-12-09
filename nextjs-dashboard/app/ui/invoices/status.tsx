// HeroIconsからアイコンコンポーネントをインポート
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
// 条件付きクラス名を結合するためのユーティリティをインポート
import clsx from 'clsx';

// 請求書のステータスを表示するコンポーネント
// status prop: 'pending'（未払い）または'paid'（支払済み）を受け取る
export default function InvoiceStatus({ status }: { status: string }) {
  return (
    // ステータスバッジのコンテナ
    <span
      className={clsx(
        // 基本スタイル：インライン要素、中央揃え、丸みを帯びた形状
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        // 状態に応じて動的にスタイルを切り替え
        {
          // 未払い状態：グレーの背景と文字色
          'bg-gray-100 text-gray-500': status === 'pending',
          // 支払済み状態：緑の背景と白文字
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {/* 未払い状態の表示 */}
      {status === 'pending' ? (
        <>
          Pending
          {/* 時計アイコン */}
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {/* 支払済み状態の表示 */}
      {status === 'paid' ? (
        <>
          Paid
          {/* チェックマークアイコン */}
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}