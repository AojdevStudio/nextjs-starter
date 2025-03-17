'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FinancialOptionsImpact = () => {
  const strategyImpactData = [
    { name: 'PPO Insurance Only', multiplier: 1, fill: '#8884d8' },
    { name: 'With Financial Options', multiplier: 4.5, fill: '#82ca9d' },
  ];

  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Impact of Financial Options on Case Acceptance</h2>
      <ResponsiveContainer width="100%" height={330}>
        <BarChart data={strategyImpactData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis 
            label={{ 
              value: 'Relative Acceptance Rate', 
              angle: -90, 
              position: 'insideLeft',
              offset: 0,
              textAnchor: 'middle',
              dy: 50
            }} 
          />
          <Tooltip formatter={(value) => [`${value}x`, 'Multiplier Effect']} />
          <Bar dataKey="multiplier" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-center text-sm mt-2">Research shows case acceptance rates increase by 4.5x when offering financial options beyond PPO insurance</p>
    </div>
  );
};

export default FinancialOptionsImpact; 