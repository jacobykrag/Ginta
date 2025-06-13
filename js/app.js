import Home from './websites/Home.js';
import Individuelt from './websites/Individuelt.js';
import Gruppe from './websites/Gruppe.js';
import Online from './websites/Online.js';
import Rygestop from './websites/Rygestop.js';
import Livserfaring from './websites/Livserfaring.js';
import About from './websites/About.js';
import Contact from './websites/Contact.js';
import Betingelser from './websites/Betingelser.js';
import NotFound from './websites/NotFound.js';

const routes = [
    { path: '/', component: Home },
    { path: '/individuelt', component: Individuelt },
    { path: '/gruppe', component: Gruppe },
    { path: '/online', component: Online },
    { path: '/rygestop', component: Rygestop },
    { path: '/about', component: About },
    { path: '/livserfaring', component: Livserfaring },
    { path: '/contact', component: Contact },
    { path: '/betingelser', component: Betingelser },
    { path: '/:pathMatch(.*)*', component: NotFound },
];


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
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
