
<Panel left cover reveal visibleBreakpoint={960}>
    <View>
      <Page>
        <Navbar title="Nome Cognome">
        </Navbar>

        <List>

            {#each routes as r}
              {#if r.visible}
                <ListItem tabLink link={r.path} on:click={()=>{
                  let url = window.location.href
                  let sp = url.split("#")
                  if(sp.length>1){
                    sp[1] = r.path
                    history.pushState(null, '', sp.join("#"));
                  }else{
                    history.pushState(null, '', url+"#"+r.path);
                  }
                }} view=".view-main" panelClose>
                  <div class="item-title">
                    <Icon material={r.icon}/> 
                    {r.name}
                  </div>
                </ListItem>
              {/if}
            {/each}

        </List>
      </Page>
    </View>
  </Panel>


  <script>
    import {
    Panel,
    View,
    Page,
    Navbar,
    Link,
    Block,
    Icon,
    List,
    ListItem,
    f7
  } from 'framework7-svelte';

  import routes from '../js/routes';

</script>