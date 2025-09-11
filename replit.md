# Overview

This is a React-based web application for MRX DO BRASIL, a sustainable electronic waste recycling company founded in 1990. The site showcases the company's specialized services in reverse logistics for electronic waste disposal, featuring a modern, environmentally-focused design with a hexagonal pattern theme matching their corporate identity. The application emphasizes the company's mission of environmental preservation and provides comprehensive information about their recycling processes, company history, and contact options.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite for build tooling
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a dark background with green accent colors (#2ECC40)
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility and consistency
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture
- **Server**: Express.js with TypeScript running in ESM mode
- **Database ORM**: Drizzle ORM configured for PostgreSQL with Neon Database as the serverless provider
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **Development**: Vite middleware integration for hot module replacement during development

## Database Design
- **Primary Database**: PostgreSQL using Neon's serverless platform
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Current Schema**: Basic user authentication system with username/password fields and UUID primary keys
- **Storage Abstraction**: Repository pattern with in-memory fallback for development and testing

## Authentication & Authorization
- **Session-based Authentication**: Using Express sessions with PostgreSQL storage
- **Password Security**: Basic implementation ready for enhancement with proper hashing
- **User Management**: CRUD operations abstracted through storage interface

## Design System
- **Theme**: Dark mode design with hexagonal background patterns
- **Colors**: Primary green (#2ECC40), dark backgrounds, and neutral grays
- **Typography**: Inter font family for modern readability
- **Animations**: CSS animations for floating particles, scroll-triggered fade-ins, and typing effects
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

## Key Features
- **Interactive Navigation**: Smooth scrolling with auto-hiding header based on scroll direction
- **Dynamic Content**: Typing animation effects and intersection observer-based fade-in animations
- **Contact Integration**: Direct WhatsApp and email links for customer engagement
- **Form Handling**: Contact form with WhatsApp integration for lead generation
- **Content Sections**: Hero, services, about, gallery, contact, and footer with company information

# External Dependencies

## Database & Storage
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database operations and migrations

## UI & Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across frontend and backend
- **React Query**: Server state management and caching
- **React Hook Form**: Form state management with validation

## Communication
- **WhatsApp Business API**: Direct integration for customer communication via formatted links
- **Email**: Standard mailto links for alternative contact methods

## Fonts & Assets
- **Google Fonts**: Inter font family loaded via CDN
- **Static Assets**: Local image storage in attached_assets directory