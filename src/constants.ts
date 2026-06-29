import { site } from './data/site'

export const SITE_TITLE = site.title
export const SITE_DESCRIPTION = site.description
export const LINKEDIN_URL = site.contact.links.find((link) => link.label === 'LinkedIn')?.href ?? ''
export const BEHANCE_URL = site.contact.links.find((link) => link.label === 'Behance')?.href ?? ''
