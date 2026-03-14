'use client';
export default function ProductStockBadge({ stock }) {
  let style = "bg-green-50 text-green-600";
  let dot = "bg-green-500";

  if (stock === 0) {
    style = "bg-red-50 text-red-600";
    dot = "bg-red-500";
  } else if (stock <= 10) {
    style = "bg-orange-50 text-orange-500";
    dot = "bg-orange-400";
  }

  return (
    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg w-max font-bold text-xs ${style}`}>
      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${dot}`} />
      {stock}
    </div>
  );
}