module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/gateway-peripheral-fe/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/scss/_animations.scss";
        `,
      },
    },
  },
};
