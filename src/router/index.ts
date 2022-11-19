import { DRAWER_ID } from "@/constants/drawer";
import PATH from "@/constants/path";
import { createRouter, createWebHistory } from "vue-router";
const lazyLoad = (view: String) => {
  return import(`@/views/${view}/LayoutView.vue`);
};
const lazyLoadChild = (view: String, child: String) => {
  return import(`@/views/${view}/${child}.vue`);
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: PATH.BASE,
      name: DRAWER_ID.BASE,
      component: lazyLoad("HomeView"),
      children: [
        {
          path: "",
          component: lazyLoadChild("HomeView", "HomeView"),
        },
      ],
    },
    {
      path: PATH.ABOUT,
      name: DRAWER_ID.ABOUT,
      component: lazyLoad("AboutView"),
      children: [
        {
          path: "",
          component: lazyLoadChild("AboutView", "AboutView"),
        },
      ],
    },
    {
      path: PATH.SERVICES,
      name: DRAWER_ID.SERVICES,
      component: lazyLoad("ServicesView"),
      children: [
        {
          path: "",
          component: lazyLoadChild("ServicesView", "ServicesView"),
        },
      ],
    },
    {
      path: PATH.NEWS,
      name: DRAWER_ID.NEWS,
      component: lazyLoad("NewsView"),
      children: [
        {
          path: "",
          component: lazyLoadChild("NewsView", "NewsView"),
        },
      ],
    },
    {
      path: PATH.CASE_STUDIES,
      name: DRAWER_ID.CASE_STUDIES,
      component: lazyLoad("CaseStudiesView"),
      children: [
        {
          path: "",
          component: lazyLoadChild("CaseStudiesView", "CaseStudiesView"),
        },
      ],
    },
    {
      path: PATH.CONTACT,
      name: DRAWER_ID.CONTACT,
      component: lazyLoad("ContactView"),
      children: [
        {
          path: "",
          component: lazyLoadChild("ContactView", "ContactView"),
        },
      ],
    },
    {
      path: PATH.CAREER,
      name: DRAWER_ID.CAREER,
      component: lazyLoad("CareerView"),
      children: [
        {
          path: "",
          component: lazyLoadChild("CareerView", "CareerView"),
        },
      ],
    },
  ],
});

export default router;
