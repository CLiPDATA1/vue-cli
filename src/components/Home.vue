<template>
    <swiper :modules="modules" :slides-per-view="1" :direction="'vertical'" :mousewheel="true" :speed='1000'
        class="swiper-container" style="display: flex; justify-content: space-between; height: 100vh;">
        <swiper-slide id="section01">
            <MainSection01 />
        </swiper-slide>
        <swiper-slide id="section02">
            <MainSection02 />
        </swiper-slide>
        <swiper-slide id="section03">
            <MainSection03 />
        </swiper-slide>
        <swiper-slide id="section04">
            <MainSection04 />
        </swiper-slide>
        <swiper-slide id="section05">
            <MainSection05 />
        </swiper-slide>
        <swiper-slide id="section06">
            <MainSection06 />
        </swiper-slide>
        <swiper-slide id="section07">
            <MainSection07 />
        </swiper-slide>
        <swiper-slide id="section08">
            <MainSection08 />
            <Myfooter />
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Mousewheel } from 'swiper/core';

SwiperCore.use([Pagination, Mousewheel]);
import 'swiper/swiper-bundle.css';

import MainSection01 from './main/section01.vue';
import MainSection02 from './main/section02.vue';
import MainSection03 from './main/section03.vue';
import MainSection04 from './main/section04.vue';
import MainSection05 from './main/section05.vue';
import MainSection06 from './main/section06.vue';
import MainSection07 from './main/section07.vue';
import MainSection08 from './main/section08.vue';
import Myfooter from './Footer.vue';

export default {
    name: 'MyHome',
    components: {
        Swiper,
        SwiperSlide,
        MainSection01,
        MainSection02,
        MainSection03,
        MainSection04,
        MainSection05,
        MainSection06,
        MainSection07,
        MainSection08,
        Myfooter,
    },
    data() {
        return {
            swiperOptions: {
                modules: [Pagination, Mousewheel],
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                direction: 'vertical',
                mousewheel: true,
            },
        };
    },
    head: {
        link: [
            {
                rel: 'stylesheet',
                href: require('../assets/css/main.css'),
            },
            {
                rel: 'stylesheet',
                href: require('@/assets/css/master.css'),
            },
        ],
    },
};
</script>
<style scoped>
::-webkit-scrollbar {
    display: none;
}

.btn-wrap2 {
    top: 100%;
    right: 40%;

}

.swiper-container {
    width: 100%;
    height: 100%;
}
</style>