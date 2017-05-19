// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
//import App from './components/App.vue';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.productionTip = false;

let app = new Vue({
    el: '#app',
    render: h => h(require('./components/App.vue')),
});
