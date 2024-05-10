<template>
    <LocationSubbanner />
    <LocationSection01 />
    <MyFooter />
</template>
<script>
import LocationSubbanner from './location/subbanner.vue'
import LocationSection01 from './location/section01.vue'
import MyFooter from '../../components/Footer.vue'

export default {
    name: 'MyLocation',
    components: {
        LocationSubbanner,
        LocationSection01,
        MyFooter,
    },
}
</script>
<style scoped>
.footer {
    height: 300px;
}
</style>