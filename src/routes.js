import { createRouter, createWebHistory } from 'vue-router'
import home from "./pages/home.vue";
// import Home from "./views/Home.vue";

const routes = [
    {path: '/', component: home},
    {path: '/home', component: home},
    // {path: '/superiorhome', component: SuperiorHome, children: [{
    //     path: '/detalles/:id', component: Detalles
    // }]},
    // {path: '/detalles/:id', component: Detalles},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router
