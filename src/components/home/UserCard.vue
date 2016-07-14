<template>
    <article class="user-card">
        <slot name='user-center'></slot>
        <div class="card-box clearfix">
            <div class="avtar pull-left">
                <img src="../../assets/img/avtar.png" :src='user.logo'>
            </div>
            <div class="info pull-left">
                <div class="name-box">
                    <span class="user-name" v-text='user.username'></span>
                    <img src="../../assets/img/vip.png" v-show='user.isVip'>
                </div>
                <p>
                    <span v-text='user.schoolName'></span><span class="point"></span><span v-text='user.className'></span>
                </p>
                <p>
                    积分：<span v-text='user.point || 0'></span><span class="vip-level" v-text='vipLevelText'></span>
                </p>
            </div>
        </div>
        <slot name='btns'>
            <p class="sign-box" @click='sign(user)'>
                <span v-show='!!user.isSign'>已签到</span>
                <span v-show='!user.isSign'>未签到</span>
                （已连续签到<span v-text='user.signDays || 0'></span>天）
            </p>
        </slot>
        <wy-dialog :modal.sync='modal' :show.sync='showDailog'>
            <img slot='header' src="../../assets/img/dialog-logo.png">
            <div slot='body'>
                <p>恭喜您，连续签到<span v-text='user.SignDays'></span>天，积分奖励<span v-text='user.SignDays'></span>分</p>
                <p>累计签到：<span>338</span>天</p>
                <p>签到排名：今日本班第<span>14</span>名签到</p>
            </div>
            <span slot='tip'>小提示：连续签到每多一天，积分额外多加1分</span>
        </wy-dialog>
    </article>
</template>
<script>
    import { getUserCardInfo } from '../../vuex/getters';
    import { setUserCard, userSign } from '../../vuex/actions';
    import wyDialog from '../common/wyDialog.vue';
    export default{
        data(){
            return{
                user: {},
                modal: {},
                showDailog: false
            }
        },
        computed: {
            vipLevelText: function(){
                return this.user.vipLevel ? 'LV' + this.user.vipLevel : '';
            },
            user: function(){
                return this.$store.state.userCard.user
            }
        },
        components:{
            wyDialog
        },
        vuex: {
            actions: {
                setUserCard,
                userSign
            }
        },
        methods: {
            sign: function(user){
                var that = this;
                if(!user.isSign) {
                    this.userSign(user).then(function(){
                        that.showDailog = true;
                    });
                }
            }
        }
    }
</script>
<style lang='scss' scoped>
    @import '../../assets/scss/base';
    .user-card {
        background-image: url(../../assets/img/profile-bg.png);
        background-size: 100% 100%;
        width: 100%;
        height: 13.8889rem;
        color: $textDrak;
        position: relative;
        .card-box {
            width: 90%;
            margin: auto;
            padding-top: 2.7778rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .avtar {
                width: 6.6667rem;
                padding: 0 0.555rem;
                img{
                    width: 5.5556rem;
                }
            }
            .info {
                max-width: calc(100% - 6.6667rem);
                padding: 0 10px;
                vertical-align: bottom;
                .name-box {
                    font-size: 28 / $baseFontSize + rem;
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
                        background: $textDrak;
                        border-radius: 5px;
                        margin: 5px;
                    }
                    span.vip-level {
                        margin-left: 10px;
                        font-size: 1rem;
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
            background: $white;
            margin-top: 20px;
            position: relative;
            left: 50%;
            transform: translate3d(-50%,0,0);
        }
    }
</style>