module.exports = {
  siteMetadata: {
    title: "Indicateur santé",
    description: "Notre site internet est un outil de calcul en ligne qui vous permet de déterminer votre FFMI, votre IMC et votre métabolisme de base en quelques secondes. Utilisez notre calculateur pour mieux comprendre votre corps et atteindre vos objectifs de santé et de bien-être. Nous vous aidons à évaluer votre masse musculaire, votre poids santé et vos besoins caloriques. Obtenez des résultats précis et fiables pour mieux prendre soin de votre corps.",
    url: "https://indicateur-sante.netlify.app",
    author: "Ervin Halgand",
    image: `src/images/favicon.png`,
    keywords: ["ffmi", "imc", "métabolisme de base", "santé", "bien-être", "perte de poids", "prise de masse musculaire", "calculateur en ligne", "outil de santé"]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-KGX4KK9BKF"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Indicateur santé (IMC, FFMI, Metabolisme)`,
        short_name: `Indicateur santé`,
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
            src: "src/images/icon/android-icon-192x192-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "src/images/icon/apple-icon-180x180-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "180x180"
          },
          {
            src: "src/images/icon/apple-icon-152x152-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "152x152"
          },
          {
            src: "src/images/icon/apple-icon-144x144-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "144x144"
          },
          {
            src: "src/images/icon/apple-icon-120x120-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "120x120"
          },
          {
            src: "src/images/icon/apple-icon-114x114-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "114x114"
          },
          {
            src: "src/images/icon/favicon-96x96-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "96x96"
          },
          {
            src: "src/images/icon/apple-icon-76x76-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "76x76"
          },
          {
            src: "src/images/icon/apple-icon-72x72-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "72x72"
          },
          {
            src: "src/images/icon/apple-icon-60x60-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "60x60"
          },
          {
            src: "src/images/icon/apple-icon-57x57-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "57x57"
          },
          {
            src: "src/images/icon/favicon-512x512-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "512x512"
          },
          {
            src: "src/images/icon/favicon-32x32-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "32x32"
          },
          {
            src: "src/images/icon/favicon-16x16-dunplab-manifest-35720.png",
            type: "image/png",
            sizes: "16x16"
          }
        ]
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`,
    `gatsby-transformer-json`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
