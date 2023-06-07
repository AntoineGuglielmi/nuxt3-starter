import { StringHelper, NumberHelper } from '~/utils';

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Hello');
  return {
    provide: {
      StringHelper: StringHelper,
      NumberHelper: NumberHelper
    }
  }
})
