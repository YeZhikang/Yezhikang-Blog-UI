<template>
    <div>
        <div class="fb">
            <div class="model-container">

            </div>
            <side-bar style="width:  26%;"/>
        </div>
        <academy-footer/>
    </div>

</template>

<script>
import AcademyFooter from "./AcademyFooter";
import SideBar from "./tools/SideBar";
export default {
    name: "AcademyList",
    components: { SideBar, AcademyFooter }
}
</script>

<style lang="scss" scoped>
    .model-container{
        width: 53%;
        margin-left: 11%;
        padding: 100px 0;
        .article{
            font-size: 16px;
            line-height: 1.8;
            font-weight: 300;
            letter-spacing: 1px;
        }
        .article-red{
            font-size: 14px;
            color: #b31b1b
        }

        .article-grey{
            font-size: 14px;
            color: #666565
        }

        .tx-foot{
            padding-top: 46px;
            font-size: 16px;
            font-weight: 200;
            letter-spacing: 1px;
            border-right: 1px solid #d7d5d5;
            padding-right: 6px;
        }
    }

    .txr{
        text-align: right;
    }

    .model-title{
        font-weight: 300;
        letter-spacing: 2px;
        padding-left: 18px;
        border-left: 6px solid orange;
        margin-bottom: 62px;
    }

</style>
