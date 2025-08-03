import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const rotateIn = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const About = () => {
  return (
    <div className="font-sans">
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558494949-0a4e1e0c4a4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Tech Vision"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Syed Imran: The Future of Tech
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            A 16-year-old visionary from Pakistan, ready to disrupt Australia’s tech scene
          </motion.p>
          <motion.a
            href="#bio"
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition duration-300"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            Discover My Journey
          </motion.a>
        </div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            My Mission
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto text-gray-700 text-lg"
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="mb-4">
              I’m Syed Imran, a 16-year-old from Pakistan with a fire for tech. Coding is my canvas,
              AI is my engine, and blockchain is my foundation. In 2-3 years, I’m taking Australia by
              storm—building projects that disrupt, mastering finance through stocks and crypto, and
              networking with the best in Sydney and Melbourne. My goal? To be a billionaire by 30,
              not by luck, but by strategy, grit, and code. Join me as I build the future, one line at
              a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Core Strengths
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Programming',
                description: 'Crafting robust applications with React, Python, and more.',
                img: 'https://images.unsplash.com/photo-1516321310764-8d9c8964d266?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Artificial Intelligence',
                description: 'Building intelligent systems with machine learning and neural networks.',
                img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e1750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Blockchain',
                description: 'Developing secure, decentralized solutions with Ethereum and Solidity.',
                img: 'https://images.unsplash.com/photo-1624969868143-4eb2f60e1b25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={rotateIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <span className="text-base text-gray-300">
            © 2025 Syed Imran. All Rights Reserved.{' '}
            <a
              href="https://hiteshchoudhary.com/"
              className="text-yellow-400 hover:text-yellow-500 underline transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inspired by Hitesh Choudhary
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default About;

