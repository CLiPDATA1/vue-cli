<template>
    <div class="section01">
        <div class="section01-inner">
            <div class="about-si">
                <p class="H3Bold label">About SI</p>
                <h2 class="Title02">SI 사업이란?</h2>
                <p class="Body1Medium subText">SI 사업은 시스템 통합(System Integration) 사업의 약자로, <br><span class="ES">기업의 정보시스템
                        구축</span>을 지원하는 사업입니다. <br>
                    기업의 비즈니스 프로세스를 분석하고, 최적의 시스템 구축 방안을 제시하며, <br>시스템 설계, 개발, 운영, 유지보수까지 <span class="ES">종합적인
                        서비스</span>를 제공합니다.</p>
            </div>
            <div class="about-si-img">
                <img src="@/assets/img/aboutsi.svg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BusinessSection01'
}
</script>
<style scoped>
.section01-inner {
    width: 1200px;
    /* height: 800px; */
    margin: 150px auto;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    align-items: center;
    text-align: left;
}

.about-si p:nth-child(3) {
    margin-top: 60px;
}

.about-si-img {
    width: 500px;
}
</style>