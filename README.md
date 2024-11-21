# AI Chat Shopping Assistant

An intelligent shopping experience powered by Next.js that provides real-time product recommendations through natural conversation. Users can discover and purchase products directly through an intuitive chat interface.

## Key Features

- 🤖 Intent-based chat interface for natural product discovery
- 🛍️ Real-time product recommendations displayed as interactive cards
- 💳 Seamless in-chat purchasing experience
- ⚡ Built with Next.js, TypeScript, and Tailwind CSS
- 🔄 Streaming AI responses with Vercel AI SDK

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the chat interface.

## Tech Stack

- [Next.js](https://nextjs.org) - React framework for production
- [Vercel AI SDK](https://sdk.vercel.ai/docs) - For streaming AI chat responses
- TypeScript - For type safety
- Tailwind CSS - For styling
- AI/ML - For intent recognition and product recommendations
- [Vercel](https://vercel.com) - For deployment

## Project Structure

```
src/
├── app/              # Next.js app directory
│   └── api/         # API routes including AI endpoints
├── components/       # Reusable UI components
│   ├── chat/        # Chat interface components
│   └── products/    # Product card components
├── lib/             # Utility functions and AI logic
│   └── ai/          # AI configuration and helpers
└── types/           # TypeScript definitions
```

## Deployment

Deploy on [Vercel](https://vercel.com/new) for the best experience:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
