import { StringHelper, NumberHelper } from '~/utils';

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      StringHelper: StringHelper,
      NumberHelper: NumberHelper
    }
  }
})
