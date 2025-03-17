'use client';

import dynamic from 'next/dynamic';

const DentalCaseAcceptanceCharts = dynamic(
  () => import('@/components/charts/DentalCaseAcceptanceCharts'),
  { ssr: false }
);

export default function ClientChartWrapper() {
  return (
    <div className="w-full">
      <DentalCaseAcceptanceCharts />
    </div>
  );
} 