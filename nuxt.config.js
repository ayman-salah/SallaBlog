export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'مدونة',
    htmlAttrs: {
      lang: 'ar'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'شركة مدونة ، هي شركة عالمية للتجارة الإلكترونية و التسويق الرقمي ' },
      // <!-- Facebook Meta Tags -->
      { property : "og:type", name: 'title', content: 'website' },
      { property : "og:title", name: 'title', content: 'مدونة' },
      { property : "og:description", name: 'description', content: 'شركة مدونة ، هي شركة عالمية للتجارة الإلكترونية و التسويق الرقمي ' },
      { property : "og:image", name: 'image', content: 'https://assets.salla.sa/cp/assets/images/salla-logo.png'  },
      { property :"og:url" , content:"https://s.salla.sa/login" },
      { property :"og:site_name",content :"شركة مدونة للتجارة الإكترونية" },
      // <!-- Twitter Meta Tags -->
      { name: 'twitter:card', content: 'summary_large_image' },
      { property : "twitter:domain" , content: 's.salla.sa' },
      { property : "twitter:url", name: 'title', content: 'website' },
      { name: 'twitter:title', content: 'مدونة' },
      { name: 'twitter:description', content: 'شركة مدونة ، هي شركة عالمية للتجارة الإلكترونية و التسويق الرقمي ' },
      { name: 'twitter:image', content: 'https://assets.salla.sa/cp/assets/images/salla-logo.png' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', type:'text/css', href: '//db.onlinewebfonts.com/c/513071b47bdba774c93a73ad16a75e3b?family=DIN+Next+LT+Arabic' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css' },
     
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/styles.css',
    '@/assets/css/main.css'
  ]
  ,
  loading: {
    color: "#5DD5C4",
    height: "5px",
    Duration: 5000,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/swiper.client.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxtjs/fontawesome',
  ],
  fontawesome:{
    component : 'font-awesome-icon',
    icons : {
      solid : true ,
      regular : true , 
      // regular : true 
    }
  },
  /*
   ** Runtime Config
   */

   publicRuntimeConfig: {
    axios: {
      baseURL: 'https://api.nuxtjs.dev'
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
