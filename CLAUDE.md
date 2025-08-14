# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Matt Simons' personal career website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The site features:
- Personal portfolio homepage with interactive ChatBox component
- Projects showcase with detailed project information  
- Public speaking section with talks, locations, and featured content
- Static site generation for deployment via Docker containers

## Development Commands

### Core Development
- `npm run dev` - Start development server with Turbopack (opens at http://localhost:3000)
- `npm run build` - Build static site for production (outputs to `out/` directory)
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

### Makefile Commands
- `make run` - Alias for `npm run dev`
- `make build` - Clean build (removes `out/` directory and runs `npm run build`)
- `make docker-build` - Build Docker image for deployment
- `make docker-push` - Push Docker image to registry
- `make tag` - Create and push git tag using VERSION file

## Architecture

### Directory Structure
- `app/` - Next.js App Router pages and components
  - `components/` - Shared UI components (Header, Footer, ChatBox)
  - `projects/` - Projects page and ProjectCard component
  - `public-speaking/` - Speaking page with specialized components
  - `contact/` - Contact page
- `data/` - TypeScript data files and interfaces
  - `Project.ts` - Project interface definition
  - `projects.ts` - Project data array
  - `talks.ts` - Speaking engagement data with Talk interface
  - `featuredTalks.ts` - Featured talks data
- `public/` - Static assets (images, icons, etc.)

### Key Configuration
- **Next.js Config**: Configured for static export (`output: 'export'`) with unoptimized images and no-cache headers
- **Tailwind**: Custom color palette including power (#440B0A), ink (#000508), steel (#6C6F7D), parchment (#fcf2e3), mist (#CCC9E7)
- **Docker**: Multi-stage build with private registry deployment to 192.168.2.17:5000

### Core Components
- **ChatBox** (`app/components/ChatBox.tsx`) - Interactive AI chatbot component using UUID for session management
- **Header/Footer** - Navigation and site structure
- **ProjectCard** - Display component for project portfolio items
- **Public Speaking Components** - FeaturedTalks, PublicSpeakingList, PublicSpeakingMap, PublicSpeakingTopics

### Data Model
- **Project Interface**: Includes title, status (current/past), descriptions, images array, and optional links
- **Talk Interface**: Contains event, title, location, year, optional recording URL and coordinates
- **Featured Talks**: Separate data structure for highlighted speaking engagements

### Deployment
The site uses static generation with Docker containerization. Version management is handled through a VERSION file and Makefile automation for building, tagging, and pushing to a private container registry.