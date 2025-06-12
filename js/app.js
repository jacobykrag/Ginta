import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import NotFound from './components/NotFound.js';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/:pathMatch(.*)*', component: NotFound },
];


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            
            return savedPosition;
        } else {
            
            return { top: 0, left: 0 };
        }
    },
});


const app = Vue.createApp({});


app.use(router);


app.mount('#app');
