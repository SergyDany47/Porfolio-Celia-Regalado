'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'
import Image from 'next/image'

interface Video {
  src: string
  thumbnail: string
  alt: string
}

const videos: Video[] = [
  {
    src: "https://rm0wpqkfgafxqchz.public.blob.vercel-storage.com/TIVOLI_MULTITAREA_V02-Llc7RAwYCXBcTLBjE50yVDZ7UOHTE9.mp4",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jBFZUnJJ9ZdmZDvrZywM6lw6sZoNhu.png",
    alt: "Tivoli Multitarea"
  },
  {
    src: "https://rm0wpqkfgafxqchz.public.blob.vercel-storage.com/20231127_NH_SCHIPHOL_FRONTDESK_V01-FDNgxAV8jssjUZLxwxl6pa3cctYbtW.mp4",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tzlvgFVtb0uUCazEhu1aQlciPEyos5.png",
    alt: "NH Schiphol Front Desk"
  },
  {
    src: "https://rm0wpqkfgafxqchz.public.blob.vercel-storage.com/NHC_CHEF_V04-2xyBjKEgrEK18RSPsKFuFK5Tg0iLSY.mp4",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SckrzrYbZM9eqHGE9ZUT0qdGYAxozm.png",
    alt: "NHC Chef"
  },
  {
    src: "https://rm0wpqkfgafxqchz.public.blob.vercel-storage.com/NHOW_MULTIAREA_V03-d56Z3L054qRG0whaHdbQcF01DHy4HM.mp4",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FpolUBZ1t4BWvlnxWGnvWkce4bOrdJ.png",
    alt: "NHOW Multiarea"
  },
  {
    src: "https://rm0wpqkfgafxqchz.public.blob.vercel-storage.com/NHOW%20BAR_V02-j1M1C0YKXcEin4mSF9Xf5xUXx5hGTm.mp4",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IJbPmFdl6MyFZEGZADsCZDWnl1DYSD.png",
    alt: "NHOW Bar"
  }
]

export default function FeaturedVideoCarousel() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => setIsMuted(!isMuted)

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-center gap-12">
       {/* Reproductor Principal */}
<div className="relative aspect-[9/16] max-w-[600px] sm:max-w-[700px] overflow-hidden shadow-lg bg-black/20">
  <video
    ref={videoRef}
    src={videos[currentVideoIndex].src}
    className="w-full h-full object-cover"
    autoPlay
    loop
    muted={isMuted}
    playsInline
    poster={videos[currentVideoIndex].thumbnail}
  />
  {/* Botón de Mute */}
  <button
    onClick={toggleMute}
    className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 text-white flex items-center justify-center hover:bg-black/70"
  >
    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
  </button>
</div>


        {/* Miniaturas */}
        <div className="relative w-full">
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                onClick={() => setCurrentVideoIndex(index)}
                className={`relative w-[150px] aspect-[9/16] flex-shrink-0 cursor-pointer overflow-hidden transition-transform ${
                  index === currentVideoIndex 
                    ? 'ring-2 ring-white scale-105 shadow-lg' 
                    : 'hover:ring-2 hover:ring-white/30 hover:scale-105'
                }`}
              >
                <Image
                  src={video.thumbnail}
                  alt={video.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:opacity-80"
                />
                {/* Fondo para mejorar el texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium truncate">
                      {video.alt}
                    </p>
                    {index === currentVideoIndex && (
                      <p className="text-white text-[10px] text-center mt-1">Now Playing</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

