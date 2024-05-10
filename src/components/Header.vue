<template>
    <header class="header">
        <div class="inner">
            <HeaderLogo />
            <HeaderNav />
            <HeaderContact />
        </div>
    </header>
</template>
<script>
import HeaderLogo from './head/logo.vue';
import HeaderNav from './head/nav.vue';
import HeaderContact from './head/contact.vue';

export default {
    name: 'MyHeader',
    components: {
        HeaderLogo,
        HeaderNav,
        HeaderContact,
    }
}
</script>
<style scoped>
@import '../assets/css/header.css';
</style>
