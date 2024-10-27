
import HomePage from '../pages/home.svelte';
import NotFoundPage from '../pages/404.svelte';
// web dev
import WebDev from "../pages/web_dev.svelte"
// studio
import Studio from "../pages/studio.svelte"

var routes = [
  {
    path: '/',
    component: HomePage,
    name:"Home Page",
    visible:true
  },
  {
    path: '/web_dev/',
    component: WebDev,
    name:"Web Developer",
    visible:true
  },
  {
    path: '/studio/',
    component: Studio,
    name:"Studio",
    visible: true
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
