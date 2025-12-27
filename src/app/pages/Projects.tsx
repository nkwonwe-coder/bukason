import { CheckCircle2, Target, Shield } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Federal Supply Chain Modernization',
      category: 'Supply Chain & Logistics',
      description: 'Comprehensive supply chain optimization for a federal agency, reducing costs by 28% while improving delivery timelines.',
      outcomes: ['$12M annual cost savings', '40% reduction in delivery time', '99.2% fulfillment accuracy'],
    },
    {
      title: 'State Government IT Infrastructure',
      category: 'Technology Solutions',
      description: 'Enterprise-wide technology infrastructure upgrade for a state government, modernizing legacy systems across 15 agencies.',
      outcomes: ['150+ legacy systems migrated', '24/7 uptime achieved', 'Enhanced cybersecurity posture'],
    },
    {
      title: 'Municipal Facilities Development',
      category: 'Infrastructure Services',
      description: 'Design and construction management for a $45M municipal facilities project including administrative buildings and public spaces.',
      outcomes: ['Delivered on time and budget', 'LEED Silver certification', 'Zero safety incidents'],
    },
    {
      title: 'Defense Contractor Logistics Support',
      category: 'Government Contracting',
      description: 'Multi-year logistics and warehousing support contract for defense prime contractor operations.',
      outcomes: ['5-year contract renewal', '100% compliance record', 'Expanded scope in year 3'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6">Projects & Capabilities</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Representative examples of our work across government and enterprise sectors.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-sm text-teal-600 mb-2">{project.category}</div>
                <h3 className="mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-900">Key Outcomes:</div>
                  {project.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-gray-600">
            Note: Project details have been generalized to protect client confidentiality and security requirements.
          </div>
        </div>
      </section>

      {/* Delivery Approach */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Our Delivery Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="mb-3">Disciplined Planning</h3>
              <p className="text-gray-700">
                Comprehensive project planning with clear milestones, resource allocation, and risk mitigation
                strategies established before project kickoff.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="mb-3">Execution Excellence</h3>
              <p className="text-gray-700">
                Consistent delivery through proven methodologies, experienced personnel, and continuous quality
                monitoring throughout the project lifecycle.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="mb-3">Compliance Assurance</h3>
              <p className="text-gray-700">
                Rigorous adherence to all regulatory requirements, contract terms, and client-specific protocols
                with full documentation and auditability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality and Risk Management */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Quality and Risk Management</h2>
          <div className="space-y-6">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="mb-3">Quality Assurance</h3>
              <p className="text-gray-700">
                We maintain ISO-aligned quality management systems with regular audits, performance metrics, and
                continuous improvement processes to ensure consistent delivery standards.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="mb-3">Risk Management</h3>
              <p className="text-gray-700">
                Proactive risk identification, assessment, and mitigation throughout project lifecycles. We maintain
                contingency plans and conduct regular risk reviews with stakeholders.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="mb-3">Performance Monitoring</h3>
              <p className="text-gray-700">
                Real-time project dashboards, regular status reporting, and transparent communication channels
                ensure stakeholders have full visibility into project progress and outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
