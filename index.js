export function initCrunch() {
  console.log('initCrunch called!');
  
  window.addEventListener("load", (event) => { 
    console.log('page loaded and cookies crunched!');
    //crunch will be called here and in other eventListeners
  });

  addEventListener("unload", (event) => { 
    console.log('window unloaded and cookies crunched!');
  })
}