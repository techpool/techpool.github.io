module.exports = {
  siteMetadata: {
    title: `techpool ~ Suryadeep Pal ~ Learner . Coder . Geek`,
    name: `Suryadeep Pal`,
    siteUrl: `https://techpool.me`,
    description: `A small guy who has been trying to exit vim and travel the world.`,
    hero: {
      heading: `A small guy who has been trying to exit vim and travel the world.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/webogeek`,
      },
      {
        name: `github`,
        url: `https://github.com/techpool`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/suryadeeppal`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/suryadeep-pal/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `techpool ~ Suryadeep Pal ~ Learner . Coder . Geek`,
        short_name: `techpool`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
