<template>
    <div class="home">
        <user-card></user-card>
        <notice-card v-for='notice in noticeList' :notice='notice'></notice-card>
        <schedule class='schedule'></schedule>
        <schedule class='schedule'></schedule>
    </div>
</template>

<script>
    import userCard from './home/UserCard';
    import NoticeCard from './home/NoticeCard';
    import Schedule from './home/Schedule';
    export default {
        data () {
            return {
                noticeList: [{
                    type: 'gk',
                    context: '距离高考还有100天',
                    time: ''
                }, {
                    type: 'analysis',
                    context: '第二学期期末考试分析已经形成，点击查看',
                    time: '06-18'
                }, {
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
                },{
                    type: 'fav',
                    context: '张老师点赞了您的考试',
                    time: '06-20'
                }]
            }
        },
        components: {
            userCard,
            NoticeCard,
            Schedule
        },
        ready () {

        }
    }

</script>

<style lang="scss" scoped>
    .schedule{
        width: 90%;
        margin: auto;
    }
</style>
