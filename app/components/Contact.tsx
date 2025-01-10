'use client'
import { Parallax } from 'react-scroll-parallax'
import { useState } from 'react'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <section id="contact" className="py-32 bg-stone-100 relative overflow-hidden dark:bg-stone-900">
      <div className="absolute inset-0 border-y border-stone-200 dark:border-stone-800"></div>
      <div className="container mx-auto px-6 relative z-10">
        <Parallax translateY={['-30px', '30px']}>
          <h2 className="text-5xl font-serif mb-4 text-center text-stone-800 dark:text-stone-100">Correspondence</h2>
          <p className="text-center text-stone-600 dark:text-stone-400 mb-16 font-serif">I'd love to hear from you</p>
        </Parallax>
        <Parallax translateY={['50px', '-50px']}>
          <form className="max-w-2xl mx-auto bg-white dark:bg-stone-800 p-8 sm:p-12 rounded-lg shadow-lg">
            <div className="mb-6">
              <label className="block text-stone-700 dark:text-stone-300 mb-2 font-serif" htmlFor="name">Name</label>
              <input 
                id="name"
                type="text" 
                placeholder="Your Name" 
                className="w-full px-6 py-4 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-md text-stone-800 dark:text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 dark:focus:ring-stone-600 focus:border-transparent hover:border-stone-300 dark:hover:border-stone-600 transition-all duration-300 font-serif" 
              />
            </div>
            <div className="mb-6">
              <label className="block text-stone-700 dark:text-stone-300 mb-2 font-serif" htmlFor="email">Email</label>
              <input 
                id="email"
                type="email" 
                placeholder="Your Email" 
                className="w-full px-6 py-4 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-md text-stone-800 dark:text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 dark:focus:ring-stone-600 focus:border-transparent hover:border-stone-300 dark:hover:border-stone-600 transition-all duration-300 font-serif" 
              />
            </div>
            <div className="mb-6">
              <label className="block text-stone-700 dark:text-stone-300 mb-2 font-serif" htmlFor="message">Message</label>
              <textarea 
                id="message"
                placeholder="Your Message" 
                rows={6} 
                className="w-full px-6 py-4 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-md text-stone-800 dark:text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 dark:focus:ring-stone-600 focus:border-transparent hover:border-stone-300 dark:hover:border-stone-600 transition-all duration-300 font-serif resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-stone-800 dark:bg-stone-700 text-stone-100 py-4 px-6 font-serif hover:bg-stone-700 dark:hover:bg-stone-600 transition-all duration-300 rounded-md relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoading ? (
                <span className="inline-flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message'}
            </button>
          </form>
        </Parallax>
      </div>
    </section>
  )
}

