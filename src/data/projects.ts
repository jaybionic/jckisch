export interface Project {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  color: string;
  image?: string;
}

export const projects: Project[] = [
  {
    slug: 'adobe-fonts',
    title: 'Adobe Fonts',
    tagline: 'Lead prototyper and technologist for the Adobe Fonts team',
    year: '2022-PRESENT',
    role: 'Senior Frontend Developer & Prototyper',
    color: 'linear-gradient(135deg, #EB1000 0%, #711b0b 100%)',
  },
  {
    slug: 'pagliacci',
    title: 'Pagliacci Android App',
    tagline: 'The first release of Pagliacci Pizza’s Android app',
    year: '2018',
    role: 'Lead Android Developer',
    color: 'linear-gradient(135deg, #af231c 0%, #9a040d 100%)',
    image: '/images/pagliacci/pagliacci.png',
  },
  {
    slug: 'amazon-devices',
    title: 'Amazon Devices',
    tagline: 'UX prototyping across Echo, Fire TV, and Fire Tablet devices',
    year: '2016–2018',
    role: 'UX Design Technologist',
    color: 'linear-gradient(135deg, #05A0D1 0%, #232F3E 100%)',
    image: '/images/amazon/amzn-banner.jpg',
  },
  {
    slug: 'xbox',
    title: 'Xbox One Launch Event',
    tagline: 'A 3-hour takeover of 15 large-format displays in Times Square for the Xbox One launch event',
    year: '2013',
    role: 'Lead Developer',
    color: 'linear-gradient(135deg, #0e7a0d 0%, #006600 100%)',
    image: '/images/xbox/xbox-banner.jpg',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
