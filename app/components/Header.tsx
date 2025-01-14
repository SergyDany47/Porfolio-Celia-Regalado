'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full z-10 bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Celia Regalado
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/#work" className="hover:text-gray-600 transition-colors">Work</Link>
          <Link href="/#about" className="hover:text-gray-600 transition-colors">About</Link>
          <Link href="/#contact" className="hover:text-gray-600 transition-colors">Contact</Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white py-4"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="/#work" className="hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>Work</Link>
            <Link href="/#about" className="hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/#contact" className="hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </motion.nav>
      )}
    </header>
  )
}

export default Header

