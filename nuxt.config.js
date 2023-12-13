export default {

  target: 'server',

  ssr: true,

  loading: {
    color: 'white',
    height: '5px'
  },

  head: {
    title: 'Dasbor Bazma',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      //   {
      //   rel: 'icon',
      //   type: 'image/x-icon',
      //   href: '/images/logo.png'
      // },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
      },
    ],
    script: [
      { src: '/js/coreui.bundle.min.js' },
      // { src: 'https://app.sandbox.midtrans.com/snap/snap.js', 'data-client-key': 'paste_client_Key_midtrans_disini' },
    ]
  },

  css: [
    '@/assets/css/style.css',
    '@/assets/css/custom.css',
  ],

  plugins: [
    { src: '~/plugins/chart.js', mode: 'client' },

  ],

  components: true,

  buildModules: [
    '@nuxtjs/pwa',

  ],
  pwa: {
    meta: {
      title: 'Bazma - Monitoring Peserta Didik Baru Bazma',
      author: 'Bayu Priyambada'
    },
    manifest: {
      name: 'Bazma',
      short_name: 'bazma',
      description: 'Monitoring Peserta Didik Baru Bazma',
      lang: 'en'
    },
    icon: {
      fileName: 'images/logo.png',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    }
  },

  auth: {
    strategies: {
      ppdb: {
        scheme: 'local',
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
          expires_in: '7d'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: '/api/v1/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: {
            url: '/api/v1/logout',
            method: 'post'
          },
          user: {
            url: '/api/v1/user',
            method: 'get',
            propertyName: 'user'
          }
        },
      },
    },
  },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'vue-sweetalert2/nuxt',
    'cookie-universal-nuxt',

  ],

  axios: {
    // baseURL: 'http://localhost:8000',
    baseURL: 'https://api.ppdb.smktibazma.sch.id',
    credentials: true,
  },

  build: {
    babel: {
      compact: true,
    },
    "src": "nuxt.config.js",
    "use": "@nuxtjs/vercel-builder",
    "config": {
      "generateStaticRoutes": true
    }
  }
}
