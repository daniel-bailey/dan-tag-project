export function initCrunch() {
  window.addEventListener("load", (event) => { 
    console.log('page loaded and cookies crunched!');
    //crunch will be called here and in other eventListeners
  });
}