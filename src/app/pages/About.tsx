import { Target, Eye, Shield, Users } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6">About Bukason Group</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            A diversified group company delivering integrated solutions across government contracting,
            supply chain, technology, and infrastructure sectors.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Company Overview</h2>
              <p className="text-gray-700 mb-4">
                Bukason Group operates at the intersection of public sector requirements and enterprise-scale
                execution. We serve government agencies, institutional clients, and large organizations that
                require disciplined project delivery and proven compliance capabilities.
              </p>
              <p className="text-gray-700 mb-4">
                Our integrated service model combines government contracting expertise, supply chain management,
                technology implementation, and infrastructure development under one organizational structure.
              </p>
              <p className="text-gray-700">
                This approach allows us to deliver comprehensive solutions while maintaining accountability
                across complex, multi-phase engagements.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY2Nzc1OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional business team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To deliver reliable, compliant, and measurable solutions for government and enterprise clients
                through disciplined execution and integrated service capabilities.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the trusted partner for complex, high-accountability projects that require seamless
                coordination across contracting, logistics, technology, and infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership and Governance */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Leadership and Governance</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Bukason Group is led by experienced professionals with backgrounds in government contracting,
              enterprise operations, and regulated industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mb-3">Executive Team</h3>
              <p className="text-gray-700">
                Our leadership team brings decades of combined experience in government contracting, supply
                chain management, technology implementation, and large-scale project delivery.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mb-3">Governance Structure</h3>
              <p className="text-gray-700">
                We maintain robust governance practices, including independent oversight, regular compliance
                audits, and transparent reporting aligned with government and enterprise requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics and Compliance */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Ethics, Transparency, and Compliance</h2>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg">
              <h3 className="mb-3">Ethical Standards</h3>
              <p className="text-gray-700">
                We operate with unwavering integrity and hold ourselves to the highest ethical standards in
                all business dealings, maintaining transparency with clients, partners, and stakeholders.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h3 className="mb-3">Regulatory Compliance</h3>
              <p className="text-gray-700">
                Our operations adhere to all applicable federal, state, and local regulations governing
                government contracting, supply chain management, and professional services delivery.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h3 className="mb-3">Continuous Improvement</h3>
              <p className="text-gray-700">
                We maintain ongoing training programs, compliance monitoring systems, and quality assurance
                processes to ensure consistent adherence to industry best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
