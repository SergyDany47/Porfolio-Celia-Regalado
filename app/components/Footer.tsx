'use client'

import { motion } from 'framer-motion'
import { Linkedin, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer 
      className="py-8 bg-[#f8f8f8] border-t border-[#333333]/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 flex flex-col items-center space-y-4">
        <motion.div 
          className="mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-sm text-[#333333]/70">
            &copy; {currentYear} Celia Regalado. All rights reserved.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center space-y-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-sm text-[#333333]/70 mb-2">Follow me on</p>
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/in/celiaregalado" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#333333]/70 hover:text-[#FF4D4D] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com/celiaregalado" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#333333]/70 hover:text-[#FF4D4D] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="mailto:contact@celiaregalado.com" 
              className="text-[#333333]/70 hover:text-[#FF4D4D] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

