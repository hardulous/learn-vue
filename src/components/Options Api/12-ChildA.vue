<template>
  
  <h2>Child A</h2>
  <h3>Injected value - {{ username }}</h3>
  <ChildB/>
</template>

<script>
import ChildB from './13-ChildB.vue'
export default {
  name: "Child A",
  components:{
    ChildB
  },
  inject:['username'],  // Available to be used in <template>
  provide:{
    age: 25,
    profession: 'Software Engineer'
  }
}
</script>

<!-- 

To get the value or inject the provide value from provider we use property called 'inject' of same options API, It is an array of property name in string that this componenet is injecting from provide option.

Here a component can be both a provider or injector

-->
