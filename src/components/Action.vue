<template>
    <div class="action">
        动态
    </div>
</template>
<style>
    
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            
        },
        init: function(){
            this.$emit('INIT_APP_TITLE', {
                title: '我的动态'
            });
        },
        ready: function(){
            this.$dispatch('INIT_APP_TITLE', {
                title: '我的动态'
            });
        }
    }
</script>