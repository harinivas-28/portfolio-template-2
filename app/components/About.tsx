'use client'

import { Parallax } from 'react-scroll-parallax'

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden dark:bg-gray-900">
      <div className="absolute inset-0 bg-grid-gray-100/[0.8] dark:bg-grid-gray-700/[0.4]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-gray-900 dark:to-gray-900" />
      
      <div className="container mx-auto px-6 relative z-10">
        <Parallax translateY={['-30px', '30px']}>
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </Parallax>
        
        <div className="max-w-4xl mx-auto">
          <Parallax translateX={['-50px', '50px']}>
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                I'm a passionate web developer and designer with a keen eye for detail and a love for creating beautiful, functional websites. With expertise in React, Next.js, and modern web technologies, I bring ideas to life through clean code and intuitive user experiences.
              </p>
            </div>
          </Parallax>

          <Parallax translateX={['50px', '-50px']} className="mt-12">
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
              <h3 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                What I Do
              </h3>
              <ul className="space-y-4">
                {[
                  "Develop responsive and performant web applications",
                  "Create intuitive user interfaces and engaging user experiences",
                  "Implement modern front-end frameworks and libraries",
                  "Optimize websites for speed, accessibility, and SEO",
                  "Collaborate with cross-functional teams to deliver high-quality products"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-lg text-gray-700 dark:text-gray-300 hover:translate-x-2 transition-transform duration-300">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-400 dark:to-gray-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  )
}

