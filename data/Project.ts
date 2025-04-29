export interface Project {
  title: string;
  status: 'current' | 'past';
  shortDescription: string;
  fullDescription: string;
  images: {
    src: string;
    caption?: string;
  }[];
  links?: {
    label: string;
    url: string;
  }[];
}
