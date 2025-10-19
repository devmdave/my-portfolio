<!--
==========================================
🌌 DEVMDAVE — my-portfolio (TokyoNight Mode)
Minimal Graphical README (Safe for GitHub)
Sections: Neon Header | Live Preview | Tech Stack | CI/CD | Contact
==========================================
-->

<!-- 🔥 Neon Animated Header -->
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&size=30&duration=3000&pause=800&color=00FFF5&center=true&vCenter=true&width=800&lines=💫+DevMDave's+Portfolio;⚡+Next.js+%7C+Tailwind+%7C+CI%2FCD+Magic;" alt="Neon Header" />
</p>


<!-- 🚀 Live Preview Button -->
<p align="center">
  <a href="https://devmdave.github.io/my-portfolio" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Visit%20My%20Portfolio-00FFF5?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Portfolio" />
  </a>
</p>

---

## 🧩 Tech Stack
<p align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,tailwind,js,html,githubactions,vercel&theme=dark" alt="Tech stack" />
</p>

```text
Core Tools → Next.js | Tailwind CSS | JavaScript | HTML | GitHub Actions
Deployment → GitHub Pages / Vercel
Theme → TokyoNight (Neon Glow)
```

---

## ⚙️ CI/CD Deployment (GitHub Actions)
```yaml
# .github/workflows/deploy.yml
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
      - name: Install Dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Export Static Site
        run: npm run export
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

> 💡 Adjust `publish_dir` if you use Next.js with a custom output folder.

---

## 💬 Contact & Socials
<p align="center">
  <a href="https://github.com/devmdave" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/devmdave" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:devmdave@example.com">
    <img src="https://img.shields.io/badge/Email-EA4335.svg?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

<p align="center">
  <img src="https://i.imgur.com/sq6D7Dk.gif" width="700" height="6" alt="neon divider"/>
</p>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=16&duration=2500&pause=800&color=00FFF5&center=true&vCenter=true&width=660&lines=Thanks+for+visiting+my+portfolio!;Connect+to+create+something+amazing+💻" alt="outro typing" />
</p>