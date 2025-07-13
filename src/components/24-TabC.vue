<template>
  
  <h2>TAB C</h2>
  <input type="text" v-model="cardHolderName" placeholder="ENTER CARDHOLDER NAME">

</template>

<script>
export default {
    name: "TAB C",
    data(){
      return {
        cardHolderName: ''
      }
    }
}
</script>

<!-- 

Multi-step form tab c with some user detils to add, By-default on every state change on dynamic component this will be mounted and unmounted from dom result in its local state will be destroyed. But with <keep-alive> it will persist 

-->