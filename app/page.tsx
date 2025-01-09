'use client'

import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <ParallaxBanner
        layers={[
          { image: 'https://cdn.pixabay.com/photo/2024/12/06/12/23/ai-generated-9248643_640.jpg', speed: -10 },
          { image: 'https://cdn.pixabay.com/photo/2016/11/29/02/20/astronomy-1866822_640.jpg', speed: -20 },
        ]}
        className="h-screen"
      >
        <Hero />
      </ParallaxBanner>
      <div className="h-24"></div> {/* Spacing */}
      <Parallax speed={-10}>
        <About />
      </Parallax>
      <div className="h-24"></div> {/* Spacing */}
      <Parallax speed={-5}>
        <TechStack />
      </Parallax>
      <div className="h-24"></div> {/* Spacing */}
      <Parallax speed={-15}>
        <Projects />
      </Parallax>
      <div className="h-24"></div> {/* Spacing */}
      <Contact />
      <SocialLinks />
    </main>
  )
}

