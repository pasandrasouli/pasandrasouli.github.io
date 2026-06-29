export type Page = 'home' | 'work' | 'project-detail' | 'about' | 'process' | 'contact'

export interface NavItem {
  page: Page
  label: string
}

export interface StatItem {
  value: string
  label: string
}

export interface Quote {
  text: string
  author: string
}

export interface CtaLink {
  label: string
  page: Page
}

export interface ContactLink {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

export interface HomeContent {
  badge: string
  titlePrefix: string
  titleHighlight: string
  description: string
  ctas: CtaLink[]
  skills: string[]
}

export interface AboutContent {
  eyebrow: string
  profileImage: string
  profileAlt: string
  titleLines: string[]
  subtitle: string
  paragraphs: string[]
  stats: StatItem[]
  quote: Quote
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface ProcessContent {
  eyebrow: string
  title: string
  steps: ProcessStep[]
}

export interface ContactContent {
  eyebrow: string
  title: string
  description: string
  links: ContactLink[]
}

export interface WorkContent {
  eyebrow: string
  title: string
  description: string
}

export interface ProjectDetailContent {
  moreProjectsEyebrow: string
  moreProjectsTitle: string
}

export interface SiteContent {
  name: string
  title: string
  description: string
  navigation: NavItem[]
  ctaLabel: string
  home: HomeContent
  about: AboutContent
  process: ProcessContent
  contact: ContactContent
  work: WorkContent
  projectDetail: ProjectDetailContent
}

export type CaseStudyBlock =
  | {
      type: 'section'
      title: string
      description?: string
      imageSrc?: string
    }
  | {
      type: 'image'
      src: string
      caption?: string
    }
  | {
      type: 'twoColumn'
      left: string
      right: string
    }
  | {
      type: 'quote'
      content: string
      author: string
    }
  | {
      type: 'resultsTable'
      items: string[]
    }
  | {
      type: 'video'
      embedUrl: string
    }
  | {
      type: 'withBullet',
      title: string,
      titleGroups: {
        subTitle: string,
        description: string,
      }[],
      items: string[]
    }

export interface Project {
  id: number
  title: string
  category: string
  coverImage: string
  fullDescription: string
  results: string[]
  caseStudy?: CaseStudyBlock[]
}
