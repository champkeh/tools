import { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/encoding",
    meta: {
      title: "首页",
    },
  },
  {
    path: "/encoding",
    component: () => import("@/views/encoding.vue"),
    meta: {
      title: "编解码",
    },
  },
  {
    path: "/idcard",
    component: () => import("@/views/idcard.vue"),
    meta: {
      title: "身份证号码生成器",
    },
  },
  {
    path: "/credit",
    component: () => import("@/views/credit.vue"),
    meta: {
      title: "社会信用代码生成器",
    },
  },
]

export default routes
