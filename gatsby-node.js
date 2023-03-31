const fs = require("fs");

exports.onPostBuild = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  
  <url>
    <loc>https://indicateur-sante.netlify.app/</loc>
    <lastmod>2023-03-30T23:03:14+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://indicateur-sante.netlify.app/imc/</loc>
    <lastmod>2023-03-30T23:03:14+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://indicateur-sante.netlify.app/metabolisme/</loc>
    <lastmod>2023-03-30T23:03:14+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://indicateur-sante.netlify.app/ffmi/</loc>
    <lastmod>2023-03-30T23:03:14+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  
  
  </urlset>`;

  fs.writeFileSync("./public/sitemap.xml", sitemap);
};
