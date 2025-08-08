export default function DesignPhilosophy() {
  return (
    <article className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <header className="mb-8 pb-8 border-b-4 border-purple-600">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            MLI System Design Philosophy
          </h1>
          <p className="text-xl text-gray-600 font-medium">Guiding Principles for Digital Excellence</p>
          <div className="mt-4 text-gray-700">
            <p><strong>Document Version:</strong> 1.0</p>
            <p><strong>Date:</strong> August 2025</p>
            <p><strong>Purpose:</strong> Define the core design principles, user experience standards, and technical philosophy that will guide all development decisions</p>
          </div>
        </header>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
          <p className="font-semibold text-gray-900 mb-2">Core Philosophy:</p>
          <p className="text-gray-800 text-lg italic">
            &quot;Every interaction should feel effortless, every process should be transparent, and every user should feel empowered. We design for the 90% use case while accommodating the 10% exception.&quot;
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 pb-2 border-b">Our North Star Principles</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">1. Purpose-Driven Simplicity</h3>
              <p className="text-gray-700 text-sm mb-3">
                Every feature must solve a real problem. If we can&apos;t explain why something exists in one sentence, it shouldn&apos;t exist.
              </p>
              <div className="bg-white rounded p-3 text-xs">
                <p className="font-semibold text-gray-800 mb-1">In Practice:</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• No feature for feature&apos;s sake</li>
                  <li>• Remove before adding</li>
                  <li>• Question every click</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">2. Speed as a Feature</h3>
              <p className="text-gray-700 text-sm mb-3">
                Performance is not optional. Every millisecond matters. A fast system builds trust and enables productivity.
              </p>
              <div className="bg-white rounded p-3 text-xs">
                <p className="font-semibold text-gray-800 mb-1">In Practice:</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• 2-second rule for page loads</li>
                  <li>• Instant feedback on actions</li>
                  <li>• Progressive loading</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">3. Human-Centered Design</h3>
              <p className="text-gray-700 text-sm mb-3">
                Technology should adapt to people, not the other way around. Design for real humans in real situations.
              </p>
              <div className="bg-white rounded p-3 text-xs">
                <p className="font-semibold text-gray-800 mb-1">In Practice:</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Forgiveness over perfection</li>
                  <li>• Clear error recovery</li>
                  <li>• Respect user time</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 pb-2 border-b">Design Principles in Action</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Progressive Disclosure</h3>
              <p className="text-gray-700 mb-4">
                Show only what&apos;s needed when it&apos;s needed. Advanced features should be discoverable but not overwhelming.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Example: Agent Booking Portal</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-800 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Initial View</p>
                      <p className="text-sm text-gray-600">Shows only: Dates, Center, Group Size - the essentials</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-800 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <p className="font-medium">On Selection</p>
                      <p className="text-sm text-gray-600">Reveals accommodation options based on availability</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-300 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">
                      <span className="text-blue-800 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Advanced Options</p>
                      <p className="text-sm text-gray-600">Special requirements appear only when &quot;Add Special Needs&quot; is clicked</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Anticipatory Design</h3>
              <p className="text-gray-700 mb-4">
                The system should predict user needs and prepare for the next likely action.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Example: Smart Defaults</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded p-4">
                    <p className="font-medium text-sm mb-2">Meal Planning</p>
                    <p className="text-xs text-gray-600">
                      When a full-day excursion is scheduled, system automatically suggests packed lunches for that day
                    </p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-medium text-sm mb-2">Transfer Booking</p>
                    <p className="text-xs text-gray-600">
                      When flight details entered, transfer times auto-calculate based on terminal and traffic patterns
                    </p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-medium text-sm mb-2">Accommodation</p>
                    <p className="text-xs text-gray-600">
                      Students from same school auto-suggested for room sharing unless specified otherwise
                    </p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-medium text-sm mb-2">Documentation</p>
                    <p className="text-xs text-gray-600">
                      Visa letters auto-generate when nationality requires visa for Ireland
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Contextual Intelligence</h3>
              <p className="text-gray-700 mb-4">
                The interface should adapt based on user role, time of day, and current task.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Example: Role-Based Dashboards</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded p-4">
                    <p className="font-medium mb-1">Centre Manager (Morning)</p>
                    <p className="text-sm text-gray-600">
                      Dashboard shows: Today&apos;s arrivals, urgent issues, staff attendance, weather alerts
                    </p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-medium mb-1">Activity Leader (Afternoon)</p>
                    <p className="text-sm text-gray-600">
                      Mobile shows: Current group location, next activity, student medical alerts, emergency contacts
                    </p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <p className="font-medium mb-1">Agent (Booking Season)</p>
                    <p className="text-sm text-gray-600">
                      Portal prioritizes: Available dates, quick rebooking, waitlist status, special offers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 pb-2 border-b">User Experience Standards</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">✅ Always Do This</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium">Provide Immediate Feedback</p>
                    <p className="text-sm text-gray-600">Every action gets a response within 100ms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium">Show System Status</p>
                    <p className="text-sm text-gray-600">Users always know what&apos;s happening</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium">Enable Undo</p>
                    <p className="text-sm text-gray-600">Mistakes should be easily reversible</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium">Use Plain Language</p>
                    <p className="text-sm text-gray-600">No jargon, clear instructions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium">Maintain Consistency</p>
                    <p className="text-sm text-gray-600">Same action, same result, everywhere</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">❌ Never Do This</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <div>
                    <p className="font-medium">Surprise the User</p>
                    <p className="text-sm text-gray-600">No unexpected behaviors or hidden actions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <div>
                    <p className="font-medium">Blame the User</p>
                    <p className="text-sm text-gray-600">Error messages should guide, not criticize</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <div>
                    <p className="font-medium">Hide Important Information</p>
                    <p className="text-sm text-gray-600">Critical data always visible</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <div>
                    <p className="font-medium">Force Unnecessary Steps</p>
                    <p className="text-sm text-gray-600">Every click must add value</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <div>
                    <p className="font-medium">Lose User Data</p>
                    <p className="text-sm text-gray-600">Auto-save, always</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 pb-2 border-b">Visual Design Language</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Color Philosophy</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="h-24 bg-blue-600 rounded-t-lg"></div>
                  <div className="bg-white border border-gray-200 rounded-b-lg p-3">
                    <p className="font-semibold text-sm">Primary Blue</p>
                    <p className="text-xs text-gray-600">Trust, stability, professionalism</p>
                    <p className="text-xs text-gray-500 mt-1">Actions, links, focus</p>
                  </div>
                </div>
                <div>
                  <div className="h-24 bg-green-600 rounded-t-lg"></div>
                  <div className="bg-white border border-gray-200 rounded-b-lg p-3">
                    <p className="font-semibold text-sm">Success Green</p>
                    <p className="text-xs text-gray-600">Confirmation, availability</p>
                    <p className="text-xs text-gray-500 mt-1">Positive states</p>
                  </div>
                </div>
                <div>
                  <div className="h-24 bg-amber-500 rounded-t-lg"></div>
                  <div className="bg-white border border-gray-200 rounded-b-lg p-3">
                    <p className="font-semibold text-sm">Warning Amber</p>
                    <p className="text-xs text-gray-600">Attention, caution</p>
                    <p className="text-xs text-gray-500 mt-1">Non-critical alerts</p>
                  </div>
                </div>
                <div>
                  <div className="h-24 bg-red-600 rounded-t-lg"></div>
                  <div className="bg-white border border-gray-200 rounded-b-lg p-3">
                    <p className="font-semibold text-sm">Danger Red</p>
                    <p className="text-xs text-gray-600">Errors, urgent issues</p>
                    <p className="text-xs text-gray-500 mt-1">Destructive actions</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Typography Hierarchy</h3>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="bg-white rounded p-4">
                  <p className="text-3xl font-bold">Page Headers - Bold, Clear, Purposeful</p>
                  <p className="text-sm text-gray-600 mt-2">32px / 2rem - Used for main page titles</p>
                </div>
                <div className="bg-white rounded p-4">
                  <p className="text-2xl font-semibold">Section Headers - Organize Content</p>
                  <p className="text-sm text-gray-600 mt-2">24px / 1.5rem - Major content divisions</p>
                </div>
                <div className="bg-white rounded p-4">
                  <p className="text-lg font-medium">Subsection Headers - Guide the Eye</p>
                  <p className="text-sm text-gray-600 mt-2">18px / 1.125rem - Content groupings</p>
                </div>
                <div className="bg-white rounded p-4">
                  <p className="text-base">Body Text - Comfortable Reading</p>
                  <p className="text-sm text-gray-600 mt-2">16px / 1rem - Main content</p>
                </div>
                <div className="bg-white rounded p-4">
                  <p className="text-sm">Supporting Text - Additional Context</p>
                  <p className="text-sm text-gray-600 mt-2">14px / 0.875rem - Help text, descriptions</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Spacing & Rhythm</h3>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded p-4">
                    <div className="h-2 bg-gray-300 rounded mb-4"></div>
                    <p className="font-semibold mb-2">Tight (4-8px)</p>
                    <p className="text-sm text-gray-600">Related elements within components</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <div className="h-2 bg-gray-300 rounded mb-2"></div>
                    <div className="h-2 bg-gray-300 rounded mb-6"></div>
                    <p className="font-semibold mb-2">Regular (16-24px)</p>
                    <p className="text-sm text-gray-600">Between distinct elements</p>
                  </div>
                  <div className="bg-white rounded p-4">
                    <div className="h-2 bg-gray-300 rounded mb-8"></div>
                    <p className="font-semibold mb-2">Loose (32-48px)</p>
                    <p className="text-sm text-gray-600">Major section breaks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 pb-2 border-b">Interaction Patterns</h2>
          
          <div className="space-y-6">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Form Design</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-medium">Single Column Layout</p>
                  <p className="text-sm text-gray-600">Forms flow vertically for natural reading pattern</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-medium">Inline Validation</p>
                  <p className="text-sm text-gray-600">Validate on blur, not on submit</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-medium">Smart Defaults</p>
                  <p className="text-sm text-gray-600">Pre-fill wherever possible based on context</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-medium">Clear CTAs</p>
                  <p className="text-sm text-gray-600">Primary action obvious, secondary action available</p>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Navigation Patterns</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Global Navigation</h4>
                  <div className="bg-gray-100 rounded p-3">
                    <div className="bg-gray-800 rounded p-2 mb-2">
                      <div className="flex justify-between">
                        <div className="flex space-x-4">
                          <div className="w-20 h-2 bg-gray-600 rounded"></div>
                          <div className="w-16 h-2 bg-gray-600 rounded"></div>
                          <div className="w-16 h-2 bg-gray-600 rounded"></div>
                        </div>
                        <div className="w-16 h-2 bg-blue-500 rounded"></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">Persistent top bar with role-based items</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contextual Actions</h4>
                  <div className="bg-gray-100 rounded p-3">
                    <div className="bg-white rounded p-2 mb-2">
                      <div className="flex justify-end space-x-2">
                        <div className="w-16 h-6 bg-gray-300 rounded"></div>
                        <div className="w-16 h-6 bg-blue-500 rounded"></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">Actions appear where needed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Feedback Mechanisms</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <div className="w-16">
                    <div className="h-8 bg-green-100 border border-green-300 rounded flex items-center justify-center">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Success States</p>
                    <p className="text-xs text-gray-600">Brief, positive confirmation that auto-dismisses</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16">
                    <div className="h-8 bg-blue-100 border border-blue-300 rounded flex items-center justify-center">
                      <span className="text-blue-600 text-xs">...</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Loading States</p>
                    <p className="text-xs text-gray-600">Skeleton screens and progress indicators</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16">
                    <div className="h-8 bg-red-100 border border-red-300 rounded flex items-center justify-center">
                      <span className="text-red-600 text-xs">!</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">Error States</p>
                    <p className="text-xs text-gray-600">Clear problem description and solution path</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 pb-2 border-b">Mobile-First Philosophy</h2>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Design for Thumbs, Not Cursors</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Touch Targets</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 border-2 border-green-500 rounded mr-3"></div>
                    <div>
                      <p className="font-medium text-sm">Minimum 44x44px</p>
                      <p className="text-xs text-gray-600">Apple&apos;s HIG standard</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-blue-100 border-2 border-blue-500 rounded mr-3"></div>
                    <div>
                      <p className="font-medium text-sm">Ideal 48x48px</p>
                      <p className="text-xs text-gray-600">Material Design recommendation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Gesture Support</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">→</span>
                    <span>Swipe for navigation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">↓</span>
                    <span>Pull to refresh</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">⟲</span>
                    <span>Long press for options</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">↔</span>
                    <span>Pinch to zoom (where relevant)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-4">Responsive Breakpoints</h4>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="h-32 bg-gray-200 rounded mb-2 relative">
                    <div className="absolute inset-2 bg-gray-400 rounded"></div>
                  </div>
                  <p className="text-xs font-semibold">Mobile</p>
                  <p className="text-xs text-gray-600">&lt;640px</p>
                </div>
                <div>
                  <div className="h-32 bg-gray-200 rounded mb-2 relative">
                    <div className="absolute inset-2 bg-gray-400 rounded" style={{width: '60%'}}></div>
                  </div>
                  <p className="text-xs font-semibold">Tablet</p>
                  <p className="text-xs text-gray-600">640-1024px</p>
                </div>
                <div>
                  <div className="h-32 bg-gray-200 rounded mb-2 relative">
                    <div className="absolute inset-2 bg-gray-400 rounded" style={{width: '40%'}}></div>
                  </div>
                  <p className="text-xs font-semibold">Desktop</p>
                  <p className="text-xs text-gray-600">1024-1440px</p>
                </div>
                <div>
                  <div className="h-32 bg-gray-200 rounded mb-2 relative">
                    <div className="absolute inset-2 bg-gray-400 rounded" style={{width: '30%'}}></div>
                  </div>
                  <p className="text-xs font-semibold">Wide</p>
                  <p className="text-xs text-gray-600">&gt;1440px</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 pb-2 border-b">Accessibility Standards</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <p className="font-semibold text-gray-900 mb-2">Our Commitment:</p>
            <p className="text-gray-800">
              Accessibility is not an afterthought—it&apos;s a core requirement. We design for WCAG 2.1 AA compliance as a minimum, striving for AAA where possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Visual Accessibility</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium">Color Contrast</p>
                    <p className="text-gray-600">Minimum 4.5:1 for normal text, 3:1 for large text</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium">Color Independence</p>
                    <p className="text-gray-600">Never rely on color alone to convey information</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium">Focus Indicators</p>
                    <p className="text-gray-600">Clear, visible focus states for keyboard navigation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium">Text Sizing</p>
                    <p className="text-gray-600">Support 200% zoom without horizontal scrolling</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Interactive Accessibility</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium">Keyboard Navigation</p>
                    <p className="text-gray-600">Full functionality without mouse</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium">Screen Reader Support</p>
                    <p className="text-gray-600">Semantic HTML and ARIA labels</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium">Error Identification</p>
                    <p className="text-gray-600">Clear error messages linked to fields</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <p className="font-medium">Time Limits</p>
                    <p className="text-gray-600">Ability to extend or disable timeouts</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 pb-2 border-b">Performance Guidelines</h2>
          
          <div className="bg-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-green-900 mb-6">Speed Budget</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">First Contentful Paint (FCP)</span>
                  <span className="text-green-600 font-bold">&lt; 1.0s</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Time to Interactive (TTI)</span>
                  <span className="text-green-600 font-bold">&lt; 2.0s</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Largest Contentful Paint (LCP)</span>
                  <span className="text-yellow-600 font-bold">&lt; 2.5s</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Cumulative Layout Shift (CLS)</span>
                  <span className="text-green-600 font-bold">&lt; 0.1</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '30%'}}></div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">95%</p>
                <p className="text-sm text-gray-600">Pages under 2s load</p>
              </div>
              <div className="bg-white rounded p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">60fps</p>
                <p className="text-sm text-gray-600">Animation smoothness</p>
              </div>
              <div className="bg-white rounded p-4 text-center">
                <p className="text-2xl font-bold text-gray-900">100ms</p>
                <p className="text-sm text-gray-600">User input response</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 pb-2 border-b">Data Presentation Principles</h2>
          
          <div className="space-y-8">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Information Hierarchy</h3>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-6">
                  <div className="bg-white rounded p-4 shadow-lg">
                    <p className="text-2xl font-bold text-gray-900">€125,450</p>
                    <p className="text-sm text-gray-600">Total Revenue This Month</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Primary: Large, bold, immediate understanding</p>
                </div>

                <div className="mb-6">
                  <div className="bg-white rounded p-4 shadow">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Bookings</span>
                      <span className="text-green-600">↑ 23%</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Secondary: Supporting metrics, trends</p>
                </div>

                <div>
                  <div className="bg-white rounded p-4">
                    <p className="text-sm text-gray-600">Last updated: 2 minutes ago</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Tertiary: Metadata, timestamps, IDs</p>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Density</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Dashboard View</h4>
                  <div className="bg-gray-100 rounded p-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-20 bg-white rounded"></div>
                      <div className="h-20 bg-white rounded"></div>
                      <div className="h-20 bg-white rounded"></div>
                      <div className="h-20 bg-white rounded"></div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">High-level metrics, visual breathing room</p>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Detail View</h4>
                  <div className="bg-gray-100 rounded p-4">
                    <div className="space-y-1">
                      <div className="h-8 bg-white rounded"></div>
                      <div className="h-8 bg-white rounded"></div>
                      <div className="h-8 bg-white rounded"></div>
                      <div className="h-8 bg-white rounded"></div>
                      <div className="h-8 bg-white rounded"></div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">Dense information when user seeks detail</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 pb-2 border-b">Error Handling Philosophy</h2>
          
          <div className="bg-red-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-red-900 mb-6">When Things Go Wrong, Make It Right</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-4">The Four-Part Error Message</h4>
                
                <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex-1">
                      <p className="font-semibold text-red-900">Unable to save booking</p>
                      <p className="text-red-800 text-sm mt-1">The selected dates are no longer available.</p>
                      <p className="text-red-700 text-sm mt-2">Please select alternative dates or join the waitlist.</p>
                      <div className="mt-3 flex space-x-3">
                        <button className="bg-red-600 text-white px-4 py-2 rounded text-sm">Select New Dates</button>
                        <button className="bg-red-200 text-red-800 px-4 py-2 rounded text-sm">Join Waitlist</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
                    <span><strong>What happened:</strong> Clear, non-technical description</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 bg-orange-600 rounded-full mr-2"></span>
                    <span><strong>Why it happened:</strong> Brief explanation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 bg-yellow-600 rounded-full mr-2"></span>
                    <span><strong>What to do:</strong> Actionable next steps</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 bg-green-600 rounded-full mr-2"></span>
                    <span><strong>How to fix:</strong> Clear call-to-action</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Prevention Over Correction</h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-300 rounded p-4">
                    <p className="font-medium text-green-900 mb-2">✓ Prevent the Error</p>
                    <p className="text-sm text-gray-700">Disable submit until valid, show requirements upfront, validate in real-time</p>
                  </div>
                  <div className="bg-red-50 border border-red-300 rounded p-4">
                    <p className="font-medium text-red-900 mb-2">✗ Catch After Submit</p>
                    <p className="text-sm text-gray-700">Wait for server error, lose user input, frustrate with re-entry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 pb-2 border-b">Implementation Priorities</h2>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-red-900">Priority 1: Core Functionality</h3>
                  <p className="text-gray-700 mt-1">Must work perfectly before anything else</p>
                </div>
                <div className="bg-red-600 text-white px-4 py-2 rounded font-bold">CRITICAL</div>
              </div>
              <ul className="mt-4 space-y-1 text-sm text-gray-700">
                <li>• Booking flow completion</li>
                <li>• Data integrity</li>
                <li>• Payment processing</li>
                <li>• User authentication</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-orange-900">Priority 2: User Experience</h3>
                  <p className="text-gray-700 mt-1">Makes the system pleasant to use</p>
                </div>
                <div className="bg-orange-600 text-white px-4 py-2 rounded font-bold">HIGH</div>
              </div>
              <ul className="mt-4 space-y-1 text-sm text-gray-700">
                <li>• Response times under 2s</li>
                <li>• Mobile optimization</li>
                <li>• Clear error messages</li>
                <li>• Intuitive navigation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-900">Priority 3: Enhancements</h3>
                  <p className="text-gray-700 mt-1">Nice-to-have improvements</p>
                </div>
                <div className="bg-yellow-600 text-white px-4 py-2 rounded font-bold">MEDIUM</div>
              </div>
              <ul className="mt-4 space-y-1 text-sm text-gray-700">
                <li>• Advanced animations</li>
                <li>• Customization options</li>
                <li>• Additional themes</li>
                <li>• Power user features</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 pb-2 border-b">Design System Components</h2>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Component Library Standards</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-3">Buttons</h4>
                <div className="space-y-2">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Primary Action</button>
                  <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300">Secondary</button>
                  <button className="w-full text-blue-600 py-2 px-4 rounded hover:bg-blue-50">Text Button</button>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-3">Form Inputs</h4>
                <div className="space-y-2">
                  <input type="text" placeholder="Standard input" className="w-full border rounded px-3 py-2 text-sm" />
                  <select className="w-full border rounded px-3 py-2 text-sm">
                    <option>Dropdown select</option>
                  </select>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm">Checkbox option</label>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-3">Alerts</h4>
                <div className="space-y-2">
                  <div className="bg-green-100 border border-green-300 rounded p-2 text-xs text-green-800">Success message</div>
                  <div className="bg-yellow-100 border border-yellow-300 rounded p-2 text-xs text-yellow-800">Warning alert</div>
                  <div className="bg-red-100 border border-red-300 rounded p-2 text-xs text-red-800">Error state</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-3">Cards</h4>
                <div className="border rounded p-3">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded mb-1"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-3">Modals</h4>
                <div className="border rounded p-3 relative">
                  <div className="h-3 bg-gray-300 rounded mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded mb-3"></div>
                  <div className="flex justify-end space-x-2">
                    <div className="w-16 h-6 bg-gray-300 rounded"></div>
                    <div className="w-16 h-6 bg-blue-500 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-3">Navigation</h4>
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <div className="px-3 py-1 bg-blue-600 text-white rounded text-xs">Active</div>
                    <div className="px-3 py-1 bg-gray-200 rounded text-xs">Inactive</div>
                    <div className="px-3 py-1 bg-gray-200 rounded text-xs">Inactive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 pb-2 border-b">Design Decision Framework</h2>
          
          <div className="bg-purple-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-purple-900 mb-6">How We Make Design Decisions</h3>
            
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-4">The Decision Filter</h4>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <div className="flex-1">
                    <p className="font-semibold">Does it solve a real user problem?</p>
                    <p className="text-sm text-gray-600">If no → Stop here</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <div className="flex-1">
                    <p className="font-semibold">Is it the simplest solution?</p>
                    <p className="text-sm text-gray-600">If no → Simplify</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-400 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <div className="flex-1">
                    <p className="font-semibold">Is it consistent with existing patterns?</p>
                    <p className="text-sm text-gray-600">If no → Strong justification required</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-300 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                  <div className="flex-1">
                    <p className="font-semibold">Is it accessible to all users?</p>
                    <p className="text-sm text-gray-600">If no → Redesign</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4">✓</div>
                  <div className="flex-1">
                    <p className="font-semibold">Implement with confidence</p>
                    <p className="text-sm text-gray-600">Document the decision for future reference</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 pb-2 border-b">Future-Proofing Principles</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Scalable Architecture</h3>
              <p className="text-gray-700 text-sm">
                Design patterns that work for 100 users or 10,000. Component-based structure allows easy expansion.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-6">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Iterative Improvement</h3>
              <p className="text-gray-700 text-sm">
                Ship early, measure everything, improve continuously. Perfect is the enemy of good enough.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Data-Driven Decisions</h3>
              <p className="text-gray-700 text-sm">
                Every design hypothesis should be testable. Measure impact, not opinions.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 pb-2 border-b">Conclusion</h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Design Promise</h3>
            
            <p className="text-lg text-gray-800 mb-6 italic">
              &quot;We commit to creating a system that feels invisible in its excellence—where technology enhances rather than complicates, where every interaction feels natural, and where users accomplish their goals without thinking about the interface.&quot;
            </p>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Key Takeaways</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">For Developers</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Performance is a feature, not an optimization</li>
                    <li>• Consistency trumps creativity</li>
                    <li>• Build for the real world, not ideal conditions</li>
                    <li>• Every component should be accessible</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">For Stakeholders</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Good design reduces support costs</li>
                    <li>• Simplicity drives adoption</li>
                    <li>• User trust is earned in milliseconds</li>
                    <li>• Design debt is technical debt</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-700">
                This philosophy is a living document. As we learn and grow, so too will our approach to design.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Last updated: August 2025 | Next review: December 2025
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p className="text-sm">© 2025 MLI - System Design Philosophy</p>
          <p className="text-xs mt-2">Design with purpose. Build with passion. Deliver with pride.</p>
        </footer>
      </div>
    </article>
  )
}