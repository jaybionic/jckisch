export interface ProjectSection {
  title: string;
  description: string[];
  gallery?: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  sections?: ProjectSection[];
  tags: string[];
  year: string;
  role: string;
  links?: { label: string; href: string }[];
  color: string;
  image?: string;
  gallery?: string[];
  playStoreUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'adobe-fonts',
    title: 'Adobe Fonts',
    tagline: 'Real-time analytics platform for distributed engineering teams.',
    description: [
      'Placeholder case study: Aurora is a real-time analytics dashboard built for distributed engineering teams to monitor service health at a glance.',
      'It combines live metric streaming, customizable widgets, and alerting so teams can spot regressions before they become incidents.',
    ],
    tags: ['React', 'TypeScript', 'WebSockets', 'D3.js'],
    year: '2022-2026',
    role: 'Senior Frontend Engineer & Prototyper',
    links: [
      { label: 'Live demo', href: '#' },
      { label: 'Source', href: '#' },
    ],
    color: 'linear-gradient(135deg, #EB1000 0%, #711b0b 100%)',
  },
  {
    slug: 'pagliacci',
    title: 'Pagliacci Android App',
    tagline: 'The first release of Pagliacci Pizza’s Android app',
    description: [
      'I was lead developer on the first release of the Pagliacci Android app, building the application from the ground up.',
      'The app runs on an MVVM architecture with RxJava handling reactive data flow and Firebase powering the backend. I also designed and implemented every transition in the app, built on top of BBAD - an animation library I wrote myself to cut the boilerplate out of staggered and cascading UI motion.',
    ],
    tags: ['Android SDK', 'MVVM', 'RxJava 2', 'Firebase', 'Motion Design'],
    year: '2018',
    role: 'Lead Android Developer',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pagliacci.mario',
    color: 'linear-gradient(135deg, #af231c 0%, #9a040d 100%)',
    image: '/images/pagliacci-banner.png',
    gallery: [
      '/images/pagliacci-1.png',
      '/images/pagliacci-2.png',
      '/images/pagliacci-3.png',
      '/images/pagliacci-4.png',
      '/images/pagliacci-5.png',
    ],
  },
  {
    slug: 'amazon-devices',
    title: 'Amazon Devices',
    tagline: 'UX prototyping across Fire TV, Fire Tablet, and Echo devices',
    description: [
      'Three separate prototyping efforts across Amazon’s device lineup, most of it built before final hardware was available.',
    ],
    sections: [
      {
        title: 'Echo Spot',
        description: [
          'I built the end-to-end UX before the hardware existed - first as a to-scale model running on a tablet, then ported onto production units once they arrived, all from a single shared codebase.',
          'I designed and built Fast Scroll, a navigation model for flying through long lists on Echo Spot’s small circular screen: a light swipe moves one item at a time, a harder swipe drops into a free-scroll mode that flies through the whole list. To support it, I also wrote a Node.js/Socket.io remote control tool that could drive a dozen devices at once during stakeholder demos, with live tuning of scroll sensitivity and other parameters.',
        ],
        gallery: [
          '/images/amzn-spot-fastscroll-1.png',
          '/images/amzn-spot-fastscroll-2.png',
          '/images/amzn-spot-syncd.png',
        ],
      },
      {
        title: 'Fire TV',
        description: [
          'I prototyped and A/B tested two competing models for top-level navigation inside a single switchable build.',
        ],
        gallery: ['/images/amzn-firetv.png'],
      },
      {
        title: 'Fire Tablet',
        description: [
          'I designed and built the "For You" carousel that replaced the old Recents rail with a more personalized surface, and prototyped early explorations of Alexa on a touch-first device.',
        ],
        gallery: ['/images/amzn-tablet-foryou-1.png', '/images/amzn-tablet-skills-1.png'],
      },
    ],
    tags: ['Android SDK', 'Node.js', 'Socket.io', 'Rapid Prototyping', 'Alexa'],
    year: '2016–2018',
    role: 'UX Design Technologist',
    color: 'linear-gradient(135deg, #05A0D1 0%, #232F3E 100%)',
    image: '/images/amzn-banner.jpg',
  },
  {
    slug: 'xbox',
    title: 'Xbox One Launch Event',
    tagline: 'A 3-hour takeover of 15 large-format displays in Times Square for the Xbox One launch.',
    description: [
      'For the Xbox One launch, I led the technical side of a 3-hour takeover of around 15 large-scale screens in Times Square. Each billboard was owned by a different operator with its own specs - some driven by Flash or video files, others by web pages - so I owned the spec sheet for every screen and coordinated the team to deliver the right asset format to each. We consulted with R/GA in New York to help guide and validate the approach.',
      'Beyond a set of countdown timers built for the event, I concepted and built the Gamerpic Shoutout Tower: a mobile site where patrons signed in with their Xbox gamertag (validated against their live Xbox Live account) and picked a gamerpic to associate with their name. Submissions cascaded down a stack of screens, growing to full size on the bottom display - a simple concept that drew over 900 participants in the 3-hour window.',
    ],
    tags: ['JavaScript', 'PHP', 'AJAX', 'Xbox Live API', 'Responsive Web'],
    year: '2013',
    role: 'Lead Developer',
    links: [
      { label: 'Times Square recap', href: 'https://www.youtube.com/watch?v=Lq2QMViNLxc' },
      { label: 'Gamerpic tower video', href: 'https://www.youtube.com/watch?v=1JCZCusE_cg' },
    ],
    color: 'linear-gradient(135deg, #0e7a0d 0%, #006600 100%)',
    image: '/images/xbox-banner.jpg',
    gallery: [
      '/images/xbox/xbox-01.jpg',
      '/images/xbox/xbox-02.jpg',
      '/images/xbox/xbox-03.jpg',
      '/images/xbox/xbox-05.jpg',
      '/images/xbox/xbox-08.jpg',
      '/images/xbox/xbox-13.jpg',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
