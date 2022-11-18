module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/assets/scss/landing-page/_variables.scss";
          `,
      },
    },
  },
};
