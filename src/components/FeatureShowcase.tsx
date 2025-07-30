'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { CheckCircle, ArrowRight, Sparkles, Maximize2, X } from 'lucide-react'

export default function FeatureShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const showcases = [
    {
      title: "Agent Portal That Drives Bookings",
      subtitle: "Professional tools for your partners.",
      description: "Give agents their own branded booking portal with real-time availability, instant quotes, and seamless communication. Watch bookings increase as partners gain confidence in your professional systems.",
      image: "/screenshots/agent-portal-booking.png",
      features: [
        "Custom-branded partner portals",
        "Real-time availability and pricing",
        "Instant booking confirmations",
        "Multi-language support"
      ],
      benefits: [
        "Increased partner confidence",
        "More direct bookings",
        "Reduced booking errors"
      ]
    },
    {
      title: "Commission Tracking That Agents Love",
      subtitle: "Transparent. Automated. Trusted.",
      description: "Give your international partners the professional tools they deserve. Our agent portal automates commission calculations, tracks performance, and provides real-time insights - building trust and driving more bookings.",
      image: "/screenshots/agencies.png",
      features: [
        "Automated commission calculations based on tiers",
        "Real-time booking and revenue tracking",
        "White-labeled partner portals",
        "Instant performance analytics"
      ],
      benefits: [
        "Faster payment processing",
        "Increased partner satisfaction",
        "Reduced commission disputes"
      ],
      reverse: true
    },
    {
      title: "Master Schedule That Actually Works",
      subtitle: "See everything. Control everything.",
      description: "Our revolutionary scheduling interface gives you complete visibility of your entire operation. Track hundreds of groups, monitor activities, coordinate transfers, and manage resources - all in one beautiful view.",
      image: "/screenshots/master-schedule.png",
      features: [
        "Real-time group tracking across multiple locations",
        "Drag-and-drop activity management",
        "Automatic conflict detection and resolution",
        "One-click booking status overview"
      ],
      benefits: [
        "Streamlined scheduling process",
        "Eliminate double bookings",
        "Complete operational visibility"
      ]
    }
  ]

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden" id="showcase">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showcases.map((showcase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`mb-32 last:mb-0 ${showcase.reverse ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${showcase.reverse ? 'lg:flex lg:flex-row-reverse' : ''}`}>
              {/* Content - Smaller Column */}
              <div className={`lg:col-span-4 ${showcase.reverse ? 'lg:pl-8' : 'lg:pr-8'}`}>
                <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Feature Spotlight
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {showcase.title}
                </h2>
                <p className="text-lg text-emerald-600 font-semibold mb-4">
                  {showcase.subtitle}
                </p>
                <p className="text-base text-gray-600 mb-6">
                  {showcase.description}
                </p>

                {/* Compact Features List */}
                <ul className="space-y-2 mb-6">
                  {showcase.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Key Benefits */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</div>
                  <div className="space-y-1">
                    {showcase.benefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="text-xs text-gray-600">• {benefit}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Screenshot - Larger Column */}
              <div className="lg:col-span-8 relative group">
                {/* Browser Frame */}
                <div className="bg-gray-800 rounded-t-lg p-2">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div 
                  className="relative z-10 rounded-b-lg overflow-hidden shadow-2xl cursor-pointer"
                  onClick={() => setLightboxImage(showcase.image)}
                >
                  <img
                    src={showcase.image}
                    alt={showcase.title}
                    className="w-full h-auto"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3">
                      <Maximize2 className="w-6 h-6 text-gray-900" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Full size screenshot"
              className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}