<template>
    <div class="section02">
        <div class="section02-inner">
            <div class="vision">
                <p class="H3Bold label">Vision</p>
                <h2 class="Title02">고객과 함께 미래를 설계하는<br>
                    안전하고 혁신적인 금융 플랫폼</h2>
                <p class="Body1Medium">고객의 자금 안전을 책임지고, 고객의 꿈과 목표 달성을 위한 금융 솔루션을 제공합니다.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AboutSection02'
}
</script>
<style scoped>
.section02 {
    margin-top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 720px;
    background: url(@/assets/img/vision.svg)no-repeat center center;
    background-size: cover;
}

.section02-inner {
    width: 1440px;
    margin: 0 auto;
}

.vision {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
}

.vision p:nth-child(3) {
    margin-top: 50px;
    color: var(--gray007);
}

.vision h2 {
    color: var(--Text-Text_default2);
}
</style>
