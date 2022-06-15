import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
} from "vue-router"
import routes from "./routes"

const router = createRouter({
  routes: routes,
  history: createWebHistory("/"),
})

router.afterEach((to: RouteLocationNormalized) => {
  // 修改页面标题
  if (to.meta?.title) {
    document.title = to.meta.title as string
  }
})

export default router
