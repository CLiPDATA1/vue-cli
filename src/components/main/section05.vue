<template>
    <div class="section05-inner">
        <div class="business">
            <p class="H3Bold label itr01">Business partnership</p>
            <h2 class="Title02 itr02">함께 성장하는 미래를 위한<br>
                비즈니스 파트너십</h2>
        </div>
        <div class="partnership">
            <div v-for="(item, index) in partnershipItems" :key="index" :class="`partnership-box itr-LTR0${index + 1}`">
                <div class="text-box">
                    <h3 class="H3Bold">{{ item.title }}</h3>
                    <p class="Body2Medium subText" v-html="item.description"></p>
                    <div class="partnership-img">
                        <img :src="item.image" alt="">
                    </div>
                </div>
                <div class="btn-flex">
                    <a href="#" class="partnership-btn Body1Semibold">업무 제휴 <img src="@/assets/img/arrow-right.svg"
                            alt="arrow-Right"></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MainSection05',
    data() {
        return {
            partnershipItems: [
                {
                    title: '기술제휴',
                    description: '핵심 기술 공유, 공동 연구개발,<br> 기술 라이선스 등을 통해 시너지를 창출합니다.',
                    image: require('@/assets/img/Personal09.svg'),
                },
                {
                    title: '공동 마케팅',
                    description: '공동 캠페인 진행, 브랜드 파트너십 구축, 고객 데이터 공유 등을 통해 마케팅 효과를 극대화합니다.',
                    image: require('@/assets/img/Personal08.svg'),
                },
                {
                    title: '솔루션 개발',
                    description: '플랫폼 공유, API 연동, OEM/ODM 협력 등을 통해 맞춤형 솔루션 개발을 지원합니다.',
                    image: require('@/assets/img/Personal07.svg'),
                },
                {
                    title: '기타',
                    description: '투자 유치, 인력 교류, 해외 진출 지원 등 상호 협력을 통한 성장 동반자로서 파트너십 구축',
                    image: require('@/assets/img/Personal04.svg'),
                },
            ],
        };
    },
}
</script>