// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/globals.css'
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    }
})
