import Link from 'next/link'

export default function ClientPortal() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Client Documents</h1>
        <p className="mt-2 text-gray-600">Access your confidential reports and documentation</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link 
          href="/client/mli-report"
          className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-xs text-gray-500 font-medium">STRATEGIC</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            MLI Digital Transformation Strategy
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Strategic Assessment & Recommendations for transforming from manual operations to scalable growth
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span>August 2025</span>
            <span className="mx-2">•</span>
            <span>Full Report</span>
          </div>
        </Link>

        <Link 
          href="/client/mli-operations"
          className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-xs text-gray-500 font-medium">TECHNICAL</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Complete Operations Management System
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Comprehensive scope document detailing the full system architecture, features, and implementation plan
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span>August 2025</span>
            <span className="mx-2">•</span>
            <span>Version 1.0</span>
          </div>
        </Link>

        <div className="block p-6 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <p className="text-gray-500 text-sm">More documents coming soon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> These documents are confidential and intended for authorized personnel only. 
          Please do not share access credentials or document contents with unauthorized parties.
        </p>
      </div>
    </div>
  )
}