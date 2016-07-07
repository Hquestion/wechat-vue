<template>
    <div class="notice" :class='notice.type'>
        <div class="thumb"></div>
        <div class="context" v-html='notice.context'></div>
        <div class="time" v-text='notice.time'></div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                notice: {
                    type: 'analysis',
                    context: '第二学期期末考试分析已经形成，点击查看',
                    time: '06-18'
                }
            }
        },
        components:{
            
        },
        props: [
                'notice'
        ]
    }
</script>
<style lang='scss' scoped>
    @import '../../assets/scss/base';
    .notice {
        width: 100%;
        padding: 20px 10px;
        border-bottom: 1px solid $grey;
        background: $white;
        position: relative;
        & > div{
            display: inline-flex;
        }
        .thumb {
            width: 40px;
            height: 31px;
            vertical-align: middle;
            background-repeat: no-repeat;
            background-position: top right;;
        }
        &.gk{
            text-align: center;
            & > .context{
                position: relative;
                width: auto;
            }
        }
        &.gk .thumb{
            width: 27px;
            height: 29px;
            background-image: url(../../assets/img/clock.png);
        }
        &.analysis .thumb{
            background-image: url(../../assets/img/analysis.png);
        }
        &.bc .thumb {
            background-image: url(../../assets/img/paper.png);
        }
        &.pk .thumb {
            background-image: url(../../assets/img/pk.png);
        }
        &.xs .thumb{
            background-image: url(../../assets/img/money.png);
        }
        &.exercise .thumb{
            background-image: url(../../assets/img/exercise.png);
        }
        &.fav .thumb {
            background-image: url(../../assets/img/fav.png);
        }
        .context {
            margin-left: 10px;
            width: calc(100% - 120px);
            color: $black;
            position: relative;
            vertical-align: middle;
        }
        .time{
            position: absolute;
            top: 10px;
            right: 10px;
            color: $grey;
        }
    }
</style>