# 📦 Product Showcase – Tailwind CSS Styling

A modern **Product Showcase React application** styled completely using **Tailwind CSS**.  
This project demonstrates how to convert a traditional CSS-based React application into a **utility-first, responsive, and component-driven UI** using Tailwind.

---

## 🚀 Project Overview

This project was developed as part of **Day 12 – Styling (CSS / Tailwind)** in my internship curriculum.  
The goal was to **refactor an existing Product Showcase website** and apply Tailwind CSS while preserving the original structure, logic, and content.

The application focuses on **clean UI, responsive layouts, and component-level styling** using Tailwind utilities.

---

## 🛠️ Technologies Used

- React (Vite)
- Tailwind CSS
- React Router DOM
- Context API
- JavaScript (ES6+)

---

## 🎯 Learning Objectives Covered

This project covers the following internship concepts:

### ✅ Basic Styling
- Applied colors, spacing, typography, borders, and shadows using Tailwind utility classes
- Replaced traditional CSS and inline styles with Tailwind utilities
- Maintained a consistent dark-themed UI across the application

### ✅ Component-Level Styling
- Styled each React component independently using Tailwind
- Components such as `Layout`, `ProductCard`, and pages have isolated styles
- Avoided global CSS to improve maintainability

### ✅ Tailwind Utilities
- Used utility-first classes such as:
  - `flex`, `grid`, `gap`, `space-y`
  - `bg-*`, `text-*`, `rounded-*`, `shadow-*`
  - `hover:*`, `transition`, `duration`
- Implemented proper image handling using `object-cover` and fixed-height containers

### ✅ Responsive Layout
- Built fully responsive layouts using Tailwind breakpoints:
  - `sm:` for small screens
  - `md:` for tablets
  - `lg:` for desktops
- Product grid dynamically adapts to different screen sizes
- Ensured proper alignment and scaling on all devices

---

## 🧩 Key Features

- 📱 Fully responsive product grid
- 🎨 Modern Tailwind-based dark UI
- 🧱 Reusable Product Card component
- 🔍 Product search functionality
- 🔗 Dynamic routing for product details
- ⚡ Smooth hover effects and transitions
- 🖼️ Fixed image overflow and scaling issues using Tailwind utilities

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Layout.jsx
│   ├── ProductCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── About.jsx
│
├── context/
│   ├── ProductContext.jsx
│   ├── ThemeContext.jsx
│
├── data/
│   └── products.js
│
├── index.css
├── App.jsx
└── main.jsx

---


## ▶️ How to Run the Project
bash
Copy code
npm install
npm run dev
Open in browser:

arduino
Copy code
http://localhost:5173
