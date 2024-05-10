<template>
    <div class="section03">
        <div class="section03-inner">
            <h2 class="Title02">COMPANY INFO</h2>
            <div class="info-wrap">
                <div class="info-L">
                    <img src="@/assets/img/company.svg" alt="" />
                </div>
                <div class="info-R">
                    <table class="table">
                        <tbody>
                            <tr v-for="(info, index) in companyInfo" :key="index">
                                <th>{{ info.label }}</th>
                                <td>{{ info.value }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AboutSection03',
    data() {
        return {
            companyInfo: [
                {
                    label: '회사명',
                    value: '클립데이터 주식회사'
                },
                {
                    label: '설립일',
                    value: '2022년 7월 21일'
                },
                {
                    label: '대표자',
                    value: '전종표'
                },
                {
                    label: '사업분야',
                    value: '소프트웨어 개발 및 공급업, 정보통신업'
                },
                {
                    label: '주소',
                    value: '서울특별시 강서구 강서로 416 더스카이밸리 지식산업센터 15층'
                },
                {
                    label: '전화번호',
                    value: '02-2131-2902'
                },
            ],
        };
    },
};
</script>
<style scoped>
.section03 {
    width: 100%;
    /* height: 1080px; */
    margin: 150px auto 200px auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.section03-inner {
    width: 1440px;
    display: grid;
    margin: 0 auto;
}

.section03-inner h2 {
    text-align: center;
}

.info-wrap {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
}

.info-L {
    margin-right: 70px;
    width: 100%;
    height: 100%;

}

.info-L img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.table {
    width: 650px;
    border-top: 3px solid var(--primary002);
}

tr {
    height: 80px;
}

th {
    width: 150px;
    text-align: left;
    text-indent: 16px;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.025em;
}

td {
    padding: 8px;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    /* 150% */
    letter-spacing: -0.025em;
    color: var(--Text-Text_sub);
}
</style>