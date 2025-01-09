import { Parallax } from 'react-scroll-parallax'

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-white relative overflow-hidden">
      <Parallax translateY={['-50%', '50%']} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-900 opacity-60 animate-pulse"></div>
      </Parallax>
      <div className="text-center z-10">
        <Parallax translateY={['-100px', '100px']} scale={[0.8, 1.2]}>
          <img src="https://cdn.pixabay.com/photo/2024/12/06/12/23/ai-generated-9248643_640.jpg" alt="Harinivas" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h1 className="text-6xl font-bold mb-4 text-white">Harinivas</h1>
        </Parallax>
        <Parallax translateY={['50px', '-50px']} scale={[1.2, 0.8]}>
          <p className="text-2xl mb-6 text-blue-100">Software Developer</p>
          <p className="text-xl max-w-2xl mx-auto text-blue-50">Crafting beautiful, responsive, and user-friendly web experiences with a passion for clean code and innovative design.</p>
        </Parallax>
      </div>
    </section>
  )
}

