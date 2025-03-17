'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useTheme } from 'next-themes';
import { Toaster } from "@/components/ui/toaster";
import CopyButton from './CopyButton';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PieLabelProps {
  name: string;
  value: number;
  x: number;
  y: number;
}

const DentalCaseAcceptanceCharts = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Dataset 1: Case Acceptance Rate Benchmarks
  const acceptanceRateData = [
    { name: 'Top 10% Practices', rate: 83 },
    { name: 'Industry Target', rate: 90 },
    { name: 'Avg Established Patients', rate: 55 },
    { name: 'Avg New Patients', rate: 30 },
    { name: 'Most Practices', rate: 35 },
  ];

  // Dataset 2: Case Acceptance by Patient Status
  const patientStatusData = [
    { name: 'New Patients', rate: 30 },
    { name: 'Established Patients', rate: 55 },
  ];

  // Dataset 3: Strategy Impact on Case Acceptance
  const strategyImpactData = [
    { name: 'PPO Insurance Only', multiplier: 1, fill: '#8884d8' },
    { name: 'With Financial Options', multiplier: 4.5, fill: '#82ca9d' },
  ];

  // Dataset 4: AI Adoption in Dental Practices
  const aiAdoptionData = [
    { name: 'Currently Using AI', value: 18 },
    { name: 'Considering AI Adoption', value: 66 },
    { name: 'No Plans for AI', value: 16 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
  const darkModeColors = COLORS.map(color => `${color}99`);

  // Dataset 5: Factors Affecting Case Acceptance
  const factorsData = [
    { name: 'Financial Options', importance: 9 },
    { name: 'Trust & Relationship', importance: 8 },
    { name: 'Clear Communication', importance: 7 },
    { name: 'Visual Technology', importance: 6 },
    { name: 'Patient Education', importance: 5 },
  ];

  // Dataset 6: Dental Anxiety Prevalence
  const anxietyData = [
    { name: 'Patients with Dental Anxiety', value: 14 },
    { name: 'Patients without Dental Anxiety', value: 86 },
  ];

  const anxietyColors = ['#FF8042', '#0088FE'];

  const chartColors = {
    text: isDark ? '#e5e7eb' : '#666',
    grid: isDark ? '#374151' : '#e5e7eb',
    bars: {
      primary: isDark ? '#60a5fa' : '#8884d8',
      secondary: isDark ? '#34d399' : '#82ca9d',
      tertiary: isDark ? '#818cf8' : '#0088FE',
    }
  };

  const renderPieLabel = ({ name, value, x, y, cx, cy, midAngle }: PieLabelProps & { cx: number; cy: number; midAngle: number }) => {
    const RADIAN = Math.PI / 180;
    const radius = 120;
    const labelX = cx + radius * Math.cos(-midAngle * RADIAN);
    const labelY = cy + radius * Math.sin(-midAngle * RADIAN);
    const textAnchor = labelX > cx ? 'start' : 'end';
    
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
              fill={chartColors.text}
              fontSize={11}
              textAnchor={textAnchor}
              dominantBaseline="bottom"
            >
              {firstLine}
            </text>
            <text 
              x={labelX} 
              y={labelY} 
              fill={chartColors.text}
              fontSize={11}
              textAnchor={textAnchor}
              dominantBaseline="bottom"
            >
              {secondLine}
            </text>
            <text 
              x={labelX} 
              y={labelY + 12} 
              fill={chartColors.text}
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
              fill={chartColors.text}
              fontSize={11}
              textAnchor={textAnchor}
              dominantBaseline="bottom"
            >
              {name}
            </text>
            <text 
              x={labelX} 
              y={labelY + 8} 
              fill={chartColors.text}
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

  const commonChartProps = {
    stroke: chartColors.text,
    style: { fontSize: '12px' },
  };

  // Define theme-aware colors
  const currentColors = theme === 'dark' ? darkModeColors : COLORS;

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <Toaster />
      <div className="container-custom">
        <div className="flex justify-end mb-8">
          <div className="top-4 right-4">
            <ThemeToggle />
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Case Acceptance Rate Benchmarks */}
          <Card className="relative">
            <CardHeader>
              <CardTitle>Case Acceptance Rate Benchmarks</CardTitle>
              <CopyButton chartId="acceptance-rate-benchmarks" chartName="Case Acceptance Rate Benchmarks" />
            </CardHeader>
            <CardContent>
              <div className="h-[330px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={acceptanceRateData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `${value}%`} />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, "Acceptance Rate"]}
                      contentStyle={{ 
                        backgroundColor: 'var(--chart-tooltip-bg)',
                        border: '1px solid var(--chart-tooltip-border)'
                      }}
                    />
                    <Bar dataKey="rate">
                      {acceptanceRateData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={currentColors[index % currentColors.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Impact of Financial Options */}
          <Card className="relative">
            <CardHeader>
              <CardTitle>Impact of Financial Options</CardTitle>
              <CopyButton chartId="financial-options-impact" chartName="Impact of Financial Options" />
            </CardHeader>
            <CardContent>
              <div className="h-[330px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={strategyImpactData}
                      dataKey="multiplier"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label={renderPieLabel}
                    >
                      {strategyImpactData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={currentColors[index % currentColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}x`, "Relative Acceptance Rate"]}
                      contentStyle={{ 
                        backgroundColor: 'var(--chart-tooltip-bg)',
                        border: '1px solid var(--chart-tooltip-border)'
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm mt-2 text-muted-foreground text-center">
                Research shows case acceptance rates increase by 4.5x when offering financial options beyond PPO insurance
              </p>
            </CardContent>
          </Card>

          {/* Patient Status and Acceptance */}
          <Card className="relative">
            <CardHeader>
              <CardTitle>Patient Status and Acceptance</CardTitle>
              <CopyButton chartId="patient-status-acceptance" chartName="Patient Status and Acceptance" />
            </CardHeader>
            <CardContent>
              <div className="h-[330px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={patientStatusData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `${value}%`} />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, "Acceptance Rate"]}
                      contentStyle={{ 
                        backgroundColor: 'var(--chart-tooltip-bg)',
                        border: '1px solid var(--chart-tooltip-border)'
                      }}
                    />
                    <Bar dataKey="rate">
                      {patientStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={currentColors[index % currentColors.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm mt-2 text-muted-foreground text-center">
                Established patients have significantly higher acceptance rates than new patients
              </p>
            </CardContent>
          </Card>

          {/* AI Adoption Impact */}
          <Card className="relative">
            <CardHeader>
              <CardTitle>AI Adoption Impact</CardTitle>
              <CopyButton chartId="ai-adoption" chartName="AI Adoption Impact" />
            </CardHeader>
            <CardContent>
              <div className="h-[330px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={aiAdoptionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `${value}%`} />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, "Impact"]}
                      contentStyle={{ 
                        backgroundColor: 'var(--chart-tooltip-bg)',
                        border: '1px solid var(--chart-tooltip-border)'
                      }}
                    />
                    <Bar dataKey="value">
                      {aiAdoptionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={currentColors[index % currentColors.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm mt-2 text-muted-foreground text-center">
                18% of dental practices currently use AI, with 66% considering adoption
              </p>
            </CardContent>
          </Card>

          {/* Factors Affecting Acceptance */}
          <Card className="relative">
            <CardHeader>
              <CardTitle>Factors Affecting Acceptance</CardTitle>
              <CopyButton chartId="factors-affecting" chartName="Factors Affecting Acceptance" />
            </CardHeader>
            <CardContent>
              <div className="h-[330px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={factorsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `${value}%`} />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, "Impact"]}
                      contentStyle={{ 
                        backgroundColor: 'var(--chart-tooltip-bg)',
                        border: '1px solid var(--chart-tooltip-border)'
                      }}
                    />
                    <Bar dataKey="importance">
                      {factorsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={currentColors[index % currentColors.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm mt-2 text-muted-foreground text-center">
                Financial options have the highest impact, followed by trust building and clear communication
              </p>
            </CardContent>
          </Card>

          {/* Anxiety Prevalence */}
          <Card className="relative">
            <CardHeader>
              <CardTitle>Anxiety Prevalence</CardTitle>
              <CopyButton chartId="anxiety-prevalence" chartName="Anxiety Prevalence" />
            </CardHeader>
            <CardContent>
              <div className="h-[330px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={anxietyData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label={renderPieLabel}
                    >
                      {anxietyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={currentColors[index % currentColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, "Percentage"]}
                      contentStyle={{ 
                        backgroundColor: 'var(--chart-tooltip-bg)',
                        border: '1px solid var(--chart-tooltip-border)'
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm mt-2 text-muted-foreground text-center">
                Approximately 1 in 7 patients (14%) experience significant dental anxiety
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DentalCaseAcceptanceCharts;