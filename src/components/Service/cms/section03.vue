<template>
    <div class="section03">
        <div class="section03-inner">
            <div class="key_features-wrap">
                <div class="key_features-title">
                    <p class="H3Bold label">key features</p>
                    <h2 class="Title02">주요 기능</h2>
                    <p class="Body1Medium subText">IB*CMS의 다양한 기능을 활용하여 <br>기업 금융 거래를 더욱 <span class="ES">간편</span>하고
                        <span class="ES">안전</span>하게 만들어보세요
                    </p>
                </div>
                <div class="carousel">
                    <swiper class="swiper3" :modules="modules" :navigation="swiperOptions.navigation"
                        :pagination="swiperOptions.pagination">
                        <swiper-slide>
                            <div class="feature-wrap">
                                <div class="feature-box" v-for="(feature, index) in features1" :key="index">
                                    <a href="#">
                                        <img :src="require(`@/assets/img/${feature.icon}`)" alt="" class="box-icon">
                                        <h4><span v-html="feature.title"></span></h4>
                                        <img src="@/assets/img/arrow-right.svg" alt="arrow-right" class="arrow-img">
                                    </a>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="feature-wrap">
                                <div class="feature-box" v-for="(feature, index) in features2" :key="index">
                                    <a href="#">
                                        <img :src="require(`@/assets/img/${feature.icon}`)" alt="" class="box-icon">
                                        <h4><span v-html="feature.title"></span></h4>
                                        <img src="@/assets/img/arrow-right.svg" alt="arrow-right" class="arrow-img">
                                    </a>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                    <div class="btn-wrap2">
                        <div class="swiper-button-prev2 L-btn">
                            <i class="bi bi-chevron-left"></i>
                        </div>
                        <div class="swiper-pagination2"></div>
                        <div class="swiper-button-next2 R-btn">
                            <i class="bi bi-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

export default {
    name: 'CmsSection03',
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Navigation, Pagination],
            swiperOptions: {
                navigation: {
                    nextEl: '.swiper-button-next2',
                    prevEl: '.swiper-button-prev2',
                },
                pagination: {
                    el: '.swiper-pagination2',
                    clickable: true,
                },
                loop: true,
                spaceBetween: 30,
            },
            features1: [
                { icon: 'features01.svg', title: '금융자산관리' },
                { icon: 'features02.svg', title: '지급관리' },
                { icon: 'features03.svg', title: '내부업무<br>운영관리' },
                { icon: 'features04.svg', title: '법인카드관리' },
                { icon: 'features05.svg', title: '법인카드<br>감사모니터링' },
                { icon: 'features06.svg', title: '자금집금' },
                { icon: 'features07.svg', title: '기준정보' },
                { icon: 'features08.svg', title: '관리자' },
            ],
            features2: [
                { icon: 'features11.svg', title: '법인카드<br>통계현황' },
                { icon: 'features12.svg', title: '수납관리' },
                { icon: 'features09.svg', title: '결재함' },
                { icon: 'features10.svg', title: '뱅킹관리' },
            ],
        };
    },
};
</script>
<style scoped>
.section03-inner {
    width: 1200px;
    height: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.section03-title {
    text-align: center;
}


.key_features-wrap {
    display: flex;
    margin-top: 80px;
    justify-content: space-between;
}

.key_features-title {
    margin-top: 100px;
}

.key_features-title p {
    position: relative;
}

.feature-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.feature-box a {
    position: relative;
    display: block;
    width: 160px;
    height: 160px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 0 18px rgba(0, 0, 0, 0.12);
}

.feature-box h4 {
    margin-top: 10px;
}

.feature-box:hover {
    transition: all 0.3s;
    background: var(--primary-Hover);
}

.feature-box:hover,
.feature-box:hover h4 {
    /* background: var(--primary-Hover); */
    color: var(--Text-Text_default2);
    border-radius: 10px;
}

.feature-box:hover .box-icon {
    filter: invert();
}

.feature-box:hover .arrow-img {
    display: block;
}

.feature-box h4>span {
    position: relative;
    margin-top: 10px;
}

.feature-box span::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    transform: translateY(100%);
    width: 0;
    height: 1px;
    background-color: #fff;
    transition: width 0.5s;
}

.feature-box:hover span::before {
    width: 100%;
}

.arrow-img {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: none;
}

.carousel {
    width: 750px;
    padding: 20px;
    overflow: hidden;
}

.btn-wrap2 {
    margin-top: 80px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
}

.L-btn,
.R-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 30px;
    border: 1px solid var(--Border-Border_default);
    background: white;
}

.pagination {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    justify-content: center;
}

.swiper2 .swiper-pagination {
    position: absolute;
    width: 20px;
    /* bottom: 10px !important; */

}

.swiper-pagination-bullet {
    background-color: var(--primary002);
    /* margin: 0 10px !important; */
}

.swiper-container {
    overflow: visible;
}

.swiper-slide {
    margin-right: 30px;
}
</style>