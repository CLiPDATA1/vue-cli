<template>
    <div class="section06-inner">
        <div class="Personal-solution">
            <p class="H3Bold label itr01">Personal solution</p>
            <h2 class="Title02 itr02">고객별로 전문화된 최적의 솔루션을<br>
                설계하고 제안해드려요</h2>
        </div>
        <div class="rolling-wrap2 itr04">
            <div class="rolling-list2">
                <ul>
                    <li v-for="(proposal, index) in proposals" :key="index">
                        <div class="proposal-wrap">
                            <div class="proposal-img">
                                <img :src="proposal.image" :alt="proposal.imageAlt">
                            </div>
                            <p class="H3Bold">{{ proposal.title }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MainSection06',
    data() {
        return {
            proposals: [
                {
                    image: require('@/assets/img/Personal01.svg'),
                    imageAlt: '',
                    title: '플랫폼 공유',
                },
                {
                    image: require('@/assets/img/Personal02.svg'),
                    imageAlt: '',
                    title: 'API 연동',
                },
                {
                    image: require('@/assets/img/Personal03.svg'),
                    imageAlt: '',
                    title: '보안',
                },
                {
                    image: require('@/assets/img/Personal04.svg'),
                    imageAlt: '',
                    title: '기술 공유',
                },
                {
                    image: require('@/assets/img/Personal05.svg'),
                    imageAlt: '',
                    title: '투자 유치',
                },
                {
                    image: require('@/assets/img/Personal06.svg'),
                    imageAlt: '',
                    title: '인력 교류',
                },
                {
                    image: require('@/assets/img/Personal07.svg'),
                    imageAlt: '',
                    title: '기술 라이선스',
                },
            ],
        };
    },
    mounted() {
        this.initializeRollingBanner();
    },
    methods: {
        initializeRollingBanner() {
            // 롤링 배너 복제본 생성
            let roller2 = document.querySelector('.rolling-list2');
            roller2.id = 'roller3'; // 아이디 부여

            let clone2 = roller2.cloneNode(true);
            clone2.id = 'roller4';

            // 스크립트 수정 시작
            let parentElement = document.querySelector('.rolling-wrap2');
            let firstChild = parentElement.firstChild;
            parentElement.insertBefore(clone2, firstChild);
            // 스크립트 수정 끝

            document.querySelector('#roller3').style.left = '0px';
            document.querySelector('#roller4').style.left = document.querySelector('.rolling-list2 ul').offsetWidth + 'px';

            roller2.classList.add('original');
            clone2.classList.add('clone');
        }
    }
}
</script>