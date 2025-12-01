export interface Startup {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  facebookUrl: string;
  category: 'Community' | 'Tech' | 'Service' | 'E-commerce';
  isFeatured?: boolean;
}

export interface Event {
  id: string;
  title: string;
  date: Date;
  location: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  amount: string;
  deadline: string;
  type: 'Grant' | 'Investment' | 'Accelerator' | 'Competition';
  description: string;
}

export enum ViewMode {
  Grid = 'GRID',
  List = 'LIST',
  Calendar = 'CALENDAR'
}