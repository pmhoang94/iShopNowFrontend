module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'iShopNow',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'iShopNow'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/icons/icomoon/styles.css',
    '~/assets/css/bootstrap.css',
    '~/assets/css/core.css',
    '~/assets/css/components.css',
    '~/assets/css/colors.css',
    '~/assets/css/custom.css',
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/style.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/axios',
    '@/plugins/element-ui',
    '@/plugins/fireauth',
    '@/plugins/bootstrap-vue',
    '@/plugins/i18n'
  ],
  router: {},
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
