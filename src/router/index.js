import { createRouter, createWebHistory } from 'vue-router';
import MyHome from '@/components/Home.vue';
import MyAboutUs from '@/components/Introduce/AboutUs.vue';
import MyBusiness from '@/components/Introduce/Business.vue';
import MyHistory from '@/components/Introduce/History.vue';
import MyLocation from '@/components/Introduce/Location.vue';
import MyCms from '@/components/Service/Cms.vue';
import MyContact from '@/components/Contact.vue';

const routes = [
    { path: '/', component: MyHome },
    { path: '/about', component: MyAboutUs },
    { path: '/business', component: MyBusiness },
    { path: '/history', component: MyHistory },
    { path: '/location', component: MyLocation },
    { path: '/cms', component: MyCms },
    { path: '/contact', component: MyContact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;