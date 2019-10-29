import Vue from 'vue'
import VueRouter from 'vue-router'


import App from './components/App.vue'
import Tovars from './components/Tovars.vue'
// import studentInfo from './components/studentInfo.vue'
// import login from './components/login.vue'
// import store from './store.js'
// import wysiwyg from 'vue-wysiwyg';

require('velocity-animate');

const routes = [
    { path: '/', component: Tovars,  meta: { requiresAuth: true } },
    // { path: '/student-info/:id', component: studentInfo, props: true,  meta: { requiresAuth: true } },
    // { path: '/login', component: login},
]

const router = new VueRouter({
    routes
})

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//       // этот путь требует авторизации, проверяем залогинен ли
//       // пользователь, и если нет, перенаправляем на страницу логина
//       if (store.getters.getUser === null) {
//         next({
//           path: '/login',
//           query: { redirect: to.fullPath }
//         })
//       } else {
//         next()
//       }
//     } else {
//       next() // всегда так или иначе нужно вызвать next()!
//     }
//   })

Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    el: '#app',
    router,
    // store
})






