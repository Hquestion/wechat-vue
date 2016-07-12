<template>
    <div class="bind">
        <p class="profile">
            <img src="../../assets/img/profile.png">
        </p>
        <p class="logo">
            <img src="../../assets/img/logo.png">
        </p>
        <div class="row">
            <wy-select type='relation' :options='relations' key='name' :selected.sync='relation'></wy-select>
        </div>
        <div class="row">
            <wy-input type='account' :val.sync='account' placeholder='请输入学生账号'></wy-input>
        </div>
        <div class="row">
            <wy-input type='pwd' :val.sync='password' placeholder='请输入学生密码'></wy-input>
        </div>
        <div class="row btn">
            <div class="wy-btn wy-btn-radius bg-white bind-btn text-green" @click="doBind()">绑定</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import '../../assets/scss/base';
    .bind {
        width: 100%;
        height: 100%;
        overflow: auto;
        text-align: center;
        background-color: #41b29c;
        padding-top: 30px;
        padding-bottom: 50px;
        p.profile > img{
            width: toPercent(124 / 525);
        }
        p.logo > img{
            width: toPercent(206 / 525);
        }
        .row {
            margin-top: 30px;
        }
        .row.btn {
            margin-top: 50px;
        }
        .bind-btn {
            width: 100px;
            min-width: 100px;
            height: 100px;
            line-height: 100px;
            margin: auto;
        }
    }
</style>
<script>
    import wyInput from '../common/wyInput';
    import wySelect from '../common/wySelect.vue';
    import {Toast} from 'mint-ui';
    import httpService from '../../service/httpService';
    import AuthService from '../../service/authenticateService';
    var relations = [{
        'id': '1',
        'name': '父亲'
    }, {
        'id': '2',
        'name': '母亲'
    }, {
        'id': '3',
        'name': '自己'
    }];
    export default{
        data(){
            return {
                account: '',
                password: '',
                relations: relations,
                relation: relations[0]
            }
        },
        init(){
            this.account = '';
            this.password = ''
        },
        components: {
            wyInput,
            wySelect
        },
        methods: {
            doBind: function(){
                //实现绑定
                var that = this;
                if(this.account.trim() === '') {
                    Toast({
                        message: '请输入账号！',
                        position: 'bottom'
                    });
                }else if(this.password.trim() === '') {
                    Toast({
                        message: '请输入密码！',
                        position: 'bottom'
                    });
                }else {
                    httpService.post('/WX_bind.ashx', {
                        Relation: this.relation.name,
                        WXID: window.openId,
                        UserName: this.account,
                        Password: this.password,
                        Source: 'yz'
                    }).then(function(res){
                        AuthService.updateAuth(true);
                        AuthService.cacheUserInfo(res.data.msg).then(function(){
                            that.$router.go('home');
                        });
                    }, function(res){
                        AuthService.updateAuth(false);
                    });
                }
            },

        }
    }
</script>