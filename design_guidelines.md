# Design Guidelines: Advanced Discord Expert Portfolio

## Design Approach

**Selected Approach:** Reference-Based with Tech/Gaming Aesthetic
- **Primary Inspiration:** Discord's modern, playful brand identity combined with Linear's clean typography and Stripe's restraint
- **Key Principle:** Bold, interactive, and memorable while maintaining professional credibility

## Typography System

**Font Families:**
- Primary: 'Inter' (Google Fonts) - Headers, navigation, buttons
- Secondary: 'JetBrains Mono' (Google Fonts) - Code snippets, technical details
- Accent: 'Space Grotesk' (Google Fonts) - Hero titles, section headers

**Hierarchy:**
- Hero Title: text-6xl md:text-7xl lg:text-8xl, font-bold
- Section Headers: text-4xl md:text-5xl, font-bold
- Subsection Headers: text-2xl md:text-3xl, font-semibold
- Body Text: text-base md:text-lg, font-normal
- Captions/Meta: text-sm, font-medium

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, and 24
- Component padding: p-4 to p-8
- Section padding: py-16 md:py-24 lg:py-32
- Grid gaps: gap-4 to gap-8
- Container max-width: max-w-7xl

**Grid Structure:**
- Hero: Full-width with centered content
- Projects: 3-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Skills: 4-column grid for tech icons
- Services: 2-column split layout

## Component Library

### Navigation
- Fixed header with blur backdrop (backdrop-blur-md)
- Logo on left, navigation links center, CTA button right
- Hamburger menu for mobile with slide-in drawer
- Scroll indicator showing current section

### Hero Section
- Full viewport height (min-h-screen) with centered content
- Animated gradient background with subtle particle effects
- Large hero title with typing animation effect
- Subtitle describing expertise (Discord.js, Bot Development, Server Management)
- Two CTA buttons: "View Projects" (primary) and "Contact Me" (secondary) with blur backgrounds
- Scroll indicator arrow at bottom
- 3D Discord logo element with mouse-follow parallax (Three.js)
- **Hero Image:** Abstract tech/Discord-themed illustration or 3D rendered Discord logo visualization

### Projects Showcase
- Glassmorphism cards with backdrop-blur-lg
- Project thumbnail images with hover scale effect (transform scale-105)
- Category tags (Bots, Servers, Tools, Moderation)
- Filtering buttons to sort projects by category
- Live demo and GitHub links on each card
- Grid layout with staggered fade-in animations
- Each card: thumbnail, title, description, tech stack icons, links

### Skills Section
- Tech stack icons in 4-column grid
- Animated progress bars for proficiency levels
- Categories: Languages (JavaScript, Python), Frameworks (Discord.js, Node.js), Databases (MongoDB, PostgreSQL), Tools (Git, Docker)
- Icon animations on scroll into view
- Tooltips on hover showing years of experience

### Services Offered
- 2-column layout: left side with service list, right side with pricing/contact
- Service cards with icons: Bot Development, Server Setup, Moderation Systems, Custom Integrations, Consulting
- Icon animations (subtle bounce on hover)
- Each service includes brief description and typical turnaround time

### Testimonials
- Carousel slider with 3 visible cards (1 on mobile)
- Client avatar, name, role, Discord server name
- 5-star rating display
- Auto-play with manual navigation controls
- Smooth transition animations

### Contact Section
- Split layout: form on left, contact info on right
- Form fields: Name, Email, Discord Tag, Project Type (dropdown), Message
- Animated form with focus states and validation
- Contact info: Discord username with status indicator, Email, GitHub, Twitter
- Floating particle background effect
- Submit button with loading state animation

### Footer
- 3-column layout: About/Bio, Quick Links, Social Media
- Newsletter signup form
- Animated gradient divider
- Copyright and attribution
- Back to top button with smooth scroll

## Animations & Interactions

**Scroll Animations (GSAP/Framer Motion):**
- Fade-in with slide-up for section headers (duration: 0.8s)
- Staggered animations for project cards (delay: 0.1s between cards)
- Progress bar fills on scroll into view
- Parallax effects on background elements

**Micro-Interactions:**
- Button hover: slight scale (scale-105) with shadow increase
- Card hover: lift effect (translateY -8px) with shadow
- Icon animations: subtle rotation or bounce
- Form input focus: border glow effect
- CTA buttons: ripple effect on click

**3D Elements:**
- Three.js Discord logo with mouse-follow parallax in hero
- Subtle rotation animation on idle
- Interactive on mouse movement

## Images

**Hero Section:**
- Large hero background: Abstract Discord-themed 3D illustration featuring floating Discord logo elements, chat bubbles, and geometric shapes in a tech-inspired environment
- Style: Modern 3D render with depth, gradients, and floating elements
- Placement: Full-width background with overlay for text readability

**Projects:**
- Project thumbnails: Screenshots of Discord bots in action, server interfaces, or bot dashboard UIs
- Size: 16:9 aspect ratio, minimum 1200x675px
- Style: Clean screenshots with professional presentation

**About Section:**
- Professional headshot or avatar in circular frame
- Alternative: Discord-style avatar with custom design
- Size: 400x400px minimum

## Accessibility

- High contrast text for readability
- Focus states for all interactive elements (ring-2 ring-offset-2)
- ARIA labels for icon buttons
- Keyboard navigation support throughout
- Alt text for all images
- Form validation with clear error messages

## Responsive Breakpoints

- Mobile: base (up to 640px) - single column, stacked layout
- Tablet: md (768px+) - 2-column grids, hamburger menu
- Desktop: lg (1024px+) - full multi-column layouts, hover effects active
- Large Desktop: xl (1280px+) - max-width containers, enhanced spacing

This portfolio design creates a premium, interactive experience that showcases Discord expertise while maintaining professional credibility and technical sophistication.