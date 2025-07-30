'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Users, Globe, Calendar, Shield, 
  Smartphone, BarChart3, Link, Zap,
  GraduationCap, Building2, Plane, Home,
  CreditCard, FileCheck, Bell, Cloud
} from 'lucide-react'

export default function FeaturesEcosystem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const ecosystemFeatures = [
    {
      category: "Student Management",
      icon: GraduationCap,
      color: "blue",
      features: [
        "Complete lifecycle tracking from inquiry to alumni",
        "Digital enrollment and document management",
        "Academic progress monitoring and reporting",
        "Automated certificate generation"
      ]
    },
    {
      category: "Agent Network",
      icon: Globe,
      color: "purple",
      features: [
        "Branded agent portals with custom domains",
        "Tier-based pricing and commission structures",
        "Real-time inventory and availability",
        "Automated invoicing and payment tracking"
      ]
    },
    {
      category: "Accommodation",
      icon: Home,
      color: "orange",
      features: [
        "Host family and residence management",
        "Availability calendars and booking system",
        "Student-accommodation matching",
        "Quality assurance and feedback loops"
      ]
    },
    {
      category: "Activities & Transport",
      icon: Plane,
      color: "green",
      features: [
        "Excursion planning and vendor management",
        "Airport transfer coordination",
        "Activity booking and attendance tracking",
        "Vendor payment automation"
      ]
    },
    {
      category: "Financial Control",
      icon: CreditCard,
      color: "pink",
      features: [
        "Multi-currency support and conversion",
        "Automated billing and payment reminders",
        "Commission calculations and disbursements",
        "Real-time financial reporting"
      ]
    },
    {
      category: "Compliance & Security",
      icon: Shield,
      color: "red",
      features: [
        "GDPR-compliant data management",
        "Automated consent tracking",
        "Secure document storage",
        "Audit trails and compliance reporting"
      ]
    }
  ]


  const colorClasses: Record<string, string> = {
    blue: "bg-blue-100 text-blue-600 border-blue-200",
    purple: "bg-purple-100 text-purple-600 border-purple-200",
    orange: "bg-orange-100 text-orange-600 border-orange-200",
    green: "bg-green-100 text-green-600 border-green-200",
    pink: "bg-pink-100 text-pink-600 border-pink-200",
    red: "bg-red-100 text-red-600 border-red-200"
  }

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden" id="features">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete <span className="text-emerald-600">Ecosystem</span> Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every aspect of your language school operations, integrated and automated.
          </p>
        </motion.div>

        {/* Ecosystem Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ecosystemFeatures.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClasses[category.color]}`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{category.category}</h3>
              <ul className="space-y-2">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}