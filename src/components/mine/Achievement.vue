<template>
    <div class="achievement">
        <header>
            <img src="../../assets/img/penceil-logo.png">
            <span class="text-green">成绩情况</span>
        </header>
        <article>
            <ul>
                <li v-for='sd in studyDetail' class="row">
                    <div v-text='sd.SubjectName' class="tag col-2 pull-left"></div>
                    <div class="col-3 pull-left">
                        <span>高于</span>全班<span v-text='sd.SubjectBeatRate'></span>%
                    </div>
                    <div class="col-3 pull-left">
                        <span>高于</span>全班<span v-text='sd.SubjectGradeBeatRate'></span>%
                    </div>
                    <div class="col-4 pull-left">
                        名次稍微
                        <span class="up" v-if='+sd.UpDown > 0'>上升<img src="../../assets/img/up.png"></span>
                        <span class="down" v-if='+sd.UpDown <= 0'>下降<img src="../../assets/img/down.png"></span>
                    </div>
                </li>
            </ul>
        </article>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            
        },
        computed: {
            studyDetail: function(){
                return this.$store.state.userAchievement.achievement.msg;
            }
        }
    }
</script>
<style lang='scss' scoped>
    @import '../../assets/scss/base';
    .achievement {
        margin-top: 10px;
        header {
            text-align: center;
            font-size: 30 / 18 + rem;
            font-weight: bold;
            padding: 10px;
            span{
                position: relative;
                top: -15px;
            }
        }
        article{
            padding: 10px;
            background: $white;
            text-align: center;
            font-size: 0.77rem;
            .row{
                padding: 3px 0;
                .tag {
                    border: 1px solid $grey;
                    background: $green;
                    color: $white;
                }
                img {
                    width: 0.7em;
                    margin-left: 5px;
                }
            }
        }
    }
</style>