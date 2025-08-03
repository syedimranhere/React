import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="relative min-h-screen bg-black text-white px-6 flex flex-col items-center justify-center overflow-hidden">

      {/* 🔮 BACKGROUND IMAGE with blur glass effect */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dbvxna33m/image/upload/v1751386013/q1egbetzccdqq1i63xgv.jpg')`,

          
        }}
      >
        <div className="w-full h-full backdrop-blur-[6px] bg-black/60"></div>
      </div>

      {/* Page content (with z-index) */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
        >
          <span className="text-purple-500">Let's Build</span> Something Legendary
        </motion.h1>

        {/* Contact Info Card (glowing) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: [0.8, 1.02, 1] }}
          transition={{ duration: 2, delay: 0.5 }}
          className="bg-gradient-to-br from-purple-800/40 to-purple-600/20 p-6 md:p-10 rounded-2xl shadow-lg max-w-xl w-full border border-purple-700/40 mb-12"
        >
          <p className="text-lg text-gray-300">
            I’m open to freelance gigs, tech collabs, billion-dollar ideas, and secret startup meetups.
          </p>
          <div className="mt-4 space-y-2 text-sm text-gray-400">
            <p>📧 future.billionaire@legend.com</p>
            <p>🌍 Pakistan → Soon: Sydney 🇦🇺</p>
            <p>💼 Available: Remote / Hybrid / God-mode</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="w-full max-w-xl space-y-6"
        >
          {/* Name Field */}
          <motion.div
            variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          >
            <label className="block text-gray-400 mb-1">Name</label>
            <input
              type="text"
              className="w-full bg-gray-900/80 border border-gray-700 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Elon Jr."
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          >
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-gray-900/80 border border-gray-700 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@nextunicorn.com"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          >
            <label className="block text-gray-400 mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full bg-gray-900/80 border border-gray-700 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Pitch me your wildest idea..."
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            variants={{ hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#9443ea", color: "#ffff" }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-purple-200 py-3 rounded-md font-semibold text-white shadow-xl hover:bg-purple-700 transition-all"
            >
              Launch Message 🚀
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </main>
  );
}
