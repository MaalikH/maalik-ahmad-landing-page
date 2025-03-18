import { sendGAEvent } from '@next/third-parties/google'

export const GA_MEASUREMENT_ID = 'AIzaSyC2MaCOy9uAGL4RPLuOtOIQ5S1DNOEuLmw'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
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
  sendGAEvent('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Custom events
export const trackSectionView = (sectionName: string) => {
  event({
    action: 'section_view',
    category: 'Section Navigation',
    label: sectionName,
  })
}

export const trackProjectClick = (projectName: string, platform: 'desktop' | 'quicklinks') => {
  event({
    action: 'project_click',
    category: 'Project Interaction',
    label: `${projectName} - ${platform}`,
  })
}

export const trackFormSubmission = (formName: string, success: boolean) => {
  event({
    action: 'form_submission',
    category: 'Form Interaction',
    label: `${formName} - ${success ? 'success' : 'failed'}`,
  })
} 