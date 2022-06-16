import { RouteRecordRaw } from "vue-router"

// const modules = import.meta.glob("/src/views/**/*.vue")
//
// console.log(modules)
// // const routes: RouteRecordRaw[] = []
// Object.keys(modules).forEach((key) => {
//   const path = key.replace(".vue", "").replace(/^\/src/, "")
//   const title = path.split("/").slice(-1)[0]
//
//   console.log(modules[key]().then(console.log))
//   // routes.push({
//   //   path,
//   //   component: modules[key],
//   //   meta: {
//   //     title,
//   //   },
//   // })
// })

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
  {
    path: "/password",
    component: () => import("@/views/password.vue"),
    meta: {
      title: "密码生成器",
    },
  },
]

export default routes
