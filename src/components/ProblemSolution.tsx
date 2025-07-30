'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FileSpreadsheet, Mail, 
  Shuffle, Clock, TrendingDown, Shield
} from 'lucide-react'

export default function ProblemSolution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const problems = [
    {
      icon: FileSpreadsheet,
      title: "Spreadsheet Chaos",
      description: "Managing students across disconnected Excel files leads to errors, duplicates, and lost data."
    },
    {
      icon: Mail,
      title: "Email Overload",
      description: "Critical information buried in endless email threads between agents, vendors, and staff."
    },
    {
      icon: Shuffle,
      title: "System Fragmentation",
      description: "Using multiple different tools that don't talk to each other, creating data silos and workflow bottlenecks."
    },
    {
      icon: Shield,
      title: "Compliance Nightmares",
      description: "GDPR violations waiting to happen with student data scattered across unsecured systems."
    },
    {
      icon: Clock,
      title: "Manual Time Drain",
      description: "Staff spending too much time on repetitive admin tasks instead of student success."
    },
    {
      icon: TrendingDown,
      title: "Revenue Leakage",
      description: "Lost bookings, forgotten commissions, and billing errors impacting your bottom line."
    }
  ]

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Hidden Cost of <span className="text-red-600">Outdated Systems</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Language schools lose time, money, and opportunities every day due to fragmented, 
            manual processes. It&apos;s time for a change.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-red-200 hover:bg-red-50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}