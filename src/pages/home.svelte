<svelte:head>
  <title>Lorenzo Rizzolo</title>
</svelte:head>

<Page name="home">
  <!-- Top Navbar -->
   
  <Navbar>
    <NavLeft>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
    </NavLeft>
    <NavTitle>{f7.device.desktop ? "Home page" : "Lorenzo Rizzolo" }</NavTitle>
  </Navbar>

  {#if !f7.device.desktop}
    <Block inset>
      <div class="center"><img src="/images/person_image.jpeg" alt=""></div>
    </Block>
  {/if}

  <Block class={f7.device.desktop ? "grid grid-cols-2 grid-gap": ""}>
    <Block strong inset><Icon material="account_circle"/> Lorenzo Rizzolo <div></div></Block>
    <Block strong inset ><Icon material="email"/> 
      lorenzorizzolo@rizzolo.cloud
      <Button class="small"
        on:click={()=>{
          var copyText = "lorenzorizzolo@rizzolo.cloud";
          navigator.clipboard.writeText(copyText);
          let t = f7.toast.create({
            text: "Ho copiato la email nei tuoi appunti",
            icon:'<i class="material-icons">check</i>',
            position: 'center',
            closeTimeout: 3000,
          }); t.open();
        }}>Copia
      </Button>
    </Block>
  </Block>

  <Block class={f7.device.desktop ? "grid grid-cols-2 grid-gap": ""}>
    <Block strong inset><Icon material="phone"/> 
      +39 3465133790
      <Button class="small"
        on:click={()=>{
          var copyText = "+39 3465133790";
          navigator.clipboard.writeText(copyText);
          let t = f7.toast.create({
            text: "Ho copiato il numero di telefono negli appunti",
            icon:'<i class="material-icons">check</i>',
            position: 'center',
            closeTimeout: 3000,
          }); t.open();
        }}>Copia
      </Button>
    </Block>
    <Block strong inset><Icon material="link"/> <a href="https://it.linkedin.com/in/lorenzo-rizzolo-4187a0224" target="_blank" rel="noopener noreferrer">Linkedin</a> <div></div></Block>  
  </Block>

  <div>
  </div>

  <Block class={f7.device.desktop ? "grid grid-cols-2 grid-gap": ""}>

    <Block strong inset class='activity'>
      <h1>Web Developer</h1>
      <div>
        Mi occupo di sviluppare e progettare siti web di presentazione per aziende e personali. 
        Un sito web automenta la professionalità della tua attività e ti permette di essere più visibile online.
      </div>
      <br><Button tonal class="small" on:click={()=>{
        f7.views.main.router.navigate("/web_dev/");
        UpdateUrl("/web_dev/")
        }}>Leggi di più</Button>
    </Block>

    <Block strong inset class='activity'>
      <h1>Studio</h1>
      <br><Button tonal class="small" on:click={()=>{
        f7.views.main.router.navigate("/studio/");
        UpdateUrl("/studio/")
        }}>Leggi di più</Button>
    </Block>

  </Block>

  <div>
    
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
    Icon,
    NavLeft,
    NavTitle,
    Button,
    Link,
    Block,
    f7
  } from 'framework7-svelte';

  onMount(() => {
    AOS.init();
  });
</script>

