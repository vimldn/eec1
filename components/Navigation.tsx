'use client';

import Link from 'next/link';
import { useState } from 'react';
import { services } from '@/data/services';

export default function Navigation() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-dark/95 backdrop-blur-lg border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-brand to-brand-light rounded-lg flex items-center justify-center font-bold text-lg text-dark">
            E
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight leading-tight">
              Extra Edge Club
            </div>
            <div className="text-[0.65rem] text-text-secondary tracking-wider">
              SEO SPECIALISTS SINCE 2011
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-white font-medium text-sm flex items-center gap-1">
              Services
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-dark-card border border-white/[0.08] rounded-lg shadow-xl py-2">
                {services.map((service) => (
                  <Link 
                    key={service.slug}
                    href={`/${service.slug}/`}
                    className="block px-4 py-3 hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{service.icon}</span>
                      <div>
                        <div className="font-medium text-sm">{service.name}</div>
                        <div className="text-xs text-text-secondary">{service.shortDesc.slice(0, 50)}...</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/case-studies/" className="text-text-secondary hover:text-white text-sm transition-colors">
            Case Studies
          </Link>
          <Link href="/about/" className="text-text-secondary hover:text-white text-sm transition-colors">
            About
          </Link>
          <Link href="/contact/" className="text-text-secondary hover:text-white text-sm transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link 
          href="/contact/" 
          className="bg-brand hover:bg-brand-dark text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-all hover:-translate-y-0.5"
        >
          Free SEO Audit
        </Link>
      </div>
    </nav>
  );
}
