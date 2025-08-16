import React, { useEffect, useRef } from 'react';

// This component is designed to animate its children on scroll.
// It uses the IntersectionObserver API.
const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (ref.current) {
              ref.current.classList.add("visible");
            }
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className='reveal'>
      {children}
    </div>
  );
};

const Contact = () => {
    // CSS for the RevealOnScroll animation
    const style = `
      .reveal {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }

      .reveal.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;

    return (
        <>
            <style>{style}</style>
            <section
                id="contact"
                className="min-h-screen flex items-center justify-center py-20 px-4 bg-gray-900 text-gray-300"
            >
                <RevealOnScroll>
                    <div className="w-full max-w-xl">
                        <h2
                            className="text-3xl md:text-5xl font-bold mb-12 
                            bg-gradient-to-r from-blue-500 to-cyan-400 
                            bg-clip-text text-transparent text-center"
                        >
                            Get In Touch
                        </h2>
                        <form className='space-y-6'>
                            {/* Name */}
                            <div className="relative">
                                <label htmlFor="name" className="block mb-2 text-sm text-gray-400">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl 
                                    px-4 py-3 text-white placeholder-gray-400 
                                    transition focus:outline-none focus:border-blue-500 
                                    focus:bg-blue-500/5"
                                />
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-400">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl 
                                    px-4 py-3 text-white placeholder-gray-400 
                                    transition focus:outline-none focus:border-cyan-500 
                                    focus:bg-cyan-500/5"
                                />
                            </div>

                            {/* Message */}
                            <div className="relative">
                                <label htmlFor="message" className="block mb-2 text-sm text-gray-400">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    placeholder="Write your message..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl 
                                    px-4 py-3 text-white placeholder-gray-400 
                                    transition focus:outline-none focus:border-blue-400 
                                    focus:bg-blue-400/5 resize-none"
                                ></textarea>
                            </div>
                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full py-3 rounded-xl bg-gradient-to-r 
                                from-blue-500 to-cyan-400 text-gray-900 font-semibold 
                                shadow-lg hover:opacity-90 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </RevealOnScroll>
            </section>
        </>
    );
};

export default Contact;
