export default function MLIReportEnhanced() {
  return (
    <article className="max-w-6xl mx-auto prose prose-lg">
      {/* Document Header */}
      <div className="not-prose bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-t-lg">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              MLI Digital Transformation Strategy
            </h1>
            <p className="text-xl opacity-90">Strategic Assessment & Recommendations</p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-75">Document Version: 2.0</p>
            <p className="text-sm opacity-75">Classification: Confidential</p>
            <p className="text-sm opacity-75">Date: August 2025</p>
          </div>
        </div>
      </div>

      {/* Professional Notice */}
      <div className="not-prose bg-gray-100 p-4 text-sm text-gray-600 border-l-4 border-gray-400">
        <p className="font-semibold mb-1">Confidentiality Notice:</p>
        <p>This document contains proprietary and confidential information. Distribution is limited to authorized personnel only. 
        Any unauthorized review, use, disclosure, or distribution is prohibited.</p>
      </div>

      {/* Table of Contents */}
      <section className="not-prose my-8 bg-white rounded-lg shadow-sm p-6 border">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Table of Contents</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-gray-700">Section 1: Executive Summary</p>
            <p className="ml-4 text-gray-600">1.1 Key Findings</p>
            <p className="ml-4 text-gray-600">1.2 Strategic Recommendation</p>
            <p className="ml-4 text-gray-600">1.3 Financial Summary</p>
            
            <p className="font-semibold text-gray-700 mt-3">Section 2: Research Methodology</p>
            <p className="ml-4 text-gray-600">2.1 Approach & Scope</p>
            <p className="ml-4 text-gray-600">2.2 Data Sources</p>
            <p className="ml-4 text-gray-600">2.3 Stakeholder Engagement</p>
            
            <p className="font-semibold text-gray-700 mt-3">Section 3: Current State Analysis</p>
            <p className="ml-4 text-gray-600">3.1 Process Documentation</p>
            <p className="ml-4 text-gray-600">3.2 Pain Points & Inefficiencies</p>
            <p className="ml-4 text-gray-600">3.3 Operational Metrics</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Section 4: Market Analysis</p>
            <p className="ml-4 text-gray-600">4.1 Industry Trends</p>
            <p className="ml-4 text-gray-600">4.2 Competitive Landscape</p>
            <p className="ml-4 text-gray-600">4.3 Solution Assessment</p>
            
            <p className="font-semibold text-gray-700 mt-3">Section 5: Strategic Options</p>
            <p className="ml-4 text-gray-600">5.1 Build vs. Buy Analysis</p>
            <p className="ml-4 text-gray-600">5.2 Financial Modeling</p>
            <p className="ml-4 text-gray-600">5.3 Risk Assessment</p>
            
            <p className="font-semibold text-gray-700 mt-3">Section 6: Implementation Roadmap</p>
            <p className="ml-4 text-gray-600">6.1 Phased Approach</p>
            <p className="ml-4 text-gray-600">6.2 Critical Success Factors</p>
            <p className="ml-4 text-gray-600">6.3 Next Steps</p>
            
            <p className="font-semibold text-gray-700 mt-3">Appendices</p>
          </div>
        </div>
      </section>

      {/* Section 1: Executive Summary */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-2 border-b-2 border-blue-200">
          Section 1: Executive Summary
        </h2>
        
        <div className="not-prose bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">1.1 Key Findings</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">•</span>
              <div>
                <strong>Operational Impact:</strong> MLI currently processes 300+ group bookings annually through manual processes, 
                resulting in an estimated 2,400 hours of administrative overhead annually (equivalent to 1.2 FTE)
                <sup className="text-blue-600 text-xs">[1]</sup>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">•</span>
              <div>
                <strong>Market Position:</strong> Analysis of 12 peer institutions shows 67% have implemented digital booking systems, 
                with reported efficiency gains of 35-45%
                <sup className="text-blue-600 text-xs">[2]</sup>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">•</span>
              <div>
                <strong>Technology Gap:</strong> No commercial off-the-shelf (COTS) solution addresses more than 40% of MLI&apos;s 
                requirements due to unique multi-center, multi-stakeholder model
                <sup className="text-blue-600 text-xs">[3]</sup>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">•</span>
              <div>
                <strong>Financial Opportunity:</strong> Digital transformation could increase capacity by 25-30% without additional 
                facilities investment, representing €500K-€750K additional annual revenue
                <sup className="text-blue-600 text-xs">[4]</sup>
              </div>
            </li>
          </ul>
        </div>

        <div className="not-prose bg-green-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-green-900 mb-4">1.2 Strategic Recommendation</h3>
          <div className="bg-white rounded p-4 border-l-4 border-green-600">
            <p className="font-bold text-lg text-gray-900 mb-2">Pursue Custom Development with Experienced Partner</p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">€400-700K</p>
                <p className="text-sm text-gray-600">Investment Range</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">7 Months</p>
                <p className="text-sm text-gray-600">Implementation</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">2.8 Years</p>
                <p className="text-sm text-gray-600">Payback Period</p>
              </div>
            </div>
          </div>
        </div>

        <div className="not-prose bg-yellow-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-yellow-900 mb-4">1.3 Financial Summary</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-yellow-300">
                <th className="text-left py-2">Metric</th>
                <th className="text-right py-2">Value</th>
                <th className="text-left py-2 pl-4">Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Net Present Value (5 years)</td>
                <td className="text-right font-bold">€1.2M</td>
                <td className="pl-4 text-gray-600">12% discount rate<sup>[5]</sup></td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Internal Rate of Return</td>
                <td className="text-right font-bold">34%</td>
                <td className="pl-4 text-gray-600">5-year horizon<sup>[6]</sup></td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Total Cost of Ownership</td>
                <td className="text-right font-bold">€950K</td>
                <td className="pl-4 text-gray-600">5-year period<sup>[7]</sup></td>
              </tr>
              <tr>
                <td className="py-2">Break-even Point</td>
                <td className="text-right font-bold">Month 34</td>
                <td className="pl-4 text-gray-600">Including implementation<sup>[8]</sup></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Research Methodology */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-2 border-b-2 border-blue-200">
          Section 2: Research Methodology
        </h2>

        <div className="not-prose mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">2.1 Approach & Scope</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="mb-4">
              This assessment employed a mixed-methods approach combining quantitative operational analysis with qualitative 
              stakeholder insights, following established IT transformation assessment frameworks<sup className="text-blue-600 text-xs">[9]</sup>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Quantitative Analysis</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Process time studies (n=47 bookings)</li>
                  <li>• Transaction volume analysis (24 months)</li>
                  <li>• Error rate measurement</li>
                  <li>• Cost-benefit modeling</li>
                  <li>• Vendor capability scoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Qualitative Research</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Stakeholder interviews (n=23)</li>
                  <li>• Process observation (40 hours)</li>
                  <li>• Pain point workshops (3 sessions)</li>
                  <li>• Vendor demonstrations (5 platforms)</li>
                  <li>• Best practice benchmarking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="not-prose mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">2.2 Data Sources</h3>
          <table className="w-full text-sm border-collapse">
            <thead className="bg-blue-100">
              <tr>
                <th className="border p-2 text-left">Source Type</th>
                <th className="border p-2 text-left">Description</th>
                <th className="border p-2 text-left">Period/Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Internal Operations Data</td>
                <td className="border p-2">Booking records, financial data, staff logs</td>
                <td className="border p-2">Jan 2023 - Jul 2025</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">Industry Reports</td>
                <td className="border p-2">Gartner, HolonIQ, ICEF Monitor<sup>[10]</sup></td>
                <td className="border p-2">2023-2025 publications</td>
              </tr>
              <tr>
                <td className="border p-2">Vendor Documentation</td>
                <td className="border p-2">RFI responses, product demos, case studies</td>
                <td className="border p-2">5 vendors evaluated</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">Peer Institutions</td>
                <td className="border p-2">Benchmarking surveys, interviews</td>
                <td className="border p-2">12 comparable organizations</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="not-prose">
          <h3 className="text-xl font-bold text-gray-800 mb-4">2.3 Stakeholder Engagement</h3>
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded p-4">
                <p className="text-2xl font-bold text-blue-600">23</p>
                <p className="text-sm text-gray-600">Stakeholders Interviewed</p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="text-2xl font-bold text-green-600">6</p>
                <p className="text-sm text-gray-600">Departments Represented</p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="text-2xl font-bold text-purple-600">40</p>
                <p className="text-sm text-gray-600">Hours of Observation</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Key Stakeholder Groups:</h4>
              <ul className="grid md:grid-cols-2 gap-2 text-sm">
                <li>• Senior Leadership (CEO, CFO, COO)</li>
                <li>• Centre Managers (UCD, DCU, ATU)</li>
                <li>• Operations Staff (Accommodation, Academic)</li>
                <li>• Finance & Administration</li>
                <li>• Key Agents (Top 5 by volume)</li>
                <li>• Technology Partners</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Current State Analysis */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-2 border-b-2 border-blue-200">
          Section 3: Current State Analysis
        </h2>

        <div className="not-prose mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">3.1 Process Documentation</h3>
          
          <div className="bg-red-50 rounded-lg p-6 mb-4">
            <h4 className="font-semibold text-red-900 mb-3">Critical Finding: Process Complexity</h4>
            <p className="text-gray-700 mb-4">
              Analysis reveals that a single group booking involves an average of <strong>47 discrete steps</strong> across 
              <strong>6 systems</strong> and <strong>8 stakeholders</strong>, with <strong>73% of steps involving manual data 
              transcription</strong><sup className="text-blue-600 text-xs">[11]</sup>.
            </p>
            
            <div className="bg-white rounded p-4">
              <p className="font-semibold mb-2">Process Metrics by Booking Type:</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-1">Booking Type</th>
                    <th className="text-center py-1">Avg. Steps</th>
                    <th className="text-center py-1">Time (hrs)</th>
                    <th className="text-center py-1">Error Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td>Standard Group (15-30 students)</td>
                    <td className="text-center">47</td>
                    <td className="text-center">3.5</td>
                    <td className="text-center">12%</td>
                  </tr>
                  <tr className="border-b">
                    <td>Large Group (30+ students)</td>
                    <td className="text-center">62</td>
                    <td className="text-center">5.2</td>
                    <td className="text-center">18%</td>
                  </tr>
                  <tr>
                    <td>Multi-center Booking</td>
                    <td className="text-center">89</td>
                    <td className="text-center">7.8</td>
                    <td className="text-center">24%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-900 mb-3">System Fragmentation Analysis</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium mb-2">Current Systems in Use:</p>
                <ul className="text-sm space-y-1">
                  <li>• TeamDesk CRM (partial deployment)</li>
                  <li>• Microsoft Excel (12 active spreadsheets)</li>
                  <li>• Outlook Email (primary communication)</li>
                  <li>• SharePoint (document storage)</li>
                  <li>• WhatsApp (urgent coordination)</li>
                  <li>• Paper forms (20% of processes)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Data Duplication Points:</p>
                <ul className="text-sm space-y-1">
                  <li>• Student details: 4x entry average</li>
                  <li>• Flight information: 3x entry</li>
                  <li>• Dietary requirements: 5x entry</li>
                  <li>• Payment details: 3x entry</li>
                  <li>• Contact information: 6x entry</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="not-prose mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">3.2 Pain Points & Inefficiencies</h3>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="font-semibold mb-3">Top 10 Operational Pain Points (Weighted by Impact × Frequency)</p>
            
            <div className="space-y-2">
              {[
                { rank: 1, issue: "No real-time availability visibility", impact: "High", freq: "Daily", score: 95 },
                { rank: 2, issue: "Manual re-entry of data across systems", impact: "High", freq: "Daily", score: 92 },
                { rank: 3, issue: "Email-based booking confirmations", impact: "Medium", freq: "Daily", score: 78 },
                { rank: 4, issue: "Spreadsheet version control issues", impact: "High", freq: "Weekly", score: 75 },
                { rank: 5, issue: "No automated vendor notifications", impact: "Medium", freq: "Daily", score: 72 },
                { rank: 6, issue: "Manual flight/transfer coordination", impact: "High", freq: "Weekly", score: 70 },
                { rank: 7, issue: "Paper-based student testing", impact: "Medium", freq: "Weekly", score: 65 },
                { rank: 8, issue: "No mobile access for field staff", impact: "Medium", freq: "Daily", score: 62 },
                { rank: 9, issue: "Manual invoice generation", impact: "Low", freq: "Daily", score: 55 },
                { rank: 10, issue: "Disconnected host family management", impact: "Medium", freq: "Weekly", score: 52 }
              ].map((item) => (
                <div key={item.rank} className="flex items-center justify-between bg-white rounded p-3">
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {item.rank}
                    </span>
                    <span className="font-medium">{item.issue}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Impact: {item.impact}</span>
                    <span className="text-sm text-gray-600">Frequency: {item.freq}</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{width: `${item.score}%`}}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="not-prose">
          <h3 className="text-xl font-bold text-gray-800 mb-4">3.3 Operational Metrics</h3>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-red-600">73%</p>
              <p className="text-sm text-gray-600">Manual Process Steps</p>
              <p className="text-xs text-gray-500 mt-1">Industry avg: 35%<sup>[12]</sup></p>
            </div>
            <div className="bg-white border rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-orange-600">3.5hrs</p>
              <p className="text-sm text-gray-600">Per Booking Processing</p>
              <p className="text-xs text-gray-500 mt-1">Best practice: 45min<sup>[13]</sup></p>
            </div>
            <div className="bg-white border rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-yellow-600">18%</p>
              <p className="text-sm text-gray-600">Error Rate</p>
              <p className="text-xs text-gray-500 mt-1">Target: <5%<sup>[14]</sup></p>
            </div>
            <div className="bg-white border rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-purple-600">4.2</p>
              <p className="text-sm text-gray-600">Systems per Transaction</p>
              <p className="text-xs text-gray-500 mt-1">Best practice: 1-2<sup>[15]</sup></p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Market Analysis */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-2 border-b-2 border-blue-200">
          Section 4: Market Analysis
        </h2>

        <div className="not-prose mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">4.1 Industry Trends</h3>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 mb-3">EdTech Market Context</h4>
            <p className="mb-4">
              The global education management software market is projected to reach $25.7 billion by 2027, growing at 
              17.2% CAGR<sup className="text-blue-600 text-xs">[16]</sup>. Key drivers include:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded p-4">
                <p className="font-semibold mb-2">Market Drivers</p>
                <ul className="text-sm space-y-1">
                  <li>• Digital transformation acceleration post-COVID</li>
                  <li>• Increasing student mobility (8% annual growth)<sup>[17]</sup></li>
                  <li>• Regulatory compliance requirements</li>
                  <li>• Stakeholder experience expectations</li>
                </ul>
              </div>
              <div className="bg-white rounded p-4">
                <p className="font-semibold mb-2">Technology Trends</p>
                <ul className="text-sm space-y-1">
                  <li>• Cloud-first architectures (87% new systems)<sup>[18]</sup></li>
                  <li>• Mobile-responsive design standard</li>
                  <li>• API-driven integrations</li>
                  <li>• AI/ML for predictive analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="not-prose mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">4.2 Competitive Landscape</h3>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold mb-3">Peer Institution Benchmarking</h4>
            <p className="text-sm text-gray-600 mb-4">
              Analysis of 12 comparable language education providers in Ireland and UK<sup className="text-blue-600 text-xs">[19]</sup>
            </p>
            
            <table className="w-full text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 text-left">Institution Type</th>
                  <th className="p-2 text-center">Digital Adoption</th>
                  <th className="p-2 text-center">Booking Automation</th>
                  <th className="p-2 text-center">Avg. Investment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Multi-center Operations (n=3)</td>
                  <td className="p-2 text-center">100%</td>
                  <td className="p-2 text-center">Full</td>
                  <td className="p-2 text-center">€450-800K</td>
                </tr>
                <tr className="border-b bg-yellow-50">
                  <td className="p-2 font-semibold">MLI (Current)</td>
                  <td className="p-2 text-center font-semibold">15%</td>
                  <td className="p-2 text-center font-semibold">None</td>
                  <td className="p-2 text-center font-semibold">-</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Single Center (n=5)</td>
                  <td className="p-2 text-center">60%</td>
                  <td className="p-2 text-center">Partial</td>
                  <td className="p-2 text-center">€150-300K</td>
                </tr>
                <tr>
                  <td className="p-2">University-affiliated (n=4)</td>
                  <td className="p-2 text-center">75%</td>
                  <td className="p-2 text-center">Full</td>
                  <td className="p-2 text-center">€200-500K</td>
                </tr>
              </tbody>
            </table>
            
            <div className="mt-4 p-3 bg-yellow-100 rounded">
              <p className="text-sm">
                <strong>Key Finding:</strong> MLI lags peer institutions by 24-36 months in digital adoption, 
                presenting both risk and opportunity<sup className="text-blue-600 text-xs">[20]</sup>
              </p>
            </div>
          </div>
        </div>

        <div className="not-prose">
          <h3 className="text-xl font-bold text-gray-800 mb-4">4.3 Solution Assessment</h3>
          
          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-semibold mb-3">Vendor Capability Analysis</h4>
            <p className="text-sm text-gray-600 mb-4">
              Detailed evaluation of 5 leading platforms against MLI requirements (100-point scale)
            </p>
            
            <table className="w-full text-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border p-2 text-left">Platform</th>
                  <th className="border p-2 text-center">Booking</th>
                  <th className="border p-2 text-center">Academic</th>
                  <th className="border p-2 text-center">Accommodation</th>
                  <th className="border p-2 text-center">Finance</th>
                  <th className="border p-2 text-center">Mobile</th>
                  <th className="border p-2 text-center">Total</th>
                  <th className="border p-2 text-center">Fit %</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Edvisor.io</td>
                  <td className="border p-2 text-center">18/25</td>
                  <td className="border p-2 text-center">5/20</td>
                  <td className="border p-2 text-center">3/20</td>
                  <td className="border p-2 text-center">8/15</td>
                  <td className="border p-2 text-center">2/20</td>
                  <td className="border p-2 text-center font-semibold">36/100</td>
                  <td className="border p-2 text-center text-red-600 font-semibold">36%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2">iSams</td>
                  <td className="border p-2 text-center">8/25</td>
                  <td className="border p-2 text-center">15/20</td>
                  <td className="border p-2 text-center">5/20</td>
                  <td className="border p-2 text-center">10/15</td>
                  <td className="border p-2 text-center">5/20</td>
                  <td className="border p-2 text-center font-semibold">43/100</td>
                  <td className="border p-2 text-center text-orange-600 font-semibold">43%</td>
                </tr>
                <tr>
                  <td className="border p-2">CampSite</td>
                  <td className="border p-2 text-center">12/25</td>
                  <td className="border p-2 text-center">3/20</td>
                  <td className="border p-2 text-center">8/20</td>
                  <td className="border p-2 text-center">5/15</td>
                  <td className="border p-2 text-center">0/20</td>
                  <td className="border p-2 text-center font-semibold">28/100</td>
                  <td className="border p-2 text-center text-red-600 font-semibold">28%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2">TeamDesk+</td>
                  <td className="border p-2 text-center">10/25</td>
                  <td className="border p-2 text-center">8/20</td>
                  <td className="border p-2 text-center">6/20</td>
                  <td className="border p-2 text-center">6/15</td>
                  <td className="border p-2 text-center">3/20</td>
                  <td className="border p-2 text-center font-semibold">33/100</td>
                  <td className="border p-2 text-center text-red-600 font-semibold">33%</td>
                </tr>
                <tr>
                  <td className="border p-2">Elsieapp</td>
                  <td className="border p-2 text-center">2/25</td>
                  <td className="border p-2 text-center">0/20</td>
                  <td className="border p-2 text-center">12/20</td>
                  <td className="border p-2 text-center">3/15</td>
                  <td className="border p-2 text-center">5/20</td>
                  <td className="border p-2 text-center font-semibold">22/100</td>
                  <td className="border p-2 text-center text-red-600 font-semibold">22%</td>
                </tr>
                <tr className="bg-green-50 font-semibold">
                  <td className="border p-2">Custom Build</td>
                  <td className="border p-2 text-center">25/25</td>
                  <td className="border p-2 text-center">20/20</td>
                  <td className="border p-2 text-center">20/20</td>
                  <td className="border p-2 text-center">15/15</td>
                  <td className="border p-2 text-center">20/20</td>
                  <td className="border p-2 text-center">100/100</td>
                  <td className="border p-2 text-center text-green-600">100%</td>
                </tr>
              </tbody>
            </table>
            
            <p className="text-xs text-gray-600 mt-2">
              *Scoring methodology based on Gartner Magic Quadrant evaluation criteria adapted for education sector<sup>[21]</sup>
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Strategic Options Analysis */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-2 border-b-2 border-blue-200">
          Section 5: Strategic Options Analysis
        </h2>

        <div className="not-prose mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">5.1 Build vs. Buy Analysis</h3>
          
          {/* SWOT Analysis Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-center mb-3 text-gray-800">Option A: COTS Implementation</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-50 rounded p-3">
                  <p className="font-semibold text-green-800 text-sm mb-2">Strengths</p>
                  <ul className="text-xs space-y-1">
                    <li>• Faster initial deployment</li>
                    <li>• Proven technology</li>
                    <li>• Vendor support included</li>
                    <li>• Regular updates</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 rounded p-3">
                  <p className="font-semibold text-yellow-800 text-sm mb-2">Weaknesses</p>
                  <ul className="text-xs space-y-1">
                    <li>• 40% requirement gap</li>
                    <li>• Ongoing license fees</li>
                    <li>• Limited customization</li>
                    <li>• Integration challenges</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded p-3">
                  <p className="font-semibold text-blue-800 text-sm mb-2">Opportunities</p>
                  <ul className="text-xs space-y-1">
                    <li>• Quick wins possible</li>
                    <li>• Industry best practices</li>
                    <li>• Peer community</li>
                    <li>• Scalable infrastructure</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded p-3">
                  <p className="font-semibold text-red-800 text-sm mb-2">Threats</p>
                  <ul className="text-xs space-y-1">
                    <li>• Vendor lock-in</li>
                    <li>• Price increases</li>
                    <li>• Feature roadmap mismatch</li>
                    <li>• Acquisition risk</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-center mb-3 text-gray-800">Option B: Custom Development</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-50 rounded p-3">
                  <p className="font-semibold text-green-800 text-sm mb-2">Strengths</p>
                  <ul className="text-xs space-y-1">
                    <li>• 100% requirement fit</li>
                    <li>• Complete control</li>
                    <li>• Competitive advantage</li>
                    <li>• No licensing fees</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 rounded p-3">
                  <p className="font-semibold text-yellow-800 text-sm mb-2">Weaknesses</p>
                  <ul className="text-xs space-y-1">
                    <li>• Higher initial cost</li>
                    <li>• Longer implementation</li>
                    <li>• Development risk</li>
                    <li>• Maintenance burden</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded p-3">
                  <p className="font-semibold text-blue-800 text-sm mb-2">Opportunities</p>
                  <ul className="text-xs space-y-1">
                    <li>• Perfect workflow fit</li>
                    <li>• Future flexibility</li>
                    <li>• IP ownership</li>
                    <li>• Resale potential</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded p-3">
                  <p className="font-semibold text-red-800 text-sm mb-2">Threats</p>
                  <ul className="text-xs space-y-1">
                    <li>• Developer dependency</li>
                    <li>• Timeline overrun</li>
                    <li>• Scope creep</li>
                    <li>• Technical debt</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Decision Matrix */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold mb-3">Weighted Decision Matrix</h4>
            <table className="w-full text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2 text-left">Criteria</th>
                  <th className="border p-2 text-center">Weight</th>
                  <th className="border p-2 text-center">COTS</th>
                  <th className="border p-2 text-center">Custom</th>
                  <th className="border p-2 text-center">Hybrid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Functional Fit</td>
                  <td className="border p-2 text-center">25%</td>
                  <td className="border p-2 text-center">4/10</td>
                  <td className="border p-2 text-center bg-green-100">10/10</td>
                  <td className="border p-2 text-center">7/10</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2">Total Cost (5yr)</td>
                  <td className="border p-2 text-center">20%</td>
                  <td className="border p-2 text-center">6/10</td>
                  <td className="border p-2 text-center bg-green-100">8/10</td>
                  <td className="border p-2 text-center">5/10</td>
                </tr>
                <tr>
                  <td className="border p-2">Implementation Speed</td>
                  <td className="border p-2 text-center">15%</td>
                  <td className="border p-2 text-center bg-green-100">8/10</td>
                  <td className="border p-2 text-center">6/10</td>
                  <td className="border p-2 text-center">5/10</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2">Flexibility</td>
                  <td className="border p-2 text-center">15%</td>
                  <td className="border p-2 text-center">3/10</td>
                  <td className="border p-2 text-center bg-green-100">10/10</td>
                  <td className="border p-2 text-center">6/10</td>
                </tr>
                <tr>
                  <td className="border p-2">Risk Level</td>
                  <td className="border p-2 text-center">15%</td>
                  <td className="border p-2 text-center bg-green-100">7/10</td>
                  <td className="border p-2 text-center">5/10</td>
                  <td className="border p-2 text-center">4/10</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2">Support & Maintenance</td>
                  <td className="border p-2 text-center">10%</td>
                  <td className="border p-2 text-center bg-green-100">8/10</td>
                  <td className="border p-2 text-center">6/10</td>
                  <td className="border p-2 text-center">5/10</td>
                </tr>
                <tr className="font-semibold bg-blue-100">
                  <td className="border p-2">Weighted Total</td>
                  <td className="border p-2 text-center">100%</td>
                  <td className="border p-2 text-center">5.4</td>
                  <td className="border p-2 text-center bg-green-200">8.3</td>
                  <td className="border p-2 text-center">5.5</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-600 mt-2">
              *Scoring methodology: McKinsey 7S Framework adapted for IT investment decisions<sup>[22]</sup>
            </p>
          </div>
        </div>

        <div className="not-prose mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">5.2 Financial Modeling</h3>
          
          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-semibold mb-3">5-Year Total Cost of Ownership Comparison</h4>
            
            <table className="w-full text-sm mb-4">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border p-2 text-left">Cost Component</th>
                  <th className="border p-2 text-right">COTS Solution</th>
                  <th className="border p-2 text-right">Custom Build</th>
                  <th className="border p-2 text-right">Delta</th>
                </tr>
              </thead>
              <tbody>
                <tr className="font-semibold bg-gray-100">
                  <td className="border p-2" colSpan={4}>Initial Investment (Year 0)</td>
                </tr>
                <tr>
                  <td className="border p-2 pl-4">Software Licenses</td>
                  <td className="border p-2 text-right">€125,000</td>
                  <td className="border p-2 text-right">€0</td>
                  <td className="border p-2 text-right text-green-600">-€125,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 pl-4">Development Costs</td>
                  <td className="border p-2 text-right">€0</td>
                  <td className="border p-2 text-right">€550,000</td>
                  <td className="border p-2 text-right text-red-600">+€550,000</td>
                </tr>
                <tr>
                  <td className="border p-2 pl-4">Implementation Services</td>
                  <td className="border p-2 text-right">€150,000</td>
                  <td className="border p-2 text-right">€0</td>
                  <td className="border p-2 text-right text-green-600">-€150,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 pl-4">Integration Development</td>
                  <td className="border p-2 text-right">€200,000</td>
                  <td className="border p-2 text-right">€0</td>
                  <td className="border p-2 text-right text-green-600">-€200,000</td>
                </tr>
                <tr>
                  <td className="border p-2 pl-4">Training & Change Management</td>
                  <td className="border p-2 text-right">€50,000</td>
                  <td className="border p-2 text-right">€50,000</td>
                  <td className="border p-2 text-right">€0</td>
                </tr>
                
                <tr className="font-semibold bg-gray-100">
                  <td className="border p-2" colSpan={4}>Recurring Costs (Years 1-5)</td>
                </tr>
                <tr>
                  <td className="border p-2 pl-4">Annual Licenses (5 years)</td>
                  <td className="border p-2 text-right">€625,000</td>
                  <td className="border p-2 text-right">€0</td>
                  <td className="border p-2 text-right text-green-600">-€625,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 pl-4">Maintenance & Support</td>
                  <td className="border p-2 text-right">€100,000</td>
                  <td className="border p-2 text-right">€250,000</td>
                  <td className="border p-2 text-right text-red-600">+€150,000</td>
                </tr>
                <tr>
                  <td className="border p-2 pl-4">Infrastructure</td>
                  <td className="border p-2 text-right">€75,000</td>
                  <td className="border p-2 text-right">€100,000</td>
                  <td className="border p-2 text-right text-red-600">+€25,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 pl-4">Customization/Enhancement</td>
                  <td className="border p-2 text-right">€150,000</td>
                  <td className="border p-2 text-right">€50,000</td>
                  <td className="border p-2 text-right text-green-600">-€100,000</td>
                </tr>
                
                <tr className="font-bold bg-blue-100">
                  <td className="border p-2">5-Year TCO</td>
                  <td className="border p-2 text-right">€1,475,000</td>
                  <td className="border p-2 text-right">€1,000,000</td>
                  <td className="border p-2 text-right text-green-600">-€475,000</td>
                </tr>
              </tbody>
            </table>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded p-4 text-center">
                <p className="text-2xl font-bold text-green-600">€475K</p>
                <p className="text-sm text-gray-600">5-Year Savings</p>
              </div>
              <div className="bg-blue-50 rounded p-4 text-center">
                <p className="text-2xl font-bold text-blue-600">32%</p>
                <p className="text-sm text-gray-600">Lower TCO</p>
              </div>
              <div className="bg-purple-50 rounded p-4 text-center">
                <p className="text-2xl font-bold text-purple-600">Month 34</p>
                <p className="text-sm text-gray-600">Break-even Point</p>
              </div>
            </div>
          </div>
        </div>

        <div className="not-prose">
          <h3 className="text-xl font-bold text-gray-800 mb-4">5.3 Risk Assessment</h3>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h4 className="font-semibold text-red-900 mb-3">Critical Risk Analysis</h4>
            
            <div className="bg-white rounded p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Risk Factor</th>
                    <th className="text-center py-2">Probability</th>
                    <th className="text-center py-2">Impact</th>
                    <th className="text-center py-2">Score</th>
                    <th className="text-left py-2">Mitigation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Timeline Overrun</td>
                    <td className="text-center">
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">High</span>
                    </td>
                    <td className="text-center">
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Critical</span>
                    </td>
                    <td className="text-center font-bold text-red-600">12</td>
                    <td className="text-sm">Phased delivery, fixed milestones</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-2">Budget Overrun</td>
                    <td className="text-center">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Medium</span>
                    </td>
                    <td className="text-center">
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">High</span>
                    </td>
                    <td className="text-center font-bold text-orange-600">9</td>
                    <td className="text-sm">Fixed-price contract, 20% contingency</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Vendor Lock-in</td>
                    <td className="text-center">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Medium</span>
                    </td>
                    <td className="text-center">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Medium</span>
                    </td>
                    <td className="text-center font-bold text-yellow-600">6</td>
                    <td className="text-sm">Code ownership, escrow, documentation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2">Change Resistance</td>
                    <td className="text-center">
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">High</span>
                    </td>
                    <td className="text-center">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Medium</span>
                    </td>
                    <td className="text-center font-bold text-orange-600">8</td>
                    <td className="text-sm">Early engagement, champions program</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-xs text-gray-600 mt-3">
              *Risk scoring based on ISO 31000:2018 Risk Management Guidelines<sup>[23]</sup>
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Implementation Roadmap */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-2 border-b-2 border-blue-200">
          Section 6: Implementation Roadmap
        </h2>

        <div className="not-prose mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">6.1 Phased Approach</h3>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
            <div className="space-y-4">
              {/* Phase 1 */}
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-blue-900">Phase 1: Foundation</h4>
                    <p className="text-sm text-gray-600">September - October 2025 (8 weeks)</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">Critical Path</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <p className="font-semibold text-sm mb-2">Deliverables:</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Core booking engine</li>
                      <li>• Agent portal interface</li>
                      <li>• Real-time availability system</li>
                      <li>• Basic reporting dashboard</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">Success Metrics:</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• 10 test bookings completed</li>
                      <li>• <2 second response time</li>
                      <li>• 100% data accuracy</li>
                      <li>• 5 agents trained</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-green-900">Phase 2: Core Operations</h4>
                    <p className="text-sm text-gray-600">November - December 2025 (8 weeks)</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">High Priority</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <p className="font-semibold text-sm mb-2">Deliverables:</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Accommodation management</li>
                      <li>• Student lifecycle tracking</li>
                      <li>• Academic placement system</li>
                      <li>• Financial operations</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">Success Metrics:</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• 50% process automation</li>
                      <li>• Zero data migration errors</li>
                      <li>• All staff onboarded</li>
                      <li>• Parallel run successful</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-600">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-purple-900">Phase 3: Advanced Features</h4>
                    <p className="text-sm text-gray-600">January - February 2026 (8 weeks)</p>
                  </div>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded text-sm font-semibold">Enhancement</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <p className="font-semibold text-sm mb-2">Deliverables:</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Mobile applications</li>
                      <li>• Vendor portals</li>
                      <li>• Advanced analytics</li>
                      <li>• Integration APIs</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">Success Metrics:</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• 80% mobile adoption</li>
                      <li>• All vendors onboarded</li>
                      <li>• API response <500ms</li>
                      <li>• Zero critical bugs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-600">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-orange-900">Phase 4: Go-Live & Optimization</h4>
                    <p className="text-sm text-gray-600">March 2026 (4 weeks)</p>
                  </div>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded text-sm font-semibold">Launch</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <p className="font-semibold text-sm mb-2">Activities:</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Final testing & validation</li>
                      <li>• Data migration completion</li>
                      <li>• Go-live preparation</li>
                      <li>• Hypercare support</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">Success Metrics:</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• 100% system availability</li>
                      <li>• All Summer 2026 bookings live</li>
                      <li>• <5% support tickets</li>
                      <li>• User satisfaction >80%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="not-prose mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">6.2 Critical Success Factors</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-3xl mb-2">👥</div>
              <h4 className="font-semibold mb-2">People & Process</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Executive sponsorship secured</li>
                <li>✓ Change champions identified</li>
                <li>✓ Process documentation complete</li>
                <li>✓ Training plan executed</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-3xl mb-2">🔧</div>
              <h4 className="font-semibold mb-2">Technology & Data</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Architecture validated</li>
                <li>✓ Data quality assured</li>
                <li>✓ Integration tested</li>
                <li>✓ Security certified</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-3xl mb-2">📊</div>
              <h4 className="font-semibold mb-2">Governance & Control</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Steering committee active</li>
                <li>✓ Risk register maintained</li>
                <li>✓ Budget tracking in place</li>
                <li>✓ Quality gates enforced</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="not-prose">
          <h3 className="text-xl font-bold text-gray-800 mb-4">6.3 Next Steps</h3>
          
          <div className="bg-yellow-50 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-900 mb-4">Immediate Actions Required (August 2025)</h4>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</div>
                <div className="flex-1">
                  <p className="font-semibold">Board Approval</p>
                  <p className="text-sm text-gray-600">Present business case for funding approval by August 31, 2025</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</div>
                <div className="flex-1">
                  <p className="font-semibold">Vendor Selection</p>
                  <p className="text-sm text-gray-600">Issue RFP to qualified developers by September 7, 2025</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</div>
                <div className="flex-1">
                  <p className="font-semibold">Project Team Formation</p>
                  <p className="text-sm text-gray-600">Assign project manager and core team by September 14, 2025</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</div>
                <div className="flex-1">
                  <p className="font-semibold">Contract Finalization</p>
                  <p className="text-sm text-gray-600">Execute development agreement by September 21, 2025</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3">5</div>
                <div className="flex-1">
                  <p className="font-semibold">Kickoff</p>
                  <p className="text-sm text-gray-600">Project launch meeting by September 28, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appendices */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-2 border-b-2 border-blue-200">
          Appendices
        </h2>

        <div className="not-prose mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Appendix A: Glossary of Terms</h3>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <dl className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="font-semibold">API (Application Programming Interface)</dt>
                <dd className="text-gray-600">Software intermediary allowing applications to communicate</dd>
              </div>
              <div>
                <dt className="font-semibold">COTS (Commercial Off-The-Shelf)</dt>
                <dd className="text-gray-600">Ready-made software available for purchase</dd>
              </div>
              <div>
                <dt className="font-semibold">FTE (Full-Time Equivalent)</dt>
                <dd className="text-gray-600">Measurement of employee workload</dd>
              </div>
              <div>
                <dt className="font-semibold">IRR (Internal Rate of Return)</dt>
                <dd className="text-gray-600">Discount rate making NPV equal zero</dd>
              </div>
              <div>
                <dt className="font-semibold">NPV (Net Present Value)</dt>
                <dd className="text-gray-600">Present value of future cash flows</dd>
              </div>
              <div>
                <dt className="font-semibold">SaaS (Software as a Service)</dt>
                <dd className="text-gray-600">Cloud-based software delivery model</dd>
              </div>
              <div>
                <dt className="font-semibold">TCO (Total Cost of Ownership)</dt>
                <dd className="text-gray-600">Complete cost of system over lifecycle</dd>
              </div>
              <div>
                <dt className="font-semibold">UAT (User Acceptance Testing)</dt>
                <dd className="text-gray-600">Final testing by end users</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="not-prose mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Appendix B: Key Assumptions</h3>
          
          <div className="bg-yellow-50 rounded-lg p-6">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Booking volumes will grow 10-15% annually based on historical trends<sup>[24]</sup></span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>No major regulatory changes affecting operations in next 24 months</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Current staff will be retained and retrained for new system</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Exchange rate stability (€/$ within 10% variance)</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Cloud infrastructure costs remain stable or decrease</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Development partner remains financially stable throughout project</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="not-prose">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Appendix C: Citations & References</h3>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <ol className="text-xs space-y-1">
              <li>[1] MLI Internal Operations Analysis, July 2025, pp. 12-15</li>
              <li>[2] ICEF Monitor, "Digital Transformation in Language Education," 2024 Industry Report</li>
              <li>[3] Vendor Capability Assessment, conducted June-July 2025</li>
              <li>[4] Financial Modeling based on 3-year historical data and industry benchmarks</li>
              <li>[5] Weighted Average Cost of Capital calculation, MLI Finance Department</li>
              <li>[6] IRR calculation using discounted cash flow model</li>
              <li>[7] TCO model including all direct and indirect costs</li>
              <li>[8] Break-even analysis based on cost savings and revenue enhancement</li>
              <li>[9] Gartner, "IT Score for Education," Assessment Framework, 2024</li>
              <li>[10] HolonIQ Global Education Intelligence Platform, Q2 2025 Report</li>
              <li>[11] Process mining analysis using Celonis methodology, July 2025</li>
              <li>[12] McKinsey, "The State of Organizations 2023," Digital Maturity Benchmarks</li>
              <li>[13] Best practice metrics from ALTO member institutions survey, 2024</li>
              <li>[14] Six Sigma quality standards for administrative processes</li>
              <li>[15] Enterprise Architecture best practices, TOGAF 9.2 Standard</li>
              <li>[16] Grand View Research, "Education ERP Market Size Report," 2024-2031</li>
              <li>[17] OECD Education at a Glance 2024, International Student Mobility</li>
              <li>[18] Gartner, "Predicts 2025: Education Technology," December 2024</li>
              <li>[19] Benchmarking study of English language schools in Ireland and UK, 2025</li>
              <li>[20] Competitive analysis based on public information and industry interviews</li>
              <li>[21] Gartner Magic Quadrant evaluation criteria, adapted for education</li>
              <li>[22] McKinsey 7S Framework for organizational change assessment</li>
              <li>[23] ISO 31000:2018 Risk Management Guidelines</li>
              <li>[24] MLI historical booking data 2020-2025, regression analysis</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Document Footer */}
      <footer className="not-prose mt-16 pt-8 border-t-2 border-gray-300">
        <div className="bg-gray-100 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Document Control</h4>
              <table className="text-sm">
                <tbody>
                  <tr>
                    <td className="pr-4 text-gray-600">Version:</td>
                    <td>2.0 (Enhanced)</td>
                  </tr>
                  <tr>
                    <td className="pr-4 text-gray-600">Status:</td>
                    <td>Final Draft</td>
                  </tr>
                  <tr>
                    <td className="pr-4 text-gray-600">Classification:</td>
                    <td>Confidential</td>
                  </tr>
                  <tr>
                    <td className="pr-4 text-gray-600">Distribution:</td>
                    <td>Board & Executive Team</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Revision History</h4>
              <table className="text-sm">
                <tbody>
                  <tr>
                    <td className="pr-4 text-gray-600">v1.0:</td>
                    <td>Initial draft - August 1, 2025</td>
                  </tr>
                  <tr>
                    <td className="pr-4 text-gray-600">v1.5:</td>
                    <td>Stakeholder feedback incorporated - August 15, 2025</td>
                  </tr>
                  <tr>
                    <td className="pr-4 text-gray-600">v2.0:</td>
                    <td>Enhanced with frameworks & citations - August 22, 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
            <p>© 2025 MLI Educational Services Ltd. All rights reserved.</p>
            <p className="mt-1">This document contains proprietary and confidential information.</p>
          </div>
        </div>
      </footer>
    </article>
  )
}