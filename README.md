# Ahmed's Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed to showcase skills as a junior developer and software tester with a clean, professional aesthetic.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Subtle transitions and micro-interactions using Framer Motion
- **SEO Optimized**: Comprehensive metadata and Open Graph tags
- **Performance Focused**: Optimized images, fonts, and loading states
- **Accessibility**: WCAG compliant with proper focus management

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Loading.tsx
└── public/
    └── [static assets]
```

## 🎨 Sections

1. **Header**: Fixed navigation with smooth scroll links
2. **Hero**: Professional introduction with call-to-action buttons
3. **About**: Personal story and learning timeline
4. **Skills**: Core competencies and technologies currently learning
5. **Projects**: Featured work with live demos and GitHub links
6. **Contact**: Contact form and social media links
7. **Footer**: Additional links and copyright information

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/ahmed/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.tsx` - Name, title, description, and social links
- `src/components/About.tsx` - Personal story and timeline
- `src/components/Skills.tsx` - Your skills and technologies
- `src/components/Projects.tsx` - Your projects with links and descriptions
- `src/components/Contact.tsx` - Contact information and form
- `src/app/layout.tsx` - SEO metadata

### Styling

- Colors: Modify the color palette in `tailwind.config.js`
- Fonts: Update font imports in `src/app/layout.tsx`
- Animations: Adjust Framer Motion settings in component files

### Content

- Replace placeholder project images in the `public/` folder
- Update project links to your actual repositories and demos
- Modify the contact form to integrate with your preferred service

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured experience (1024px+)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The built application can be deployed to any static hosting service:

- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Minimal JavaScript for fast loading
- **Images**: Optimized with Next.js Image component

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Contact

- **Email**: ahmedhegazysad@egmail.com
- **LinkedIn**: https://www.linkedin.com/in/ahmed-hegazy567
- **GitHub**: https://github.com/xlargetomato

---

Built with ❤️ using Next.js and Tailwind CSS
