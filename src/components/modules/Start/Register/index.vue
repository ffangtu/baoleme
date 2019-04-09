<template>
    <div class="register flex-column">
        <el-input
                v-model="UserName"
                autofocus
                placeholder="请输入用户名"></el-input>

        <el-input
                v-model="phone"
                placeholder="请输入手机号"></el-input>

        <el-input
                v-model="password"
                type="password"
                placeholder="请输入密码"></el-input>

        <el-input
                v-model="surePassword"
                type="password"
                placeholder="请再次输入密码"></el-input>

        <el-button
                type="success"
                class="login-button">注册
        </el-button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                UserName:'',
                phone:'',
                password:'',
                surePassword:''
            }
        }
    }
</script>

<style lang="less" scoped>
.register{
    height: 350px;
    justify-content: space-between;

    .login-button{
        width: 100%;
    }
}
</style>