<template>
  <div id="app">
    <the-nav v-if="isBlog"/>
    <academy-nav v-if="isAcademy"/>
    <router-view/>
  </div>
</template>

<script>
  import AcademyNav from "./components/academy/AcademyNav";
  export default {
    name: 'App',
    components: { AcademyNav },
    data(){
      return{
        isBlog: true,
        isDarkTheme: false,
        isAcademy: false
      }
    },
    watch:{
      $route:{
        handler: function (val) {
          if(val.path.includes('mis') || val.path.includes('playground') || val.path.includes('to-honey')){
            if(val.path.includes('playground') ){
              this.isAcademy = true
            }
            this.isBlog = false;
            if(document.body.classList.contains('dark')){
              document.body.classList.remove('dark')
              this.isDarkTheme = true
            }
          }else{
            if(this.isDarkTheme){
              document.body.classList.add('dark')
            }
            this.isBlog = true;
            this.isAcademy = false
          }
        },
        immediate:true
      }
    }
  }
</script>
<style>
  #app{
    height: 100%;
  }
</style>
