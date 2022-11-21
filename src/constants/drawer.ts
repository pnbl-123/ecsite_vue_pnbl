import { ROLE } from "./global";
import PATH from "./path";

const DRAWER_ID = {
  BASE: "base",
  LOGIN: "login",
  ABOUT: "about",
  SERVICES: "services",
  NEWS: "news",
  CASE_STUDIES: "case-studies",
  CONTACT: "contact",
  CAREER: "career",
};

const MENU_LIST = [
  {
    id: DRAWER_ID.BASE,
    name: "home",
    path: PATH.BASE,
    allowed: [ROLE.ADMIN, ROLE.GUEST],
  },
  {
    id: DRAWER_ID.LOGIN,
    name: "login",
    path: PATH.LOGIN,
    allowed: [ROLE.ADMIN, ROLE.GUEST],
  },
  {
    id: DRAWER_ID.ABOUT,
    name: "about",
    path: PATH.ABOUT,
    allowed: [ROLE.ADMIN, ROLE.GUEST],
  },
  {
    id: DRAWER_ID.SERVICES,
    name: "services",
    path: PATH.SERVICES,
    allowed: [ROLE.ADMIN, ROLE.GUEST],
  },
  {
    id: DRAWER_ID.NEWS,
    name: "news",
    path: PATH.NEWS,
    allowed: [ROLE.ADMIN, ROLE.GUEST],
  },
  {
    id: DRAWER_ID.CASE_STUDIES,
    name: "case_studies",
    path: PATH.CASE_STUDIES,
    allowed: [ROLE.ADMIN, ROLE.GUEST],
  },
  {
    id: DRAWER_ID.CONTACT,
    name: "contact",
    path: PATH.CONTACT,
    allowed: [ROLE.ADMIN, ROLE.GUEST],
  },
  {
    id: DRAWER_ID.CAREER,
    name: "career",
    path: PATH.CAREER,
    allowed: [ROLE.ADMIN, ROLE.GUEST],
  },
];
export { DRAWER_ID, MENU_LIST };
