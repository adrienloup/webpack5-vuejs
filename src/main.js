import Vue from 'vue';
import VueRouter from 'vue-router';
// Note: Using an Alias in Webpack
import 'styles/index.scss';
import App from './components/App.vue';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
