export default {
  server: {
    host: '0'
  },
  ssr: false,
  target: 'static',
  head: {
    title: 'red-lili',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width,initial-scale=1.0'},
      {"http-equiv": 'X-UA-Compatible', content: 'IE=edge'},
      {hid: 'description', name: 'description', content: ''},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.svg'}
    ]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: '/',
  },
  build: {}
}
