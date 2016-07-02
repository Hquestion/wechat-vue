<template>
    <div class="app">
        <mt-header v-bind:title="title" fixed>
            <mt-button icon="back" slot="left" @click="goBack()">返回</mt-button>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <router-view class="view animated" keep-alive transition="bounce"></router-view>
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
    export default {
        data () {
            return {

            }
        },
        computed: {
            selected: function(){
                return this.$route.name;
            }
        },
        methods: {
            goBack: function(){
                history.go(-1);
            }
        }
    }
</script>

<style scoped>
    body {
        height: 100%;
        width: 100%;
        position: absolute;
        overflow: auto;
        overflow-scrolling: touch;
    }
    #app {
        color: #2c3e50;
        margin-top: -100px;
        max-width: 600px;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
    }

    #app a {
        color: #42b983;
        text-decoration: none;
    }

    .logo {
        width: 100px;
        height: 100px
    }
</style>
