import { Building2, Package, Cpu, Construction, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';

export function Home() {
  const services = [
    {
      icon: Building2,
      title: 'Government Contracting',
      description: 'End-to-end contract management and execution for federal, state, and local government agencies.',
    },
    {
      icon: Package,
      title: 'Supply Chain and Logistics',
      description: 'Comprehensive supply chain optimization, procurement, and distribution management services.',
    },
    {
      icon: Cpu,
      title: 'Technology and Digital Solutions',
      description: 'Enterprise technology implementation, digital transformation, and IT infrastructure services.',
    },
    {
      icon: Construction,
      title: 'Infrastructure and Project Services',
      description: 'Large-scale infrastructure development, construction management, and project delivery.',
    },
  ];

  const capabilities = [
    'Government and enterprise project delivery',
    'Procurement and compliance readiness',
    'Supply chain operations and optimization',
    'Technology-enabled solutions',
    'Program and risk management',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-6">
                Enterprise Solutions Provider
              </div>
              <h1 className="mb-6 text-4xl lg:text-5xl">
                Delivering reliable solutions across government contracting, supply chain, technology, and infrastructure
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We partner with public-sector and enterprise organizations to deliver complex projects with accountability and results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" href="/contact">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="secondary" href="/about">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjY3MjUyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern office building"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Sectors Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four integrated divisions delivering comprehensive solutions across government and enterprise sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Bukason Group Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-8">Built for Complex Work</h2>
          <div className="h-1 bg-gradient-to-r from-teal-500 to-blue-600 w-24 mx-auto mb-10 rounded-full"></div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Bukason Group operates in regulated and high-accountability environments. We focus on disciplined
            execution, compliance, and long-term value. Our approach prioritizes transparency, risk management,
            and measurable outcomes.
          </p>
        </div>
      </section>

      {/* Capabilities Snapshot */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1760346546771-a81d986459ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjY3MDk4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Corporate team meeting"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-8">Capabilities Snapshot</h2>
              <ul className="space-y-4">
                {capabilities.map((capability) => (
                  <li key={capability} className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 mt-0.5">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Let's Build What Matters</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Partner with Bukason Group to deliver projects that require structure, scale, and accountability.
          </p>
          <Button variant="secondary" href="/contact">
            Start a Conversation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}