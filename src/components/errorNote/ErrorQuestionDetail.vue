<template>
    <div class="error-question-detail">
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
        <div class="answer-area">
            <div class="my-answer">
                我的解答：
                <span v-html='question.answer'></span>
            </div>
            <div>
                <p>解析：</p>
                <div v-html='question.analysis || "无"'></div>
            </div>
        </div>
        <div class="wy-btn-group">
            <div class="wy-btn wy-btn-orange" @click='removeQst(question)'>移除题目</div>
            <div class="wy-btn wy-btn-orange" @click='offerResolve(question)'>悬赏解答</div>
            <div class="wy-btn wy-btn-green" @click='checkSameQst(question)'>同题检测</div>
        </div>
    </div>
</template>
<script>
    import {removeQstFromErrorNote} from '../../vuex/actions';
    import { MessageBox } from 'mint-ui';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            
        },
        props: ['question'],
        vuex: {
            actions: {
                removeQstFromErrorNote
            }
        },
        methods: {
            removeQst: function(qst){
                MessageBox.confirm('确定从错题本中移除本题？', '提示').then(() => {
                    this.removeQstFromErrorNote(qst.questionId);
                }, ()=>{

                });
            },
            checkSameQst: function(qst){
                this.$router.go({
                    name: 'sameQuestionTest',
                    params: {
                        questionId: qst.questionId
                    }
                })
            }
        }
    }
</script>
<style lang='scss' scoped>
    @import '../../assets/scss/base';
    .error-question-detail {
        border: 1px solid $grey;
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
        .answer-area {
            margin-top: 10px;
            *{
                display: inline;
            }
            span * {
                display: inline;
            }
            .my-answer:after {
                content: '\20';
                display: block;
            }
        }
        .wy-btn-group {
            justify-content: space-around;
            padding: 20px 0 10px;
            .wy-btn {
                width: 30%;
            }
        }
    }
</style>