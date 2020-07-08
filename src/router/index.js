import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/notification',
        name: 'Notification',
        component: () =>
            import ('../views/Notification.vue')
    },
    {
        path: '/share',
        name: 'Share',
        component: () =>
            import ('../views/Share.vue')
    },
    {
        path: '/write',
        name: 'Write',
        component: () =>
            import ('../views/Write.vue')
    },
    {
        path: '/signin',
        name: 'Signin',
        component: () =>
            import ('../views/Signin.vue')
    },
    {
        path: '/credit',
        name: 'Credit',
        component: () =>
            import ('../views/Credit.vue')
    },
    {
        path: '/channel',
        name: 'Channel',
        component: () =>
            import ('../views/Channel.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

export default router