'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function Imagen3Page() {
  return (
    <div className={`min-h-screen bg-black text-white ${poppins.className}`}>
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Página 3
          </h1>
          <p className="text-lg text-white/80">
            Esta página está en blanco y lista para ser personalizada.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

