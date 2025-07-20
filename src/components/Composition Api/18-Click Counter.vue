<template>

  <h2>CLICK COUNTER</h2>
  <button @click="incrementCount">Click {{ count }} Times</button>
</template>

<script>
import useCounter from './20-Composables';

export default {
  name: 'CLICK COUNTER',
  setup() {

    // Using composable
    const { count, incrementCount } = useCounter()

    return {
      count,
      incrementCount
    }

  }
}
</script>

<!-- 

In order to use COMPOSABLE just import and call it as a normal hook just like in REACT. Here this 1st limitation of mixins is solved by composable as now since a hook is just a function which is fully scoped locally so it does not conflict with component defination.  

-->