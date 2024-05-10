<template>
    <div class="section02">
        <div class="section02-inner">
            <div class="advantage-text">
                <p class="H3Bold label">Special</p>
                <h2 class="Title02">IB*CMS만의 특별함</h2>
            </div>
            <div class="content-wrap">
                <div class="content-box" v-for="(content, index) in contentitem" :key="index">
                    <div class="">
                        <h3 class="H3Bold">{{ content.title }}</h3>
                        <p class="Body2Medium subText" v-html="content.content"></p>
                    </div>
                    <div class="content-img">
                        <p class="Body1Medium subText"><span class="label">{{ content.label }}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CmsSection02',
    data() {
        return {
            contentitem: [
                {
                    title: '원스톱',
                    content: '금융기관/통신사/카드사별로 진행해야 하는<br> 번거로운 결제 업무부터 납부고객의 납부 동의, 결제, 전자명세 알림 서비스까지 단일계약을<br> 통해 원스톱(One-stop)으로 해결할 수 있습니다.',
                    label: '01',
                },
                {
                    title: '보안성',
                    content: '완벽한 보안을 위해 모든 고객 정보와 결제 정보를 암호화하고 있으며, ‘정보보호관리체계(ISMS)인증’ 획득을 통해 ‘보안시스템 모범사례’라는 평가를 받고 있습니다.',
                    label: '02',
                },
                {
                    title: '맞춤화',
                    content: '업종별, 사업별 진단을 통해 사업자가 처한<br> 비즈니스 환경에 최적화된 맞춤 CMS 프로그램을 설계해 제공합니다.',
                    label: '03',
                },
            ]
        }
    },
}
</script>
<style scoped>
.section02 {
    position: relative;
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: #1a1f35; */
}

.section02-inner {
    width: 1440px;
    height: 500px;
    border-radius: 30px;
    margin: 0 auto;
    background: url(@/assets/img/serviceBg.png)no-repeat center;
    background-size: cover;
}


.advantage-text {
    text-align: center;
    margin-top: 50px;
}

.section02-inner h2 {
    color: var(--Text-Text_default2);
}

.content-wrap {
    position: absolute;
    left: 25%;
    top: 40%;
    display: flex;
    justify-content: space-around;
    margin-top: 80px;
    gap: 20px;
}

.content-box {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: 340px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 28px;
    border-radius: 10px;
    padding: 40px 30px;
    box-sizing: border-box;
    background: #fff;
}

.content-img {
    display: flex;
    justify-content: right;
}
</style>