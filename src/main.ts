import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// App.vue and Vue Router
import App from './App.vue'
import router from './router'

// Material Design Icons
import '@mdi/font/css/materialdesignicons.css';


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

// Create Vuetify instance
const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "dark",
    },
})

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
