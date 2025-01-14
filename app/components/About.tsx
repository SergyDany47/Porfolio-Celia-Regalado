'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Palette } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="px-6 py-16 bg-[#eeeeee]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <Palette className="w-5 h-5 text-[#FF4D4D] mr-2" />
          <h2 className="text-2xl font-light text-[#333333]">About</h2>
        </div>
        
        <div className="h-px bg-[#333333]/10 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] w-full max-w-2xl mx-auto"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Celia-perfil-iOe96XONLYJu2hnopltW3qSZ8JSfYN.png"
              alt="Celia Regalado - Creative Director"
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl font-light text-[#333333] mb-6">Quién soy</h3>
              <p className="text-base text-[#333333]/80 leading-relaxed">
                Como Directora Creativa con más de una década de experiencia, me especializo en crear narrativas visuales convincentes que conectan marcas con sus audiencias.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-light text-[#333333] mb-6">Qué hago</h3>
              <p className="text-base text-[#333333]/80 leading-relaxed">
                Mi experiencia abarca varios sectores, incluyendo turismo, marketing deportivo y marcas de estilo de vida. Me enfoco en crear campañas impactantes y memorables que resuenan con el público objetivo.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <p className="text-4xl font-light text-[#FF4D4D] mb-2">10+</p>
            <p className="text-sm text-[#333333]/70 uppercase tracking-wider">Años de experiencia</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-light text-[#FF4D4D] mb-2">80+</p>
            <p className="text-sm text-[#333333]/70 uppercase tracking-wider">Proyectos completados</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-light text-[#FF4D4D] mb-2">40+</p>
            <p className="text-sm text-[#333333]/70 uppercase tracking-wider">Clientes satisfechos</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

