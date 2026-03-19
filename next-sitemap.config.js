/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.maalikahmad.tech',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/quicklinks'],
  transform: async (config, path) => {
    const entry = {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }

    // Add avatar image to homepage sitemap entry
    if (path === '/') {
      entry.images = [
        { loc: new URL('/maalik-avatar.png', config.siteUrl), title: 'Maalik Ahmad Hornbuckle — Software Engineer', caption: 'Portrait of Maalik Hornbuckle, creative developer and software engineer' },
      ]
    }

    return entry
  },
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
