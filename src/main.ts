import { createApp } from 'vue'
import App from './App.vue'
import router from './shared/infra/router'

import registerGlobalComponents from '@/shared/infra/plugins/global-components'

createApp(App)
  .use(registerGlobalComponents)
  .use(router)
  .mount('#app')
