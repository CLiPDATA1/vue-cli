<template>
    <CmsSubbanner />
    <CmsSection01 />
    <CmsSection02 />
    <CmsSection03 />
    <CmsSection04 />
    <MyFooter />
</template>
<script>
import CmsSubbanner from './cms/subbanner.vue';
import CmsSection01 from './cms/section01.vue';
import CmsSection02 from './cms/section02.vue';
import CmsSection03 from './cms/section03.vue';
import CmsSection04 from './cms/section04.vue';
import MyFooter from '../../components/Footer.vue';

export default {
    name: 'MyCms',
    components: {
        CmsSubbanner,
        CmsSection01,
        CmsSection02,
        CmsSection03,
        CmsSection04,
        MyFooter,
    }
}
</script>
<style scoped>
.footer {
    height: 300px;
}
</style>