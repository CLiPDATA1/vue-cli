<template>
    <MyHeader />
    <router-view />
</template>

<script>
import MyHeader from './components/Header.vue';

export default {
    name: 'App',
    components: {
        MyHeader,
    }
}
</script>

<style></style>
