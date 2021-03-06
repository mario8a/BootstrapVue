import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/grid',
            name: 'grid',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Grid.vue')
        },
        {
            path: '/card',
            name: 'card',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Card.vue')
        },
        {
            path: '/forms',
            name: 'forms',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Forms.vue')
        },
        {
            path: '/validacion',
            name: 'validacion',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Validacion.vue')
        }
    ]
})