<template>
    <BusinessSubbanner />
    <BusinessSection01 />
    <BusinessSection02 />
    <BusinessSection03 />
    <MyFooter />
</template>
<script>
import BusinessSubbanner from './business/subbanner.vue'
import BusinessSection01 from './business/section01.vue'
import BusinessSection02 from './business/section02.vue'
import BusinessSection03 from './business/section03.vue'
import MyFooter from '../../components/Footer.vue'

export default {
    name: 'MyBusiness',
    components: {
        BusinessSubbanner,
        BusinessSection01,
        BusinessSection02,
        BusinessSection03,
        MyFooter,

    }

}
</script>
<style scoped>
.footer {
    height: 300px;
}
</style>