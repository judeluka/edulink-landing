'use client'

import { motion } from 'framer-motion'
import { Users, Globe, Building2, Plane, Home, CreditCard, Shield, BarChart3, Link } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function OrbitingNodes() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const stakeholders = [
    { name: "Students", icon: Users, angle: 0 },
    { name: "Agents", icon: Globe, angle: 45 },
    { name: "Staff", icon: Building2, angle: 90 },
    { name: "Vendors", icon: Plane, angle: 135 },
    { name: "Hosts", icon: Home, angle: 180 },
    { name: "Finance", icon: CreditCard, angle: 225 },
    { name: "Compliance", icon: Shield, angle: 270 },
    { name: "Analytics", icon: BarChart3, angle: 315 }
  ]

  const radius = 220

  if (!mounted) return null

  return (
    <div className="relative max-w-5xl mx-auto h-[500px] flex items-center justify-center">
      {/* Central EduLink Core */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl p-6 shadow-2xl">
            <Link className="w-10 h-10 mx-auto mb-2" />
            <p className="font-bold text-lg">EduLink Core</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Orbiting Container */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Stakeholder Nodes */}
        {stakeholders.map((stakeholder, index) => {
          const angleRad = (stakeholder.angle * Math.PI) / 180
          const x = radius * Math.cos(angleRad)
          const y = radius * Math.sin(angleRad)
          
          return (
            <motion.div
              key={stakeholder.name}
              className="absolute top-1/2 left-1/2 z-20"
              style={{
                x: x,
                y: y,
                translateX: '-50%',
                translateY: '-50%'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Counter-rotate to keep upright */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-white rounded-xl p-3 shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow"
                >
                  <stakeholder.icon className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                  <p className="text-xs font-semibold text-gray-800 whitespace-nowrap">{stakeholder.name}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Orbital Path */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="rounded-full border border-dashed border-emerald-200 opacity-30"
          style={{ width: radius * 2 + 100, height: radius * 2 + 100 }}
        />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}