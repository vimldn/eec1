import Link from 'next/link';
import type { Metadata } from 'next';
import CTASection from '@/components/CTASection';
import { getServiceBySlug } from '@/data/services';
import { cities } from '@/data/cities';

const service = getServiceBySlug('seo-consultancy')!;

export const metadata: Metadata = {
  title: `${service.name} UK | Expert SEO Guidance`,
  description: service.longDesc,
};

export default function SEOConsultancyPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute -top-1/3 -right-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl relative z-10">
          <p className="section-label">{service.name}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {service.title} <span className="text-brand">UK</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mb-8">
            {service.longDesc}
          </p>
          <Link 
            href="/contact/"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3.5 rounded-lg font-semibold transition-all"
          >
            Book a Consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-16 bg-dark-lighter">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Why {service.name}?</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-5">
                <div className="text-brand text-xl mb-2">✓</div>
                <p className="text-sm font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">What's Included</p>
          <h2 className="text-3xl font-bold mb-10">Our {service.name} Service</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {service.includes.map((item, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-6 flex gap-4">
                <div className="w-6 h-6 bg-brand/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Locations */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">Locations</p>
          <h2 className="text-3xl font-bold mb-10">{service.title} by City</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/seo-consultancy/seo-consultancy-${city.slug}/`}
                className="bg-dark-card border border-white/[0.08] rounded-lg p-4 hover:border-brand transition-colors text-center"
              >
                <span className="text-sm font-medium">{city.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-center">FAQs</p>
          <h2 className="text-3xl font-bold mb-10 text-center">Common Questions</h2>
          
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-6">
                <h3 className="font-semibold mb-2">{faq.question.replace('{city}', 'the UK')}</h3>
                <p className="text-text-secondary text-sm">{faq.answer.replace(/{city}/g, 'the UK')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Need expert SEO guidance?"
        description="Book a free consultation to discuss how we can support your team."
        buttonText="Book a Consultation"
        variant="dark"
      />
    </>
  );
}
