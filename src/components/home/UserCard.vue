<template>
    <article class="user-card">
        <div class="card-box clearfix">
            <div class="avtar pull-left">
                <img src="../../assets/img/avtar.png">
            </div>
            <div class="info pull-left">
                <div class="name-box">
                    <span class="user-name" v-text='user.userName'></span>
                    <img src="../../assets/img/vip.png" ng-show='user.isVip'>
                </div>
                <p>
                    <span v-text='user.schoolName'></span><span class="point"></span><span v-text='user.className'></span>
                </p>
                <p>
                    积分：<span v-text='user.points'></span><span class="vip-level" v-text='vipLevelText'></span>
                </p>
            </div>
        </div>
        <p class="sign-box" @click='setUserCard(user)'>
            <span v-show='user.isSign'>已签到</span>
            <span v-show='!user.isSign'>未签到</span>
            （已连续签到<span v-text='user.signDays'></span>天）
        </p>
    </article>
</template>
<script>
    import { getUserCardInfo } from '../../vuex/getters';
    import { setUserCard } from '../../vuex/actions';
    export default{
        data(){
            return{
                user: {}
            }
        },
        computed: {
            vipLevelText: function(){
                return 'LV' + this.user.vipLevel;
            },
            user: function(){
                return this.$store.state.userCard.user
            }
        },
        components:{
            
        },
        vuex: {
//            getters: {
//                user: getUserCardInfo
//            },
            actions: {
                setUserCard
            }
        }
    }
</script>
<style lang='scss' scoped>
    @import '../../assets/scss/base';
    .user-card {
        background: $green;
        width: 100%;
        height: 250px;
        color: #fff;
        .card-box {
            width: 90%;
            margin: auto;
            padding-top: 50px;
            .avtar {
                width: 120px;
                padding: 0 10px;
                img{
                    width: 100px;
                }
            }
            .info {
                width: calc(100% - 120px);
                padding: 0 10px;
                vertical-align: bottom;
                .name-box {
                    font-size: 28px;
                    vertical-align: text-bottom;
                    line-height: 1;
                    img{
                        width: 25px;
                        vertical-align: text-bottom;
                    }
                }
                p{
                    padding-top: 5px;
                    .point {
                        display: inline-block;
                        width: 5px;
                        height: 5px;
                        background: $white;
                        border-radius: 5px;
                        margin: 5px;
                    }
                    span.vip-level {
                        margin-left: 10px;
                        font-size: 18px;
                        color: $golden;
                    }
                }
            }
        }
        .sign-box{
            width: auto;
            display: inline-block;
            text-align: center;
            padding: 5px 10px;
            color: #666;
            border: 1px solid #696969;
            border-radius: 1em;
            background: #dedede;
            margin-top: 20px;
            position: relative;
            left: 50%;
            transform: translate3d(-50%,0,0);
        }
    }
</style>