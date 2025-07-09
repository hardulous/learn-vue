<template>
  
  <h2>Child B</h2>
  <h3>Injected value - {{ username }} {{ age }} {{ profession }}</h3>
  <ChildC/>
</template>

<script>
import ChildC from './14-ChildC.vue'
export default {
  name: "Child B",
  components:{
    ChildC
  },
  inject: ['age', 'profession', 'username'],
  provide:{
    username: "Bruce Wayne"
  }
}
</script>

<!-- 

Here this component inject all the different keys coming from provide of Parent and ChildA component at the same time. 

-->