'use client';

import Link from 'next/link';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/${service.slug}/`}>
      <div className="bg-dark-card border border-white/[0.08] rounded-2xl p-8 transition-all duration-300 hover:border-brand hover:-translate-y-1.5 cursor-pointer group h-full">
        <div className="w-14 h-14 bg-brand/15 rounded-xl flex items-center justify-center mb-6 text-2xl">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {service.shortDesc}
        </p>
        <div className="flex items-center gap-2 text-brand text-sm font-medium">
          View locations
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
