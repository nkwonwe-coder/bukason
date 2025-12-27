import { Users, TrendingUp, Award, Heart } from 'lucide-react';
import { Button } from '../components/Button';

export function Careers() {
  const values = [
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work as integrated teams, supporting one another to deliver excellence for our clients.',
    },
    {
      icon: TrendingUp,
      title: 'Professional Growth',
      description: 'We invest in our people through training, mentorship, and career development opportunities.',
    },
    {
      icon: Award,
      title: 'Execution Excellence',
      description: 'We take pride in delivering high-quality work and meeting our commitments consistently.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and accountability in all that we do.',
    },
  ];

  const opportunities = [
    {
      title: 'Project Management',
      description: 'Lead complex government and enterprise projects with experienced teams.',
      requirements: 'PMP certification, government contracting experience, security clearance eligible.',
    },
    {
      title: 'Supply Chain Specialists',
      description: 'Optimize procurement, logistics, and vendor management operations.',
      requirements: 'Supply chain certification, ERP experience, analytical skills.',
    },
    {
      title: 'Technology Consultants',
      description: 'Implement enterprise technology solutions and digital transformation initiatives.',
      requirements: 'Technical certifications, enterprise IT experience, client-facing skills.',
    },
    {
      title: 'Compliance Analysts',
      description: 'Ensure regulatory compliance and quality standards across operations.',
      requirements: 'Compliance certification, government regulation knowledge, attention to detail.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6">Careers at Bukason Group</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Join a team of professionals delivering impactful solutions for government and enterprise clients.
          </p>
        </div>
      </section>

      {/* Working at Bukason Group */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Working at Bukason Group</h2>
              <p className="text-gray-700 mb-4">
                We seek professionals who thrive in regulated, high-accountability environments and take pride
                in delivering complex projects with precision and integrity.
              </p>
              <p className="text-gray-700 mb-4">
                Our team members work on meaningful projects that impact government operations, enterprise
                efficiency, and public infrastructure. You'll collaborate with experienced professionals,
                develop specialized expertise, and contribute to outcomes that matter.
              </p>
              <p className="text-gray-700">
                We offer competitive compensation, comprehensive benefits, professional development opportunities,
                and a culture that values both individual contribution and team success.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY2Nzc1OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Culture and Values */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Our Culture and Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-6 bg-white rounded-lg">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="mb-2">{value.title}</h3>
                <p className="text-gray-700 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12">Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((opportunity) => (
              <div key={opportunity.title} className="p-6 border border-gray-200 rounded-lg">
                <h3 className="mb-2">{opportunity.title}</h3>
                <p className="text-gray-700 mb-4">{opportunity.description}</p>
                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-medium">Typical requirements:</span> {opportunity.requirements}
                </div>
                <Button variant="primary" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits and Development */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Benefits and Development</h2>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg">
              <h3 className="mb-3">Comprehensive Benefits</h3>
              <p className="text-gray-700">
                Competitive salaries, health insurance, retirement plans, paid time off, and professional
                liability coverage for applicable roles.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h3 className="mb-3">Professional Development</h3>
              <p className="text-gray-700">
                Support for industry certifications, training programs, conference attendance, and continuing
                education relevant to your role.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h3 className="mb-3">Career Advancement</h3>
              <p className="text-gray-700">
                Clear career paths with opportunities to take on increasing responsibility, lead teams, and
                contribute to strategic initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Send your resume and cover letter to careers@bukasongroup.com
          </p>
          <p className="text-blue-100">
            We review applications on an ongoing basis and will contact qualified candidates for further discussion.
          </p>
        </div>
      </section>
    </div>
  );
}
