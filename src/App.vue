<template>
  <div id="app">
    <the-nav v-if="isBlog"/>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
        isBlog: true,
        isDarkTheme: false
      }
    },
    watch:{
      $route:{
        handler: function (val) {
          if(val.path.includes('mis')){
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
          }
        },
        immediate:true
      }
    }
  }
</script>
<style>

</style>
