const path = require("path");
const fs = require("fs");

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/cooperation/NCCU-news-2020/"
      : "/",
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
};
