import { Organization, Startup, Event, Opportunity } from './types';

// Helper to simulate a date in the current month/year
const getDate = (dayOffset: number) => {
  const d = new Date();
  d.setDate(d.getDate() + dayOffset);
  return d;
};

export const ecosystemOrgs: Organization[] = [
  {
    id: 'org_adsg',
    name: 'ADSG Baguio',
    description: 'Association of Dedicated Students and Guilds fostering growth and design in the region.',
    logoUrl: 'https://picsum.photos/id/10/200/200',
    facebookUrl: 'https://www.facebook.com/adsgbaguio',
    type: 'Community'
  },
  {
    id: 'org_awma',
    name: 'AWMA SLU-SC',
    description: 'Academic and student organization focusing on management and accountancy at SLU.',
    logoUrl: 'https://picsum.photos/id/20/200/200',
    facebookUrl: 'https://www.facebook.com/AWMA.SLUSC',
    type: 'Academe'
  },
  {
    id: 'org_boslay',
    name: 'Boslay Arts & Crafts',
    description: 'Promoting local artistry and traditional crafts from the mountains.',
    logoUrl: 'https://picsum.photos/id/30/200/200',
    facebookUrl: 'https://www.facebook.com/boslayartsandcrafts',
    type: 'Non-Profit'
  },
  {
    id: 'org_cegp',
    name: 'CEGP Cordillera',
    description: 'College Editors Guild of the Philippines - Cordillera Chapter.',
    logoUrl: 'https://picsum.photos/id/40/200/200',
    facebookUrl: 'https://www.facebook.com/cegpcordi',
    type: 'Non-Profit'
  },
  {
    id: 'org_csc',
    name: 'Cordillera Studies Center',
    description: 'Research center dedicated to the preservation and study of Cordilleran culture and history.',
    logoUrl: 'https://picsum.photos/id/50/200/200',
    facebookUrl: 'https://www.facebook.com/cordistudiescenter',
    type: 'Academe'
  },
  {
    id: 'org_cyc',
    name: 'Cordillera Youth Center',
    description: 'Empowering the youth of the Cordilleras through education and advocacy.',
    logoUrl: 'https://picsum.photos/id/65/200/200',
    facebookUrl: 'https://www.facebook.com/cordilleranyouthcenter',
    type: 'Non-Profit'
  },
  {
    id: 'org_dict',
    name: 'DICT - Cordillera',
    description: 'Department of Information and Communications Technology - CAR.',
    logoUrl: 'https://picsum.photos/id/60/200/200',
    facebookUrl: 'https://www.facebook.com/dict.car',
    type: 'Government'
  },
  {
    id: 'org_dost',
    name: 'DOST - CAR',
    description: 'Department of Science and Technology Cordillera Administrative Region.',
    logoUrl: 'https://picsum.photos/id/70/200/200',
    facebookUrl: 'https://www.facebook.com/dostcar.gov.ph',
    type: 'Government'
  },
  {
    id: 'org_id1',
    name: 'Cordillera Alliance',
    description: 'A strategic partner in the local innovation ecosystem.',
    logoUrl: 'https://picsum.photos/id/80/200/200',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61578216141652',
    type: 'Community'
  },
  {
    id: 'org_id2',
    name: 'Highland Innovators',
    description: 'Supporting creative entrepreneurs in Northern Luzon.',
    logoUrl: 'https://picsum.photos/id/81/200/200',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61572716963985',
    type: 'Community'
  },
  {
    id: 'org_id3',
    name: 'Baguio Tech Guild',
    description: 'Collaborative space for technology enthusiasts.',
    logoUrl: 'https://picsum.photos/id/82/200/200',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61567306167712',
    type: 'Community'
  },
  {
    id: 'org_id4',
    name: 'Mountain Creatives',
    description: 'Fostering artistic expression and design thinking.',
    logoUrl: 'https://picsum.photos/id/83/200/200',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61576826433382',
    type: 'Community'
  }
];

