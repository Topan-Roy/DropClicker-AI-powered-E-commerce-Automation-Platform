// 'use client';
// import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from 'recharts';

// export default function StoreProjectsChart({ data }) {
//   return (
//     <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
//       <h2 className="text-lg font-bold text-gray-900 mb-6">Store Projects by Status</h2>
//       <ResponsiveContainer width="100%" height={220}>
//         <BarChart data={data} layout="vertical" margin={{ left: -20 }}>
//           <XAxis type="number" hide />
//           <YAxis dataKey="name" type="category" hide />
//           <Bar dataKey="value" barSize={32} radius={[0, 4, 4, 0]}>
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={entry.color} />
//             ))}
//             <LabelList dataKey="value" position="insideRight" style={{ fill: 'white', fontWeight: 'bold' }} />
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//       <div className="flex justify-center gap-6 mt-4">
//         {data.map((item) => (
//           <div key={item.name} className="flex items-center gap-2">
//             <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
//             <span className="text-sm text-gray-600 font-medium">{item.name}: {item.value}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function StoreProjectsChart() {
  const data = [
    { label: 'Completed', value: 21, color: 'bg-[#9890FF]' },
    { label: 'Draft', value: 10, color: 'bg-[#FFA39E]' },
  ];

  const maxValue = 30;
  const gridSteps = [0, 5, 10, 15, 20, 25, 30];

  return (
    <div className="w-full max-w-2xl bg-white border border-gray-100 shadow-sm p-6 rounded-xl   font-sans">
      <h2 className="text-[22px] font-bold text-gray-900 mb-10">Store Projects by Status</h2>

      <div className="relative h-64 w-full">
        {/* X-Axis Labels & Vertical Grid Lines */}
        <div className="absolute inset-0 flex justify-between px-0 ml-10">
          {gridSteps.map((step) => (
            <div key={step} className="relative h-full flex flex-col items-center">
              {/* Number Label */}
              <span className="absolute -top-8 text-sm text-gray-500">{step}</span>
              {/* Vertical Line */}
              <div className="h-full border-l border-dashed border-gray-300" />
            </div>
          ))}
        </div>

        {/* The Bars Container */}
        <div className="absolute inset-0 flex flex-col justify-around py-4 ml-10 border-l-[1.5px] border-gray-400">
          {data.map((item, index) => (
            <div key={index} className="relative w-full h-16 bg-[#F1F4F9]/50 flex items-center">
              {/* The Actual Colored Bar */}
              <div
                className={`${item.color} h-full transition-all duration-500 ease-out flex items-center justify-end pr-4`}
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              >
                {/* Value Label inside bar */}
                <span className="text-gray-600 text-sm font-medium">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-12">
        {data.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className={`w-3.5 h-3.5 rounded-sm ${item.color}`} />
            <span className="text-[15px] text-gray-600">
              {item.label}: <span className="font-medium text-gray-800">{item.value}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}