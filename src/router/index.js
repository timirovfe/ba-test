import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/UserLogin.vue'
import Profile from '../views/UserProfile.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta: { title: 'Вход' }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: { title: 'Профиль' }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    } else {
        document.title = 'Default Title';
    }
});

export default router