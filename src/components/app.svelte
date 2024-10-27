<App { ...f7params }>

  <!-- Left panel with cover effect when hidden -->
  <!-- <Panel left reveal dark visibleBreakpoint={960}>
    <View>
      <Page>
        <Navbar title="Left Panel"/>
        <BlockTitle>Left View Navigation</BlockTitle>
        <List>
          <ListItem link="/left-page-1/" title="Left Page 1"/>
          <ListItem link="/left-page-2/" title="Left Page 2"/>
        </List>
        <BlockTitle>Control Main View</BlockTitle>
        <List>
          <ListItem link="/about/" view=".view-main" panelClose title="About"/>
          <ListItem link="/form/" view=".view-main" panelClose title="Form"/>
          <ListItem link="#" view=".view-main" back panelClose title="Back in history"/>
        </List>
      </Page>
    </View>
  </Panel> -->

  <MenuPanel/>
  
  <!-- Your main view, should have "view-main" class -->
  <View main class="safe-areas" url="/" />

</App>
<script>
  import { onMount } from 'svelte';

  import {
    f7,
    f7ready,
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    BlockTitle,
    List,
    ListItem
  } from 'framework7-svelte';

  import MenuPanel from './panel.svelte';

  import routes from '../js/routes';
  import store from '../js/store';

  // Framework7 Parameters
  let f7params = {
    name: 'CVF7', // App name
    theme: 'md', // Automatic theme detection
    colors: {
      primary: '#00ff0b',
    },
    darkMode: true,

    // App store
    store: store,
    // App routes
    routes: routes,
  };

  onMount(() => {
    f7ready(() => {


      // Call F7 APIs here
    });
    // vai al link da esterno
    let url = window.location.href
    let s = url.split("#")
    console.log(s.length)
    let page = s.length!=1 ? "/"+url.split("/").at(-2)+"/" : "/"
    f7.views.main.router.navigate(page)
  })

</script>