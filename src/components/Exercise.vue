<template>
    <div class="exercies-home">
        <article id="compensate">
            <div class="tag"></div>
            <div class="title t-center">
                <img src="../assets/img/compensate.png">
                <span>补偿作业</span>
            </div>
            <p>今天的补偿作业已经更新，预计能帮助你下周周测提高10分，点击开始测试。</p>
            <p class="t-center">（周一至周五每天17:00系统自动推送）</p>
        </article>
        <article id='fix-error' v-link='{name: "errorFix"}'>
            <div class="title t-center">
                <img src="../assets/img/error-fix.png">
                <span>错哪补哪</span>
            </div>
            <p class="t-center">已进行<span>29</span>次练习</p>
        </article>
        <article id='error-note' v-link='{name: "errorNote"}'>
            <div class="title t-center">
                <img src="../assets/img/error-book.png">
                <span>我的错题本</span>
            </div>
            <p class="t-center">目前总共收集<span>29</span>道错题</p>
        </article>
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
        computed: {

        }
    }
</script>
<style lang="scss" scoped>
    .exercies-home {
        background: #fff;
        color: #fff;
    }
    .title {
        font-size: 1.33rem;
        img{
            width:2rem;
            vertical-align: middle;
        }
    }
    #compensate {
        width: 100%;
        height: 230 / 18 + rem;
        background: url(../assets/img/compensate-bg.png);
        background-size: 100% 100%;
        padding: 20/18 + rem;
        p {
            padding: 10/18+rem 0;
        }
    }
    #fix-error {
        margin-top: 10px;
        width: 100%;
        height: 158 / 18 + rem;
        background: url(../assets/img/error-fix-bg.png);
        background-size: 100% 100%;
        padding: 20/18 + rem;
        p {
            padding: 10/18+rem 0;
        }
    }
    #error-note {
        margin-top: 10px;
        width: 100%;
        height: 174 / 18 + rem;
        background: url(../assets/img/error-book-bg.png);
        background-size: 100% 100%;
        padding: 20/18 + rem;
        p {
            padding: 10/18+rem 0;
        }
    }
</style>