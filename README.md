# Alfa Event Theme

A lightweight custom WordPress theme designed for premium event and nonprofit/community organizations.

## Theme overview

This theme is built to match the requested premium, conversion-focused aesthetic with:

- sticky header and mobile navigation
- large editorial hero section
- mission/support cards
- community feature grid
- partner/sponsor area
- CTA blocks and inquiry form
- responsive layout for mobile, tablet, and desktop
- clean CSS custom properties, reusable sections, and WordPress-friendly coding standards

## Folder structure

```text
alfa-event-theme/
├── assets/
│   ├── css/
│   │   └── theme.css
│   └── js/
│       └── theme.js
├── patterns/
│   ├── hero.php
│   ├── feature-grid.php
│   ├── cta.php
│   └── partner-grid.php
├── style.css
├── functions.php
├── front-page.php
├── header.php
├── footer.php
├── index.php
├── page.php
├── theme.json
└── screenshot.png
```

## Install

1. Upload the `alfa-event-theme` folder as a ZIP file via WordPress:
   - Appearance → Themes → Add New → Upload Theme
2. Activate the theme.
3. Set a menu under:
   - Appearance → Menus
4. Adjust homepage content via:
   - Appearance → Customize
   - or edit the homepage in the block editor when using a static front page

## Edit key content

### Homepage hero

Go to Appearance → Customize → Alfa Theme Homepage.

Edit:
- hero headline
- supporting message
- primary CTA label and URL
- secondary CTA label and URL
- hero background image

### Navigation

Use WordPress Menus to update the main navigation and CTA links.

### Images and partner logos

Use the WordPress media library to replace any image or logo in the theme sections.

### General block content

The homepage is arranged in reusable theme sections. You can customize the content in the customizer and edit blocks on the front page or in the block editor without editing PHP.

## Notes

This is intentionally built as a lightweight custom WordPress theme without heavyweight page-builder dependencies, making it easier to maintain and faster to load.

## Recommended next step

For production launch, replace the demo copy and placeholder imagery with your actual organization, event, partner, and sponsorship assets.
