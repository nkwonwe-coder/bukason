import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from 'bukason.png';

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Divisions', href: '/divisions' },
    { name: 'Projects', href: '/projects' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Bukason Group" className="h-12 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <img src={logo} alt="Bukason Group" className="h-16 w-auto mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed">
                Delivering reliable solutions across government contracting, supply chain, technology, and infrastructure.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="text-gray-400 hover:text-teal-400 transition-colors">About Us</Link></li>
                <li><Link to="/divisions" className="text-gray-400 hover:text-teal-400 transition-colors">Divisions</Link></li>
                <li><Link to="/projects" className="text-gray-400 hover:text-teal-400 transition-colors">Projects</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-teal-400 transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Services</h3>
              <ul className="space-y-3 text-sm">
                <li className="text-gray-400">Government Contracting</li>
                <li className="text-gray-400">Supply Chain</li>
                <li className="text-gray-400">Technology Solutions</li>
                <li className="text-gray-400">Infrastructure</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Contact</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>Email: info@bukasongroup.com</li>
                <li>Phone: +1 512 673 8253</li>
                <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact Form</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Bukason Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}