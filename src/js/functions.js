export function UpdateUrl(page){
    let url = window.location.href
    let sp = url.split("#")
    if(sp.length>1){
      sp[1] = page
      history.pushState(null, '', sp.join("#"));
    }else{
      history.pushState(null, '', url+"#"+page);
    }
  }