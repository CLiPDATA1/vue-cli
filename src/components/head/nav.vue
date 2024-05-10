<template>
    <nav class="nav">
        <ul class="depth1">
            <li v-for="(item, index) in menuItems" :key="index" class="subBg">
                <span class="Body1Semibold">{{ item.title }}</span>
                <ul>
                    <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
                        <a :href="subItem.link"><span>{{ subItem.text }}</span></a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'HeaderNav',
    data() {
        return {
            menuItems: [
                {
                    title: '소개',
                    subItems: [
                        { text: '회사소개', link: '/about' },
                        { text: '사업소개', link: '/business' },
                        { text: '연혁', link: '/history' },
                        { text: '오시는 길', link: '/location' },
                    ],
                },
                {
                    title: '서비스',
                    subItems: [
                        { text: 'IB*CMS', link: '/cms' },
                        { text: 'FIRM API2', link: '#' },
                        { text: '법인카드 감사모니터링', link: '#' },
                        { text: 'FDS', link: '#' },
                    ],
                },
                {
                    title: '데모',
                    subItems: [
                        { text: '데모체험', link: '#' },
                    ],
                },
                {
                    title: '소식',
                    subItems: [
                        { text: '공지사항', link: '#' },
                        { text: '채용공고', link: '#' },
                    ],
                },
            ],
        };
    },
};
</script>