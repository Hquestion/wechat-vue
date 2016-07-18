<template>
    <div class="same-question-test">
        <div class="question-area">
            <div class="quetion-title">
                <span class="no" v-text='question.no + "、"'></span>
                <div class="title">
                    <div class="father-title" v-html='question.question'></div>
                    <div class="sub-title" v-html='question.question'></div>
                </div>
            </div>
            <div class="options" v-show='question.optionA !== ""'>
                <div class="option">
                    <div class="option-tag">A、</div>
                    <div class="option-content" v-html=''></div>
                </div>
                <div class="option">
                    <div class="option-tag">B、</div>
                    <div class="option-content" v-html=''></div>
                </div>
                <div class="option">
                    <div class="option-tag">C、</div>
                    <div class="option-content" v-html=''></div>
                </div>
                <div class="option">
                    <div class="option-tag">D、</div>
                    <div class="option-content" v-html=''></div>
                </div>
            </div>
        </div>
        <div class="wy-btn-group">
            <div class="wy-btn wy-btn-default" @click='goBack()'>返回</div>
            <div class="wy-btn wy-btn-orange" @click='showAnalysis()'>查看解答</div>
            <div class="wy-btn wy-btn-green" @click='changeQuestion()'>更换题目</div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                question: {}
            }
        },
        components:{
            
        },
        methods: {
            goBack: function(){
                window.history.go(-1);
            }
        },
        ready () {
            var questionId = this.$route.params.questionId;
            console.log(questionId);
        }
    }
</script>
<style lang='scss' scoped>
    @import '../../assets/scss/base';
    .same-question-test {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: auto;
        padding: 20px 10px 0 10px;
    }
    .question-area {
        border-bottom: 1px solid $grey;
        padding-bottom: 10px;
        .quetion-title {
            .no {
                vertical-align: top;
                width: 1.67rem;
            }
            .title {
                display: inline-block;
                width: calc(100% - 1.67rem);
                *{
                    display: inline;
                }
                .father-title:after, .sub-title:after {
                    content: '\20';
                    display: block;
                }
            }
        }
    }
    .wy-btn-group {
        justify-content: space-around;
        padding: 20px 0 10px;
        position: absolute;
        bottom: 0;
        width: calc(100% - 20px);
        .wy-btn {
            width: 30%;
        }
    }
</style>