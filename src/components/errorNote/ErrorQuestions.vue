<template>
    <div class="error-qsts">
        <question-card v-for='question in questions' :question='question'></question-card>
    </div>
</template>
<script>
    import QuestionCard from './QuestionCard.vue';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            QuestionCard
        },
        props: ['questions']
    }
</script>
<style lang='scss' scoped>
    
</style>