<template>
  
  <h2>Child C</h2>
  <h3>Injected value - {{ username }} {{ age }} {{ profession }}</h3>
</template>

<script>
export default {
  name: "Child C",
   inject: ['age', 'profession', 'username'],
}
</script>

<!-- 

Vue walks up the component tree when resolving an inject.The closest provide for that key 'username' is used. So in this case, the value of key username will be takemm from ChildB component which is closest rather than from top parent component.

-->