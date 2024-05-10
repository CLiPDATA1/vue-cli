<template>
    <div class="section02">
        <div class="section02-inner">
            <h2 class="Title02">Work Flow</h2>
            <div class="flow-wrap">
                <div class="flow-box" v-for="(flow, index) in workflow" :key="index">
                    <div class="flow-box-tit">
                        <p class="H3Regular">0{{ index + 1 }}</p>
                        <h5 class="H3Semibold">{{ flow.title }}</h5>
                        <img src="@/assets/img/workflow.svg" alt="">
                    </div>
                    <ul>
                        <li v-for="item in flow.items" :key="item">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BusinessSection02',
    data() {
        return {
            workflow: [
                {
                    title: '요구사항 분석',
                    items: ['운영관리 목표파악', '운영관리 지침파악']
                },
                {
                    title: '시스템 전략수립',
                    items: ['기존 전산 인프라 분석', 'HW/SW 선정', '시스템구성 모델링']
                },
                {
                    title: '시스템 전략 컨설팅',
                    items: ['시스템 기능 분석 및 설계', 'DB구축 및 모델링 설계', 'UI 디자인 설계']
                },
                {
                    title: '시스템 구축',
                    items: ['시스템 구축', '데이터 구축 및 마이그레이션', '사용자인터페이스 적용']
                },
                {
                    title: '서비스 운영',
                    items: ['시스템 사용자 교육', '시스템활용 전략적 방향 제시', '시스템 유지보수 및 운영']
                },
            ]
        }
    }
}
</script>
<style scoped>
.section02 {
    width: 100%;
    height: 600px;
    background: #fafafa;
}

.section02-inner {
    width: 1440px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

}

.flow-wrap {
    margin-top: 80px;
    display: flex;
    gap: 22px;
}

.flow-box {
    position: relative;
    width: 270px;
    box-sizing: border-box;
    text-align: left;
    padding: 12px 16px;
}

.flow-box ul {
    padding: 20px 16px;
    width: 220px;
}

.flow-box ul li {
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.025em;
    color: var(--Text-Text_sub);
}

.flow-box ul li::before {
    display: inline-block;
    margin-right: 10px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--Text-Text_info);
    line-height: 1.5rem;
    vertical-align: middle;
    content: "";
}

.flow-box-tit img {
    /* background: url(img/workflow.svg)no-repeat 50% 100%; */
    position: absolute;
    left: 0;
}

.flow-box-tit h5 {
    /* padding-left: 16px; */
    padding-bottom: 20px;
}
</style>