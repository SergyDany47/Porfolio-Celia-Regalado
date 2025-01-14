'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Linkedin, Instagram, Mail } from 'lucide-react'

const socialLinks = [
  { 
    id: 1,
    name: 'LinkedIn',
    handle: '@celiaregalado',
    url: 'https://linkedin.com/in/celiaregalado',
    icon: Linkedin
  },
  { 
    id: 2,
    name: 'Instagram',
    handle: '@celiaregalado',
    url: 'https://instagram.com/celiaregalado',
    icon: Instagram
  },
  { 
    id: 3,
    name: 'Email',
    handle: 'contact@celiaregalado.com',
    url: 'mailto:contact@celiaregalado.com',
    icon: Mail
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
}

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#eeeeee]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-light text-[#333333] mb-12 text-center"
        >
          Let's work together!
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <motion.div 
            className="flex flex-col items-start gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-[#333333]/80 hover:text-[#FF4D4D] transition-colors duration-300"
                variants={itemVariants}
              >
                <link.icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{link.name}:</span>
                <span className="ml-2">{link.handle}</span>
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-auto"
          >
            <motion.button 
              className="w-full md:w-auto py-4 px-8 bg-[#FF4D4D] text-white text-lg font-medium
                       shadow-md font-poppins flex items-center justify-center space-x-2"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#FF3333",
              }}
              transition={{ duration: 0.3 }}
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

