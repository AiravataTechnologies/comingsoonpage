# Project Overview

This is a full-stack TypeScript application migrated from Figma to Replit, featuring a "Coming Soon" landing page with modern React frontend and Express backend.

## Project Architecture

### Frontend (React + TypeScript)
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: TailwindCSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with hot module replacement

### Backend (Express + TypeScript)
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Storage**: MemStorage for development (in-memory)
- **Session Management**: Express session with passport
- **API**: RESTful endpoints with Zod validation

### Key Features
- Modern component architecture with shadcn/ui
- Proper client/server separation
- Type-safe API with shared schemas
- Development and production builds
- Asset management for Figma exports

## Project Structure
```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and client config
│   └── public/
│       └── figmaAssets/    # Migrated Figma assets
├── server/                 # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Storage abstraction layer
│   └── vite.ts            # Vite integration
├── shared/                # Shared types and schemas
│   └── schema.ts          # Database schemas and types
└── drizzle.config.ts      # Database configuration
```

## Migration Status
- ✅ Project structure configured for Replit
- ✅ Dependencies installed and verified
- ✅ Figma assets migrated to `/client/public/figmaAssets/`
- ✅ Coming Soon page implemented with responsive design
- ✅ Development server running on port 5000
- ✅ TypeScript configuration optimized
- ✅ Security best practices implemented

## Development Workflow
- **Start Development**: `npm run dev` (already configured in workflow)
- **Build Production**: `npm run build`
- **Database Push**: `npm run db:push`
- **Type Check**: `npm run check`

## User Preferences
(To be updated based on user feedback and requests)

## Recent Changes
- **Migration Completed**: Figma design successfully migrated to Replit environment
- **Security Implementation**: Client/server separation with proper validation
- **Asset Management**: Figma assets properly integrated into public directory
- **Responsive Design**: Coming Soon page optimized for mobile and desktop