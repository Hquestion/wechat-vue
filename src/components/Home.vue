<template>
    <div class="home">
        <user-card></user-card>
        <notice-card v-for='notice in noticeList' :notice='notice'></notice-card>
    </div>
</template>

<script>
    import { initTitle } from '../vuex/actions';
    import { getAppTitle } from '../vuex/getters';
    import Vue from 'vue';
    import userCard from './home/UserCard';
    import NoticeCard from './home/NoticeCard';
    export default {
        data () {
            return {
                noticeList: [{
                    type: 'analysis',
                    context: '第二学期期末考试分析已经形成，点击查看',
                    time: '06-18'
                }, {
                    type: 'gk',
                    context: '距离高考还有100天',
                    time: ''
                },{
                    type: 'bc',
                    context: '今日补偿分析已经发布，班级已完成6人',
                    time: '06-20'
                },{
                    type: 'pk',
                    context: '张三丰向你发起挑战',
                    time: '06-20'
                },{
                    type: 'xs',
                    context: '您的悬赏得到回应，请查看',
                    time: '06-20'
                },{
                    type: 'fav',
                    context: '张老师点赞了您的考试',
                    time: '06-20'
                }]
            }
        },
        components: {
            userCard,
            NoticeCard
        },
        ready () {

        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        color: #42b983;
    }

    .hello {
        background: #f44336;
    }
</style>
