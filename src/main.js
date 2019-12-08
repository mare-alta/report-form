import Vue from 'vue';

import './registerServiceWorker';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.component('ds-container', () => import('./components/ds-container/index.vue'));
Vue.component('ds-textarea', () => import('./components/ds-textarea/index.vue'));

Vue.component('ds-fetch', () => import('./components/ds-fetch/index.vue'));
Vue.component('ds-button', () => import('./components/ds-button/index.vue'));
Vue.component('ds-tinput', () => import('./components/ds-tinput/index.vue'));
Vue.component('ds-text', () => import('./components/ds-text/index.vue'));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
