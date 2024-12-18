export interface Project {
  title?: string;
  subtitle?: string;
  description?: string;
  githubLink?: string;
  websiteLink?: string;
  techList?: Array<string>;
  image?: string;
  video?: string;
}

export interface ResumeCard {
  title?: string;
  icon?: string;
  subtitle?: string;
  date?: string;
  description?: string;
  link?: string;
}
