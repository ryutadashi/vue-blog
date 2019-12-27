import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Blogs from '../views/Blogs.vue'
import AddBlog from '../views/AddBlog.vue'
import ViewBlog from '../views/ViewBlog.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },{
        path: '/blogs',
        name: 'blogs',
        component: Blogs
    },{
        path: '/add-blog',
        name: 'add-blog',
        component: AddBlog
    },{
        path: '/view-blog/:id',
        name: 'view-blog',
        component: ViewBlog
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: "active"
})

export default router
