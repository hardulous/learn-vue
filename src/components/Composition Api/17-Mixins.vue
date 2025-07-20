<template>
  
  <h2>MIXINS</h2>
  <ClickCounter/>
  <HoverCounter/>

</template>

<script>
import ClickCounter from './18-Click Counter.vue'
import HoverCounter from './19-Hover Counter.vue'
export default {
    name: 'MIXINS',
    components:{
        ClickCounter,
        HoverCounter
    }
}
</script>

<!-- 
    
The mixins have limitations like mixins are conflict prone because each properties of mixins are merged with component defination object which can override each other, We cannot pass any parameter to mixin to change its logic whihc reduces its flexibility in terms of logic abstraction. 

In the Composition API, traditional mixins (from the Options API) are generally not recommended — because the Composition API provides better modularity, clarity, and type safety through 'COMPOSABLES'. 

A composable is just a reusable functions or hooks that returns reactive state, methods, computed values, etc



-->