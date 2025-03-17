'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AcceptanceRateBenchmarks = () => {
  const acceptanceRateData = [
    { name: 'Top 10% Practices', rate: 83 },
    { name: 'Industry Target', rate: 90 },
    { name: 'Avg Established Patients', rate: 55 },
    { name: 'Avg New Patients', rate: 30 },
    { name: 'Most Practices', rate: 35 },
  ];

  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Dental Case Acceptance Rate Benchmarks (2024-2025)</h2>
      <ResponsiveContainer width="100%" height={330}>
        <BarChart data={acceptanceRateData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis 
            label={{ 
              value: 'Acceptance Rate (%)', 
              angle: -90, 
              position: 'insideLeft',
              offset: 0,
              textAnchor: 'middle',
              dy: 50
            }} 
          />
          <Tooltip formatter={(value) => [`${value}%`, 'Acceptance Rate']} />
          <Bar dataKey="rate" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AcceptanceRateBenchmarks; 