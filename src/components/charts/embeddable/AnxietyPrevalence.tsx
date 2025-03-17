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

const AnxietyPrevalence = () => {
  const anxietyData = [
    { name: 'Patients with Dental Anxiety', value: 14 },
    { name: 'Patients without Dental Anxiety', value: 86 },
  ];

  const anxietyColors = ['#FF8042', '#0088FE'];

  const renderPieLabel = ({ name, value, x, y, cx, cy, midAngle }: PieLabelProps) => {
    const RADIAN = Math.PI / 180;
    const radius = 120;
    const labelX = cx + radius * Math.cos(-midAngle * RADIAN);
    const labelY = cy + radius * Math.sin(-midAngle * RADIAN);
    const textAnchor = labelX > cx ? 'start' : 'end';
    
    // Split long names into two parts if they contain "without" or "with"
    const nameParts = name.split(/(without|with)/);
    const firstLine = nameParts[0].trim();
    const secondLine = nameParts.slice(1).join('').trim();
    
    return (
      <g>
        {secondLine ? (
          <>
            <text 
              x={labelX} 
              y={labelY - 12} 
              fill="#666"
              fontSize={11}
              textAnchor={textAnchor}
              dominantBaseline="bottom"
            >
              {firstLine}
            </text>
            <text 
              x={labelX} 
              y={labelY} 
              fill="#666"
              fontSize={11}
              textAnchor={textAnchor}
              dominantBaseline="bottom"
            >
              {secondLine}
            </text>
            <text 
              x={labelX} 
              y={labelY + 12} 
              fill="#666"
              fontSize={11}
              textAnchor={textAnchor}
              dominantBaseline="top"
            >
              {`${value}%`}
            </text>
          </>
        ) : (
          <>
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
          </>
        )}
      </g>
    );
  };

  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Prevalence of Dental Anxiety</h2>
      <ResponsiveContainer width="100%" height={330}>
        <PieChart>
          <Pie
            data={anxietyData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            label={renderPieLabel}
          >
            {anxietyData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={anxietyColors[index % anxietyColors.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-center text-sm mt-2">Approximately 1 in 7 patients (14%) experience significant dental anxiety</p>
    </div>
  );
};

export default AnxietyPrevalence; 