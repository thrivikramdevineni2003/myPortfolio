# 🚀 Futuristic Portfolio Template

A stunning, modern portfolio website with a futuristic design that can be easily customized through a single JSON file. Built with React, TypeScript, TailwindCSS, and Framer Motion.

## ✨ Features

- **🎨 Futuristic Design**: Glassmorphism effects, neon gradients, and smooth animations
- **📱 Fully Responsive**: Looks great on all devices
- **⚡ Dynamic Content**: Update everything through `content.json` - no coding required
- **🎭 Smooth Animations**: Beautiful page transitions and hover effects
- **📧 Contact Form**: Built-in contact form with validation
- **🔗 Social Links**: Easy social media integration
- **⚡ Fast Performance**: Optimized with Vite and modern React practices

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **UI Components**: Shadcn/ui

## 🚀 Quick Start

```markdown
# Project — Futuristic Portfolio Template (Cleaned)

This repository contains a customizable portfolio website built with React, TypeScript, TailwindCSS and Framer Motion.

Notes about this file:
- The original Lovable platform metadata and deployment instructions were removed to keep this repo focused and platform-agnostic.
- Customize your portfolio by editing `public/content.json`.
- The project is licensed under the MIT License (see `LICENSE`).

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

## Where to edit content

- `public/content.json` — main content for personal info, projects, skills, and contact.
- `src/components/` — UI components for each section.

```
}
```

#### Projects
```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description...",
      "technologies": ["Tech 1", "Tech 2"],
      "github": "https://github.com/username/repo",
      "demo": "https://your-demo-url.com",
      "image": "/project-image.jpg",
      "featured": true // Set to true for featured projects
    }
  ]
}
```

#### Contact Information
```json
{
  "contact": {
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "Your City, Country",
    "social": {
      "linkedin": "https://linkedin.com/in/yourprofile",
      "github": "https://github.com/yourusername",
      "twitter": "https://twitter.com/yourhandle"
    }
  }
}
```

### Design Customization

#### Colors and Theme
The design system is defined in `src/index.css`. You can customize:

- **Primary Color**: Main brand color (cyan by default)
- **Secondary Color**: Secondary accent (purple by default)  
- **Accent Color**: Tertiary accent (pink/magenta by default)
- **Gradients**: Custom gradient combinations
- **Glass Effects**: Glassmorphism opacity and blur levels

#### Animations
All animations are defined in `tailwind.config.ts`. You can:

- Adjust animation timing and easing
- Add new keyframe animations
- Modify hover effects and transitions

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Services.tsx    # Services offered
│   ├── Projects.tsx    # Portfolio projects
│   ├── Contact.tsx     # Contact form
│   ├── Navigation.tsx  # Fixed navigation
│   └── Portfolio.tsx   # Main container
├── pages/
│   └── Index.tsx       # Main page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── index.css          # Design system & styles
public/
└── content.json       # Portfolio content data
```

## 🎨 Design System

The portfolio uses a comprehensive design system with:

- **HSL Color Values**: All colors defined in HSL for better control
- **Glassmorphism Classes**: `.glass` and `.glass-strong` utilities
- **Neon Glow Effects**: `.glow-primary`, `.glow-secondary`, `.glow-accent`
- **Gradient Utilities**: Pre-defined gradient combinations
- **Animation Classes**: Smooth transitions and hover effects

## 📧 Email Integration

To enable the contact form to actually send emails:

1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the contact form component with your EmailJS configuration
4. Add your EmailJS keys to the environment

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add deploy script to `package.json`
3. Deploy: `npm run deploy`

## 🔧 Advanced Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Add it to the main `Portfolio.tsx` component
3. Update the navigation in `Navigation.tsx`
4. Add corresponding data structure to `content.json`

### Custom Animations
1. Define keyframes in `tailwind.config.ts`
2. Add animation classes to the animations object
3. Use in components with `animate-{your-animation}`

### Performance Optimization
- Images are lazy-loaded by default
- Components use `whileInView` for scroll-triggered animations
- Modern React patterns for optimal rendering

## 🐛 Troubleshooting

**Content not loading?**
- Check that `content.json` is in the `public` folder
- Verify JSON syntax is valid
- Check browser console for errors

**Animations not working?**
- Ensure Framer Motion is installed
- Check that elements have proper viewport settings
- Verify CSS animations are defined

**Styling issues?**
- Make sure TailwindCSS is properly configured
- Check that custom CSS variables are defined
- Verify responsive classes are applied

## 📄 License

This template is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Built with ❤️ for developers who want beautiful portfolios without the hassle of coding from scratch.**