export const Company = {
  None: 'None',
  Microsoft: 'Microsoft',
  Amazon: 'Amazon',
  GSNGames: 'GSNGames',
  Zynga: 'Zynga',
} as const;

export type Company = (typeof Company)[keyof typeof Company];

export const ProjectID = {
  MicrosoftTeams: 'teams',
  AmazonSellerCentral: 'amazon-seller-central',
  GSNWheelOfFortune: 'wheel-of-fortune',
  GSNVideoBingo: 'video-bingo',
  ZyngaChefville: 'chefville',
  ZyngaCafeWorld: 'cafe-world',
} as const;

export type ProjectID = (typeof ProjectID)[keyof typeof ProjectID];

export interface Project {
  id: string;
  title: string;
  company: Company;
  role: string;
  dates: string;
  showCompanyDisclaimer?: boolean;
  images?: string[];
  imageLayout?: 'landscape' | 'portrait';
  summary: string;
  technologies: string[];
}

export interface Feature {
  title: string;
  projectName?: string;
  company?: Company;
  description: string;
  image?: string;
  link: string;
  anchor?: string;
  tags: string[];
}
