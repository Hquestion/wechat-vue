<template>
    <div class="schedule">
        <header class="row">
            <div class="pull-left col col-4 t-center">
                <span v-text='schedule.day + "安排"'></span>
            </div>
            <div class="pull-left col col-5 t-center">
                <span v-text='schedule.date'></span>
            </div>
            <div class="pull-left col col-3 t-center">
                <span v-text='schedule.week'></span>
            </div>
        </header>
        <div class="am row">
            <div class="tag col col-2-4 t-center">上午</div>
            <div class="col col-2-4 t-center" v-for='course in schedule.amCourseList' v-text='course'></div>
        </div>
        <div class="pm row">
            <div class="tag col col-2-4 t-center">下午</div>
            <div class="col col-2-4 t-center" v-for='course in schedule.pmCourseList' v-text='course'></div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                schedule: {
                    day: '今天',
                    date: '2016年6月28日',
                    week: '星期一',
                    amCourseList: ['语文','数学','物理','英语'],
                    pmCourseList: ['语文','数学','物理','英语']
                }
            }
        },
        components:{
            
        }
    }
</script>
<style lang='scss' scoped>
    @import '../../assets/scss/base';
    .schedule {
        background: $bgGrey;
        header{
            width: 90%;
            margin: auto;
            font-size: 16/ 18 +rem;
            padding: 20px 0 10px;
        }
        .am {
            .tag{
                background: $green;
            }
            .col {
                border-left: 1px solid $grey;
                border-top: 1px solid $grey;
                &:last-child {
                    border-right: 1px solid $grey;
                }
            }
        }
        .pm {
            .tag{
                background: $orange;
            }
            .col {
                border-left: 1px solid $grey;
                border-top: 1px solid $grey;
                border-bottom: 1px solid $grey;
                &:last-child {
                    border-right: 1px solid $grey;
                }
            }
        }
    }
</style>