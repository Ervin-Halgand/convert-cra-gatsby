module.exports = {
  siteMetadata: {
    title: "Indicateur santer",
    description: "Calculateur d’indice de masse corporelle. Calculateur du Fat Free Mass Index (FFMI, savoir à quelle point on est en forme).Calculateur de métabolisme. Permet de savoir si nous somme ne bonne santé.",
    url: "http://localhost:8080",
    author: "Ervin Halgand",
  },
  plugins: [
    /* {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    }, */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Indicateur santer (IMC, FFMI, Metabolisme)`,
        short_name: `Indicateur santer`,
        start_url: `/`,
        background_color: `#aef1ee`,
        theme_color: `#efa2b4`,
        display: `standalone`,
        lang: `fr`,
        icon: `src/images/favicon-512x512.png`,
        icons: [
          {
            src: `src/images/maskable_icon.png`,
            sizes: "196x196",
            type: "image/png",
            purpose: "maskable"
          },
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
