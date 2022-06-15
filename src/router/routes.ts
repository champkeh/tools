import { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import('@/views/index.vue'),
        meta: {
            title: "首页",
        },
    },
]

export default routes
