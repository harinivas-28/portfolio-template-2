'use client'
import { motion } from 'framer-motion'
import { Noto_Sans_Mahajani } from 'next/font/google'
import { useState } from 'react'

const JavaScriptIcon = () => (
  <svg viewBox="0 0 448 512" className="w-8 h-8 fill-current">
    <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
  </svg>
)

const technologies = [
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'TypeScript', icon: '📘', color: '#3178C6' },
  { name: 'Next.js', icon: '▲', color: '#000000' },
  { name: 'Node.js', icon: '🟢', color: '#339933' },
  { name: 'HTML', icon: '🌐', color: '#E34F26' },
  { name: 'CSS', icon: '🎨', color: '#1572B6' },
  { name: 'JavaScript', icon: <JavaScriptIcon />, color: '#F7DF1E' },
  { name: 'Express.js', icon: '🚂', color: '#000000' },
  { name: 'MongoDB', icon: '🍃', color: '#47A248' },
  { name: 'MySQL', icon: '🐬', color: '#4479A1' },
  { name: 'Java', icon: '☕', color: '#007396' },
  { name: 'Python', icon: '🐍', color: '#3776AB' },
  { name: 'Docker', icon: '🐳', color: '#2496ED' },
  { name: 'Git', icon: '🔗', color: '#F05032' },
  { name: 'Tailwind CSS', icon: '🌪️', color: '#38B2AC' },
  // ...add more with appropriate icons
]

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 relative overflow-hidden dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6"
      >
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300">
          Technology Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group perspective"
            >
              <div className={`relative p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${hoveredIndex === index ? 'shadow-2xl translate-y-[-10px]' : ''}`}>
                <div className="text-4xl mb-3 text-gray-800 dark:text-gray-200">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {tech.name}
                </h3>
                <div 
                  className="h-1 w-0 group-hover:w-full transition-all duration-300 rounded"
                  style={{ backgroundColor: tech.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

