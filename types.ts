

export interface Organization {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  facebookUrl: string;
  websiteUrl?: string;
  types: ('Community' | 'Non-Profit' | 'Government' | 'Incubator' | 'Academe' | 'MSME' | 'Workspace' | 'Creatives')[];
  isFeatured?: boolean;
}

export interface Startup {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  facebookUrl: string;
  websiteUrl?: string;
  industry: 'Tech' | 'Service' | 'E-commerce' | 'AgriTech' | 'Creative';
  stage?: 'Pre-Seed' | 'Seed' | 'Growth';
}

export interface Event {
  id: string;
  title: string;
  date: Date;
  endDate?: Date;
  location: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string; // Registration Link
  learnMoreLink?: string; // Info/Social Link
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  link: string;
  source: 'Facebook' | 'Website' | 'Press';
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

export interface Resource {
  id: string;
  title: string;
  type: 'Report' | 'Template' | 'Guide' | 'Government' | 'Website';
  description: string;
  format: string;
  size: string;
  url: string;
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}