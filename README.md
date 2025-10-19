<!--
================================================================================
🛰️  DEVMDAVE — "my-portfolio" Repo README (Visual Portfolio Mode — TokyoNight)
================================================================================
Repo: my-portfolio
Theme: TokyoNight (Electric Cyan / Indigo / Magenta)
All visuals are GitHub-safe (SVG / GIF / badges). Copy this entire block into
your portfolio repo's README.md. If you used the provided assets/logo.svg,
it will display at the top.
================================================================================
-->

<!-- =========================
   HERO / ANIMATED HEADER
   (Typing SVG + subtle neon divider)
   ========================= -->
<p align="center">
  <!-- Local holographic logo (if you saved assets/logo.svg) -->
  <img src="assets/logo.svg" alt="DEVMDAVE holographic logo" width="760" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&size=28&duration=3200&pause=800&color=00FFF5&center=true&vCenter=true&width=780&lines=My+Portfolio+Dashboard;+Built+with+Next.js+%E2%80%A2+Tailwind+CSS+%E2%80%A2+Crafted+in+TokyoNight" alt="typing" />
</p>

<p align="center">
  <img src="https://i.imgur.com/sq6D7Dk.gif" width="760" height="6" alt="neon divider"/>
</p>

---

## 🔷 About this repository
```text
This repository contains the source (static assets & deployment config)
for my portfolio website. It showcases featured projects, live demos,
and the tools I used to build the site (Next.js, Tailwind CSS, GitHub Actions).
The README itself is a visual showcase — TokyoNight themed.
```

---

## 🚀 Live preview
<p align="center">
  <!-- Shield acting as a button — replace URL if your live page differs -->
  <a href="https://devmdave.github.io/my-portfolio" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Visit%20My%20Portfolio-TokyoNight-00FFF5?style=for-the-badge&logo=vercel&logoColor=white" alt="Visit portfolio" />
  </a>
</p>

---

## 🧩 Tech Stack (core)
<p align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,tailwind,js,html,githubactions,vercel&theme=dark" alt="tech icons" />
</p>

```text
Built with: Next.js, Tailwind CSS, JavaScript, HTML
CI/CD: GitHub Actions -> deploys to GitHub Pages (or change to Vercel)
```

---

## 🎯 Featured Sections of the Portfolio

### 🔸 Hero / Landing — Neon introduction
- Animated header, hero shots, and quick CTA (Visit my site).
- Built with a responsive Next.js + Tailwind layout.

### 🔸 Projects Gallery — Selected works
- Project cards with animated preview GIFs (hover-ready).
- Each card links to the project repo + live demo.

### 🔸 Architecture & Tools
- Short schematic of the build (Next.js pages → Tailwind components).
- CI via GitHub Actions (deploy pipeline).

### 🔸 Contact & CTA
- Email / LinkedIn / GitHub quick links.
- "Hire / Collaborate" button.

---

## 🖼️ Project Showcase (visual cards)
<p align="center">
  <!-- three sample project banners (replace GIFs with your project's preview gifs) -->
  <a href="https://github.com/devmdave/Smart-Irrigation-System" target="_blank">
    <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" width="280" alt="Smart Irrigation preview" />
  </a>
  &nbsp;&nbsp;
  <a href="https://github.com/devmdave/FPGA-CPU-Design" target="_blank">
    <img src="https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif" width="280" alt="FPGA CPU preview" />
  </a>
  &nbsp;&nbsp;
  <a href="https://github.com/devmdave/VLSI-EDA-Toolkit" target="_blank">
    <img src="https://media.giphy.com/media/26u4b45b8KlgAB7iM/giphy.gif" width="280" alt="VLSI EDA preview" />
  </a>
</p>

```text
Smart-Irrigation-System  — IoT + ML for farming (link above)
FPGA-CPU-Design         — Soft-core CPU on FPGA boards
VLSI-EDA-Toolkit        — Automation for RTL & P&R flows
```

> Tip: Replace each demo GIF above with an optimized 800×200 GIF from your `assets/` folder for a more personalized look.

---

## 📊 Repo Analytics (TokyoNight)
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=devmdave&repo=my-portfolio&show_icons=true&theme=tokyonight&hide_border=true" width="48%" alt="repo stats" />
  <img src="https://github-readme-streak-stats.herokuapp.com?user=devmdave&theme=tokyonight&hide_border=true" width="48%" alt="streak" />
</p>

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=devmdave&repo=my-portfolio&layout=compact&theme=tokyonight&hide_border=true" width="60%" alt="top langs" />
</p>

---

## 🔧 CI / Deployment (GitHub Actions)
```yaml
# Example: .github/workflows/deploy.yml
name: Build & Deploy
on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
      - name: Install
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out  # or .next if using export
```

> Adjust the workflow above if you deploy to Vercel or Netlify instead of GitHub Pages.

---

## ⚡ Accessibility & Performance Notes
- Images & GIFs are optimized for web (keep under ~2MB each).
- Use `alt` tags for all images (done above).
- Tailwind provides responsive utilities — ensure hero images are responsive.

---

## 📬 Contact & Socials
<p align="center">
  <a href="https://github.com/devmdave" target="_blank"><img src="https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=github&logoColor=white" alt="github" /></a>
  <a href="https://linkedin.com/in/devmdave" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" /></a>
  <a href="mailto:devmdave@example.com"><img src="https://img.shields.io/badge/Email-EA4335.svg?style=for-the-badge&logo=gmail&logoColor=white" alt="email" /></a>
</p>

---

## 🪄 Footer — Visual Outro
<p align="center">
  <img src="https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif" width="760" alt="outro wave" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=16&duration=2500&pause=800&color=00FFF5&center=true&vCenter=true&width=660&lines=Thanks+for+visiting+my+portfolio!;Explore+the+projects+or+reach+out+to+collaborate+%F0%9F%91%8B" alt="thanks" />
</p>

---

## ✅ Setup checklist (how to use this README)
```text
1) Place custom GIFs and assets under assets/ (e.g., assets/header.gif, assets/project1.gif)
2) Update project links to your actual repo/demo URLs
3) Commit assets/logo.svg (if you want the holographic logo at top)
4) Commit README.md (this file) to the root of the repo my-portfolio
5) Push to GitHub — verify visuals on the repository page
```

---

## 🔁 Want me to personalize further?
I can:
- 🔹 Generate 3 custom 800×200 animated project banners (TokyoNight style)
- 🔹 Export the Lottie animations you liked as optimized GIFs and swap placeholders
- 🔹 Produce an animated "Visit Site" hover badge (SVG->GIF) for the live button

To proceed with any of the above, tell me which enhancement you want first (I recommend: **custom project banners**). 👇