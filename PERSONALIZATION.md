# Portfolio Personalization Guide

This premium portfolio has been built with placeholder content. Follow these steps to personalize it with your actual information.

## Quick Start Personalization Checklist

### 1. **Update Social Links** (`data/socialLinks.ts`)
Replace the placeholder URLs with your actual profiles:
```typescript
// Update these URLs with your actual profiles
- LinkedIn: https://linkedin.com/in/your-actual-profile
- GitHub: https://github.com/your-actual-profile
- Email: your-actual-email@example.com
- Twitter: https://twitter.com/your-actual-profile
```

### 2. **Update Hero Section** (`components/sections/Hero.tsx`)
- Replace "Malik Abdullah Nasir" with your name
- Adjust the intro text: "Building scalable software, secure systems, and intelligent digital experiences."
- Update the job titles array if needed

### 3. **Update About Section** (`components/sections/About.tsx`)
- Personalize the professional summary
- Update company information
- Customize the highlights to match your experience
- Adjust the statistics (Projects, Clients, Years, Certifications)

### 4. **Update Experience Section** (`components/sections/Experience.tsx`)
The component uses hardcoded data. Update these experiences:
- Company names and roles
- Job descriptions
- Responsibilities and achievements
- Time periods

### 5. **Update Projects** (`data/projects.ts`)
Update all 4 featured projects:
- Project titles and descriptions
- Features and technologies used
- GitHub and live demo links
- Years completed

### 6. **Update Certifications** (`data/certifications.ts`)
Update your actual certifications:
- Certification names
- Issuing organizations
- Credential URLs
- Scores/percentages
- Date earned

### 7. **Update Skills** (`data/skills.ts`)
- Customize skill categories based on your expertise
- Add or remove skills as needed
- Update icons if desired (currently using emojis)

### 8. **Add Your Resume**
- Place your resume PDF in `public/resume.pdf`
- Update the download link in `components/sections/Hero.tsx` and `components/sections/Contact.tsx`

### 9. **Update Navigation** (`components/NavBar.tsx`)
- Replace "MAN" logo with your initials
- Adjust navigation links if you modify section IDs

### 10. **Update Metadata** (`app/layout.tsx`)
- Update title and description for SEO
- Add your contact information in OpenGraph metadata
- Update the application name

### 11. **Deploy to GitHub Pages**
1. Create a GitHub repository
2. Push your code
3. In repository settings → Pages, enable GitHub Pages
4. Select the `out/` folder as the source (after static export)
5. Add custom domain if desired

## File Structure Reference

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx          # Main layout (update metadata)
│   ├── page.tsx            # Main page structure
│   └── globals.css         # Global styles (color scheme)
├── components/
│   ├── NavBar.tsx
│   ├── ParticleBackground.tsx
│   ├── TypingEffect.tsx
│   ├── ScrollIndicator.tsx
│   └── sections/
│       ├── Hero.tsx        (update name & intro)
│       ├── About.tsx       (update summary)
│       ├── Experience.tsx  (update jobs)
│       ├── Projects.tsx    (uses data/projects.ts)
│       ├── Cybersecurity.tsx
│       ├── Certifications.tsx (uses data/certifications.ts)
│       ├── Skills.tsx      (uses data/skills.ts)
│       └── Contact.tsx     (update social)
├── data/
│   ├── projects.ts         (update projects)
│   ├── certifications.ts   (update certs)
│   ├── skills.ts          (update skills)
│   └── socialLinks.ts     (update social URLs)
├── public/
│   └── resume.pdf         (add your resume)
└── next.config.mjs        (GitHub Pages config)
```

## Design Customization

### Colors
All colors are defined in `app/globals.css` using CSS variables:
- Primary: Electric Cyan (#00d9ff)
- Secondary: Purple (#9d4edd)
- Accent: Lime (#7fff00)
- Background: Deep Navy (#0a0e27)

To change colors, modify the CSS variables in the `:root` and `.dark` sections.

### Typography
- Headers: Space Grotesk (bold, geometric)
- Body: Inter (clean, readable)
- Update font imports in globals.css if needed

## Build & Deployment

### Local Development
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
```

### Static Export (GitHub Pages)
```bash
pnpm build        # Generates /out folder with static files
# Push /out folder to GitHub Pages
```

The `next.config.mjs` is already configured with `output: 'export'` for static site generation.

## Important Notes

1. **All links are relative** - Smooth scroll navigation works within the page
2. **No backend required** - Everything is static and works on GitHub Pages
3. **Particle animations use Canvas** - Performance optimized
4. **Responsive design** - Mobile-first approach, tested on all devices
5. **Glassmorphism effects** - Pure CSS, no external libraries needed

## SEO Optimization

The portfolio includes:
- Semantic HTML
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images (add project images)
- Mobile viewport optimization
- Structured data support (can add JSON-LD)

## Optional Enhancements

1. Add project images to make showcase more visual
2. Add a contact form (can use Formspree, EmailJS, or similar)
3. Add a blog section for technical articles
4. Add dark/light mode toggle
5. Add more detailed project case studies
6. Add animation timing customization
7. Add analytics (Vercel Analytics already integrated)

## Testing Checklist Before Launch

- [ ] All social links redirect correctly
- [ ] Resume PDF downloads properly
- [ ] Smooth scroll navigation works on mobile
- [ ] All animations are smooth (60fps)
- [ ] No console errors
- [ ] Page loads in under 3 seconds
- [ ] Mobile responsive on all breakpoints
- [ ] Lighthouse score > 90

## Support & Customization

For advanced customization:
1. Modify `tailwind.config.ts` for theme-wide changes
2. Edit animations in `app/globals.css`
3. Add new sections by creating files in `components/sections/`
4. Update data structures in `data/` folder

Happy customizing! 🚀
