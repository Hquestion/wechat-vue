<template>
    <div class="mine">
        <user-card>
            <div class="wy-btn-group" slot='btns'>
                <div class="wy-btn wy-btn-white text-red" @click='goErrorNote()'>我的错题本</div>
                <div class="wy-btn wy-btn-white text-green">我的积分</div>
                <div class="wy-btn wy-btn-white text-green">缴费充值</div>
            </div>
        </user-card>
        <use-info></use-info>
        <achievement></achievement>
        <achievement-detail></achievement-detail>
    </div>
</template>
<script>
    import UserCard from './home/UserCard.vue';
    import UseInfo from './mine/UseInfo.vue';
    import Achievement from './mine/Achievement.vue';
    import AchievementDetail from './mine/AchievementDetail.vue';
    import { getUserAchievement } from '../vuex/actions';
    export default{
        data(){
            return{

            }
        },
        components:{
            UserCard,
            UseInfo,
            Achievement,
            AchievementDetail
        },
        vuex: {
            actions: {
                getUserAchievement
            }
        },
        ready () {
            this.getUserAchievement();
        },
        methods: {
            goErrorNote: function(){
                this.$router.go({name: 'errorNote'});
            }
        }
    }
</script>
<style lang="scss" scoped>
    .wy-btn-group {
        margin-top: 20px;
        justify-content: space-around;
    }
</style>