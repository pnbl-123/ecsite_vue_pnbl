import { DRAWER_ID } from "@/constants/drawer";
import PATH from "@/constants/path";
import { createRouter, createWebHistory } from "vue-router";
const HomeLayout = () => import(`@/views/HomeView/LayoutView.vue`);

const HomeChild = () => import(`@/views/HomeView/HomeView.vue`);

const AboutLayout = () => import(`@/views/AboutView/LayoutView.vue`);

const AboutChild = () => import(`@/views/AboutView/AboutView.vue`);

const ServicesLayout = () => import(`@/views/ServicesView/LayoutView.vue`);

const ServicesChild = () => import(`@/views/ServicesView/ServicesView.vue`);

const NewsLayout = () => import(`@/views/NewsView/LayoutView.vue`);

const NewsChild = () => import(`@/views/NewsView/NewsView.vue`);

const CaseStudiesLayout = () => import(`@/views/NewsView/LayoutView.vue`);

const CaseStudiesChild = () =>
  import(`@/views/CaseStudiesView/CaseStudiesView.vue`);

const ContactLayout = () => import(`@/views/ContactView/LayoutView.vue`);

const ContactChild = () => import(`@/views/ContactView/ContactView.vue`);

const CareerLayout = () => import(`@/views/CareerView/LayoutView.vue`);

const CareerChild = () => import(`@/views/CareerView/CareerView.vue`);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: PATH.BASE,
      name: DRAWER_ID.BASE,
      component: HomeLayout,
      children: [
        {
          path: "",
          name: DRAWER_ID.BASE,
          component: HomeChild,
        },
      ],
    },
    {
      path: PATH.ABOUT,
      name: DRAWER_ID.ABOUT,
      component: AboutLayout,
      children: [
        {
          path: "",
          name: DRAWER_ID.ABOUT,
          component: AboutChild,
        },
      ],
    },
    {
      path: PATH.SERVICES,
      name: DRAWER_ID.SERVICES,
      component: ServicesLayout,
      children: [
        {
          path: "",
          name: DRAWER_ID.SERVICES,
          component: ServicesChild,
        },
      ],
    },
    {
      path: PATH.NEWS,
      name: DRAWER_ID.NEWS,
      component: NewsLayout,
      children: [
        {
          path: "",
          name: DRAWER_ID.NEWS,
          component: NewsChild,
        },
      ],
    },
    {
      path: PATH.CASE_STUDIES,
      name: DRAWER_ID.CASE_STUDIES,
      component: CaseStudiesLayout,
      children: [
        {
          path: "",
          name: DRAWER_ID.CASE_STUDIES,
          component: CaseStudiesChild,
        },
      ],
    },
    {
      path: PATH.CONTACT,
      name: DRAWER_ID.CONTACT,
      component: ContactLayout,
      children: [
        {
          path: "",
          name: DRAWER_ID.CONTACT,
          component: ContactChild,
        },
      ],
    },
    {
      path: PATH.CAREER,
      name: DRAWER_ID.CAREER,
      component: CareerLayout,
      children: [
        {
          path: "",
          name: DRAWER_ID.CAREER,
          component: CareerChild,
        },
      ],
    },
  ],
});

export default router;
