import {createApp} from 'vue'
import router from './router/router'
import App from './App.vue'

const app = createApp(App)

app.use(router)

app.config.errorHandler = (err, instance, info) => {
    console.log(err, instance, info)
}

app.mount('#app')
