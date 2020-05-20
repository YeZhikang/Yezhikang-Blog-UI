<template>
    <div>
        <AcademyImages/>
        <AcademyAdv/>
        <div class="main-card">
            <ActiveCard style="width: 47% ;z-index: 999"/>
            <ActiveCard style="width: 47%"/>
        </div>
        <div class="main-des"></div>
        <div class="main-card second-card">
            <div class="bg-des"></div>
            <ActiveCard :is-inside="false" style="width: 47%;border-bottom: 3px solid #e97419">
                <template v-slot:head>
                    <div class="fa fb card-head">
                        <h1 class="card-head__title">通知公告</h1>
                        <i class="el-icon-more-outline"/>
                    </div>
                </template>
            </ActiveCard>
            <ActiveCard :is-inside="false" style="width: 47%;z-index: 999;border-bottom: 3px solid #e97419">
                <template v-slot:head>
                    <div class="fa fb card-head">
                        <h1 class="card-head__title">信息公开</h1>
                        <i class="el-icon-more-outline"/>
                    </div>
                </template>
            </ActiveCard>
        </div>
        <academy-footer/>
    </div>
</template>

<script>
import AcademyImages from "../components/academy/AcademyImages";
import AcademyAdv from "../components/academy/AcademyAdv";
import ActiveCard from "../components/academy/ActiveCard";
import AcademyFooter from "../components/academy/AcademyFooter";

export default {
    name: "playground",
    components: { AcademyFooter, ActiveCard, AcademyAdv, AcademyImages, }
}
</script>

<style lang="scss" scoped>
    .main-card{
        width: 84%;
        margin: 40px auto 40px;
        display: flex;
        justify-content: space-between;
    }
    .second-card{
        margin-top: -40px;
        padding: 60px 8vw;
        box-sizing: border-box;
        width: 100%;
        position: relative;
        background-image: linear-gradient( rgba(233, 116, 25, 0.12),white);
    }

    .main-des{
        height: 180px;
        background-image:url("../static/images/academy/academy-nav-background.png");
        background-position: center;
        background-size: cover;
        position: relative;
        clip-path: polygon(0 0,0% 80%,100% 100%,100% 20%);
        margin-top: -80px;
    }

    .card-head{
        margin: 0 4px 12px ;
        font-weight: 400;
        font-size: 22px;
        .card-head__title{
            font-size: 26px;
            font-weight: 400;
        }

    }

    .bg-des{
        position: absolute;
        top: -20px;
        left: -4px;
        background-image: url("../static/images/academy/academy-icon.jpeg");
        width: 280px;
        height: 280px;
        background-size: cover;
        background-position: center;
        opacity: 0.2;
        z-index: -1;
    }

</style>
