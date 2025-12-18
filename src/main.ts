import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import '@/assets/fonts/fonts.css'

import { createI18n } from 'vue-i18n'
import { translationData } from './locales/lang'

const messages: Record<string, Record<string, string>> = {}

translationData.forEach(item => {
  Object.keys(item).forEach(lang => {
    if (lang === 'key') return
    if (!messages[lang]) messages[lang] = {}
    messages[lang][item.key] = item[lang as keyof typeof item]
  })
})

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('invite-lang') || 'en',
  fallbackLocale: 'en',
  messages
})

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app')