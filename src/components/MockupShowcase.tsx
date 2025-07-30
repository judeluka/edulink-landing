'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Monitor, Smartphone, Calendar, Users, Plane, BookOpen, BarChart3, FileCheck } from 'lucide-react'

export default function MockupShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      title: "Master Schedule",
      description: "Visualize your entire operation at a glance",
      icon: Calendar,
      image: "/screenshots/master-schedule.png",
      color: "emerald",
      highlights: [
        "Real-time group tracking",
        "Activity management",
        "Flight & transfer coordination",
        "Booking status overview"
      ]
    },
    {
      title: "Agent Portal",
      description: "Empower partners with professional tools",
      icon: Users,
      image: "/screenshots/agencies.png",
      color: "blue",
      highlights: [
        "White-labeled experience",
        "Commission tracking",
        "Automated invoicing",
        "Performance analytics"
      ]
    },
    {
      title: "Group Bookings",
      description: "Streamline the entire booking process",
      icon: FileCheck,
      image: "/screenshots/booking-review.png",
      color: "purple",
      highlights: [
        "Multi-step wizard",
        "Instant pricing",
        "School approval workflow",
        "Document automation"
      ]
    },
    {
      title: "Events Calendar",
      description: "Never miss a beat with smart scheduling",
      icon: Calendar,
      image: "/screenshots/calendar-view.png",
      color: "orange",
      highlights: [
        "Drag-and-drop interface",
        "Resource allocation",
        "Conflict detection",
        "Staff assignments"
      ]
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Mockup - Master Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="relative">
            {/* Browser Frame */}
            <div className="bg-gray-900 rounded-t-xl p-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1 text-center">
                  <div className="bg-gray-800 text-gray-400 text-sm py-1 px-3 rounded inline-block">
                    app.edulink.ie/master-schedule
                  </div>
                </div>
              </div>
            </div>
            
            {/* Screenshot */}
            <div className="bg-white rounded-b-xl shadow-2xl overflow-hidden">
              <img
                src="/screenshots/master-schedule.png"
                alt="EduLink Master Schedule"
                className="w-full"
              />
            </div>

            {/* Feature Callouts */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -right-4 top-1/4 bg-white rounded-lg shadow-lg p-4 max-w-xs hidden lg:block"
            >
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-sm font-semibold text-gray-900">Real-time Updates</span>
              </div>
              <p className="text-xs text-gray-600">
                See arrivals, activities, and departures update instantly across all devices
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -left-4 bottom-1/4 bg-white rounded-lg shadow-lg p-4 max-w-xs hidden lg:block"
            >
              <div className="flex items-center mb-2">
                <Plane className="w-4 h-4 text-blue-500 mr-2" />
                <span className="text-sm font-semibold text-gray-900">Flight Tracking</span>
              </div>
              <p className="text-xs text-gray-600">
                Hover over arrivals to see flight details and coach booking status
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="space-y-16 mb-20">
          {features.slice(1).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Feature Info */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center`}>
                      <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`w-2 h-2 bg-${feature.color}-500 rounded-full mr-3 mt-2`}></div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Large Screenshot */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-xl shadow-2xl">
                    <img
                      src={feature.image}
                      alt={`${feature.title} Screenshot`}
                      className="w-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}