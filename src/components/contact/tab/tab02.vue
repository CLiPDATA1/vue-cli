<template>
    <div id="tab02">
        <Baseform select-id="serviceSelect" select-label="서비스 선택" :select-options="[
            { value: 'firm', label: '펌뱅킹서비스' },
            { value: 'cms', label: '자금관리시스템' },
        ]" :inputs="[
            {
                id: 'BSNN_NM',
                label: '회사명',
                type: 'text',
                placeholder: '회사명 입력',
                maxlength: '50',
                required: true,
                requiredMsg: '회사명은 필수입니다.',
            },
            {
                id: 'BSNN_NO',
                label: '사업자번호',
                type: 'text',
                placeholder: '사업자 번호 입력 (\'-\' 제외)',
                dataInput: 'onlyNumber',
                maxlength: '10',
                required: true,
                requiredMsg: '사업자번호는 필수입니다.',
                pattern: '[0-9]*',
            },
            {
                id: 'CSNM',
                label: '담당자',
                type: 'text',
                placeholder: '문의하실 담당자명을 남겨주세요',
                maxlength: '5',
            },
            {
                id: 'CNPL',
                label: '연락처',
                type: 'text',
                placeholder: '숫자만 입력 (\'-\' 제외)',
                dataInput: 'onlyNumber',
                maxlength: '12',
                pattern: '[0-9]*',
                required: true,
                requiredMsg: '연락처는 필수입니다.',
            },
            {
                id: 'EML',
                label: '이메일',
                type: 'text',
                placeholder: '이메일 주소 입력',
                maxlength: '200',
                required: true,
                requiredMsg: '이메일은 필수입니다.',
            },
        ]" textarea-id="INQR_CNTN" textarea-label="문의 내용" textarea-placeholder="문의할 내용을 작성해 주세요.&#10;*개인정보 작성 금지"
            textarea-required-msg="내용은 필수입니다." consent-id="consent" />
    </div>
</template>

<script>
import Baseform from './form.vue';

export default {
    name: 'ContactTab02',
    components: {
        Baseform,
    },
};
</script>