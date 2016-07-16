<template>
    <div class="subject-carousel clearfix" v-touch:swipeleft='next()' v-touch:swiperight='pre()'>
        <div class='left-arrow pull-left' v-show='!isFirst' @click='pre()'><</div>
        <div class='subjects pull-left' :style='{width: boxStyle+"px"}'>
            <ul class="clearfix" :style='{width: ulWidth+"px", left: listPos+"px"}'>
                <li v-for='sbj in subjectList' :style='{width: itemStyle+"px"}' @click='selectSubject(sbj)'
                    :class='{active: currentSubject[key] === sbj[key]}'>
                    <span v-text='sbj[key]'></span>
                    <span v-text='sbj.num'></span>
                </li>
            </ul>
        </div>
        <div class='right-arrow pull-left' v-show='!isLast' @click='next()'>></div>
    </div>
</template>
<script>
    const NUMBER_PER_PAGE = 5;
    const ARROW_WIDTH = 25;
    export default{
        data(){
            return{
                currentIndex: NUMBER_PER_PAGE - 1,
                currentSubject: {}
            }
        },
        props: {
            subjectList: Array,
            currentSubject: Object,
            key: String
        },
        computed: {
            startIndex: function(){
                return NUMBER_PER_PAGE - 1;
            },
            totalNum: function(){
                return this.subjectList && this.subjectList.length;
            },
            isFirst: function(){
                return this.currentIndex <= this.startIndex;
            },
            isLast: function(){
                return this.currentIndex >= this.totalNum - 1;
            },
            boxStyle: function(){
                var width = window.innerWidth;
                var arrowWidth = 0;
                if(!this.isFirst && !this.isLast) {
                    arrowWidth = ARROW_WIDTH * 2;
                }else if(this.isFirst || this.isLast) {
                    arrowWidth = ARROW_WIDTH;
                }else {
                    arrowWidth = 0;
                }
                return width - arrowWidth;
            },
            itemStyle: function(){
                return this.boxStyle / NUMBER_PER_PAGE;
            },
            ulWidth: function(){
                return this.itemStyle * this.subjectList.length;
            },
            listPos: function(){
                var offset = this.currentIndex - (NUMBER_PER_PAGE - 1);
                offset = offset < 0 ? 0 : offset;
                return -1 * offset * this.itemStyle;
            }
        },
        methods: {
            pre: function(){
                var preVal = this.currentIndex - NUMBER_PER_PAGE;
                if(preVal <= NUMBER_PER_PAGE - 1 || preVal < 0) {
                    this.currentIndex = NUMBER_PER_PAGE - 1;
                }else {
                    this.currentIndex = preVal;
                }
            },
            next: function(){
                var nextVal = this.currentIndex + NUMBER_PER_PAGE;
                if(nextVal >= this.totalNum - 1) {
                    this.currentIndex = this.totalNum - 1;
                }else {
                    this.currentIndex = nextVal;
                }
            },
            selectSubject: function(sbj){
                this.currentSubject = Object.assign({}, sbj);
            }
        }
    }
</script>
<style lang='scss' scoped>
    @import '../../assets/scss/base';
    .subject-carousel {
        max-width: 100%;
        width: 100%;
        height: 40px;
        line-height: 40px;
        .left-arrow, .right-arrow {
            width: 25px;
            height: calc(100% + 1px);
            background: $bgGrey;
            text-align: center;
            border-left: 1px solid $grey;
            border-right: 1px solid $grey;
            border-bottom: 1px solid $grey;
        }
        .right-arrow {
            border-left: none;
        }
        .subjects {
            overflow: hidden;
            min-width: 100%;
            ul {
                position: relative;
                transition: left ease .3s;
                min-width: 100%;
                li{
                    float: left;
                    border-right: 1px solid $grey;
                    border-bottom: 1px solid $grey;
                    text-align: center;
                    background: $bgGrey;
                    &:first-child {
                        border-left: 1px solid $grey;
                    }
                    &.active{
                        background: $white;
                        border-bottom: none;
                    }
                }
            }
        }
    }
</style>