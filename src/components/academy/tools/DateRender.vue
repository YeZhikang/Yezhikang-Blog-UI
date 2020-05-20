<template>
    <div class="date-render">
        <div class="time-render">
            <p>{{ time.split('/')[1] }}/{{ time.split('/')[2] }}</p>
            <p style="font-size: 12px;text-align: center">2018</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "DateRender",
    props:{
        time: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    p{
        margin: 0;
    }
    .date-bg{

    }

    .date-render{

        width: 60px;
        height: 60px;
        background-color: rgb(244,244,244);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        &:hover{
            color: #e97419;
        }
    }
</style>
