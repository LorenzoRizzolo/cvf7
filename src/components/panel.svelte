
<Panel left cover reveal visibleBreakpoint={960}>
    <View>
      <Page>
        <Navbar title="Nome Cognome">
        </Navbar>

        <List>

            {#each routes as r}
              {#if r.visible}
                <ListItem tabLink link={r.path} on:click={()=>{
                    history.pushState(null, '', r.path);
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
    ListItem
  } from 'framework7-svelte';

  import routes from '../js/routes';

</script>