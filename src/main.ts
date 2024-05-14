import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { marvelAPIKey } from './globals/keys'

const app = createApp(App)

app.use(router)
app.provide(marvelAPIKey, import.meta.env.VITE_MARVEL_KEY)

app.mount('#app')
