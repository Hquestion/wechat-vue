<template>
    <router-view class="main-entry animated" keep-alive transition="bounce" @click='docClicked()'></router-view>
</template>
<style>

</style>
<script>
    import store from './vuex/store';
    export default{
        store,
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            
        },
        methods: {
            docClicked: function(){

            }
        }
    }
</script>