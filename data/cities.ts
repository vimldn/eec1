export interface City {
  slug: string;
  name: string;
  region: string;
  population: string;
  industries: string[];
  landmarks: string[];
  description: string;
}

export const cities: City[] = [
  {
    slug: 'london',
    name: 'London',
    region: 'Greater London',
    population: '9 million',
    industries: ['Finance', 'Tech', 'Creative Industries', 'Professional Services'],
    landmarks: ['The City', 'Canary Wharf', 'Shoreditch', 'Westminster'],
    description: 'the UK\'s largest city and economic hub'
  },
  {
    slug: 'manchester',
    name: 'Manchester',
    region: 'Greater Manchester',
    population: '2.8 million',
    industries: ['Digital & Tech', 'Financial Services', 'Creative Industries', 'Healthcare'],
    landmarks: ['Deansgate', 'MediaCityUK', 'Northern Quarter', 'Spinningfields'],
    description: 'the North\'s digital and creative powerhouse'
  },
  {
    slug: 'birmingham',
    name: 'Birmingham',
    region: 'West Midlands',
    population: '2.9 million',
    industries: ['Manufacturing', 'Financial Services', 'Retail', 'Healthcare'],
    landmarks: ['Bullring', 'Jewellery Quarter', 'Brindleyplace', 'Digbeth'],
    description: 'the UK\'s second largest city and Midlands business centre'
  },
  {
    slug: 'leeds',
    name: 'Leeds',
    region: 'West Yorkshire',
    population: '1.9 million',
    industries: ['Financial Services', 'Legal', 'Digital', 'Healthcare'],
    landmarks: ['Leeds City Centre', 'Trinity Leeds', 'Headingley', 'Roundhay'],
    description: 'Yorkshire\'s largest city and financial services hub'
  },
  {
    slug: 'glasgow',
    name: 'Glasgow',
    region: 'Greater Glasgow',
    population: '1.7 million',
    industries: ['Financial Services', 'Engineering', 'Creative Industries', 'Life Sciences'],
    landmarks: ['Merchant City', 'West End', 'Finnieston', 'City Centre'],
    description: 'Scotland\'s largest city and commercial capital'
  },
  {
    slug: 'liverpool',
    name: 'Liverpool',
    region: 'Merseyside',
    population: '1.5 million',
    industries: ['Maritime', 'Creative Industries', 'Life Sciences', 'Financial Services'],
    landmarks: ['Liverpool ONE', 'Baltic Triangle', 'Albert Dock', 'City Centre'],
    description: 'a vibrant city with a thriving creative and digital sector'
  },
  {
    slug: 'edinburgh',
    name: 'Edinburgh',
    region: 'Lothian',
    population: '540,000',
    industries: ['Financial Services', 'Tourism', 'Tech', 'Higher Education'],
    landmarks: ['Old Town', 'New Town', 'Leith', 'Financial District'],
    description: 'Scotland\'s capital and a major financial centre'
  },
  {
    slug: 'bristol',
    name: 'Bristol',
    region: 'South West England',
    population: '700,000',
    industries: ['Aerospace', 'Tech', 'Creative Industries', 'Financial Services'],
    landmarks: ['Harbourside', 'Clifton', 'Temple Quarter', 'Stokes Croft'],
    description: 'the South West\'s largest city and tech hub'
  },
  {
    slug: 'sheffield',
    name: 'Sheffield',
    region: 'South Yorkshire',
    population: '730,000',
    industries: ['Advanced Manufacturing', 'Healthcare', 'Digital', 'Higher Education'],
    landmarks: ['City Centre', 'Kelham Island', 'Ecclesall Road', 'Meadowhall'],
    description: 'a city reinventing itself through innovation and technology'
  },
  {
    slug: 'newcastle',
    name: 'Newcastle',
    region: 'Tyne and Wear',
    population: '800,000',
    industries: ['Digital', 'Life Sciences', 'Offshore Energy', 'Professional Services'],
    landmarks: ['Quayside', 'Grey Street', 'Ouseburn', 'City Centre'],
    description: 'the North East\'s economic and cultural hub'
  },
  {
    slug: 'nottingham',
    name: 'Nottingham',
    region: 'East Midlands',
    population: '330,000',
    industries: ['Life Sciences', 'Digital', 'Creative Industries', 'Retail'],
    landmarks: ['Lace Market', 'Hockley', 'City Centre', 'Sneinton'],
    description: 'a growing tech and creative hub in the East Midlands'
  },
  {
    slug: 'cardiff',
    name: 'Cardiff',
    region: 'South Wales',
    population: '480,000',
    industries: ['Financial Services', 'Creative Industries', 'Tech', 'Public Sector'],
    landmarks: ['Cardiff Bay', 'City Centre', 'Cathays', 'Canton'],
    description: 'the Welsh capital and a growing business destination'
  },
  {
    slug: 'leicester',
    name: 'Leicester',
    region: 'East Midlands',
    population: '500,000',
    industries: ['Manufacturing', 'Retail', 'Tech', 'Healthcare'],
    landmarks: ['City Centre', 'Cultural Quarter', 'Highcross', 'Leicester Market'],
    description: 'one of the UK\'s most diverse and entrepreneurial cities'
  },
  {
    slug: 'southampton',
    name: 'Southampton',
    region: 'Hampshire',
    population: '260,000',
    industries: ['Maritime', 'Aerospace', 'Financial Services', 'Healthcare'],
    landmarks: ['Ocean Village', 'City Centre', 'Bedford Place', 'Portswood'],
    description: 'a major port city with a growing services sector'
  },
  {
    slug: 'brighton',
    name: 'Brighton',
    region: 'East Sussex',
    population: '290,000',
    industries: ['Digital', 'Creative Industries', 'Tourism', 'Education'],
    landmarks: ['The Lanes', 'North Laine', 'Brighton Marina', 'City Centre'],
    description: 'the UK\'s unofficial digital and creative capital by the sea'
  },
  {
    slug: 'portsmouth',
    name: 'Portsmouth',
    region: 'Hampshire',
    population: '240,000',
    industries: ['Maritime', 'Defence', 'Tech', 'Tourism'],
    landmarks: ['Gunwharf Quays', 'Historic Dockyard', 'Southsea', 'City Centre'],
    description: 'a historic naval city with growing tech and business sectors'
  },
  {
    slug: 'belfast',
    name: 'Belfast',
    region: 'Northern Ireland',
    population: '340,000',
    industries: ['Tech', 'Financial Services', 'Creative Industries', 'Aerospace'],
    landmarks: ['Titanic Quarter', 'Cathedral Quarter', 'City Centre', 'Queen\'s Quarter'],
    description: 'Northern Ireland\'s capital with a booming tech scene'
  },
  {
    slug: 'plymouth',
    name: 'Plymouth',
    region: 'Devon',
    population: '265,000',
    industries: ['Marine', 'Defence', 'Healthcare', 'Tourism'],
    landmarks: ['Barbican', 'Royal William Yard', 'City Centre', 'Sutton Harbour'],
    description: 'the South West\'s largest coastal city'
  },
  {
    slug: 'reading',
    name: 'Reading',
    region: 'Berkshire',
    population: '230,000',
    industries: ['Tech', 'Financial Services', 'Professional Services', 'Logistics'],
    landmarks: ['Oracle', 'Town Centre', 'Caversham', 'Green Park'],
    description: 'a major tech hub in the Thames Valley'
  },
  {
    slug: 'coventry',
    name: 'Coventry',
    region: 'West Midlands',
    population: '370,000',
    industries: ['Automotive', 'Advanced Manufacturing', 'Gaming', 'Healthcare'],
    landmarks: ['City Centre', 'FarGo Village', 'Cathedral Quarter', 'University'],
    description: 'a city of innovation with strong automotive and gaming sectors'
  },
  {
    slug: 'derby',
    name: 'Derby',
    region: 'East Midlands',
    population: '260,000',
    industries: ['Aerospace', 'Rail', 'Advanced Manufacturing', 'Tech'],
    landmarks: ['Cathedral Quarter', 'City Centre', 'Pride Park', 'Darley Abbey'],
    description: 'a centre of engineering excellence and innovation'
  },
  {
    slug: 'stoke-on-trent',
    name: 'Stoke-on-Trent',
    region: 'Staffordshire',
    population: '270,000',
    industries: ['Ceramics', 'Distribution', 'Manufacturing', 'Digital'],
    landmarks: ['Hanley', 'Cultural Quarter', 'Trentham', 'City Centre'],
    description: 'the Potteries, reinventing itself for the digital age'
  },
  {
    slug: 'wolverhampton',
    name: 'Wolverhampton',
    region: 'West Midlands',
    population: '265,000',
    industries: ['Manufacturing', 'Aerospace', 'Professional Services', 'Retail'],
    landmarks: ['City Centre', 'Mander Centre', 'West Park', 'Bilston'],
    description: 'a key West Midlands business location'
  },
  {
    slug: 'swansea',
    name: 'Swansea',
    region: 'South Wales',
    population: '245,000',
    industries: ['Tech', 'Financial Services', 'Healthcare', 'Higher Education'],
    landmarks: ['Marina', 'City Centre', 'Uplands', 'SA1'],
    description: 'Wales\' second city with a growing tech sector'
  },
  {
    slug: 'milton-keynes',
    name: 'Milton Keynes',
    region: 'Buckinghamshire',
    population: '290,000',
    industries: ['Tech', 'Financial Services', 'Logistics', 'Professional Services'],
    landmarks: ['Central Milton Keynes', 'Stadium MK', 'Campbell Park', 'Bletchley'],
    description: 'one of the UK\'s fastest growing business destinations'
  },
  {
    slug: 'aberdeen',
    name: 'Aberdeen',
    region: 'North East Scotland',
    population: '230,000',
    industries: ['Energy', 'Tech', 'Life Sciences', 'Financial Services'],
    landmarks: ['City Centre', 'Old Aberdeen', 'Beach', 'West End'],
    description: 'the energy capital of Europe, diversifying into tech'
  },
  {
    slug: 'norwich',
    name: 'Norwich',
    region: 'Norfolk',
    population: '210,000',
    industries: ['Financial Services', 'Tech', 'Creative Industries', 'Healthcare'],
    landmarks: ['Norwich Lanes', 'City Centre', 'Cathedral Quarter', 'Riverside'],
    description: 'East Anglia\'s largest city and insurance hub'
  },
  {
    slug: 'oxford',
    name: 'Oxford',
    region: 'Oxfordshire',
    population: '155,000',
    industries: ['Education', 'Tech', 'Life Sciences', 'Publishing'],
    landmarks: ['City Centre', 'Jericho', 'Cowley', 'Headington'],
    description: 'a world-renowned centre of education and innovation'
  },
  {
    slug: 'cambridge',
    name: 'Cambridge',
    region: 'Cambridgeshire',
    population: '145,000',
    industries: ['Tech', 'Life Sciences', 'Education', 'Research'],
    landmarks: ['City Centre', 'Science Park', 'Mill Road', 'Station Road'],
    description: 'the heart of Silicon Fen and UK tech innovation'
  },
  {
    slug: 'york',
    name: 'York',
    region: 'North Yorkshire',
    population: '210,000',
    industries: ['Tourism', 'Rail', 'Financial Services', 'Tech'],
    landmarks: ['City Centre', 'Minster Quarter', 'Bishopthorpe Road', 'Clifton'],
    description: 'a historic city with growing digital and financial sectors'
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}
