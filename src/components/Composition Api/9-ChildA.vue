<template>
  
  <h2>CHILD A - {{ userName }}</h2>
  <ChildB/>
  
</template>

<script>
import { inject, provide } from 'vue';
import ChildB from './10-ChildB.vue'
export default {
    name: 'Child A',
    components:{
      ChildB
    },
    setup(){

      const userName = inject('username', 'Unknown') // Allows a descendant component to access a 'username' provided by an ancestor and if no value is provided then use default value of 'Unknown'

      // A component can be both provider and injector
      provide('username', 'Acey Charusia')
      
      return {
        userName
      }
    }
}
</script>

<!-- 



-->