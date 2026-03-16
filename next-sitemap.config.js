/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.maalikahmad.tech',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/quicklinks'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/quicklinks',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: '/quicklinks',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: '/quicklinks',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: '/quicklinks',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: '/quicklinks',
      },
    ],
  },
}
