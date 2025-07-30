'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "How long does it take to implement EduLink?",
    answer: "Most schools are up and running within 2-4 weeks. We provide comprehensive onboarding, data migration assistance, and training for your entire team. Our phased approach ensures minimal disruption to your operations."
  },
  {
    question: "Can EduLink integrate with our existing systems?",
    answer: "Yes! EduLink offers robust APIs and pre-built integrations with popular accounting software, email platforms, and payment processors. Our technical team will work with you to ensure seamless connectivity with your current tools."
  },
  {
    question: "What about data migration from our current system?",
    answer: "We handle the entire data migration process for you. Our specialists will securely transfer your student records, agent information, booking history, and financial data. We guarantee no data loss and provide verification reports before going live."
  },
  {
    question: "How secure is our data with EduLink?",
    answer: "Security is our top priority. EduLink uses bank-level encryption, is fully GDPR compliant, and hosted on EU servers. We conduct regular security audits, maintain SOC 2 compliance, and provide detailed access controls and audit trails."
  },
  {
    question: "What kind of support do you provide?",
    answer: "You'll have access to 24/7 email support, business hours phone support, and a dedicated customer success manager. We also provide extensive documentation, video tutorials, and quarterly training sessions for new features."
  },
  {
    question: "Can we customize EduLink for our specific needs?",
    answer: "Absolutely! EduLink is highly configurable. You can customize workflows, create custom fields, set up unique pricing structures, and brand agent portals with your school's identity. Our team will help you tailor the platform to your exact requirements."
  },
  {
    question: "What if we need to scale up or down?",
    answer: "EduLink grows with you. Our flexible pricing model means you only pay for what you use. Whether you're managing 100 or 10,000 students, the platform scales seamlessly without performance issues."
  },
  {
    question: "Do you offer a trial period?",
    answer: "Yes! We offer a 30-day free trial with full access to all features. Our team will help you set up a pilot program with real data so you can experience the full power of EduLink before committing."
  }
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={ref} className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            Frequently Asked Questions
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to <span className="text-emerald-600">Know</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about implementing and using EduLink
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="mailto:hello@edulink.ie"
            className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
          >
            Contact our team →
          </a>
        </motion.div>
      </div>
    </section>
  )
}