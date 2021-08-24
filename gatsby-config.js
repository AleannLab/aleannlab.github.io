module.exports = {
  plugins: [
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
      "React Js, React Native development",
    url: "https://aleannlab.github.io", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
  },
};
