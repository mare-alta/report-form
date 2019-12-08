import Vue from 'vue';
import ds from '@by-tag/design-system';

import './registerServiceWorker';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.use(ds);

Vue.component('ds-container', () => import('./components/ds-container/index.vue'));
Vue.component('ds-textarea', () => import('./components/ds-textarea/index.vue'));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
