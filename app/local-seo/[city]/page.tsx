import Link from 'next/link';
import type { Metadata } from 'next';
import CTASection from '@/components/CTASection';
import { cities, getCityBySlug, getAllCitySlugs } from '@/data/cities';
import { getServiceBySlug } from '@/data/services';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('local-seo')!;

// Generate static paths for all cities
export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({
    city: `local-seo-agency-${slug}`,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const citySlug = params.city.replace('local-seo-agency-', '');
  const city = getCityBySlug(citySlug);
  
  if (!city) return {};
  
  return {
    title: `Local SEO Agency ${city.name} | Get Found Locally`,
    description: `Expert local SEO services in ${city.name}. We help ${city.region} businesses dominate Google Maps and local search results. Since 2011.`,
  };
}

export default function LocalSEOCityPage({ params }: { params: { city: string } }) {
  const citySlug = params.city.replace('local-seo-agency-', '');
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const relatedCities = cities.filter(c => c.slug !== city.slug).slice(0, 5);

  return (
    <>
      {/* Hero with city image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background image placeholder - gradient fallback */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/40"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.7) 50%, rgba(10,10,15,0.4) 100%), url('/images/cities/${city.slug}.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 px-6 py-16 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>→</span>
            <Link href="/local-seo/" className="hover:text-white transition-colors">Local SEO</Link>
            <span>→</span>
            <span className="text-brand">{city.name}</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            Local SEO Agency <span className="text-brand">{city.name}</span>
          </h1>
          
          <p className="text-xl text-text-muted mb-8 leading-relaxed">
            Get found by {city.name} customers searching for your services. We help {city.region} businesses dominate Google Maps and local search results.
          </p>
          
          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {['Since 2011', `${city.name} Specialists`, 'No Long Contracts'].map((badge) => (
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

      {/* Local context section */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label">Why {city.name} Businesses Need Local SEO</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {city.population} people in {city.region} searching for services like yours
            </h2>
            <div className="text-text-muted space-y-4 leading-relaxed">
              <p>
                {city.name} is {city.description}. With thriving industries in {city.industries.slice(0, 3).join(', ')}, your competitors are already investing in local SEO. The businesses that show up in Google's local pack are capturing the lion's share of calls and enquiries.
              </p>
              <p>
                Whether you're based near {city.landmarks[0]}, {city.landmarks[1]}, or anywhere in {city.region}, we help you get found by customers who are actively searching for what you offer.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '46%', label: 'of Google searches have local intent' },
              { number: '88%', label: 'of local searches result in a call within 24 hours' },
              { number: '76%', label: 'of local searchers visit within a day' },
              { number: '28%', label: 'of local searches result in a purchase' }
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
            Our {city.name} Local SEO Service
          </h2>
          
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: 'Google Business Profile Optimisation', desc: `Complete setup and optimisation of your GBP listing to rank in ${city.name}'s local pack.` },
              { title: 'Local Citation Building', desc: `Build consistent NAP listings across 100+ UK directories relevant to ${city.name} businesses.` },
              { title: 'Review Generation System', desc: 'Automated system to generate more 5-star reviews and build local trust.' },
              { title: 'Local Content Strategy', desc: `Location-specific pages targeting "${city.name}" + service keywords.` },
              { title: 'Competitor Analysis', desc: `Deep analysis of what's working for your ${city.name} competitors.` },
              { title: 'Monthly Reporting', desc: 'Clear monthly reports showing rankings, traffic, and leads.' }
            ].map((item, i) => (
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
            Common questions about Local SEO in {city.name}
          </h2>
          
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-6">
                <h3 className="font-semibold mb-2">{faq.question.replace('{city}', city.name)}</h3>
                <p className="text-text-secondary text-sm">{faq.answer.replace(/{city}/g, city.name).replace(/{region}/g, city.region)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title={`Ready to dominate ${city.name} search?`}
        description={`Get a free audit and see exactly where you stand against your ${city.name} competitors.`}
        buttonText={`Get Your Free ${city.name} SEO Audit`}
      />

      {/* Related cities */}
      <section className="px-6 py-12 bg-dark-lighter border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm font-semibold text-text-secondary mb-4">
            Local SEO in other UK cities
          </h3>
          <div className="flex flex-wrap gap-3">
            {relatedCities.map((relatedCity) => (
              <Link
                key={relatedCity.slug}
                href={`/local-seo/local-seo-agency-${relatedCity.slug}/`}
                className="bg-dark-card border border-white/[0.08] rounded-md px-4 py-2 text-sm hover:border-brand transition-colors"
              >
                Local SEO Agency {relatedCity.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
