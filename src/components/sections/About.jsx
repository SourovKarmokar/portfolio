import React from 'react';
import RevealOnScroll from '../RevealOnScroll';

const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS"
  ];

  const backendSkills = [
    "Node.js",
    "Python",
    "AWS",
    "MongoDB",
    "GraphQL",
    "Git",
    "MySQL" 
  ];

  const otherSkills = [
    "Java",
    "C++",
    "Machine Learning",
    "Data Structures", 
    "Algorithms",     
    "System Design"   
  ];
  return (
    
    <section 
      id='about'
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
          About Me
        </h2>

        {/* Main Content Container with a subtle background and hover effect */}
        <div 
          className="rounded-xl p-8 md:p-12 border border-white/10 bg-gray-900/50 
          shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          {/* Main Bio Paragraph */}
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
           Passionate Computer Science graduate and fast learner with expertise in building scalable web applications and creating innovative solutions. Recently completed B.Sc. in CSE with outstanding academic performance.
          </p>
          
          {/* Qualifications Section */}
          <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
            {/* Education Card */}
            <div className='w-full rounded-xl p-6 bg-gray-800 border border-transparent 
            hover:border-blue-500 hover:scale-[1.02] transition-all duration-300'>
              <h3 className='text-xl font-bold mb-2 text-white'>
                B.Sc. in Computer Science and Engineering
              </h3>
              <h2 className='text-gray-400 text-base font-semibold mb-2'>Bangladesh University of Business & Technology</h2>
              <p className='text-gray-400 text-sm'>
                February 2020 – February 2024
              </p>
              <p className='text-gray-400 text-sm'>
                CGPA: 3.18/4.0
              </p>
            </div>
          </div>
          
        </div>
       {/* Skills Section Title */}
        <h2 
          className='text-3xl md:text-5xl font-bold mb-12 mt-20 md:mt-16 
          bg-gradient-to-r from-blue-500 to-cyan-400 
          bg-clip-text text-transparent'
        >
          My Skills
        </h2>

        {/* Skills Grid Container */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Frontend Skills Card */}
          <div className='rounded-xl p-6 bg-gray-800 border border-transparent 
                          hover:border-blue-500 hover:scale-[1.02] transition-all duration-300 shadow-lg'>
            <h3 className='text-xl font-bold mb-4 text-white'>Frontend Development</h3>
            <ul className='space-y-2'>
              {frontendSkills.map((skill, index) => (
                <li key={index} className='text-gray-300 text-lg flex items-center justify-center'>
                  <span className="mr-2 text-blue-400">&bull;</span> {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Backend Skills Card */}
          <div className='rounded-xl p-6 bg-gray-800 border border-transparent 
                          hover:border-blue-500 hover:scale-[1.02] transition-all duration-300 shadow-lg'>
            <h3 className='text-xl font-bold mb-4 text-white'>Backend Development</h3>
            <ul className='space-y-2'>
              {backendSkills.map((skill, index) => (
                <li key={index} className='text-gray-300 text-lg flex items-center justify-center'>
                   <span className="mr-2 text-blue-400">&bull;</span> {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Other Skills Card */}
          <div className='rounded-xl p-6 bg-gray-800 border border-transparent 
                          hover:border-blue-500 hover:scale-[1.02] transition-all duration-300 shadow-lg'>
            <h3 className='text-xl font-bold mb-4 text-white'>Other Technologies & Concepts</h3>
            <ul className='space-y-2'>
              {otherSkills.map((skill, index) => (
                <li key={index} className='text-gray-300 text-lg flex items-center justify-center'>
                   <span className="mr-2 text-blue-400">&bull;</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
