import Link from 'next/link';
import type { Metadata } from 'next';
import CTASection from '@/components/CTASection';
import { cities, getCityBySlug, getAllCitySlugs } from '@/data/cities';
import { getServiceBySlug } from '@/data/services';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('seo-consultancy')!;

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({
    city: `seo-consultancy-${slug}`,
  }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const citySlug = params.city.replace('seo-consultancy-', '');
  const city = getCityBySlug(citySlug);
  
  if (!city) return {};
  
  return {
    title: `SEO Consultancy ${city.name} | Expert SEO Guidance`,
    description: `Expert SEO consultancy services in ${city.name}. Strategy, audits, and training for ${city.region} businesses. Since 2011.`,
  };
}

export default function SEOConsultancyCityPage({ params }: { params: { city: string } }) {
  const citySlug = params.city.replace('seo-consultancy-', '');
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const relatedCities = cities.filter(c => c.slug !== city.slug).slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.7) 50%, rgba(10,10,15,0.4) 100%), url('/images/cities/${city.slug}.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 px-6 py-16 max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>→</span>
            <Link href="/seo-consultancy/" className="hover:text-white transition-colors">SEO Consultancy</Link>
            <span>→</span>
            <span className="text-brand">{city.name}</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            SEO Consultancy <span className="text-brand">{city.name}</span>
          </h1>
          
          <p className="text-xl text-text-muted mb-8 leading-relaxed">
            Expert SEO guidance for {city.name} businesses. Strategy, audits, and training to level up your in-house capabilities.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {['Since 2011', 'Flexible Engagements', 'Team Training'].map((badge) => (
              <span key={badge} className="bg-white/10 px-4 py-2 rounded-md text-sm">
                ✓ {badge}
              </span>
            ))}
          </div>
          
          <Link 
            href="/contact/"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3.5 rounded-lg font-semibold transition-all"
          >
            Book a {city.name} Consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Context section */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label">SEO Consultancy for {city.name} Teams</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Expert guidance for your in-house team
            </h2>
            <div className="text-text-muted space-y-4 leading-relaxed">
              <p>
                Not every {city.name} business needs a full-service agency. If you have marketing resource but need expert direction, our consultancy service gives you the strategy and guidance to succeed.
              </p>
              <p>
                We work with businesses across {city.region}'s key industries - {city.industries.slice(0, 3).join(', ')} - providing audits, strategy development, and hands-on training for your team.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-5 flex items-center gap-4">
                <div className="text-brand text-xl">✓</div>
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="section-label text-center">What's Included</p>
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our {city.name} SEO Consultancy Service
          </h2>
          
          <div className="grid md:grid-cols-2 gap-5">
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

      {/* FAQs */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-center">FAQs</p>
          <h2 className="text-3xl font-bold mb-10 text-center">
            Common questions about SEO Consultancy in {city.name}
          </h2>
          
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-6">
                <h3 className="font-semibold mb-2">{faq.question.replace('{city}', city.name)}</h3>
                <p className="text-text-secondary text-sm">{faq.answer.replace(/{city}/g, city.name)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title={`Need expert SEO guidance in ${city.name}?`}
        description="Book a free consultation to discuss how we can support your team."
        buttonText={`Book a ${city.name} Consultation`}
      />

      {/* Related cities */}
      <section className="px-6 py-12 bg-dark-lighter border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm font-semibold text-text-secondary mb-4">
            SEO Consultancy in other UK cities
          </h3>
          <div className="flex flex-wrap gap-3">
            {relatedCities.map((relatedCity) => (
              <Link
                key={relatedCity.slug}
                href={`/seo-consultancy/seo-consultancy-${relatedCity.slug}/`}
                className="bg-dark-card border border-white/[0.08] rounded-md px-4 py-2 text-sm hover:border-brand transition-colors"
              >
                SEO Consultancy {relatedCity.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
