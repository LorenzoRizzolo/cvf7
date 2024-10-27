
import HomePage from '../pages/home.svelte';
import NotFoundPage from '../pages/404.svelte';
// web dev
import WebDev from "../pages/web_dev.svelte"
// studio
import Studio from "../pages/studio.svelte"
import { Icon } from 'framework7-svelte';

var routes = [
  {
    path: '/',
    component: HomePage,
    name:"Home Page",
    icon:"home",
    visible:true
  },
  {
    path: '/web_dev/',
    component: WebDev,
    name:"Web Developer",
    icon:"language",
    visible:true
  },
  {
    path: '/studio/',
    component: Studio,
    name:"Studio",
    icon:"school",
    visible: true
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
