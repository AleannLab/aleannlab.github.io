module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-facebook-customer-chat`,
      options: {
        sdk: {
          xfbml            : true,
          version          : 'v10.0'
        },
        chat: {
          pageId: '103087394424037',
          loggedInGreeting: 'Hi. If you have any questions, we are ready to help you',
          loggedOutGreeting: 'Thanks, have a good day.',
        }
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-ME6D5GWBC9", // Google Analytics / GA
        ],
      }
    }
  ],
  siteMetadata: {
    title: "AleannLab ReactJs/React Native development",
    titleTemplate: "%s · The Real Hero",
    description:
      "AleannLab React Js, React Native development",
    url: "https://aleannlab.github.io", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
  },
};
