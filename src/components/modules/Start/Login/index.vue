<template>
    <div class="login flex-column">
        <el-input
                v-model="phone"
                autofocus
                placeholder="请输入手机号"></el-input>
        <el-input
                v-model="password"
                type="password"
                placeholder="请输入密码"></el-input>

        <el-button
                type="success"
                @click="jumpRouter"
                class="login-button">登录
        </el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                phone: '',
                password: ''
            }
        },
        methods:{
            jumpRouter(){
                this.$router.push({path:'/Home'})
            }
        }
    }
</script>

<style lang="less" scoped>
    .login {
        height: 200px;
        justify-content: space-between;

        .login-button{
            width: 100%;
        }
    }
</style>