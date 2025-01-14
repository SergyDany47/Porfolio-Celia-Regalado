'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause } from 'lucide-react'

interface Video {
  id: number
  url: string
  cover: string
  title: string
}

const videos: Video[] = [
  {
    id: 1,
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TIKTOK%20DUET-GRlTg7iNJ1B7viKKt1G85HB6u4o9vE.mp4',
    cover: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/COVERS-READY-TO-LEARN-MY-MOVES-wJYf0mESk4ciMLjFHJyvBtotipcd7k.png',
    title: 'Ready to Learn My Moves?'
  },
  {
    id: 2,
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/REEL%20RECAP%202024_V03-1-zxfDhbasnzsR9OjLMt0ot8VEnPMLKL.mp4',
    cover: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CR7-COUNTDOWN-htin8EyzC56neROfZ5V2RQJUFgG0PU.png',
    title: 'CR7 Countdown'
  },
  {
    id: 3,
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/REEL%20READY%20TO%20MESMERIZE%20(1)-1-bMEZJSgzWqOrtG2S17W2vOr79CORpi.mp4',
    cover: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cover%20teaser.jpg-OYIN8OUhXatDF1PSVwgSFstL33BUzn.jpeg',
    title: 'Ready to Mesmerize'
  },
  {
    id: 4,
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/REEL%20NOW%20YOU%20V2-ujtFHuGOglvxyq5M8j3JcLJtPVZUKS.mp4',
    cover: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CAN-YOU-GUESS-THIS-CR7-SKILL-cover-abIuZy3QP7fvEaxAzAU62L3wA21X2I.png',
    title: 'Can You Guess This CR7 Skill?'
  }
]

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<Video>(videos[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleThumbnailClick = (video: Video) => {
    setSelectedVideo(video)
    setIsPlaying(false)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener('ended', () => setIsPlaying(false))
      return () => video.removeEventListener('ended', () => setIsPlaying(false))
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-black py-16"
    >
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-[#F0B90B]">Featured Videos</h2>
          <p className="text-white/60">Watch the latest CR7 x Binance content</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Video Player */}
          <div className="md:col-span-5">
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-black/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedVideo.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <video
                    ref={videoRef}
                    src={selectedVideo.url}
                    className="w-full h-full object-cover"
                    playsInline
                    onClick={handleVideoClick}
                  />
                  {!isPlaying && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer"
                      onClick={handleVideoClick}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-full bg-[#F0B90B] p-4"
                      >
                        {isPlaying ? (
                          <Pause className="w-8 h-8 text-black" />
                        ) : (
                          <Play className="w-8 h-8 text-black" />
                        )}
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Thumbnails Grid */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-4 h-full">
              {videos.map((video) => (
                <motion.div
                  key={video.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer ${
                    selectedVideo.id === video.id ? 'ring-2 ring-[#F0B90B]' : ''
                  }`}
                  onClick={() => handleThumbnailClick(video)}
                >
                  <Image
                    src={video.cover}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-8 h-8 text-[#F0B90B]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

