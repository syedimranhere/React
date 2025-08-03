import React from 'react';
import { motion } from 'framer-motion';
import {
  heroFadeIn,
  staggerContainer,
  slideUpFade,
  zoomIn,
} from './animateME.js';

const Home = () => {
  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516321310764-8d9c8964d266?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Tech Innovation"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <motion.div
          className="relative container mx-auto px-4 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" variants={heroFadeIn}>
            Build Your Tech Legacy
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            variants={slideUpFade}
          >
            From Pakistan to Australia: Master Programming, AI, and Blockchain
          </motion.p>
          <motion.a
            href="#article"
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition duration-300 inline-block"
            variants={zoomIn}
          >
            Start Now
          </motion.a>
        </motion.div>
      </section>

      {/* Article Section */}
      <section id="article" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            variants={slideUpFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Your Path to Greatness
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto text-gray-700 text-lg"
            variants={slideUpFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="mb-4">
              At 16, you're already coding, diving into AI, and exploring blockchain. That’s not just
              ambition—it’s a blueprint for disruption. Your move to Australia isn’t a dream; it’s a
              calculated step toward tech domination. Build real projects, master financial games like
              crypto and stocks, and make noise in Sydney’s innovation hubs. This is your launchpad to billions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            variants={slideUpFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Your Tech Pillars
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D',
                alt: 'Programming',
                text: 'Code the Future',
              },
              {
                src: 'https://pivot.uz/wp-content/uploads/2025/06/vecteezy_ai-generated-ai-circuit-board-technology-background_37348385-scaled-1.jpg',
                alt: 'AI',
                text: 'Master AI',
              },
              {
                src: 'https://media.gettyimages.com/id/1301371350/video/core-ignition.jpg?s=640x640&k=20&c=NzHL_riOVTrpk2FBMlf-iHhQJ2TYQtzKq1qlDqmGdDA=',
                alt: 'Blockchain',
                text: 'Build on Blockchain',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={slideUpFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
                  <p className="text-white text-lg font-semibold">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            variants={slideUpFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Australia Awaits
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto"
            variants={slideUpFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join tech meetups, network like a pro, and thrive in Australia’s innovation ecosystem.
            Your billionaire journey starts now.
          </motion.p>
          <motion.a
            href="#contact"
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition duration-300 inline-block"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Take the Leap
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Home;
