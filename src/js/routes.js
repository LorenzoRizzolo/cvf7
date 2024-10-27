
import HomePage from '../pages/home.svelte';
import NotFoundPage from '../pages/404.svelte';
import Attivita1 from "../pages/attivita1.svelte"
import Attivita2 from "../pages/attivita2.svelte"
import Attivita3 from "../pages/attivita3.svelte"

var routes = [
  {
    path: '/',
    component: HomePage,
    name:"Home Page",
    visible:true
  },
  {
    path: '/a1/',
    component: Attivita1,
    name:"Attività 1",
    visible:true
  },
  {
    path: '/a2/',
    component: Attivita2,
    name:"Attività 2",
    visible: true
  },
  {
    path: '/a3/',
    component: Attivita3,
    name:"Attività 3",
    visible: true
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
