<template>
    <el-carousel height="600px">
        <el-carousel-item
            v-for="(item,index) in bgArr"
            :key="index"
        >
            <div
                class="bg"
                :style="{ 'background-image': `url(${item.imgURL})` }"
            >
                <div class="title--left" v-if="index % 2 === 0">
                    <h1>{{ item.title }}</h1>
                    <p>{{ item.main }}</p>
                </div>
                <div class="title--right" v-else>
                    <h1>{{ item.title }}</h1>
                    <p>{{ item.main }}</p>
                </div>

            </div>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name: "AcademyImages",
    data() {
        return {
            bgArr: [
                {
                    imgURL: 'http://abs.hznu.edu.cn/upload/resources/image/2020/04/04/7564917.jpg',
                    title: 'The Growth Of Taobao',
                    main: 'Over It is hidden , how about it is a apple banana orange Over It is hidden , how about it is a apple banana orange Over It is hidden , how about it is a apple banana orange  Over It is hidden , how about it is a apple banana orange'

                },
                {
                    imgURL: 'http://abs.hznu.edu.cn/upload/resources/image/2020/04/05/7564938.jpg',
                    title: 'The Growth Of Taobao',
                    main: 'Over It is hidden , how about it is a apple banana orange Over It is hidden , how about it is a apple banana orange Over It is hidden , how about it is a apple banana orange  Over It is hidden , how about it is a apple banana orange'

                },
            ]
        }
    }
}
</script>

<style scoped>
    .bg {
        position: relative;
        width: 100%;
        height: 100%;
        background-size: cover;
        /*background-image: url('http://abs.hznu.edu.cn/upload/resources/image/2020/04/04/7564917.jpg')*/
    }

    .title--left {
        position: absolute;
        bottom: 60px;
        left: 60px;
        padding: 24px 40px;
        background-color: rgba(22, 22, 22, 0.9);
        color: white;
        max-width: 400px;
    }

    .title--right {
        position: absolute;
        top: 60px;
        right: 60px;
        padding: 24px 40px;
        background-color: rgba(22, 22, 22, 0.9);
        color: white;
        max-width: 400px;
    }

    .title--left p,.title--right p{
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
    }
</style>
