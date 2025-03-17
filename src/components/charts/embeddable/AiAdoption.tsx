'use client';

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PieLabelProps {
  name: string;
  value: number;
  x: number;
  y: number;
  cx: number;
  cy: number;
  midAngle: number;
}

const AiAdoption = () => {
  const aiAdoptionData = [
    { name: 'Currently Using AI', value: 18 },
    { name: 'Considering AI Adoption', value: 66 },
    { name: 'No Plans for AI', value: 16 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const renderPieLabel = ({ name, value, x, y, cx, cy, midAngle }: PieLabelProps) => {
    const RADIAN = Math.PI / 180;
    const radius = 120;
    const labelX = cx + radius * Math.cos(-midAngle * RADIAN);
    const labelY = cy + radius * Math.sin(-midAngle * RADIAN);
    const textAnchor = labelX > cx ? 'start' : 'end';
    
    return (
      <g>
        <text 
          x={labelX} 
          y={labelY - 8} 
          fill="#666"
          fontSize={11}
          textAnchor={textAnchor}
          dominantBaseline="bottom"
        >
          {name}
        </text>
        <text 
          x={labelX} 
          y={labelY + 8} 
          fill="#666"
          fontSize={11}
          textAnchor={textAnchor}
          dominantBaseline="top"
        >
          {`${value}%`}
        </text>
      </g>
    );
  };

  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-center">AI Adoption in Dental Practices (2024-2025)</h2>
      <ResponsiveContainer width="100%" height={330}>
        <PieChart>
          <Pie
            data={aiAdoptionData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            label={renderPieLabel}
          >
            {aiAdoptionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-center text-sm mt-2">18% of dental practices currently use AI, with 66% considering adoption</p>
    </div>
  );
};

export default AiAdoption; 