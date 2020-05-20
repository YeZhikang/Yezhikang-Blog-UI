<template>
    <div class="academy-footer">
        <div class="bg"></div>
        <div class="bg2"></div>
        <div style="z-index: 5;position:relative;">
            <h2 style="font-size: 24px;font-weight: 400;color: white">常用链接</h2>
        </div>
        <div class="footer-link-container">
            <div class="footer-unit" v-for="i in 6" :key="i">
                <div class="footer-unit-link" v-for="t in 3" :key="t">教务处</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AcademyFooter",
    data() {
        return {
            linksArr: [
                {
                    title: '教务处',
                    url: ''
                },
                {
                    title: '教务处',
                    url: ''
                },
                {
                    title: '教务处',
                    url: ''
                },
                {
                    title: '教务处',
                    url: ''
                },
                {
                    title: '教务处',
                    url: ''
                }, {
                    title: '教务处',
                    url: ''
                }, {
                    title: '教务处',
                    url: ''
                }, {
                    title: '教务处',
                    url: ''
                }, {
                    title: '教务处',
                    url: ''
                }, {
                    title: '教务处',
                    url: ''
                }, {
                    title: '教务处',
                    url: ''
                }, {
                    title: '教务处',
                    url: ''
                }, {
                    title: '教务处',
                    url: ''
                }, {
                    title: '教务处',
                    url: ''
                },
            ]
        }
    }
}
</script>

<style
    lang="scss"
    scoped
>
    .academy-footer {
        padding: 24px 8vw;
        height: 260px;
        position: relative;
        /*background-color: #222;*/
        background-color: #fb7d1b;


        .bg2 {
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            top: 0;
            clip-path: polygon(0 0%, 0 100%, 25% 0);
            background-image: url("../../static/images/academy/academy-nav-background.png");

            opacity: 0.8;
            z-index: 0;

        }

        .bg {
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            top: 0;
            background-image: url("http://abs.hznu.edu.cn/upload/resources/image/2020/04/04/7564917.jpg");
            background-size: cover;
            background-position: center;
            opacity: 0.2;
            clip-path: polygon(0 100%, 100% 100%, 100% 0, 25% 0);
            filter: blur(2px);
        }

        .footer-link-container {
            margin-left: 16%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: relative;
            z-index: 5;

            .footer-unit {
                flex-grow: 1;
                text-align: center;
                border-right: 1px white solid;
                .footer-unit-link{
                    font-size: 16px;
                    color: white;
                    padding-top: 8px;
                    padding-bottom: 8px;
                }
            }

            .footer-unit:last-child{
                border: none
            }
        }
    }
</style>
