# 📄 dev_port — Developer Portfolio (React + TypeScript + Sanity CMS)

A modern, dark‑themed developer portfolio built with **React**, **TypeScript**, **Vite**, and **TailwindCSS**, powered by **Sanity CMS** for dynamic content management.  
Showcases projects, skills, and experience with a clean, developer‑centric UI.

---

## 🚀 Features
- Fully responsive, modern developer portfolio  
- Dynamic **Projects** section powered by Sanity CMS  
- Dynamic **Skills** section powered by Sanity CMS  
- Clean, dark UI with developer‑themed visuals  
- Fast build + dev environment using **Vite**  
- Type‑safe codebase using **TypeScript**  
- Optimized images using **Sanity Image Builder**  
- Modular, maintainable component structure  

---

## 🧠 Tech Stack

### Frontend
- React 18  
- TypeScript  
- Vite  
- TailwindCSS  
- ESLint + TypeScript rules  

### Backend (Headless CMS)
- Sanity CMS v3  
- Sanity Client (`@sanity/client`)  
- Sanity Image URL Builder (`@sanity/image-url`)  

---

## 🖼 Screenshots
(Add your screenshots here)

---

## 📦 Installation

```bash
git clone https://github.com/<your-username>/dev_port
cd dev_port
npm install
npm run dev
```

---

## 🔌 Environment Variables

Create a `.env` file in the project root:

```
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2023-01-01
```

Optional (if using tokens):

```
VITE_SANITY_TOKEN=your_sanity_token
```

---

## 🗂 Sanity CMS Setup

### 1. Install Sanity CLI
```bash
npm install -g @sanity/cli
```

### 2. Initialize Sanity Studio
```bash
sanity init
```

### 3. Schemas used in this project

#### Project Schema
- title  
- description  
- thumbnail  
- tags  
- tech stack  
- project link  

#### Skill Schema
- skill name  
- icon  
- category  

---

## 🔄 Fetching Data (Frontend)

### Sanity Client Setup
```ts
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
  useCdn: true,
});
```

### Example GROQ Query
```ts
const projects = await client.fetch(`*[_type == "project"] | order(order asc)`);
```

---

## 📁 Project Structure

```
src/
  components/
  sections/
  sanity/
  utils/
  assets/
  App.tsx
  main.tsx
```

---

## 🛣 Roadmap
- Add blog section  
- Add animations (Framer Motion or GSAP)  
- Add dark/light theme toggle  
- Add contact form with backend integration  

---

## 📄 License
MIT License

---

## 👤 Author
**Sahan** — Full Stack Developer  
GitHub: https://github.com/<your-username>  
Portfolio: (add link)
