/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const autoprefixer = require("autoprefixer");

module.exports = {
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                cssLoaderOptions: {
                    camelCase: false,
                },
                postCssPlugins: [autoprefixer()],
            },
        },
    ],
};