export const activeStartups: Startup[] = [
  {
    id: 's1',
    name: 'Cordillera Code',
    description: 'A dev shop building bespoke software solutions for the mountain region.',
    logoUrl: 'https://picsum.photos/id/100/200/200',
    facebookUrl: '#',
    industry: 'Tech',
    stage: 'Growth'
  },
  {
    id: 's2',
    name: 'Summit Coffee Tech',
    description: 'Revolutionizing coffee bean processing with AI and IoT sensors.',
    logoUrl: 'https://picsum.photos/id/1060/200/200',
    facebookUrl: '#',
    industry: 'AgriTech',
    stage: 'Seed'
  },
  {
    id: 's3',
    name: 'Pine Cone Ventures',
    description: 'Connecting angel investors with high-potential northern startups.',
    logoUrl: 'https://picsum.photos/id/200/200/200',
    facebookUrl: '#',
    industry: 'Service',
    stage: 'Pre-Seed'
  },
  {
    id: 's4',
    name: 'Highland Creatives',
    description: 'Full-service design and marketing agency for local brands.',
    logoUrl: 'https://picsum.photos/id/300/200/200',
    facebookUrl: '#',
    industry: 'Creative',
    stage: 'Growth'
  },
   {
    id: 's5',
    name: 'Igorot Fresh',
    description: 'Farm-to-table delivery service connecting farmers directly to households.',
    logoUrl: 'https://picsum.photos/id/400/200/200',
    facebookUrl: '#',
    industry: 'E-commerce',
    stage: 'Seed'
  }
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Startup Mixer Night',
    date: getDate(2),
    location: 'The Hub, Session Road',
    description: 'Join us for a night of networking, pitching, and fun. Free drinks for early birds!',
    imageUrl: 'https://picsum.photos/id/40/600/400',
    tags: ['Networking', 'Social'],
  },
  {
    id: '2',
    title: 'Founders Breakfast',
    date: getDate(5),
    location: 'Cafe by the Ruins',
    description: 'Intimate discussion with successful founders about scaling challenges.',
    imageUrl: 'https://picsum.photos/id/43/600/400',
    tags: ['Education', 'Food'],
  },
  {
    id: '3',
    title: 'Tech Talk: AI in 2024',
    date: getDate(10),
    location: 'University Amphitheater',
    description: 'Deep dive into LLMs and how they reshape local businesses.',
    imageUrl: 'https://picsum.photos/id/60/600/400',
    tags: ['Tech', 'Workshop'],
  },
  {
    id: '4',
    title: 'Pitch Wars Semi-Finals',
    date: getDate(15),
    location: 'Innovation Center',
    description: 'Watch 10 startups battle for the grand prize funding.',
    imageUrl: 'https://picsum.photos/id/90/600/400',
    tags: ['Competition'],
  }
];

export const opportunities: Opportunity[] = [
  {
    id: '1',
    title: 'Innovation Grant 2024',
    organization: 'Dept of Science & Tech',
    amount: '₱500,000',
    deadline: 'Oct 30, 2024',
    type: 'Grant',
    description: 'Equity-free funding for hardware startups focusing on agriculture.',
  },
  {
    id: '2',
    title: 'Seed Round Open Call',
    organization: 'North Star VC',
    amount: '$50,000 - $100,000',
    deadline: 'Rolling',
    type: 'Investment',
    description: 'Looking for early-stage SaaS platforms with traction.',
  },
  {
    id: '3',
    title: 'Baguio Incubation Program',
    organization: 'Baguio Startup',
    amount: 'Mentorship',
    deadline: 'Nov 15, 2024',
    type: 'Accelerator',
    description: 'A 3-month intensive program to get your idea to MVP.',
  }
];

export const resources = [
  {
    id: 'r1',
    title: 'CAR Ecosystem Mapping Report 2022-2025',
    description: 'A comprehensive mapping of the startup ecosystem in the Cordillera Administrative Region.',
    type: 'Report',
    format: 'WEB',
    size: 'N/A'
  }
];
