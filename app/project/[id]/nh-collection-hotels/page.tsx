'use client'

import { ArrowLeft, X, ArrowUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Poppins } from 'next/font/google'

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
  );
}

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
  description: 'From the heart of Madrid - A sophisticated fashion campaign showcasing the elegance and style of NH Collection Hotels.',
  images: [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen%201-h0C9G8C1ezYoIo4kMd2ClWN5IHat3o.png',
      alt: 'NH Collection - Fashion Campaign Hero'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen%202-APWgO7plR3BSwpuCmBBPvJizWhKqK9.png',
      alt: 'NH Collection - Indoor Fashion'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen%203-9DMV5AQFWIShAmfMS6HNV7tvw1FGCU.png',
      alt: 'NH Collection - Architectural Fashion'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_2-1YGYuOwZwY0vh2Tr4ldZSN2JFHqsbm.png',
      alt: 'The heart of Madrid - Gran Via'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-RhZMgsjqI9nV9jgxnFKnr7MTW9PDOc.png',
      alt: 'Still a lot to feel together'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_3-qVSTnexnC4TG81Xeu0iNxGmKSwC9n2.png',
      alt: 'Enjoy the views from Picalagartos rooftop'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-FYzaB1gIBzJUJKlJF8if8eSQTG4xh6.png',
      alt: 'The place to be'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HEART-CR2-2-5KHQynUFuPVfZbJCVoEwH7tPhv0eDu.png',
      alt: 'The heart of Madrid - Centro'
    }
  ],
  additionalImages: [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-ciWxNv6vbmn1jja5O4bW1VMpoY7Dra.png',
      alt: 'Madrid Gastronomy - Never leave with an empty stomach'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3_1-EGkyYKmzCrlzRsfuwSCxEdeQ7s92U4.png',
      alt: 'Madrid - La casa de todos y la ciudad de nadie'
    }
  ],
  experienceImages: [
    
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen%201-tWV4PBRJww3l2FVWIKTDOIFJJwfRK3.png',
     },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reel2-D0MDLrREkV0OdaJ9OoCdpwcivgBRto.png',
      },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reel4-yvmOwQw0x7VoxNB19xBzf6l4LaL8YF.png',
      },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reel3-zD4TYHJqndEeePpms9cJOtKYGDT02j.png',
      }
  ]
}

