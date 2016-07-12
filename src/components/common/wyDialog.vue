<template>
    <div class="dialog wy-dialog" v-show='show' transition='modal'>
        <div class="container">
            <header>
                <slot name='header'>
                    <img src="../../assets/img/dialog-logo-ok.png">
                </slot>
            </header>
            <section class="body">
                <div v-text='modal.context'></div>
                <slot name='body'></slot>
            </section>
            <p class="tip">
                <slot name='tip'></slot>
            </p>
            <footer>
                <slot name='footer'>
                    <div class="wy-btn wy-btn-orange" @click='cancel()' v-if='showCancel'>取消</div>
                    <div class="wy-btn wy-btn-green" @click='ok()'>确定</div>
                </slot>
            </footer>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                show: false
            }
        },
        components:{
            
        },
        props: {
            modal: {
                type: Object,
                twoWay: true
            },
            show: {
                type: Boolean,
                twoWay: true
            }
        },
        methods: {
            cancel(){
                this.show = false;
            },
            ok (){
                this.show = false;
                if(this.callback) {
                    this.callback();
                }
            }
        }
    }
</script>
<style lang='scss' scoped>
    @import '../../assets/scss/base';
    .dialog {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background: rgba(0, 0, 0, .4);
        transition: all .3s ease;
        z-index: 999;
        color: $textGrey;
        .container {
            width: 90%;
            margin-left: auto;
            margin-right: auto;
            background: #fff;
            position: relative;
            transition: all .3s ease;
            max-width: 500px;
            top: 40%;
            transform: translateY(-40%);
            header {
                text-align: center;
                top: 30px;
                position: absolute;
                left: 50%;
                transform: translate3d(-50%, -100%, 0);
            }
            section.body{
                padding: 50px 20px 10px;
                text-align: center;
                line-height: 30px;
            }
            p.tip {
                color: $grey;
                text-align: center;
                font-size: 14px;
                margin-top: 10px;
            }
            footer {
                margin-top: 30px;
                padding-bottom: 20px;
                text-align: center;
                .wy-btn {
                    display: inline-block;
                    width: 50%;
                    height: 40px;
                    line-height: 40px;
                    color: #fff;
                }
            }
        }
    }
    .modal-enter, .modal-leave {
        top: -100%;
        .container {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
        }
    }
</style>