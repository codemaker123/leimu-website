import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/views/Home";
import Products from "@/views/Products";
import Cases from "@/views/Cases";
import ContactUs from "@/views/ContactUs";
import News from "@/views/News";
import Jobs from "@/views/Jobs";
import AboutUs from "@/views/AboutUs";
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    },
    {
        path: '/cases',
        name: 'cases',
        component: Cases
    },
    {
        path: '/contactus',
        name: 'contactus',
        component: ContactUs
    },
    {
        path: '/news',
        name: 'news',
        component: News
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: Jobs
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: AboutUs
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.name === 'Home' && from.name === 'Products') {
        // 如果从产品页切换到首页，则执行刷新操作
        window.location.reload();
    } else {
        next();
    }
});

export default router;



