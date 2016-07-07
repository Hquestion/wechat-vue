<template>
    <div class="app" @click='docClicked()'>
        <mt-header :title="pageTitle" fixed :class="{hide: hideHeader}">
            <mt-button icon="back" slot="left" @click="goBack()">返回</mt-button>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <router-view class="view animated" keep-alive transition="bounce" :class="{'hide-header': hideHeader}"></router-view>
        <mt-tabbar :selected.sync="selected" fixed>
            <mt-tab-item id="home" v-link="{path: '/'}">
                <img slot="icon" src="./assets/logo.png">
                主页
            </mt-tab-item>
            <mt-tab-item id="action" v-link="{path: '/action'}">
                <img slot="icon" src="./assets/logo.png">
                动态
            </mt-tab-item>
            <mt-tab-item id="analysis" v-link="{path: '/analysis'}">
                <img slot="icon" src="./assets/logo.png">
                分析
            </mt-tab-item>
            <mt-tab-item id="exercise" v-link="{path: '/exercise'}">
                <img slot="icon" src="./assets/logo.png">
                练习
            </mt-tab-item>
            <mt-tab-item id="mine"  v-link="{path: '/mine'}">
                <img slot="icon" src="./assets/logo.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    import { initTitle } from './vuex/actions';
    import { getAppTitle } from './vuex/getters';
    export default {
        computed: {
            selected: function(){
                return this.$route.name;
            },
            pageTitle: function(){
                return this.$route.title;
            },
            hideHeader: function(){
                return !!this.$route.hideTitle;
            }
        },
        methods: {
            goBack: function(){
                history.go(-1);
            },
            docClicked: function(){
                this.$broadcast('DOC_CLICKED');
            }
        },
        init: function(){
            console.log('app is init...');
        }
    }
</script>

<style lang='scss' scoped>
    @import 'assets/scss/wy-mint.scss';
    body {
        height: 100%;
        width: 100%;
        position: absolute;
        overflow: auto;
        overflow-scrolling: touch;
    }
    .logo {
        width: 100px;
        height: 100px
    }
    .mint-header.hide{
        display: none;
    }
    .view{
        position: absolute;
        width: 100%;
        top: 50px;
        height: calc(100% - 110px);
        max-height: calc(100% - 110px);
        padding-bottom: 10px;
        overflow: auto;
        overflow-scrolling: touch;
        -webkit-overflow-scrolling : touch;
    }
    .view.hide-header {
        top: 0;
        height: calc(100% - 60px);
        max-height: calc(100% - 60px);
    }
</style>
