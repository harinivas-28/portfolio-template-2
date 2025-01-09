'use client'
import { Github, Linkedin, Instagram } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/yourusername' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/yourusername' },
  { name: 'Kaggle', icon: () => <span className="font-bold text-2xl">K</span>, url: 'https://www.kaggle.com/yourusername' },
  { name: 'HuggingFace', icon: () => <span className="font-bold text-2xl">🤗</span>, url: 'https://huggingface.co/yourusername' },
]

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6 pb-8 bg-purple-900">
      {socialLinks.map((link) => (
        <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-100 dark:text-pink-200 dark:hover:text-white transition-colors">
          <span className="sr-only">{link.name}</span>
          <link.icon className="w-6 h-6" />
        </Link>
      ))}
    </div>
  )
}

