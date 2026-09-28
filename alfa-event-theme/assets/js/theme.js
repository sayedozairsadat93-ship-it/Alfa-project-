:root {
  --color-primary: #0d1b2a;
  --color-secondary: #1b2a41;
  --color-accent: #e0a93a;
  --color-background: #f5f3ee;
  --color-surface: #ffffff;
  --color-text: #17212b;
  --color-muted: #586976;
  --color-border: #dfe4ea;
  --color-button: #e0a93a;
  --color-button-hover: #c98d22;
  --shadow-soft: 0 18px 45px rgba(13, 27, 42, 0.12);
  --radius-lg: 24px;
  --radius-md: 16px;
  --container: 1200px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  background: var(--color-background);
  color: var(--color-text);
  line-height: 1.6;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

.skip-link {
  position: absolute;
  left: -9999px;
  top: auto;
}

.skip-link:focus {
  left: 1rem;
  top: 1rem;
  z-index: 9999;
  background: var(--color-primary);
  color: #fff;
  padding: 0.75rem 1rem;
}

.container {
  width: min(var(--container), calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(10px);
  background: rgba(13, 27, 42, 0.72);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 82px;
  gap: 1rem;
}

.site-branding {
  display: flex;
  align-items: center;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #fff;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.brand__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.3rem;
  height: 2.3rem;
  background: var(--color-accent);
  color: var(--color-primary);
  border-radius: 50%;
}

.main-navigation__menu,
.footer-menu,
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.main-navigation__menu {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: rgba(255, 255, 255, 0.86);
}

.main-navigation__menu a,
.footer-links a,
.footer-meta a {
  transition: opacity 0.2s ease;
}

.main-navigation__menu a:hover,
.footer-links a:hover,
.footer-meta a:hover {
  opacity: 0.8;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 999px;
  padding: 1rem 1.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button--small {
  padding: 0.7rem 1.1rem;
  font-size: 0.9rem;
}

.button--primary {
  background: var(--color-button);
  color: var(--color-primary);
}

.button--primary:hover {
  background: var(--color-button-hover);
}

.button--secondary {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.35);
}

.button--secondary-light {
  color: var(--color-primary);
  border-color: rgba(13, 27, 42, 0.2);
}

.hero {
  position: relative;
  min-height: 700px;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  color: #fff;
}

.hero__inner {
  width: 100%;
}

.hero__content {
  max-width: 660px;
  padding: 6rem 0;
}

.eyebrow {
  margin: 0 0 1rem;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-accent);
  font-weight: 800;
}

.eyebrow--dark {
  color: var(--color-primary);
}

.eyebrow--light {
  color: #f5d37c;
}

.hero h1,
.section-heading h2,
.intro h2,
.video-copy h2,
.contact-copy h2,
.cta-panel h2 {
  margin: 0 0 1rem;
  line-height: 1.05;
}

.hero__subtitle {
  font-size: clamp(1.05rem, 1.7vw, 1.4rem);
  color: rgba(255, 255, 255, 0.88);
  margin-bottom: 2rem;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.85);
}

.section {
  padding: 6rem 0;
}

.section--muted {
  background: #eef1f4;
}

.section--dark {
  background: var(--color-primary);
  color: #fff;
}

.section--cta {
  background: linear-gradient(130deg, #f7d17c, #f0b75e 38%, #d9932a);
  color: var(--color-primary);
}

.section-heading {
  margin-bottom: 2.5rem;
}

.section-heading--center {
  text-align: center;
}

.intro__grid,
.contact-layout,
.video-layout,
.cta-panel {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3rem;
  align-items: center;
}

.intro__grid p,
.contact-copy p,
.video-copy p {
  font-size: 1.05rem;
  color: var(--color-muted);
}

.text-link {
  display: inline-block;
  margin-top: 1rem;
  color: var(--color-primary);
  font-weight: 700;
}

.cards {
  display: grid;
  gap: 1.5rem;
}

.cards--three {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.feature-card,
.image-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-soft);
}

.feature-card {
  padding: 2rem 1.5rem;
}

.feature-card__icon {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(224, 169, 58, 0.12);
  color: var(--color-primary);
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.image-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.image-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 55px rgba(13, 27, 42, 0.14);
}

.image-card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.image-card__body {
  padding: 1.5rem;
}

.tag {
  display: inline-block;
  margin-bottom: 0.8rem;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 800;
  color: var(--color-accent);
}

.video-frame {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  aspect-ratio: 16 / 10;
  background: #111;
  box-shadow: var(--shadow-soft);
}

.video-frame iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.logo-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(120px, 1fr));
  gap: 1rem;
}

.logo-pill {
  min-height: 90px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  color: var(--color-primary);
  font-weight: 700;
}

.cta-panel {
  background: rgba(255, 255, 255, 0.22);
  border: 1px solid rgba(13, 27, 42, 0.08);
  border-radius: var(--radius-lg);
  padding: 2rem 2.5rem;
}

.cta-panel__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 1rem;
}

.contact-form {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-soft);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-weight: 600;
  color: var(--color-text);
}

.field--full {
  grid-column: 1 / -1;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 0.85rem 1rem;
  background: #f9fafb;
  color: var(--color-text);
}

input:focus,
select:focus,
textarea:focus {
  outline: 2px solid rgba(224, 169, 58, 0.45);
  outline-offset: 2px;
}

.site-footer {
  background: var(--color-primary);
  color: rgba(255, 255, 255, 0.84);
  padding: 4rem 0 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 1.2fr;
  gap: 2rem;
  padding-bottom: 2.5rem;
}

.site-footer h3 {
  color: #fff;
  margin-top: 0;
  margin-bottom: 1rem;
}

.footer-menu,
.footer-links {
  display: grid;
  gap: 0.6rem;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.footer-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.menu-toggle {
  display: none;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  border-radius: 12px;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 5px auto;
  background: #fff;
}

@media (max-width: 960px) {
  .main-navigation {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(13, 27, 42, 0.97);
    padding: 1rem;
    display: none;
  }

  .main-navigation.is-open {
    display: block;
  }

  .main-navigation__menu {
    display: block;
  }

  .main-navigation__menu li {
    padding: 0.8rem 0;
  }

  .menu-toggle {
    display: block;
  }

  .header-actions .button--primary {
    display: none;
  }

  .cards--three,
  .logo-grid,
  .footer-grid,
  .intro__grid,
  .contact-layout,
  .video-layout,
  .cta-panel {
    grid-template-columns: 1fr;
  }

  .cta-panel__actions {
    justify-content: flex-start;
  }
}

@media (max-width: 640px) {
  .section {
    padding: 4rem 0;
  }

  .hero {
    min-height: 560px;
  }

  .hero__content {
    padding: 4rem 0 2rem;
  }

  .button-row,
  .cta-panel__actions,
  .form-grid {
    grid-template-columns: 1fr;
    display: grid;
  }

  .button {
    width: 100%;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
}
