<template>
    <div class="app">
        <mt-header :title="pageTitle" fixed :class="{hide: hideHeader}">
            <mt-button icon="back" slot="left" @click="goBack()" v-show='!hideBack'>返回</mt-button>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <router-view class="view animated" keep-alive transition="bounce" :class="{'hide-header': hideHeader}"></router-view>
        <mt-tabbar :selected.sync="selected" fixed>
            <mt-tab-item id="home" v-link="{path: '/'}">
                <div slot='icon' class="icon home-icon"></div>
                主页
            </mt-tab-item>
            <mt-tab-item id="action" v-link="{path: '/action'}">
                <div slot='icon' class="icon action-icon"></div>
                动态
            </mt-tab-item>
            <mt-tab-item id="klass"  v-link="{path: '/klass'}">
                <div slot='icon' class="icon mine-icon"></div>
                班级
            </mt-tab-item>
            <mt-tab-item id="analysis" v-link="{path: '/analysis'}">
                <div slot='icon' class="icon analysis-icon"></div>
                分析
            </mt-tab-item>
            <mt-tab-item id="exercise" v-link="{path: '/exercise'}">
                <div slot='icon' class="icon exercise-icon"></div>
                练习
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    import { Indicator } from 'mint-ui';
    var feCache = require('./service/feCache');
    import { setUserCard } from './vuex/actions';
    export default {
        computed: {
            selected: function(){
                return this.$route.belong;
            },
            pageTitle: function(){
                return this.$route.title;
            },
            hideHeader: function(){
                return !!this.$route.hideTitle;
            },
            hideBack: function(){
                return !!this.$route.hideBack;
            }
        },
        methods: {
            goBack: function(){
                history.go(-1);
            }
        },
        vuex: {
            actions: {
                setUserCard
            }
        },
        ready: function(){
            this.setUserCard(feCache.cache.userInfo);
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
    .icon {
        width: 24px;
        height: 24px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        &.home-icon {
            background-image: url(./assets/img/home.png);
        }
        &.action-icon {
            background-image: url(./assets/img/action.png);
        }
        &.analysis-icon {
            background-image: url(./assets/img/analysis-nav.png);
        }
        &.exercise-icon {
            background-image: url(./assets/img/exercise-nav.png);
        }
        &.mine-icon {
            background-image: url(./assets/img/mine.png);
        }
    }
    .is-selected .icon{
        &.home-icon {
            background-image: url(./assets/img/home-active.png);
        }
        &.action-icon {
            background-image: url(./assets/img/action-active.png);
        }
        &.analysis-icon {
            background-image: url(./assets/img/analysis-active.png);
        }
        &.exercise-icon {
            background-image: url(./assets/img/exercise-active.png);
        }
        &.mine-icon {
            background-image: url(./assets/img/mine-active.png);
        }
    }
</style>
