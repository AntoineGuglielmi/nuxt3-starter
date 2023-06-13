// https://nuxt.com/docs/api/configuration/nuxt-config

const tailwindcss = {
  cssPath: '~/assets/css/main.css',
  configPath: 'tailwind.config.js',
};

const indexes = {
  from: [
    {
      dirs: [
        './composables',
        './utils',
        './classes',
        './data'
      ],
      ignore: [
        'index.ts',
        '(.*).old.ts'
      ]
    }
  ]
};

const components = {
  dirs: [
    // {
    //   path: '~/components/lorem', // To adapt
    //   global: true // To adapt
    // },
    "~/components"
  ]
};

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-indexes-ts',
    'nuxt-icon'
  ],
  tailwindcss,
  indexes,
  components
})
