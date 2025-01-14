'use client'

import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import WorkGrid from './components/WorkGrid'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      <Hero />
      <WorkGrid />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

