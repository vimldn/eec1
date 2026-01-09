export interface Service {
  slug: string;
  name: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  benefits: string[];
  includes: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: 'local-seo',
    name: 'Local SEO',
    title: 'Local SEO Agency',
    shortDesc: 'Dominate Google Maps and local pack results. Get found by customers in your area who are ready to buy.',
    longDesc: 'Local SEO is about being visible when nearby customers search for your products or services. We optimise your Google Business Profile, build local citations, generate reviews, and create location-specific content to ensure you appear in the local pack and map results.',
    icon: '📍',
    benefits: [
      'Appear in Google\'s Local 3-Pack',
      'More calls from Google Maps',
      'Higher quality local leads',
      'Dominate your service area',
      'Build local trust and authority'
    ],
    includes: [
      { title: 'Google Business Profile Optimisation', desc: 'Complete setup and optimisation of your GBP listing to rank in local pack results.' },
      { title: 'Local Citation Building', desc: 'Build consistent NAP listings across 100+ UK directories relevant to local businesses.' },
      { title: 'Review Generation System', desc: 'Automated system to generate more 5-star reviews and build local trust.' },
      { title: 'Local Content Strategy', desc: 'Location-specific pages targeting "[service] + [location]" keywords.' },
      { title: 'Local Link Building', desc: 'Earn links from local businesses, directories, and community sites.' },
      { title: 'Monthly Reporting', desc: 'Clear monthly reports showing rankings, traffic, calls, and leads.' }
    ],
    faqs: [
      { question: 'How much does local SEO cost in {city}?', answer: 'Our {city} local SEO packages start from £500/month. The exact cost depends on your competition level, number of locations, and goals. We\'ll give you a clear quote after your free audit.' },
      { question: 'How long does it take to rank locally in {city}?', answer: 'Most {city} businesses see significant improvements within 3-6 months. Highly competitive industries may take longer. We\'ll give you realistic timelines based on your specific market.' },
      { question: 'Do I need a physical address in {city}?', answer: 'For Google Business Profile, you need either a physical location customers can visit or a defined service area. We can advise on the best approach for your business.' },
      { question: 'What makes Extra Edge Club different?', answer: 'We\'ve been doing this since 2011 - longer than most agencies have existed. We focus on results that matter: calls, leads, and revenue. Not vanity metrics.' }
    ]
  },
  {
    slug: 'seo',
    name: 'SEO',
    title: 'SEO Agency',
    shortDesc: 'Full-scale organic search strategy to increase visibility, traffic, and conversions across the UK.',
    longDesc: 'Our comprehensive SEO service covers everything you need to rank higher and drive more organic traffic. From technical SEO and on-page optimisation to content strategy and link building, we take a holistic approach to sustainable organic growth.',
    icon: '🚀',
    benefits: [
      'Sustainable organic traffic growth',
      'Lower cost per acquisition over time',
      'Build authority in your industry',
      'Outrank competitors',
      'Compound returns on investment'
    ],
    includes: [
      { title: 'Technical SEO Audit & Fixes', desc: 'Comprehensive audit of site speed, crawlability, indexation, and technical issues.' },
      { title: 'On-Page Optimisation', desc: 'Optimise titles, meta descriptions, headings, and content for target keywords.' },
      { title: 'Content Strategy', desc: 'Data-driven content plan targeting keywords your customers are searching for.' },
      { title: 'Link Building', desc: 'Earn high-quality backlinks through outreach, digital PR, and content marketing.' },
      { title: 'Competitor Analysis', desc: 'Deep analysis of what\'s working for your competitors so we can outperform them.' },
      { title: 'Monthly Reporting', desc: 'Transparent reporting on rankings, traffic, conversions, and ROI.' }
    ],
    faqs: [
      { question: 'How much does SEO cost in {city}?', answer: 'Our SEO packages for {city} businesses typically range from £800-£3,000/month depending on competition, site size, and goals. We\'ll recommend the right investment level after auditing your site.' },
      { question: 'How long until I see results from SEO?', answer: 'SEO is a medium to long-term strategy. Most businesses see meaningful improvements within 4-6 months, with results compounding over time. We set realistic expectations from day one.' },
      { question: 'Can you guarantee first page rankings?', answer: 'No legitimate SEO agency can guarantee specific rankings - Google\'s algorithm is constantly changing. What we do guarantee is a proven process, transparent reporting, and a focus on revenue, not just rankings.' },
      { question: 'Do you work with businesses outside {city}?', answer: 'Yes, we work with businesses across the UK and internationally. Our strategies are tailored to your target market, whether that\'s local, national, or global.' }
    ]
  },
  {
    slug: 'seo-consultancy',
    name: 'SEO Consultancy',
    title: 'SEO Consultancy',
    shortDesc: 'Expert guidance for in-house teams. Strategy, audits, and training to level up your SEO capabilities.',
    longDesc: 'Our SEO consultancy service is perfect for businesses with in-house marketing teams who need expert guidance. We provide strategic direction, conduct audits, train your team, and act as an extension of your marketing department.',
    icon: '💡',
    benefits: [
      'Expert guidance without full agency costs',
      'Upskill your in-house team',
      'Strategic direction and prioritisation',
      'Independent audits and second opinions',
      'Flexible engagement models'
    ],
    includes: [
      { title: 'SEO Strategy Development', desc: 'Comprehensive SEO strategy tailored to your business goals and resources.' },
      { title: 'Technical & Content Audits', desc: 'In-depth audits identifying issues and opportunities across your site.' },
      { title: 'Team Training & Workshops', desc: 'Hands-on training to upskill your marketing team in SEO best practices.' },
      { title: 'Ongoing Advisory', desc: 'Regular calls and support to guide your team and answer questions.' },
      { title: 'Implementation Guidance', desc: 'Clear briefs and priorities so your team knows exactly what to do.' },
      { title: 'Quarterly Reviews', desc: 'Strategic reviews to assess progress and adjust the roadmap.' }
    ],
    faqs: [
      { question: 'How is consultancy different from full-service SEO?', answer: 'With consultancy, we provide the strategy, guidance, and expertise, but your team handles the implementation. It\'s ideal if you have marketing resource but need expert direction.' },
      { question: 'How much does SEO consultancy cost?', answer: 'Our consultancy packages start from £1,500/month for ongoing advisory, or we offer one-off audits and strategy projects from £2,500. We\'ll recommend the right approach for your needs.' },
      { question: 'Can you train our team?', answer: 'Absolutely. We offer bespoke training workshops covering technical SEO, content optimisation, link building, and more. Training can be delivered in-person or remotely.' },
      { question: 'Do you work with agencies?', answer: 'Yes, we white-label our consultancy services for agencies who need specialist SEO expertise for their clients.' }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}
