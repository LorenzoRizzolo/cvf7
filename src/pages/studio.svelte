<svelte:head>
  <title>Lorenzo Rizzolo - Studio</title>
</svelte:head>

<Page name="home">
  <!-- Top Navbar -->
  <Navbar>
    <NavLeft>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
    </NavLeft>
    <NavTitle>Titoli di studio</NavTitle>
  </Navbar>

  {#if !f7.device.desktop}
    <Block inset>
      <div class="center"><img src="/images/person_image.jpeg" alt=""></div>
    </Block>
  {/if}

  {#each percorsi.reverse() as p}
    <Block strong inset>
      <div class="percorso">
        <div class={"icon "+(p.finito?"tgreen":"tred")}><Icon material="schedule"/></div>
        <div>
          {p.finito?"Compleatato nel "+p.data:"Da completare"} <br>
          <Icon material={p.icon}/> {p.titolo}
        </div>
      </div>
    </Block>
  {/each}


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
    Toolbar,
    Icon,
    Block,
    BlockTitle,
    List,
    ListItem,
    Button,
    f7
  } from 'framework7-svelte';
  let percorsi = [
    {
      titolo:"Diploma terza media",
      data:"2019",
      icon:"school",
      finito:true
    },
    {
      titolo:"Diploma in Informatica",
      data:"2024",
      icon:"school",
      finito:true
    },
    {
      titolo:"Sviluppo di un gestionale per gli operai per RizzoloEnertech s.r.l.",
      data:"2024",
      icon:"construction",
      finito:true
    },
    {
      titolo:"Sviluppo di un gestionale per i documenti per RizzoloEnertech s.r.l.",
      data:"2024",
      icon:"construction",
      finito:true
    },
    {
      titolo:"Laurea in informatica",
      data:"",
      icon:"school",
      finito:false
    }
  ]
</script>

<style>
  .percorso{
    display: flex;
    align-items: center;
  }
  .percorso > div{
    margin-right: 10px;
  }
</style>