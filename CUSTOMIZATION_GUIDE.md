# 📝 Customization Guide

This guide will help you quickly personalize your portfolio with your own information.

## 🎯 Quick Start Checklist

### Step 1: Basic Information

**File: `src/components/Hero.jsx`**
```javascript
// Line 9: Change your name
<span className="gradient-text">Your Name</span>

// Line 11: Change your title
Full Stack Developer

// Line 13-15: Update your bio
I build exceptional digital experiences...

// Lines 20-36: Update social links
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourusername"
href="mailto:your.email@example.com"
```

### Step 2: About Section

**File: `src/components/About.jsx`**
```javascript
// Lines 44-56: Update your story
- Write about your journey
- Add your experience
- Update the resume link (line 55)
```

### Step 3: Skills

**File: `src/components/Skills.jsx`**
```javascript
// Lines 4-31: Update your skills
{
  category: 'Frontend',  // Keep or change category
  skills: [
    { name: 'React', level: 90 },  // Update skill and level (0-100)
    // Add or remove skills
  ],
}
```

**Tip**: Be honest about skill levels:
- 90-100: Expert
- 75-89: Advanced
- 60-74: Intermediate
- 40-59: Beginner
- 0-39: Learning

### Step 4: Projects

**File: `src/components/Projects.jsx`**

For each project, update:
```javascript
{
  title: 'Your Project Name',
  description: 'Describe what the project does...',
  image: 'URL to your project screenshot',  // See image guide below
  tags: ['React', 'Node.js', 'etc'],
  github: 'https://github.com/you/project',
  demo: 'https://yourproject.com',
}
```

**How to add project images:**

Option A: Use Unsplash (placeholder)
```javascript
image: 'https://images.unsplash.com/photo-xxxxx?w=800&q=80'
```

Option B: Local images
1. Add image to `src/assets/`
2. Import: `import projectImage from './assets/project1.jpg'`
3. Use: `image: projectImage`

Option C: Host on cloud
- Use Cloudinary, Imgur, or GitHub
- Use direct image URL

### Step 5: Contact Information

**File: `src/components/Contact.jsx`**
```javascript
// Lines 32-48: Update contact details
{
  title: 'Email',
  value: 'your.email@example.com',
  link: 'mailto:your.email@example.com',
}
```

### Step 6: Footer

**File: `src/components/Footer.jsx`**
```javascript
// Line 30: Update your name
© {currentYear} Your Name

// Lines 48-62: Update social links
href="https://github.com/yourusername"
```

### Step 7: Page Title & Meta

**File: `index.html`**
```html
<!-- Line 7: Update description -->
<meta name="description" content="Your description here" />

<!-- Line 9: Update title -->
<title>Portfolio - Your Name</title>
```

## 🎨 Customizing Colors

**File: `tailwind.config.js`**
```javascript
colors: {
  primary: '#3B82F6',    // Blue - change to your preference
  secondary: '#8B5CF6',  // Purple - change to your preference
}
```

**Popular color combinations:**
- Blue & Purple: `#3B82F6` & `#8B5CF6` (current)
- Red & Orange: `#EF4444` & `#F97316`
- Green & Teal: `#10B981` & `#14B8A6`
- Pink & Purple: `#EC4899` & `#A855F7`

Find colors at: [coolors.co](https://coolors.co) or [colorhunt.co](https://colorhunt.co)

## 📸 Image Optimization Tips

1. **Size**: Keep images under 500KB
2. **Dimensions**: 
   - Project cards: 800x600px recommended
   - Profile photo: 400x400px
3. **Format**: Use WebP or optimized JPG/PNG
4. **Tools**: 
   - [TinyPNG](https://tinypng.com) - Compress images
   - [Squoosh](https://squoosh.app) - Convert to WebP

## 📧 Setting Up Contact Form

### Option 1: EmailJS (Easiest)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create email service
3. Install: `npm install @emailjs/browser`
4. Update `Contact.jsx`:

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
  .then(() => {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  })
  .catch((error) => {
    alert('Failed to send message. Please try again.');
  });
};
```

### Option 2: Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update form action:

```javascript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Web3Forms

1. Get API key from [web3forms.com](https://web3forms.com)
2. Add hidden input to form:
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
```

## 🚀 Final Steps Before Deployment

### Checklist:
- [ ] Updated all personal information
- [ ] Added real project images
- [ ] Updated social media links
- [ ] Configured contact form
- [ ] Changed colors (if desired)
- [ ] Updated page title and meta tags
- [ ] Added resume PDF to public folder
- [ ] Tested on mobile and desktop
- [ ] Checked all links work
- [ ] Spell-checked all content

### Testing:
```bash
# Run locally
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 💡 Pro Tips

1. **Content First**: Write all your content in a doc before coding
2. **One Section at a Time**: Update and test each section individually
3. **Use Placeholder Text**: Lorem ipsum while testing layout
4. **Get Feedback**: Ask friends to review before deploying
5. **Keep It Simple**: Don't overcomplicate - clean and simple works best
6. **Mobile First**: Always check mobile view
7. **Fast Loading**: Optimize all images before uploading

## 🆘 Common Issues

**Dark mode not working?**
- Check that you're clicking the sun/moon icon
- Clear browser cache

**Form not submitting?**
- Check console for errors
- Verify EmailJS/Formspree setup
- Test with a simple alert first

**Animations not smooth?**
- Reduce number of elements animating
- Check browser performance

**Images not loading?**
- Verify image URLs are correct
- Check file paths for local images
- Ensure images are in public or assets folder

## 📚 Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Unsplash](https://unsplash.com) - Free images
- [Font Awesome](https://fontawesome.com) - More icons

---

**Need more help?** Check the main README.md file!
