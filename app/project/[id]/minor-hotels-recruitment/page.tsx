'use client'

import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Poppins } from 'next/font/google'
import { useScroll, useTransform } from 'framer-motion'
import FeaturedVideoCarousel from './components/FeaturedVideoCarousel'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const images = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BARBIZON_HSK_16x9_2_edit.jpg-PMuJ7MfgUc49voaByKkmoElwZ73ipr.jpeg',
    alt: 'Housekeeping Staff'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TIVOLI_BAR_16x9_4_edit.jpg-AQSfLIQBR0Vfm1rL390ArZxBNXyZdo.jpeg',
    alt: 'Bar Service'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SCHIPHOL_CHEF_16x9_3_edit.jpg-dugPF1t39l0yb7ogwhNvOunDFiqX3X.jpeg',
    alt: 'Chef Presentation'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAI_WAITER_16x9_3_edit.jpg-fn46CXlf0BON3GlJny6PkWOk1piTLs.jpeg',
    alt: 'Restaurant Service'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SCHILPHOL_WAITER_16x9_2_edit.jpg-YpWcE2uwbxw40c9gdBP5dyEfUBFpOR.jpeg',
    alt: 'Restaurant Staff'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TIVOLI_FRONT%20DESK_16x9_edit.jpg-Gd93MzsOSBZkbYWDxSiEbrz7TFdXJs.jpeg',
    alt: 'Front Desk Service'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BARBIZON_BAR_16X9_edit.jpg-MLutiNGHY50POq0l6QK6Q9i902LRvS.jpeg',
    alt: 'Bar Staff'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NHOW_BAR_16x9_4_edit.jpg-nhfp8sdRxmry9ReosTkb0kOPQeGQ6h.jpeg',
    alt: 'Bartender Service'
  }
]

function ParallaxSection({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -200])

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  )
}

function ImageModal({ 
  image, 
  onClose 
}: { 
  image: typeof images[0] | null
  onClose: () => void 
}) {
  if (!image) return null

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
        <X className="w-6 h-6" />
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
  )
}

export default function MinorHotelsRecruitmentPage() {
  const [isClient, setIsClient] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [autoplayPaused, setAutoplayPaused] = useState(false)
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')

  const nextImage = () => {
    setSlideDirection('right')
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setSlideDirection('left')
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return

    const currentTouch = e.touches[0].clientX
    const diff = touchStart - currentTouch

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextImage()
      } else {
        previousImage()
      }
      setTouchStart(0)
    }
  }

  useEffect(() => {
    setIsClient(true)
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (autoplayPaused) return

    const interval = setInterval(() => {
      nextImage()
    }, 3500)

    return () => clearInterval(interval)
  }, [autoplayPaused])

  if (!isClient) {
    return <div className={poppins.className}>Loading...</div>
  }

  return (
    <div className={`min-h-screen ${poppins.className} overflow-hidden`}>
      {/* Minimal Back Button */}
      <Link 
        href="/" 
        className="fixed top-6 left-6 z-50 text-white/30 hover:text-white/50 transition-colors"
        aria-label="Back"
        onClick={() => window.scrollTo(0, 0)}
      >
        <ArrowLeft className="w-5 h-5" />
      </Link>

      {/* Static Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-pixabay-258154.jpg-NNBECDSRGFpvnpxYUxpDWEotGt5j9g.jpeg"
          alt="Luxury Resort Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      </div>


     {/* Scrollable Content */}
      <div className="relative z-10">
        <div className="h-24" />
        <ParallaxSection>
          {/* Hero Section */}
          <div className="min-h-[70vh] flex items-center justify-center">
            <div className="text-center px-4 md:px-8 w-full">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minorlogonew-t0p3Ng1W7Qh4upxApUahfQKogi12mF.webp"
                  alt="Minor Hotels Logo"
                  width={240} // Más grande para móviles
                  height={96}
                  className="mx-auto object-contain"
                  priority
                />
              </motion.div>

              {/* Recruit Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-6xl md:text-7xl font-extrabold tracking-tight text-white"
              >
                Recruit
              </motion.h1>

              {/* Project Metadata */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-4 text-base md:text-lg text-white/70 tracking-wide"
              >
                <span className="mx-2">Employer Branding</span>
                <span className="mx-2">•</span>
                <span className="mx-2">2023</span>
                <span className="mx-2">•</span>
                <span className="mx-2">Minor Hotels</span>
              </motion.div>
            </div>
          </div>



          {/* Video Gallery Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-24 w-full px-4"
          >
            <FeaturedVideoCarousel />
          </motion.div>
          
          {/* Image Gallery Section - Now without card background */}
          <div className="container mx-auto px-4 pb-16">
            <div className="max-w-7xl mx-auto">
              {/* Featured Image Carousel */}
              <div
                className="relative mb-8"
                onMouseEnter={() => setAutoplayPaused(true)}
                onMouseLeave={() => setAutoplayPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
              >
                <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={currentImageIndex}
                      initial={{ 
                        opacity: 0, 
                        x: slideDirection === 'right' ? 100 : -100 
                      }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: {
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 }
                        }
                      }}
                      exit={{ 
                        opacity: 0,
                        x: slideDirection === 'right' ? -100 : 100,
                        transition: {
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 }
                        }
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[currentImageIndex].src}
                        alt={images[currentImageIndex].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        previousImage()
                      }}
                      className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-black/10 backdrop-blur-sm text-white/50 hover:text-white/70 hover:bg-black/20 transition-all transform translate-x-4 hover:scale-105"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-black/10 backdrop-blur-sm text-white/50 hover:text-white/70 hover:bg-black/20 transition-all transform -translate-x-4 hover:scale-105"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/90 text-lg font-medium">
                      {images[currentImageIndex].alt}
                    </p>
                  </div>

                  {/* Navigation Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Gallery Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`group relative aspect-video overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] ${
                      currentImageIndex === index ? 'ring-2 ring-white scale-[1.02]' : ''
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Case Study Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full mt-16 mb-16"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CASESTUDY_MINOR_ENGv4.jpg-cykGPQEhDeWcTUr9az2IjYXghR9PTm.jpeg"
                    alt="Minor Hotels Social Media Case Study Results"
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </motion.div>

              {/* Footer */}
              <div className="mt-20 text-center">
                <p className="text-white/60">© {new Date().getFullYear()} Minor Hotels. All rights reserved.</p>
              </div>
            </div>
          </div>
        </ParallaxSection>
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

