
---
title: regolith-website
type: page
date: 2025-07-02T00:00:00
tags: ["TypeScript"]
description: "A modern, responsive landing page for Regolith - a secure, Rust-backed regex engine for JavaScript and TypeScript."
---


# Regolith Landing Page

A modern, responsive landing page for **Regolith** - a secure, Rust-backed regex engine for JavaScript and TypeScript.

## About Regolith

Regolith is a drop-in RegExp replacement that's immune to ReDoS (Regular Expression Denial of Service) attacks, with guaranteed linear worst-case performance thanks to its Rust implementation.

## Features

- 🛡️ **ReDoS Protection** - Complete immunity to Regular Expression Denial of Service attacks
- ⚡ **Linear Performance** - Guaranteed O(n+m) time complexity for all operations
- 🔄 **Drop-in Replacement** - Compatible API with JavaScript's native RegExp
- 🦀 **Rust-Powered** - Built on Rust's memory-safe foundation with WebAssembly bindings
- 📱 **Responsive Design** - Mobile-first, modern UI built with Tailwind CSS
- 🌙 **Dark Mode** - Optional dark theme support

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **shadcn/ui** - Re-usable component library

## Getting Started

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Run the development server:**
   ```bash
   bun run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:8084](http://localhost:8084)

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   └── page.tsx            # Main landing page
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Overview.tsx       # Problem/solution overview
│   ├── Features.tsx       # Feature highlights
│   ├── Installation.tsx   # Installation guide
│   ├── Examples.tsx       # Code examples
│   ├── Contribute.tsx     # Contribution section
│   ├── Footer.tsx         # Site footer
│   └── CodeBlock.tsx      # Syntax-highlighted code blocks
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## Sections

The landing page includes the following sections:

1. **Hero** - Introduction and key value propositions
2. **Overview** - Detailed explanation of the ReDoS problem and Regolith's solution
3. **Features** - Key benefits and capabilities
4. **Installation** - Package manager installation commands
5. **Examples** - Real-world code examples in JavaScript and TypeScript
6. **Contribute** - Ways to contribute to the open source project

## Contributing

This is the landing page for the Regolith project. For contributing to the core Regolith library, visit:
- [Regolith GitHub Repository](https://github.com/jakeroggenbuck/regolith)
- [Contributing Guidelines](https://github.com/jakeroggenbuck/regolith/blob/main/CONTRIBUTING.md)

## License

MIT License - see the [LICENSE](LICENSE) file for details.
