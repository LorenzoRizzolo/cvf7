<svelte:head>
  <title>Lorenzo Rizzolo - Web Developer</title>
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
      <BlockTitle><Icon material="person"/> Chi è un Web Developer ?</BlockTitle>
      Un Web Develper è uno sviluppatore di siti online che realizza pagine web in grado di fornire informazioni agli utenti che visualizzano le pagine. <br>
      Esistono diverse tipologie di web developer e di progetti realizzabili.
    </Block>

    <Block strong inset class="web_info">
      <BlockTitle><Icon material="person"/> Di cosa mi occupo ?</BlockTitle>
      In particolare la mia attività mira alla realizzazione di gestionali, completamente online, per aziende o attività professionali. Realizziamo anche siti di 
      presentazione come Curriculum, presentazione di un'azienda o di un negozio.
    </Block>

  </Block>

  <Block strong inset> <h2><Icon material="language"/> Tipologie di Siti Web</h2></Block>
  <Block class={f7.device.desktop ? "grid grid-cols-2 grid-gap": ""}>

    <Block strong inset class="web_info">
      <BlockTitle>Web Application</BlockTitle>
      Le Web Application sono delle vere e proprie applicazioni, installabili anche sui dispositivi mobili, in grado di gesitre dei dati, archiviarli e mantenerli.
      <br> Per Web Application si intendono dei veri e propri siti web, ma che hanno funzioni intelligenti e complesse. 
      <br> Molti dei progetti qui sotto sono Web Application.
    </Block>

    <Block strong inset class="web_info">
      <BlockTitle>Statici</BlockTitle>
      Un sito web statico è composto una o più pagine di presentazione, come può essere questo cv oppure altri siti che hanno solo scopo informativo per 
      l'utente.
    </Block>

  </Block>

  <Block strong inset> <h2><Icon material="construction"/> Progetti realizzati</h2></Block>
  <Block class={f7.device.desktop ? "grid grid-cols-2 grid-gap": ""}>
    {#each progetti as p}
      <Block strong inset class="web_info">
        <h3><Icon material="construction"/> {p.titolo}</h3>
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
    Icon,
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