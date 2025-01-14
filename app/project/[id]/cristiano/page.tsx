'use client'

import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Poppins } from 'next/font/google'
import VideoGallery from './components/VideoGallery'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false })

const projects = [
  {
    id: 1,
    title: 'Binance ForeverSkills',
    category: 'Digital Campaign',
    year: '2023',
    client: 'Binance',
    description: 'A targeted advertising campaign for the launch of Cristiano Ronaldo\'s NFT & Dropin collaboration with Binance.',
    heroImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SCuYaLwz6LrEDvPxOxk2aMW7sO2MIa.png',
    videos: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TEASER%20PROOF%20OF%20SKILL-9hiBiAbzF8cZdemDoiS9Pw2fiHQ8G9.mp4',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FINAL%20VERSION%20TEASER%20BINANCE-8VGyfwk85a2dtw4oXCCilVuZaauOyG.mp4',
    ],
    finalImages: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ssz1ITMNZM8D1QDACgXdUvcAaguHDG.png',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TqM58QYGDuH4iQlpkXfQWTEbj5J1fS.png'
    ]
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const [isClient, setIsClient] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [pausedVideos, setPausedVideos] = useState<{ [key: string]: boolean }>({})
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null)
  const [currentPlayingVideo, setCurrentPlayingVideo] = useState(0)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({})
  
  const project = projects.find(p => p.id === parseInt(params.id))

  useEffect(() => {
    setIsClient(true)
    window.scrollTo(0, 0)

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isClient || hoveredVideo !== null || !project) return

    const currentVideo = videoRefs.current[currentPlayingVideo]
    if (currentVideo) {
      currentVideo.play()
      
      const handleEnded = () => {
        currentVideo.pause()
        currentVideo.currentTime = 0
        setCurrentPlayingVideo((prev) => (prev + 1) % project.videos.length)
      }

      currentVideo.addEventListener('ended', handleEnded)
      return () => {
        currentVideo.removeEventListener('ended', handleEnded)
      }
    }
  }, [currentPlayingVideo, hoveredVideo, isClient, project])

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index]
    if (video) {
      if (video.paused) {
        video.play()
        setPausedVideos(prev => ({ ...prev, [index]: false }))
      } else {
        video.pause()
        setPausedVideos(prev => ({ ...prev, [index]: true }))
      }
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredVideo(index)
    const video = videoRefs.current[index]
    if (video && !pausedVideos[index]) {
      video.play()
    }
  }

  const handleMouseLeave = (index: number) => {
    setHoveredVideo(null)
    const video = videoRefs.current[index]
    if (video && !pausedVideos[index]) {
      video.pause()
      video.currentTime = 0
    }
  }

  if (!project || !isClient) {
    return <div className={poppins.className}>Loading...</div>
  }

  return (
    <div className={`min-h-screen bg-black text-white ${poppins.className}`}>
      {/* Header */}
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            aria-label="Back"
            onClick={() => window.scrollTo(0, 0)}
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </MotionDiv>

      <div className="container mx-auto px-4 pt-24 pb-20">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="text-[#F0B90B]">BINANCE</span>{' '}
              <span className="text-white">FOREVERSKILLS</span>
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
          <MotionDiv 
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
          </MotionDiv>

          {/* Videos Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Video on the left */}
            <MotionDiv
              className="relative rounded-lg overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="aspect-[9/16]">
                <video
                  ref={el => {
                    if (el) videoRefs.current[0] = el
                  }}
                  className="w-full h-full object-cover"
                  loop
                  autoPlay
                  muted
                  playsInline
                >
                  <source src={project.videos[0]} type="video/mp4" />
                </video>
              </div>
            </MotionDiv>

            {/* Image on the right */}
            <MotionDiv
              className="relative col-span-2 rounded-lg overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="aspect-auto">
                <Image
                  src={project.finalImages[0]}
                  alt={`Campaign Image`}
                  width={2400}
                  height={1350}
                  className="w-full h-auto object-contain"
                />
              </div>
            </MotionDiv>
          </div>

          {/* New Section: 2/3 Image and 1/3 Video */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Image (2/3) */}
            <MotionDiv
              className="relative col-span-2 rounded-lg overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="aspect-auto">
                <Image
                  src={project.finalImages[project.finalImages.length - 1]}
                  alt="Final Campaign Image"
                  width={2400}
                  height={1350}
                  className="w-full h-auto object-contain"
                />
              </div>
            </MotionDiv>

            {/* Video (1/3) */}
            <MotionDiv
              className="relative rounded-lg overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="aspect-[9/16]">
                <video
                  ref={el => {
                    if (el) videoRefs.current[1] = el
                  }}
                  className="w-full h-full object-cover"
                  loop
                  autoPlay
                  muted
                  playsInline
                >
                  <source src={project.videos[1]} type="video/mp4" />
                </video>
              </div>
            </MotionDiv>
          </div>

          {/* Video Gallery Section */}
          <VideoGallery />
          
          {/* Footer */}
          <footer className="bg-black text-white/50 text-center py-4 mt-16">
            <p className="text-sm">
              © {new Date().getFullYear()} Binance ForeverSkills. All rights reserved.
            </p>
          </footer>
        </MotionDiv>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-sm rounded-full p-3 cursor-pointer hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 rotate-90" />
        </MotionDiv>
      )}
    </div>
  )
}

