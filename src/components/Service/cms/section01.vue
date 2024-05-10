<template>
    <section class="section01">
        <div class="section01-inner">
            <div class="cms-intro">
                <p class="H3Bold label">IB*CMS</p>
                <h2 class="Title02">안전하고 효율적인<br>자금 관리 서비스</h2>
                <p class="Body1Medium subText">분산된 여러 다른 업무를 하나의 시스템으로 <br>결합해주는 <span class="ES">종합 비즈니스 관리</span> 솔루션
                </p>
            </div>
            <div class="cms-image">
                <img src="@/assets/img/Data extraction-rafiki.svg" alt="">
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'CmsSection01',
}
</script>
<style scoped>
.section01-inner {
    height: 800px;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.section01-inner img {
    width: 500px;
}
</style>
