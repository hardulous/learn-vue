<template>

  <h2>SLOTS PROPS</h2>
  <h3 v-for="name in names" :key="name.firstName">
    <!-- {{ name.firstName }} {{ name.lastName }} -->

    <!-- Now by exposing props by slot it can be recieved by parent component for use -->
    <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
  </h3>
</template>

<script>
export default {
  name: 'SLOTS PROPS',
  data() {
    return {
      names: [
        {
          firstName: 'Bruce',
          lastName: 'Wayne'
        },
        {
          firstName: 'Clark',
          lastName: 'Kent'
        },
        {
          firstName: 'Princess',
          lastName: 'Diana'
        },
      ]
    }
  }
}
</script>

<!-- 

Here right now we are displaying list of user on the ui, Now lets say we need to display list of user on other parts of the app, On some page we need lastName to show 1st and on other firstName to show 1st. So we need parent component to decide what to show in ui. 

But in order to make parent decide thee structure of ui for this child component we need to send name object of names array available to parent for this we will use slot props. It is similar to applying props to component but this time on slot. 

-->