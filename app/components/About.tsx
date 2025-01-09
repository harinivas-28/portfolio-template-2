'use client'

import { Parallax } from 'react-scroll-parallax'

export default function About() {
  return (
    <section className="py-20 bg-white relative overflow-hidden dark:bg-gray-900">
      <Parallax translateY={['-20%', '20%']} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-50 to-pink-100 dark:from-purple-900 dark:to-pink-800 opacity-50"></div>
      </Parallax>
      <div className="container mx-auto px-4 relative z-10">
        <Parallax translateY={['-50px', '50px']}>
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">About Me</h2>
        </Parallax>
        <div className="max-w-3xl mx-auto">
          <Parallax translateX={['-100px', '100px']}>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              I'm a passionate web developer and designer with a keen eye for detail and a love for creating beautiful, functional websites. With expertise in React, Next.js, and modern web technologies, I bring ideas to life through clean code and intuitive user experiences.
            </p>
          </Parallax>
          <Parallax translateX={['100px', '-100px']}>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">What I Do</h3>
            <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
              <li>Develop responsive and performant web applications</li>
              <li>Create intuitive user interfaces and engaging user experiences</li>
              <li>Implement modern front-end frameworks and libraries</li>
              <li>Optimize websites for speed, accessibility, and SEO</li>
              <li>Collaborate with cross-functional teams to deliver high-quality products</li>
            </ul>
          </Parallax>
        </div>
      </div>
    </section>
  )
}

