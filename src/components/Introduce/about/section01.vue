<template>
    <section class="section01">
        <div class="section01-inner">
            <div class="aboutUs">
                <p class="H3Bold label">About Us</p>
                <h2 class="Title02">고객의 안전한 자금관리,<br> 혁신적인 솔루션으로 함께 만들어 가는 미래</h2>
            </div>
            <div class="company-info">
                <div class="intro-box">
                    <h4 class="H3Semibold">2022년 설립된 젊은 금융 서비스 기업 CLIPDATA는 짧은 시간 안에 놀라운 성장을 이루었습니다. <br> 뛰어난 기술력을 바탕으로
                        전자금융구축 프로젝트를 성공적으로 완수하며 업계의 주목을 받았습니다.</h4>
                    <p class="Body1Medium">On-Premise FIRM API, 펌뱅킹 자금관리시스템 SI 구축 등의 분야에 진출하며<br> 꾸준히 성장하고 있는 CLIPDATA는
                        비록 작은 회사이지만 기술력은 결코 작지 않습니다. <br> 오픈소스 프레임워크를 최대한 활용하여 고객이 큰 비용 투자 없이 최고의 서비스를 제공받을 수 있도록
                        노력하고<br> 있습니다.</p>
                </div>
                <div>
                    <a href="#" class="download">
                        <span class="Body1Semibold">회사소개서<br>다운로드</span>
                        <i class="bi bi-download"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'AboutSection01'
}
</script>
<style scoped>
.section01 {
    width: 100%;
    /* height: 1080px; */
    margin-top: 150px;
    display: flex;
    align-items: center;
}

.section01-inner {
    width: 1440px;
    margin: 0 auto;
    text-align: center;
    display: grid;
}

.company-info {
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin: 80px auto 0 auto;
    width: 1200px;
    height: 340px;
    background: #fafafa;
    overflow: hidden;
    border-radius: 10px;
    padding: 30px;
    box-sizing: border-box;
}

.intro-box h4 {
    margin-bottom: 30px;
}

.download {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--primary002);
    width: 200px;
    height: 200px;
    border-radius: 10px;
    padding: 30px;
    box-sizing: border-box;
    color: var(--Text-Text_default2);
    /* text-align: center; */
}

.download i {
    text-align: right;
    font-size: 32px;
}

.download:hover {
    transition: all 0.3s;
    background: var(--primary-Hover);
}

.intro-box p {
    color: var(--Text-Text_info);
}
</style>