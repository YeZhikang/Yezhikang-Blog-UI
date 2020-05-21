<template>
    <div></div>
</template>

<script>
export default {
    name: "bridge",
    created() {
        const {params} = this.$route

        this.$router.push({
            name: 'ali-check',
            params
        })

    }
}
</script>

<style scoped>

</style>
