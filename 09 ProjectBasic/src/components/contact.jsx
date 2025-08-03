
import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
};

const slideIn = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const pulse = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, type: 'spring', stiffness: 100, damping: 10 },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Contact = () => {
    return (
        <div className="font-sans bg-gray-900 text-white">
            {/* Header */}
            <motion.header
                className="sticky top-0 bg-black bg-opacity-80 backdrop-blur-md py-4 z-50 shadow-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-yellow-300">Syed Imran</h1>
                    <nav className="space-x-4">
                        <a href="#home" className="text-gray-300 hover:text-yellow-300 transition duration-300">
                            Home
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-yellow-300 transition duration-300">
                            About
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-yellow-300 transition duration-300">
                            Contact
                        </a>
                    </nav>
                </div>
            </motion.header>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-black to-purple-900 py-24">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt="Cyberpunk Tech"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative container mx-auto px-4 text-center">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300 drop-shadow-lg"
                        variants={scaleIn}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    >
                        Let’s Build the Future Together
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200"
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3 }}
                    >
                        Connect with Syed Imran to shape the next era of tech
                    </motion.p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact" className="py-16 bg-transparent">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-3xl font-bold text-center mb-8 text-yellow-300"
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Reach Out
                    </motion.h2>
                    <motion.div
                        className="max-w-lg mx-auto bg-black bg-opacity-50 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-purple-500"
                        variants={slideIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="space-y-6">
                            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full p-3 bg-gray-800 border border-purple-500 rounded-md text-white focus:ring-yellow-300 focus:border-yellow-300"
                                    placeholder="Your Name"
                                />
                            </motion.div>
                            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full p-3 bg-gray-800 border border-purple-500 rounded-md text-white focus:ring-yellow-300 focus:border-yellow-300"
                                    placeholder="your.email@example.com"
                                />
                            </motion.div>
                            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-200">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="mt-1 block w-full p-3 bg-gray-800 border border-purple-500 rounded-md text-white focus:ring-yellow-300 focus:border-yellow-300"
                                    placeholder="+92 123 456 7890"
                                />
                            </motion.div>
                            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.5 }}>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="mt-1 block w-full p-3 bg-gray-800 border border-purple-500 rounded-md text-white focus:ring-yellow-300 focus:border-yellow-300"
                                    placeholder="Your message here..."
                                ></textarea>
                            </motion.div>
                            <motion.button
                                className="w-full bg-yellow-300 text-black font-semibold py-3 rounded-full hover:bg-yellow-400 transition duration-300"
                                variants={pulse}
                                initial="hidden"
                                whileInView="visible"
                                whileHover="hover"
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                Submit
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-black bg-opacity-80 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-base text-gray-300">
                        © 2025 Syed Imran. All Rights Reserved.{' '}
                        <a
                            href="https://hiteshchoudhary.com/"
                            className="text-yellow-300 hover:text-yellow-400 underline transition duration-300"
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

export default Contact;