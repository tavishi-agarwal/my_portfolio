# Modern Portfolio Website

A beautiful, responsive portfolio website built with React and Tailwind CSS.

## 🚀 Features

- ✨ Modern and clean design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive
- ⚡ Fast and optimized
- 🎨 Smooth animations
- 📧 Contact form
- 💼 Project showcase
- 🛠️ Skills section

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Icons** - Icons

## 📦 Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎨 Customization

### 1. Personal Information

Edit the following files to add your information:

**src/components/Hero.jsx**
- Update your name
- Add your title/role
- Update social media links

**src/components/About.jsx**
- Write your bio
- Update your journey/story

**src/components/Skills.jsx**
- Add your skills
- Adjust skill levels (0-100)

**src/components/Projects.jsx**
- Add your projects
- Update project details, images, and links
- Replace placeholder images with your own

**src/components/Contact.jsx**
- Update email, phone, location
- Configure form submission (see Form Setup below)

**src/components/Footer.jsx**
- Update your name and year
- Update social links

### 2. Colors & Theme

Edit `tailwind.config.js` to change colors:

```javascript
colors: {
  primary: '#3B82F6',    // Change primary color
  secondary: '#8B5CF6',  // Change secondary color
}
```

### 3. Images

Replace project images in `src/components/Projects.jsx`:
- Use your own project screenshots
- Update image URLs or import local images

### 4. Form Setup

To make the contact form functional, you have several options:

**Option A: EmailJS (Recommended for beginners)**
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Install EmailJS: `npm install @emailjs/browser`
3. Update Contact.jsx with EmailJS configuration

**Option B: Backend API**
- Create your own backend endpoint
- Update the handleSubmit function in Contact.jsx

**Option C: Third-party services**
- Formspree
- Netlify Forms
- Web3Forms

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts

Or use the Vercel dashboard:
1. Push your code to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Deploy!

### Deploy to Netlify

1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to [netlify.com](https://netlify.com)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy
```

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Update vite.config.js:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/'
   })
   ```
4. Deploy: `npm run deploy`

## 📝 Tips

1. **Images**: Optimize images before adding them (use tools like TinyPNG)
2. **Performance**: Keep animations smooth by using CSS transforms
3. **SEO**: Update meta tags in index.html
4. **Accessibility**: Ensure proper contrast ratios and alt text
5. **Testing**: Test on different devices and browsers

## 🤝 Need Help?

- Check out [React docs](https://react.dev)
- Learn [Tailwind CSS](https://tailwindcss.com/docs)
- Explore [Vite guide](https://vitejs.dev/guide)

## 📄 License

This project is open source and available for personal and commercial use.

---

**Happy coding! 🎉**

Remember to replace all placeholder content with your actual information before deploying!
