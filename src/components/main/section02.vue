<template>
    <div class="section02-inner">
        <div class="about-us">
            <p class="H3Bold label itr-LTR01">About Us</p>
            <h2 class="Title02 itr-LTR02">신뢰와 안정을<br />바탕으로<br />고객의 성공을 돕는 기업</h2>
            <div class="about-us-btn">
                <p class="Body1Medium subText itr-LTR03" style="margin: auto 0">CLIP DATA의 강한 기술력으로 고객의
                    비즈니스
                    성공에 힘이 되겠습니다</p>
                <a href="/about" class="btn Body1Semibold itr04" style="margin-top: 0">CLiPDATA 소개
                    <img src="@/assets/img/arrow-right.svg" alt="arrow-Right" />
                </a>
            </div>
        </div>
        <div class="rolling-wrap">
            <div class="rolling-list">
                <ul>
                    <li v-for="(item, index) in rollingItems" :key="index">
                        <div :class="`image-wrap${index % 2 === 0 ? '1' : '2'}`">
                            <img :src="item.image" alt="" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MainSection02',
    mounted() {
        this.initializeRollingBanner();
    },
    methods: {
        initializeRollingBanner() {
            let roller = this.$el.querySelector('.rolling-list');
            roller.id = 'roller1';
            let clone = roller.cloneNode(true);
            clone.id = 'roller2';
            this.$el.querySelector('.rolling-wrap').appendChild(clone);
            this.$el.querySelector('#roller1').style.left = '0px';
            this.$el.querySelector('#roller2').style.left = `${this.$el.querySelector('.rolling-list ul').offsetWidth}px`;
            roller.classList.add('original');
            clone.classList.add('clone');
        },
    },
    data() {
        return {
            rollingItems: [
                { image: require('@/assets/img/rolling01.svg') },
                { image: require('@/assets/img/rolling02.svg') },
                { image: require('@/assets/img/rolling03.svg') },
                { image: require('@/assets/img/rolling04.svg') },
            ],
        };
    },

};
</script>