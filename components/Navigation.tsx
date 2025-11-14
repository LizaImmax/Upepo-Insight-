'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Reports', href: '/reports' },
    { name: 'Metrics', href: '/metrics' },
    { name: 'Pulse', href: '/pulse' },
    { 
      name: 'More', 
      href: '#',
      submenu: [
        { name: 'Knowledge Hub', href: '/knowledge-hub' },
        { name: 'About Us', href: '/about' },
        { name: 'Ecosystem', href: '#', disabled: true },
        { name: 'Upepo Learn', href: 'https://learn.upepo.africa', external: true },
        { name: 'Upepo Voices', href: 'https://voices.upepo.africa', external: true },
        { name: 'Upepo Network', href: 'https://network.upepo.africa', external: true },
      ]
    },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[rgba(10,10,15,0.8)] backdrop-blur-xl border-b border-white/5 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-11 h-11 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">💫</span>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Upepo Insights
              </h1>
              <p className="text-xs text-gray-400 font-medium">Intelligence Platform</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <ChevronDown size={14} className="opacity-60 group-hover:translate-y-0.5 transition-transform" />
                    </button>
                    <div className="absolute top-full right-0 mt-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="glass-card rounded-xl overflow-hidden shadow-2xl">
                        {item.submenu.map((subItem, idx) => (
                          subItem.disabled ? (
                            <div
                              key={subItem.name}
                              className={`px-4 py-2.5 text-xs text-gray-500 font-semibold uppercase tracking-wider ${
                                idx !== item.submenu!.length - 1 ? 'border-b border-white/5' : ''
                              }`}
                            >
                              {subItem.name}
                            </div>
                          ) : (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all ${
                                idx !== item.submenu!.length - 1 ? 'border-b border-white/5' : ''
                              }`}
                              target={subItem.external ? '_blank' : undefined}
                            >
                              {subItem.name}
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link 
                    href={item.href} 
                    className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/subscribe" className="btn-gold !px-6 !py-2.5 text-sm font-semibold">
              Subscribe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-white/5 mt-2 pt-4">
            {navItems.map((item) => (
              <div key={item.name} className="mb-2">
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => !item.submenu && setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                        target={subItem.external ? '_blank' : undefined}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="/subscribe" 
              className="mt-4 block text-center btn-gold !px-5 !py-3 text-sm font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Subscribe to Pulse
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
