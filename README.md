# Nuxt 3 starter

## Packages/modules installed:

- [nuxt-indexes-ts](https://www.npmjs.com/package/nuxt-indexes-ts). See [nuxt.config.ts](./nuxt.config.ts)
- [Nuxt Tailwind](https://tailwindcss.nuxtjs.org/) ([on nuxt.com](https://nuxt.com/modules/tailwindcss)). See [tailwind.config.js](./tailwind.config.js)
  - [colorgen.dev](https://colorgen.dev/): tailwind colors generator
- [Nuxt Icon](https://nuxt.com/modules/icon)
  - [Icons](https://icones.js.org/)

## Utils
`StringHelper` and `NumberHelper` helpers are automatically provided via plugin.
```typescript
const {
  $StringHelper,
  $NumberHelper
} = useNuxtApp();

const {
  ucFirst
} = $StringHelper;
```
