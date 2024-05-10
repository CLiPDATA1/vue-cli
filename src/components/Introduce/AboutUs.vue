<template>
    <AboutSubbanner />
    <AboutSection01 />
    <AboutSection02 />
    <AboutSection03 />
    <MyFooter />
</template>

<script>
import AboutSection01 from './about/section01.vue';
import AboutSection02 from './about/section02.vue';
import AboutSection03 from './about/section03.vue';
import AboutSubbanner from './about/subbanner.vue';
import MyFooter from '../../components/Footer.vue';

export default {
    name: 'MyAboutUs',
    components: {
        AboutSection01,
        AboutSection02,
        AboutSection03,
        AboutSubbanner,
        MyFooter,
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const header = document.querySelector('.header');
            const scrollPosition = window.scrollY;
            if (scrollPosition > 80) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        },
    },
};
</script>

<style scoped>
.footer {
    height: 300px;
}
</style>