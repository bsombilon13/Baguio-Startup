import { Startup, Event, Opportunity } from './types';

// Helper to simulate a date in the current month/year
const getDate = (dayOffset: number) => {
  const d = new Date();
  d.setDate(d.getDate() + dayOffset);
  return d;
};

export const startups: Startup[] = [
  {
    id: '1',
    name: 'Baguio Startup Community',
    description: 'Fostering the startup ecosystem in the highlands. We connect innovators, creators, and entrepreneurs.',
    logoUrl: 'https://picsum.photos/id/1015/200/200', // Scenic background representing Baguio
    facebookUrl: 'https://www.facebook.com/baguiostartup/',
    category: 'Community',
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Cordillera Code',
    description: 'A collective of developers building solutions for the mountain region.',
    logoUrl: 'https://picsum.photos/id/1/200/200',
    facebookUrl: 'https://facebook.com',
    category: 'Tech',
  },
  {
    id: '3',
    name: 'Pine Cone Ventures',
    description: 'Angel investors looking for the next big thing in the north.',
    logoUrl: 'https://picsum.photos/id/20/200/200',
    facebookUrl: 'https://facebook.com',
    category: 'Service',
  },
  {
    id: '4',
    name: 'Summit Coffee Tech',
    description: 'Revolutionizing coffee bean processing with AI.',
    logoUrl: 'https://picsum.photos/id/1060/200/200',
    facebookUrl: 'https://facebook.com',
    category: 'E-commerce',
  },
  {
    id: '5',
    name: 'Highland Creatives',
    description: 'Design and marketing agency for local brands.',
    logoUrl: 'https://picsum.photos/id/50/200/200',
    facebookUrl: 'https://facebook.com',
    category: 'Service',
  },
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
    amount: 'Mentorship + Office Space',
    deadline: 'Nov 15, 2024',
    type: 'Accelerator',
    description: 'A 3-month intensive program to get your idea to MVP.',
  }
];