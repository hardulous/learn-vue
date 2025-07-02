import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')  // Here creating vue application instance from root component App and mounting it in html element with id app

/*

1. This is the entry point of vue js application similar to in react we have index.js file

2. Similar to in react we need a div element ( id="root" in case of react) in which we mount our whole react application, In vue also in index.html we have div ( id="app" ) where we mount of whole vue application. For this we have ::

 (a). createApp(rootComponent) => It is used to create a Vue application instance. The object we are passing into createApp is in fact a component. Every app requires a "root component" that can contain other components as its children.
 An application instance won't render anything until its ".mount()" method is called. It expects a "container" argument, which can either be an actual DOM element or a selector string in which our vue application will get mounted on

3. 

 */