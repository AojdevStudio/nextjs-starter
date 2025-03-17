'use client';

import React from 'react';
import AcceptanceRateBenchmarks from '@/components/charts/embeddable/AcceptanceRateBenchmarks';
import FinancialOptionsImpact from '@/components/charts/embeddable/FinancialOptionsImpact';
import PatientStatusAcceptance from '@/components/charts/embeddable/PatientStatusAcceptance';
import AiAdoption from '@/components/charts/embeddable/AiAdoption';
import FactorsAffecting from '@/components/charts/embeddable/FactorsAffecting';
import AnxietyPrevalence from '@/components/charts/embeddable/AnxietyPrevalence';

interface PageProps {
  params: {
    chartId: string;
  };
}

const ChartPage: React.FC<PageProps> = ({ params }) => {
  const { chartId } = params;

  const getChartComponent = () => {
    switch (chartId) {
      case 'acceptance-rate-benchmarks':
        return <AcceptanceRateBenchmarks />;
      case 'financial-options-impact':
        return <FinancialOptionsImpact />;
      case 'patient-status-acceptance':
        return <PatientStatusAcceptance />;
      case 'ai-adoption':
        return <AiAdoption />;
      case 'factors-affecting':
        return <FactorsAffecting />;
      case 'anxiety-prevalence':
        return <AnxietyPrevalence />;
      default:
        return (
          <div className="w-full h-[400px] bg-white p-4 rounded-lg shadow flex items-center justify-center">
            <p className="text-gray-500">Chart not found</p>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full min-h-screen bg-gray-50 p-4">
      {getChartComponent()}
    </div>
  );
};

export default ChartPage; 