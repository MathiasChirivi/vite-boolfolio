import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectList from './pages/ProjectList.vue';
import ErrorPage from './pages/ErrorPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {    
            path:"/",
            name: "Home",
            component: AppHome,
        },
        {    
            path:"/about-us",
            name: "About-us",
            component: AppAbout,
        },
        {    
            path:"/projects",
            name: "Projects",
            component: ProjectList,
        },
        {    
            path: "/error/:code",
            name: "error",
            component: ErrorPage
        },
    ]

});

export { router }