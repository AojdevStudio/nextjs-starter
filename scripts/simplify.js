#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Directories to keep
const keepDirs = [
  'public',
  'src/app',
  'src/components/common',
  'src/components/ui',
  'src/lib'
];

// Files to keep
const keepFiles = [
  'src/app/globals.css',
  'src/app/layout.tsx',
  'src/app/page.tsx',
  '.env.example',
  'package.json',
  'tailwind.config.js',
  'tsconfig.json',
  'README.md',
  'LICENSE'
];

// Directories to remove
const removeDirs = [
  'src/app/(auth)',
  'src/app/api',
  'src/app/dashboard',
  'src/components/auth',
  'src/components/layout/auth',
  'src/hooks/auth',
  '.github',
  '.vscode',
  '.cursor'
];

// Dependencies to remove
const removeDependencies = [
  '@auth/core',
  '@auth/prisma-adapter',
  '@prisma/client',
  'next-auth',
  'prisma'
];

function removeUnusedDirs() {
  console.log('🗑️  Removing unused directories...');
  removeDirs.forEach(dir => {
    const dirPath = path.join(process.cwd(), dir);
    if (fs.existsSync(dirPath)) {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`   Removed ${dir}`);
    }
  });
}

function removeUnusedDependencies() {
  console.log('\n📦 Updating package.json...');
  const packagePath = path.join(process.cwd(), 'package.json');
  const package = require(packagePath);

  removeDependencies.forEach(dep => {
    if (package.dependencies[dep]) {
      delete package.dependencies[dep];
      console.log(`   Removed ${dep}`);
    }
    if (package.devDependencies && package.devDependencies[dep]) {
      delete package.devDependencies[dep];
      console.log(`   Removed ${dep} from devDependencies`);
    }
  });

  // Add chart.js and react-chartjs-2
  package.dependencies['chart.js'] = '^4.4.1';
  package.dependencies['react-chartjs-2'] = '^5.2.0';

  fs.writeFileSync(packagePath, JSON.stringify(package, null, 2));
}

function updateHomePage() {
  console.log('\n📝 Updating home page...');
  const pagePath = path.join(process.cwd(), 'src/app/page.tsx');
  const pageContent = `'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function HomePage() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sample Data 2024',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b py-6">
        <div className="container-custom">
          <h1 className="text-2xl font-bold">My Dashboard</h1>
        </div>
      </header>

      <main className="container-custom py-10">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">Sample Chart</h2>
          <div className="h-[400px] w-full">
            <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </main>

      <footer className="border-t py-8">
        <div className="container-custom text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} My Website. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}`;

  fs.writeFileSync(pagePath, pageContent);
}

function installDependencies() {
  console.log('\n📥 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
}

function main() {
  console.log('🚀 Simplifying Next.js Starter Kit...\n');

  removeUnusedDirs();
  removeUnusedDependencies();
  updateHomePage();
  installDependencies();

  console.log('\n✨ Done! Your simplified Next.js starter kit is ready.');
  console.log('\nTo start the development server, run:');
  console.log('npm run dev');
}

main();
