'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false })

const projects = [
  {
    id: 1,
    title: 'Binance ForeverSkills',
    category: 'Digital Campaign',
    type: 'image',
    media: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/binance%20-%20drop%205%20foreverskills.jpg-orqQE2UfWBjkYdHz7mwPxGwBQvHVa9.jpeg',
    className: 'md:col-span-1 row-span-1',
    link: '/project/1/cristiano'
  },
  {
    id: 2,
    title: 'NH Collection Hotels',
    category: 'Fashion Campaign',
    type: 'image',
    media: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minor%20hotels%20x%20nh%20collection%2010%20anniversary.jpg-FPbtRsrN08IKMihruvuF6SUoYB3swK.jpeg',
    className: 'md:col-span-1 row-span-1',
    link: '/project/2/nh-collection-hotels'
  },
  {
    id: 3,
    title: 'Minor Hotels & Resorts',
    category: 'Luxury Hospitality',
    type: 'image',
    media: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minor%20hotels%20&%20resorts.jpg-uaVqiyyUn9YILJcX1noVrLbQjNnuXk.jpeg',
    className: 'md:col-span-1 row-span-1',
    link: '/project/3/minor-hotels-resorts'
  },
  {
    id: 4,
    title: 'Minor Hotels Recruitment',
    category: 'Employer Branding',
    type: 'image',
    media: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20minute%201%20click%201%20job%20minor%20hotels.jpg-k6XNek1mq33ZKw8ASm9H1at35PCVoX.jpeg',
    className: 'md:col-span-1 md:row-span-2',
    link: '/project/4/minor-hotels-recruitment'
  },
  {
    id: 5,
    title: 'AVA Advanced Recovery',
    category: 'Product Launch',
    type: 'image',
    media: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ava%20advanced%20recovery%20-%20launch.jpg-8Jzjq9h9kUMHHFpcZwQusaFM4gKU3Y.jpeg',
    className: 'md:col-span-1 md:row-span-1',
    link: '/project/5/ava-advanced-recovery'
  },
  {
    id: 6,
    title: 'Cantabria Labs',
    category: 'Healthcare Campaign',
    type: 'image',
    media: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cantabria%20labs%20-%20heliocare.jpg-81CJaPM0iLJ52WLTmCUwTHsZDpmzfH.jpeg',
    className: 'md:col-span-1 md:row-span-1',
    link: '/project/6/cantabria-labs'
  },
  {
    id: 7,
    title: 'Visit Dubai',
    category: 'Tourism Campaign',
    type: 'image',
    media: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/real%20madrid%20x%20visit%20dubai.jpg-UAvRZY5zW91UcxvD3XmBhZkzcMOtCO.jpeg',
    className: 'md:col-span-2 md:row-span-1',
    link: '/project/7/visit-dubai'
  }
]

export default function WorkGrid() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <section id="work" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[400px]">
          {projects.map((project) => (
            <MotionDiv
              key={project.id}
              className={`relative overflow-hidden rounded-lg ${project.className}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href={project.link} onClick={() => window.scrollTo(0, 0)}>
                <div className="relative w-full h-full group">
                  <Image
                    src={project.media}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-primary font-light text-sm mb-2">{project.category}</p>
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}

