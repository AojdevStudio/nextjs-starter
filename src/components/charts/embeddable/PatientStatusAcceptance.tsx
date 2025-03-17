'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PatientStatusAcceptance = () => {
  const patientStatusData = [
    { name: 'New Patients', rate: 30 },
    { name: 'Established Patients', rate: 55 },
  ];

  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Case Acceptance by Patient Status</h2>
      <ResponsiveContainer width="100%" height={330}>
        <BarChart data={patientStatusData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
          <Bar dataKey="rate" fill="#0088FE" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-center text-sm mt-2">Established patients have significantly higher acceptance rates than new patients</p>
    </div>
  );
};

export default PatientStatusAcceptance; 