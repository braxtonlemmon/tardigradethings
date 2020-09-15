const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Tardigrade Things`,
    description: `Tardigrade Things`,
    author: `Braxton Lemmon`,
  },
  plugins: [
    'gatsby-plugin-polyfill-io',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Epilogue'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tardigrade Things`,
        short_name: `Tardigrade Things`,
        description: 'The best place to buy tardigrade things.',
        start_url: `/`,
        lang: 'en',
        background_color: `#e08982`,
        theme_color: `#e08982`,
        display: `minimal-ui`,
        icon: 'src/images/bone.svg',
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    'gatsby-plugin-styled-components',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-134421805-1',
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 38898333671,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
