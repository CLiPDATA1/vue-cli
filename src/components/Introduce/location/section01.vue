<template>
    <div class="section01">
        <div class="section01-inner">
            <div class="location">
                <p class="H3Bold label">Location</p>
                <h2 class="Title02">클립데이터는 강서로에 위치하고 있습니다.</h2>
            </div>
            <div id="map"></div>
            <div class="Loc-info-wrap">
                <div>
                    <h3 class="H2Bold">Location</h3>
                    <p class="Body2Medium subText">서울특별시 강서구 강서로 416 <br>
                        더스카이밸리 지식산업센터 15층, (우)07548</p>
                </div>
                <div>
                    <h3 class="H2Bold">CALL</h3>
                    <p class="Body2Medium subText">02-2131-2902</p>
                </div>
                <div>
                    <h3 class="H2Bold">MAIL</h3>
                    <p class="Body2Medium subText">zcvz12@naver.com</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LocationSection01',
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.loadScript();
        } else {
            this.loadScript();
        }
    },
    methods: {
        loadScript() {
            const script = document.createElement('script');
            script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=6a63511f21f0885fb628f8c973e1b7f4&autoload=false';
            script.onload = () => {
                window.kakao.maps.load(() => {
                    this.loadMap();
                });
            };
            document.head.appendChild(script);
        },
        loadMap() {
            const container = document.getElementById('map');
            const options = {
                center: new window.kakao.maps.LatLng(37.560051, 126.855453),
                level: 3
            };
            this.map = new window.kakao.maps.Map(container, options);
            this.loadMaker();
        },
        loadMaker() {
            const markerPosition = new window.kakao.maps.LatLng(37.560051, 126.855453);
            const marker = new window.kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(this.map);
            window.kakao.maps.event.addListener(marker, 'click', () => {
                window.location.href = 'https://map.kakao.com/link/to/클립데이터,37.560051,126.855453';
            });
        },
    },
};
</script>
<style scoped>
.section01 {
    width: 100%;
    height: 1080px;
    margin-top: 100px;
}

.section01-inner {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    /* flex-direction: column;
    justify-content: center;
    align-items: center; */
    text-align: center;
}

#map {
    width: 100%;
    height: 500px;
    margin-top: 80px;
    border-radius: 20px;
}

.Loc-info-wrap {
    display: flex;
    margin-top: 80px;
}

.Loc-info-wrap div {
    width: calc(100%/3);
    height: 150px;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
}

.Loc-info-wrap div:nth-child(2):before {
    content: '';
    position: absolute;
    left: 0;
    top: 25px;
    width: 2px;
    height: 100px;
    background: var(--Border-Border_default);
}

.Loc-info-wrap div:nth-child(2)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 25px;
    width: 2px;
    height: 100px;
    background: var(--Border-Border_default);
}
</style>