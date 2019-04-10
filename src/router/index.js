// 引入vue-router(路由)
import Vue from 'vue'
import Router from 'vue-router'
import define from './define'

import {Notification} from 'element-ui';

Vue.use(Router);

const {
    Start,
    Login,
    Register,
    Home,
    HomePage,
    MyOrder
} = define;

Start.redirect = 'Login';
Start.children = [Login, Register];

Home.redirect = 'HomePage';
Home.children = [HomePage, MyOrder];

const router = new Router({
    routes: [
        Start,
        Home,
    ]
});

export default router;