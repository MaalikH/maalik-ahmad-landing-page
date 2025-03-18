import { sendGAEvent } from '@next/third-parties/google'

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID) return
  sendGAEvent('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (!GA_MEASUREMENT_ID) return
  sendGAEvent('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Custom events
export const trackSectionView = (sectionName: string) => {
  if (!GA_MEASUREMENT_ID) return
  event({
    action: 'section_view',
    category: 'Section Navigation',
    label: sectionName,
  })
}

export const trackProjectClick = (projectName: string, platform: 'desktop' | 'quicklinks') => {
  if (!GA_MEASUREMENT_ID) return
  event({
    action: 'project_click',
    category: 'Project Interaction',
    label: `${projectName} - ${platform}`,
  })
}

export const trackFormSubmission = (formName: string, success: boolean) => {
  if (!GA_MEASUREMENT_ID) return
  event({
    action: 'form_submission',
    category: 'Form Interaction',
    label: `${formName} - ${success ? 'success' : 'failed'}`,
  })
} 