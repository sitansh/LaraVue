require('./bootstrap');

window.Vue = require('vue');
//editor support

import 'v-markdown-editor/dist/v-markdown-editor.css';

import Editor from 'v-markdown-editor'

// global register
Vue.use(Editor);

//support vuex
import vuex from 'vuex'

Vue.use(Vuex)

import storeData from "./store/index"

const store = new Vuex.Store({
	storeData
})
//support moment js
import {filter} from './filter'
//vue router

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
import {routes} from './routes';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('home', require('./components/admin/AdminHome.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);
Vue.component('home-main', require('./components/public/PublicMaster.vue').default);
//Vue.component('home', require('./components/public/blog/BlogSidebar.vue').default);
import { Form, HasError, AlertError } from 'vform'


Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form;

//sweet alert2
import Swal from 'sweetalert2'

windows.swal = swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})



window.toast = toast

const router = new VueRouter({
	routes,
	mode:'hash'
	
})

const app = new Vue({
    el: '#app',
    router,
    store
});
