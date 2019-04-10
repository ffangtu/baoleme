<template>
    <div class="header flex-row">
        <div class="content flex-row">
            <div class="left flex-row">
                <div class="logo-box">
                    饱了么
                </div>
                <el-menu :default-active="'1'"
                         class="content-nav"
                         mode="horizontal"
                         background-color="#1e89e0"
                         text-color="#fff"
                         active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <router-link
                                active-class="active"
                                tag="div"
                                to="/HomePage">首页</router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <router-link
                                active-class="active"
                                tag="div"
                                to="/MyOrder">我的订单</router-link>
                    </el-menu-item>
                </el-menu>
            </div>
            <el-menu :default-active="'1'"
                     class="content-nav"
                     mode="horizontal"
                     background-color="#1e89e0"
                     text-color="#fff"
                     active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title">我的</template>
                    <el-menu-item index="2-1">管理菜品</el-menu-item>
                    <el-menu-item index="2-3">退出登录</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="less" scoped>
    .header {
        width: 100%;
        height: 60px;
        position: fixed;
        top: 0;
        background: #1e89e0;
        color: #fff;

        .content {
            width: 1200px;
            height: 100%;
            justify-content: space-between;

            .logo-box {
                font-size: 33px;
                white-space: nowrap;

                &:hover {
                    cursor: default;
                }
            }

            .content-nav{
                background: transparent;
                margin-left: 20px;

            }

        }
    }
</style>