'use client'

import { MapPin, Link2 } from 'lucide-react'

export default function CTA() {
  return (
    <>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mr-3">
                  <Link2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">EduLink</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Building the future of language school management. 
                Designed specifically for Irish ELTOs, launching November 2025.
              </p>
              <div className="flex items-center space-x-2 text-emerald-400 mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Dublin, Ireland</span>
              </div>
              <p className="text-gray-400 text-sm">
                <a href="mailto:hello@edulink.ie" className="hover:text-emerald-400 transition-colors">
                  hello@edulink.ie
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-emerald-400">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><span className="text-gray-500">More Coming Soon</span></li>
                <li><a href="#" className="hover:text-white transition-colors">Early Access</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-emerald-400">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="mailto:hello@edulink.ie" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center">
              <div className="text-gray-400 text-sm">
                &copy; 2025 EduLink. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}