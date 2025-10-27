# Aryan Duvedi - Discord Specialist Portfolio

## Overview
A stunning, premium portfolio website for Aryan Duvedi, a Discord Specialist with 5+ years of experience. Features advanced animations, smooth interactions, glassmorphism effects, gradient accents, professional mobile optimization with full accessibility compliance, and a complete admin dashboard for content management. Built with React, TypeScript, Tailwind CSS, Framer Motion, and PostgreSQL.

## Personal Information
- **Name**: Aryan Duvedi
- **Title**: Discord Specialist
- **Age**: 22 years old
- **Location**: India
- **Experience**: 5+ years in Discord community management and marketing
- **Projects Completed**: 300+ across NFTs, Gaming, Trading, and community initiatives
- **Combined Community Reach**: 1.5M+ members across major Discord servers
- **Contact**: Upwork, Telegram (@AryanDuvedi), Email (aryanhindubussines@gmail.com)

## Project Architecture
- **Frontend**: React SPA with advanced component architecture
- **Backend**: Express.js REST API with Passport.js authentication
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **Storage**: Database persistence for all content
- **Admin**: Session-based authentication with CLI user creation
- **Styling**: Tailwind CSS with Discord-themed gradient design system

## Core Sections

### 1. Hero Section
- Aryan Duvedi's name with animated typing "Discord Specialist" title
- 30 floating particles with advanced animations
- Gradient background with Discord theme
- Smooth scroll navigation
- Social media links: Discord, GitHub, Upwork, Telegram
- "Available for Projects" status indicator with glow effect
- Advanced gradient text effects and hover animations

### 2. Work Experience Section (NEW)
- Showcases 6 major Discord servers managed:
  1. **DomoAI** - Head Moderator (1,100,000+ members)
  2. **XTrades** - Customer Success Manager & Marketer (107,000+ members)
  3. **Crypto Traders** - Community Manager (89,000+ members)
  4. **FaceEmoji AI Club** - Community Manager (67,000+ members)
  5. **House Of Trader** - Marketer (64,000+ members)
  6. **Free Fire North America** - Ticket Support Head (35,000+ members)
- Gradient colored cards with unique borders
- Member count displays with icons
- Stats summary: 1.5M+ combined members, 6 major communities, 5+ years experience

### 3. About Section
- Real bio: 22-year-old Discord Specialist from India
- 5+ years experience, 300+ projects
- Expertise in NFTs, Gaming, Trading, community management
- Professional avatar with animated glow effects
- Highlight cards: Experience, Projects, Multi-Domain Expert, Location
- Gradient text effects and advanced styling

### 4. Projects Showcase
- Database-driven project cards with custom images
- Featured project: Advanced Moderation Bot with professional promotional image
- Category filtering (All, Bots, Servers, Tools)
- Glassmorphism cards with gradient borders
- Advanced hover effects with border color transitions
- Tech stack icons for each project
- Live links to projects and GitHub repos
- Gradient-styled active filter buttons
- Static asset serving for custom project images

### 5. Skills Section
- Database-driven tech stack icons
- 12+ technologies with proficiency levels
- Categorized: Languages, Frameworks, Databases, Tools
- Advanced icon cards with gradient backgrounds
- Hover glow effects with border animations
- Animated progress bars

### 6. Services Section
- 6 core services (database-driven):
  1. Community Management
  2. Discord Marketing
  3. Discord Moderator
  4. Ticket Support
  5. Server Creation
  6. Bot Setup & Creation
- Detailed descriptions with feature lists
- Turnaround time estimates
- "Popular" badge with star icon and gradient
- Glassmorphism cards with animated backgrounds
- Advanced border styling and hover effects

### 7. Testimonials
- 6 real testimonials from Discord community leaders:
  1. Luca.cc - DomoAI (Community Head)
  2. Kevin - XTrades (Founder)
  3. Renne - CryptoTrades (Co-Founder)
  4. Nishu - FaceEmoji (Discord Head)
  5. MrLorenz - House Of Trader (Founder)
  6. YabelWA - Free Fire (Community Manager)
- Carousel slider with auto-play
- 5-star rating displays
- Client avatars with fallbacks
- Gradient card styling with advanced borders

### 8. Contact Form
- Validated form with Zod schema
- Fields: Name, Email, Discord Tag, Service Type, Message
- Database persistence of submissions
- Loading states and toast notifications
- Contact information: Email, Upwork, Telegram
- Advanced gradient styling with animated backgrounds
- Quick Response card with online indicator

### 9. Navigation
- Fixed navbar with Aryan Duvedi branding
- Blur-on-scroll effect
- Smooth scroll to all sections
- Mobile responsive hamburger menu
- Dark/light theme toggle
- Links: Work, About, Projects, Skills, Services, Testimonials, Contact

### 10. Footer
- Aryan Duvedi personal branding
- Quick links to all sections
- Social media: Discord, Upwork, Telegram, GitHub
- Email contact link
- Professional tagline and description
- Gradient backgrounds with floating orbs
- Back to top button

## Advanced UI/UX Features

