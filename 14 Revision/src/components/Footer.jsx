// components/Footer.jsx
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gray-950 text-gray-400 pt-10 pb-6 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-white text-lg font-semibold">BillionTube</h2>
            <p className="mt-2 text-sm">
              Revolutionizing content monetization. Built by the streets, for the globe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-white text-md font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              {["Features", "About", "Careers"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-white text-md font-semibold mb-2">Connect</h3>
            <ul className="space-y-1 text-sm">
              {["Twitter", "LinkedIn", "Discord"].map((social) => (
                <li key={social}>
                  <a href="#" className="hover:text-white transition">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="border-t border-gray-800 pt-4 text-center text-xs text-gray-500"
        >
          © {new Date().getFullYear()} BillionTube. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
}
