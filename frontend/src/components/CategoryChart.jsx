import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  LabelList
} from 'recharts';
import { useEffect, useState } from 'react';

const categoryColors = {
  Bad: '#EF4444',              // Red-500
  'Below Average': '#F97316',  // Orange-500
  Average: '#FACC15',          // Yellow-400
  Good: '#10B981',             // Emerald-500
  Excellent: '#3B82F6'         // Blue-500
};

function CategoryChart({ data }) {
  const order = { Bad: 0, 'Below Average': 1, Average: 2, Good: 3, Excellent: 4 };
  const sortedData = [...data].sort((a, b) => order[a._id] - order[b._id]);

  const [animatedData, setAnimatedData] = useState(sortedData.map(item => ({ ...item, count: 0 })));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedData(sortedData);
    }, 300);
    return () => clearTimeout(timeout);
  }, [data]);

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white rounded-3xl shadow-lg">

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={animatedData} barSize={50}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
          <XAxis
            dataKey="_id"
            tick={{ fontSize: 14, fill: '#6B7280' }}
            axisLine={{ stroke: '#D1D5DB' }}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 14, fill: '#6B7280' }}
            axisLine={{ stroke: '#D1D5DB' }}
            tickLine={false}
          />
          {/* Tooltip Removed */}
          <Bar dataKey="count" radius={[12, 12, 0, 0]} isAnimationActive={true} animationDuration={800}>
            {sortedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={categoryColors[entry._id]}
                className="transition-all duration-300"
              />
            ))}
            <LabelList
              dataKey="count"
              position="top"
              content={({ x, y, value }) => (
                <text
                  x={x}
                  y={y - 10}
                  textAnchor="middle"
                  className="text-sm font-bold fill-gray-700"
                >
                  {value}
                </text>
              )}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryChart;