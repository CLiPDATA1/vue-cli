<template>
    <div id="tab03">
        <Baseform select-id="demoSelect" select-label="데모시연" :select-options="[{ value: 'demo', label: '데모요청' }]"
            :inputs="[
                {
                    id: 'BSNN_NM2',
                    label: '회사명',
                    type: 'text',
                    placeholder: '회사명 입력',
                    maxlength: '50',
                    required: true,
                    requiredMsg: '회사명은 필수입니다.',
                },
                {
                    id: 'BSNN_NO2',
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
                    id: 'CSNM2',
                    label: '담당자',
                    type: 'text',
                    placeholder: '문의하실 담당자명을 남겨주세요',
                    maxlength: '5',
                },
                {
                    id: 'CNPL2',
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
                    id: 'EML2',
                    label: '이메일',
                    type: 'text',
                    placeholder: '이메일 주소 입력',
                    maxlength: '200',
                    required: true,
                    requiredMsg: '이메일은 필수입니다.',
                },
            ]" textarea-id="INQR_CNTN2" textarea-label="문의 내용" textarea-placeholder="문의할 내용을 작성해 주세요.&#10;*개인정보 작성 금지"
            textarea-required-msg="내용은 필수입니다." consent-id="consent" />
    </div>
</template>

<script>
import Baseform from './form.vue';

export default {
    name: 'ContactTab03',
    components: {
        Baseform,
    },
};
</script>