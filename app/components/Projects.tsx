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
    <section className="py-20 bg-white relative overflow-hidden dark:bg-gray-900">
      <Parallax translateY={['-20%', '20%']} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-50 to-pink-100 dark:from-purple-900 dark:to-pink-800 opacity-50"></div>
      </Parallax>
      <div className="container mx-auto px-4 relative z-10">
        <Parallax translateY={['-50px', '50px']}>
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900 dark:text-blue-100">My Projects</h2>
        </Parallax>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <Parallax key={project.id} translateX={index % 2 ? ['100px', '-100px'] : ['-100px', '100px']}>
              <div className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-blue-800 rounded-lg shadow-lg p-8">
                <div className="w-full md:w-1/2">
                  <Image src={project.image} alt={project.title} width={600} height={400} className="rounded-lg shadow-md" />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-100">{project.title}</h3>
                  <p className="text-blue-700 dark:text-blue-200">{project.description}</p>
                </div>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  )
}

