<template>
    <div class="wy-input">
        <i class="icon" :class='type'></i>
        <input type="text" :placeholder="placeholder" v-model="val" v-if="type==='account'">
        <input type="password" :placeholder="placeholder" v-model="val" v-if="type==='pwd'">
    </div>
</template>
<script>
    export default{
        data(){
            return{
                val: ''
            }
        },
        props: ['placeholder', 'val', 'type']
    }
</script>
<style lang="scss" scoped>
    @import '../../assets/scss/base';
    .wy-input {
        width: toPercent(385 / $baseWidth);
        height: 65px;
        line-height: 65px;
        padding: 0 toPercent(20 / 385);
        margin: auto;
        background: #fff;
        border-radius: 65px;
        border: 1px solid #ccc;
    }
    .wy-input i.icon {
        width: 23px;
        height: 25px;
        display: inline-block;
        position: relative;
        top: 5px;
    }
    .wy-input i.icon.account {
        background: url(../../assets/img/account.png) no-repeat;
    }
    .wy-input i.icon.pwd {
        background: url(../../assets/img/lock.png) no-repeat;
    }
    .wy-input input {
        margin-left: toPercent(60 / 385);
        width: calc(74% - 23px);
        height: calc(100% - 10px);
        border: none;
        outline: none;
        font-size: $font24;
    }
</style>