export default function NHCollectionProjectPage() {
  const [isClient, setIsClient] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{src: string; alt: string} | null>(null);

  useEffect(() => {
    setIsClient(true)
    window.scrollTo(0, 0)
  }, [])

  if (!isClient) {
    return <div className={poppins.className}>Loading...</div>
  }

  return (
    <div className={`min-h-screen bg-[#fbebd2] ${poppins.className}`}>
      {/* Minimal Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-8 left-8 z-50"
      >
        <Link 
          href="/" 
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white transition-colors shadow-md"
          aria-label="Back"
        >
          <ArrowLeft className="w-5 h-5 text-gray-800" />
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="w-full">
        {/* Hero Image */}
        <motion.div 
          className="w-full h-[70vh] relative cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={() => setSelectedImage(project.images[0])}
        >
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Image Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Medium Images Row */}
            {project.images.slice(1, 3).map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-[3/2] cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Small Images Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {project.images.slice(3, -2).map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-[4/5] cursor-pointer" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover" 
                />
              </motion.div>
            ))}
          </div>


          {/* Final Images Section */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {/* Empty column for spacing */}
            <div></div>
            {/* Columns for final images */}
            {project.images.slice(-2).map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-[4/5] cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Additional Images Row */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {/* First two columns for images */}
            {project.additionalImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-[4/5] cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
            {/* Empty column for spacing */}
            <div></div>
          </div>

          {/* Experience Images Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {project.experienceImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-[3/4] cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4">
                  <p className="text-white text-sm">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vive Madrid Section */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {/* Large image on the left */}
              <div
                className="relative aspect-[3/4] md:row-span-2 cursor-pointer"
                onClick={() =>
                  setSelectedImage({
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4_4-O4yMRh1Ipzxaj1QePZeGwnIn7FwFCL.png",
                    alt: "Vive Madrid - NH Collection Hotels",
                  })
                }
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4_4-O4yMRh1Ipzxaj1QePZeGwnIn7FwFCL.png"
                  alt="Vive Madrid - NH Collection Hotels"
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 p-4"></div>
              </div>

              {/* 2x2 grid on the right */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {[
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4_1-6MU6hX9ARZMikzc2Q5rEYm1A6bwi25.png",
                    alt: "Unveil Madrid - Urban Fashion",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-a8W7jUbZbZOQA5nyIGPx8dmqFUCYnX.png",
                    alt: "Iconic Madrid - Architecture",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4_2.jpg-Zc03w5Hbl5a9amj8tP6o4zQJPc4moH.jpeg",
                    alt: "Unveil Madrid - Sunset",
                  },
                  {
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4_3-2dYZsZTJetOWylsK7DBxSnzXxUVFr2.png",
                    alt: "Everything Happens in Madrid",
                  },
                ].map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                    />
                    <div className="absolute bottom-0 left-0 p-2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* El Cielo de Madrid Section */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* First row - 3 equal columns */}
              <div className="relative aspect-[4/5] cursor-pointer" onClick={() => setSelectedImage({src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carrusel-terrazacielo-1-tclIXeYa2Cvm7angH6aL4hBPPPRjfz.png"})}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carrusel-terrazacielo-1-tclIXeYa2Cvm7angH6aL4hBPPPRjfz.png"
                  alt="El cielo de Madrid"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <h3 className="text-2xl font-medium text-[#a93f33]">El cielo de Madrid</h3>
                </div>
              </div>
              <div className="relative aspect-[4/5] cursor-pointer" onClick={() => setSelectedImage({src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carrusel-terrazacielo-2-2ySo5qeZcIh6hYbAYuNtJq7XYoLvyC.png"})}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carrusel-terrazacielo-2-2ySo5qeZcIh6hYbAYuNtJq7XYoLvyC.png"
                  alt="Madrid Sunset View"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10">
                  <div className="absolute top-4 right-4">
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/5] cursor-pointer" onClick={() => setSelectedImage({src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carrusel-terrazacielo-3-mfVnSs12x84SNzq3FdXigxnp71RMoA.png"})}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carrusel-terrazacielo-3-mfVnSs12x84SNzq3FdXigxnp71RMoA.png"
                  alt="Vive Madrid"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10">
                  <div className="absolute bottom-4 left-4">
                  </div>
                </div>
              </div>
            </div>

            {/* Second row - 2 equal columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] cursor-pointer" onClick={() => setSelectedImage({src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t2-ieTOJquao1KP7qQaVN0fH8TW49awYd.png", alt: "Madrid in New York"})}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t2-ieTOJquao1KP7qQaVN0fH8TW49awYd.png"
                  alt="Madrid in New York"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10">
                  <div className="absolute top-4 left-4">
                  </div>
                  <div className="absolute bottom-4 left-4">
                    
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/5] cursor-pointer" onClick={() => setSelectedImage({src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t3-6EqUw4vO5cLTeLzZ6swM3317cPrcx0.png", alt: "NH Collection Madison Avenue"})}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t3-6EqUw4vO5cLTeLzZ6swM3317cPrcx0.png"
                  alt="NH Collection Madison Avenue"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-1/2 -translate-x-1/2">
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="w-full py-8 mt-16 border-t border-black/10">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-black/60">
              © {new Date().getFullYear()} NH Collection Hotels. All rights reserved.
            </p>
          </div>
        </footer>
        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <ImageModal
              image={selectedImage}
              onClose={() => setSelectedImage(null)}
            />
          )}
        </AnimatePresence>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full bg-white/80 hover:bg-white transition-colors shadow-md flex items-center justify-center"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-gray-800" />
        </motion.button>
      </div>
    </div>
  )
}

