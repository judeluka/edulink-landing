'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, Link2 } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['Students', 'Parents', 'Agents', 'Vendors', 'Partners', 'the World']
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [words.length])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000) // Reset after 3 seconds
  }

  return (
    <section className="min-h-screen bg-white flex flex-col">

      <div className="flex-1 flex items-center">
        <div className="w-full max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          
          {/* Left Column - Content */}
          <div className="flex items-center justify-center px-8 lg:px-16 py-20">
            <div className="max-w-lg">
              
              {/* Logo - Option 1: Top left corner */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute top-8 left-8 lg:left-16"
              >
                <div className="flex items-center space-x-2">
                  <Link2 className="w-8 h-8 text-emerald-600" />
                  <span className="text-3xl font-semibold text-gray-900">EduLink</span>
                </div>
              </motion.div>
              
              {/* Launch Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-8"
              >
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                Launching November 2025
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Connecting schools to{' '}
                <div className="relative inline-block">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWord}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-emerald-600"
                    >
                      {words[currentWord]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                One intelligent platform connecting every stakeholder in your ELTO ecosystem. 
                From spreadsheets to smart systems—transform how you manage students, agents, 
                vendors, and compliance.
              </motion.p>

              {/* Email Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm"
              >
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      className="flex-1 px-5 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center justify-center group whitespace-nowrap shadow-lg hover:shadow-xl"
                    >
                      Join Waitlist
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center space-x-2 text-emerald-600 font-medium"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Thanks! We&apos;ll be in touch soon.</span>
                  </motion.div>
                )}
              </motion.div>

            </div>
          </div>

          {/* Right Column - Background */}
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-700">
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            {/* Optional: Uncomment when video is available
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            */}

            {/* Content Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative z-10 h-full flex items-center justify-center"
            >
              {/* Optional overlay content */}
              <div className="text-center p-8">

              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}