<template>
    <div class="theme-radio" @click="changeTheme">
        <div ref="circle" class="theme-radio__circle"></div>
        <div class="icon-group">
            <div><i class="el-icon-moon"></i></div>
            <div><i class="el-icon-sunny"></i></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ThemeRadio",
    data(){
        return {
            theme: 'light'
        }
    },
    methods:{
        changeTheme(){
            if(this.theme === 'light'){
                this.theme = 'dark'
                document.body.classList.add('dark')
            }else{
                this.theme = 'light'
                document.body.classList.remove('dark')
            }
            this.$refs.circle.style.left = this.theme === 'light' ? '0' : '26px'
        }
    }
}
</script>

<style lang="scss" scoped>
    .theme-radio{
        width: 48px;
        height: 22px;
        border-radius: 22px;
        position: relative;
        box-shadow: 0 0 1px #3a8ee6;
        background-color: #0f1114;
        transition: 0.2s;
        cursor: pointer;

        &:hover{
            .theme-radio__circle{
                box-shadow: 0 0 2px 3px #ffa7c4;
            }
        }
        &:focus{
            .theme-radio__circle{
                box-shadow: 0 0 2px 3px #ffa7c4;
            }
        }

        .icon-group{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;;
            width: 100%;
            padding: 7px;
            box-sizing: border-box;
            color:white;
            font-size: 16px;
        }
    }


    .theme-radio__circle{
        height: 22px;
        width: 22px;
        position: absolute;
        left: 0;
        top: 0;
        box-shadow: 0 0 2px #ff9089;
        border-radius: 50%;
        background-color: white;
        transition: 0.2s ease;
        z-index: 99;
    }


</style>
