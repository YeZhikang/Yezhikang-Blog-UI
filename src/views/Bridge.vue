<template>
    <div></div>
</template>

<script>
export default {
    name: "bridge",
    created() {
        const {params,query} = this.$route
        if(!query.articleId){
            this.$router.push({
                name: 'ali-check',
                params
            })
        }
    }
}
</script>

<style scoped>

</style>
