# Krishnanjali — Developer Portfolio

A responsive personal developer portfolio built with **HTML5, CSS3, and vanilla JavaScript**. No framework or build process is required.

## Files

- `index.html` — all portfolio sections and project detail modal
- `style.css` — responsive styling, dark/light themes, and animations
- `script.js` — mobile menu, theme toggle, project popups, and copy-email button
- `resume.pdf` — add your own resume PDF here if you want to host it with the portfolio

## Run locally

1. Extract `developer-portfolio.zip`.
2. Open the extracted folder in VS Code.
3. Open `index.html` in a browser, or install the **Live Server** extension in VS Code.
4. If using Live Server, right-click `index.html` and choose **Open with Live Server**.

## Personalise before publishing

1. Replace the LinkedIn homepage link in `index.html` with your actual LinkedIn profile URL.
2. Check the email address and GitHub URL in `index.html` and `script.js`.
3. Add your real resume as `resume.pdf` and update the resume panel link if desired.
4. Replace project descriptions with your actual work and add repository/demo links when available.
5. Check the education dates and details for accuracy.
6. Skill-bar percentages are visual self-assessments; adjust them to match your comfort level.

## Publish with GitHub Pages

1. Sign in to GitHub and create a new public repository, for example `developer-portfolio`.
2. Upload `index.html`, `style.css`, `script.js`, and any resume/assets.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site. The Pages section will show the live URL.

You can also deploy the folder with Vercel or Netlify by following their current static-site deployment steps.

## Features checklist

- [x] Semantic HTML sections: hero, about, skills, projects, education, contact
- [x] Responsive mobile-first layout
- [x] Dark/light theme toggle (preference is saved in local storage)
- [x] Mobile hamburger navigation
- [x] Smooth scrolling
- [x] Accessible project detail popups
- [x] Copy-email interaction
- [x] GitHub Pages-ready static files

**Note:** The portfolio is a front-end static website. It does not include a backend, database, or contact form submission service.
