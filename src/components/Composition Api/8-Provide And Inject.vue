<template>
  
  <h2>PROVIDE AND INJECT - {{ count }} {{ firstName }} {{ lastName }}</h2>
  <input type="text" v-model="count"/>
  <ChildA/>

</template>

<script>
import { provide, reactive, readonly, ref, toRefs } from 'vue';
import ChildA from './9-ChildA.vue';
export default {
    name: 'PROVIDE AND INJECT',
    components:{
      ChildA
    },
    setup(){

      const count = ref(0)
      const nameState = reactive({
        firstName: 'Spider',
        lastName: 'Man'
      })

      provide('username', 'Aman Bisht') // Makes a value available to all descendant components (not just direct children)

      // Here value can be changes from child as well
      // provide('count', count)

      // Now value cannot be change from child only parent can change it
      provide('count', readonly(count))

      provide('nameState', nameState)

      // To update provided value it is recommmended to pass handler function from parent to be called from consuming child

      const handleChange = (name1, name2)=>{
        nameState.firstName = name1
        nameState.lastName= name2
      }

      provide('handleChange', handleChange)

      return {
        count,
        ...toRefs(nameState)
      }

    },
}
</script>

<!-- 

In the composition API of vue 3 we have 'provide' and 'inject' function to provide value from a component to be consumed in any of descendant component.

In composition API to provide multiple value just call 'provide' function multiple time for each key. 

To make provided value read-only in nature so cannot be accidently change from child component use 'readonly' from composition API ::

 provide('secret', readonly(secret)) , Now secret key is readonly in descendant component. 

-->