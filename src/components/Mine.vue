<template>
    <div class="mine">
        <user-card>
            <div class="wy-btn-group" slot='btns'>
                <div class="wy-btn wy-btn-white">我的错题本</div>
                <div class="wy-btn wy-btn-white">我的积分</div>
                <div class="wy-btn wy-btn-white">缴费充值</div>
            </div>
        </user-card>
        <use-info></use-info>
    </div>
</template>
<style lang="scss" scoped>
    .wy-btn-group {
        margin-top: 20px;
        justify-content: space-around;
    }
</style>
<script>
    import UserCard from './home/UserCard.vue';
    import UseInfo from './mine/UseInfo.vue';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            UserCard,
            UseInfo
        }
    }
</script>