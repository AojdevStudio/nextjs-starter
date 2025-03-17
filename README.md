# Next.js Starter Kit

A modern, feature-rich starter template for Next.js applications. Built with the latest stable versions and best practices to help you start your projects quickly.

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
- npm or yarn or pnpm

## 🏗️ Getting Started

> **Note:** This starter template uses `@latest` versions for all dependencies, ensuring you always get the most up-to-date packages when you create a new project. This design choice makes the template future-proof, but be aware that breaking changes in newer versions may require adjustments.

1. Clone this repository:

```bash
git clone https://github.com/yourusername/nextjs-starter.git my-project
cd my-project
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up your environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your own values.

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

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

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)
