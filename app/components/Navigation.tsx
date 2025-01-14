'use client'

import Link from 'next/link'
import { Linkedin, Instagram, Mail, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const isProjectPage = pathname.startsWith('/project')
  const [showLogo, setShowLogo] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  if (isProjectPage) return null

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      setIsMenuOpen(false)
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-sm shadow-md transition-all duration-300 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <span 
                  className="text-lg font-medium text-white cursor-pointer hover:text-[#FF4D4D] transition-colors"
                  onClick={scrollToTop}
                >
                  Celia Regalado
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 text-white hover:text-[#FF4D4D] transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <button 
              onClick={() => scrollToSection('work')} 
              className="text-white hover:text-[#FF4D4D] transition-colors text-sm uppercase tracking-wider"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white hover:text-[#FF4D4D] transition-colors text-sm uppercase tracking-wider"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-white hover:text-[#FF4D4D] transition-colors text-sm uppercase tracking-wider"
            >
              Contact
            </button>
          </div>


        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#121212]/80 backdrop-blur-sm"
            >
              <div className="py-4 flex flex-col items-center space-y-4">
                <button 
                  onClick={() => {
                    scrollToSection('work')
                    setIsMenuOpen(false)
                  }} 
                  className="text-white hover:text-[#FF4D4D] transition-colors text-sm uppercase tracking-wider"
                >
                  Work
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('about')
                    setIsMenuOpen(false)
                  }} 
                  className="text-white hover:text-[#FF4D4D] transition-colors text-sm uppercase tracking-wider"
                >
                  About
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('contact')
                    setIsMenuOpen(false)
                  }} 
                  className="text-white hover:text-[#FF4D4D] transition-colors text-sm uppercase tracking-wider"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

