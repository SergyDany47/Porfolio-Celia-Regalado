'use client'

import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const project = {
  id: 2,
  title: 'NH Collection Hotels',
  category: 'Fashion Campaign',
  year: '2023',
  client: 'NH Collection',
  description: 'A sophisticated fashion campaign showcasing the elegance and style of NH Collection Hotels.',
  heroImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minor%20hotels%20x%20nh%20collection%2010%20anniversary.jpg-FPbtRsrN08IKMihruvuF6SUoYB3swK.jpeg',
}

export default function NHCollectionProjectPage() {
  const [isClient, setIsClient] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    setIsClient(true)
    window.scrollTo(0, 0)

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isClient) {
    return <div className={poppins.className}>Loading...</div>
  }

  return (
    <div className={`min-h-screen bg-black text-white ${poppins.className}`}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            aria-label="Back"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-white/60 tracking-wider">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.client}</span>
            </div>
          </div>

          {/* Hero Image */}
          <motion.div 
            className="relative aspect-[16/9] rounded-lg overflow-hidden bg-black/20 mb-16"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Image
              src={project.heroImage}
              alt={`${project.title} - Hero Image`}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </motion.div>

          {/* Project Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
            <p className="text-lg text-white/80">{project.description}</p>
          </motion.div>
          
          {/* Footer */}
          <footer className="bg-black text-white/50 text-center py-4 mt-16">
            <p className="text-sm">
              © {new Date().getFullYear()} NH Collection Hotels. All rights reserved.
            </p>
          </footer>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-sm rounded-full p-3 cursor-pointer hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 rotate-90" />
        </motion.div>
      )}
    </div>
  )
}

