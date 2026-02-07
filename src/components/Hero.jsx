import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Your Name</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-4">
            Full Stack Developer
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            I build exceptional digital experiences with modern web technologies.
            Passionate about creating clean, efficient, and user-friendly applications.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transform hover:scale-110 transition-all"
            >
              <FiGithub size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transform hover:scale-110 transition-all"
            >
              <FiLinkedin size={28} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transform hover:scale-110 transition-all"
            >
              <FiMail size={28} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a href="#about" className="inline-block text-gray-600 dark:text-gray-400">
              <FiArrowDown size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
