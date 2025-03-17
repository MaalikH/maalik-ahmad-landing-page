import { portfolioContent } from './portfolio';

export const quickLinksContent = {
  projects: [
    {
      id: 'personal-website',
      title: 'Personal Website',
      image: '/ComingSoonBIH.png',
      link: 'https://maalikahmad.com'
    },
    ...portfolioContent.projects.filter(project => project.id !== 'Github')
  ]
}; 