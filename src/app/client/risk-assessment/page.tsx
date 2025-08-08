export default function RiskAssessment() {
  return (
    <article className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <header className="mb-8 pb-8 border-b-4 border-red-600">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            MLI Digital Transformation Risk Assessment & Mitigation Plan
          </h1>
          <p className="text-xl text-gray-600 font-medium">Comprehensive Risk Management Framework</p>
          <div className="mt-4 text-gray-700">
            <p><strong>Document Version:</strong> 1.0</p>
            <p><strong>Date:</strong> August 2025</p>
            <p><strong>Risk Review Cycle:</strong> Monthly during implementation</p>
            <p><strong>Owner:</strong> Project Steering Committee</p>
          </div>
        </header>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Executive Summary:</p>
          <p className="text-gray-800">
            This document identifies, analyzes, and provides mitigation strategies for all significant risks associated with MLI&apos;s digital transformation project. Each risk has been evaluated for probability and impact, with specific mitigation strategies and contingency plans developed. Regular monitoring and updating of this document is critical for project success.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6 pb-2 border-b">Risk Assessment Methodology</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Probability Scale</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-20 h-8 bg-green-500 rounded mr-3"></div>
                  <span><strong>Low (1):</strong> Less than 25% chance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-20 h-8 bg-yellow-500 rounded mr-3"></div>
                  <span><strong>Medium (2):</strong> 25-50% chance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-20 h-8 bg-orange-500 rounded mr-3"></div>
                  <span><strong>High (3):</strong> 50-75% chance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-20 h-8 bg-red-600 rounded mr-3"></div>
                  <span><strong>Very High (4):</strong> Over 75% chance</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Impact Scale</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-20 h-8 bg-green-500 rounded mr-3"></div>
                  <span><strong>Low (1):</strong> Minor delays/costs (&lt;€10K)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-20 h-8 bg-yellow-500 rounded mr-3"></div>
                  <span><strong>Medium (2):</strong> Moderate impact (€10-50K)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-20 h-8 bg-orange-500 rounded mr-3"></div>
                  <span><strong>High (3):</strong> Significant impact (€50-100K)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-20 h-8 bg-red-600 rounded mr-3"></div>
                  <span><strong>Critical (4):</strong> Project failure (&gt;€100K)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Risk Score Matrix</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-3 bg-gray-100"></th>
                    <th className="border border-gray-300 p-3 bg-green-100">Low Impact (1)</th>
                    <th className="border border-gray-300 p-3 bg-yellow-100">Medium Impact (2)</th>
                    <th className="border border-gray-300 p-3 bg-orange-100">High Impact (3)</th>
                    <th className="border border-gray-300 p-3 bg-red-100">Critical Impact (4)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 bg-red-100 font-semibold">Very High Prob (4)</td>
                    <td className="border border-gray-300 p-3 bg-yellow-200 text-center">4</td>
                    <td className="border border-gray-300 p-3 bg-orange-200 text-center">8</td>
                    <td className="border border-gray-300 p-3 bg-red-300 text-center">12</td>
                    <td className="border border-gray-300 p-3 bg-red-500 text-white text-center">16</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 bg-orange-100 font-semibold">High Prob (3)</td>
                    <td className="border border-gray-300 p-3 bg-green-200 text-center">3</td>
                    <td className="border border-gray-300 p-3 bg-yellow-200 text-center">6</td>
                    <td className="border border-gray-300 p-3 bg-orange-300 text-center">9</td>
                    <td className="border border-gray-300 p-3 bg-red-400 text-white text-center">12</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 bg-yellow-100 font-semibold">Medium Prob (2)</td>
                    <td className="border border-gray-300 p-3 bg-green-200 text-center">2</td>
                    <td className="border border-gray-300 p-3 bg-yellow-200 text-center">4</td>
                    <td className="border border-gray-300 p-3 bg-yellow-300 text-center">6</td>
                    <td className="border border-gray-300 p-3 bg-orange-300 text-center">8</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 bg-green-100 font-semibold">Low Prob (1)</td>
                    <td className="border border-gray-300 p-3 bg-green-100 text-center">1</td>
                    <td className="border border-gray-300 p-3 bg-green-200 text-center">2</td>
                    <td className="border border-gray-300 p-3 bg-green-200 text-center">3</td>
                    <td className="border border-gray-300 p-3 bg-yellow-200 text-center">4</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-200 rounded mr-2"></div>
                <span><strong>Low Risk (1-3):</strong> Monitor</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-300 rounded mr-2"></div>
                <span><strong>Medium Risk (4-6):</strong> Active Management</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-400 rounded mr-2"></div>
                <span><strong>High Risk (8+):</strong> Urgent Attention</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6 pb-2 border-b">Critical Risk Register</h2>
          
          <div className="space-y-8">
            {/* Risk 1 */}
            <div className="border-2 border-red-300 rounded-lg overflow-hidden">
              <div className="bg-red-500 text-white p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">RISK-001: Timeline Overrun</h3>
                    <p className="text-red-100">Missing March 2026 go-live date for Summer booking season</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-red-700 rounded px-3 py-1 inline-block">
                      <span className="font-bold">Risk Score: 12</span>
                    </div>
                    <p className="text-xs mt-1">High Probability × Critical Impact</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Risk Description</h4>
                    <p className="text-gray-700 text-sm">
                      Development takes longer than 7-month timeline due to complexity, scope creep, or resource constraints. Missing Summer 2026 season would mean waiting until 2027 for full implementation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Impact Analysis</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Loss of entire peak season revenue</li>
                      <li>• Continued manual operations for additional year</li>
                      <li>• Staff morale and retention issues</li>
                      <li>• Competitive disadvantage</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Mitigation Strategies</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Implement phased delivery with core booking system prioritized for March 2026</li>
                    <li>✓ Engage experienced development partner with proven track record</li>
                    <li>✓ Establish clear requirements freeze after Phase 1</li>
                    <li>✓ Weekly progress reviews with escalation triggers</li>
                    <li>✓ Maintain 15% time buffer in project plan</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Contingency Plan</h4>
                  <p className="text-sm text-gray-700">
                    If timeline slips beyond 10%: Launch with core booking and accommodation modules only. Defer advanced features to post-season updates. Run parallel operations with gradual migration through Summer 2026.
                  </p>
                </div>

                <div className="mt-4 flex justify-between text-sm">
                  <span><strong>Owner:</strong> Project Manager</span>
                  <span><strong>Review Date:</strong> Weekly</span>
                  <span><strong>Status:</strong> <span className="bg-yellow-200 px-2 py-1 rounded">Monitoring</span></span>
                </div>
              </div>
            </div>

            {/* Risk 2 */}
            <div className="border-2 border-orange-300 rounded-lg overflow-hidden">
              <div className="bg-orange-500 text-white p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">RISK-002: Budget Overrun</h3>
                    <p className="text-orange-100">Project costs exceed approved budget by more than 20%</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-orange-700 rounded px-3 py-1 inline-block">
                      <span className="font-bold">Risk Score: 9</span>
                    </div>
                    <p className="text-xs mt-1">High Probability × High Impact</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Risk Description</h4>
                    <p className="text-gray-700 text-sm">
                      Actual development costs exceed estimates due to underestimated complexity, additional requirements, or need for specialized expertise. Custom development projects commonly experience 20-50% budget overruns.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Impact Analysis</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Need for additional funding approval</li>
                      <li>• Potential project suspension</li>
                      <li>• Reduced scope to stay within budget</li>
                      <li>• Cash flow pressure on operations</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Mitigation Strategies</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Fixed-price contract with clearly defined scope</li>
                    <li>✓ 20% contingency reserve in budget</li>
                    <li>✓ Staged payments tied to deliverables</li>
                    <li>✓ Change control process for scope additions</li>
                    <li>✓ Monthly budget reviews with CFO</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Contingency Plan</h4>
                  <p className="text-sm text-gray-700">
                    If costs exceed 110% of budget: Implement scope reduction plan focusing on must-have features only. Defer nice-to-have features to Phase 2 with separate funding. Consider phased payment terms or financing options.
                  </p>
                </div>

                <div className="mt-4 flex justify-between text-sm">
                  <span><strong>Owner:</strong> CFO</span>
                  <span><strong>Review Date:</strong> Monthly</span>
                  <span><strong>Status:</strong> <span className="bg-green-200 px-2 py-1 rounded">Controlled</span></span>
                </div>
              </div>
            </div>

            {/* Risk 3 */}
            <div className="border-2 border-orange-300 rounded-lg overflow-hidden">
              <div className="bg-orange-500 text-white p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">RISK-003: Data Migration Failure</h3>
                    <p className="text-orange-100">Loss or corruption of critical business data during migration</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-orange-700 rounded px-3 py-1 inline-block">
                      <span className="font-bold">Risk Score: 8</span>
                    </div>
                    <p className="text-xs mt-1">Medium Probability × Critical Impact</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Risk Description</h4>
                    <p className="text-gray-700 text-sm">
                      Current data in spreadsheets, TeamDesk, and paper records may be incomplete, duplicated, or corrupted during migration. Loss of student records, agent information, or financial data would be catastrophic.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Impact Analysis</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Legal compliance violations</li>
                      <li>• Loss of customer trust</li>
                      <li>• Inability to process bookings</li>
                      <li>• Financial reconciliation issues</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Mitigation Strategies</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Complete data audit before migration begins</li>
                    <li>✓ Test migration with subset first (10% of data)</li>
                    <li>✓ Maintain parallel systems for first program cycle</li>
                    <li>✓ Triple backup strategy: local, cloud, and offline</li>
                    <li>✓ Line-by-line verification for critical records</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Contingency Plan</h4>
                  <p className="text-sm text-gray-700">
                    Maintain read-only access to old systems for 12 months. Create rollback procedures that can restore original data within 4 hours. Document all data transformation rules for manual recovery if needed.
                  </p>
                </div>

                <div className="mt-4 flex justify-between text-sm">
                  <span><strong>Owner:</strong> IT Manager</span>
                  <span><strong>Review Date:</strong> Before each migration phase</span>
                  <span><strong>Status:</strong> <span className="bg-yellow-200 px-2 py-1 rounded">Planning</span></span>
                </div>
              </div>
            </div>

            {/* Risk 4 */}
            <div className="border-2 border-orange-300 rounded-lg overflow-hidden">
              <div className="bg-orange-500 text-white p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">RISK-004: Staff Resistance to Change</h3>
                    <p className="text-orange-100">Key staff refuse to adopt new system, continue shadow processes</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-orange-700 rounded px-3 py-1 inline-block">
                      <span className="font-bold">Risk Score: 9</span>
                    </div>
                    <p className="text-xs mt-1">High Probability × High Impact</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Risk Description</h4>
                    <p className="text-gray-700 text-sm">
                      Staff comfortable with current processes resist learning new system. May continue using spreadsheets alongside new system, defeating purpose of integration. Senior staff with deep process knowledge may feel threatened.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Impact Analysis</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Duplicate data entry and errors</li>
                      <li>• System adoption failure</li>
                      <li>• ROI not achieved</li>
                      <li>• Internal conflicts and morale issues</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Mitigation Strategies</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Involve key staff in system design from day one</li>
                    <li>✓ Identify and empower change champions</li>
                    <li>✓ Comprehensive training program with certification</li>
                    <li>✓ Gradual transition with support period</li>
                    <li>✓ Recognition program for early adopters</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Contingency Plan</h4>
                  <p className="text-sm text-gray-700">
                    Implement &quot;no spreadsheet&quot; policy after go-live with executive enforcement. Provide intensive one-on-one coaching for resistant staff. Consider reorganization if resistance persists beyond 3 months.
                  </p>
                </div>

                <div className="mt-4 flex justify-between text-sm">
                  <span><strong>Owner:</strong> HR Director</span>
                  <span><strong>Review Date:</strong> Bi-weekly</span>
                  <span><strong>Status:</strong> <span className="bg-yellow-200 px-2 py-1 rounded">Active Mitigation</span></span>
                </div>
              </div>
            </div>

            {/* Risk 5 */}
            <div className="border-2 border-yellow-300 rounded-lg overflow-hidden">
              <div className="bg-yellow-500 text-white p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">RISK-005: Vendor Lock-in</h3>
                    <p className="text-yellow-100">Over-dependence on single development partner</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-yellow-700 rounded px-3 py-1 inline-block">
                      <span className="font-bold">Risk Score: 6</span>
                    </div>
                    <p className="text-xs mt-1">Medium Probability × High Impact</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Risk Description</h4>
                    <p className="text-gray-700 text-sm">
                      Development partner becomes sole source of knowledge about system. Future changes, maintenance, and support entirely dependent on original developer. Risk of price increases or service degradation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Impact Analysis</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Inability to change vendors</li>
                      <li>• Escalating maintenance costs</li>
                      <li>• Delayed enhancements</li>
                      <li>• Business continuity risk</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Mitigation Strategies</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Insist on comprehensive documentation</li>
                    <li>✓ Source code ownership by MLI</li>
                    <li>✓ Code escrow arrangement</li>
                    <li>✓ Knowledge transfer sessions</li>
                    <li>✓ Train internal technical resource</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Contingency Plan</h4>
                  <p className="text-sm text-gray-700">
                    Maintain relationships with 2-3 alternative development firms. Ensure system uses standard technologies that other developers can work with. Budget for potential vendor transition costs.
                  </p>
                </div>

                <div className="mt-4 flex justify-between text-sm">
                  <span><strong>Owner:</strong> CTO/IT Director</span>
                  <span><strong>Review Date:</strong> Quarterly</span>
                  <span><strong>Status:</strong> <span className="bg-green-200 px-2 py-1 rounded">Controlled</span></span>
                </div>
              </div>
            </div>

            {/* Risk 6 */}
            <div className="border-2 border-yellow-300 rounded-lg overflow-hidden">
              <div className="bg-yellow-500 text-white p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">RISK-006: Integration Failures</h3>
                    <p className="text-yellow-100">Third-party systems fail to integrate properly</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-yellow-700 rounded px-3 py-1 inline-block">
                      <span className="font-bold">Risk Score: 6</span>
                    </div>
                    <p className="text-xs mt-1">High Probability × Medium Impact</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Risk Description</h4>
                    <p className="text-gray-700 text-sm">
                      Payment gateways, email services, SMS providers, or flight tracking APIs fail to integrate or change their interfaces. Manual workarounds required, defeating automation benefits.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Impact Analysis</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Manual data entry required</li>
                      <li>• Delayed customer communications</li>
                      <li>• Payment processing issues</li>
                      <li>• Incomplete functionality</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Mitigation Strategies</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Proof of concept for each integration early</li>
                    <li>✓ Maintain manual fallback procedures</li>
                    <li>✓ Use established, stable API providers</li>
                    <li>✓ Build abstraction layer for easy switching</li>
                    <li>✓ Monitor API deprecation notices</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Contingency Plan</h4>
                  <p className="text-sm text-gray-700">
                    Maintain list of alternative providers for each service. Build manual upload/download capabilities as backup. Budget for potential custom integration development.
                  </p>
                </div>

                <div className="mt-4 flex justify-between text-sm">
                  <span><strong>Owner:</strong> Technical Lead</span>
                  <span><strong>Review Date:</strong> During each integration</span>
                  <span><strong>Status:</strong> <span className="bg-yellow-200 px-2 py-1 rounded">Monitoring</span></span>
                </div>
              </div>
            </div>

            {/* Risk 7 */}
            <div className="border-2 border-yellow-300 rounded-lg overflow-hidden">
              <div className="bg-yellow-500 text-white p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">RISK-007: Security Breach</h3>
                    <p className="text-yellow-100">Unauthorized access to student or financial data</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-yellow-700 rounded px-3 py-1 inline-block">
                      <span className="font-bold">Risk Score: 4</span>
                    </div>
                    <p className="text-xs mt-1">Low Probability × Critical Impact</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Risk Description</h4>
                    <p className="text-gray-700 text-sm">
                      System vulnerability exploited leading to data breach. Student personal information, payment details, or business intelligence exposed. GDPR violations and reputation damage.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Impact Analysis</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• GDPR fines up to €20M</li>
                      <li>• Loss of agent trust</li>
                      <li>• Legal liability</li>
                      <li>• Business closure risk</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Mitigation Strategies</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Security audit before go-live</li>
                    <li>✓ Encryption at rest and in transit</li>
                    <li>✓ Regular penetration testing</li>
                    <li>✓ Role-based access control</li>
                    <li>✓ Cyber insurance policy</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Contingency Plan</h4>
                  <p className="text-sm text-gray-700">
                    Incident response plan with 4-hour activation. Legal counsel on retainer. Customer notification templates prepared. Backup systems to maintain operations during incident.
                  </p>
                </div>

                <div className="mt-4 flex justify-between text-sm">
                  <span><strong>Owner:</strong> Data Protection Officer</span>
                  <span><strong>Review Date:</strong> Monthly</span>
                  <span><strong>Status:</strong> <span className="bg-green-200 px-2 py-1 rounded">Controlled</span></span>
                </div>
              </div>
            </div>

            {/* Risk 8 */}
            <div className="border-2 border-yellow-300 rounded-lg overflow-hidden">
              <div className="bg-yellow-500 text-white p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">RISK-008: Performance Issues</h3>
                    <p className="text-yellow-100">System too slow during peak booking periods</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-yellow-700 rounded px-3 py-1 inline-block">
                      <span className="font-bold">Risk Score: 6</span>
                    </div>
                    <p className="text-xs mt-1">Medium Probability × High Impact</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Risk Description</h4>
                    <p className="text-gray-700 text-sm">
                      System cannot handle concurrent users during January-March booking rush. Page load times exceed acceptable limits. Agents abandon bookings due to frustration.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Impact Analysis</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Lost bookings to competitors</li>
                      <li>• Agent dissatisfaction</li>
                      <li>• Emergency infrastructure costs</li>
                      <li>• Staff overtime for manual processing</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Mitigation Strategies</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Load testing before go-live</li>
                    <li>✓ Auto-scaling cloud infrastructure</li>
                    <li>✓ Database optimization</li>
                    <li>✓ Content delivery network (CDN)</li>
                    <li>✓ Performance monitoring tools</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Contingency Plan</h4>
                  <p className="text-sm text-gray-700">
                    Queue system for peak periods. Ability to rapidly scale infrastructure. Booking appointment system if needed. Priority access for top agents.
                  </p>
                </div>

                <div className="mt-4 flex justify-between text-sm">
                  <span><strong>Owner:</strong> Infrastructure Manager</span>
                  <span><strong>Review Date:</strong> Before peak season</span>
                  <span><strong>Status:</strong> <span className="bg-yellow-200 px-2 py-1 rounded">Planning</span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6 pb-2 border-b">Secondary Risks</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Risk ID</th>
                  <th className="border border-gray-300 p-3 text-left">Risk Description</th>
                  <th className="border border-gray-300 p-3 text-center">Probability</th>
                  <th className="border border-gray-300 p-3 text-center">Impact</th>
                  <th className="border border-gray-300 p-3 text-center">Score</th>
                  <th className="border border-gray-300 p-3 text-left">Primary Mitigation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">RISK-009</td>
                  <td className="border border-gray-300 p-3">Key staff departure during project</td>
                  <td className="border border-gray-300 p-3 text-center">2</td>
                  <td className="border border-gray-300 p-3 text-center">2</td>
                  <td className="border border-gray-300 p-3 text-center bg-yellow-100">4</td>
                  <td className="border border-gray-300 p-3">Documentation, knowledge transfer, retention bonuses</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="border border-gray-300 p-3">RISK-010</td>
                  <td className="border border-gray-300 p-3">Regulatory compliance changes</td>
                  <td className="border border-gray-300 p-3 text-center">1</td>
                  <td className="border border-gray-300 p-3 text-center">3</td>
                  <td className="border border-gray-300 p-3 text-center bg-green-100">3</td>
                  <td className="border border-gray-300 p-3">Flexible system design, regular compliance reviews</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">RISK-011</td>
                  <td className="border border-gray-300 p-3">Agent adoption resistance</td>
                  <td className="border border-gray-300 p-3 text-center">2</td>
                  <td className="border border-gray-300 p-3 text-center">2</td>
                  <td className="border border-gray-300 p-3 text-center bg-yellow-100">4</td>
                  <td className="border border-gray-300 p-3">Early engagement, training, incentives</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="border border-gray-300 p-3">RISK-012</td>
                  <td className="border border-gray-300 p-3">Mobile app store rejection</td>
                  <td className="border border-gray-300 p-3 text-center">1</td>
                  <td className="border border-gray-300 p-3 text-center">2</td>
                  <td className="border border-gray-300 p-3 text-center bg-green-100">2</td>
                  <td className="border border-gray-300 p-3">Follow guidelines, PWA backup option</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">RISK-013</td>
                  <td className="border border-gray-300 p-3">Infrastructure provider outage</td>
                  <td className="border border-gray-300 p-3 text-center">1</td>
                  <td className="border border-gray-300 p-3 text-center">3</td>
                  <td className="border border-gray-300 p-3 text-center bg-green-100">3</td>
                  <td className="border border-gray-300 p-3">Multi-region deployment, backup systems</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="border border-gray-300 p-3">RISK-014</td>
                  <td className="border border-gray-300 p-3">Scope creep from stakeholders</td>
                  <td className="border border-gray-300 p-3 text-center">3</td>
                  <td className="border border-gray-300 p-3 text-center">2</td>
                  <td className="border border-gray-300 p-3 text-center bg-yellow-100">6</td>
                  <td className="border border-gray-300 p-3">Change control process, clear governance</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">RISK-015</td>
                  <td className="border border-gray-300 p-3">Testing reveals major issues</td>
                  <td className="border border-gray-300 p-3 text-center">2</td>
                  <td className="border border-gray-300 p-3 text-center">3</td>
                  <td className="border border-gray-300 p-3 text-center bg-yellow-100">6</td>
                  <td className="border border-gray-300 p-3">Continuous testing, early prototypes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6 pb-2 border-b">Risk Response Strategies</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Avoid</h3>
              <p className="text-gray-700 mb-3">Eliminate the risk by removing the cause</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Use proven technologies only</li>
                <li>• Hire experienced development partner</li>
                <li>• Fixed-price contracts where possible</li>
                <li>• Clear requirements documentation</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Mitigate</h3>
              <p className="text-gray-700 mb-3">Reduce probability or impact of the risk</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Phased implementation approach</li>
                <li>• Comprehensive training programs</li>
                <li>• Regular progress monitoring</li>
                <li>• Backup systems and procedures</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4">Transfer</h3>
              <p className="text-gray-700 mb-3">Shift risk to third party</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Insurance policies (cyber, professional)</li>
                <li>• Performance bonds from vendor</li>
                <li>• Warranty and support agreements</li>
                <li>• Penalty clauses in contracts</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Accept</h3>
              <p className="text-gray-700 mb-3">Acknowledge risk and plan response</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Budget contingency reserves</li>
                <li>• Schedule buffers built in</li>
                <li>• Documented fallback procedures</li>
                <li>• Regular risk review meetings</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6 pb-2 border-b">Risk Monitoring & Governance</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Risk Review Schedule</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border border-gray-300 p-3 text-left">Review Type</th>
                    <th className="border border-gray-300 p-3 text-left">Frequency</th>
                    <th className="border border-gray-300 p-3 text-left">Participants</th>
                    <th className="border border-gray-300 p-3 text-left">Key Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Project Team Review</td>
                    <td className="border border-gray-300 p-3">Weekly</td>
                    <td className="border border-gray-300 p-3">PM, Dev Lead, Key Staff</td>
                    <td className="border border-gray-300 p-3">Update risk status, identify new risks</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Steering Committee</td>
                    <td className="border border-gray-300 p-3">Bi-weekly</td>
                    <td className="border border-gray-300 p-3">Executives, PM, Department Heads</td>
                    <td className="border border-gray-300 p-3">Review high risks, approve mitigation spend</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Board Update</td>
                    <td className="border border-gray-300 p-3">Monthly</td>
                    <td className="border border-gray-300 p-3">Board, CEO, CFO, PM</td>
                    <td className="border border-gray-300 p-3">Critical risks, budget impact, timeline status</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Full Risk Audit</td>
                    <td className="border border-gray-300 p-3">Quarterly</td>
                    <td className="border border-gray-300 p-3">All Stakeholders</td>
                    <td className="border border-gray-300 p-3">Comprehensive review, strategy adjustment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Escalation Triggers</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-semibold">Immediate Escalation</p>
                    <p className="text-sm text-gray-600">Any risk score increases to 12+</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-semibold">Next Meeting Escalation</p>
                    <p className="text-sm text-gray-600">Risk score increases by 4+ points</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-semibold">PM Decision</p>
                    <p className="text-sm text-gray-600">New risks identified with score 6+</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Risk Reporting Metrics</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-700">Total Identified Risks:</span>
                  <span className="font-semibold">15</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Critical/High Risks:</span>
                  <span className="font-semibold text-red-600">4</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Medium Risks:</span>
                  <span className="font-semibold text-yellow-600">7</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Low Risks:</span>
                  <span className="font-semibold text-green-600">4</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Risks with Active Mitigation:</span>
                  <span className="font-semibold">11</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6 pb-2 border-b">Decision Trees for Critical Scenarios</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Scenario: Timeline Slipping (February 2026)</h3>
              
              <div className="ml-8 space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold">If core booking system is 90% complete:</p>
                  <p className="text-sm text-gray-700">→ Continue to March launch with reduced scope</p>
                  <p className="text-sm text-gray-700">→ Deploy booking and accommodation only</p>
                  <p className="text-sm text-gray-700">→ Add features during summer operation</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold">If core booking system is 70-89% complete:</p>
                  <p className="text-sm text-gray-700">→ Negotiate 2-week extension with developer</p>
                  <p className="text-sm text-gray-700">→ Bring in additional resources</p>
                  <p className="text-sm text-gray-700">→ Launch April 1st for late bookings</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold">If core booking system is &lt;70% complete:</p>
                  <p className="text-sm text-gray-700">→ Postpone to Summer 2027</p>
                  <p className="text-sm text-gray-700">→ Negotiate penalty with developer</p>
                  <p className="text-sm text-gray-700">→ Implement interim improvements to current systems</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Scenario: Major Data Migration Issue Discovered</h3>
              
              <div className="ml-8 space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold">If discovered during test migration:</p>
                  <p className="text-sm text-gray-700">→ Stop migration immediately</p>
                  <p className="text-sm text-gray-700">→ Analyze root cause</p>
                  <p className="text-sm text-gray-700">→ Fix and re-test with larger sample</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold">If discovered after partial go-live:</p>
                  <p className="text-sm text-gray-700">→ Freeze new data entry</p>
                  <p className="text-sm text-gray-700">→ Run parallel systems</p>
                  <p className="text-sm text-gray-700">→ Manual reconciliation if needed</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold">If data corruption detected post-migration:</p>
                  <p className="text-sm text-gray-700">→ Immediate rollback to backup</p>
                  <p className="text-sm text-gray-700">→ Notify affected parties</p>
                  <p className="text-sm text-gray-700">→ Manual data recovery from source systems</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Scenario: Developer Relationship Breakdown</h3>
              
              <div className="ml-8 space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold">If occurs before 50% completion:</p>
                  <p className="text-sm text-gray-700">→ Invoke contract termination clause</p>
                  <p className="text-sm text-gray-700">→ Retrieve all code and documentation</p>
                  <p className="text-sm text-gray-700">→ Fast-track alternative vendor selection</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold">If occurs after 50% completion:</p>
                  <p className="text-sm text-gray-700">→ Attempt mediation/negotiation</p>
                  <p className="text-sm text-gray-700">→ Engage legal counsel</p>
                  <p className="text-sm text-gray-700">→ Prepare transition plan to new vendor</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold">If occurs near completion:</p>
                  <p className="text-sm text-gray-700">→ Complete with internal resources if possible</p>
                  <p className="text-sm text-gray-700">→ Hire contractors for specific gaps</p>
                  <p className="text-sm text-gray-700">→ Accept reduced functionality temporarily</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6 pb-2 border-b">Budget Impact Analysis</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Risk Category</th>
                  <th className="border border-gray-300 p-3 text-right">Mitigation Cost</th>
                  <th className="border border-gray-300 p-3 text-right">Potential Impact if Realized</th>
                  <th className="border border-gray-300 p-3 text-right">Insurance/Transfer Cost</th>
                  <th className="border border-gray-300 p-3 text-right">Total Exposure</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">Timeline Risks</td>
                  <td className="border border-gray-300 p-3 text-right">€25,000</td>
                  <td className="border border-gray-300 p-3 text-right">€500,000</td>
                  <td className="border border-gray-300 p-3 text-right">N/A</td>
                  <td className="border border-gray-300 p-3 text-right text-red-600">€500,000</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">Budget Risks</td>
                  <td className="border border-gray-300 p-3 text-right">€15,000</td>
                  <td className="border border-gray-300 p-3 text-right">€200,000</td>
                  <td className="border border-gray-300 p-3 text-right">€5,000</td>
                  <td className="border border-gray-300 p-3 text-right text-orange-600">€200,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">Technical Risks</td>
                  <td className="border border-gray-300 p-3 text-right">€30,000</td>
                  <td className="border border-gray-300 p-3 text-right">€150,000</td>
                  <td className="border border-gray-300 p-3 text-right">€8,000</td>
                  <td className="border border-gray-300 p-3 text-right text-yellow-600">€150,000</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">People Risks</td>
                  <td className="border border-gray-300 p-3 text-right">€20,000</td>
                  <td className="border border-gray-300 p-3 text-right">€100,000</td>
                  <td className="border border-gray-300 p-3 text-right">N/A</td>
                  <td className="border border-gray-300 p-3 text-right text-yellow-600">€100,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">Security/Compliance</td>
                  <td className="border border-gray-300 p-3 text-right">€25,000</td>
                  <td className="border border-gray-300 p-3 text-right">€1,000,000+</td>
                  <td className="border border-gray-300 p-3 text-right">€15,000</td>
                  <td className="border border-gray-300 p-3 text-right text-red-600">€1,000,000+</td>
                </tr>
                <tr className="bg-gray-100 font-bold">
                  <td className="border border-gray-300 p-3">TOTALS</td>
                  <td className="border border-gray-300 p-3 text-right">€115,000</td>
                  <td className="border border-gray-300 p-3 text-right">€1,950,000+</td>
                  <td className="border border-gray-300 p-3 text-right">€28,000</td>
                  <td className="border border-gray-300 p-3 text-right text-red-600">€1,950,000+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 mt-6">
            <h3 className="text-xl font-semibold text-yellow-900 mb-3">Recommended Risk Budget Allocation</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded p-4">
                <p className="font-semibold text-gray-800">Contingency Reserve</p>
                <p className="text-2xl font-bold text-gray-900">€150,000</p>
                <p className="text-sm text-gray-600">20% of project budget</p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="font-semibold text-gray-800">Risk Mitigation</p>
                <p className="text-2xl font-bold text-gray-900">€115,000</p>
                <p className="text-sm text-gray-600">Proactive measures</p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="font-semibold text-gray-800">Insurance & Transfers</p>
                <p className="text-2xl font-bold text-gray-900">€28,000</p>
                <p className="text-sm text-gray-600">Annual premiums</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6 pb-2 border-b">Success Indicators & Early Warning Signs</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-4">✓ Positive Indicators</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Weekly milestones consistently met
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Budget variance under 5%
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Staff actively engaged in design sessions
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Test results meeting expectations
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Vendor delivering ahead of schedule
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Stakeholder satisfaction high
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  No critical issues in testing
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-4">⚠️ Warning Signs</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚠️</span>
                  Two consecutive missed milestones
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚠️</span>
                  Budget variance exceeding 10%
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚠️</span>
                  Key staff not attending meetings
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚠️</span>
                  Vendor communication delays
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚠️</span>
                  Scope change requests increasing
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚠️</span>
                  Testing revealing systemic issues
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">⚠️</span>
                  Staff expressing concerns privately
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6 pb-2 border-b">Conclusion & Recommendations</h2>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Risk Management Priorities</h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-gray-900">1. Timeline Protection is Paramount</p>
                <p className="text-gray-700 text-sm mt-1">
                  Missing Summer 2026 would be catastrophic. All decisions should prioritize timeline over features or cost savings.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                <p className="font-semibold text-gray-900">2. Secure Stakeholder Buy-in Early</p>
                <p className="text-gray-700 text-sm mt-1">
                  Staff resistance is highly probable. Begin change management immediately, not after system is built.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                <p className="font-semibold text-gray-900">3. Protect Against Vendor Lock-in</p>
                <p className="text-gray-700 text-sm mt-1">
                  Ensure all contractual protections are in place before development begins. Code ownership is non-negotiable.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <p className="font-semibold text-gray-900">4. Budget for Risk, Not Just Development</p>
                <p className="text-gray-700 text-sm mt-1">
                  The €115,000 risk mitigation budget and €150,000 contingency are investments in success, not optional extras.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Final Recommendations</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Establish risk review as standing agenda item in all project meetings</li>
                <li>• Appoint dedicated risk owner separate from project manager</li>
                <li>• Create risk dashboard visible to all stakeholders</li>
                <li>• Conduct pre-mortem exercise with team before development starts</li>
                <li>• Build &quot;kill switches&quot; into project - clear criteria for when to stop or pivot</li>
                <li>• Celebrate risk identification - create culture where raising concerns is rewarded</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p className="text-sm">© 2025 MLI - Risk Assessment & Mitigation Plan</p>
          <p className="text-xs mt-2">This is a living document - Review and update monthly</p>
        </footer>
      </div>
    </article>
  )
}