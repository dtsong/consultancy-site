/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://klearpath.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: "./public",
};
