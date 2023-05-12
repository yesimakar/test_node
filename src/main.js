import VueRouter from 'vue-router';
import Vue from 'vue';
import router from './router';
import registerComponents from './componentRegisterer';
import './assets/styles/main.scss';

document.title = 'NUCAL | UI as a Service';
Vue.use(VueRouter);

Vue.config.productionTip = false;
Vue.config.devtools = true;
registerComponents(Vue);

const vue = new Vue({
  router,
  render: (h) => h('router-view'),
});

vue.$mount('#app');
