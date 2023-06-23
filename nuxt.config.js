export default {
  server: {
    host: '0'
  },
  router: {
    base: '/red-lili/'
  },
  ssr: false,
  target: 'static',
  head: {
    title: 'RED-LILI Tracker',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {property: 'og:title', content: 'RED-LILI Tracker'},
      {property: 'twitter:title', content: 'RED-LILI Tracker'},
      {property: 'og:description', content: 'Tracks software supply chain threat actor which has published 1580 malicious packages'},
      {property: 'twitter:description', content: 'Tracks software supply chain threat actor which has published 1580 malicious packages'},
      {property: 'og:image', content: 'https://user-images.githubusercontent.com/1287098/163688843-dbe65fb6-961a-48de-bc58-c77c72774383.png'},
      {property: 'twitter:image', content: 'https://user-images.githubusercontent.com/1287098/163688843-dbe65fb6-961a-48de-bc58-c77c72774383.png'},
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
