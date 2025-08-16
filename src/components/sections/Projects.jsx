import React from 'react';
import RevealOnScroll from '../RevealOnScroll';

const Projects = () => {
  // Define project data as an array of objects for easy maintenance
  const projectData = [
    {
      title: "Real-Time Chat App",
      description: "A responsive messaging platform built with React (Vite), Firebase, and TailwindCSS. Features include secure authentication, real-time messaging, a friend system, and group chats. Designed with a modern UI and optimized for a seamless user experience.",
      technologies: ["React", "Firebase", "TailwindCSS"],
      liveLink: "#", 
      githubLink: "#" 
    },
    {
      title: "Real-Time Chat App",
      description: "A responsive messaging platform built with React (Vite), Firebase, and TailwindCSS. Features include secure authentication, real-time messaging, a friend system, and group chats. Designed with a modern UI and optimized for a seamless user experience.",
      technologies: ["React", "Firebase", "TailwindCSS"],
      liveLink: "#", 
      githubLink: "#" 
    },
    {
      title: "Real-Time Chat App",
      description: "A responsive messaging platform built with React (Vite), Firebase, and TailwindCSS. Features include secure authentication, real-time messaging, a friend system, and group chats. Designed with a modern UI and optimized for a seamless user experience.",
      technologies: ["React", "Firebase", "TailwindCSS"],
      liveLink: "#", 
      githubLink: "#" 
    },
    // You can add more projects here following the same format
    // {
    //   title: "Another Project Title",
    //   description: "Description of your other project...",
    //   technologies: ["Tech1", "Tech2"],
    //   liveLink: "#",
    //   githubLink: "#"
    // }
  ];

  return (
    <section
      id='projects'
      className='min-h-screen flex items-center justify-center py-20 px-4 bg-gray-900 text-gray-300'
    >
        <RevealOnScroll>
      <div className='max-w-5xl mx-auto text-center'>
        {/* Section Title */}
        <h2 
          className='text-3xl md:text-5xl font-bold mb-12 
          bg-gradient-to-r from-blue-500 to-cyan-400 
          bg-clip-text text-transparent'
        >
          Featured Projects
        </h2>

        {/* Projects Grid Container */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projectData.map((project, index) => (
            <div 
              key={index}
              className='rounded-xl p-8 border border-white/10 bg-gray-900/50 
              shadow-lg transition-all duration-300 transform hover:-translate-y-1'
            >
              <h3 className='text-xl md:text-2xl font-bold mb-2 text-white'>
                {project.title}
              </h3>
              <p className='text-gray-400 text-sm mb-4'>
                {project.description}
              </p>
              
              {/* Technology Tags */}
              <div className='flex flex-wrap justify-center items-center gap-2 mt-4'>
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className='bg-blue-600/20 text-blue-300 text-xs font-semibold px-3 py-1 
                    rounded-full border border-blue-600'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className='flex justify-center mt-6 gap-4'>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg
                             transition-colors duration-300'
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg
                             transition-colors duration-300'
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
