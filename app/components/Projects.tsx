'use client'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce platform built with Next.js, featuring product listings, shopping cart, and secure checkout process.',
    image: '/placeholder.svg?height=400&width=600'
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'A comprehensive social media dashboard that aggregates data from multiple platforms, providing insightful analytics and scheduling capabilities.',
    image: '/placeholder.svg?height=400&width=600'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A sleek and modern portfolio website showcasing my projects and skills, built with React and featuring smooth animations and parallax effects.',
    image: '/placeholder.svg?height=400&width=600'
  },
  {
    id: 4,
    title: 'Machine Learning Model',
    description: 'A machine learning model built with Python and TensorFlow, capable of predicting housing prices with high accuracy.',
    image: '/placeholder.svg?height=400&width=600'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden dark:from-stone-900 dark:to-stone-800">
      <div className="absolute inset-0 border-y border-stone-200/50 dark:border-stone-700/50"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <Parallax translateY={['-40px', '40px']}>
          <h2 className="text-6xl font-serif mb-24 text-center text-stone-800 dark:text-stone-100 tracking-tight">
            Notable Works
          </h2>
        </Parallax>
        <div className="space-y-32">
          {projects.map((project, index) => (
            <Parallax 
              key={project.id} 
              translateX={index % 2 ? ['100px', '-100px'] : ['-100px', '100px']}
              opacity={[0.5, 1]}
              scale={[0.95, 1]}
            >
              <div className="group flex flex-col md:flex-row items-center gap-16 rounded-3xl bg-white/50 dark:bg-stone-800/50 p-8 lg:p-12 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-stone-200/20 dark:hover:shadow-stone-900/30">
                <div className="w-full md:w-1/2 overflow-hidden rounded-2xl">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={600} 
                    height={400} 
                    className="transform transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-3xl font-serif text-stone-800 dark:text-stone-100">{project.title}</h3>
                  <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  )
}

