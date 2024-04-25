import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import moshaToast from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
// window.$ = window.jQuery = require('jquery');

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});

createApp(App).use(moshaToast).use(store).use(router).mount('#app')
