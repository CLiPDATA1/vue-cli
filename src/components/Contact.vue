<template>
    <ContactSubbanner />
    <ContactSection01 />
    <MyFooter />
</template>
<script>
import ContactSubbanner from './contact/subbanner.vue'
import ContactSection01 from './contact/section001.vue'
import MyFooter from './Footer.vue'

export default {
    name: 'MyContact',
    components: {
        ContactSubbanner,
        ContactSection01,
        MyFooter,
    }
}
</script>
<style scoped>
.footer {
    height: 300px;
}
</style>