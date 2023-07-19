import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectCard from './pages/ProjectCard.vue';
import SingleProject from './pages/SingleProject.vue';
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
            component: ProjectCard,
        },
        {    
            path: "/projects/:id",
            name: "single-project",
            component: SingleProject
        },
        {    
            path: "/error/:code",
            name: "error",
            component: ErrorPage
        },
    ]

});

export { router }