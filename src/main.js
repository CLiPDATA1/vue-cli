import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css';
import $ from 'jquery';
window.$ = $;
import VueHead from 'vue-head';

createApp(App).use(router).use(VueHead).mount('#app');