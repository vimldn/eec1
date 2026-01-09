import Link from 'next/link';
import type { Metadata } from 'next';
import CTASection from '@/components/CTASection';
import { cities, getCityBySlug, getAllCitySlugs } from '@/data/cities';
import { getServiceBySlug } from '@/data/services';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('seo')!;

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({
    city: `seo-agency-${slug}`,
  }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const citySlug = params.city.replace('seo-agency-', '');
  const city = getCityBySlug(citySlug);
  
  if (!city) return {};
  
  return {
    title: `SEO Agency ${city.name} | Grow Your Organic Traffic`,
    description: `Expert SEO services in ${city.name}. We help ${city.region} businesses increase organic traffic and rankings. Since 2011.`,
  };
}

export default function SEOCityPage({ params }: { params: { city: string } }) {
  const citySlug = params.city.replace('seo-agency-', '');
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
            <Link href="/seo/" className="hover:text-white transition-colors">SEO</Link>
            <span>→</span>
            <span className="text-brand">{city.name}</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            SEO Agency <span className="text-brand">{city.name}</span>
          </h1>
          
          <p className="text-xl text-text-muted mb-8 leading-relaxed">
            Grow your organic traffic and outrank competitors in {city.name}. We deliver sustainable SEO results for {city.region} businesses.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {['Since 2011', 'Full-Service SEO', 'Transparent Reporting'].map((badge) => (
              <span key={badge} className="bg-white/10 px-4 py-2 rounded-md text-sm">
                ✓ {badge}
              </span>
            ))}
          </div>
          
          <Link 
            href="/contact/"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3.5 rounded-lg font-semibold transition-all"
          >
            Get Your Free {city.name} SEO Audit
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
            <p className="section-label">SEO for {city.name} Businesses</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Stand out in {city.description}
            </h2>
            <div className="text-text-muted space-y-4 leading-relaxed">
              <p>
                {city.name}'s competitive business landscape demands a strong online presence. With key industries including {city.industries.slice(0, 3).join(', ')}, ranking on Google is essential for growth.
              </p>
              <p>
                Our SEO service goes beyond just rankings. We focus on driving qualified traffic that converts into leads and customers. Whether you're targeting local {city.name} customers or a national audience, we'll build a strategy that delivers.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '92%', label: 'of searchers choose page 1 results' },
              { number: '5.7x', label: 'higher close rate vs outbound' },
              { number: '70%', label: 'of clicks go to organic results' },
              { number: '14.6%', label: 'SEO lead close rate vs 1.7% outbound' }
            ].map((stat, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-5 text-center">
                <div className="text-2xl font-bold text-brand mb-1">{stat.number}</div>
                <div className="text-xs text-text-secondary">{stat.label}</div>
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
            Our {city.name} SEO Service
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
            Common questions about SEO in {city.name}
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
        title={`Ready to grow your ${city.name} business?`}
        description={`Get a free audit and see exactly where you stand against your ${city.name} competitors.`}
        buttonText={`Get Your Free ${city.name} SEO Audit`}
      />

      {/* Related cities */}
      <section className="px-6 py-12 bg-dark-lighter border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm font-semibold text-text-secondary mb-4">
            SEO in other UK cities
          </h3>
          <div className="flex flex-wrap gap-3">
            {relatedCities.map((relatedCity) => (
              <Link
                key={relatedCity.slug}
                href={`/seo/seo-agency-${relatedCity.slug}/`}
                className="bg-dark-card border border-white/[0.08] rounded-md px-4 py-2 text-sm hover:border-brand transition-colors"
              >
                SEO Agency {relatedCity.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
