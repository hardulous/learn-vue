import { createApp } from 'vue'
// import App from './Learn Vue.vue'
// import App2 from './Learn Pinia.vue'
import App3 from './Learn Vue Router.vue'
import router from './components/Vue Router/router'
// import { createPinia } from 'pinia'

// createApp(App).mount('#app')  // Here creating vue application instance from root component App and mounting it in html element with id app

// const pinia = createPinia() // Creates a Pinia instance so pinia and its features can be used by the application

// createApp(App2).use(pinia).mount('#app')  // Here our app is using pinia library and mounted on DOM node with id app. 

createApp(App3).use(router).mount('#app') // Here our app is using vue-router library and mounted on DOM node with id app. 


/*  

Global Before Guards, Run before any route navigation is triggered. We can register it using 'router.beforeEach()'. 

If it returns false means cancel the current navigation. And if return a route location like like route or named route then redirect to it. And can call router.push() method for redirect as well. 

The calback function accept argument like :: 

 (a). to => The target / destination route object

 (b). from => The current / source route object 

 (c). next (Optional) => It is a callback function used to control the navigation flow. You call next() to either allow 'next()', redirect 'next('/login')', or cancel the navigation 'next(false)'. But call it only one time else get error.

It can be async as well . Perfect place to perform authentication, permission etc. 

*/

// router.beforeEach((to, from)=>{
//     console.log('Global beforeEach Called')
//     console.log('From', from)
//     console.log('To', to)

//     // Cancel the navigation result in nothing will be shown in <RouterView/> component 
//     // return false 

//     // Redirect to '/about' when user try to navigate to '/'
//     if(to.path === "/") router.push("/about")
// })

/*

Global Resolve Guards, Called after all beforeEach and in-component guards are resolved, but before final navigation is finalized

Perfect place to show loading spinner while guards are done resolving. 

*/

// router.beforeResolve((to, from)=>{
//     console.log('Global beforeResolve Called')
//     console.log('From', from)
//     console.log('To', to)
// })

/*

Global After Each Hook, Runs after navigation to destination route is completed. Unlike before guards this hook do not get a next() function and cannot affect the navigation. 

Useful for analytics, changing the title of the page etc. 

*/

// router.afterEach((to, from)=>{
//     console.log('Global After Hook Called')
//     console.log('From', from)
//     console.log('To', to)
// })

/*

1. This is the entry point of vue js application similar to in react we have index.js file

2. Similar to in react we need a div element ( id="root" in case of react) in which we mount our whole react application, In vue also in index.html we have div ( id="app" ) where we mount of whole vue application. For this we have ::

 (a). createApp(rootComponent) => It is used to create a Vue application instance. The object we are passing into createApp is in fact a component. Every app requires a "root component" that can contain other components as its children.
 An application instance won't render anything until its ".mount()" method is called. It expects a "container" argument, which can either be an actual DOM element or a selector string in which our vue application will get mounted on

3. The result of createApp() is the vue app instance which gives us control over registering global components, Adding plugins or mixins, Setting global properties etc. 

4. In vue.js we can have multiple app instance or multiple createApp() call. Each call to createApp() returns a completely independent Vue app which has its own state, Router, Plugins, Lifecycle etc. The same concept can be done in REACT'S 'createRoot()' method but in SPA should avoid it as it completly voilates the whole principal of SPA. 

5. In Vue.js, app.use() is a method used to apply installed plugins or libraries into your Vue application. It's part of the Vue 3 Application API. Similar to REACT'S PROVIDER COMPONENT. 

6. createPinia() is a method provided by the Pinia library in Vue 3 that creates a Pinia instance that sets up a global state manager that can be used throughout our app to Register and access multiple stores, Manage shared state, Support devtools, plugins, SSR, etc.


 */