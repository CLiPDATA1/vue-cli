<template>
    <div class="tab-inner">
        <div class="frm_group_wrap" id="vocArea">
            <div class="frm_group">
                <label :for="selectId">{{ selectLabel }}<em class="point"></em></label>
                <select :id="selectId" class="select">
                    <option disabled selected>선택</option>
                    <option v-for="option in selectOptions" :key="option.value" :value="option.value">{{ option.label }}
                    </option>
                </select>
            </div>
            <div class="frm_group" v-for="input in inputs" :key="input.id">
                <label :for="input.id">{{ input.label }}<em class="point"></em></label>
                <div>
                    <input :type="input.type" :id="input.id" :placeholder="input.placeholder"
                        :maxlength="input.maxlength" :required="input.required" :data-required-msg="input.requiredMsg"
                        :pattern="input.pattern" :data-input="input.dataInput">
                </div>
            </div>
            <div class="frm_group frm_control_full">
                <label :for="textareaId">{{ textareaLabel }}<em class="point"></em></label>
                <div>
                    <textarea :id="textareaId" cols="" rows="" :placeholder="textareaPlaceholder" required
                        :data-required-msg="textareaRequiredMsg"></textarea>
                </div>
            </div>
        </div>
        <div class="frm_grp">
            <div class="agr_head">
                <label :for="consentId">
                    <input type="checkbox" :id="consentId">
                    <span class="Body1Semibold consent-text">개인정보 수집 및 이용 동의</span>
                    <a href="#" class="Body2bold">자세히 보기</a>
                </label>
            </div>
        </div>
        <div class="btn_wrap">
            <a href="#" class="btn Body1Semibold">
                신청하기
                <img src="@/assets/img/arrow-right.svg" alt="arrow-Right">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseForm',
    props: {
        selectId: String,
        selectLabel: String,
        selectOptions: Array,
        inputs: Array,
        textareaId: String,
        textareaLabel: String,
        textareaPlaceholder: String,
        textareaRequiredMsg: String,
        consentId: String,
    },
};
</script>
<style scoped>
.consent-text {
    margin-right: 10px;
}
</style>