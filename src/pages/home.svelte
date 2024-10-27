<svelte:head>
  <title>Nome Cognome</title>
</svelte:head>

<Page name="home">
  <!-- Top Navbar -->
  <Navbar>
    <NavLeft>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
    </NavLeft>
    <NavTitle>Home Page</NavTitle>
  </Navbar>

  <Block inset>
    <div class="center_mobile"><img src="/images/common_user.png" alt=""></div>
  </Block>

  <Block strong inset> Nome Cognome</Block>
  <Block strong inset> Email</Block>
  <Block strong inset> Telefono</Block>
  <Block strong inset> Link1</Block>
  <Block strong inset> Link2</Block>

  <div>
    <Block strong inset>
      <h1>Attivita 2</h1>
      
    </Block>
  </div>

  <div>
    <Block strong inset>
      <h1>Attivita 3</h1>
    </Block>
  </div>

  <div>
    <Block strong inset>
      <h1>Attivita 4</h1>
    </Block>
  </div>
  
</Page>

<script>
  import { onMount } from 'svelte';
  import { UpdateUrl } from '../js/functions';
  import AOS from 'aos';
  // import 'aos/dist/aos.css'; 

  import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    Button,
    Link,
    Block
  } from 'framework7-svelte';

  onMount(() => {
    AOS.init();
  });
</script>

<style>
  img {
    width: 200px;
  }
</style>
