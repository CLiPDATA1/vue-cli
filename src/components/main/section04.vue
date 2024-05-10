<template>
    <div class="section04-inner">
        <div class="carousel itr02">
            <div class="swiper2">
                <div class="swiper-wrapper">
                    <div v-for="(slide, index) in slides" :key="index"
                        class="swiper-slide solution-wrap swiper-slide-transform">
                        <div class="solution">
                            <p class="H3Bold label itr-LTR01">{{ slide.label }}</p>
                            <h2 class="Title02 itr-LTR02" v-html="slide.title"></h2>
                            <p class="Body1Medium subText itr-LTR03" v-html="slide.description"></p>
                            <a :href="slide.link" class="btn Body1Semibold">{{ slide.linkText }}<img
                                    src="@/assets/img/arrow-right.svg" alt="arrow-Right"></a>
                        </div>
                        <div class="solution-img">
                            <transition name="fade">
                                <img :src="slide.image" :alt="slide.imageAlt" :key="index" :class="slide.imageClass">
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-wrap2">
                <div class="swiper-button-prev2 L-btn">
                    <i class="bi bi-chevron-left"></i>
                </div>
                <div class="swiper-pagination pagination"></div>
                <div class="swiper-button-next2 R-btn">
                    <i class="bi bi-chevron-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from 'swiper/core';

Swiper.use([Navigation, Pagination]);

export default {
    name: 'MainSection04',
    data() {
        return {
            slides: [
                {
                    label: 'Solution',
                    title: '완벽한 자금 관리 솔루션<br>IB*CMS를 만나보세요',
                    description: '금융과 경영의 통합을 통해 미래를 선도하는<br>동시에, SI 사업을 통해 체계적인 시스템 통합을 진행합니다',
                    link: 'Cms.html',
                    linkText: 'IB*CMS 소개',
                    image: require('@/assets/img/cms.png'),
                    imageAlt: '',
                    imageClass: 'cms-img',
                },
                {
                    label: 'Solution',
                    title: '완벽한 자금 관리 솔루션<br>IB*CMS를 만나보세요',
                    description: '금융과 경영의 통합을 통해 미래를 선도하는<br>동시에, SI 사업을 통해 체계적인 시스템 통합을 진행합니다',
                    link: '#',
                    linkText: 'IB*CMS 소개',
                    image: require('@/assets/img/rolling01.svg'),
                    imageAlt: '',
                    imageClass: 'svg-img',
                },
                {
                    label: 'Solution',
                    title: '완벽한 자금 관리 솔루션<br>IB*CMS를 만나보세요',
                    description: '금융과 경영의 통합을 통해 미래를 선도하는<br>동시에, SI 사업을 통해 체계적인 시스템 통합을 진행합니다',
                    link: '#',
                    linkText: 'IB*CMS 소개',
                    image: require('@/assets/img/rolling01.svg'),
                    imageAlt: '',
                    imageClass: 'svg-img',
                },
                {
                    label: 'Solution',
                    title: '완벽한 자금 관리 솔루션<br>IB*CMS를 만나보세요',
                    description: '금융과 경영의 통합을 통해 미래를 선도하는<br>동시에, SI 사업을 통해 체계적인 시스템 통합을 진행합니다',
                    link: '#',
                    linkText: 'IB*CMS 소개',
                    image: require('@/assets/img/rolling01.svg'),
                    imageAlt: '',
                    imageClass: 'svg-img',
                },
            ],
            swiper: null,
        };
    },
    mounted() {
        this.swiper = new Swiper('.swiper2', {
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: '.swiper-button-next2',
                prevEl: '.swiper-button-prev2',
            },
            fadeEffect: {
                crossFade: true,
            },
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            allowTouchMove: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    },
    beforeUnmount() {
        if (this.swiper) {
            this.swiper.destroy(true, true);
        }
    },
};
</script>
<style scoped>
.swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 9px;
}

.btn-wrap2 {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 100%;
    right: 40%;
}
</style>