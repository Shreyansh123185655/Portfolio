# Shreyansh Gupta — Full-Stack & ML Engineer Portfolio

🚀 **Live:** [portfolio-orpin-five-88.vercel.app](https://portfolio-orpin-five-88.vercel.app)

A dark-themed, premium personal portfolio for **Shreyansh Gupta** — B.Tech Computer Science student at Manipal University Jaipur, skilled in Full-Stack Development, Machine Learning, and Backend Engineering.

Built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion + Three.js**.

## Stack

- React 18 / TypeScript
- Vite (build tool)
- Tailwind CSS (utility-first styling)
- Framer Motion (animations + scroll effects)
- Three.js / React Three Fiber (3D particle background)
- Lucide React (icons)
- Kanit font (Google Fonts, weights 300–900)

## Sections

1. **Hero** — 3D particle field background, cinematic name reveal, custom audio intro
2. **About** — bio + skills grouped by Languages / Backend & Databases / Tools & DevOps / Machine Learning
3. **Services** — Full-Stack Development, Backend Engineering, ML & AI, Database & Data Pipelines
4. **Projects** — sticky-stacking cards for UrbanPulse, StockSense, DocMind, Parental Insight
5. **Contact** — Email, WhatsApp, LinkedIn, GitHub

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → /dist
npm run preview  # serve /dist locally
```

## Deploy to Vercel

```bash
npx vercel --prod --yes
```

Or push to GitHub → import the repo at [vercel.com/new](https://vercel.com/new) → click Deploy. No environment variables needed.

## Project structure

```
src/
├── App.tsx                       # composes all sections
├── main.tsx                      # React entry
├── index.css                     # global styles + .hero-heading gradient
├── data/
│   └── portfolio.ts              # ✨ ALL portfolio data in one file
└── components/
    ├── HeroSection.tsx           # navbar, 3D background, audio, heading
    ├── HeroBackground3D.tsx      # Three.js particles + wireframe shapes
    ├── AboutSection.tsx          # bio, animated text, skills grid
    ├── ServicesSection.tsx       # white section, numbered services
    ├── ProjectsSection.tsx       # sticky-stacking project cards
    ├── ContactSection.tsx        # 4 contact methods with icons
    │
    ├── ContactButton.tsx         # gradient pill CTA
    ├── LiveProjectButton.tsx     # ghost outline pill
    ├── FadeIn.tsx                # whileInView animation wrapper
    ├── Magnet.tsx                # mouse-following magnetic hover
    └── AnimatedText.tsx          # char-by-char scroll-driven reveal
```

## Featured projects

| # | Project | Category | Tech |
|---|---|---|---|
| 01 | **UrbanPulse** — Smart City Platform | Full-Stack · Microservices · IoT | FastAPI, React, Kafka, PostGIS, Docker |
| 02 | **StockSense** — CNN-Transformer Predictor | Machine Learning · Deep Learning | Python, TensorFlow, scikit-learn |
| 03 | **DocMind** — PDF Q&A RAG Chatbot | GenAI · NLP · RAG | Python, FAISS, Streamlit, Hugging Face |
| 04 | **Parental Insight Application** | Full-Stack · Analytics | Tailwind CSS, Supabase |

## Customisation

All portfolio data is centralized in one file: **`src/data/portfolio.ts`**

| Want to change | Edit this section in `portfolio.ts` |
|---|---|
| Name, subtitle, hero text | `heroData` |
| About paragraph, skills list | `aboutData` |
| Services list | `servicesData` |
| Projects, screenshots, live URLs | `projectsData` |
| Contact methods | `contactData` |
| Copyright, location | `siteMeta` |

## Credits

Designed & built by **Shreyansh Gupta** · [LinkedIn](https://www.linkedin.com/in/shreyansh-gupta-a9a6372b1/) · [GitHub](https://github.com/Shreyansh123185655)
