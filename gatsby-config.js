module.exports = {
  siteMetadata: {
    title: `KumuluzAPI`,
    description: `Kumuluz api predstavlja sodobno rešitev pri programiranju REST API vmesnikov.`,
    author: `@Sunesis`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/stylesheets`,
        name: `styles`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./static/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Rubik\:100,200,300,400,600,700`,
          `Roboto\:100,200,300,400,600,700`,
          `Asap\:100,200,300,400,600,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`sl`],
        defaultLanguage: `sl`,
        redirect: false,
        siteUrl: `https://kumuluz-api-netlify.app/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: '.',
          nsSeparator: false
        }
        ,
        pages: [
          {
            matchPath: '/',
            language: 'sl',
          }
        ]
      }
    },
  ]
}
