# Full-Stack Developer Portfolio

This project is a portfolio site built using React, Tailwind CSS, and animated with Framer Motion. The site is designed to showcase full-stack development skills and provide an example of using modern web development tools and libraries for building fast, responsive, and interactive web applications.

## Table of Contents
- [Installation](#installation)
- [Setup](#setup)
- [Features](#features)
- [Learnings](#learnings)
- [Deployment](#deployment)

## Installation

Clone the repository:
```bash
git clone <repository-url>
```

Install dependencies:
```bash
npm install
```

## Setup

This project is set up using Vite for fast development and builds, along with Tailwind CSS for styling. Here's how we set it up:

- **Vite**: Installed as the project bundler for faster build times and an improved development experience.
- **Tailwind CSS**: Installed and configured with PostCSS and Autoprefixer for enhanced styling and browser compatibility.

Generated configuration files for Tailwind and PostCSS using:
```bash
npx tailwindcss init -p
```

Set up Tailwind directives (base, components, utilities) in the project's main CSS file.

Configured the `tailwind.config.js` file to remove unused styles in production for optimal performance.

Verified the configuration by running Vite’s development server and confirming that Tailwind CSS works as expected.

Created a basic page to test Tailwind's utility classes and ensure everything functions correctly.

## Features

- Vite as the bundler for fast builds and hot module reloading.
- Tailwind CSS for easy-to-use utility-based styling.
- Framer Motion for interactive animations and transitions between different sections.
- React Icons for including a wide range of icons in the project.

### Installed Assets

- Vite
- React Icons
- Tailwind CSS
- Framer Motion

## Learnings

- **Vite and Tailwind CSS**: Learned to set up and configure a portfolio website with these tools to improve performance and styling efficiency.
- **Framer Motion**: First time using this library for animations. It was used to add smooth transitions and animations to various sections of the site, such as content reveals and page interactions. This was an excellent opportunity to understand how animation libraries integrate with React components.

### Key takeaways:

- How to animate elements using the motion components.
- Control animation timing, delays, and easing with Framer Motion.
- Used key features like variants for orchestrating more complex animations.
- **CSS Animations**: Created custom background animations using CSS for an enhanced visual appeal on the home page.

## Deployment

The project was deployed on Vercel, which provides an excellent platform for deploying Next.js, React, and static websites. Vercel integrates seamlessly with Git for continuous deployment.

Live site: [Portfolio Website](#)
