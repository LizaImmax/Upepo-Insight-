import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Insights',
      links: [
        { name: 'Reports', href: '/reports' },
        { name: 'Pulse', href: '/pulse' },
        { name: 'Trends', href: '/trends' },
        { name: 'Metrics Dashboard', href: '/metrics' },
        { name: 'Knowledge Hub', href: '/knowledge-hub' },
      ]
    },
    {
      title: 'Upepo Ecosystem',
      links: [
        { name: 'Upepo Learn', href: 'https://learn.upepo.africa' },
        { name: 'Upepo Voices', href: 'https://voices.upepo.africa' },
        { name: 'Upepo Network', href: 'https://network.upepo.africa' },
        { name: 'Upepo Labs', href: 'https://labs.upepo.africa' },
        { name: 'Upepo Foundation', href: 'https://foundation.upepo.africa' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Research Lab', href: '/research-lab' },
        { name: 'API Documentation', href: '/api-docs' },
        { name: 'Data Methodology', href: '/methodology' },
        { name: 'Contribute Data', href: '/contribute' },
        { name: 'Partner With Us', href: '/partners' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Upepo', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 border-t border-gray-800">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-premium rounded-lg flex items-center justify-center">
                <span className="text-2xl">💫</span>
              </div>
              <div>
                <h3 className="text-lg font-bold gradient-text">Upepo Insights</h3>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Africa's leading research and analytics platform for cloud computing and cybersecurity.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/upepo" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-cyber-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/company/upepo" target="_blank" rel="noopener noreferrer"
                 className="hover:text-cyber-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/upepo" target="_blank" rel="noopener noreferrer"
                 className="hover:text-cyber-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:insights@upepo.africa"
                 className="hover:text-cyber-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm hover:text-cyber-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="font-semibold text-white mb-2">Subscribe to Upepo Pulse</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get monthly insights, reports, and trends delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-royal-500 text-white"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Upepo Insights. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Built with 💜 for the African tech community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
