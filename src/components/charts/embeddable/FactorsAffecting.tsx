'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FactorsAffecting = () => {
  const factorsData = [
    { name: 'Financial Options', importance: 9 },
    { name: 'Trust & Relationship', importance: 8 },
    { name: 'Clear Communication', importance: 7 },
    { name: 'Visual Technology', importance: 6 },
    { name: 'Patient Education', importance: 5 },
  ];

  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Key Factors Affecting Case Acceptance (Relative Importance)</h2>
      <ResponsiveContainer width="100%" height={330}>
        <BarChart data={factorsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 10]} />
          <YAxis dataKey="name" type="category" width={150} />
          <Tooltip formatter={(value) => [`${value}/10`, 'Importance Score']} />
          <Bar dataKey="importance" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-center text-sm mt-2">Financial options have the highest impact, followed by trust building and clear communication</p>
    </div>
  );
};

export default FactorsAffecting; 