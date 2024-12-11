export interface UserProfile {
  fullName: string;
  title: string;
  location: string;
  skills: string[];
  projects: Project[];
  socialLinks: SocialLink[];
  bio: string;
  currentlyLearning: string[];
}

export interface Project {
  name: string;
  description: string;
  url: string;
  technologies: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface FormData extends UserProfile {}