<!--
==========================================================
💻 DEVMDAVE — my-portfolio (TokyoNight Tech Dashboard Mode)
Minimal, Animated, and Professional GitHub-Safe README
==========================================================
-->

<!-- 🧠 Header Banner -->
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&size=28&duration=2800&pause=900&color=00FFF5&center=true&vCenter=true&width=800&lines=💻+DevMDave's+Portfolio+Repository;⚙️+Next.js+%7C+Tailwind+CSS+%7C+CI%2FCD+Workflow;🛰️+TokyoNight+Tech+Dashboard+Mode" alt="typing animation" />
</p>

<p align="center">
  <img src="https://i.imgur.com/sq6D7Dk.gif" width="700" height="6" alt="neon divider"/>
</p>

---

## 🧭 System Information Panel
```text
🧠 Developer:        DevMDave
🪄 Repository:       my-portfolio
⚙️ Framework:         Next.js + Tailwind CSS
🛰️ Deployment:       GitHub Actions → GitHub Pages
🌐 Live Status:       ONLINE ✅
🕹️ Mode:              TokyoNight Dashboard
```

---

## 🚀 Live Preview
<p align="center">
  <a href="https://devmdave.github.io/my-portfolio" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Visit%20My%20Portfolio-00FFF5?style=for-the-badge&logo=vercel&logoColor=white" alt="Visit portfolio" />
  </a>
</p>

---

## 🧩 Tech Stack Overview
<p align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,tailwind,js,html,githubactions,vercel&theme=dark" alt="Tech stack" />
</p>

```text
🧩 Core: Next.js • Tailwind CSS • JavaScript • HTML
⚙️  CI/CD: GitHub Actions • GitHub Pages
🎨  Design: TokyoNight theme • Neon glow aesthetic
```

---

## ⚡ Skill Level Matrix
```text
🧠 Next.js          ▰▰▰▰▰▰▰▰▱▱   80%
🎨 Tailwind CSS      ▰▰▰▰▰▰▰▰▰▰   100%
⚙️ GitHub Actions    ▰▰▰▰▰▰▰▱▱▱   70%
🧩 JavaScript        ▰▰▰▰▰▰▰▰▱▱   85%
```

---

## 🔄 CI/CD Pipeline Visualization
<p align="center">
  <img src="https://media.giphy.com/media/Y3xkaMlf1YxgA9aJj3/giphy.gif" width="500" alt="CI/CD animation"/>
</p>

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
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
      - name: Install
        run: npm ci
      - name: Build
        run: npm run build
      - name: Export Static Site
        run: npm run export
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

---

## 👁️ Repository Analytics
<p align="center">
  <img src="https://komarev.com/ghpvc/?username=devmdave&label=👁️+Views&color=00FFF5&style=flat-square" alt="Profile views"/>
</p>

---

## 💬 Contact & Social Links
<p align="center">
  <a href="https://github.com/devmdave" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/devmdave" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:devmdave@example.com">
    <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

---

<p align="center">
  <img src="https://i.imgur.com/sq6D7Dk.gif" width="700" height="6" alt="neon divider"/>
</p>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=16&duration=2500&pause=800&color=00FFF5&center=true&vCenter=true&width=660&lines=System+Status:+STABLE;Awaiting+Next+Deployment...+🛰️;Thanks+for+visiting+DevMDave's+Dashboard!+⚡" alt="outro typing" />
</p>