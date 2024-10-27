<svelte:head>
  <title>Web Developer</title>
</svelte:head>

<Page>
  <Navbar>
    <NavLeft >
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
    </NavLeft>
    <NavTitle>Web Developer</NavTitle>
  </Navbar>

  {#if !f7.device.desktop}
    <Block inset>
      <div class="center"><img src="/images/person_image.jpeg" alt=""></div>
    </Block>
  {/if}

  <Block class={f7.device.desktop ? "grid grid-cols-2 grid-gap": ""}>

    <Block strong inset class="web_info">
      <BlockTitle>Chi è un Web Developer ?</BlockTitle>
      Un Web Develper è uno sviluppatore di siti online che fornisce esperienze interattive agli utenti e 
      fornisce delle informazioni agli utenti che visualizzano la pagina
    </Block>

    <Block strong inset class="web_info">
      <BlockTitle>Di cosa mi occupo ?</BlockTitle>
    </Block>

  </Block>


</Page>
<script>
  import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Icon,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Button,
    f7
  } from 'framework7-svelte';
</script>