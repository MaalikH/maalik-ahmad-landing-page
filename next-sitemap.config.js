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
    ],
  },
}
