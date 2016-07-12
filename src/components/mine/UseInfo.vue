<template>
    <div class="use-info">
        <div class="use-days-box">
            <div class="days">
                <p class='days-num text-green' v-text='user.useDay'></p>
                <p>已使用</p>
            </div>
        </div>
        <p>您已经使用51教育服务<span class="text-orange" v-text='user.useDay'></span>天，总成绩提升<span class="text-orange">87</span>分，
            击败了<span class="text-orange">76%</span>的同学，再接再励！</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        components:{
            
        },
        computed: {
            user: function(){
                return this.$store.state.userCard.user
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
        .days {
            margin: auto;
            padding-top: 15px;
            width: 120px;
            height: 120px;
            border-radius: 100%;
            border: 5px solid $grey;
            p.text-green {
                font-size: 40px;
            }
        }
        p{
            text-align: center;
        }
    }

</style>