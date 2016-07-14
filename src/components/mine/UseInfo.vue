<template>
    <div class="use-info">
        <div class="use-days-box">
            <div class="days">
                <p class='days-num text-green' v-text='user.UseDays || 0'></p>
                <p>已经使用</p>
            </div>
        </div>
        <p>您已经使用51教育服务<span class="text-orange" v-text='user.UseDays'></span>天，总成绩提升<span class="text-orange" v-text='user.AllBeatRate'></span>分，
            击败了<span class="text-orange" v-text='user.AllUpSc'></span>%的同学，再接再励！</p>
    </div>
</template>
<script>
    export default{
        computed: {
            user: function(){
                return this.$store.state.userAchievement.achievement
            }
        }
    }
</script>
<style lang='scss' scoped>
    @import '../../assets/scss/base';
    .use-info {
        margin-top: 10px;
        border: 1px solid $bgGrey;
        padding: 20px;
        background: $white;
        .days {
            margin: auto;
            padding-top: 15px;
            width: 6.6667rem;
            height: 6.6667rem;
            border-radius: 100%;
            border: 5px solid $grey;
            p{
                padding-top: 0;
                &.text-green {
                    font-size: 40/$baseFontSize +rem;
                }
            }
        }
        p{
            padding-top: 10px;
            text-align: center;
        }
    }
</style>