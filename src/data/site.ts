import type { SiteContent } from '../types'

export const site: SiteContent = {
  name: 'Pasand Rasouli',
  title: 'Pasand Rasouli — Product Designer',
  description:
    'Product designer focused on crafting modern digital experiences, intuitive interfaces, and scalable design systems.',
  navigation: [
    { page: 'home', label: 'Home' },
    { page: 'work', label: 'Work' },
    { page: 'about', label: 'About' },
    { page: 'process', label: 'Process' },
    { page: 'contact', label: 'Contact' },
  ],
  ctaLabel: "Let's Talk",
  home: {
    badge: 'Pasand Rasouli',
    titlePrefix: 'I design digital products that feel',
    titleHighlight: 'effortless.',
    description:
      'Product designer focused on crafting modern digital experiences, intuitive interfaces, and scalable design systems.',
    ctas: [
      { label: 'View Work', page: 'work' },
      { label: 'About Me', page: 'about' },
    ],
    skills: [
      'Figma Mastery',
      'Usability Testing',
      'Data-Informed Design',
      'AI Product Design',
      'Accessibility (WCAG)',
      'Cross-functional Leadership',
      'Survey Design & Data Analysis',
      'Competitive & Comparative Analysis',
      'Journey Mapping & Service Blueprint',
      'Hypothesis-Driven Design',
      'OKRs & Success Metrics',
      'MVP Definition & Scope Management',
      'Micro-interactions & Animation',
      'Mentorship & Team Leadership',
      'Design Systems',
      'Product Strategy',
      'User Research',
      'Prototyping',
      'Interaction Design',
      'Visual Design',
      'Design Thinking',
      'Wireframing',
      'UX Research',
    ],
  },
  about: {
    eyebrow: 'About Me',
    profileImage: '/assets/images/Profile/Profile.jpeg',
    profileAlt: 'Pasand Rasouli',
    titleLines: ['Designing with purpose,', 'building with empathy.'],
    subtitle: 'Over 8 years of shaping digital products from concept to launch.',
    paragraphs: [
      "I'm Pasand Rasouli, a product designer who believes that great design is invisible, it just feels right. My journey started in game industry, but I quickly fell in love with the problem solving nature of product design. I've since helped startups and enterprises create intuitive, impactful digital experiences.",
      "My approach combines user research, systems thinking, and a dash of creativity. I don't just design screens; I design workflows, design systems, and cross-functional collaboration. I thrive in environments where I can work closely with product managers and engineers to ship products that people genuinely enjoy using.",
      "Outside of work, I'm obsessed with typography, open-source tools, and mentoring junior designers. I also love exploring how AI can augment our design process, without losing the human touch.",
      "Currently, I'm available for freelance projects, design system consultancy, or full-time opportunities. Let's build something remarkable together.",
    ],
    stats: [
      { value: '8+', label: 'Years experience' },
      { value: '30+', label: 'Projects shipped' },
      { value: '6+', label: 'Design systems' },
    ],
    quote: {
      text: 'The best products are born from empathy and iteration. I bring both to every project.',
      author: 'Pasand Rasouli',
    },
  },
  process: {
    eyebrow: 'Process',
    title: 'How I work',
    steps: [
      {
        number: '01',
        title: 'Discover',
        description: 'Understanding users, business goals, and product constraints.',
      },
      {
        number: '02',
        title: 'Define',
        description: 'Clarifying flows, priorities, and UX direction.',
      },
      {
        number: '03',
        title: 'Design',
        description: 'Crafting polished interfaces and scalable systems.',
      },
      {
        number: '04',
        title: 'Deliver',
        description: 'Collaborating closely with developers for execution.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's create something exceptional.",
    description: 'Open to freelance projects, product collaborations, and full-time opportunities.',
    links: [
      {
        label: 'pasand.rasouli@gmail.com',
        href: 'mailto:pasand.rasouli@gmail.com',
        variant: 'primary',
      },
      {
        label: '+98 904 564 3425',
        href: 'tel:+989045643425',
      },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/pasand-rasouli',
      },
      {
        label: 'Behance',
        href: 'https://behance.net/pasandrasouli',
      },
    ],
  },
  work: {
    eyebrow: 'Selected Work',
    title: 'Featured Projects',
    description:
      'A curated selection of product design work across SaaS, fintech, AI, and mobile experiences.',
  },
}
