<template>
    <div class="question-card">
        <p class="t-center">来源：<span v-text='question.examName'></span></p>
        <div class="row clearfix">
            <div class="col col-4 t-center">易考指数：<span class="text-red" v-text='1'></span></div>
            <div class="col col-4 t-center">易错指数：<span class="text-red" v-text='1'></span></div>
            <div class="col col-4 t-center">难度系数：<span class="text-red" v-text='question.difficultLevel'></span></div>
        </div>
        <error-question-detail class='q-detail' :question='question'></error-question-detail>
    </div>
</template>
<script>
    import ErrorQuestionDetail from './ErrorQuestionDetail.vue';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            ErrorQuestionDetail
        },
        props: ['question']
    }
</script>
<style lang='scss' scoped>
    p {
        text-align: center;
    }
    .q-detail {
        padding: 10px;
    }
</style>