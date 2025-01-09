'use client'
import { Parallax } from 'react-scroll-parallax'

const technologies = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js',
  'Node.js', 'Express', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Git',
  'Docker', 'AWS', 'Tailwind CSS', 'Sass', 'Redux', 'Jest'
]

export default function TechStack() {
  return (
    <section className="py-20 bg-white relative overflow-hidden dark:bg-gray-900">
      <Parallax translateY={['-20%', '20%']} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-100 to-pink-200 dark:from-purple-800 dark:to-pink-900 opacity-50"></div>
      </Parallax>
      <div className="container mx-auto px-4 relative z-10">
        <Parallax translateY={['-50px', '50px']}>
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900 dark:text-blue-100">Technology Stack & Skills</h2>
        </Parallax>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Parallax key={tech} translateY={[`${index % 2 ? '50px' : '-50px'}`, '0px']}>
              <div className="bg-white dark:bg-blue-800 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300 border border-blue-200 dark:border-blue-700">
                <p className="text-lg font-semibold text-blue-800 dark:text-blue-100">{tech}</p>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  )
}

