<template>
    <div class="section01">
        <div class="section01-inner">
            <div class="tab">
                <ul class="tabnav">
                    <li><a href="#" :class="{ active: activeTab === 'tab01' }"
                            @click.prevent="activeTab = 'tab01'"><span class="H3Bold">문의하기</span></a></li>
                    <li><a href="#" :class="{ active: activeTab === 'tab02' }"
                            @click.prevent="activeTab = 'tab02'"><span class="H3Bold">업무제휴</span></a></li>
                    <li><a href="#" :class="{ active: activeTab === 'tab03' }"
                            @click.prevent="activeTab = 'tab03'"><span class="H3Bold">데모요청</span></a></li>
                </ul>
                <div class="tabcontent">
                    <ContactTab01 v-if="activeTab === 'tab01'" />
                    <ContactTab02 v-if="activeTab === 'tab02'" />
                    <ContactTab03 v-if="activeTab === 'tab03'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContactTab01 from './tab/tab01.vue';
import ContactTab02 from './tab/tab02.vue';
import ContactTab03 from './tab/tab03.vue';

export default {
    name: 'ContactSection01',
    components: {
        ContactTab01,
        ContactTab02,
        ContactTab03,
    },
    data() {
        return {
            activeTab: 'tab01',
        };
    },
};
</script>

<style scoped>
@import '@/assets/css/Contact.css';

.tabnav li a.active {
    background: #fff;
    color: var(--Text-Text_default);
    border-bottom: 1px solid #fff;
}

.section01-inner {
    height: 1080px;
    width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    /* align-items: center; */
}
</style>