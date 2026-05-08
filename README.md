# ChaiTailwind ☕

A lightweight utility-first CSS runtime engine built using JavaScript.

ChaiTailwind dynamically scans the DOM, parses utility classes, and applies inline styles at runtime — inspired by the utility-first workflow of Tailwind CSS.

---

# ✨ Features

* Utility-first class system
* Runtime CSS generation
* DOM traversal engine
* Dynamic inline styling
* Modular utility architecture
* MutationObserver support
* Tailwind-inspired syntax
* Zero dependency runtime engine
* Vite-powered development setup
* Production-ready project structure

---

# 🚀 Example

## HTML

```html
<div class="chai-p-20 chai-bg-blue chai-text-white chai-rounded-12">
  Hello ChaiTailwind
</div>
```

## Generated Styles

```css
padding: 20px;
background-color: #3b82f6;
color: white;
border-radius: 12px;
```

---

# 🧠 How It Works

ChaiTailwind works in 4 major steps:

1. Scans the DOM after page load
2. Finds classes starting with `chai-`
3. Parses utility names and values
4. Dynamically applies inline styles using JavaScript

Example:

```txt
chai-p-20
```

Becomes:

```css
padding: 20px;
```

---

# 🏗️ Project Architecture

```txt
chai-tailwind/
│
├── src/
│   ├── main.js
│   ├── chai.js
│   ├── style.css
│   │
│   ├── utils/
│   │   ├── spacing.js
│   │   ├── colors.js
│   │   ├── typography.js
│   │   ├── borders.js
│   │   └── layout.js
│   │
│   └── demo/
│       └── components.html
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Supported Utilities

## Spacing

```txt
chai-p-20
chai-m-20
chai-px-10
chai-py-10
chai-gap-20
```

---

## Colors

```txt
chai-bg-blue
chai-bg-red
chai-text-white
chai-text-gray
```

---

## Typography

```txt
chai-fs-24
chai-fw-700
chai-uppercase
chai-lowercase
chai-capitalize
```

---

## Borders & Effects

```txt
chai-rounded-12
chai-border-2
chai-shadow
```

---

## Layout

```txt
chai-flex
chai-grid
chai-grid-cols-3
chai-justify-center
chai-items-center
chai-wrap
```

---

# 🔄 Reactive DOM Updates

ChaiTailwind uses `MutationObserver` to automatically process newly added DOM elements dynamically.

This allows runtime updates without refreshing the page.

---

# 🛠️ Tech Stack

* JavaScript
* DOM Manipulation
* MutationObserver
* ES Modules
* Vite

---

# 📦 Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPO
```

Move into the project:

```bash
cd chai-tailwind
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

# 🏭 Production Build

Create optimized production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# 🌐 Deployment

Recommended platforms:

* Vercel
* Netlify
* GitHub Pages

---

# 🎯 Learning Outcomes

This project demonstrates understanding of:

* DOM traversal
* Runtime parsing systems
* Utility-first CSS architecture
* JavaScript framework internals
* Dynamic style generation
* Scalable frontend architecture
* Reactive DOM observation

---

# 📸 Demo

Add screenshots or GIFs here.

---

# 📹 Submission Requirements

* Hosted project link
* Public GitHub repository
* Video walkthrough
* Twitter (X) post

---

# 🔮 Future Improvements

* Responsive breakpoints
* Hover states
* Dark mode utilities
* Theme system
* CSS variable support
* Animation utilities
* Plugin system
* Compiler-based optimization

---

# 📄 License

MIT License

---

# 👨‍💻 Author

Ranjan Nayak
