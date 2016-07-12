<template>
    <div class="achievement-detail">
        <header>
            <img src="../../assets/img/penceil-logo.png">
            <span class="text-green">我的分析情况</span>
        </header>
        <article>
            <ul>
                <li v-for='sd in studyDetail' class="row">
                    <div class="subject-logo col-3 pull-left">
                        <div><img :src="sd.logo"></div>
                        <p v-text='sd.SubjectName'></p>
                    </div>
                    <div class="subject-desc col-9 pull-left">
                        <p v-text='sd.Desc'></p>
                    </div>
                </li>
            </ul>
        </article>
    </div>
</template>
<script>
    import config from '../../config';
    export default{
        data(){
            return{

            }
        },
        components:{
            
        },
        computed: {
            studyDetail: function(){
                var analysis = this.$store.state.userAchievement.achievement.msg;
                analysis.forEach(function(item){
                    item.logo = config.subjectIconMap[item.SubjectName];
                });
                return analysis;
            }
        }
    }
</script>
<style lang='scss' scoped>
    @import '../../assets/scss/base';
    .achievement-detail {
        margin-top: 10px;
        header {
            text-align: center;
            font-size: 30 / 18 + rem;
            font-weight: bold;
            padding: 10px;
            span {
                position: relative;
                top: -15px;
            }
        }
        article {
            li.row {
                padding: 10px 20px;
                background: $white;
                border: 1px solid $grey;
                margin-top: 10px;
                .subject-logo {
                    text-align: center;
                }
            }
        }
    }
</style>