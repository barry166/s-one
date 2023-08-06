import { createApp } from 'vue'
import 'ant-design-vue/dist/reset.css'
import router from './router'
import store from './store'
import App from './App.vue'
import registerComponent from './components/lib'

const app = createApp(App)
registerComponent(app)
app.use(router)
app.use(store)
app.mount('#app')
