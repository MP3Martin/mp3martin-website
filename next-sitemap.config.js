const fs = require('fs');
const path = require('path');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mp3martin.xyz',
  outDir: 'out',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/cdn-cgi/'
      }
    ]
  },
  additionalPaths: async (config) => {
    const publicDir = path.join(process.cwd(), 'public');

    const getHtmlFiles = (dir) => {
      let results = [];
      const list = fs.readdirSync(dir);
      list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          // Recursively get files from subdirectories
          results = results.concat(getHtmlFiles(filePath));
        } else if (file.endsWith('.html')) {
          const relativePath = path.relative(publicDir, filePath).replace('.html', '');
          results.push(`/${relativePath.replace(/\\/g, '/')}`);
        }
      });

      return results;
    };

    const htmlFiles = getHtmlFiles(publicDir);
    return Promise.all(htmlFiles.map(file => config.transform(config, file)));
  }
};

