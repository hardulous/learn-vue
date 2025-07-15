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
  <!-- <ProvideAndInject/> -->

  <!-- CUSTOM COMPONENT EVENTS -->
  <!-- <CustomComponent/> -->

  <!-- CUSTOM COMPONENT WITH V-MODEL -->
  <!-- <CustomComponentVModel v-model="name" v-model:channel="channel" v-model:age="age"/> -->

  <!-- SLOTS -->
  <!-- <Slots>
    Hello This Is Me
  </Slots>
  <Slots>
    <button>Hello This Is Me</button>
  </Slots>
  <Slots/> -->

  <!-- Now to mention which value parent is sending to which slot we use name prop of slot in v-slot directive (But v-slot can be used in <template> and custom component only)  -->
  <!-- <Slots>
    <template v-slot:header>
      <h2>Header</h2>
    </template>
<template v-slot:default>Multipe Slots</template>
<template v-slot:footer>
      <h2>Footer</h2>
    </template>
</Slots> -->

  <!-- SLOTS PROPS -->
  <!-- <SlotsProps/> -->
  <!-- Here slots props can be obtained on template tag and to connect it with slot which is exposing slot props we use 'v-slot' directive and right hand side of this directive will give us slot prop value -->
  <!-- <SlotsProps>
    <template v-slot:default="slotProps">
      {{ slotProps.firstName }} {{ slotProps.lastName }}
    </template>
  </SlotsProps>
  <SlotsProps>
    <template v-slot:default="slotProps">
      {{ slotProps.lastName }} {{ slotProps.firstName }}
    </template>
  </SlotsProps>
  <SlotsProps>
    <template v-slot:default="slotProps">
      {{ slotProps.firstName }}
    </template>
  </SlotsProps> -->

  <!-- COMPONENT STYLE -->
  <!-- <h4>APP STYLE COMPONENT</h4>
  <ComponentStyles>
    <h4>Hello Slot</h4>
  </ComponentStyles> -->

  <!-- DYNAMIC COMPONENT -->
  <!-- <DynamicComponent/> -->

  <!-- TELEPORT COMPONENT -->
  <!-- <TeleportComponent /> -->

  <!-- HTTP REQUEST -->
  <!-- <HttpRequest/> -->

  <!-- LIFECYCLE HOOKS -->
  <!-- <LifeCycleHooks/> -->

  <!-- TEMPLATE REFS -->
  <!-- <TemplateRef /> -->

  <!-- MIXINS -->
  <!-- <Mixins /> -->

  <!-- COMPOSITION API -->
  <!-- REF -->
  <Ref/>


</template>

<script>
// import BindingData from './components/Options Api/1-Binding Data.vue'
// import ConditionalRendering from './components/Options Api/2-Conditional Rendering.vue'
// import ListRendering from './components/Options Api/3-List Rendering.vue';
// import MethodsAndEvents from './components/Options Api/4-Methods And Events.vue';
// import FormHandling from './components/Options Api/5-Form Handling.vue';
// import Modifiers from './components/Options Api/6-Modifiers.vue';
// import ComputedProperties from './components/Options Api/7-Computed Properties.vue';
// import Watcher from './components/Options Api/8-Watcher.vue';
// import Greet from './components/Options Api/9-Greet.vue';
// import NonPropAttribute from './components/Options Api/10-Non Props Attribute.vue'
// import ProvideAndInject from './components/Options Api/11-Provide And Inject.vue'
// import CustomComponent from './components/Options Api/15-Component Events.vue'
// import CustomComponentVModel from './components/Options Api/17-Custom Component V-Model.vue'
// import Slots from './components/Options Api/18-Slots.vue'
// import SlotsProps from './components/Options Api/19-Slot Props.vue'
// import ComponentStyles from './components/Options Api/20-Component Styles.vue'
// import DynamicComponent from './components/Options Api/21-Dynamic Component.vue'
// import TeleportComponent from './components/Options Api/25-Teleport Component.vue'
// import HttpRequest from './components/Options Api/26-Http Request.vue'
// import LifeCycleHooks from './components/Options Api/27-Lifecycle Hooks.vue'
// import TemplateRef from './components/Options Api/29-Template Refs.vue'
// import Mixins from './components/Options Api/30-Mixins.vue'
import Ref from './components/Composition Api/1-Ref.vue';
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
    // ProvideAndInject,
    // CustomComponent,
    // CustomComponentVModel,
    // Slots,
    // SlotsProps,
    // ComponentStyles,
    // DynamicComponent,
    // TeleportComponent,
    // HttpRequest,
    // LifeCycleHooks,
    // TemplateRef,
    // Mixins,
    Ref
  },
  data() {
    return {
      name: 'Banty',
      channel: 'Mountain Men',
      age: 25
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

/* Since it is a global style so this h4 style will be applied globally on application on every h4 tag  
 */
h4 {
  color: orange
}
</style>


<!-- 

In vue js a file with extension ".vue" is a Single File Component (SFC) that encapsulates the template, logic, and styles for a Vue component in one file. Or we can say it is a file where we can specify html, css and js corresponding to a portion of the ui.  

Here in order to register a component we use 'component' property of options api.  

Just like in react components props can be used or passed in vue components as well. 

Here we can also pass dynamic value that is data or computed properties as prop not only static value as props. Using 'v-bind' directive.

To pass js value as a prop passed them using 'v-bind' syntax ':prop-name:"js value to pass"', unlike in react we pass js value as props using 'props-name={js value}'.

Here v-model directive for 2 way data binding can be used with custom component not only with native html input tag. 

We can also bind multiple v-models to a component by using the 'v-model:propName' or 'update:propName' syntax for value and event emitted respectively.

Sometime we need to work with multiple slots by which parent decide multiple ui part of child component for this we use NAMED SLOTS. ex Layout component of application deciding where to place header, sidenav, footer and main content of app. 

Here sometime we want to pass data from a child component to the parent via a slot, For this we can use a scoped slot (also called slot props). This allows the child to expose internal data (called slot props) to the parent, and the parent can access and use that data inside its slot content

Here css in vue is similar to in react global, local and module based.

-->
