<template>

  <h2>LIFECYCLE HOOKS</h2>
  <!-- When click on this button child component will be toggled hence undergoes unmounting phase and parent goes to updating phase -->
  <button @click="showChild = !showChild">Toggle Child</button>
  <Child v-if="showChild"/>

</template>

<script>
import Child from './28-Child.vue'
export default {
  name: 'LIFECYCLE HOOKS',
  data() {
    return {
      showChild: true
    }
  },
  components: {
    Child
  },
  beforeCreate() {
    console.log('Parent beforeCreate()')
  },
  created() {
    console.log('Parent created()')
  },
  beforeMount() {
    console.log('Parent beforeMount()')
  },
  mounted() {
    console.log('Parent mounted()')
  },
  beforeUpdate() {
    console.log('Parent beforeUpdate()')
  },
  updated() {
    console.log('Parent updated()')
  },
  beforeUnmount() {
    console.log('Parent beforeUnmount()')
  },
  unmounted() {
    console.log('Parent unmounted()')
  }
}
</script>

<!-- 

A vue component can go through 4 phases :: 

1. CREATION => This is the 1st phase execute when component is about to be created or before anything is rendered or mounted to the DOM, In this phase we have 2 methods ::

 (a). beforeCreate() => Execute just after the component's instance is created but before any of data, computed properties, methods, watchers is set up. Rarely used but useful for early setup  

 (b). created() => Execute after data, computed properties, methods and watchers are set up and ready for use but before DOM is mounted. Good place of API calls or initial logic that requires component options 

2. MOUNTING => This is the 2nd phase execute when component's <template> that is its HTML is mounted on the DOM, In this phase we have 2 methods ::

 (a). beforeMount() => Execute before component is mounted to the DOM, It is rarely used

 (b). mounted() => Execute after dom is mounted and rendered on the DOM. Good place of DOM access, manupulation as they are available.

3. UPDATING => This is the phase execute when component's reactive data, computed properties changes leading to a re-render, In this phase we have 2 methods ::

 (a). beforeUpdate() => Execute when component's reactive state changes but before changed to the DOM is patched or applied. Useful for checking old vs new data or accessing the existing DOM before an update and remove event listeners from them. 

 (b). updated() => Execute after DOM has been patched with new reactive state of the component. Useful for making API call related to reactive state of component as they have now changed.

4. UNMOUNTING => This is the final phase execute when component is being removed fro the DOM, In this phase we have 2 methods ::

 (a). beforeUnmount() => Execute just before DOM teardown begins. Perfect place to perform cleanup actions like removing event-listeners, invalidating setimout or setinterval and cancelling any API request

 (b). unmounted() => Execute after the component is destroyed. Useful for final cleanup actions.

Lifecycle hooks are methods that allow us to hook into or tap into these different phases of a component and execute some code. 

There are total 13 lifecycle hooks in vue but we will use only few 8 of them. The others 5 are ::

 (a). activated() => Related to <keep-alive> component of vue when working with DYNAMIC COMPONENT and execute when component wrapped in <keep-alive> is activated again. USeful to re-run logic when a cached component becomes visible / active again without remounting.

 (b). deactivated() => Again related to <keep-alive> component of vue when working with DYNAMIC COMPONENT and execute when component wrapped in <keep-alive> is deactivated. Useful for clean up intervals, listeners, cancel api calls etc when component is hidden.

 (c). errorCaptured() => Kind of simiar to ERROR BOUNDARY OF REACT but it will execute when a child component throws an error this hook will be called in parent component and propogate until find any errorCaptured() defination. Useful as it acts like try-catch for component trees where we can show fallback UI when error appears.

 (d). renderTracked() => Execute when a reactive state is being tracked during rendering, Useful for debugging purpose to see which reactive state / props are being tracked. It shows what data is being observed in the <template>

 (e). renderTriggered() => Execute when a reactive state changes causing the component to re-render. Useful to shows what data changed, causing a re-render.

All of these lifecycle hooks can be defined as method in component defination object as a part of OPTIONS API. 

-->