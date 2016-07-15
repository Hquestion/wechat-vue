<template>
    <div class="error-note">
        <subject-carousel :subject-list='subjectList' :current-subject.sync='currentSbj' key='subjectName'>
        </subject-carousel>
    </div>
</template>
<script>
    import SubjectCarousel from './SubjectCarousel.vue';
    export default{
        data(){
            return{
                subjectList: [{
                    subjectName: '语文',
                    num: '187'
                },{
                    subjectName: '数学',
                    num: '187'
                },{
                    subjectName: '英语',
                    num: '187'
                },{
                    subjectName: '物理',
                    num: '187'
                },{
                    subjectName: '化学',
                    num: '187'
                },{
                    subjectName: '历史',
                    num: '187'
                },{
                    subjectName: '政治',
                    num: '187'
                },{
                    subjectName: '生物',
                    num: '187'
                }],
            }
        },
        components:{
            SubjectCarousel
        },
        ready: function() {
            this.$set('currentSbj', this.subjectList[0]);
        }
    }
</script>
<style lang='scss' scoped>
    
</style>