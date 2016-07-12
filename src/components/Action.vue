<template>
    <div class="action">
        <wy-dialog :modal.sync='modal' :show.sync='showDailog'></wy-dialog>
        <div class="wy-btn wy-btn-green" @click="showModal()">显示dialog</div>
    </div>
</template>
<style>
    
</style>
<script>
    import wyDialog from './common/wyDialog.vue'
    export default{
        data(){
            return{
                msg:'hello vue',
                showDailog: false
            }
        },
        components:{
            wyDialog
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
        },
        methods: {
            showModal(){
                this.showDailog = true;
                this.$set('modal', {
                    context: '您的挑战书已经发送成功，对应将有24小时做出回应！'
                })
            }
        }
    }
</script>