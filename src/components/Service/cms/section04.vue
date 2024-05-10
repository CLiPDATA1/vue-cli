<template>
    <div class="section04">
        <div class="section04-inner">
            <div class="section04-title">
                <p class="H3Bold label">Introduction effect</p>
                <h2 class="Title02">도입효과</h2>
                <div class="effect-wrap">
                    <div class="effect-box" v-for="(effect, index) in effects" :key="index">
                        <div class="icon-wrap">
                            <i :class="effect.icon"></i>
                        </div>
                        <div class="effect-text">
                            <h4 class="H3Semibold">{{ effect.title }}</h4>
                            <p v-html="effect.content"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CmsSection04',
    data() {
        return {
            effects: [
                {
                    icon: 'bi bi-graph-up-arrow',
                    title: '비즈니스 효율성 향상',
                    content: '정보시스템을 통해 업무 프로세스를 자동화하고,<br>정보 공유를 촉진하여 비즈니스 효율성을 향상시킬 수 있습니다.'
                },
                {
                    icon: 'bi bi-building-up',
                    title: '경쟁력 강화',
                    content: '빠르게 변화하는 시장 환경에 맞춰 신속하게 시스템을 업데이트하고 <br>새로운 기술을 도입할 수 있어 경쟁력을 유지할 수 있습니다.'
                },
                {
                    icon: 'bi bi-shield-exclamation',
                    title: '리스크 관리',
                    content: '시스템 오류, 보안 문제, 데이터 손실 등을 예방하고 안정적인 시스템 운영을<br> 보장합니다. <br>또한, 법적 규정 준수 및 시스템 보안 강화를 통해 기업의 리스크를 관리할 수 있습니다.'
                },
                {
                    icon: 'bi bi-database-down',
                    title: '비용절감',
                    content: '효율적인 시스템 구축을 통해 운영 및 유지보수 비용을 줄일 수 있습니다. <br>또한, 정보시스템을 통해 자원 활용 효율성을 높여 비용 절감 효과를 기대할 수<br> 있습니다.'
                }
            ]
        }
    },
}
</script>
<style scoped>
.section04 {
    margin-top: 150px;
}

.section04-inner {
    width: 1200px;
    height: 1080px;
    margin: 0 auto;
    display: grid;
}

.section04-title {
    text-align: center;
}

.effect-wrap {

    width: 800px;
    margin: 80px auto 0 auto;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
}

.effect-box {
    display: flex;
    justify-content: left;
    gap: 40px;
    width: 800px;
    height: 130px;
}

.icon-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 130px;
    border-radius: 10px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.12);
}

.icon-wrap i {
    font-size: 36px;
}

.effect-text {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    box-sizing: border-box;
    /* justify-content: space-between; */
    /* gap: 10px; */
}

.effect-text h4 {
    margin-bottom: 10px;
}
</style>