<template>
    <div class="paper-select-card" :class='{active: selected.id===paper.id}'>
        <div class="row">
            <div class="col col-3 tag" :class='{active: selected.id===paper.id}' v-text='paper.date'></div>
            <div class="col col-9">
                <label :for='paper.id' class="t_overflow" v-text='paper.name'></label>
                <input :id='paper.id' type="radio" name='paper' :value="paper" v-model='selected'>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            
        },
        props: ['paper', 'selected'],
        computed: {
            options: function(){

            }
        }
    }
</script>
<style lang='scss' scoped>
    @import '../../assets/scss/base';
    .paper-select-card {
        width: 100%;
        height: 70px;
        margin-top: 10px;
        .row {
            height: 100%;
            overflow: hidden;
            .col {
                height: 100%;
                &.tag {
                    background: $grey;
                    position: relative;
                    width: 80px;
                    height: 70px;
                    &:after {
                        content: "";
                        width: 0;
                        height: 0;
                        position: absolute;
                        top: 0;
                        right: -15px;
                        border-top: 35px solid transparent;
                        border-bottom: 35px solid transparent;
                        border-left: 15px solid $grey;
                    }
                    &.active{
                        background: $green;
                        &:after {
                            border-left: 15px solid $green;
                        }
                    }
                }
                &.col-9 {
                    width: calc(100% - 90px);
                    margin-left: 10px;
                    position: relative;
                    height: 70px;
                    border: 1px solid $grey;
                    border-left: none;
                    padding: 0 30px;
                    line-height: 70px;
                    &:before {
                        content: '';
                        width: 1px;
                        height: 39px;
                        position: absolute;
                        top: -3px;
                        left: 7px;
                        border-left: 1px solid #ccc;
                        -webkit-transform: rotate(-25deg);
                        transform: rotate(-25deg);
                    }
                    &:after {
                        content: "";
                        width: 1px;
                        height: 39px;
                        position: absolute;
                        bottom: -4px;
                        left: 6px;
                        transform: rotate(25deg);
                        border-left: 1px solid rgb(204, 204, 204);
                    }
                    label {
                        width: calc(100% - 40px);
                        display: inline-block;
                    }
                    input {
                        width: 30px;
                        height: 30px;
                        box-shadow: none;
                        outline: none;
                        position:absolute;
                        top: 20px;
                    }
                }
            }
        }
    }
</style>