<template>
    <div class="section01">
        <div class="section01-inner">
            <div class="section01-title">
                <p class="H3Bold label">Company history</p>
                <h2 class="Title02">클립데이터가 걸어온 길입니다.</h2>
            </div>
            <div class="histroy">
                <div class="left">
                    <h3 class="Title03">현재 2020~</h3>
                </div>
                <div class="right">
                    <div class="listArea" v-for="(history, index) in Histories" :key="index">
                        <div class="left_second">
                            <h4 class="Title03">{{ history.year }}</h4>
                        </div>
                        <div class="right_second">
                            <ul>
                                <li v-for="(subhistory, subindex) in history.contents" :key="subindex">{{
                                    subhistory }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HistorySection01',
    data() {
        return {
            Histories: [
                {
                    year: '2024',
                    contents: ['CLiPDATA-IB 상품출시 예정()/FIRM API 고도화 추진()']
                },
                {
                    year: '2023',
                    contents: ['CLiPDATA-IB 상품출시 예정()/FIRM API 고도화 추진()',
                        '국민은행 - 웹케시 - 사학연금공단 지급업무관리 시스템 고도화 구축완료'
                    ]
                },
                {
                    year: '2022',
                    contents: ['웍스메이트 FIRM API 상품 도입 및 유지운영 계약',
                        '농협은행 - 웹케시 - 한국전력 자금관리 시스템 고도화 사업 구축완료',
                        '한국신용데이터 FIRM API 상품 도입 및 유지운영 계약',
                        '기술보증기금 예비창업자 승인',
                        '클립데이터 주식회사 설립'
                    ]
                },
            ]
        }
    },
}
</script>
<style scoped>
.section01 {
    margin: 150px auto 200px auto;
}

.section01-inner {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: grid;
    text-align: left;
}

.section01-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.histroy {
    display: flex;
    margin-top: 200px;
}

.left {
    width: 20%;
}

.right {
    width: 80%;
}

.listArea:first-child {
    padding: 0 20px 80px 20px;
}

.listArea {
    width: 100%;
    padding: 80px 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--Border-Border_default);
}

.left_second {
    width: 20%;
}

.right_second {
    width: 80%;
}

.left_second h4 {
    color: var(--primary002);
}

.right_second ul li {
    padding: 6px 0;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.025em;
    color: var(--Text-Text_sub);
}

.right_second ul li:before {
    display: inline-block;
    margin-right: 10px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    /* background-color: var(--Text-Text_info); */
    background-color: var(--primary002);
    line-height: 1.5rem;
    vertical-align: middle;
    content: "";
}
</style>