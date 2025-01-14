'use client'

import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

function ImageModal({ 
  image, 
  onClose 
}: { 
  image: {src: string; alt: string} | null
  onClose: () => void 
}) {
  if (!image) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <div className="relative w-[90vw] h-[90vh]" onClick={e => e.stopPropagation()}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
          sizes="90vw"
        />
      </div>
    </motion.div>
  );
}

const containerImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fotov2_ajrob_white_photo_booth_chair_93b1af48-d038-4aa4-bb07-743f4b0af188.jpg-zosh7ldDKPhODSblHn9MaXHn9GRgkK.jpeg",
    alt: "Interactive Yellow Booth - Photo Opportunity"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contenedor_Mesa%20de%20trabajo%201.jpg-PkfgPGFlmOV7R0q25p0Q1rSrW37znl.jpeg",
    alt: "Cantabria Labs Yellow Container"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contenedor_Mesa%20de%20trabajo%202.jpg-SeEhaUKTkxWN3XCsTN4p9VJomqNdeZ.jpeg",
    alt: "Open Yellow Container Installation"
  }
]

const roadTripImage = {
  src: "https://rm0wpqkfgafxqchz.public.blob.vercel-storage.com/roadtripMesa-de-trabajo-2-4Z6ltbDGwhe2AN4fb5sCMNNYk9iJbn.png",
  alt: "Life Road Campaign Collage"
}

const finalSectionImage = {
  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PAGINA-CANTABRIA-LABSMesa-de-trabajo-1-1-pGwGazzNXulcG3IWMQX8CWEVRwPLNS.png",
  alt: "Cantabria Labs Campaign Collage"
}

export default function CantabriaLabsPage() {
  const [selectedImage, setSelectedImage] = useState<{src: string; alt: string} | null>(null);
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    window.scrollTo(0, 0)
  }, [])

  if (!isClient) {
    return <div className={poppins.className}>Loading...</div>
  }

  return (
    <div className={`min-h-screen bg-black text-white ${poppins.className}`}>
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 p-6"
      >
        <Link 
          href="/" 
          className="inline-flex items-center text-white/80 hover:text-white transition-colors"
          aria-label="Back"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Logo and Header */}
          <div className="text-center mb-16">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-v5ByfGkZADczb2GZEepsi7WnzB1k7U.png"
              alt="Cantabria Labs Logo"
              width={400}
              height={120}
              className="mx-auto mb-8"
              priority
            />
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60 tracking-wider">
              <span>Healthcare Campaign</span>
              <span>•</span>
              <span>2023</span>
              <span>•</span>
              <span>Cantabria Labs</span>
            </div>
          </div>

          {/* Container Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {containerImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative aspect-square cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
            ))}
          </div>

          {/* Life Road Campaign Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative mb-16 cursor-pointer"
            onClick={() => setSelectedImage(roadTripImage)}
          >
            <div className="relative" style={{ paddingBottom: '75%' }}>
              <Image
                src={roadTripImage.src}
                alt={roadTripImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          </motion.div>

          {/* Final Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="cursor-pointer"
            onClick={() => setSelectedImage(finalSectionImage)}
          >
            <div className="relative" style={{ paddingBottom: '75%' }}>
              <Image
                src={finalSectionImage.src}
                alt={finalSectionImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-white/50 text-sm mt-16"
          >
            <p>© 2025 Cantabria Labs. All rights reserved.</p>
          </motion.footer>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

