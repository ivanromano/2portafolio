import { createRouter, createWebHistory } from 'vue-router'
import home from "./pages/home.vue";
import presupuesto from './pages/Presupuesto.vue'
import myart from './pages/MyArt.vue'
// import Home from "./views/Home.vue";
import {useUserStore} from "./stores/example-store";

const requireAuth = async(to, from, next) => {
	const UserStore = useUserStore()
	// si el usuario existe, que pase lo que tenga que pasar, sino, que vaya al login
	if (UserStore.token) {
		next()
	} else {
		next("/")
	}
}

const routes = [
    {path: '/', component: home},
    {path: '/presupuesto', component: presupuesto, beforeEnter: requireAuth},
    {path: '/myart', component: myart},
    // {path: '/superiorhome', component: SuperiorHome, children: [{
    //     path: '/detalles/:id', component: Detalles
    // }]},
    // {path: '/detalles/:id', beforeEnter: requireAuth},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router
