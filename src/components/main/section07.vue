<template>
    <div class="section07-inner">
        <div class="News">
            <p class="H3Bold label itr-LTR01">News</p>
            <div class="itr-LTR02" style="display: flex;">
                <img src="@/assets/img/logoBl.svg" alt="logo" class="news-logo">
                <h2 class="Title02">의</h2>
            </div>
            <h2 class="Title02 itr-LTR03">새로운 소식을 전해드려요!
            </h2>
            <a href="#" class="btn Body1Semibold itr-LTR04">소식 더보기
                <img src="@/assets/img/arrow-right.svg" alt="arrow-Right">
            </a>
        </div>
        <ul class="bulletin-wrapper itr05">
            <li v-for="(item, index) in bulletinItems" :key="index">
                <a href="#" class="bulletin-wrap">
                    <div class="bulletin-img">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="bulletin">
                        <p class="Body2Semibold label">{{ item.label }}</p>
                        <h4 class="H2Bold">{{ item.title }}</h4>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'MainSection07',
    data() {
        return {
            bulletinItems: [
                {
                    image: '',
                    label: '채용 정보',
                    title: 'CLiPDATA와 함께 할 인재를 모집합니다.',
                },
                {
                    image: '',
                    label: '채용 정보',
                    title: 'CLiPDATA와 함께 할 인재를 모집합니다.',
                },
                {
                    image: '',
                    label: '채용 정보',
                    title: 'CLiPDATA와 함께 할 인재를 모집합니다.',
                },
            ],
        };
    },
}
</script>