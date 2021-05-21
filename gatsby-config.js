module.exports = {
  siteMetadata: {
    title: "Indicateur santer",
    description: "Calculateur d’indice de masse corporelle. Calculateur du Fat Free Mass Index (FFMI, savoir à quelle point on est en forme).Calculateur de métabolisme. Permet de savoir si nous somme ne bonne santé.",
    url: "https://keen-chandrasekhar-cdaf16.netlify.app",
    author: "Ervin H",
    image: `src/images/favicon.png`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "273206763",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Indicateur santer (IMC, FFMI, Metabolisme)`,
        short_name: `Indicateur santer`,
        start_url: `/`,
        background_color: `#aef1ee`,
        theme_color: `#efa2b4`,
        display: `standalone`,
        icon: `src/images/favicon-512x512.png`,
        icons: [
          {
            src: `src/images/maskable_icon.png`,
            sizes: "196x196",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/icon/android-icon-192x192-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "/icon/apple-icon-180x180-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "180x180"
          },
          {
            src: "/icon/apple-icon-152x152-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "152x152"
          },
          {
            src: "/icon/apple-icon-144x144-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "144x144"
          },
          {
            src: "/icon/apple-icon-120x120-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "120x120"
          },
          {
            src: "/icon/apple-icon-114x114-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "114x114"
          },
          {
            src: "/icon/favicon-96x96-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "96x96"
          },
          {
            src: "/icon/apple-icon-76x76-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "76x76"
          },
          {
            src: "/icon/apple-icon-72x72-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "72x72"
          },
          {
            src: "/icon/apple-icon-60x60-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "60x60"
          },
          {
            src: "/icon/apple-icon-57x57-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "57x57"
          },
          {
            src: "/icon/favicon-512x512-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "512x512"
          },
          {
            src: "/icon/favicon-32x32-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "32x32"
          },
          {
            src: "/icon/favicon-16x16-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "16x16"
          }
        ]
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`,
    { resolve: `gatsby-transformer-json` },
    { resolve: `gatsby-transformer-sharp` },
    { resolve: `gatsby-plugin-sharp` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    }
  ],
};
