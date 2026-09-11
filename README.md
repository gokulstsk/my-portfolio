# Gokul S — Personal Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Demo-gokulstsk.github.io%2Fmy--portfolio-blue?style=for-the-badge&logo=github)](https://gokulstsk.github.io/my-portfolio/)
[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.js.org/)
[![Webpack 5](https://img.shields.io/badge/Webpack-5.105.0-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)](https://webpack.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

<p align="center">
  A sleek, modern, and high-performance personal portfolio showcasing full-stack engineering expertise, enterprise workflow automation, and featured projects.
</p>

[**Explore Live Demo »**](https://gokulstsk.github.io/my-portfolio/)

</div>

---

## 🌟 Overview

This portfolio highlights my journey as a **Full Stack Developer** specializing in building secure, scalable, and high-performance web applications, BPM/workflow orchestration systems, and interactive tools.

Built with a custom **Webpack 5** pipeline, **React 19**, **Tailwind CSS**, and **Radix UI**, the application features fluid animations, responsive layouts, and an automated **GitHub Actions** continuous deployment pipeline targeting **GitHub Pages**.

---

## ✨ Features

- ⚡ **Modern React 19 Architecture**: Optimized rendering with reusable, accessible UI components powered by Radix UI and Tailwind CSS.
- 🎨 **Minimalist & Clean UI**: Dynamic animations, smooth scrolling progress bar, responsive navigation, and accessible typography.
- 💼 **Interactive Experience Timeline**: Detailed career progression featuring multi-role promotions, impact metrics, and technology badges.
- 🚀 **Featured Projects Showcase**: Curated showcase of full-stack platforms, job processing engines, forensics tools, and interactive documentation.
- 🛠️ **Custom Webpack 5 Build Setup**: Fine-tuned Webpack configuration with Babel, PostCSS, asset optimization, and development hot-reloading.
- 🤖 **Automated CI/CD Pipeline**: Automated GitHub Actions workflow to build and deploy only the production bundle (`./build`) directly to GitHub Pages.

---

## 🛠️ Tech Stack

### **Frontend & Core**
- **React 19** — Component-driven UI library
- **React Router v7** — Client-side routing with GitHub Pages basename support
- **Radix UI** — Accessible, unstyled UI primitives
- **Lucide React** — Modern, consistent icon system
- **Recharts** — Composable charting library

### **Styling & Design**
- **Tailwind CSS** — Utility-first styling framework
- **PostCSS & Autoprefixer** — CSS transformation and vendor prefixing
- **Tailwind Merge & Class Variance Authority (CVA)** — Dynamic class utilities

### **Tooling & Build System**
- **Webpack 5** — Module bundler with custom dev server and production optimizations
- **Babel 7** — Modern JavaScript/React transpilation
- **gh-pages / GitHub Actions** — Automated deployment pipeline

---

## 📂 Project Structure

```text
my-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow (build artifact)
├── public/
│   └── index.html              # HTML entry template
├── src/
│   ├── components/             # Reusable UI sections & Radix components
│   │   ├── ui/                 # Atomic UI primitives (buttons, dialogs, etc.)
│   │   ├── Experience.jsx      # Work history & career timeline
│   │   ├── Expertise.jsx       # Core technical competencies
│   │   ├── Footer.jsx          # Contact & social links
│   │   ├── Header.jsx          # Navigation bar
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── Projects.jsx        # Project showcases & GitHub links
│   │   └── ScrollProgress.jsx  # Dynamic scroll indicator
│   ├── data/
│   │   └── mock.js             # Portfolio content data (projects, experience, skills)
│   ├── pages/
│   │   └── Portfolio.jsx       # Main single-page portfolio layout
│   ├── App.js                  # Application routing & layout setup
│   ├── App.css                 # Component animations & styling
│   ├── index.css               # Tailwind directives & global design tokens
│   └── index.js                # React DOM entrypoint
├── craco.config.js             # CRACO override configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── webpack.config.js           # Webpack 5 configuration (bundle & devServer)
└── package.json                # Project scripts & dependencies
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed.

```bash
node -v
npm -v
```

### 1. Clone the Repository

```bash
git clone https://github.com/gokulstsk/my-portfolio.git
cd my-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm start
```

The application will be accessible at `http://localhost:8080`.

### 4. Build for Production

```bash
npm run build
```

The production-ready assets will be compiled into the `build/` directory.

---

## 🌐 Deployment

### GitHub Actions (Recommended)

This repository includes a preconfigured GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that builds and deploys only the `./build` folder on every push to the `main` branch.

To enable:
1. In your GitHub repository, navigate to **Settings** → **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.

### Manual Deployment via CLI

You can also deploy directly using the `gh-pages` script:

```bash
npm run deploy
```

---

## 📬 Contact & Connect

- **Portfolio**: [gokulstsk.github.io/my-portfolio](https://gokulstsk.github.io/my-portfolio/)
- **LinkedIn**: [linkedin.com/in/gokulstsk](https://www.linkedin.com/in/gokulstsk/)
- **GitHub**: [@gokulstsk](https://github.com/gokulstsk)
- **Email**: [gokulstsk@gmail.com](mailto:gokulstsk@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
