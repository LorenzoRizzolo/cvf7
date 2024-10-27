<script>
  import { onMount } from 'svelte';
  import {
    f7,
    f7ready,
    App,
    Panel,
    View,
    Page,
    Navbar,
    BlockTitle,
    List,
    ListItem
  } from 'framework7-svelte';
  import MenuPanel from './panel.svelte'; // Assicurati che questo file esista
  import routes from '../js/routes'; // Assicurati che questo file esista
  import store from '../js/store'; // Assicurati che questo file esista

  import { AOS } from 'aos';

  // Framework7 Parameters
  let f7params = {
    name: 'CVF7', // App name
    theme: 'md', // Automatic theme detection
    colors: {
      primary: '#00ff0b',
    },
    // darkMode: true,
    store: store, // App store
    routes: routes, // App routes
  };

  onMount(() => {
    f7ready(() => {
      // Eventuali API Framework7 qui
    });

    // Naviga a una pagina specifica in base all'URL
    let url = window.location.href;
    let parts = url.split("#");
    let page = parts.length !== 1 ? "/" + url.split("/").at(-2) + "/" : "/";
    f7.views.main.router.navigate(page);
  });
</script>

<App {...f7params}>
  <!-- Left panel with cover effect when hidden -->
  <MenuPanel />
  
  <!-- Your main view, should have "view-main" class -->
  <View main class="safe-areas" url="/" />
</App>

<style>
  /* Stili personalizzati se necessari */
</style>
