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
  <!-- <Watcher/> -->

  <!-- COMPONENT -->
  <!-- <Greet/> -->

  <!-- COMPONENT PROPS -->
  <!-- <Greet name="Aman Bisht" heroName="Batman" />
  <Greet name="Mayank Tanwar" heroName="Punisher" />
  <Greet name="Tarun Sharma" hero-name="Muse" /> -->
  <!-- DYNAMIC PROPS -->
  <!-- <Greet :name="name" />
  <Greet :name="name" :hero-name="'SpiderMan'" :isPublished="true"/> -->

  <!-- NON-PROP ATTRIBUTE -->
  <!-- <NonPropAttribute name="Aman Bisht" :age="23" id="Non-Prop" data-test="Test" :style="{color:'red'}"/> -->

  <!-- PROVIDE AND INJECT -->
  <ProvideAndInject/>

</template>

<script>
// import BindingData from './components/1-Binding Data.vue'
// import ConditionalRendering from './components/2-Conditional Rendering.vue'
// import ListRendering from './components/3-List Rendering.vue';
// import MethodsAndEvents from './components/4-Methods And Events.vue';
// import FormHandling from './components/5-Form Handling.vue';
// import Modifiers from './components/6-Modifiers.vue';
// import ComputedProperties from './components/7-Computed Properties.vue';
// import Watcher from './components/8-Watcher.vue';
// import Greet from './components/9-Greet.vue';
// import NonPropAttribute from './components/10-Non Props Attribute.vue'
import ProvideAndInject from './components/11-Provide And Inject.vue'
export default {
  name: 'App',

  // For registering child component 
  components: {
    // BindingData,
    // ConditionalRendering,
    // ListRendering,
    // MethodsAndEvents,
    // FormHandling,
    // Modifiers,
    // ComputedProperties,
    // Watcher,
    // Greet        // local registering a component for use in <template>
    // NonPropAttribute,
    ProvideAndInject
  },
  data() {
    return {
      name: 'Banty',
      channel: 'Mountain Men'
    }
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

Here in order to register a component we use 'component' property of options api.  

Just like in react components props can be used or passed in vue components as well. 

Here we can also pass dynamic value that is data or computed properties as prop not only static value as props. Using 'v-bind' directive.

To pass js value as a prop passed them using 'v-bind' syntax ':prop-name:"js value to pass"', unlike in react we pass js value as props using 'props-name={js value}'.





-->
