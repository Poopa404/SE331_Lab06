import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'

import NewListView from '../views/NewListView.vue'
import StudentListView from '../views/StudentListView.vue'

import EventDetailView from '../views/event/EventDetailView.vue'
import EventEditView from '@/views/event/EventEditView.vue'
import EventRegisterView from '@/views/event/EventRegisterView.vue'
import EventLayoutView from '@/views/event/EventLayoutView.vue'

import NotFoundView from '../views/NotFoundView.vue'
import NetworkErrorView from '../views/NetworkErrorView.vue'
import NProgress from 'nprogress'

import EventService from '@/services/EventService'
import { useEventStore } from '@/stores/event'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ limit: parseInt(route.query?.limit as string || '2'), page: parseInt(route.query?.page as string || '1') })
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/event/:id',
      name: 'event-layout',
      component: EventLayoutView,
      props: true,
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string)
        const eventStore = useEventStore()
        EventService.getEventById(id)
          .then((response) => {
            eventStore.setEvent(response.data)
          })
          .catch(error => {
            console.log(error)
            if (error.response && error.response.status === 404) {
              router.push({ name: '404-resource', params: { resource: 'event' } })
            } else {
              router.push({ name: 'network-error' })
            }
          })
      },
      children: [
        {
          path: '',
          name: 'event-detail',
          component: EventDetailView,
          props: true
        },
        {
          path: '',
          name: 'event-edit',
          component: EventEditView,
          props: true
        },
        {
          path: '',
          name: 'event-register',
          component: EventRegisterView,
          props: true
        }
      ]
    },
    {
      path: '/new',
      name: 'new',
      component: NewListView
    },
    {
      path: '/students',
      name: 'student',
      component: StudentListView
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkErrorView
    }
  ],
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
