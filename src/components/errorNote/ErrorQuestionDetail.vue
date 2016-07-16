<template>
    <div class="error-question-detail">
        <div class="quetion-title">
            <span class="no" v-text='question.no'></span>、
            <div class="title">
                <div class="father-title" v-html=''></div>
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
        <div class="answer-area">
            <div>
                我的解答：
                <span v-html='question.answer'></span>
            </div>
            <div>
                <p>解析：</p>
                <div v-html='question.analysis || "无"'></div>
            </div>
        </div>
        <div>
            <div class="wy-btn wy-btn-green">移除题目</div>
            <div class="wy-btn wy-btn-green">悬赏解答</div>
            <div class="wy-btn wy-btn-green">同题检测</div>
        </div>
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
        props: ['question']
    }
</script>
<style lang='scss' scoped>
    
</style>