### Design Enhancements (October 2025 Update)
- **Custom Animations**: 8 advanced keyframe animations (fade-in-up, slide-in-right, slide-in-left, pulse-glow, bounce-subtle, shimmer, float, blink)
- **Gradients**: from-primary to-accent gradients throughout with enhanced brand identity
- **Glassmorphism**: Professional backdrop blur effects on cards and overlays
- **Mobile Optimization**: Full accessibility compliance with 44px minimum touch targets across all interactive elements
- **Responsive Typography**: Fluid scaling from mobile (text-4xl) to desktop (text-8xl) with proper line-height
- **Enhanced Navbar**: Gradient "AD" logo branding, professional mobile menu with staggered animations
- **Border Animations**: border-primary/10 hover to border-primary/30 with smooth transitions
- **Floating Backgrounds**: Animated gradient orbs in sections with GPU acceleration
- **Advanced Badges**: Section badges with icons and border styling
- **Gradient Text**: bg-clip-text effects on headings with smooth color transitions
- **Smooth Transitions**: Optimized 300ms duration on all interactions
- **Hover Elevations**: hover-elevate and active-elevate-2 utilities with proper z-index management
- **Particle Effects**: 30+ floating particles in hero section with randomized animations
- **Progressive Reveals**: Staggered animations with delays for professional entry effects
- **Mobile Menu**: Enhanced slide-in animation with proper backdrop blur and spacing
- **Touch Targets**: All buttons, inputs, and interactive elements meet 44px minimum for mobile accessibility

### Color System
- **Primary**: `#5865F2` (Discord Blurple)
- **Accent**: Complementary accent color
- **Gradients**: Extensive use of from-primary via-accent to-primary
- **Borders**: border-primary/10, border-primary/20, border-primary/30
- **Backgrounds**: Layered gradients with opacity variations
- **Text**: Gradient text with bg-clip-text

### Typography
- **Display**: Space Grotesk for headings
- **Sans**: Inter for body text
- **Mono**: JetBrains Mono for code

## Admin Dashboard

### Authentication
- Session-based auth with Passport.js
- HttpOnly, SameSite=strict cookies
- CLI-only user creation: `npx tsx server/create-admin.ts`
- Secure password hashing with bcrypt
- Login page at `/admin/login`
- Protected admin routes

### Content Management
Full CRUD operations for:
- **Projects**: Title, description, category, image, tech stack, GitHub/live links
- **Skills**: Name, icon, proficiency level, category
- **Services**: Title, description, icon, features, turnaround, popular flag
- **Testimonials**: Name, role, company, content, rating, avatar
- **Contact Submissions**: View all form submissions with filtering

### Features
- Real-time updates via React Query
- Inline editing and deletion
- Add new content with modal forms
- Data validation with Zod schemas
- Responsive admin interface
- Logout functionality

## Database Schema

### Tables
1. **projects**: id, title, description, category, image, tech[], github, live, order
2. **skills**: id, name, icon, proficiency, category, order
3. **services**: id, title, description, icon, features[], turnaround, popular, order
4. **testimonials**: id, name, role, company, content, rating, avatar, order
5. **contact_submissions**: id, name, email, discordTag, projectType, message, createdAt
6. **users**: id, username, password (hashed)

### Migration
- Use Drizzle ORM with `npm run db:push`
- PostgreSQL database (Neon-backed)
- Automatic schema synchronization

## Technical Stack

### Frontend
- React 18 with TypeScript
- TanStack Query v5 for state management
- React Hook Form with Zod validation
- Wouter for routing
- Tailwind CSS with custom utilities
- Shadcn UI components
- Framer Motion (ready for animations)
- Lucide React icons + React Icons
- Static asset management via Express.js

### Backend
- Express.js with TypeScript
- Passport.js for authentication
- Express Session with PostgreSQL store
- Drizzle ORM for database
- Zod for validation
- Bcrypt for password hashing

### Database
- PostgreSQL (Neon)
- Connection pooling
- Session storage
- Full ACID compliance

## React Query Configuration
All queries configured with:
```typescript
staleTime: Infinity
gcTime: Infinity
refetchOnMount: false
refetchOnWindowFocus: false
refetchOnReconnect: false
```
This prevents constant automatic refetching and provides stable, predictable data loading.

## Development Workflow

### Running the Project
- Command: `npm run dev`
- Starts Express server + Vite dev server
- Auto-restart on code changes
- Hot Module Replacement (HMR)

### Creating Admin User
```bash
npx tsx server/create-admin.ts
```
Follow prompts to create username and password.

### Database Management
```bash
npm run db:push        # Sync schema
npm run db:push --force # Force sync if needed
```

### Admin Access
1. Navigate to `/admin/login`
2. Enter credentials created via CLI
3. Access full content management dashboard

## Deployment Notes
- Database: PostgreSQL via Replit/Neon
- Sessions: Stored in PostgreSQL
- Environment Variables: DATABASE_URL, SESSION_SECRET
- Static Assets: Served via Vite in production
- Admin: CLI user creation only (no signup page)

## Security Features
- Password hashing with bcrypt
- HttpOnly session cookies
- SameSite=strict cookie policy
- CSRF protection via session
- Protected admin routes
- Input validation on all forms
- SQL injection protection via Drizzle ORM

## User Experience
- Smooth scroll navigation
- Loading states throughout
- Error handling with toasts
- Accessibility attributes
- data-testid for testing
- Keyboard navigation support
- Mobile-optimized layouts
- Touch-friendly interactions
- Fast page loads
- Optimized images

## Content Population
All content is managed through the admin dashboard:
- Services: 6 detailed service offerings
- Testimonials: 6 real client testimonials
- Projects: Discord bot and tool portfolio
- Skills: Technology proficiency showcase
- Contact Submissions: Database-stored inquiries

## Future Enhancements
- Email delivery integration (SendGrid/Nodemailer)
- Blog section for Discord tutorials
- Live Discord bot status indicators
- Downloadable resume/CV
- Analytics integration (Plausible/Google Analytics)
- More advanced animations with Framer Motion
- Project case studies with detailed pages
- Client portal for project tracking
