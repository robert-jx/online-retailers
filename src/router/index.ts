import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/components/layout/index.vue')
const Login = () => import('../views/login/index.vue')
// 用户管理
const UserList = () => import('@/views/user-manage/user-list/index.vue')
const UserType = () => import('@/views/user-manage/user-type/index.vue')
// 权限管理
const RoleList = () => import('@/views/role-manage/role-list/index.vue')
// 商品管理
const GoodsList = () => import('@/views/goods-manage/goods-list/index.vue')
const GoodsType = () => import('@/views/goods-manage/goods-type/index.vue')
const GoodsCommodity = () => import('@/views/goods-manage/commodity-classification/index.vue')
// 订单管理
const OrderList = () => import('@/views/order-manage/order-list/index.vue')
// 数据统计
const DataLog = () => import('@/views/data-statistics/log-statistics/index.vue')
const DataOrder = () => import('@/views/data-statistics/order-statistics/index.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Layout
  },
  // 用户管理
  {
    path: '/user-manage',
    name: 'user-manage',
    component: Layout,
    redirect: '/user-manage/list',
    children: [
      // 用户列表
      {
        path: '/user-manage/list',
        name: 'user-manage-list',
        component: UserList
      },
      // 用户类型
      {
        path: '/user-manage/type',
        name: 'user-manage-type',
        component: UserType
      }
    ]
  },
  // 权限管理
  {
    path: '/role-manage',
    name: 'role-manage',
    component: Layout,
    redirect: '/role-manage/list',
    children: [
      // 权限列表
      {
        path: '/role-manage/list',
        name: 'role-manage-list',
        component: RoleList
      }
    ]
  },
  // 商品管理
  {
    path: '/goods-manage',
    name: 'goods-manage',
    component: Layout,
    redirect: '/goods-manage/list',
    children: [
      // 商品列表
      {
        path: '/goods-manage/list',
        name: 'goods-manage-list',
        component: GoodsList
      },
      // 商品类型
      {
        path: '/goods-manage/type',
        name: 'goods-manage-type',
        component: GoodsType
      }
    ]
  },
  // 订单管理
  {
    path: '/order-manage',
    name: 'order-manage',
    component: Layout,
    redirect: '/order-manage/list',
    children: [
      // 订单列表
      {
        path: '/order-manage/list',
        name: 'order-manage-list',
        component: OrderList
      }
    ]
  },
  // 数据统计
  {
    path: '/data-statistics',
    name: 'data-statistics',
    component: Layout,
    redirect: '/data-statistics/order',
    children: [
      // 订单统计
      {
        path: '/data-statistics/order',
        name: 'data-statistics-order',
        component: DataOrder
      },
      // 日志统计
      {
        path: '/data-statistics/log',
        name: 'data-statistics-log',
        component: DataLog
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
