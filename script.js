const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navMenu.classList.toggle('open', !isOpen);
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});

// Restore the visitor's last theme choice.
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') body.classList.add('light-theme');
updateThemeButton();

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  localStorage.setItem('portfolio-theme', body.classList.contains('light-theme') ? 'light' : 'dark');
  updateThemeButton();
});

function updateThemeButton() {
  const isLight = body.classList.contains('light-theme');
  themeIcon.textContent = isLight ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
  themeToggle.title = isLight ? 'Switch to dark theme' : 'Switch to light theme';
}

const projectData = {
  complaint: {
    label: 'WEB APPLICATION',
    title: 'Student Complaint Portal',
    description: 'A student-focused portal concept designed to make college and hostel issues easier to report and follow up on.',
    features: [
      'Separate student and management access can be added.',
      'Complaint forms for college and hostel issues.',
      'Status tracking for pending, processing, and resolved complaints.',
      'Potential backend: Python Flask with an SQLite database.'
    ],
    tags: ['HTML', 'CSS', 'Python / Flask', 'SQLite']
  },
  portfolio: {
    label: 'PERSONAL WEBSITE',
    title: 'Developer Portfolio',
    description: 'A mobile-first portfolio to share a developer introduction, skills, projects, education, and contact links in one place.',
    features: [
      'Responsive layout for mobile, tablet, and desktop.',
      'Dark/light theme toggle that remembers the selected theme.',
      'Mobile navigation menu and interactive project detail popups.',
      'Smooth scrolling and accessible controls.'
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript']
  }
};

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalLabel = document.getElementById('modalLabel');
const modalDescription = document.getElementById('modalDescription');
const modalFeatures = document.getElementById('modalFeatures');
const modalTags = document.getElementById('modalTags');
const modalClose = document.getElementById('modalClose');
let lastFocusedElement = null;

document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projectData[button.dataset.project];
    if (!project) return;
    lastFocusedElement = button;
    modalLabel.textContent = project.label;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalFeatures.replaceChildren(...project.features.map(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      return li;
    }));
    modalTags.replaceChildren(...project.tags.map(tag => {
      const span = document.createElement('span');
      span.textContent = tag;
      return span;
    }));
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  });
});

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
  if (lastFocusedElement) lastFocusedElement.focus();
}
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.hidden) closeModal();
});

document.getElementById('copyEmail').addEventListener('click', async () => {
  const email = 'krishnanjalikallapari@gmail.com';
  const feedback = document.getElementById('copyFeedback');
  try {
    await navigator.clipboard.writeText(email);
    feedback.textContent = 'Email copied to clipboard!';
  } catch (error) {
    feedback.textContent = `Email: ${email}`;
  }
});
