<template>
    <div class="wy-select">
        <i class="icon" :class='type'></i>
        <div class="select" v-text='selected[key]'>
            <slot>请选择</slot>
        </div>
        <i class="icon arrow-down" @click.stop="showOptions()"></i>
        <ul class="option-box" v-show='!!isOptionMode'>
            <li v-for='o in options' v-text='o[key]' @click="selectOption(o)"></li>
        </ul>
    </div>
</template>
<style lang='scss' scoped>
    @import '../../assets/scss/base';
    .wy-select {
        position: relative;
        width: toPercent(385 / $baseWidth);
        height: 65px;
        line-height: 65px;
        padding: 0;
        margin: auto;
        background: #fff;
        border-radius: 65px;
        i.icon{
            width: 26px;
            height: 25px;
            display: inline-block;
            position: absolute;
            top: 20px;
            &.relation {
                left: toPercent(35 / 385);
                background: url(../../assets/img/relation.png) no-repeat;
            }
            &.arrow-down {
                right: 35px;
                background: url(../../assets/img/arrow_down.png) no-repeat;
            }
        }
        .select {
            position: relative;
            display: inline-block;
            margin-left: toPercent(130 / 385);
            width: calc(74% - 17px);
            height: 100%;
            border: none;
            outline: none;
            color: #bbb;
            text-align: left;
            font-size: $font18;
        }
        ul.option-box {
            position: absolute;
            top: 65px;
            width: 100%;
            height: auto;
            background: #fff;
            z-index: 10;
            li{
                width: 100%;
                padding: 0 20px;
                height: 65px;
                line-height: 65px;
                text-align: left;
                border-top: 1px solid #ccc;
                &:first-child {
                    border-top: none;
                }
            }
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                isOptionMode: false,
                selected: this.options[0]
            }
        },
        components:{
            
        },
        ready: function(){
            this.selected = this.options[0];
            var that = this;
            this.$on('DOC_CLICKED', function(){
                that.isOptionMode = false;
            });
        },

        props: ['selected', 'type', 'options', 'key'],
        methods: {
            showOptions: function(){
                this.isOptionMode = !this.isOptionMode;
            },
            selectOption: function(o){
                this.isOptionMode = false;
                this.selected = o;
            }
        }
    }
</script>