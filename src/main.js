//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import App from './App.vue'
import Aura from '@primevue/themes/aura'
import router from './router'
import Button from 'primevue/button'
import FileUpload from 'primevue/fileupload'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
//app.use(PrimeVue)
app.use(ToastService)
app.use(createPinia())
app.use(router)
app.component('Button', Button)
app.component('FileUpload', FileUpload)

app.mount('#app')
