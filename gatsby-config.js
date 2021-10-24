module.exports = {
   flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    siteUrl: "https://thunder-island.netlify.app/",
    title: "Thunder Island",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
    resolve: `gatsby-plugin-netlify-cms`,
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "authors",
        path: `${__dirname}/content/authors/`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "food-and-health",
        path: `${__dirname}/content/food-and-health/`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "learn-english",
        path: `${__dirname}/content/learn-english/`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "portfolios",
        path: `${__dirname}/content/portfolios/`,
      }
    },
  ],
};
