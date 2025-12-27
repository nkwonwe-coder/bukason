import { Building2, Package, Cpu, Construction } from 'lucide-react';
import { Button } from '../components/Button';

export function Divisions() {
  const divisions = [
    {
      icon: Building2,
      title: 'Government Contracting',
      image: 'https://images.unsplash.com/photo-1662728132385-11fee9b3db9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY2NzQ3NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      whatWeDo: 'End-to-end contract management for federal, state, and local government agencies. We handle proposal development, contract negotiation, compliance management, and project execution.',
      whoWeServe: 'Federal agencies, state governments, local municipalities, defense contractors, and government prime contractors.',
      howWeDeliver: 'Through disciplined project management, comprehensive compliance frameworks, and experienced personnel cleared for government work.',
      capabilities: [
        'Federal acquisition regulation (FAR) compliance',
        'Proposal development and capture management',
        'Contract administration and closeout',
        'Subcontractor management',
        'Security clearance coordination',
      ],
    },
    {
      icon: Package,
      title: 'Supply Chain and Logistics',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzY2Njg1MTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      whatWeDo: 'Comprehensive supply chain optimization, procurement management, inventory control, and distribution logistics for complex operations.',
      whoWeServe: 'Government agencies, healthcare systems, manufacturing firms, and large-scale operations requiring vendor management.',
      howWeDeliver: 'Using integrated technology platforms, vendor qualification processes, and real-time tracking systems for full supply chain visibility.',
      capabilities: [
        'Strategic sourcing and procurement',
        'Vendor qualification and management',
        'Inventory optimization',
        'Distribution and warehousing',
        'Supply chain analytics and reporting',
      ],
    },
    {
      icon: Cpu,
      title: 'Technology and Digital Solutions',
      image: 'https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NjY4MDMwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      whatWeDo: 'Enterprise technology implementation, digital transformation consulting, cybersecurity services, and IT infrastructure management.',
      whoWeServe: 'Government agencies undergoing modernization, enterprise clients requiring technology integration, and organizations needing cybersecurity solutions.',
      howWeDeliver: 'Through certified professionals, proven methodologies, and partnership with leading technology vendors and platforms.',
      capabilities: [
        'IT infrastructure design and deployment',
        'Cloud migration and management',
        'Cybersecurity and compliance',
        'Digital transformation consulting',
        'System integration and automation',
      ],
    },
    {
      icon: Construction,
      title: 'Infrastructure and Project Services',
      image: 'https://images.unsplash.com/photo-1527335988388-b40ee248d80c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZyYXN0cnVjdHVyZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjY3NTM2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      whatWeDo: 'Large-scale infrastructure development, construction management, facilities maintenance, and capital project delivery.',
      whoWeServe: 'Public sector entities, utilities, transportation authorities, and organizations requiring facility construction and renovation.',
      howWeDeliver: 'With experienced project managers, safety-first protocols, quality control processes, and adherence to all regulatory requirements.',
      capabilities: [
        'Project planning and design coordination',
        'Construction management and oversight',
        'Safety and quality assurance',
        'Facilities operations and maintenance',
        'Capital project delivery',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6">Our Business Divisions</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Four integrated divisions delivering comprehensive solutions across government and enterprise sectors.
          </p>
        </div>
      </section>

      {/* Divisions */}
      {divisions.map((division, index) => (
        <section
          key={division.title}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <division.icon className="h-8 w-8 text-blue-900" />
                </div>
                <h2 className="mb-6">{division.title}</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2">What We Do</h3>
                    <p className="text-gray-700">{division.whatWeDo}</p>
                  </div>

                  <div>
                    <h3 className="mb-2">Who We Serve</h3>
                    <p className="text-gray-700">{division.whoWeServe}</p>
                  </div>

                  <div>
                    <h3 className="mb-2">How We Deliver</h3>
                    <p className="text-gray-700">{division.howWeDeliver}</p>
                  </div>

                  <div>
                    <h3 className="mb-3">Key Capabilities</h3>
                    <ul className="space-y-2">
                      {division.capabilities.map((capability) => (
                        <li key={capability} className="flex items-start text-gray-700">
                          <span className="mr-2">•</span>
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  src={division.image}
                  alt={division.title}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover how our integrated divisions can support your project requirements.
          </p>
          <Button variant="secondary" href="/contact">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
