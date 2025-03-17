# Dental Case Acceptance Analytics

A comprehensive analytics dashboard showing dental case acceptance rates, financial impact, and industry benchmarks.

## 🚀 Features

- ⚡ **Next.js** - Latest Next.js with App Router
- ⚛️ **React** - Latest React version with hooks and server components
- 📘 **TypeScript** - Type safety and better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔐 **Authentication** - Ready-to-use auth with NextAuth.js
- 🧩 **Component Library** - Basic UI components to get started
- 📝 **ESLint & Prettier** - Code quality and formatting
- 🧪 **Testing Setup** - Jest configuration for testing
- 📱 **Responsive Design** - Mobile-first approach
- 🌓 **Dark Mode** - Built-in dark mode support
- 🚢 **CI/CD** - GitHub Actions workflow
- 📦 **Directory Structure** - Organized project structure
- 🛠️ **Cursor Editor Integration** - Best practices and rules

## 📋 Prerequisites

- Node.js 18.17.0 or later
- npm or yarn package manager

## 🏗️ Getting Started

> **Note:** This starter template uses `@latest` versions for all dependencies, ensuring you always get the most up-to-date packages when you create a new project. This design choice makes the template future-proof, but be aware that breaking changes in newer versions may require adjustments.

1. Clone the repository:
```bash
git clone <your-repo-url>
cd dental-case-acceptance-analytics
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory:
```bash
touch .env.local
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
nextjs-starter/
├── .github/                  # GitHub actions and configuration
├── .vscode/                  # VS Code settings
├── .cursor/                  # Cursor editor integration
├── public/                   # Static assets
├── src/                      # Source directory
│   ├── app/                  # App Router pages
│   │   ├── (auth)/           # Auth route group
│   │   │   ├── login/        # Login page
│   │   │   ├── register/     # Register page
│   │   ├── api/              # API routes
│   │   │   └── auth/         # Auth API routes
│   │   ├── dashboard/        # Dashboard page
│   │   ├── favicon.ico       # Favicon
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/           # React components
│   │   ├── auth/             # Auth components
│   │   ├── common/           # Common components
│   │   ├── layout/           # Layout components
│   │   └── ui/               # UI components
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility libraries
│   ├── types/                # TypeScript types
│   └── styles/               # Component styles
├── .env.example              # Example environment variables
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore file
├── .prettierrc              # Prettier configuration
├── jest.config.js           # Jest configuration
├── next.config.js           # Next.js configuration
├── package.json             # Package dependencies
├── postcss.config.js        # PostCSS configuration
├── README.md                # Project documentation
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## 🔧 Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Lint code with ESLint
- `npm run test` - Run tests with Jest
- `npm run test:watch` - Run tests in watch mode

## 🔐 Authentication

This starter comes with NextAuth.js pre-configured. By default, it includes:

- Credentials Provider (email/password)
- GitHub OAuth Provider
- Google OAuth Provider

To use social providers, you need to add your own API keys in the `.env.local` file.

## 📚 Best Practices

This starter follows best practices for Next.js development:

### Server Components

- Use React Server Components where possible
- Only add 'use client' directive when needed
- Keep client components lean

### Performance

- Implement proper image optimization with next/image
- Use dynamic imports for code splitting
- Lazy load components when appropriate

### Accessibility

- Use semantic HTML elements
- Include proper ARIA attributes
- Ensure keyboard navigation works
- Test with screen readers

### State Management

- Use local state for component-specific state
- Use server actions for form submissions
- Keep client-side state minimal

## 🛠️ Cursor Editor Integration

This starter includes special `.cursor/rules` for Cursor editor integration:

- `nextjs-best-practices.mdc` - Next.js best practices and patterns
- `react-component-patterns.mdc` - React component structure and patterns

These rules help maintain consistency and follow best practices in your codebase.

## 🧩 Custom Components

The starter includes several custom components to help you get started:

- Authentication components (Login, Register)
- Layout components (Header, Footer)
- UI components (Button, Card, etc.)

## 🌓 Dark Mode

Dark mode is built-in and can be toggled using Tailwind CSS classes:

- Add the `dark` class to the `html` tag to enable dark mode
- Use `dark:` prefix for dark mode styles

## 🔄 Continuous Integration

The starter includes a GitHub Actions workflow for CI/CD:

- Run ESLint
- Run tests
- Build the application

## 📱 Responsive Design

The starter uses a mobile-first approach with Tailwind CSS:

- Responsive breakpoints: sm, md, lg, xl, 2xl
- Consistent spacing and sizing

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2024 Next.js Starter Kit. All rights reserved.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)

## 🎯 Quick Start for Basic Webpage

If you want to use this starter kit for a simple webpage (without authentication and complex features), follow these steps:

1. Clone this repository:
```bash
git clone https://github.com/AojdevStudio/nextjs-starter.git my-project
cd my-project
```

2. Run the simplification script:
```bash
node scripts/simplify.js
```

This script will:
- Remove unnecessary directories and files
- Remove unused dependencies
- Add Chart.js and React Chart.js 2
- Update the homepage with a sample chart
- Install the required dependencies

The simplified structure will be:
```
my-project/
├── public/                   # Static assets
├── src/                     # Source directory
│   ├── app/                 # App Router pages
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── common/         # Common components
│   │   └── ui/            # UI components
│   └── lib/               # Utility libraries
├── package.json           # Package dependencies
├── tailwind.config.js     # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

3. Start the development server:
```bash
npm run dev
```

Your simplified Next.js application will be running at [http://localhost:3000](http://localhost:3000) with:
- ⚡ Modern React and Next.js
- 🎨 Tailwind CSS styling
- 📊 Chart.js integration
- 📱 Responsive design
- 🌓 Dark mode support

### Customizing the Chart

The sample chart in `src/app/page.tsx` can be easily customized:
- Change the chart type (Line, Bar, Pie, etc.)
- Modify the data and labels
- Adjust the styling and options
- Add more charts to the dashboard

For more chart types and options, visit the [React Chart.js 2 documentation](https://react-chartjs-2.js.org/).

## Running on Replit

1. Create a new Repl and select "Import from GitHub"
2. Paste your repository URL
3. In the Replit shell, run:
```bash
npm install
npm run dev
```

4. Important: Make sure to set the "Run" button command to:
```bash
npm run dev
```

## Environment Variables

No environment variables are required for basic functionality.

## Built With

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Recharts](https://recharts.org/) - Charting library
- [shadcn/ui](https://ui.shadcn.com/) - UI components

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Troubleshooting

### Common Issues

1. **Module not found errors**
   - Run `npm install` again
   - Clear `.next` cache: `rm -rf .next`
   - Ensure Node.js version is 18.17.0 or later

2. **Build failures**
   - Ensure all dependencies are installed
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`

3. **Replit-specific issues**
   - Use Node.js 18.x or later in Replit
   - Set correct run command in Replit config
   - Ensure all dependencies are properly installed
