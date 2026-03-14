

'use client'
export default function OrderStatusBadge({ status }) {
  const styles = {
    Shipped:    'bg-blue-50 text-blue-600',
    Cancelled:  'bg-red-50 text-red-600',
    Pending:    'bg-gray-50 text-gray-500',
    Processing: 'bg-orange-50 text-orange-600',
    Delivered:  'bg-green-50 text-green-600',
    Paid:       'bg-green-50 text-green-600',
  };
  const dots = {
    Shipped:    'bg-blue-500',
    Cancelled:  'bg-red-500',
    Pending:    'bg-gray-400',
    Processing: 'bg-orange-500',
    Delivered:  'bg-green-500',
    Paid:       'bg-green-500',
  };

  return (
    <div className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full border border-transparent shadow-xs w-max text-xs sm:text-sm font-medium ${styles[status] || styles.Pending}`}>
      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0 ${dots[status] || dots.Pending}`} />
      {status}
    </div>
  );
}