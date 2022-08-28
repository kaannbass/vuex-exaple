import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import productList from "@/views/productList";
import DefaultLayout from "@/components/DefaultLayout";
import Product from "../views/Product";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
        name: 'Home',
        component: DefaultLayout,
        meta: {requiresAuth: true},
        children: [
            {
                path: '/',
                name: 'HomeView',
                component: HomeView
            },
            {
                path: '/product-list',
                name: 'productList',
                component: productList,
            },
            {
                path: '/product/:id',
                name: 'Product',
                component: () => import('../views/Product'),
                props:true,
            },

        ]
    },



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
