<template>
    <div class="home">
        <div class="header flex-row">
            <div class="content flex-row">
                <div class="logo-box">
                    饱了么
                </div>
                <ul class="flex-row nav-list">
                    <router-link tag="li" active-class="active" to="">首页</router-link>
                    <router-link tag="li" active-class="active" to="">我的订单</router-link>

                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="less" scoped>
    .home {
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
                justify-content: flex-start;

                .logo-box {
                    font-size: 33px;

                    &:hover{
                        cursor: default;
                    }
                }

                .nav-list{
                    height: 100%;
                    margin-left: 20px;

                    li{
                        height: 100%;
                        padding: 0 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        &:hover{
                            cursor: default;
                        }
                    }

                    .active{
                        background: #006bc7;
                    }
                }
            }
        }

    }
</style>