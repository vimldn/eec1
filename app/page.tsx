import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';
import { clients, featuredTestimonial } from '@/data/clients';
import { cities } from '@/data/cities';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute -top-1/3 -right-1/4 w-[600px] h-[600px] bg-brand/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-dark-card border border-white/[0.08] px-4 py-2 rounded-full text-sm text-text-secondary mb-6">
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
            Trusted by UK businesses since 2011
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
            SEO that delivers{' '}
            <span className="text-brand">real results.</span>
            <br />
            Not just rankings.
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-text-secondary max-w-xl mb-8">
            We help UK businesses grow through search. Local SEO, national campaigns, and expert consultancy — all backed by 14 years of proven results.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact/"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3.5 rounded-lg font-semibold transition-all hover:-translate-y-0.5"
            >
              Get Your Free SEO Audit
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/case-studies/"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 px-6 py-3.5 rounded-lg font-semibold transition-all"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="px-6 py-12 bg-dark-lighter border-t border-white/[0.08]">
        <p className="text-xs uppercase tracking-wider text-text-secondary mb-6">
          Trusted by national brands and local businesses
        </p>
        <div className="flex flex-wrap gap-x-12 gap-y-4 items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex flex-col">
              <span className="text-white font-semibold opacity-80">{client.name}</span>
              <span className={`text-[0.65rem] uppercase tracking-wider ${client.type === 'national' ? 'text-brand' : 'text-text-secondary'}`}>
                {client.type}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Why SEO Matters Section */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label">Why SEO Matters</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              The most cost-effective way to grow your business
            </h2>
            <div className="space-y-5 text-text-muted leading-relaxed">
              <p>
                Every day, millions of people search Google for products and services. Unlike paid ads, where you pay for every click, SEO delivers compounding returns. The traffic you earn today keeps coming tomorrow, next month, and next year — without ongoing ad spend.
              </p>
              <p>
                For local businesses, the stakes are even higher. When someone searches "solicitor near me" or "plumber in Manchester", they're not browsing — they're ready to buy.{' '}
                <span className="text-brand font-medium">46% of all Google searches have local intent</span>, and the businesses that show up in those top 3 map results capture the vast majority of calls and enquiries.
              </p>
              <p>
                SEO isn't just about rankings. It's about being visible at the exact moment your ideal customer is looking for what you offer. It's the difference between chasing customers and having them come to you.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              { number: '46%', label: 'of all Google searches have local intent', desc: 'Nearly half of everyone using Google is looking for something nearby.' },
              { number: '92%', label: 'of searchers choose businesses on page 1', desc: "If you're not on page one, you're invisible to most customers." },
              { number: '5.7x', label: 'higher close rate than outbound leads', desc: "People searching for you are ready to buy. Cold leads aren't." }
            ].map((stat, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-6 flex gap-5">
                <div className="text-3xl font-bold text-brand min-w-[80px]">{stat.number}</div>
                <div>
                  <div className="font-semibold text-sm mb-1">{stat.label}</div>
                  <div className="text-sm text-text-secondary">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="section-label">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Three ways we help you grow
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">UK Coverage</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">
            SEO services across the UK
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service) => (
              <div key={service.slug}>
                <h3 className="text-lg font-semibold text-brand mb-4">{service.name}</h3>
                <ul className="space-y-2">
                  {cities.slice(0, 10).map((city) => (
                    <li key={city.slug}>
                      <Link 
                        href={`/${service.slug}/${service.title.toLowerCase().replace(/ /g, '-')}-${city.slug}/`}
                        className="text-text-secondary hover:text-white text-sm transition-colors"
                      >
                        {service.title} {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/${service.slug}/`}
                  className="inline-block mt-4 text-brand text-sm font-medium hover:underline"
                >
                  + 20 more cities →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '14', label: 'Years in business' },
            { number: '200+', label: 'Clients served' },
            { number: '£4.2M', label: 'Revenue generated for clients' },
            { number: '312%', label: 'Average traffic increase' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-3xl mx-auto">
          <div className="bg-dark-card border border-white/[0.08] rounded-2xl p-8 md:p-12">
            <p className="section-label">Client Success</p>
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8">
              "{featuredTestimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand to-brand-light rounded-full flex items-center justify-center font-bold text-dark">
                {featuredTestimonial.initials}
              </div>
              <div>
                <div className="font-semibold">{featuredTestimonial.client}</div>
                <div className="text-sm text-text-secondary">{featuredTestimonial.industry}, {featuredTestimonial.location}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
