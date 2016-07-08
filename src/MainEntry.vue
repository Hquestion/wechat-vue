<template>
    <router-view class="main-entry animated" keep-alive transition="bounce" @click='docClicked()'></router-view>
</template>
<style>

</style>
<script>
    import store from './vuex/store';
    import { Indicator } from 'mint-ui';
    export default{
        store,
        data(){
            return{
                msg:'hello vue'
            }
        },
        methods: {
            docClicked: function(){
                this.$broadcast('DOC_CLICKED');
            }
        },
        init: function(){
            Indicator.open({
                text: '拼命加载中...',
                spinnerType: 'fading-circle'
            });
        },
        ready: function(){
            setTimeout(function(){
                Indicator.close();
            }, 200);
        }
    }
</script>