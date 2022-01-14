module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/styles/_variables.scss";
                    @import "@/assets/styles/_styles.scss";
                `
            }
        }
    }
    // ,

    // chainWebpack: (config) => {
    //   const svgRule = config.module.rule('svg');
  
    //   svgRule.uses.clear();
  
    //   svgRule
    //     .use('vue-loader')
    //     .loader('vue-loader')
    //     .end()
    //     .use('vue-svg-loader')
    //     .loader('vue-svg-loader');
    // },
};