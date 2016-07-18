<template>
    <div class="error-fix">
        <div class="row">
            <div class="col col-4">学科：</div>
            <div class="col col-8">
                <select v-model="currentSbj" class="col col-12">
                    <option v-for='sbj in subjects' :value="sbj" v-text="sbj.subjectName"></option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col col-4">试卷：</div>
            <div class="col col-8" @click='showPapers()'>
                <div class="paper-input t_overflow" v-text='selectedPaper.name'></div>
            </div>
        </div>
        <div class="row">
            <div class="col col-4">出题范围：</div>
            <div class="col col-8">
                <select v-model="range" class="col col-12">
                    <option v-for='r in ranges' :value="r" v-text="r.name"></option>
                </select>
            </div>
        </div>
        <div class="wy-btn-group">
            <div class="wy-btn wy-btn-default" @click="goBack()">返回</div>
            <div class="wy-btn wy-btn-green" @click='next()'>下一步</div>
        </div>
        <mt-popup class='paper-popup' :visible.sync="papersVisible" position="right">
            <mt-header title="试卷列表" fixed>
                <mt-button icon="back" slot="left" @click="hidePapers()"></mt-button>
            </mt-header>
            <article class="">
                <div v-for='p in papers'>
                    <p v-text='p.month'></p>
                    <paper-select-card v-for='item in p.paperList' :paper='item' :selected.sync='selectedPaper'></paper-select-card>
                </div>
            </article>
        </mt-popup>
    </div>
</template>
<script>
    import { Popup } from 'mint-ui';
    import PaperSelectCard from './PaperSelectCard.vue';
    export default{
        data(){
            return{
                subjects: [{
                    subjectId: '1',
                    subjectName: '数学'
                }, {
                    subjectId: '2',
                    subjectName: '语文'
                }, {
                    subjectId: '3',
                    subjectName: '英语'
                }],
                currentSbj: {},
                ranges: [{
                    id: '1',
                    name: '仅错题'
                }, {
                    id: '2',
                    name: '全部题目'
                }],
                range: {},
                papersVisible: false,
                papers: [{
                    month: 6,
                    paperList: [{
                        id: '1',
                        name: '第二学期末模拟考试'
                    }, {
                        id: '2',
                        name: '第二学期末模拟考试1'
                    }]
                },{
                    month: 7,
                    paperList: [{
                        id: '3',
                        name: '第二学期末模拟考试2'
                    }, {
                        id: '4',
                        name: '第二学期末模拟考试3'
                    }]
                }],
                selectPaper: {}
            }
        },
        components:{
            PaperSelectCard
        },
        ready () {
            this.currentSbj = this.subjects[0];
            this.range = this.ranges[0];
        },
        methods: {
            showPapers: function(){
                this.papersVisible = true;
            },
            hidePapers: function(){
                this.papersVisible = false;
            },
            goBack: function(){
                history.go(-1);
            },
            next: function(){

            }
        }
    }
</script>
<style lang='scss' scoped>
    @import '../../assets/scss/wy-mint.scss';
    .error-fix {
        padding: 20px;
        font-size: 1rem;
        .row {
            height: 50px;
            line-height: 50px;
            .paper-input {
                height: 100%;
                border: 1px solid #ccc;
                line-height: 39px;
                text-indent: 10px;
            }
            & > div {
                height: 100%;
                line-height: 40px;
                & > select {
                    height: 100%;
                    border: 1px solid #ccc;
                    option{
                        height: 50px;
                        line-height: 50px;
                        padding: 10px 0;
                    }
                }
            }
        }
        .paper-popup {
            width: 100%;
            height: 100%;
            overflow: auto;
            overflow-scrolling: touch;
            article {
                margin-top: 50px;
                height: calc(100% - 50px);
                overflow: auto;
                overflow-scrolling: touch;
                padding: 0 10px;
            }
        }
        .wy-btn-group {
            margin-top: 50px;
            justify-content: space-around;
            .wy-btn {
                width: 45%;
            }
        }
    }

</style>