'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { ParallaxProvider } from 'react-scroll-parallax'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Minimalist Portfolio',
  description: 'A clean and modern portfolio with parallax effects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
          <ParallaxProvider>
            {children}
          </ParallaxProvider>
      </body>
    </html>
  )
}

