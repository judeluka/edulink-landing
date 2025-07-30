'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Users, Calendar, MapPin, DollarSign, 
  Clock, Globe, BookOpen, Award,
  Building, Plane, CheckCircle
} from 'lucide-react'

export default function ScrollFeatures() {
  return (
    <div className="space-y-20">
      <StudentManagementSection />
      <AgentPortalSection />
      <ActivityCoordinationSection />
    </div>
  )
}

function StudentManagementSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Users className="w-12 h-12 text-emerald-600 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Student Lifecycle Management
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Track every student from initial inquiry through graduation. Built specifically 
              for Irish language schools with MEI standards in mind.
            </p>
            <div className="space-y-4">
              {[
                "Initial inquiry and application processing",
                "Course placement and level assessment", 
                "Accommodation arrangements with Irish providers",
                "Progress tracking and reporting",
                "Certificate generation and completion ceremonies"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-xl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Sample Student Journey</h3>
            <div className="space-y-4">
              {[
                { status: "completed", label: "Initial Inquiry", date: "Week 1", details: "Via Dublin Language Fair" },
                { status: "completed", label: "Agent Booking", date: "Week 2", details: "Confirmed by international agent" },
                { status: "completed", label: "Accommodation", date: "Week 3", details: "Host Family - Dublin 4" },
                { status: "active", label: "Program Started", date: "Week 4", details: "Intermediate Level - 20 hrs/week" },
                { status: "pending", label: "Progress Review", date: "Week 8", details: "Mid-program assessment" },
                { status: "pending", label: "Graduation", date: "Week 12", details: "Certificate ceremony" }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`flex items-center space-x-4 p-4 rounded-lg ${
                    step.status === 'completed' ? 'bg-green-50 border border-green-200' :
                    step.status === 'active' ? 'bg-blue-50 border border-blue-200' :
                    'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full ${
                    step.status === 'completed' ? 'bg-green-500' :
                    step.status === 'active' ? 'bg-blue-500 animate-pulse' :
                    'bg-gray-300'
                  }`} />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{step.label}</div>
                    <div className="text-sm text-gray-600">{step.details}</div>
                  </div>
                  <div className="text-sm text-gray-500">{step.date}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AgentPortalSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl order-2 lg:order-1"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Sample Agent Dashboard</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Active Bookings", value: "23", trend: "Sample Data" },
                  { label: "Students This Year", value: "156", trend: "Demo Mode" },
                  { label: "Commission Rate", value: "15%", trend: "Example Tier" },
                  { label: "Outstanding Payment", value: "€8,240", trend: "Demo Amount" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                  >
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                    <div className="text-xs text-gray-500 font-medium">{stat.trend}</div>
                  </motion.div>
                ))}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Example Recent Activity</h4>
                <div className="space-y-2">
                  {[
                    "Submitted new group booking request",
                    "Requested accommodation upgrade", 
                    "Downloaded commission statement"
                  ].map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-3 text-sm"
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      <span>{activity}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <Globe className="w-12 h-12 text-emerald-600 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              International Agent Portal System
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Provide your international agents with branded portals featuring tier-based 
              pricing, real-time booking capabilities, and automated commission tracking.
            </p>
            <div className="space-y-4">
              {[
                "Personalized portals for each agent partner",
                "Tier-based pricing and commission structures",
                "Real-time course availability and booking",
                "Automated invoicing and payment tracking",
                "Dedicated support for Irish school branding"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ActivityCoordinationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Calendar className="w-12 h-12 text-emerald-600 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Seamless Activity Coordination
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Coordinate excursions, academic classes, and vendor services with ease. 
              Built for the unique needs of Irish language schools and their activity programs.
            </p>
            <div className="space-y-4">
              {[
                "Excursion planning with Irish tour operators",
                "Academic class scheduling and room management",
                "Vendor coordination for transport and activities",
                "Real-time updates and notifications",
                "Integration with popular Irish destinations"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-xl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Sample Daily Schedule</h3>
            <div className="space-y-4">
              {[
                {
                  time: "09:00",
                  title: "Cliffs of Moher Excursion", 
                  participants: "24 students",
                  status: "scheduled",
                  vendor: "Sample Tour Company"
                },
                {
                  time: "10:30",
                  title: "Business English Workshop",
                  participants: "16 students", 
                  status: "in-progress",
                  location: "Room 3A"
                },
                {
                  time: "14:00",
                  title: "Trinity College Tour",
                  participants: "31 students",
                  status: "confirmed", 
                  vendor: "Campus Tours"
                },
                {
                  time: "19:30",
                  title: "Traditional Irish Music Night",
                  participants: "45 students",
                  status: "planned",
                  venue: "Local Venue"
                }
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`flex items-center justify-between p-4 rounded-lg border ${
                    activity.status === 'in-progress' ? 'bg-blue-50 border-blue-200' :
                    activity.status === 'confirmed' ? 'bg-green-50 border-green-200' :
                    'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{activity.title}</div>
                    <div className="text-sm text-gray-600">{activity.participants}</div>
                    {activity.vendor && (
                      <div className="text-xs text-gray-500">Vendor: {activity.vendor}</div>
                    )}
                    {activity.location && (
                      <div className="text-xs text-gray-500">Location: {activity.location}</div>
                    )}
                    {activity.venue && (
                      <div className="text-xs text-gray-500">Venue: {activity.venue}</div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">{activity.time}</div>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium capitalize ${
                      activity.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      activity.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}