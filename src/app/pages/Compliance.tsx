import { FileCheck, Shield, Lock, Award } from 'lucide-react';

export function Compliance() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6">Compliance & Quality Standards</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Maintaining the highest standards of compliance, security, and quality across all operations.
          </p>
        </div>
      </section>

      {/* Procurement Readiness */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <FileCheck className="h-8 w-8 text-blue-900" />
              </div>
              <h2 className="mb-6">Procurement Readiness</h2>
              <p className="text-gray-700 mb-4">
                Bukason Group maintains active registrations and certifications required for government contracting
                and enterprise procurement processes.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>System for Award Management (SAM) registration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>CAGE code and DUNS number verification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Past performance documentation and references</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Financial capability and bonding capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Insurance and liability coverage</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMG1lZXRpbmd8ZW58MXx8fHwxNzY2NzU5Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business handshake"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="w-16 h-16 bg-teal-50 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="mb-6">Regulatory Compliance</h2>
              <p className="text-gray-700 mb-4">
                Our operations comply with all applicable federal, state, and local regulations governing our
                service areas.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Federal Acquisition Regulation (FAR) compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Defense Federal Acquisition Regulation Supplement (DFARS)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>OSHA safety and health standards</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Environmental protection requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Equal employment opportunity compliance</span>
                </li>
              </ul>
            </div>
            <div className="lg:order-1">
              <div className="p-8 bg-white rounded-lg shadow-sm">
                <h3 className="mb-4">Compliance Training</h3>
                <p className="text-gray-700 mb-4">
                  All personnel receive regular compliance training covering relevant regulations, ethical
                  standards, and company policies.
                </p>
                <p className="text-gray-700">
                  We maintain documented training records and conduct periodic assessments to ensure ongoing
                  compliance awareness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security and Data Protection */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <Lock className="h-8 w-8 text-blue-900" />
              </div>
              <h2 className="mb-6">Security and Data Protection</h2>
              <p className="text-gray-700 mb-4">
                We implement comprehensive security measures to protect sensitive information and maintain the
                integrity of client data.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cybersecurity framework implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Personnel security clearance coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Physical and information security controls</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Incident response and business continuity planning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Regular security audits and assessments</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg">
              <h3 className="mb-4">Data Protection</h3>
              <p className="text-gray-700 mb-4">
                We maintain strict protocols for handling controlled unclassified information (CUI), personally
                identifiable information (PII), and other sensitive data.
              </p>
              <p className="text-gray-700">
                Our data protection measures include encryption, access controls, audit logging, and secure
                disposal procedures in accordance with applicable regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-blue-900" />
            </div>
            <h2 className="mb-4">Quality Standards</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our quality management systems align with industry best practices and regulatory requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg">
              <h3 className="mb-3">Quality Management</h3>
              <p className="text-gray-700">
                ISO-aligned quality management framework with documented procedures, performance metrics, and
                continuous improvement processes.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h3 className="mb-3">Performance Monitoring</h3>
              <p className="text-gray-700">
                Regular performance reviews, customer satisfaction assessments, and internal audits to ensure
                consistent service quality.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h3 className="mb-3">Corrective Action</h3>
              <p className="text-gray-700">
                Systematic approach to identifying, documenting, and resolving quality issues with root cause
                analysis and preventive measures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}