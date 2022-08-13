import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from "./router";

// import { Toast, Dialog, Notify, ImagePreview } from 'vant';
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import 'vant/es/notify/style';
import 'vant/es/image-preview/style';

createApp(App).use(createPinia())
              .use(router)
              // .use(Toast)
              // .use(Dialog)
              // .use(Notify)
              // .use(ImagePreview)
              .mount('#app')
