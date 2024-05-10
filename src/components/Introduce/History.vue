<template>
    <HistorySubbanner />
    <HistorySection01 />
    <MyFooter />
</template>
<script>
import HistorySubbanner from './history/subbanner.vue'
import HistorySection01 from './history/section01.vue'
import MyFooter from '../../components/Footer.vue'

export default {
    name: 'MyHistory',
    components: {
        HistorySubbanner,
        HistorySection01,
        MyFooter,
    }
}
</script>
<style scoped>
.footer {
    height: 300px;
}
</style>