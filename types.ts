export interface Organization {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  facebookUrl: string;
  type: 'Community' | 'Non-Profit' | 'Government' | 'Incubator' | 'Academe';
  isFeatured?: boolean;
}

export interface Startup {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  facebookUrl: string;
  industry: 'Tech' | 'Service' | 'E-commerce' | 'AgriTech' | 'Creative';
  stage?: 'Pre-Seed' | 'Seed' | 'Growth';
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

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}