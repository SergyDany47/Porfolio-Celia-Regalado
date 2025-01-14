'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false })
const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), { ssr: false })
const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), { ssr: false })

export default function Hero() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  if (!isClient) {
    return null
  }

  return (
    <section className="min-h-[50vh] flex items-start px-12 lg:px-24 pt-40">
      <MotionDiv
        variants={container}
        initial="hidden"
        animate="show"
        className="relative"
      >
        <MotionH1 
          className="text-7xl md:text-8xl font-bold text-[#a93f33] leading-tight tracking-tight"
          variants={item}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          Celia
          <br />
          Regalado
        </MotionH1>
        <MotionP 
          className="text-2xl text-[#e5e5e5] mt-6 tracking-widest font-light"
          variants={item}
        >
          Creative Director Portfolio
        </MotionP>
      </MotionDiv>
    </section>
  )
}

