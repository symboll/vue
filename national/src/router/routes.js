import Layout from '../views/layout';
import ViewWrap from '../views/layout/view_wrap';
export default [
  {
    path: '/',
    name: '',
    component: Layout,
    redirect: () => '/todolist/home',
    children: [
      {
        path: '/todolist',
        name: 'TodoList',
        // component: () => import(/* webpackChunkName: "todolist" */ '../views/todo_list/index.vue'),
        component: ViewWrap,
        meta: { title: "待办事项", icon: require('../assets/icons/dhl_dbsx@3x.png') },
        children: [
          {
            path: 'home',
            name: 'Home',
            component: () => import(/* webpackChunkName: "todolist" */ '../views/todo_list/index.vue'),
            meta: { title: "待办事项" }
          },
          {
            path: 'daily',
            name: 'Daily',
            component: () => import(/* webpackChunkName: "daily" */ '../views/todo_list/daily.vue'),
            meta: { title: "日常管理"  }
          },
          {
            path: 'temporary',
            name: 'Temporary',
            component: () => import(/* webpackChunkName: "todolist" */ '../views/todo_list/temporary.vue'),
            meta: { title: "临时调度" }
          }
        ]
      },
      {
        path: '/emphasisPersonal',
        name: 'EmphasisPersonal',
        component: () => import(/* webpackChunkName: "emphasis_personal" */ '../views/emphasis_personal/index.vue'),
        meta: { title: "重点人员", icon: require('../assets/icons/dhl_zdry@3x.png') }
      },
      {
        path: '/emphasisPersonalEdit',
        name: 'EmphasisPersonalEdit',
        component: () => import(/* webpackChunkName: "emphasis_personal_edit" */ '../views/emphasis_personal/edit.vue'),
        meta: { title: "重点人员", hide: true }
      },
      {
        path: '/emphasisPersonalInfo',
        name: 'EmphasisPersonalInfo',
        component: () => import(/* webpackChunkName: "emphasis_personal_info" */ '../views/emphasis_personal/info.vue'),
        meta: { title: "重点人员", hide: true}
      },
      {
        path: '/person',
        name: 'person',
        component: () => import(/* webpackChunkName: "person" */ '../views/person/index.vue'),
        meta: { title: "个人中心", hide: true }
      },
      {
        path: '/emphasisPosition',
        name: 'EmphasisPosition',
        component: () => import(/* webpackChunkName: "emphasis_position" */ '../views/emphasis_position/index.vue'),
        meta: { title: "重点阵地", icon: require('../assets/icons/dhl_zdzd@3x.png') }
      },
      {
        path: '/emphasisPositionEdit',
        name: 'EmphasisPositionEdit',
        component: () => import(/* webpackChunkName: "emphasis_position_edit" */ '../views/emphasis_position/edit.vue'),
        meta: { title: "重点阵地", hide: true }
      },
      {
        path: '/emphasisPositionInfo',
        name: 'EmphasisPositionInfo',
        component: () => import(/* webpackChunkName: "emphasis_position_info" */ '../views/emphasis_position/info.vue'),
        meta: { title: "重点阵地", hide: true}
      },
      {
        path: '/intelligence',
        name: 'intelligence',
        meta: { title: "情报信息", icon: require('../assets/icons/dhl_qbxx@3x.png') },
        component: ViewWrap,
        children: [
          {
            path: 'info_officer',
            name: 'InfoOfficer',
            component: () => import(/* webpackChunkName: "info_officer" */ '../views/intelligence/info_officer.vue'),
            meta: { title: "信息员管理" },
          },
          {
            path: 'info_officer_edit',
            name: 'InfoOfficerEdit',
            component: () => import(/* webpackChunkName: "info_officer_edit" */ '../views/intelligence/info_officer_edit.vue'),
            meta: { title: "信息员管理" , hide: true},
          },
          {
            path: 'info_officer_info',
            name: 'InfoOfficerInfo',
            component: () => import(/* webpackChunkName: "info_officer_info" */ '../views/intelligence/info_officer_info.vue'),
            meta: { title: "信息员管理" , hide: true},
          },
          {
            path: 'info_submit',
            name: 'InfoSubmit',
            component: () => import(/* webpackChunkName: "info_submit" */ '../views/intelligence/info_submit.vue'),
            meta: { title: "信息上报" },
          },
          {
            path: 'info_submit_edit',
            name: 'InfoSubmitEdit',
            component: () => import(/* webpackChunkName: "info_submit_edit" */ '../views/intelligence/info_submit_edit.vue'),
            meta: { title: "信息上报" , hide: true},
          },
          {
            path: 'info_submit_info',
            name: 'InfoSubmitInfo',
            component: () => import(/* webpackChunkName: "info_submit_info" */ '../views/intelligence/info_submit_info.vue'),
            meta: { title: "信息上报" , hide: true},
          },
        ]
      },
      
      {
        path: '/statistical',
        name: 'statistical',
        meta: { title: "统计分析", icon: require('../assets/icons/dhl_tjfx@3x.png') },
        component: ViewWrap,
        children: [
          {
            path: 'finished',
            name: 'finished',
            component: () => import(/* webpackChunkName: "finished" */ '../views/statistical/finished.vue'),
            meta: { title: "任务下派完成情况统计" }
          },
          {
            path: 'visit',
            name: 'visit',
            component: () => import(/* webpackChunkName: "visit" */ '../views/statistical/visit.vue'),
            meta: { title: "走访消息评价统计" }
          },
          {
            path: 'ideological',
            name: 'ideological',
            component: () => import(/* webpackChunkName: "ideological" */ '../views/statistical/ideological.vue'),
            meta: { title: "人员思想情况评估统计" }
          },
          {
            path: 'site',
            name: 'site',
            component: () => import(/* webpackChunkName: "site" */ '../views/statistical/site.vue'),
            meta: { title: "场所情况统计" }
          }
        ]
      },
      {
        path: '/settings',
        name: 'settings',
        meta: { title: "系统管理", icon: require('../assets/icons/dhl_xtgl@3x.png') },
        component: ViewWrap,
        children: [
          {
            path: 'user',
            name: 'user',
            component: () => import(/* webpackChunkName: "user" */ '../views/settings/user.vue'),
            meta: { title: "用户管理" },
          },
          {
            path: 'role',
            name: 'role',
            component: () => import(/* webpackChunkName: "role" */ '../views/settings/role.vue'),
            meta: { title: "角色管理" },
          },
          {
            path: 'role_edit',
            name: 'roleEdit',
            component: () => import(/* webpackChunkName: "role_edit" */ '../views/settings/role_edit.vue'),
            meta: { title: "角色管理", hide: true },
          },
          {
            path: 'dictionaries',
            name: 'dictionaries',
            component: () => import(/* webpackChunkName: "dictionaries" */ '../views/settings/dictionaries.vue'),
            meta: { title: "数据字典" },
          },
          {
            path: 'params',
            name: 'params',
            component: () => import(/* webpackChunkName: "params" */ '../views/settings/params.vue'),
            meta: { title: "参数配置" },
          }
        ]
      },
      {
        path: '/error',
        name: 'error',
        component: () => import(/* webpackChunkName: "login" */ '../views/error_pages/404.vue'),
        meta: { title: "404页面", hide: true },
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue'),
  }
]