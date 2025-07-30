'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Play, Pause, Volume2, Maximize } from 'lucide-react'

export default function LiveDemo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See EduLink <span className="text-emerald-600">In Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how EduLink would transform your language school operations. 
            This demo shows the complete platform built specifically for Irish ELTOs.
          </p>
        </motion.div>

        {/* Video Player Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video Container */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative">
              
              {/* Simulated Interface */}
              <div className="absolute inset-4 bg-white rounded-lg overflow-hidden">
                <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold">EL</span>
                    </div>
                    <div>
                      <div className="font-semibold">EduLink Demo School</div>
                      <div className="text-xs opacity-75">Demo Dashboard • Sample Data</div>
                    </div>
                  </div>
                  <div className="text-sm">🇮🇪 Dublin, Ireland</div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { label: "Today's Check-ins", value: "127", trend: "Sample Data" },
                      { label: "Active Bookings", value: "45", trend: "Demo Mode" },
                      { label: "Agent Commissions", value: "€12,450", trend: "Example" }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="bg-gray-50 rounded-lg p-4"
                      >
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                        <div className="text-xs text-gray-500 font-medium">{stat.trend}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Live Activity Feed */}
                  <div className="space-y-2">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1 }}
                      className="flex items-center space-x-3 text-sm"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Sample Agent Portal: New booking request submitted</span>
                      <span className="text-gray-500">2 min ago</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1.2 }}
                      className="flex items-center space-x-3 text-sm"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span>Demo: Accommodation booking confirmed for sample group</span>
                      <span className="text-gray-500">5 min ago</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1.4 }}
                      className="flex items-center space-x-3 text-sm"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <span>Example: Activity excursion scheduled and confirmed</span>
                      <span className="text-gray-500">12 min ago</span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Play Button Overlay */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-30 transition-all"
              >
                <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-xl">
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-gray-800 ml-1" />
                  ) : (
                    <Play className="w-8 h-8 text-gray-800 ml-1" />
                  )}
                </div>
              </motion.button>
            </div>

            {/* Video Controls */}
            <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <Volume2 className="w-5 h-5" />
                <div className="flex items-center space-x-2">
                  <div className="w-32 h-1 bg-gray-700 rounded-full">
                    <motion.div
                      className="h-full bg-emerald-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={isPlaying ? { width: "45%" } : {}}
                      transition={{ duration: 30, ease: "linear" }}
                    />
                  </div>
                  <span className="text-sm">1:23 / 2:45</span>
                </div>
              </div>
              <Maximize className="w-5 h-5 hover:text-emerald-400 transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Video Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-8 bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              EduLink Demo Dashboard
            </h3>
            <p className="text-gray-600 mb-4">
              This interactive demo showcases how EduLink would help manage your language school operations 
              from a single, unified dashboard built specifically for Irish ELTOs.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Live Student Tracking",
                "Agent Portal Management", 
                "Accommodation Coordination",
                "Activity Planning",
                "Financial Oversight"
              ].map((feature, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}