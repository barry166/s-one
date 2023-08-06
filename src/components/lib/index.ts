import { App } from 'vue'
import SText from './s-text.vue'

export { SText }

export default (app: App<Element>) => {
  app.component('s-text', SText)
}
