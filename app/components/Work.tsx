'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { id: 1, title: 'Project 1', image: '/placeholder.svg?height=400&width=600' },
  { id: 2, title: 'Project 2', image: '/placeholder.svg?height=400&width=600' },
  { id: 3, title: 'Project 3', image: '/placeholder.svg?height=400&width=600' },
  { id: 4, title: 'Project 4', image: '/placeholder.svg?height=400&width=600' },
  { id: 5, title: 'Project 5', image: '/placeholder.svg?height=400&width=600' },
  { id: 6, title: 'Project 6', image: '/placeholder.svg?height=400&width=600' },
]

// Work Section
const Work = () => {
  return (
    <section id="work" className="py-12"> {/* Reduced from py-20 to py-12 */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/project/${project.id}`}>
                <div className="relative overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work

