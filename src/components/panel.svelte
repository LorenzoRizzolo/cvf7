
<Panel left cover reveal visibleBreakpoint={960}>
    <View>
      <Page>
        <Navbar>
          <NavTitle>Lorenzo Rizzolo</NavTitle>
        </Navbar>

        {#if f7.device.desktop}
          <div class="center">
            <img src="images/person_image.jpeg" alt="immagine">
          </div>
        {/if}

        <List strong inset>

            {#each routes as r}
              {#if r.visible}
                <ListItem tabLink link={r.path} on:click={()=>{UpdateUrl(r.path)}} view=".view-main" panelClose>
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
    NavTitle,
    Link,
    Block,
    Icon,
    List,
    ListItem,
    f7
  } from 'framework7-svelte';

  import routes from '../js/routes';
  import { UpdateUrl } from "../js/functions"

</script>

<style>
  img{
    width: 150px;
    margin-top: 30px;
    border-radius: 2000px;
  }
</style>