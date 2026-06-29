export type Page = 'home' | 'work' | 'project-detail' | 'about' | 'process' | 'contact'

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

export interface Project {
  id: number
  title: string
  category: string
  coverImage: string
  images?: string[]
  fullDescription: string
  challenge: string
  solution: string
  results: string[]
  caseStudy?: CaseStudyBlock[]
}
