'use client'
import { Parallax } from 'react-scroll-parallax'

export default function Contact() {
  return (
    <section className="py-20 bg-purple-900 text-white relative overflow-hidden dark">
      <Parallax translateY={['-20%', '20%']} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-800 to-pink-600 dark:from-purple-900 dark:to-pink-700 opacity-50 animate-pulse"></div>
      </Parallax>
      <div className="container mx-auto px-4 relative z-10">
        <Parallax translateY={['-50px', '50px']}>
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-100">Get in Touch</h2>
        </Parallax>
        <Parallax translateY={['100px', '-100px']}>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded-lg bg-blue-800 bg-opacity-50 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-700 dark:bg-opacity-50" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-lg bg-blue-800 bg-opacity-50 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-700 dark:bg-opacity-50" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Message" rows={4} className="w-full px-4 py-2 rounded-lg bg-blue-800 bg-opacity-50 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-700 dark:bg-opacity-50"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300">Send Message</button>
          </form>
        </Parallax>
      </div>
    </section>
  )
}

