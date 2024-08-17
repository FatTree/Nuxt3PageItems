// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./assets/main.scss" as *;'
        }
      }
    }
  },
  app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Athem',
			meta: [
				{
					name: 'description',
					content: 'Realworld Conduit was built by Nuxt3, Vue3',
				},
				{ name: 'keywords', content: 'vuejs,nuxt,vue3,nuxt3' },
			],
		},
	},
})
