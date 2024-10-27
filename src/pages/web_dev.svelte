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
      Un Web Develper è uno sviluppatore di siti online che realizza pagine web in grado di fornire informazioni agli utenti che visualizzano le pagine. <br>
      Esistono diverse tipologie di web developer e di progetti realizzabili.
    </Block>

    <Block strong inset class="web_info">
      <BlockTitle>Di cosa mi occupo ?</BlockTitle>
      In particolare la mia attività mira alla realizzazione di gestionali, completamente online, per aziende o attività professionali. Realizziamo anche siti di 
      presentazione come Curriculum, presentazione di un'azienda o di un negozio.
    </Block>

  </Block>

  <Block strong inset> <h2>Progetti realizzati</h2></Block>

  <Block class={f7.device.desktop ? "grid grid-cols-2 grid-gap": ""}>
    {#each progetti as p}
      <Block strong inset class="web_info">
        <h3>{p.titolo}</h3>
        {p.desc}
        <br>Tempo di realizzazione: <span class="tempo">{p.tempo_h} H</span>
        <br><Link target="_blank" noLinkClass external={true} href={p.link}>{p.link}</Link>
      </Block>
    {/each}
  </Block>


</Page>
<script>
  import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    Link,
    Block,
    BlockTitle,
    f7
  } from 'framework7-svelte';
  let progetti = [
    {
      titolo:"FileHub",
      desc:"FileHub è un gestionale online che ti permette l'archiviazione organizzata di documenti per privati e aziende.",
      tempo_h:"00",
      link:"https://filehub.rizzolo.cloud"
    },
    {
      titolo:"DocStore",
      desc:"Gestionale online che ti permette l'archiviazione organizzata di documenti per le aziende, ideato per gli impianti elettrici secondo le norme del DM37/08.",
      tempo_h:"00",
      link:"https://docstore.rizzoloimpianti.it"
    },
    {
      titolo:"NodePages",
      desc:"Ispirato ad Apple Pages è un applicazione web per prendere appunti e gestire le note.",
      tempo_h:"00",
      link:"https://nodepages.com"
    },
    {
      titolo:"Global QrCode",
      desc:"Applicazione web per la generazione di QrCode online associabili a foto, video e link.",
      tempo_h:"00",
      link:"https://qrcode.rizzolo.cloud"
    }
  ]
</script>

<style>
  h3{
    margin: 0;
    color: rgb(42, 159, 255);
  }
  .tempo{
    color: orange;
  }
</style>