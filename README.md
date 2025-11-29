# 🌟 My Personal Portfolio

This is my full-stack developer portfolio, showcasing my skills, projects, achievements, and professional experience. It's built with **React** and styled using **Tailwind CSS**, featuring custom animations powered by **Framer Motion**.

## ✨ Key Features

- **Dynamic Scroll Reveal:** Sections like **Experience**, **Achievements**, and **About** utilize the `useInView` hook from **Framer Motion** for polished, staggered, and subtle fade-in animations as the user scrolls.
- **Interactive Design:** The **Achievements** section features an interactive grid (using a custom `ChromaGrid` component) to highlight badges and awards.
- **Responsive Experience:** Fully responsive layout ensuring a seamless experience across all devices.
- **Modular Component Architecture:** Clean separation of concerns with components like `ProfileCard`, `SplitText`, `TextType`, and `LogoLoop`.
- **Navigation:** Profile card contact button uses smooth scroll navigation to the contact section (`#contact`).

---

## 💻 Tech Stack

| Category      | Technologies Used                                            |
| :------------ | :----------------------------------------------------------- |
| **Frontend**  | React.js, Framer Motion, Tailwind CSS, JavaScript/TypeScript |
| **Styling**   | Tailwind CSS, Custom Gradients, Backdrop Blur                |
| **Icons**     | React Icons (`SiReact`, `SiNextdotjs`, `SiNodedotjs`, etc.)  |
| **Utilities** | `useInView`, `useRef` (for scroll tracking)                  |

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

You need to have **Node.js** and **npm** (or `yarn`) installed.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/LungsomLamnio/My_Personal_Portfolio
    cd My_Personal_Portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

The application will be accessible at `http://localhost:3000`.

---

## 📁 Project Structure Overview

The project follows a standard React/Vite structure, with key logic separated into custom hooks and components.

| Path                                | Description                                                                                                             |
| :---------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| `src/App.jsx`                       | Main application component, linking all sections.                                                                       |
| `src/pages/About.jsx`               | Contains the `About` text, `ProfileCard`, `LogoLoop`, and initial **Framer Motion** setup.                              |
| `src/pages/Experience.jsx`          | Timeline layout for professional experience, using the reusable `RevealOnScroll` component.                             |
| `src/pages/Achievements.jsx`        | Displays awards and grants, using the `ChromaGrid` component for display and **Framer Motion** for single-group reveal. |
| `src/pages/Projects.jsx`            | Displays portfolio projects with **staggered card reveal** using `framer-motion`.                                       |
| `src/components/ProfileCard.jsx`    | Reusable component for the personal information card (likely accepting `onContactClick`).                               |
| `src/components/RevealOnScroll.jsx` | **(Implicit)** The reusable utility component defining the scroll-triggered fade-in animation, used in `Experience`.    |
| `src/components/ChromaGrid.jsx`     | Component responsible for rendering the achievements with interactive spotlight/mouse-follow effects.                   |

---

## 🛠 Custom Animations and Components

### RevealOnScroll

This is a key component ensuring sections slide up and fade in only once they enter the viewport.

```javascript
const transition = {
  className:
    "transition-all duration-[2200ms] ease-[cubic-bezier(0.24,1,0.32,1)]",
};
```
