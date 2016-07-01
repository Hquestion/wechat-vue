<template>
    <div class="bind">
        <p>云智教育LOGO</p>
        <div class="row">
            <i class="icon"></i>
            <select >
                <option>请选择</option>
            </select>
        </div>
        <div class="row">
            <i class="icon"></i>
            <input type="text" placeholder="请输入学生账号">
        </div>
        <div class="row">
            <i class="icon"></i>
            <input type="text" placeholder="请输入学生密码">
        </div>
        <div class="row">
            <div class="btn btn-radius">绑定</div>
        </div>
    </div>
</template>
<style scoped>
    .bind{
        background: #41b29c;
        width: 100%;
        height: 100%;
        text-align: center;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            
        }
    }
</script>