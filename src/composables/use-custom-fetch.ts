import { createFetch } from '@vueuse/core'

export const useCustomFetch = createFetch({
  baseUrl: 'https://gateway.marvel.com:443/v1/public',
  options: {
    beforeFetch: ({ url }) => {
      const [baseUrl, queryString] = url.split('?')
      const apiKey = import.meta.env.VITE_MARVEL_KEY

      let newUrl = `${baseUrl}?apikey=${apiKey}`
      if (queryString) {
        newUrl = `${newUrl}&${queryString}`
      }
      return { url: newUrl }
    }
  }
})
