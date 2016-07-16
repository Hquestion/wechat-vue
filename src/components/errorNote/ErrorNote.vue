<template>
    <div class="error-note">
        <subject-carousel :subject-list='subjectList' :current-subject.sync='currentSbj' key='SubjectName'>
        </subject-carousel>
        <error-questions :questions='questionList'></error-questions>
    </div>
</template>
<script>
    import SubjectCarousel from './SubjectCarousel.vue';
    import ErrorQuestions from './ErrorQuestions.vue';
    import { getSubjectList, getErrorQuestions } from '../../vuex/actions';
    export default{
        data(){
            return{
                currentSbj: {}
            }
        },
        computed: {
            subjectList: function(){
                return this.$store.state.errorNote.subjects;
            },
            questionList: function(){
                var questions = this.$store.state.errorNote.questions;
                questions.forEach(function(item, index){
                    item.no = index + 1;
                });
                return questions;
            }
        },
        components:{
            SubjectCarousel,
            ErrorQuestions
        },
        vuex: {
            actions: {
                getSubjectList,
                getErrorQuestions
            }
        },
        ready: function() {
            this.getSubjectList().then(()=>{
                this.currentSbj = Object.assign({}, this.subjectList[0]);
            });
            this.$watch('currentSbj', function(){
                this.getErrorQuestions(this.currentSbj.subjectId);
            });
        },
    }
</script>
<style lang='scss' scoped>
    
</style>