//const path = require('path');

module.exports = {
    configureWebpack: {
        devtool: "source-map"
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/styles/_variables.scss";
                `
            }
        }
    }
};