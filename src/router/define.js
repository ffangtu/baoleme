export default {
    Start: {
        path: '/',
        name: 'Start',
        component: resolve => require(['../components/modules/Start'], resolve)
    },
    Login: {
        path: '/Login',
        name: 'Login',
        component: resolve => require(['../components/modules/Start/Login'], resolve)
    },
    Register: {
        path: '/Register',
        name: 'Register',
        component: resolve => require(['../components/modules/Start/Register'], resolve)
    },
    Home: {
        path: '/Home',
        name: 'Home',
        component: resolve => require(['../components/modules/Home'], resolve)
    },
    HomePage: {
        path: '/HomePage',
        name: 'HomePage',
        component: resolve => require(['../components/modules/HomePage'], resolve)
    },
    MyOrders: {
        path: '/MyOrders',
        name: 'MyOrders',
        component: resolve => require(['../components/modules/MyOrders'], resolve)
    },
    ManageFood: {
        path: '/ManageFood',
        name: 'ManageFood',
        component: resolve => require(['../components/modules/ManageFood'], resolve)
    }
}