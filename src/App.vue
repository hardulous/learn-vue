<template>

  <!-- DATA BINDING -->
  <!-- <BindingData/> -->

  <!-- CONDITIONAL RENDERING -->
  <!-- <ConditionalRendering/> -->

  <!-- LIST RENDERING -->
  <!-- <ListRendering/> -->

  <!-- METHODS -->
  <!-- <MethodsAndEvents /> -->

  <!-- FORM HANDLING -->
  <!-- <FormHandling/> -->

  <!-- MODIFIERS -->
  <!-- <Modifiers/> -->
  
  <!-- COMPUTED PROPERTIES -->
  <!-- <ComputedProperties/> -->

  <!-- WATCHER -->
  <Watcher/>

</template>

<script>
// import BindingData from './components/1-Binding Data.vue'
// import ConditionalRendering from './components/2-Conditional Rendering.vue'
// import ListRendering from './components/3-List Rendering.vue';
// import MethodsAndEvents from './components/4-Methods And Events.vue';
// import FormHandling from './components/5-Form Handling.vue';
// import Modifiers from './components/6-Modifiers.vue';
// import ComputedProperties from './components/7-Computed Properties.vue';
import Watcher from './components/8-Watcher.vue';

export default {
  name: 'App',
  components: {
    // BindingData,
    // ConditionalRendering,
    // ListRendering,
    // MethodsAndEvents,
    // FormHandling,
    // Modifiers,
    // ComputedProperties,
    Watcher
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<!-- 

In vue js a file with extension ".vue" is a Single File Component (SFC) that encapsulates the template, logic, and styles for a Vue component in one file. Or we can say it is a file where we can specify html, css and js corresponding to a portion of the ui.  

-->
