<template>
    <div id="app"><!--必须要写的跟标签-->
       
        <router-view></router-view>
        <FooterGuide  v-show="$route.meta.showFooter"/> <!--获取showFooter-->
    </div> 
</template>
<script>
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'
    export default {
    components: {
        FooterGuide,
    },
    }
</script>
<style lang="stylus" rel='stylesheet/stylus'>
    .app
        width 100%
        height 100%
        background #f5f5f5
</style>