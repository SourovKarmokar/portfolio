import React from 'react';
import { IoReorderThree } from "react-icons/io5";

const Navbar = ({menuOpen , setMenuOpen}) => {

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Sourov<span className="text-blue-500">_Karmokar_</span>
          </a>

          {/* Mobile Menu Button */}
          <div className="w-7 relative cursor-pointer z-40 md:hidden" onClick={() =>setMenuOpen((prev) =>! prev)}>
            <IoReorderThree />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", link: "#home" },
              { name: "About", link: "#about" },
              { name: "Projects", link: "#projects" },
              { name: "Contact", link: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
