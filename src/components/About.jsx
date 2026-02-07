import { FiCode, FiSmartphone, FiDatabase } from 'react-icons/fi';

const About = () => {
  const features = [
    {
      icon: <FiCode size={32} />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.',
    },
    {
      icon: <FiDatabase size={32} />,
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Node.js, Express, and database management.',
    },
    {
      icon: <FiSmartphone size={32} />,
      title: 'Mobile Responsive',
      description: 'Ensuring seamless experiences across all devices with mobile-first design approach.',
    },
  ];

  return (
    <section id="about" className="section-container bg-glass sketchy-border">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I'm a passionate developer with a strong foundation in web technologies.
          I love turning complex problems into simple, beautiful, and intuitive solutions.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 text-center rounded-xl bg-glass sketchy-border 
                       hover:scale-105 hover:shadow-xl transition-transform"
          >
            <div className="inline-block p-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Journey Box */}
      <div className="rounded-xl p-8 bg-glass sketchy-border shadow-lg">
        <h3 className="text-2xl font-bold mb-4">My Journey</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I started my journey in web development with a curiosity about how websites work.
          Over the years, I've honed my skills through continuous learning, building projects,
          and staying updated with the latest technologies.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Today, I specialize in creating modern, scalable web applications that provide
          exceptional user experiences. I'm always eager to take on new challenges and
          collaborate on exciting projects.
        </p>
        <a
          href="/resume.pdf"
          download
          className="btn-primary inline-block"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
