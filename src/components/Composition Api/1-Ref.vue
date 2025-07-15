<template>
  
  <h2>COMPOSITION API REF</h2>
  <h3>OPTION API NAME - {{ o_firstName }}</h3>
  <h3>COMPOSITION API NAME - {{ c_firstName }}</h3>
</template>

<script>

// Have to import from vue
import {ref} from 'vue'

export default {
    name: 'REF',
    data(){
        return {
            o_firstName: 'Aman'
        }
    },
    // ENTRY POINT OF COMPOSITION API 
    setup(){
      const c_firstName = ref('Acey')
      console.log('c_firstName', c_firstName)
     // To make values available to <template> have to expose them manually by returning object     
      return {
        c_firstName
      }
    }
}
</script>

<!-- 

In Composition API, 'ref()' is used to create reactive references variables that automatically update the DOM and can be tracked for changes and similar to data property triggers re-render when changed. Similar to ref in react the vue's ref is mutable in nature so can store any type of value which is available in <script> using '.value' but don't need '.value' in the template as vue automatically unwraps it in templates. 
 
In order to use COMPOSITION API feature we pass 'setup()' function to component defination object which is entry point for COMPOSITION API. Features in COMPOSITION API also needed to be imported from vue 



-->
