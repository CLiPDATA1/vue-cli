<template>
    <div class="section01-inner">
        <div class="mainTitle">
            <h2 class="Title01 itr01">기업의 <span class="Emphasis">안전</span>하고 <span class="Emphasis">효율</span>적인<br>자금관리
                솔루션</h2>
            <p class="Body1Medium subText itr02">법인카드부터 솔루션까지, 새로운 차원의 올인원 비용 관리를 경험해보세요.</p>
            <div class="btn-wrap itr03">
                <a href="#" class="btn btn1 Body1Semibold">
                    <i class="bi bi-download"></i>
                    회사소개서 받기
                </a>
                <a href="#" class="btn btn2 Body1Semibold">
                    <i class="bi bi-lightning-charge-fill"></i>
                    무료 체험하기
                </a>
            </div>
        </div>
        <a href="/" class="scroll_down" @click="scrollToElement('.main_worry')">
            <span>Scroll</span>
            <i class="bi bi-arrow-down"></i>
        </a>
    </div>
</template>
<script>
export default {
    name: 'MainSection01',
    methods: {
        scrollToElement(selector) {
            this.$nextTick(() => {
                const element = document.querySelector(selector);
                if (element) {
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
            });
        }
    },
}; 
</script>
<style scoped>
.section01-inner {
    width: 1440px;
    margin: 0 auto;
    display: flex;
    /* justify-content: space-between; */
    text-align: center;
    justify-content: center;
}

.btn1 {
    display: flex;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    background: none;
    border: 2px solid var(--primary002);
    color: #FF4545;
}

.btn1:hover {
    border: 2px solid #000;
    background: var(--Text-Text_default);
    color: var(--Text-Text_default2);
}
</style>