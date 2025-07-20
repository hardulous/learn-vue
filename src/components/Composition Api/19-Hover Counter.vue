<template>

  <h2>HOVER COUNTER</h2>
  <h2 @mouseover="incrementCount">Hovered {{ count }} Times</h2>

</template>

<script>
import useCounter from './20-Composables';

export default {
  name: 'HOVER COUNTER',
  setup() {
    // Using composable
    const { count, incrementCount } = useCounter(10)

    return {
      count,
      incrementCount
    }

  }
}
</script>

<!-- 

Consuming composable just like calling hook in REACT. The 2nd limitation of mixins is solved by composable as now we can pass data to composalbe at a time of calling them initially. 


-->