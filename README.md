# 🎮 Neon Arena - Cyberpunk Gaming Hub

<div align="center">
  <img src="./public/hero-preview.png" alt="Neon Arena Preview" width="800">
  
  **[Live Demo](https://neon-arena-seven.vercel.app/)** • **[View Demo](https://neon-arena-seven.vercel.app/)**
  
  ![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)
  ![React](https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
  ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
</div>

## 🌟 Overview

**Neon Arena** is a cutting-edge cyberpunk-themed gaming hub landing page that delivers an immersive first impression with advanced 3D graphics, interactive animations, and stunning visual effects. Built with modern web technologies to create a premium gaming experience.

### 🎯 Key Features

- **🎨 Cyberpunk Design**: Immersive neon aesthetic with glassmorphism effects
- **🤖 3D Bot Element**: Interactive 3D character with real-time animations
- **✨ Particle System**: Dynamic particles responding to mouse movement
- **🎭 Canvas Graphics**: Custom WebGL-powered visual effects
- **📜 Scroll Animations**: Smooth parallax and object animations
- **🎮 3D Tilt Effects**: GPU-accelerated interactive elements
- **📱 Responsive Design**: Adaptive layout for all screen sizes
- **♿ WCAG 2.1 AA**: Fully accessible with proper ARIA labels
- **⚡ 60fps Performance**: Optimized animations with adaptive quality

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 16.1.6 with App Router
- **UI Library**: React 19.2.3 with TypeScript
- **Styling**: TailwindCSS 4.0 with custom neon theme
- **Animations**: Framer Motion for 60fps animations
- **3D Graphics**: Three.js & React Three Fiber
- **Smooth Scrolling**: Lenis for buttery-smooth navigation

### Development Tools
- **Language**: TypeScript 5.0 with strict mode
- **Package Manager**: npm with modern dependencies
- **Code Quality**: ESLint & Prettier configuration
- **Testing**: Vitest + Playwright for comprehensive coverage

## 🏗️ Project Structure

```
neon-arena/
├── app/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── buttons/          # Neon button components
│   │   │   ├── cards/           # Glassmorphism cards
│   │   │   └── navigation/      # Tubelight navigation
│   │   ├── layout/              # Header, Footer, MainLayout
│   │   └── features/hero/     # Hero section components
│   ├── sections/                # Page sections (hero, features, etc.)
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   └── styles/                 # Global styles and CSS variables
├── public/                     # Static assets
├── tests/                      # Component and E2E tests
└── docs/                       # Documentation
```

## 🎮 Interactive Features

### 3D Bot Element
- **Real-time Animation**: Smooth character movements
- **Mouse Interaction**: Bot responds to cursor position
- **Performance Optimized**: GPU-accelerated rendering

### Particle System
- **Dynamic Particles**: 50+ animated particles
- **Mouse Tracking**: Particles follow cursor movement
- **Collision Detection**: Interactive particle behaviors

### Canvas Graphics
- **WebGL Rendering**: Hardware-accelerated graphics
- **Real-time Updates**: Smooth 60fps animations
- **Custom Shaders**: Advanced visual effects

### Scroll Animations
- **Parallax Effects**: Multi-layer depth perception
- **Object Animations**: Scroll-triggered element movements
- **Smooth Transitions**: Seamless section navigation

## 🎨 Design System

### Cyberpunk Theme
```css
/* Neon Color Palette */
--neon-cyan: #00ffff;
--neon-magenta: #ff00ff;
--neon-yellow: #ffff00;
--neon-green: #00ff00;
--neon-blue: #0088ff;

/* Glassmorphism Effects */
--glass-bg: rgba(255, 255, 255, 0.1);
--glass-border: rgba(255, 255, 255, 0.2);
--glass-blur: 12px;
```

### Component Library
- **NeonButton**: Glowing buttons with hover effects
- **GlassmorphismCard**: Blur effects with neon borders
- **NeonNavigation**: Tubelight-style navigation bar
- **3D Elements**: Interactive components with tilt effects

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (simplified animations)
- **Tablet**: 768px - 1024px (medium complexity)
- **Desktop**: > 1024px (full feature set)

### Performance Optimization
- **Adaptive Quality**: Device capability detection
- **Lazy Loading**: Images and 3D assets
- **Memory Management**: Efficient particle systems
- **60fps Target**: Optimized animation loops

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Modern web browser with WebGL support

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/neon-arena.git

# Navigate to project directory
cd neon-arena

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables
```bash
# Create .env.local file
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 🧪 Testing

### Unit Tests
```bash
# Run component tests
npm run test

# Run tests with coverage
npm run test:coverage
```

### E2E Tests
```bash
# Run end-to-end tests
npm run test:e2e

# Run tests in headed mode
npm run test:e2e:headed
```

## 📊 Performance Metrics

### Core Web Vitals
- **LCP**: < 2.5s (Good)
- **FID**: < 100ms (Good)
- **CLS**: < 0.1 (Good)

### Animation Performance
- **Target FPS**: 60fps
- **Particle Count**: 50 (adaptive)
- **Memory Usage**: < 50MB
- **GPU Acceleration**: Enabled

## 🎯 Browser Support

### Modern Browsers
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Required Features
- WebGL 2.0 support
- ES6+ JavaScript
- CSS Grid & Flexbox
- RequestAnimationFrame API

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm run test`)
5. Commit changes (`git commit -m 'Add amazing feature'`)
6. Push to branch (`git push origin feature/amazing-feature`)
7. Open Pull Request

### Code Style
- Use TypeScript strict mode
- Follow ESLint configuration
- Write meaningful commit messages
- Add tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js** for 3D graphics capabilities
- **Framer Motion** for smooth animations
- **TailwindCSS** for utility-first styling
- **Lenis** for buttery-smooth scrolling

---

<div align="center">
  <strong>🎮 Built with passion for the gaming community 🎮</strong>
</div>

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
