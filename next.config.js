const path = require('path')
const defaultSassOptions = {
  includePaths: [path.join(__dirname, 'styles')],
  prependData: `
      @import "styles/core/fonts.scss";
      @import "styles/core/typography.scss";
      @import "styles/core/spacings.scss";
      @import "styles/core/radiuses.scss";
      @import "styles/core/breakpoints.scss";
      @import "styles/core/functions.scss";
      @import "styles/core/mixins.scss";
      @import "styles/core/colors.scss";
  `,
}

module.exports = {
  reactStrictMode: true,
  webpack5: true,
  sassOptions: defaultSassOptions,
  images: {
    domains: ['images.prismic.io'],
  },
}
