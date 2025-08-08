export default function MLIReport() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg">
      <header className="not-prose mb-8 pb-8 border-b">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          MLI Digital Transformation Strategy: From Manual Operations to Scalable Growth
        </h1>
        <div className="flex items-center gap-4 text-gray-600">
          <span className="font-semibold">Strategic Assessment & Recommendations</span>
          <span>•</span>
          <span>August 2025</span>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          MLI operates three educational centers (UCD, DCU, ATU) processing hundreds of group bookings annually through manual, email-based workflows. This assessment evaluates our current operational constraints and presents a strategic path toward digital transformation.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg my-6">
          <p className="font-semibold text-blue-900 mb-2">Key Finding:</p>
          <p className="text-blue-800">No existing commercial software solution fully addresses MLI's unique multi-center, multi-stakeholder operational model.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <p className="font-semibold text-green-900 mb-2">Recommendation:</p>
          <p className="text-green-800">Engage an external development partner to build a custom digital platform, completing full deployment by March 2026 to capture the critical Summer 2026 booking season.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Current State: Understanding Our Operational Reality</h2>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Anatomy of Inefficiency: A Single Booking</h3>
        <p className="text-gray-700 mb-4">
          To illustrate our current challenges, consider the documented workflow for one group booking (15 students, 1 leader, UCD residential, July 1-15):
        </p>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Data Entry & Coordination</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Manual transcription from email to TeamDesk CRM</li>
              <li>Duplicate entry into Sales Grid spreadsheet</li>
              <li>Manual availability confirmation with UCD accommodation</li>
              <li>Overview schedule check for classroom and staff capacity</li>
              <li>Multi-party email chains for confirmation</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Student Processing</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Individual Microsoft Forms test distribution</li>
              <li>Manual tracking of test returns</li>
              <li>Manual upload of results to CRM</li>
              <li>Manual class placement by Director of Studies</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Vendor & Documentation</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Separate notifications to coaches, catering, center staff</li>
              <li>Manual Word document creation for visa letters</li>
              <li>Disconnected storage in SharePoint</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Travel Logistics</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Manual coordination with multiple airlines for group bookings</li>
              <li>Separate spreadsheet tracking for flight details</li>
              <li>Manual matching of transfer requirements to flight arrivals</li>
              <li>Email-based communication with transfer companies</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 mt-6">
          This process, while manageable for a single booking, becomes exponentially complex when scaled to simultaneous group bookings with ongoing changes.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Identified Operational Constraints</h3>
        <p className="text-gray-700 mb-4">Based on current process documentation:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>No real-time availability visibility</strong> across centers</li>
          <li><strong>No automated workflow progression</strong> between departments</li>
          <li><strong>No unified data repository</strong> - information fragmented across TeamDesk, SharePoint, spreadsheets, and email</li>
          <li><strong>No systematic vendor integration</strong> - all supplier coordination via manual communication</li>
          <li><strong>No mobile access</strong> for on-ground staff operations</li>
          <li><strong>No integrated travel management</strong> - flights and transfers tracked separately from accommodations</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Requirements for Transformation</h2>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Core System Capabilities Needed</h3>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-gray-900 mb-2">1. Unified Booking Platform</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Multi-center inventory management</li>
              <li>Real-time availability across all resources</li>
              <li>Agent self-service portal with instant confirmation capability</li>
              <li>Integrated package pricing including accommodation, programs, and travel</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-gray-900 mb-2">2. Travel & Logistics Management</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Flight booking integration and tracking</li>
              <li>Automated transfer scheduling based on arrival/departure times</li>
              <li>Group travel coordination with real-time updates</li>
              <li>Multi-leg journey management for connecting flights</li>
              <li>Airport meet-and-greet staff scheduling</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-gray-900 mb-2">3. Integrated Operations Management</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Student lifecycle tracking from inquiry to departure</li>
              <li>Staff scheduling and resource allocation</li>
              <li>Academic placement and progress monitoring</li>
              <li>Accommodation management (both residential and host family)</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-gray-900 mb-2">4. Stakeholder Portals</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Agent booking and account management</li>
              <li>Vendor order and fulfillment systems (including airlines and transfer companies)</li>
              <li>Staff mobile applications for on-ground operations</li>
              <li>Student/parent communication interfaces with travel information</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold text-gray-900 mb-2">5. Financial & Compliance Infrastructure</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Multi-currency invoicing and payment tracking</li>
              <li>Automated document generation including travel documents</li>
              <li>Audit trails and regulatory reporting</li>
              <li>Travel insurance tracking and compliance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Solution Landscape Analysis</h2>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Market Assessment Results</h3>
        <p className="text-gray-700 mb-6">Our evaluation of existing solutions reveals critical gaps:</p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3 text-left font-semibold">Platform</th>
                <th className="border p-3 text-left font-semibold">Strengths</th>
                <th className="border p-3 text-left font-semibold">Critical Gaps</th>
                <th className="border p-3 text-center font-semibold">Fit Score</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border p-3 font-medium">Edvisor</td>
                <td className="border p-3">Booking management, agent portals</td>
                <td className="border p-3">No staff management, no travel logistics</td>
                <td className="border p-3 text-center text-red-600 font-semibold">20%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border p-3 font-medium">iSams</td>
                <td className="border p-3">Academic management</td>
                <td className="border p-3">No real-time booking, no travel management</td>
                <td className="border p-3 text-center text-orange-600 font-semibold">35%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border p-3 font-medium">CampSite</td>
                <td className="border p-3">Simple registration</td>
                <td className="border p-3">Single-location only, no travel features</td>
                <td className="border p-3 text-center text-red-600 font-semibold">15%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border p-3 font-medium">TeamDesk</td>
                <td className="border p-3">Customizable platform</td>
                <td className="border p-3">Requires full custom development</td>
                <td className="border p-3 text-center text-orange-600 font-semibold">40%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border p-3 font-medium">Elsieapp</td>
                <td className="border p-3">Host family management</td>
                <td className="border p-3">Limited to accommodation only</td>
                <td className="border p-3 text-center text-red-600 font-semibold">10%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Platform-Specific Limitations</h3>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <strong className="text-gray-900">Edvisor:</strong> Strong booking capabilities but completely lacks staff management, accommodation systems, vendor portals, and critically, any travel management functionality. Would handle only ~20% of our requirements.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <strong className="text-gray-900">iSams:</strong> Excellent for traditional schools but lacks real-time booking, host family management, multi-center architecture, and travel logistics. Designed for academic year, not short-term programs with international travel.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <strong className="text-gray-900">CampSite:</strong> Built for single-location summer camps with simple registration. Cannot handle our agent network, host families, complex multi-center operations, or group flight management.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <strong className="text-gray-900">TeamDesk:</strong> Not a solution but a platform requiring full custom development. Would need extensive programming for every feature including travel management, with significant technical debt risk.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <strong className="text-gray-900">Elsieapp:</strong> Focused exclusively on host family management. Missing critical booking, academic, vendor management, and all travel-related capabilities.
            </p>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mt-6">
          <p className="text-red-900 font-semibold">Critical Gap:</p>
          <p className="text-red-800">No platform offers integrated flight booking, transfer scheduling, or comprehensive travel logistics management essential for international student programs.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Options</h2>

        <div className="space-y-6">
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Option 1: Maintain Current Operations</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Continue with existing manual processes and disconnected systems</li>
              <li>Requires no capital investment</li>
              <li>Limits growth to current operational capacity</li>
              <li>Increasing competitive disadvantage as competitors digitize</li>
              <li>Growing risk in travel coordination complexity</li>
              <li>Risk of key staff departure taking process knowledge</li>
            </ul>
          </div>

          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Option 2: Multi-Platform Integration</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Implement combination of Edvisor + iSams + Elsieapp + separate travel management system</li>
              <li>Requires extensive custom integration development</li>
              <li>Ongoing challenge of data synchronization between platforms</li>
              <li>Multiple vendor dependencies and license fees (estimated €380K+ annually)</li>
              <li>Travel logistics would remain largely manual</li>
              <li>Still requires technical integration expertise</li>
            </ul>
          </div>

          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Option 3: Force-Fit Single Solution</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Adapt operations to match capabilities of iSams or CampSite</li>
              <li>Would require fundamental changes to business model</li>
              <li>Significant functionality gaps would remain manual</li>
              <li>No solution for integrated travel management</li>
              <li>Risk of operational disruption during transition</li>
              <li>Ongoing customization costs likely to approach custom development</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-300 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-900 mb-3">Option 4: Custom Platform Development (Recommended)</h3>
            <ul className="list-disc pl-6 space-y-2 text-green-800">
              <li>Purpose-built for MLI's specific operational model including travel</li>
              <li>Complete integration of all workflows from booking to departure</li>
              <li>Single vendor relationship for development and support</li>
              <li>No ongoing licensing fees beyond hosting and maintenance</li>
              <li>Full ownership of intellectual property</li>
              <li>Achievable by March 2026 with experienced development partner</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Custom Development Approach</h2>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Custom Development Makes Sense for MLI</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">1. Total Cost of Ownership</h4>
            <p className="text-blue-800 text-sm">While initial investment is higher, the absence of annual licensing fees (typically €300-500K for enterprise solutions) means break-even within 3-4 years</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">2. Perfect Fit</h4>
            <p className="text-blue-800 text-sm">System designed exactly for MLI's workflows rather than forcing business processes to match software limitations</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">3. Competitive Advantage</h4>
            <p className="text-blue-800 text-sm">Proprietary technology that competitors cannot easily replicate</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">4. Single Accountability</h4>
            <p className="text-blue-800 text-sm">One development partner responsible for entire solution versus managing multiple vendor relationships</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg md:col-span-2">
            <h4 className="font-semibold text-blue-900 mb-2">5. Future Flexibility</h4>
            <p className="text-blue-800 text-sm">Ability to adapt and enhance system as business evolves without vendor constraints</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Implementation Timeline (7 Months: September 2025 - March 2026)</h3>

        <div className="space-y-4">
          <div className="border-l-4 border-gray-400 pl-6">
            <h4 className="font-semibold text-gray-900">Phase 1: Foundation (September - October 2025)</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm mt-2">
              <li>Requirements finalization and technical architecture</li>
              <li>Database design and core infrastructure</li>
              <li>Agent portal with basic booking functionality</li>
              <li>Real-time availability system</li>
              <li>Data migration framework from existing TeamDesk</li>
            </ul>
          </div>

          <div className="border-l-4 border-gray-400 pl-6">
            <h4 className="font-semibold text-gray-900">Phase 2: Operations Core (November - December 2025)</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm mt-2">
              <li>Student lifecycle management</li>
              <li>Academic placement and testing integration</li>
              <li>Staff scheduling and resource management</li>
              <li>Residential accommodation management</li>
              <li>Financial operations foundation</li>
            </ul>
          </div>

          <div className="border-l-4 border-gray-400 pl-6">
            <h4 className="font-semibold text-gray-900">Phase 3: Extended Features (January - February 2026)</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm mt-2">
              <li>Flight booking and management system</li>
              <li>Transfer coordination platform</li>
              <li>Host family network integration</li>
              <li>Vendor and supplier portals</li>
              <li>Mobile applications for staff and students</li>
            </ul>
          </div>

          <div className="border-l-4 border-gray-400 pl-6">
            <h4 className="font-semibold text-gray-900">Phase 4: Launch Preparation (March 2026)</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm mt-2">
              <li>System integration and testing</li>
              <li>Staff training program</li>
              <li>Data migration from legacy systems</li>
              <li>Parallel running period</li>
              <li>Go-live for Summer 2026 bookings</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Development Partner Selection Criteria</h3>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Technical Expertise</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Proven experience with similar scale projects</li>
              <li>Education sector experience preferred</li>
              <li>Strong API integration capabilities</li>
              <li>Mobile development expertise</li>
              <li>Cloud infrastructure knowledge</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Project Approach</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Clear, fixed-scope pricing model</li>
              <li>Defined milestone deliverables</li>
              <li>Regular demonstration schedule</li>
              <li>Documented handover process</li>
              <li>Post-launch support commitment</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Risk Mitigation</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Staged payment tied to deliverables</li>
              <li>Source code ownership clarity</li>
              <li>Escrow arrangements for code</li>
              <li>Clear change management process</li>
              <li>Warranty and bug-fix provisions</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Critical Success Factors</h3>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">1. MLI Commitment Requirements</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
              <li>Dedicated internal project sponsor</li>
              <li>Subject matter experts available</li>
              <li>Timely decision-making</li>
              <li>Requirements freeze commitment</li>
              <li>Testing and training resources</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">2. Project Governance</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
              <li>Weekly progress reviews</li>
              <li>Clear escalation pathways</li>
              <li>Change control process</li>
              <li>Risk register maintenance</li>
              <li>Regular stakeholder communication</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">3. Realistic Expectations</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
              <li>March 2026 launch will be functional, not perfect</li>
              <li>Post-launch enhancement phase is normal</li>
              <li>Some process adaptation required</li>
              <li>Training and change management critical</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Investment Considerations</h2>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Development Investment (Estimated Ranges)</h3>

        <div className="space-y-4">
          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-2">Solo Developer/Small Team: €250K - 400K</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
              <li>Lower initial cost</li>
              <li>Higher risk on timeline and support</li>
              <li>Suitable for phased approach</li>
              <li>Requires strong project management from MLI</li>
            </ul>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-2">Boutique Development Agency: €400K - 700K</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
              <li>Balanced cost and capability</li>
              <li>Proven project delivery methods</li>
              <li>Multiple developers reducing key person risk</li>
              <li>Typically includes project management</li>
            </ul>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-2">Enterprise Development Firm: €700K - 1.2M</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
              <li>Lowest delivery risk</li>
              <li>Comprehensive project management</li>
              <li>Extensive testing and documentation</li>
              <li>Higher overhead costs</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
          <h4 className="font-semibold text-gray-900 mb-3">Additional Costs to Consider:</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Annual hosting and infrastructure: €15-25K</li>
            <li>Ongoing maintenance and support: €50-100K annually</li>
            <li>Future enhancements budget: €50-100K annually</li>
            <li>Training and change management: €20-30K</li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Comparison with Off-the-Shelf Alternatives</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-900 mb-3">Multi-Platform Licensing (Annual)</h4>
            <ul className="space-y-1 text-gray-700">
              <li>Edvisor: €35-75K</li>
              <li>iSams: €60-120K</li>
              <li>Elsieapp: €30-50K</li>
              <li>Integration development: €200-300K initial</li>
              <li className="font-semibold pt-2 border-t">Total Year 1: €325-545K</li>
              <li className="font-semibold">Annual ongoing: €125-245K</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 mb-3">Custom Development</h4>
            <ul className="space-y-1 text-gray-700">
              <li>One-time development: €250K-1.2M</li>
              <li>Annual maintenance: €50-100K</li>
              <li className="font-semibold pt-2 border-t text-green-800">Break-even versus licensing: 2-4 years</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Risk Analysis</h2>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Custom Development Risks and Mitigation</h3>

        <div className="space-y-4">
          <div className="bg-white border-l-4 border-orange-500 rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Timeline Risk: March 2026 deadline is aggressive</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
              <li><em>Mitigation:</em> Phased delivery with core booking functionality prioritized</li>
              <li><em>Mitigation:</em> Clear requirements freeze after initial phase</li>
              <li><em>Mitigation:</em> Experienced developer with proven track record</li>
            </ul>
          </div>

          <div className="bg-white border-l-4 border-orange-500 rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Technical Risk: System complexity and integration challenges</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
              <li><em>Mitigation:</em> Modern, proven technology stack</li>
              <li><em>Mitigation:</em> Extensive testing protocols</li>
              <li><em>Mitigation:</em> Gradual rollout with fallback options</li>
            </ul>
          </div>

          <div className="bg-white border-l-4 border-orange-500 rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Vendor Risk: Dependency on single developer/agency</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
              <li><em>Mitigation:</em> Source code ownership by MLI</li>
              <li><em>Mitigation:</em> Comprehensive documentation requirements</li>
              <li><em>Mitigation:</em> Knowledge transfer provisions</li>
              <li><em>Mitigation:</em> Code escrow arrangements</li>
            </ul>
          </div>

          <div className="bg-white border-l-4 border-orange-500 rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Adoption Risk: Staff resistance to change</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
              <li><em>Mitigation:</em> Early stakeholder involvement</li>
              <li><em>Mitigation:</em> Comprehensive training program</li>
              <li><em>Mitigation:</em> Phased rollout approach</li>
              <li><em>Mitigation:</em> Maintain familiar interface elements where possible</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommended Next Steps</h2>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Immediate Actions (August 2025)</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 mb-3">1. Internal Alignment</h4>
            <ul className="list-disc pl-6 space-y-1 text-blue-800">
              <li>Secure board approval for custom development approach</li>
              <li>Establish budget parameters</li>
              <li>Assign project sponsor and team</li>
              <li>Document detailed requirements</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 mb-3">2. Partner Selection Process</h4>
            <ul className="list-disc pl-6 space-y-1 text-blue-800">
              <li>Define evaluation criteria</li>
              <li>Request proposals from qualified developers</li>
              <li>Conduct technical assessments</li>
              <li>Check references and past work</li>
              <li>Negotiate terms and timelines</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">September 2025 Onwards</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 mb-3">1. Project Initiation</h4>
            <ul className="list-disc pl-6 space-y-1 text-green-800">
              <li>Finalize contract with selected developer</li>
              <li>Detailed requirements workshop</li>
              <li>Approve technical architecture</li>
              <li>Establish project governance</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 mb-3">2. Active Development</h4>
            <ul className="list-disc pl-6 space-y-1 text-green-800">
              <li>Regular sprint reviews</li>
              <li>Continuous testing and feedback</li>
              <li>Change management activities</li>
              <li>Staff training preparation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          MLI's operational challenges require a comprehensive digital transformation. Our analysis clearly demonstrates that no off-the-shelf solution adequately addresses the unique requirements of a multi-center educational organization with integrated travel management needs.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          While custom development requires significant investment, it offers the best long-term value through:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li>Perfect alignment with business processes</li>
          <li>Elimination of ongoing licensing fees</li>
          <li>Competitive differentiation through proprietary technology</li>
          <li>Single accountability for system success</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-4">
          The March 2026 timeline is achievable with the right development partner and proper project governance. The key to success lies in selecting an experienced developer who understands both the technical challenges and the educational sector's unique requirements.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          The alternative—continuing with manual processes or attempting to integrate multiple inadequate solutions—poses greater long-term risk to MLI's competitive position and growth potential.
        </p>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-600 rounded-lg p-6">
          <p className="font-bold text-gray-900 mb-2">Recommendation:</p>
          <p className="text-gray-800">
            Proceed with custom development through a qualified external development partner, with immediate action required to meet the March 2026 deployment target for Summer 2026 operations.
          </p>
        </div>
      </section>

      <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
        <p className="text-sm">© 2025 MLI - Confidential Strategic Document</p>
      </footer>
    </article>
  )
}