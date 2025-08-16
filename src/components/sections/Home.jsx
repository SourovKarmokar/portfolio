import React from 'react';
import profile from "../../assets/profile.png";
import RevealOnScroll from '../RevealOnScroll';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-[80px] md:px-4 bg-gray-900"
    >
      <RevealOnScroll>
      <div className="text-center z-10 w-full">
        {/* Profile Image */}
        <img
          src={profile}
          alt="Sourov's Profile"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 object-cover shadow-lg border-4 border-white"
        />

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
          Hi, I'm Sourov 👋
        </h1>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed mb-4 px-2">
          As a dedicated <strong className="text-blue-600 font-semibold">Computer Science graduate</strong> 
          and passionate <strong className="text-blue-600 font-semibold">Full-Stack Developer</strong>, 
          I specialize in crafting robust, scalable, and high-performance web applications. 
          I bring a strong foundation in <strong className="text-blue-600 font-semibold">data structures, algorithms, and system design</strong> 
          alongside hands-on expertise in modern web technologies.
        </p>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed px-2">
          My goal is to deliver solutions that are not only technically excellent but also provide an exceptional user experience, driving business growth and user satisfaction.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-blue-700 transition-all duration-300 ease-in-out"
          >
            View My Work &rarr;
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-500/50 text-blue-600 font-semibold rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-blue-100 transition-all duration-300 ease-in-out"
          >
            Get in Touch
          </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
